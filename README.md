# Solar_Scape

Reusable Vite + Vue shell for multiple Three.js projects.

## Structure

- `src/views`: general app pages such as the home screen
- `src/projects`: one folder per Three.js experience
- `src/projects/solar-scape`: Solar Scape viewer, Rhino loader logic, and metadata helpers
- `public/context`: place the clickable plot Rhino model here as `Plots.3dm`
- `public/sun_voxel`: place the shared voxel Rhino model here as `Voxel.3dm`

## Commands

- `npm install`
- `npm run dev`
- `npm run build`

## Adding another Three.js project

1. Add a new folder under `src/projects/<project-name>`.
2. Create its view component and scene hook there.
3. Register a route in `src/router/index.js`.
4. Add a link for it in `src/App.vue` or `src/views/HomeView.vue`.