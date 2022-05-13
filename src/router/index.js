import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexCollector from '../components/collector/IndexCollector.vue'
import CreateCollector from '../components/collector/CreateCollector.vue'
import EditCollector from '../components/collector/Edit.vue'
import LogIn from '../components/auth/LogIn.vue'
import SignUp from '../components/auth/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'login',
    component: LogIn
  },

  {
    path: '/register',
    name: 'register',
    component: SignUp
  },

  {
    path: '/index-collector',
    name: 'index',
    component: IndexCollector
  },

  {
    path: '/create-collector',
    name: 'create',
    component: CreateCollector
  },

  {
    path: '/edit-collector/:id',
    name: 'edit',
    component: EditCollector
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
