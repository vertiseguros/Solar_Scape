<script setup>
import { computed, reactive, ref, useTemplateRef, watch } from 'vue';
import { solarScapeConfig } from './config.js';
import { useSolarScapeScene } from './useSolarScapeScene.js';

const containerRef = useTemplateRef('container');
const filtersOpen = ref(false);
const filtersReady = ref(false);
const potentialInfoOpen = ref(false);
const voxelTransparency = ref(65);
const transparencyOpen = ref(false);
const activeViewMode = ref('perspective');
const sunSettingsOpen = ref(false);
const sunTime = ref(50);

const configuredFilterBounds = solarScapeConfig.filterBounds ?? {};

const filterBounds = reactive(Object.fromEntries(
  solarScapeConfig.filterableFields.map((field) => {
    const bounds = configuredFilterBounds[field] ?? { min: 0, max: 100, step: 1 };
    return [field, { min: bounds.min, max: bounds.max, step: bounds.step ?? 1 }];
  }),
));

const filterState = reactive(Object.fromEntries(
  solarScapeConfig.filterableFields.map((field) => {
    const bounds = configuredFilterBounds[field] ?? { min: 0, max: 100 };
    return [field, { min: bounds.min, max: bounds.max }];
  }),
));

const metadataFields = computed(() => solarScapeConfig.requiredMetadata.map((field) => ({
  key: field,
  label: solarScapeConfig.fieldLabels[field] ?? field,
})));

const filterFields = computed(() => solarScapeConfig.filterableFields.map((field) => ({
  key: field,
  label: solarScapeConfig.fieldLabels[field] ?? field,
})));

const mainViewFilterKey = 'Potential';

const mainViewFilterField = computed(() => filterFields.value.find((field) => field.key === mainViewFilterKey) ?? null);

const drawerFilterFields = computed(() => filterFields.value.filter((field) => field.key !== mainViewFilterKey));

const selection = reactive({
  status: 'idle',
  metadata: null,
  voxelPath: null,
  message: '',
});

function handleSelectionChange(nextSelection) {
  selection.status = nextSelection.status;
  selection.metadata = nextSelection.metadata;
  selection.voxelPath = nextSelection.voxelPath;
  selection.message = nextSelection.message;
}

function handleViewerError(message) {
  selection.status = 'error';
  selection.metadata = null;
  selection.voxelPath = null;
  selection.message = message;
}

function handleFilterBoundsChange(nextBounds) {
  filterFields.value.forEach(({ key }) => {
    if (!nextBounds[key]) {
      return;
    }

    filterBounds[key].min = nextBounds[key].min;
    filterBounds[key].max = nextBounds[key].max;
    filterBounds[key].step = nextBounds[key].step;
  });

  resetFilters();
  filtersReady.value = true;
}

const sceneController = useSolarScapeScene({
  containerRef,
  config: solarScapeConfig,
  onSelectionChange: handleSelectionChange,
  onFilterBoundsChange: handleFilterBoundsChange,
  onViewerError: handleViewerError,
});

watch(filterState, (nextState) => {
  if (!filtersReady.value) {
    return;
  }

  sceneController.setVoxelFilters(nextState);
}, { deep: true });

function toggleFilters() {
  filtersOpen.value = !filtersOpen.value;
}

function closeFilters() {
  filtersOpen.value = false;
}

function toggleTransparency() {
  transparencyOpen.value = !transparencyOpen.value;
}

function toggleSunSettings() {
  sunSettingsOpen.value = !sunSettingsOpen.value;
}

function togglePotentialInfo() {
  potentialInfoOpen.value = !potentialInfoOpen.value;
}

function setTopView() {
  sceneController.setTopView();
  activeViewMode.value = 'top';
}

function resetView() {
  sceneController.resetView();
  activeViewMode.value = 'perspective';
}

function toggleViewMode() {
  if (activeViewMode.value === 'top') {
    sceneController.resetView();
    activeViewMode.value = 'perspective';
    return;
  }

  sceneController.setTopView();
  activeViewMode.value = 'top';
}

function updateVoxelTransparency(event) {
  const nextValue = Number(event.target.value);
  voxelTransparency.value = nextValue;
  sceneController.setVoxelTransparency(nextValue);
}

function updateSunTime(event) {
  const nextValue = Number(event.target.value);
  sunTime.value = nextValue;
  sceneController.setSunTime(nextValue);
}

function formatSunTime(value) {
  const daylightHours = 12;
  const hourValue = 6 + ((value / 100) * daylightHours);
  const hours = Math.floor(hourValue);
  const minutes = Math.round((hourValue - hours) * 60);
  const adjustedHours = minutes === 60 ? hours + 1 : hours;
  const adjustedMinutes = minutes === 60 ? 0 : minutes;

  return `${String(adjustedHours).padStart(2, '0')}:${String(adjustedMinutes).padStart(2, '0')}`;
}

function resetFilters() {
  filterFields.value.forEach(({ key }) => {
    filterState[key].min = filterBounds[key].min;
    filterState[key].max = filterBounds[key].max;
  });
}

function updateFilterMin(key, event) {
  const nextValue = Number(event.target.value);
  filterState[key].min = Math.min(nextValue, filterState[key].max);
}

function updateFilterMax(key, event) {
  const nextValue = Number(event.target.value);
  filterState[key].max = Math.max(nextValue, filterState[key].min);
}

function getSliderStyle(key) {
  const bounds = filterBounds[key];
  const range = Math.max(bounds.max - bounds.min, 1);
  const left = ((filterState[key].min - bounds.min) / range) * 100;
  const right = 100 - ((filterState[key].max - bounds.min) / range) * 100;

  return {
    left: `${left}%`,
    right: `${right}%`,
  };
}

function formatDisplayValue(key, value, step = 1) {
  if (value === null || value === undefined || value === '') {
    return 'Missing';
  }

  const numericValue = Number(value);
  const prefix = solarScapeConfig.valuePrefixes?.[key] ?? '';

  if (!Number.isFinite(numericValue)) {
    return `${prefix}${String(value)}`;
  }

  const formattedValue = step < 1 ? numericValue.toFixed(1) : String(Math.round(numericValue));
  return `${prefix}${formattedValue}`;
}

function formatFilterValue(key, value, step) {
  if (!Number.isFinite(value)) {
    return '';
  }

  return formatDisplayValue(key, value, step);
}
</script>

<template>
  <main class="project-layout project-layout--viewer-only">
    <section ref="container" class="project-layout__viewer">
      <div v-if="selection.status === 'loading'" class="viewer-loading" role="status" aria-live="polite">
        <div class="viewer-loading__sun" aria-hidden="true">
          <span class="viewer-loading__core"></span>
          <span class="viewer-loading__rays"></span>
        </div>
        <p class="viewer-loading__label">{{ selection.message || 'Loading scene...' }}</p>
      </div>

      <button type="button" class="filter-trigger" @click="toggleFilters" aria-label="Open filters">
        <span class="filter-trigger__icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span class="filter-trigger__label">Filters</span>
      </button>

      <section class="scene-controls" aria-label="Scene controls">
        <button
          type="button"
          class="scene-controls__button scene-controls__button--icon"
          :class="{ 'scene-controls__button--active': transparencyOpen }"
          aria-label="Transparency"
          :aria-expanded="transparencyOpen ? 'true' : 'false'"
          aria-controls="scene-transparency-panel"
          @click="toggleTransparency"
        >
          <img class="scene-controls__icon-image" src="/icons/transparency.svg" alt="" width="24" height="24">
        </button>
        <button
          type="button"
          class="scene-controls__button scene-controls__button--icon"
          :class="{ 'scene-controls__button--active': activeViewMode === 'top' }"
          :aria-label="activeViewMode === 'top' ? 'Switch to perspective view' : 'Switch to top view'"
          @click="toggleViewMode"
        >
          <img class="scene-controls__icon-image" src="/icons/view.svg" alt="" width="24" height="24">
        </button>
        <button type="button" class="scene-controls__button scene-controls__button--icon" aria-label="Reset 3D view" @click="resetView">
          <img class="scene-controls__icon-image" src="/icons/reset.svg" alt="" width="24" height="24">
        </button>
        <button
          type="button"
          class="scene-controls__button scene-controls__button--icon"
          :class="{ 'scene-controls__button--active': sunSettingsOpen }"
          aria-label="Sun settings"
          :aria-expanded="sunSettingsOpen ? 'true' : 'false'"
          aria-controls="scene-sun-panel"
          @click="toggleSunSettings"
        >
          <img class="scene-controls__icon-image" src="/icons/sun.svg" alt="" width="24" height="24">
        </button>

        <div v-if="transparencyOpen" id="scene-transparency-panel" class="scene-controls__panel">
          <div class="scene-controls__header">
            <label class="scene-controls__label" for="voxel-transparency">Voxel transparency</label>
            <span class="scene-controls__value">{{ voxelTransparency }}%</span>
          </div>

          <input
            id="voxel-transparency"
            class="scene-controls__slider"
            type="range"
            min="0"
            max="100"
            step="1"
            :value="voxelTransparency"
            @input="updateVoxelTransparency"
          >
        </div>

        <div v-if="sunSettingsOpen" id="scene-sun-panel" class="scene-controls__panel scene-controls__panel--sun">
          <div class="scene-controls__header">
            <label class="scene-controls__label" for="scene-sun-time">Sun time</label>
            <span class="scene-controls__value">{{ formatSunTime(sunTime) }}</span>
          </div>

          <input
            id="scene-sun-time"
            class="scene-controls__slider"
            type="range"
            min="0"
            max="100"
            step="1"
            :value="sunTime"
            @input="updateSunTime"
          >

          <p class="scene-controls__caption">21 March, Rotterdam</p>
        </div>
      </section>

      <div v-if="selection.status === 'ready'" class="viewer-note">
        <section class="viewer-note__section">
          <h2 class="viewer-note__title">Solar envelope info</h2>

          <dl class="metadata-list metadata-list--compact">
            <div v-for="field in metadataFields" :key="field.key" class="metadata-list__row">
              <dt>{{ field.label }}</dt>
              <dd>{{ formatDisplayValue(field.key, selection.metadata?.[field.key]) }}</dd>
            </div>
          </dl>
        </section>
      </div>

      <div v-if="mainViewFilterField" class="viewer-bottom-filter">
        <section class="viewer-bottom-filter__card" :aria-label="`${mainViewFilterField.label} filter`">
          <div class="viewer-bottom-filter__header">
            <div class="viewer-bottom-filter__label-row">
              <label class="viewer-bottom-filter__label">{{ mainViewFilterField.label }}</label>
              <div class="viewer-bottom-filter__info">
                <button
                  type="button"
                  class="viewer-bottom-filter__info-button"
                  :aria-expanded="potentialInfoOpen ? 'true' : 'false'"
                  aria-controls="potential-filter-info"
                  aria-label="Explain potential"
                  @click="togglePotentialInfo"
                >
                  i
                </button>

                <div
                  v-if="potentialInfoOpen"
                  id="potential-filter-info"
                  class="viewer-bottom-filter__info-popover"
                  role="note"
                >
                  Ratio between the maximum buildable volume allowed by sun regulations and the existing built volume
                </div>
              </div>
            </div>
            <div class="range-slider__values">
              <span>{{ formatFilterValue(mainViewFilterField.key, filterState[mainViewFilterField.key].min, filterBounds[mainViewFilterField.key].step) }}</span>
              <span>{{ formatFilterValue(mainViewFilterField.key, filterState[mainViewFilterField.key].max, filterBounds[mainViewFilterField.key].step) }}</span>
            </div>
          </div>

          <div class="range-slider range-slider--floating">
            <div class="range-slider__track"></div>
            <div class="range-slider__active" :style="getSliderStyle(mainViewFilterField.key)"></div>
            <input
              class="range-slider__input"
              type="range"
              :min="filterBounds[mainViewFilterField.key].min"
              :max="filterBounds[mainViewFilterField.key].max"
              :step="filterBounds[mainViewFilterField.key].step"
              :value="filterState[mainViewFilterField.key].min"
              @input="updateFilterMin(mainViewFilterField.key, $event)"
            >
            <input
              class="range-slider__input"
              type="range"
              :min="filterBounds[mainViewFilterField.key].min"
              :max="filterBounds[mainViewFilterField.key].max"
              :step="filterBounds[mainViewFilterField.key].step"
              :value="filterState[mainViewFilterField.key].max"
              @input="updateFilterMax(mainViewFilterField.key, $event)"
            >
          </div>
        </section>
      </div>

      <div v-if="filtersOpen" class="filter-overlay" @click.self="closeFilters">
        <aside class="filter-drawer" aria-label="Filters">
          <div class="filter-drawer__header">
            <div class="filter-drawer__heading">
              <p class="filter-drawer__eyebrow">Voxel filters</p>
              <h2 class="filter-drawer__title">Refine the visible range</h2>
            </div>

            <button type="button" class="filter-close" @click="closeFilters" aria-label="Close filters">
              Close
            </button>
          </div>

          <p class="filter-drawer__copy">Adjust both handles to keep only the values you want visible in the scene.</p>

          <div class="filter-list">
            <section v-for="field in drawerFilterFields" :key="field.key" class="filter-group">
              <div class="filter-group__header">
                <label class="filter-group__label">{{ field.label }}</label>
                <div class="range-slider__values">
                  <span>{{ formatFilterValue(field.key, filterState[field.key].min, filterBounds[field.key].step) }}</span>
                  <span>{{ formatFilterValue(field.key, filterState[field.key].max, filterBounds[field.key].step) }}</span>
                </div>
              </div>
              <div class="range-slider">
                <div class="range-slider__track"></div>
                <div class="range-slider__active" :style="getSliderStyle(field.key)"></div>
                <input
                  class="range-slider__input"
                  type="range"
                  :min="filterBounds[field.key].min"
                  :max="filterBounds[field.key].max"
                  :step="filterBounds[field.key].step"
                  :value="filterState[field.key].min"
                  @input="updateFilterMin(field.key, $event)"
                >
                <input
                  class="range-slider__input"
                  type="range"
                  :min="filterBounds[field.key].min"
                  :max="filterBounds[field.key].max"
                  :step="filterBounds[field.key].step"
                  :value="filterState[field.key].max"
                  @input="updateFilterMax(field.key, $event)"
                >
              </div>
            </section>
          </div>

          <div class="filter-drawer__actions">
            <button type="button" class="filter-reset" @click="resetFilters">Reset</button>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>
