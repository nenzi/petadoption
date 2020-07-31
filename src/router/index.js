import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dogs from '../views/dogs.vue'
import cats from '../views/cats.vue'
import pets from '../views/pets.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dogs',
    name: 'dogs',
    component: dogs
  },
  {
    path: '/cats',
    name: 'cats',
    component: cats
  },
  {
    path: '/pets',
    name: 'pets',
    component: pets
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
