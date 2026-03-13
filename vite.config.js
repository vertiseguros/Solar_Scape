import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/Solar_Scape/',
  plugins: [vue()],
  server: {
    host: true,
  },
});