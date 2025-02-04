import { createRouter, createWebHistory } from 'vue-router'
import InsertComponent from  '@/components/insert_component/Code.vue'
import Introdaction from '@/components/Introdaction.vue'
import DataBinding from '@/components/data_binding/Code.vue'
import Eventhandling from '@/components/event_handling/Code.vue'
import CoditionalRendering from '@/components/conditional_rendering/Code.vue'
import Props from '@/components/props/Code.vue'
import Emits from '@/components/emit/Code.vue'
import Slots from '@/components/slots/Description.vue'
import ScopedSlots from '@/components/scoped_slotes/Description.vue'
import StateManagment from '@/components/state_managment/Description.vue'

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
    },
    {
      path:'/slots',
      name: 'slots',
      component: Slots,
    },
    {
      path:'/scopedSlots',
      name: 'scopedSlots',
      component: ScopedSlots,
    },
    {
      path:'/stateManagment',
      name: 'stateManagment',
      component: StateManagment,
    },


  ],
  
})

export default router
