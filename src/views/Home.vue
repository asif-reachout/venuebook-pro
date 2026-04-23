<template>
  <div class="min-h-screen bg-slate-950 text-white">

    <!-- Navbar -->
    <nav class="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
            </svg>
          </div>
          <span class="font-bold text-lg tracking-tight">VenueBook</span>
        </div>
        <router-link to="/admin/login"
          class="text-slate-400 hover:text-white text-sm transition flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Admin
        </router-link>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-24 px-6 overflow-hidden">
      <!-- Background glows -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-20 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative max-w-4xl mx-auto text-center">
        <span class="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
          ✨ Premium Event Spaces
        </span>
        <h1 class="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Find the Perfect<br />
          <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Venue for Your Event
          </span>
        </h1>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          Browse our curated collection of stunning venues. From grand ballrooms to intimate garden spaces — your perfect event starts here.
        </p>
        <a href="#venues"
          class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25">
          Browse Venues
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="border-y border-white/5 bg-white/2">
      <div class="max-w-7xl mx-auto px-6 py-8 grid grid-cols-3 gap-8 text-center">
        <div>
          <p class="text-3xl font-bold text-white">{{ venuesStore.venues.length }}+</p>
          <p class="text-slate-500 text-sm mt-1">Premium Venues</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-white">500+</p>
          <p class="text-slate-500 text-sm mt-1">Events Hosted</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-white">100%</p>
          <p class="text-slate-500 text-sm mt-1">Satisfaction Rate</p>
        </div>
      </div>
    </section>

    <!-- Venues Grid -->
    <section id="venues" class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold mb-3">Our Venues</h2>
          <p class="text-slate-400">Choose from our selection of world-class event spaces</p>
        </div>

        <!-- Loading -->
        <div v-if="venuesStore.loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="n in 3" :key="n" class="bg-white/5 rounded-2xl overflow-hidden animate-pulse">
            <div class="h-56 bg-white/10"></div>
            <div class="p-6 space-y-3">
              <div class="h-4 bg-white/10 rounded w-3/4"></div>
              <div class="h-3 bg-white/10 rounded w-full"></div>
              <div class="h-3 bg-white/10 rounded w-2/3"></div>
            </div>
          </div>
        </div>

        <!-- Error -->
        <div v-else-if="venuesStore.error" class="text-center py-20">
          <p class="text-red-400">{{ venuesStore.error }}</p>
        </div>

        <!-- Venue Cards -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link
            v-for="venue in venuesStore.venues"
            :key="venue.id"
            :to="`/venues/${venue.id}`"
            class="group bg-white/5 hover:bg-white/8 border border-white/8 hover:border-indigo-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">

            <!-- Image -->
            <div class="relative h-56 overflow-hidden">
              <img
                :src="venue.image_url"
                :alt="venue.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-4 left-4">
                <span class="bg-indigo-600/90 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full">
                  Up to {{ venue.capacity }} guests
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-lg font-semibold text-white mb-1 group-hover:text-indigo-300 transition">
                {{ venue.name }}
              </h3>
              <div class="flex items-center gap-1.5 text-slate-400 text-sm mb-3">
                <svg class="w-3.5 h-3.5 shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0" />
                </svg>
                {{ venue.location }}
              </div>
              <p class="text-slate-400 text-sm line-clamp-2 mb-5">{{ venue.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-indigo-400 text-sm font-medium">View Details →</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-white/5 py-8 px-6 text-center text-slate-600 text-sm">
      © 2025 VenueBook. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useVenuesStore } from '../stores/venues'

const venuesStore = useVenuesStore()

onMounted(() => {
  venuesStore.fetchVenues()
})
</script>
