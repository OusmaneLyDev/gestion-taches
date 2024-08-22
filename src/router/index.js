import { createRouter, createWebHistory } from 'vue-router'
 import HomeView from '../views/HomeView.vue'
 import projets from '../components/projets/Projets.vue'
 import taches from '../components/taches/Taches.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/taches',
      name: 'taches',
      component: taches
    },

    {
      path: '/projets',
      name: 'projets',
      component: projets
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
