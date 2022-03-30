import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/selected-products',
    name: 'SelectedProducts',
    component: () => import('../views/SelectedProducts.vue')
  },
  {
    path: '/about',
    name: 'About Us',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact Us',
    component: () => import('../views/Contact.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
