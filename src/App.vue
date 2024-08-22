<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/Projets.vue'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="./components/Projets">Taches</RouterLink>
        <RouterLink to="./components/Taches">Projets</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
