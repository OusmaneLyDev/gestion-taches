<template>
    <div class="container">
      <h2>Détails du Projet</h2>
      <div v-if="project">
        <p><strong>Nom:</strong> {{ project.name }}</p>
        <p><strong>Date de Début:</strong> {{ project.startDate }}</p>
        <p><strong>Date de Fin:</strong> {{ project.endDate }}</p>
      </div>
      <div v-else>
        <p>Projet non trouvé.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useProjectStore } from '../../stores/gestion';
  
  const props = defineProps({
    projectId: Number,
  });
  
  const projectStore = useProjectStore();
  const project = computed(() => projectStore.getProjectById(props.projectId));
  </script>
  