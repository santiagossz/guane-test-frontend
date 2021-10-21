import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import CharacterInfo from '../views/CharacterInfo.vue'
import ChractersGrid from '../components/CharactersGrid.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:character',
    name: 'Info',
    component: CharacterInfo
  },
  {
    path: '/characters',
    name: 'Characters',
    component: ChractersGrid
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
