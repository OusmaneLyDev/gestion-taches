<template>
    <div
      v-if="task"
      class="modal fade show"
      tabindex="-1"
      style="display: block; background-color: rgba(0, 0, 0, 0.5);"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier la tâche</h5>
            <button
              type="button"
              class="btn-close"
              @click="closeEdit"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateTask">
              <div class="mb-3">
                <label for="taskName" class="form-label">Nom</label>
                <input
                  type="text"
                  class="form-control"
                  id="taskName"
                  v-model="updatedTask.name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="taskDescription" class="form-label">Description</label>
                <textarea
                  class="form-control"
                  id="taskDescription"
                  v-model="updatedTask.description"
                  required
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="taskStartDate" class="form-label">Date de début</label>
                <input
                  type="date"
                  class="form-control"
                  id="taskStartDate"
                  v-model="updatedTask.startDate"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="taskEndDate" class="form-label">Date de fin</label>
                <input
                  type="date"
                  class="form-control"
                  id="taskEndDate"
                  v-model="updatedTask.endDate"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="taskProject" class="form-label">Projet</label>
                <select
                  class="form-select"
                  id="taskProject"
                  v-model="updatedTask.project"
                  required
                >
                  <option
                    v-for="project in projects"
                    :key="project.id"
                    :value="project.name"
                  >
                    {{ project.name }}
                  </option>
                </select>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="closeEdit"
                >
                  Annuler
                </button>
                <button type="submit" class="btn btn-primary">
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useProjectStore } from "../../stores/gestion"; // Ensure the correct path
  const projectStore = useProjectStore();
  
  const props = defineProps({
    task: {
      type: Object,
      required: true,
    },
    onUpdate: {
      type: Function,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
  });
  
  const updatedTask = ref({ ...props.task });
  const projects = ref(projectStore.projects);
  
  const updateTask = () => {
    props.onUpdate(updatedTask.value);
    closeEdit();
  };
  
  const closeEdit = () => {
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
  