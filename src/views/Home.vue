<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

    <!-- Navbar -->
    <nav
      class="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="VenueBook Logo" class="w-8 h-8 rounded-lg shadow-sm" />
          <span class="font-bold text-lg tracking-tight text-slate-900 dark:text-white">VenueBook</span>
        </div>

        <!-- Nav Actions -->
        <div class="flex items-center gap-3">
          <!-- Theme Toggle -->
          <button @click="themeStore.toggle()"
            class="relative p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg v-if="themeStore.isDark" class="w-4 h-4 text-amber-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 16a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            <svg v-else class="w-4 h-4 text-indigo-600 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Admin link -->
          <router-link to="/admin/login"
            class="px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-500/30 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 text-sm font-medium transition-all duration-300 shadow-sm flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Admin Portal
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-36 pb-28 px-6 overflow-hidden">
      <!-- Background blobs -->
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/8 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none">
      </div>
      <div
        class="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/8 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none">
      </div>
      <div
        class="absolute top-20 right-1/4 w-72 h-72 bg-pink-500/6 dark:bg-pink-600/8 rounded-full blur-3xl pointer-events-none">
      </div>

      <!-- Grid pattern overlay -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none dark:opacity-100 opacity-50">
      </div>

      <div class="relative max-w-4xl mx-auto text-center">
        <span
          class="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
          <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
          Premium Event Spaces — Malaysia
        </span>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Find the Perfect Venue
          <span class="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            For Your Event
          </span>
        </h1>
        <p class="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Browse our curated collection of stunning event spaces. From grand ballrooms to intimate garden pavilions —
          your perfect event starts here.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#venues"
            class="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
            Browse Venues
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#how-it-works"
            class="inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-medium px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
            How it Works
          </a>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section
      class="border-y border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/2 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center">
        <div>
          <p class="text-3xl font-bold text-indigo-600 dark:text-white">{{ venuesStore.venues.length }}+</p>
          <p class="text-slate-500 dark:text-slate-500 text-sm mt-1">Premium Venues</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-indigo-600 dark:text-white">500+</p>
          <p class="text-slate-500 dark:text-slate-500 text-sm mt-1">Events Hosted</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-indigo-600 dark:text-white">100%</p>
          <p class="text-slate-500 dark:text-slate-500 text-sm mt-1">Satisfaction Rate</p>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <span
            class="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            Simple Process
          </span>
          <h2 class="text-3xl md:text-4xl font-bold mb-3">Book in 3 Easy Steps</h2>
          <p class="text-slate-500 dark:text-slate-400 max-w-md mx-auto">No payment required. Just browse, choose, and
            submit your request.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div v-for="(step, i) in steps" :key="i"
            class="relative flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <!-- Step number -->
            <div
              class="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-5 shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition-transform duration-300">
              <span v-html="step.icon" class="text-white"></span>
            </div>
            <div
              class="absolute -top-3 -right-3 w-7 h-7 bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-500/40 rounded-full flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-400">
              {{ i + 1 }}
            </div>
            <h3 class="font-semibold text-lg mb-2 text-slate-900 dark:text-white">{{ step.title }}</h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Venues Grid -->
    <section id="venues" class="py-20 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12 text-center">
          <span
            class="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            Available Venues
          </span>
          <h2 class="text-3xl md:text-4xl font-bold mb-3">Choose Your Space</h2>
          <p class="text-slate-500 dark:text-slate-400">Handpicked venues for every kind of event</p>
        </div>

        <!-- Loading Skeleton -->
        <div v-if="venuesStore.loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="n in 3" :key="n"
            class="bg-white dark:bg-white/5 rounded-2xl overflow-hidden animate-pulse border border-slate-100 dark:border-white/5">
            <div class="h-56 bg-slate-200 dark:bg-white/10"></div>
            <div class="p-6 space-y-3">
              <div class="h-4 bg-slate-200 dark:bg-white/10 rounded w-3/4"></div>
              <div class="h-3 bg-slate-100 dark:bg-white/5 rounded w-full"></div>
              <div class="h-3 bg-slate-100 dark:bg-white/5 rounded w-2/3"></div>
            </div>
          </div>
        </div>

        <!-- Error -->
        <div v-else-if="venuesStore.error" class="text-center py-20">
          <p class="text-red-500">{{ venuesStore.error }}</p>
        </div>

        <!-- Venue Cards -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link v-for="venue in venuesStore.venues" :key="venue.id" :to="`/venues/${venue.id}`"
            class="group bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/8 border border-slate-100 dark:border-white/8 hover:border-indigo-200 dark:hover:border-indigo-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/10">

            <!-- Image -->
            <div class="relative h-56 overflow-hidden">
              <img :src="venue.image_url" :alt="venue.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <span class="bg-indigo-600/90 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full">
                  Up to {{ venue.capacity }} guests
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3
                class="text-lg font-semibold text-slate-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition">
                {{ venue.name }}
              </h3>
              <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm mb-3">
                <svg class="w-3.5 h-3.5 shrink-0 text-indigo-500 dark:text-indigo-400" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0" />
                </svg>
                {{ venue.location }}
              </div>
              <p class="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-5 leading-relaxed">{{
                venue.description }}</p>
              <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                <span
                  class="text-indigo-600 dark:text-indigo-400 text-sm font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                  View Details
                  <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span
                  class="text-xs text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full">
                  Available
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div class="max-w-3xl mx-auto text-center">
        <div
          class="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 shadow-2xl shadow-indigo-500/20 relative overflow-hidden">
          <div
            class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]">
          </div>
          <div class="relative">
            <h2 class="text-3xl font-bold text-white mb-4">Ready to Book Your Event?</h2>
            <p class="text-indigo-200 mb-8">Submit a request in minutes. No payment needed — just pick your venue and
              date.</p>
            <a href="#venues"
              class="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-8 py-3.5 rounded-xl hover:bg-indigo-50 transition-all duration-200 shadow-lg">
              Get Started Now →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-slate-100 dark:border-white/5 py-8 px-6 transition-colors duration-300">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="VenueBook" class="w-6 h-6 rounded shadow-sm" />
          <span class="text-sm font-semibold text-slate-700 dark:text-slate-300">VenueBook</span>
        </div>
        <p class="text-slate-400 dark:text-slate-600 text-sm">© 2025 VenueBook. All rights reserved.</p>
        <router-link to="/admin/login"
          class="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition">
          Admin Portal →
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useVenuesStore } from '../stores/venues'
import { useThemeStore } from '../stores/theme'

const venuesStore = useVenuesStore()
const themeStore = useThemeStore()

const steps = [
  {
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>',
    title: 'Browse Venues',
    desc: 'Explore our curated selection of premium event spaces. Filter by capacity and location.',
  },
  {
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
    title: 'Choose Date & Slot',
    desc: 'Pick your preferred event date and time slot — morning, afternoon, evening, or full day.',
  },
  {
    icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    title: 'Submit & Confirm',
    desc: 'Fill in your details and submit the request. Our team will review and confirm your booking.',
  },
]

onMounted(() => {
  venuesStore.fetchVenues()
})
</script>
