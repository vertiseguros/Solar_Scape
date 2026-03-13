<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute();

const projectLinks = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Solar Scape',
    to: '/projects/solar-scape',
  },
];
</script>

<template>
  <div class="app-frame">
    <header class="app-header">
      <h1 class="app-header__title">MVRDV NEXT</h1>

      <nav class="app-nav">
        <RouterLink
          v-for="link in projectLinks"
          :key="link.to"
          :to="link.to"
          class="app-nav__link"
          :class="{ 'app-nav__link--active': route.path === link.to }"
        >
          {{ link.name }}
        </RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>