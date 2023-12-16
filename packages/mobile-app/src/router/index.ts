import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/weather',
      name: 'weather',
      component: () => import('../views/WeatherView.vue')
    },
    {
      path: '/places',
      name: 'places',
      component: () => import('../views/PlacesView.vue')
    },
    {
      path: '/places/:id',
      name: 'place',
      component: () => import('../views/PlaceView.vue')
    },
    {
      path: '/place-creation',
      name: 'create-place',
      component: () => import('../views/AddPlaceView.vue')
    }
  ]
})

export default router
