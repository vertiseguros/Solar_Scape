import { onBeforeUnmount, onMounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Rhino3dmLoader } from 'three/addons/loaders/3DMLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
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
  const defaultCameraUp = new THREE.Vector3(0, 0, 1);
  const voxelMeshMetadata = new Map();
  const voxelFilters = Object.fromEntries(
    (config.filterableFields ?? []).map((field) => [field, { min: null, max: null }]),
  );
  const voxelDisplayState = {
    opacity: 0.35,
    transparent: true,
  };
  const sunState = {
    timePercent: 50,
  };

  let animationFrameId = 0;
  let resizeObserver;
  let scene;
  let camera;
  let perspectiveCamera;
  let orthographicCamera;
  let renderer;
  let composer;
  let renderPass;
  let ssaoPass;
  let outlinePass;
  let fxaaPass;
  let controls;
  let sunLight;
  let sunLightTarget;
  let fillLight;
  let hemiLight;
  let ambientLight;
  let staticContextObject = null;
  let voxelObject = null;
  let sizeRetryFrameId = 0;
  let pointerState = null;
  let initialFramingObjects = [];
  let orthographicHalfHeight = 100;
  let currentViewMode = 'perspective';

  function emitSelection(payload) {
    onSelectionChange(payload);
  }

  function createSkyBackground() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 512;

    const context = canvas.getContext('2d');
    if (!context) {
      return new THREE.Color('#dfeaf4');
    }

    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#a9d6ff');
    gradient.addColorStop(0.45, '#d7ecff');
    gradient.addColorStop(1, '#f4f5f2');
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  function computeSolarDirection(timePercent) {
    const latitude = THREE.MathUtils.degToRad(51.9244);
    const dayOfYear = 80;
    const declination = THREE.MathUtils.degToRad(23.44 * Math.sin((2 * Math.PI * (dayOfYear - 81)) / 365));
    const solarHour = 6 + ((timePercent / 100) * 12);
    const hourAngle = THREE.MathUtils.degToRad((solarHour - 12) * 15);

    const east = -Math.cos(declination) * Math.sin(hourAngle);
    const north = (Math.sin(declination) * Math.cos(latitude)) - (Math.cos(declination) * Math.sin(latitude) * Math.cos(hourAngle));
    const up = (Math.sin(declination) * Math.sin(latitude)) + (Math.cos(declination) * Math.cos(latitude) * Math.cos(hourAngle));

    return {
      direction: new THREE.Vector3(east, north, Math.max(up, 0.05)).normalize(),
      altitude: up,
    };
  }

  function applySunSettings() {
    if (!sunLight || !sunLightTarget || !initialFramingObjects.length) {
      return;
    }

    box.makeEmpty();
    initialFramingObjects.forEach((object) => box.expandByObject(object));

    if (box.isEmpty()) {
      return;
    }

    box.getSize(size);
    box.getCenter(center);

    const { direction, altitude } = computeSolarDirection(sunState.timePercent);
    const maxPlan = Math.max(size.x, size.y, 1);
    const lightDistance = Math.max(maxPlan * 2.6, size.z * 4, 220);
    const shadowSpan = Math.max(maxPlan * 1.25, 140);
    const shadowDepth = Math.max(lightDistance + (size.z * 8), 900);
    const daylightFactor = THREE.MathUtils.clamp((altitude + 0.05) / 0.85, 0.18, 1);

    sunLight.position.copy(center).addScaledVector(direction, lightDistance);
    sunLightTarget.position.copy(center);
    sunLight.intensity = 2.6 * daylightFactor;
    sunLight.castShadow = true;
    sunLight.shadow.camera.left = -shadowSpan;
    sunLight.shadow.camera.right = shadowSpan;
    sunLight.shadow.camera.top = shadowSpan;
    sunLight.shadow.camera.bottom = -shadowSpan;
    sunLight.shadow.camera.near = 0.1;
    sunLight.shadow.camera.far = shadowDepth;
    sunLight.shadow.bias = -0.00002;
    sunLight.shadow.normalBias = 0.01;
    sunLight.shadow.camera.updateProjectionMatrix();
    sunLight.shadow.needsUpdate = true;

    if (fillLight) {
      fillLight.intensity = 0.5 + (0.7 * daylightFactor);
    }

    if (hemiLight) {
      hemiLight.intensity = 0.35 + (0.35 * daylightFactor);
    }

    if (ambientLight) {
      ambientLight.intensity = 0.08 + (0.14 * daylightFactor);
    }
  }

  function createControls({ allowRotate }) {
    const nextControls = new OrbitControls(camera, renderer.domElement);
    nextControls.enableDamping = true;
    nextControls.dampingFactor = 0.08;
    nextControls.enablePan = true;
    nextControls.screenSpacePanning = true;
    nextControls.enableRotate = allowRotate;
    nextControls.mouseButtons.LEFT = allowRotate ? THREE.MOUSE.ROTATE : THREE.MOUSE.PAN;
    nextControls.mouseButtons.RIGHT = THREE.MOUSE.PAN;
    nextControls.mouseButtons.MIDDLE = THREE.MOUSE.DOLLY;
    return nextControls;
  }

  function getViewportAspect() {
    const container = containerRef.value;
    const width = container?.clientWidth ?? 1;
    const height = container?.clientHeight ?? 1;
    return width / height;
  }

  function updateOrthographicFrustum(width, height) {
    const aspect = width / height;
    orthographicCamera.left = -orthographicHalfHeight * aspect;
    orthographicCamera.right = orthographicHalfHeight * aspect;
    orthographicCamera.top = orthographicHalfHeight;
    orthographicCamera.bottom = -orthographicHalfHeight;
    orthographicCamera.updateProjectionMatrix();
  }

  function setActiveCamera(nextCamera, viewMode) {
    const previousTarget = controls?.target?.clone() ?? center.clone();

    camera = nextCamera;
    currentViewMode = viewMode;
    renderPass.camera = camera;
    if (ssaoPass) {
      ssaoPass.camera = camera;
    }
    outlinePass.renderCamera = camera;

    controls?.dispose();
    controls = createControls({ allowRotate: viewMode !== 'top-orthographic' });
    controls.target.copy(previousTarget);
    controls.update();

    setSize();
  }

  function createScene() {
    THREE.Object3D.DEFAULT_UP.set(0, 0, 1);

    scene = new THREE.Scene();
    scene.background = createSkyBackground();

    perspectiveCamera = new THREE.PerspectiveCamera(40, 1, 0.1, 3000);
    perspectiveCamera.position.set(-220, -190, 150);
    perspectiveCamera.up.copy(defaultCameraUp);

    orthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 3000);
    orthographicCamera.up.set(0, 1, 0);

    camera = perspectiveCamera;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;

    composer = new EffectComposer(renderer);

    renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    ssaoPass = new SSAOPass(scene, camera, 1, 1);
    ssaoPass.kernelRadius = 16;
    ssaoPass.minDistance = 0.005;
    ssaoPass.maxDistance = 0.1;
    composer.addPass(ssaoPass);

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

    controls = createControls({ allowRotate: true });

    sunLight = new THREE.DirectionalLight('#ffffff', 2.4);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.set(4096, 4096);
    sunLightTarget = new THREE.Object3D();
    sunLight.target = sunLightTarget;

    fillLight = new THREE.DirectionalLight('#ffffff', 1.2);
    fillLight.position.set(130, 80, 110);

    hemiLight = new THREE.HemisphereLight('#ffffff', '#f2f2f2', 0.6);

    ambientLight = new THREE.AmbientLight('#ffffff', 0.14);

    scene.add(sunLight, sunLightTarget, fillLight, hemiLight, ambientLight);
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

    perspectiveCamera.aspect = width / height;
    perspectiveCamera.updateProjectionMatrix();
    updateOrthographicFrustum(width, height);
    renderer.setSize(width, height, false);
    composer.setSize(width, height);

    const pixelRatio = renderer.getPixelRatio();
    ssaoPass?.setSize(width * pixelRatio, height * pixelRatio);
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

    if (currentViewMode === 'top-orthographic') {
      const aspect = getViewportAspect();
      const maxPlanSize = Math.max(size.y, size.x / aspect, 1);
      const distance = Math.max(size.z * 4, maxPlanSize * 3, 120);

      orthographicHalfHeight = (maxPlanSize * fitOffset) / 2;
      updateOrthographicFrustum(aspect, 1);
      orthographicCamera.up.set(0, 1, 0);
      orthographicCamera.position.set(center.x, center.y, center.z + distance);
      orthographicCamera.near = Math.max(distance / 200, 0.1);
      orthographicCamera.far = distance * 20;
      orthographicCamera.updateProjectionMatrix();

      controls.target.copy(center);
      controls.update();
      return;
    }

    const maxSize = Math.max(size.x, size.y, size.z);
    const fitHeightDistance = maxSize / (2 * Math.atan((Math.PI * camera.fov) / 360));
    const fitWidthDistance = fitHeightDistance / camera.aspect;
    const distance = fitOffset * Math.max(fitHeightDistance, fitWidthDistance);

    const direction = controls.target.clone().sub(camera.position).normalize().multiplyScalar(distance);

    camera.up.copy(defaultCameraUp);
    controls.target.copy(center);

    camera.near = Math.max(distance / 100, 0.1);
    camera.far = distance * 100;
    camera.updateProjectionMatrix();
    camera.position.copy(controls.target).sub(direction);
    controls.update();
  }

  function updateVoxelMaterial(material) {
    if (material?.color?.isColor) {
      material.userData.originalVoxelColor ??= material.color.clone();
      material.color.copy(material.userData.originalVoxelColor);
    }

    if (material?.emissive?.isColor && material.userData.originalVoxelColor) {
      material.emissive.copy(material.userData.originalVoxelColor).multiplyScalar(0.12);
      material.emissiveIntensity = 0.35;
    }

    if ('metalness' in material) {
      material.metalness = 0;
    }

    if ('roughness' in material) {
      material.roughness = Math.min(material.roughness ?? 1, 0.7);
    }

    material.transparent = voxelDisplayState.transparent;
    material.opacity = voxelDisplayState.opacity;
    material.depthWrite = true;
    material.depthTest = true;
    material.needsUpdate = true;
  }

  function applyVoxelMaterialState(root = voxelObject) {
    if (!root) {
      return;
    }

    root.traverse((child) => {
      if (!child.isMesh) {
        return;
      }

      if (Array.isArray(child.material)) {
        child.material.forEach(updateVoxelMaterial);
        return;
      }

      updateVoxelMaterial(child.material);
    });
  }

  function decorateVoxelMesh(mesh) {
    if (!mesh.isMesh) {
      return;
    }

    mesh.castShadow = true;
    mesh.receiveShadow = false;

    if (Array.isArray(mesh.material)) {
      mesh.material = mesh.material.map((material) => material.clone());
      mesh.material.forEach(updateVoxelMaterial);
      return;
    }

    mesh.material = mesh.material.clone();
    updateVoxelMaterial(mesh.material);
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

  function getLayerForMesh(rootObject, mesh) {
    const layers = rootObject?.userData?.layers;
    if (!rootObject || !Array.isArray(layers) || !mesh?.isMesh) {
      return null;
    }

    const layerIndex = mesh.userData?.attributes?.layerIndex;
    if (typeof layerIndex !== 'number') {
      return null;
    }

    return layers[layerIndex] ?? null;
  }

  function tintLayerMeshes(rootObject, layerName, colorValue) {
    if (!rootObject || !layerName) {
      return;
    }

    const targetColor = new THREE.Color(colorValue);

    rootObject.traverse((child) => {
      if (!child.isMesh) {
        return;
      }

      const layer = getLayerForMesh(rootObject, child);
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

  function applyContextLayerMaterial(rootObject, layerName) {
    if (!rootObject || !layerName) {
      return;
    }

    rootObject.traverse((child) => {
      if (!child.isMesh) {
        return;
      }

      const layer = getLayerForMesh(rootObject, child);
      if (!layer || layer.name !== layerName) {
        return;
      }

      const createMaterial = () => new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.9,
        metalness: 0,
      });

      if (Array.isArray(child.material)) {
        child.material = child.material.map(() => createMaterial());
        return;
      }

      child.material = createMaterial();
    });
  }

  function setContextShadowState(rootObject) {
    if (!rootObject) {
      return;
    }

    rootObject.traverse((child) => {
      if (!child.isMesh) {
        return;
      }

      child.castShadow = false;
      child.receiveShadow = true;

      if (Array.isArray(child.material)) {
        child.material = child.material.map((material) => material.clone());
        return;
      }

      child.material = child.material.clone();
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

  function setTopView() {
    if (!initialFramingObjects.length) {
      return;
    }

    setActiveCamera(orthographicCamera, 'top-orthographic');
    fitCameraToSelection(initialFramingObjects, 1.1);
  }

  function resetView() {
    if (!initialFramingObjects.length) {
      return;
    }

    setActiveCamera(perspectiveCamera, 'perspective');
    fitCameraToSelection(initialFramingObjects, 0.5);
  }

  function setVoxelTransparency(transparencyPercent) {
    const normalizedTransparency = THREE.MathUtils.clamp(Number(transparencyPercent) || 0, 0, 100);
    const opacity = 1 - ((normalizedTransparency / 100) * 0.95);

    voxelDisplayState.transparent = normalizedTransparency > 0;
    voxelDisplayState.opacity = opacity;
    applyVoxelMaterialState();
  }

  function setSunTime(timePercent) {
    sunState.timePercent = THREE.MathUtils.clamp(Number(timePercent) || 0, 0, 100);
    applySunSettings();
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

      setContextShadowState(staticContextObject);
      applyContextLayerMaterial(staticContextObject, 'Context');
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

      initialFramingObjects = staticContextObject ? [staticContextObject, voxelObject] : [voxelObject];
      applySunSettings();
      fitCameraToSelection(initialFramingObjects, 0.5);

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
    resetView,
    setSunTime,
    setTopView,
    setVoxelFilters,
    setVoxelTransparency,
  };
}