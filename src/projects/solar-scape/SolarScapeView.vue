<script setup>
import { computed, reactive, ref, useTemplateRef, watch } from 'vue';
import { solarScapeConfig } from './config.js';
import { useSolarScapeScene } from './useSolarScapeScene.js';

const containerRef = useTemplateRef('container');
const filtersOpen = ref(false);
const filtersReady = ref(false);

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
      <button type="button" class="filter-trigger" @click="toggleFilters" aria-label="Open filters">
        <span class="filter-trigger__icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span class="filter-trigger__label">Filters</span>
      </button>

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
            <section v-for="field in filterFields" :key="field.key" class="filter-group">
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
