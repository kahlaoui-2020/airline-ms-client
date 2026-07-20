import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '', redirect: '/aircraft' },
    {
      path: '/aircraft',
      name: 'Aircraft',
      component: () => import('../modules/aircraft/views/Aircraft.vue'),
    },
    {
      path: '/aircraft-model',
      name: 'Model',
      component: () => import('../modules/aircraft/views/AircraftModel.vue'),
    },
    {
      path: '/manufacturer',
      name: 'Manufacturer',
      component: () => import('../modules/manufacturer/components/Manufacturer.vue'),
    },
    {
      path: '/airport',
      name: 'Airport',
      component: () => import('../modules/airport/views/Airport.vue'),
    },
    {
      path: '/airline',
      name: 'Airline',
      component: () => import('../modules/airline/views/Airline.vue'),
    },

    {
      path: '/logout',
      name: 'Lougout',
      component: () => import('../modules/aircraft/views/Aircraft.vue'),
    },
  ],
})

export default router
