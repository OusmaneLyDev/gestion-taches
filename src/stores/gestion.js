import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    projects: [],
  }),
  actions: {
    addProject(project) {
      project.id = Date.now();
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
export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
      console.log("Task added:", task);
    },

    removeTask(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks.splice(index, 1);
        console.log("Tache supprimer à l'index:", index);
      }
    },

    clearTasks() {
      this.tasks = [];
      console.log("All tasks cleared");
    },
  },
});
