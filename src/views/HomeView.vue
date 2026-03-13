<script setup>
import { RouterLink } from 'vue-router';

const projects = [
  {
    title: 'Solar Scape',
    path: '/projects/solar-scape',
    description: 'Interactive Rhino plot viewer with Plot-linked voxel metadata and a coordinated analysis sidebar.',
  },
];
</script>

<template>
  <main class="home-view">
    <section class="hero-card">
      <p class="hero-card__eyebrow">MVRDV NEXT technologies</p>
      <h2>Solar Scape</h2>
      <p>
        The app is structured around a single Three.js experience under <strong>src/projects/solar-scape</strong>
        with dedicated viewer, loader, config, and metadata modules.
      </p>
    </section>

    <section class="project-grid">
      <RouterLink
        v-for="project in projects"
        :key="project.path"
        :to="project.path"
        class="project-card"
      >
        <p class="project-card__eyebrow">Project</p>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </RouterLink>
    </section>
  </main>
</template>