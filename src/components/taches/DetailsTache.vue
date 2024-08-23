<template>
    <div v-if="task" class="modal fade show" tabindex="-1" style="display: block; background-color: rgba(0, 0, 0, 0.5);" aria-modal="true" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Détails de la tâche</h5>
            <button type="button" class="btn-close" @click="closeDetails" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p><strong>Nom :</strong> {{ task.name }}</p>
            <p><strong>Description :</strong> {{ task.description }}</p>
            <p><strong>Date de début :</strong> {{ task.startDate }}</p>
            <p><strong>Date de fin :</strong> {{ task.endDate }}</p>
            <p><strong>Projet :</strong> {{ task.project }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeDetails">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const props = defineProps({
    task: {
      type: Object,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
  });
  
  const closeDetails = () => {
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
  