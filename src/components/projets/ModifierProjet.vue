<template>
  <div class="edit-container">
    <h2>Modifier le Projet</h2>
    <form @submit.prevent="updateProject">
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
      <button type="submit" class="btn btn-primary">Mettre à Jour</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProjectStore } from '../../stores/gestion';

const props = defineProps({
  projectId: Number,
});

const name = ref('');
const startDate = ref('');
const endDate = ref('');

const emit = defineEmits(['project-updated', 'close']);
const projectStore = useProjectStore();

onMounted(() => {
  const project = projectStore.getProjectById(props.projectId);
  if (project) {
    name.value = project.name;
    startDate.value = project.startDate;
    endDate.value = project.endDate;
  }
});

const updateProject = () => {
  const updatedProject = {
    id: props.projectId,
    name: name.value,
    startDate: startDate.value,
    endDate: endDate.value,
  };
  emit('project-updated', updatedProject);
};

</script>

<style scoped>
.edit-container {
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
  position: relative;
}
</style>
