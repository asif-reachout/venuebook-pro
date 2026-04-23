<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

    <!-- Mobile Overlay -->
    <div v-if="sidebarOpen" @click="sidebarOpen = false" class="fixed inset-0 bg-black/60 z-30 lg:hidden"></div>

    <!-- Mobile Top Bar -->
    <div
      class="lg:hidden fixed top-0 inset-x-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/5 flex items-center justify-between px-4 py-3.5 transition-colors duration-300">
      <div class="flex items-center gap-2">
        <img src="/logo.png" alt="VenueBook" class="w-7 h-7 rounded-lg shadow-sm" />
        <span class="font-bold text-sm text-slate-900 dark:text-white">VenueBook Admin</span>
      </div>
      <div class="flex items-center gap-2">
        <!-- Theme Toggle Mobile -->
        <button @click="themeStore.toggle()"
          class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition text-slate-500 dark:text-slate-400">
          <svg v-if="themeStore.isDark" class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 16a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
          <svg v-else class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
        <!-- Menu toggle -->
        <button @click="sidebarOpen = !sidebarOpen"
          class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition">
          <svg class="w-5 h-5 text-slate-500 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Sidebar -->
    <aside :class="[
      'fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-white/5 flex flex-col z-40 transition-all duration-300',
      'lg:translate-x-0',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]">
      <!-- Logo -->
      <div class="p-6 border-b border-slate-200 dark:border-white/5 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <img src="/logo.png" alt="VenueBook" class="w-9 h-9 rounded-xl shadow-sm" />
          <div>
            <p class="font-bold text-sm text-slate-900 dark:text-white">VenueBook</p>
            <p class="text-xs text-slate-500">Admin Panel</p>
          </div>
        </div>
      </div>

      <!-- Nav -->
      <nav class="flex-1 p-4 space-y-1">
        <div
          class="flex items-center gap-3 px-3 py-2.5 bg-indigo-50 dark:bg-indigo-600/10 border border-indigo-100 dark:border-indigo-500/20 rounded-xl text-indigo-600 dark:text-indigo-300 text-sm font-medium">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Bookings
        </div>
        <router-link to="/"
          class="flex items-center gap-3 px-3 py-2.5 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Public Site
        </router-link>
      </nav>



      <!-- User + Logout -->
      <div class="p-4 border-t border-slate-200 dark:border-white/5">
        <div class="bg-slate-100 dark:bg-white/5 rounded-xl p-3 flex items-center gap-3 mb-3">
          <div
            class="w-8 h-8 bg-indigo-100 dark:bg-indigo-600/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase">
            {{ authStore.user?.email?.charAt(0) }}
          </div>
          <div class="min-w-0">
            <p class="text-xs text-slate-900 dark:text-white font-medium truncate">{{ authStore.user?.email }}</p>
            <p class="text-xs text-slate-500">Administrator</p>
          </div>
        </div>
        <button @click="handleLogout"
          class="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign Out
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8 transition-colors duration-300">

      <!-- Header -->
      <div class="mb-8 flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold mb-1 text-slate-900 dark:text-white">Bookings</h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm">Manage and respond to booking requests</p>
        </div>

        <!-- Theme Toggle Desktop -->
        <button @click="themeStore.toggle()"
          class="hidden lg:flex relative p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group">
          <div
            class="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>
          <svg v-if="themeStore.isDark" class="w-5 h-5 text-amber-400 relative z-10" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 16a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
          <svg v-else class="w-5 h-5 text-indigo-600 relative z-10" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-8">
        <div
          class="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/8 rounded-2xl p-5 dark:shadow-none transition-colors duration-300">
          <p class="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Total</p>
          <p class="text-3xl font-bold text-slate-900 dark:text-white">{{ store.total }}</p>
        </div>
        <div
          class="bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/15 rounded-2xl p-5 transition-colors duration-300">
          <p class="text-amber-600 dark:text-amber-400/70 text-xs font-medium uppercase tracking-wider mb-2">Pending</p>
          <p class="text-3xl font-bold text-amber-600 dark:text-amber-400">{{ store.pending }}</p>
        </div>
        <div
          class="bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/15 rounded-2xl p-5 transition-colors duration-300">
          <p class="text-emerald-600 dark:text-emerald-400/70 text-xs font-medium uppercase tracking-wider mb-2">
            Approved</p>
          <p class="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{{ store.approved }}</p>
        </div>
        <div
          class="bg-red-50 dark:bg-red-500/5 border border-red-200 dark:border-red-500/15 rounded-2xl p-5 transition-colors duration-300">
          <p class="text-red-600 dark:text-red-400/70 text-xs font-medium uppercase tracking-wider mb-2">Rejected</p>
          <p class="text-3xl font-bold text-red-600 dark:text-red-400">{{ store.rejected }}</p>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="flex gap-2 mb-6">
        <button v-for="tab in tabs" :key="tab.value" @click="activeTab = tab.value" :class="[
          'px-4 py-2 rounded-xl text-sm font-medium transition-all',
          activeTab === tab.value
            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
            : 'bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-white/10'
        ]">
          {{ tab.label }}
          <span
            :class="['ml-1.5 text-xs px-1.5 py-0.5 rounded-full', activeTab === tab.value ? 'bg-white/20' : 'bg-slate-300 dark:bg-white/10']">{{
              tab.count }}</span>
        </button>
      </div>

      <!-- Loading -->
      <div v-if="store.loading" class="space-y-3">
        <div v-for="n in 4" :key="n" class="bg-slate-200 dark:bg-white/5 rounded-2xl h-16 animate-pulse"></div>
      </div>

      <!-- Error -->
      <div v-else-if="store.error"
        class="text-red-600 dark:text-red-400 text-sm p-4 bg-red-50 dark:bg-red-500/10 rounded-xl border border-red-200 dark:border-transparent">
        {{ store.error }}
      </div>

      <!-- Bookings Table -->
      <div v-else-if="filteredBookings.length > 0"
        class="bg-white dark:bg-white/3 border border-slate-200 dark:border-white/8 rounded-2xl overflow-hidden overflow-x-auto shadow-sm dark:shadow-none transition-colors duration-300">
        <table class="w-full text-sm">
          <thead>
            <tr
              class="border-b border-slate-200 dark:border-white/8 text-xs text-slate-500 uppercase tracking-wider bg-slate-50 dark:bg-transparent">
              <th class="text-left px-6 py-4 font-medium">Guest</th>
              <th class="text-left px-6 py-4 font-medium">Venue</th>
              <th class="text-left px-6 py-4 font-medium">Date</th>
              <th class="text-left px-6 py-4 font-medium">Slot</th>
              <th class="text-left px-6 py-4 font-medium">Status</th>
              <th class="text-right px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-white/5">
            <tr v-for="booking in filteredBookings" :key="booking.id"
              class="hover:bg-slate-50 dark:hover:bg-white/3 transition-colors group">

              <!-- Guest -->
              <td class="px-6 py-4">
                <p class="font-medium text-slate-900 dark:text-white">{{ booking.name }}</p>
                <p class="text-slate-500 text-xs mt-0.5">{{ booking.email }}</p>
                <p v-if="booking.phone" class="text-slate-500 text-xs mt-0.5">{{ booking.phone }}</p>
              </td>

              <!-- Venue -->
              <td class="px-6 py-4">
                <span class="text-slate-700 dark:text-slate-300">{{ booking.venues?.name || '—' }}</span>
              </td>

              <!-- Date -->
              <td class="px-6 py-4 text-slate-700 dark:text-slate-300">
                {{ formatDate(booking.date) }}
              </td>

              <!-- Slot -->
              <td class="px-6 py-4">
                <span
                  class="text-slate-600 dark:text-slate-400 text-xs bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-lg inline-block whitespace-nowrap">
                  {{ booking.time_slot }}
                </span>
              </td>

              <!-- Status Badge -->
              <td class="px-6 py-4">
                <span :class="statusClass(booking.status)"
                  class="text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                  {{ statusLabel(booking.status) }}
                </span>
              </td>

              <!-- Actions -->
              <td class="px-6 py-4 text-right">
                <div v-if="booking.status === 'pending'" class="flex items-center justify-end gap-2">
                  <button @click="store.updateStatus(booking.id, 'approved')"
                    :disabled="store.updatingId === booking.id"
                    class="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-lg transition disabled:opacity-50">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Approve
                  </button>
                  <button @click="store.updateStatus(booking.id, 'rejected')"
                    :disabled="store.updatingId === booking.id"
                    class="flex items-center gap-1.5 bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-xs font-medium px-3 py-1.5 rounded-lg transition disabled:opacity-50">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Reject
                  </button>
                </div>

                <!-- Already actioned -->
                <button v-else @click="store.updateStatus(booking.id, 'pending')"
                  :disabled="store.updatingId === booking.id"
                  class="text-slate-500 dark:text-slate-600 hover:text-slate-700 dark:hover:text-slate-400 text-xs transition disabled:opacity-50">
                  Reset
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20">
        <div class="w-16 h-16 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-slate-400 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <p class="text-slate-500 text-sm">No {{ activeTab !== 'all' ? activeTab : '' }} bookings yet</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const sidebarOpen = ref(false)
import { useAuthStore } from '../stores/auth'
import { useBookingsStore } from '../stores/bookings'
import { useThemeStore } from '../stores/theme'

const router = useRouter()
const authStore = useAuthStore()
const store = useBookingsStore()
const themeStore = useThemeStore()
const activeTab = ref('all')

const tabs = computed(() => [
  { label: 'All', value: 'all', count: store.total },
  { label: 'Pending', value: 'pending', count: store.pending },
  { label: 'Approved', value: 'approved', count: store.approved },
  { label: 'Rejected', value: 'rejected', count: store.rejected },
])

const filteredBookings = computed(() => {
  if (activeTab.value === 'all') return store.bookings
  return store.bookings.filter(b => b.status === activeTab.value)
})

function statusClass(status) {
  return {
    pending: 'bg-amber-100 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-600 dark:text-amber-400',
    approved: 'bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
    rejected: 'bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400',
  }[status] || 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400'
}

function statusLabel(status) {
  return { pending: '⏳ Pending', approved: 'Approved', rejected: 'Rejected' }[status] || status
}

function formatDate(dateStr) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('en-MY', { day: 'numeric', month: 'short', year: 'numeric' })
}

async function handleLogout() {
  await authStore.logout()
  router.push('/admin/login')
}

onMounted(() => {
  store.fetchBookings()
})
</script>
