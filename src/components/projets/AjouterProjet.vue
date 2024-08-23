<template>
    <div class="form-container">
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
  
  <style scoped>
  .form-container {
    background: #f8f9fa; 
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    max-width: 600px;
    margin: auto;
    margin-top: 20px;
  }
  
  .form-label {
    font-weight: bold;
  }
  
  .form-control {
    border-radius: 4px;
    border: 1px solid #ced4da;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    font-weight: bold;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #004085;
  }
  </style>
  