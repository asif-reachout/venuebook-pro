import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
  // Public routes
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/venues/:id',
    name: 'VenueDetail',
    component: () => import('../views/VenueDetail.vue'),
  },
  {
    path: '/venues/:id/book',
    name: 'BookingForm',
    component: () => import('../views/BookingForm.vue'),
  },
  {
    path: '/booking-confirmation',
    name: 'BookingConfirmation',
    component: () => import('../views/BookingConfirmation.vue'),
  },

  // Admin routes
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('../views/AdminLogin.vue'),
    meta: { guestOnly: true },
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: () => import('../views/AdminDashboard.vue'),
    meta: { requiresAuth: true },
  },

  // 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guard
router.beforeEach(async (to) => {
  const authStore = useAuthStore()

  if (to.meta.guestOnly && authStore.user) {
    return { name: 'AdminDashboard' }
  }

  if (to.meta.requiresAuth && !authStore.user) {
    return { name: 'AdminLogin' }
  }
})

export default router
