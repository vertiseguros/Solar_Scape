const baseUrl = import.meta.env.BASE_URL;

export const solarScapeConfig = {
  title: 'Solar Scape',
/*   staticContextModelPath: `${baseUrl}context/Context.3dm`, */
  staticContextModelPath: `${baseUrl}context/260311 context.3dm`,
  sunVoxelModelPath: `${baseUrl}sun_voxel/Voxel_v2.3dm`,
  rhinoLibraryPath: 'https://cdn.jsdelivr.net/npm/rhino3dm@8.4.0/',
  clickSelectionMaxDurationMs: 180,
  clickSelectionMaxMovementPx: 6,
  selectionMetadata: [
    'Plot',
  ],
  requiredMetadata: [
    'Plot',
    'Max_height',
    'Occupied_voxels',
    'Max_voxels',
    'Potential',
  ],
  filterableFields: [
    'Max_height',
    'Occupied_voxels',
    'Max_voxels',
    'Potential',
  ],
  fieldLabels: {
    Plot: 'Plot',
    Max_height: 'Max height',
    Occupied_voxels: 'Current volume',
    Max_voxels: 'Max volume',
    Potential: 'Buildable potential',
  },
  filterBounds: {
    Max_height: { min: 200, max: 200, step: 1 },
    Occupied_voxels: { min: 0, max: 3500, step: 1 },
    Max_voxels: { min: 0, max: 30000, step: 1 },
    Potential: { min: 0, max: 150, step: 1 },
  },
  valuePrefixes: {
    Potential: 'x',
  },
};
