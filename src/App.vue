<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/Navbar.vue'
</script>
<template>
  <navbar/>
    <header>
      <nav>
        <RouterLink to="/taches"><li>Taches</li></RouterLink>
        <RouterLink to="/projets"><li>Projets</li></RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>
</style>
