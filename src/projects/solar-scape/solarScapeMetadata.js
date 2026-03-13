const NUMERIC_FIELDS = new Set([
  'Max_height',
  'Occupied_voxels',
  'Max_voxels',
  'Potential',
]);

export function normalizePlotKey(value) {
  if (value === undefined || value === null) {
    return '';
  }

  const stringValue = String(value).trim();
  if (!stringValue) {
    return '';
  }

  const numeric = Number(stringValue);
  return Number.isFinite(numeric) ? String(numeric) : stringValue;
}

function normalizeUserStrings(userStrings) {
  if (!userStrings) {
    return {};
  }

  if (Array.isArray(userStrings)) {
    if (userStrings.length > 0 && Array.isArray(userStrings[0])) {
      return Object.fromEntries(userStrings);
    }

    const entries = {};
    for (let index = 0; index < userStrings.length - 1; index += 2) {
      const key = userStrings[index];
      const value = userStrings[index + 1];
      if (typeof key === 'string') {
        entries[key] = value;
      }
    }
    return entries;
  }

  if (typeof userStrings === 'object') {
    return { ...userStrings };
  }

  return {};
}

function normalizeFieldValue(field, value) {
  if (value === undefined || value === null) {
    return '';
  }

  const stringValue = String(value).trim();
  if (!NUMERIC_FIELDS.has(field)) {
    return stringValue;
  }

  const numeric = Number(stringValue);
  return Number.isFinite(numeric) ? numeric : stringValue;
}

export function extractMetadataFromMesh(mesh, requiredFields) {
  const attributeStrings = normalizeUserStrings(mesh?.userData?.attributes?.userStrings);
  const geometryStrings = normalizeUserStrings(mesh?.userData?.attributes?.geometry?.userStrings);
  const merged = {
    ...geometryStrings,
    ...attributeStrings,
  };

  return requiredFields.reduce((metadata, field) => {
    metadata[field] = normalizeFieldValue(field, merged[field]);
    return metadata;
  }, {});
}

export function findSelectableMesh(startObject, rootObject, requiredFields) {
  let current = startObject;

  while (current) {
    if (current.isMesh) {
      const metadata = extractMetadataFromMesh(current, requiredFields);
      if (normalizePlotKey(metadata.Plot)) {
        return { mesh: current, metadata };
      }
    }

    if (current === rootObject) {
      break;
    }

    current = current.parent;
  }

  return null;
}

export function findMeshesByPlot(rootObject, plotValue) {
  const normalizedPlot = normalizePlotKey(plotValue);
  if (!rootObject || !normalizedPlot) {
    return [];
  }

  const matches = [];
  rootObject.traverse((child) => {
    if (!child.isMesh) {
      return;
    }

    const metadata = extractMetadataFromMesh(child, ['Plot']);
    if (normalizePlotKey(metadata.Plot) === normalizedPlot) {
      matches.push(child);
    }
  });

  return matches;
}

export function mergeMetadataFromMeshes(meshes, requiredFields) {
  return requiredFields.reduce((metadata, field) => {
    const value = meshes
      .map((mesh) => extractMetadataFromMesh(mesh, [field])[field])
      .find((candidate) => candidate !== '' && candidate !== undefined && candidate !== null);

    metadata[field] = value ?? '';
    return metadata;
  }, {});
}
