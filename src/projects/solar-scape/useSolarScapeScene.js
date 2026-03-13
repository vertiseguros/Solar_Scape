import { onBeforeUnmount, onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Rhino3dmLoader } from 'three/addons/loaders/3DMLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import {
  extractMetadataFromMesh,
  findMeshesByPlot,
  findSelectableMesh,
  mergeMetadataFromMeshes,
} from './solarScapeMetadata.js';

export function useSolarScapeScene(options) {
  const {
    containerRef,
    config,
    onSelectionChange,
    onFilterBoundsChange = () => {},
    onViewerError,
  } = options;

  const loader = new Rhino3dmLoader();
  loader.setLibraryPath(config.rhinoLibraryPath);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  const box = new THREE.Box3();
  const voxelMeshMetadata = new Map();
  const voxelFilters = Object.fromEntries(
    (config.filterableFields ?? []).map((field) => [field, { min: null, max: null }]),
  );

  let animationFrameId = 0;
  let resizeObserver;
  let scene;
  let camera;
  let renderer;
  let composer;
  let outlinePass;
  let fxaaPass;
  let controls;
  let staticContextObject = null;
  let voxelObject = null;
  let sizeRetryFrameId = 0;
  let pointerState = null;

  function emitSelection(payload) {
    onSelectionChange(payload);
  }

  function createScene() {
    THREE.Object3D.DEFAULT_UP.set(0, 0, 1);

    scene = new THREE.Scene();
    scene.background = new THREE.Color('#f1f1f1');

    camera = new THREE.PerspectiveCamera(40, 1, 0.1, 3000);
    camera.position.set(-220, -190, 150);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    composer = new EffectComposer(renderer);

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    outlinePass = new OutlinePass(new THREE.Vector2(1, 1), scene, camera);
    outlinePass.visibleEdgeColor.set('#ffe36e');
    outlinePass.hiddenEdgeColor.set('#c59d16');
    outlinePass.edgeStrength = 4;
    outlinePass.edgeGlow = 0.15;
    outlinePass.edgeThickness = 1.2;
    outlinePass.pulsePeriod = 0;
    composer.addPass(outlinePass);

    fxaaPass = new ShaderPass(FXAAShader);
    composer.addPass(fxaaPass);

    composer.addPass(new OutputPass());

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    const keyLight = new THREE.DirectionalLight('#fff3d8', 3);
    keyLight.position.set(-80, -60, 150);

    const fillLight = new THREE.DirectionalLight('#94b6ff', 1.4);
    fillLight.position.set(130, 80, 110);

    const ambientLight = new THREE.AmbientLight('#f1f5ff', 0.8);

    scene.add(keyLight, fillLight, ambientLight);
  }

  function setSize() {
    const container = containerRef.value;
    if (!container) {
      return false;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;

    if (!width || !height) {
      return false;
    }

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    composer.setSize(width, height);

    const pixelRatio = renderer.getPixelRatio();
    outlinePass.setSize(width * pixelRatio, height * pixelRatio);
    fxaaPass.material.uniforms.resolution.value.set(
      1 / (width * pixelRatio),
      1 / (height * pixelRatio),
    );
    return true;
  }

  function ensureRenderableSize(attemptsRemaining = 10) {
    if (setSize() || attemptsRemaining <= 0) {
      return;
    }

    sizeRetryFrameId = window.requestAnimationFrame(() => {
      ensureRenderableSize(attemptsRemaining - 1);
    });
  }

  function animate() {
    controls.update();
    composer.render();
    animationFrameId = window.requestAnimationFrame(animate);
  }

  function fitCameraToSelection(objects, fitOffset = 1.2) {
    box.makeEmpty();
    objects.forEach((object) => box.expandByObject(object));

    if (box.isEmpty()) {
      return;
    }

    box.getSize(size);
    box.getCenter(center);

    const maxSize = Math.max(size.x, size.y, size.z);
    const fitHeightDistance = maxSize / (2 * Math.atan((Math.PI * camera.fov) / 360));
    const fitWidthDistance = fitHeightDistance / camera.aspect;
    const distance = fitOffset * Math.max(fitHeightDistance, fitWidthDistance);

    const direction = controls.target.clone().sub(camera.position).normalize().multiplyScalar(distance);

    controls.target.copy(center);

    camera.near = Math.max(distance / 100, 0.1);
    camera.far = distance * 100;
    camera.updateProjectionMatrix();
    camera.position.copy(controls.target).sub(direction);
    controls.update();
  }

  function decorateVoxelMesh(mesh) {
    if (!mesh.isMesh) {
      return;
    }

    if (Array.isArray(mesh.material)) {
      mesh.material = mesh.material.map((material) => material.clone());
      return;
    }

    mesh.material = mesh.material.clone();
    mesh.material.transparent = true;
    mesh.material.opacity = 0.35;
  }

  function normalizeFilterValue(value) {
    if (value === '' || value === null || value === undefined) {
      return null;
    }

    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : null;
  }

  function buildFilterBounds() {
    return Object.fromEntries((config.filterableFields ?? []).map((field) => {
      const configuredBounds = config.filterBounds?.[field];
      if (configuredBounds) {
        return [field, {
          min: configuredBounds.min,
          max: configuredBounds.max,
          step: configuredBounds.step ?? 1,
        }];
      }

      const values = [];

      voxelMeshMetadata.forEach((metadata) => {
        const numericValue = Number(metadata[field]);
        if (Number.isFinite(numericValue)) {
          values.push(numericValue);
        }
      });

      if (!values.length) {
        return [field, { min: 0, max: 1, step: 1 }];
      }

      const min = Math.min(...values);
      const max = Math.max(...values);
      const step = values.some((value) => !Number.isInteger(value)) ? 0.1 : 1;

      return [field, {
        min,
        max,
        step,
      }];
    }));
  }

  function meshMatchesFilters(mesh) {
    const metadata = voxelMeshMetadata.get(mesh);
    if (!metadata) {
      return true;
    }

    return Object.entries(voxelFilters).every(([field, range]) => {
      if (range.min === null && range.max === null) {
        return true;
      }

      const numericValue = Number(metadata[field]);
      if (!Number.isFinite(numericValue)) {
        return false;
      }

      if (range.min !== null && numericValue < range.min) {
        return false;
      }

      if (range.max !== null && numericValue > range.max) {
        return false;
      }

      return true;
    });
  }

  function applyVoxelFilters() {
    if (!voxelObject) {
      return;
    }

    voxelObject.traverse((child) => {
      if (!child.isMesh) {
        return;
      }

      child.visible = meshMatchesFilters(child);
    });
  }

  function tintLayerMeshes(rootObject, layerName, colorValue) {
    const layers = rootObject?.userData?.layers;
    if (!rootObject || !Array.isArray(layers) || !layerName) {
      return;
    }

    const targetColor = new THREE.Color(colorValue);

    rootObject.traverse((child) => {
      if (!child.isMesh) {
        return;
      }

      const layerIndex = child.userData?.attributes?.layerIndex;
      if (typeof layerIndex !== 'number') {
        return;
      }

      const layer = layers[layerIndex];
      if (!layer || layer.name !== layerName) {
        return;
      }

      if (Array.isArray(child.material)) {
        child.material = child.material.map((material) => {
          const nextMaterial = material.clone();
          nextMaterial.color.copy(targetColor);
          return nextMaterial;
        });
        return;
      }

      child.material = child.material.clone();
      child.material.color.copy(targetColor);
    });
  }

  function resetSelectedMesh() {
    outlinePass.selectedObjects = [];
  }

  function highlightSelectedMeshes(meshes) {
    resetSelectedMesh();
    outlinePass.selectedObjects = meshes;
  }

  function clearSelectionState() {
    resetSelectedMesh();
    emitSelection({
      status: 'idle',
      metadata: null,
      voxelPath: null,
      message: '',
    });
  }

  function load3dm(path) {
    return new Promise((resolve, reject) => {
      loader.load(path, resolve, undefined, reject);
    });
  }

  function resetPointerState() {
    pointerState = null;
  }

  function getPointerTravel(event) {
    if (!pointerState) {
      return 0;
    }

    const deltaX = event.clientX - pointerState.startX;
    const deltaY = event.clientY - pointerState.startY;
    return Math.hypot(deltaX, deltaY);
  }

  function onPointerDown(event) {
    if (event.button !== 0) {
      return;
    }

    pointerState = {
      startTime: performance.now(),
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
    };
  }

  function onPointerMove(event) {
    if (!pointerState) {
      return;
    }

    if (getPointerTravel(event) > (config.clickSelectionMaxMovementPx ?? 6)) {
      pointerState.moved = true;
    }
  }

  function onPointerUp(event) {
    if (!pointerState || event.button !== 0) {
      resetPointerState();
      return;
    }

    const duration = performance.now() - pointerState.startTime;
    const moved = pointerState.moved || getPointerTravel(event) > (config.clickSelectionMaxMovementPx ?? 6);

    resetPointerState();

    if (moved || duration > (config.clickSelectionMaxDurationMs ?? 180)) {
      return;
    }

    onViewerClick(event);
  }

  function resolveVoxelSelection(plot) {
    if (!voxelObject) {
      throw new Error('The voxel metadata model is not loaded.');
    }

    if (!String(plot ?? '').trim()) {
      throw new Error('The selected block is missing a Plot value.');
    }

    const matchingMeshes = findMeshesByPlot(voxelObject, plot).filter((mesh) => mesh.visible && meshMatchesFilters(mesh));
    if (!matchingMeshes.length) {
      throw new Error(`No voxel metadata was found for Plot ${plot}.`);
    }

    return {
      voxelPath: config.sunVoxelModelPath,
      metadata: mergeMetadataFromMeshes(matchingMeshes, config.requiredMetadata),
      matchingMeshes,
    };
  }

  async function onViewerClick(event) {
    if (!voxelObject) {
      return;
    }

    const bounds = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObject(voxelObject, true).filter((hit) => hit.object.visible);

    if (!hits.length) {
      clearSelectionState();
      return;
    }

    const selection = findSelectableMesh(hits[0].object, voxelObject, config.selectionMetadata);
    if (!selection) {
      emitSelection({
        status: 'error',
        metadata: null,
        voxelPath: null,
        message: 'The clicked object does not expose Plot metadata.',
      });
      return;
    }

    emitSelection({
      status: 'loading',
      metadata: null,
      voxelPath: null,
      message: 'Loading matching voxel metadata.',
    });

    try {
      const {
        voxelPath,
        metadata,
        matchingMeshes,
      } = resolveVoxelSelection(selection.metadata.Plot);

      highlightSelectedMeshes(matchingMeshes);

      fitCameraToSelection(matchingMeshes, 1.35);

      emitSelection({
        status: 'ready',
        metadata,
        voxelPath,
        message: '',
      });
    } catch (error) {
      emitSelection({
        status: 'error',
        metadata: selection.metadata,
        voxelPath: null,
        message: error instanceof Error ? error.message : 'Unable to load the matching voxel metadata.',
      });
    }
  }

  async function loadSceneAssets() {
    emitSelection({
      status: 'loading',
      metadata: null,
      voxelPath: null,
      message: 'Loading context and voxel models.',
    });

    try {
      const sceneAssets = await Promise.all([
        config.staticContextModelPath ? load3dm(config.staticContextModelPath) : Promise.resolve(null),
        load3dm(config.sunVoxelModelPath),
      ]);

      [staticContextObject, voxelObject] = sceneAssets;

      tintLayerMeshes(staticContextObject, 'Sunspots', '#ffd84d');
      voxelObject.traverse((child) => {
        decorateVoxelMesh(child);

        if (child.isMesh) {
          voxelMeshMetadata.set(child, extractMetadataFromMesh(child, config.requiredMetadata));
        }
      });

      onFilterBoundsChange(buildFilterBounds());
      voxelObject.visible = true;
      applyVoxelFilters();

      if (staticContextObject) {
        scene.add(staticContextObject);
      }
      scene.add(voxelObject);

      const framingObjects = staticContextObject ? [staticContextObject, voxelObject] : [voxelObject];
      fitCameraToSelection(framingObjects);

      emitSelection({
        status: 'idle',
        metadata: null,
        voxelPath: null,
        message: '',
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to load the Rhino models.';
      emitSelection({
        status: 'error',
        metadata: null,
        voxelPath: null,
        message: `Failed to load ${config.staticContextModelPath} or ${config.sunVoxelModelPath}. ${message}`,
      });
      onViewerError(message);
    }
  }

  function setVoxelFilters(nextFilters) {
    (config.filterableFields ?? []).forEach((field) => {
      const range = nextFilters?.[field] ?? {};
      voxelFilters[field] = {
        min: normalizeFilterValue(range.min),
        max: normalizeFilterValue(range.max),
      };
    });

    resetSelectedMesh();
    applyVoxelFilters();
  }

  onMounted(async () => {
    try {
      createScene();

      const container = containerRef.value;
      if (!container) {
        throw new Error('The viewer container did not mount.');
      }

      container.appendChild(renderer.domElement);
      renderer.domElement.addEventListener('pointerdown', onPointerDown);
      renderer.domElement.addEventListener('pointermove', onPointerMove);
      renderer.domElement.addEventListener('pointerup', onPointerUp);
      renderer.domElement.addEventListener('pointercancel', resetPointerState);
      renderer.domElement.addEventListener('pointerleave', resetPointerState);

      resizeObserver = new ResizeObserver(() => setSize());
      resizeObserver.observe(container);

      ensureRenderableSize();
      animate();
      await loadSceneAssets();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to initialize the viewer.';
      emitSelection({
        status: 'error',
        metadata: null,
        voxelPath: null,
        message,
      });
      onViewerError(message);
    }
  });

  onBeforeUnmount(() => {
    window.cancelAnimationFrame(animationFrameId);
    window.cancelAnimationFrame(sizeRetryFrameId);
    renderer?.domElement.removeEventListener('pointerdown', onPointerDown);
    renderer?.domElement.removeEventListener('pointermove', onPointerMove);
    renderer?.domElement.removeEventListener('pointerup', onPointerUp);
    renderer?.domElement.removeEventListener('pointercancel', resetPointerState);
    renderer?.domElement.removeEventListener('pointerleave', resetPointerState);
    resizeObserver?.disconnect();
    resetSelectedMesh();
    resetPointerState();
    controls?.dispose();
    composer?.dispose();
    loader.dispose();
    renderer?.dispose();
  });

  return {
    setVoxelFilters,
  };
}
