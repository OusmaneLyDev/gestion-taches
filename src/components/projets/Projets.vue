<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">

  <div class="container mt-4">
    <h2 class="mb-4">Liste des Projets</h2>

    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>Nom</th>
          <th>Date de Début</th>
          <th>Date de Fin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.name }}</td>
          <td>{{ project.startDate }}</td>
          <td>{{ project.endDate }}</td>
          <td>
            <button @click="showDetails(project.id)" class="btn btn-info btn-sm me-2">
              <i class="bi bi-eye"></i>
            </button>
            <button @click="editProject(project.id)" class="btn btn-warning btn-sm me-2">
              <i class="bi bi-pencil"></i>
            </button>
            <button @click="deleteProject(project.id)" class="btn btn-danger btn-sm">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Bouton pour afficher/masquer le formulaire d'ajout -->
    <button @click="toggleAddForm" class="btn btn-success mt-4">
      {{ showAddForm ? 'Annuler' : 'Ajouter un Projet' }}
    </button>

    <!-- Affichage conditionnel des composants -->
    <AjouterProjet v-if="showAddForm" @project-added="onProjectAdded" />
    <DetailsProjet v-if="showDetailsComponent" :project-id="selectedProjectId" />
    <ModifierProjet v-if="showEditComponent" :project-id="selectedProjectId" @project-updated="onProjectUpdated" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProjectStore } from '../../stores/gestion';
import AjouterProjet from './AjouterProjet.vue';
import DetailsProjet from './DetailsProjet.vue';
import ModifierProjet from './ModifierProjet.vue';

const projectStore = useProjectStore();
const projects = computed(() => projectStore.projects);

const showAddForm = ref(false);
const showDetailsComponent = ref(false);
const showEditComponent = ref(false);
const selectedProjectId = ref(null);

const toggleAddForm = () => {
  showAddForm.value = !showAddForm.value;
  showDetailsComponent.value = false;
  showEditComponent.value = false;
};

const showDetails = (id) => {
  selectedProjectId.value = id;
  showDetailsComponent.value = true;
  showAddForm.value = false;
  showEditComponent.value = false;
};

const editProject = (id) => {
  selectedProjectId.value = id;
  showEditComponent.value = true;
  showAddForm.value = false;
  showDetailsComponent.value = false;
};

const deleteProject = (id) => {
  projectStore.deleteProject(id);
};

const onProjectAdded = (newProject) => {
  projectStore.addProject(newProject);
  toggleAddForm();
};

const onProjectUpdated = (updatedProject) => {
  projectStore.updateProject(updatedProject);
  showEditComponent.value = false;
};
</script>
