import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
  // Public routes
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { title: 'VenueBook | Find Your Perfect Space' }
  },
  {
    path: '/venues/:id',
    name: 'VenueDetail',
    component: () => import('../views/VenueDetail.vue'),
    meta: { title: 'Venue Details | VenueBook' }
  },
  {
    path: '/venues/:id/book',
    name: 'BookingForm',
    component: () => import('../views/BookingForm.vue'),
    meta: { title: 'Book Venue | VenueBook' }
  },
  {
    path: '/booking-confirmation',
    name: 'BookingConfirmation',
    component: () => import('../views/BookingConfirmation.vue'),
    meta: { title: 'Booking Confirmed | VenueBook' }
  },

  // Admin routes
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('../views/AdminLogin.vue'),
    meta: { guestOnly: true, title: 'Admin Login | VenueBook' },
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: () => import('../views/AdminDashboard.vue'),
    meta: { requiresAuth: true, title: 'Admin Dashboard | VenueBook' },
  },

  // 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: { title: 'Page Not Found | VenueBook' }
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

  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
