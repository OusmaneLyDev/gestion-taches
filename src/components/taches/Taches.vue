    <script setup>
  import { ref } from "vue";
  import { useTaskStore } from "../../stores/gestion";
  import TaskDetails from "./DetailsTache.vue";
  import ModifierTache from "./ModifierTache.vue";
  import AddTache from "./AjouterTache.vue";
  
  const taskStore = useTaskStore();
  const tasks = taskStore.tasks;
  const selectedTask = ref(null);
  const taskToEdit = ref(null);
  const isAddingTask = ref(false);
  
  const showDetails = (task) => {
    selectedTask.value = task;
  };
  
  const closeDetails = () => {
    selectedTask.value = null;
  };
  
  const editTask = (task) => {
    taskToEdit.value = { ...task };
  };
  
  const updateTask = (updatedTask) => {
    const index = tasks.findIndex((t) => t.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = updatedTask;
    }
    closeEdit();
  };
  
  const closeEdit = () => {
    taskToEdit.value = null;
  };
  
  const removeTask = (index) => {
    taskStore.removeTask(index);
  };
  
  const showAddTaskForm = () => {
    isAddingTask.value = true;
  };
  
  const addTask = (newTask) => {
    taskStore.addTask(newTask);
    closeAddTask();
  };
  
  const closeAddTask = () => {
    isAddingTask.value = false;
  };
  </script>
<template>
    <body>
        <div class="container mt-4">
      <h2 class="mb-4">Liste des Tâches</h2>
  
      <div class="table-container">
        <table class="table table-striped table-bordered table-responsive">
          <thead class="table-dark">
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Date de Début</th>
              <th>Date de Fin</th>
              <th>Projet</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in tasks" :key="task.id">
              <td>{{ task.name }}</td>
              <td>{{ task.description }}</td>
              <td>{{ task.startDate }}</td>
              <td>{{ task.endDate }}</td>
              <td>{{ task.project }}</td>
              <td>
                <button @click="showDetails(task)" class="btn btn-info btn-sm me-2">
                  <i class="bi bi-eye"></i>
                </button>
                <button @click="editTask(task)" class="btn btn-warning btn-sm me-2">
                  <i class="bi bi-pencil"></i>
                </button>
                <button @click="removeTask(task.id)" class="btn btn-danger btn-sm">
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
            <tr v-if="tasks.length === 0">
              <td colspan="7" class="text-center">Aucune tâche disponible.</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Bouton pour afficher/masquer le formulaire d'ajout -->
      <button @click="showAddTaskForm" class="btn btn-success mt-4">
        {{ isAddingTask ? 'Annuler' : 'Ajouter une Tâche' }}
      </button>
  
      <!-- Affichage conditionnel des composants -->
      <ModifierTache v-if="taskToEdit" :task="taskToEdit" :onUpdate="updateTask" :onClose="closeEdit" />
      <TaskDetails v-if="selectedTask" :task="selectedTask" :onClose="closeDetails" />
      <AddTache v-if="isAddingTask" :onAdd="addTask" :onClose="closeAddTask" />
    </div>
    </body>
  </template>
  
  
  <style scoped>


h2 {
  border: 2px solid;
  font-weight: bold; 
  color: #eeff00; 
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); 
  text-align: center; 
  margin-bottom: 20px; 
}

.table-container {
  background: rgba(63, 61, 61, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 20px;
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f2f2f2;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-dark {
  background-color: #343a40;
  color: #fff;
}
@media (max-width: 576px) {
  .table th, .table td {
    font-size: 0.875rem;
  }

  .table-responsive {
    overflow-y: hidden;
  }
  .table-container {
  padding: 0px;
  margin: 0;
}
body{
    padding: 0px;
}
}
</style>
