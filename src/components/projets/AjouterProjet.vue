<template>
    <div class="container">
      <h2>Ajouter un Projet</h2>
      <form @submit.prevent="submitProject">
        <div class="mb-3">
          <label for="name" class="form-label">Nom du Projet</label>
          <input v-model="name" type="text" class="form-control" id="name" required>
        </div>
        <div class="mb-3">
          <label for="startDate" class="form-label">Date de Début</label>
          <input v-model="startDate" type="date" class="form-control" id="startDate" required>
        </div>
        <div class="mb-3">
          <label for="endDate" class="form-label">Date de Fin</label>
          <input v-model="endDate" type="date" class="form-control" id="endDate" required>
        </div>
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>
    </div>
  </template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useProjectStore } from '../../stores/gestion';

const name = ref('');
const startDate = ref('');
const endDate = ref('');
const router = useRouter();
const projectStore = useProjectStore();

const submitProject = () => {
  const newProject = {
    name: name.value,
    startDate: startDate.value,
    endDate: endDate.value,
  };
  projectStore.addProject(newProject);
  router.push('/projets');
};
</script>
  