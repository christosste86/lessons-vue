import { createRouter, createWebHistory } from 'vue-router'
import InsertComponent from  '@/components/insert_component/component.vue'
import Introdaction from '@/components/introdaction.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Introdaction,
    },
    {
      path: '/insertComponent',
      name: 'insertComponent',
      component: InsertComponent,
    },
  ],
})

export default router
