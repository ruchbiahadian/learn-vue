import { createRouter, createWebHashHistory } from 'vue-router'
import Modules from "./modules";


const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: Modules.LandingPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
