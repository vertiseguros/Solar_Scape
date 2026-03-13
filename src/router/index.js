import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SolarScapeView from '../projects/solar-scape/SolarScapeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects/solar-scape',
      name: 'solar-scape',
      component: SolarScapeView,
    },
  ],
});

export default router;