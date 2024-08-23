<template>
    <div v-if="isVisible" class="modal fade show" tabindex="-1" style="display: block; background-color: rgba(0, 0, 0, 0.5);" aria-modal="true" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter une nouvelle tâche</h5>
            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submit">
              <div class="mb-3">
                <label for="taskName" class="form-label">Nom</label>
                <input type="text" class="form-control" id="taskName" v-model="task.name" required>
              </div>
              <div class="mb-3">
                <label for="taskDescription" class="form-label">Description</label>
                <textarea class="form-control" id="taskDescription" v-model="task.description" required></textarea>
              </div>
              <div class="mb-3">
                <label for="taskStartDate" class="form-label">Date de début</label>
                <input type="date" class="form-control" id="taskStartDate" v-model="task.startDate" required>
              </div>
              <div class="mb-3">
                <label for="taskEndDate" class="form-label">Date de fin</label>
                <input type="date" class="form-control" id="taskEndDate" v-model="task.endDate" required>
              </div>
              <div class="mb-3">
                <label for="taskProject" class="form-label">Projet</label>
                <select class="form-select" id="taskProject" v-model="task.project" required>
                  <option v-if="projects.length === 0" disabled>Aucun projet disponible</option>
                  <option v-for="project in projects" :key="project.id" :value="project.name">
                    {{ project.name }}
                  </option>
                </select>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="close">Annuler</button>
                <button type="submit" class="btn btn-primary">Ajouter</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useProjectStore } from "../../stores/gestion";
  
  const props = defineProps({
    onAdd: {
      type: Function,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
  });
  
  const isVisible = true; // For the modal to be visible
  const task = ref({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    project: ""
  });
  
  // Récupérer les projets à partir du store Pinia
  const projectStore = useProjectStore();
  const projects = projectStore.projects;
  
  const submit = () => {
    props.onAdd(task.value);
  };
  
  const close = () => {
    props.onClose();
  };
  </script>
  
  <style scoped>
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  