// Composables
import { createRouter, createWebHistory } from 'vue-router'

import MiComponent from '../components/ContenidoApp.vue'
import HelloWorld from '../components/HelloWorld.vue'
import EditUserView from '../components/EditUserView.vue'
import CreateUserView from '../components/CreateUserView.vue'

const routes = [

  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },

  {
    path: '/users',
    name: 'users',
    component: MiComponent
  },

  {
    path: '/users/create',
    name: 'create',
    component: CreateUserView
  },

  {
    path: '/users/:id/edit',
    name: 'edit',
    component: EditUserView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
