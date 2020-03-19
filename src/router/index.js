import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Roster from '../views/Roster.vue'
import Game from '../views/Game.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/roster',
    name: 'Roster',
    component: Roster
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router