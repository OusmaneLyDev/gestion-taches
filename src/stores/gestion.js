import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    projects: [],
  }),
  actions: {
    addProject(project) {
      project.id = Date.now(); // Exemple de génération d'ID
      this.projects.push(project);
    },
    updateProject(updatedProject) {
      const index = this.projects.findIndex(project => project.id === updatedProject.id);
      if (index !== -1) this.projects[index] = updatedProject;
    },
    deleteProject(id) {
      this.projects = this.projects.filter(project => project.id !== id);
    },
    getProjectById(id) {
      return this.projects.find(project => project.id === id);
    }
  },
});
