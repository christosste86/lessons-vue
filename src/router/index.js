import { createRouter, createWebHistory } from 'vue-router'
import InsertComponent from  '@/components/insert_component/Component.vue'
import Introdaction from '@/components/Introdaction.vue'
import DataBinding from '@/components/data_binding/Component.vue'
import Eventhandling from '@/components/event_handling/Component.vue'
import CoditionalRendering from '@/components/conditional_rendering/Component.vue'
import Props from '@/components/props/Component.vue'
import Emits from '@/components/emit/example/Component.vue'

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
    {
      path: '/dataBinding',
      name: 'dataBinding',
      component: DataBinding,
    },
    {
      path: '/eventHandling',
      name: 'eventHandling',
      component: Eventhandling,
    },
    {
      path: '/conditionRendering',
      name: 'conditionRendering',
      component: CoditionalRendering,
    },
    {
      path: '/props',
      name: 'props',
      component: Props,
    },
    {
      path:'/emits',
      name: 'emits',
      component: Emits,
    }
  ],
  
})

export default router
