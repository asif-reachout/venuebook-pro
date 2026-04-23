<template>
  <div class="min-h-screen bg-slate-950 text-white">

    <!-- Navbar -->
    <nav class="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
        <router-link to="/" class="text-slate-400 hover:text-white transition flex items-center gap-1.5 text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </router-link>
        <span class="text-white/20">/</span>
        <span class="text-slate-300 text-sm truncate">{{ venue?.name }}</span>
      </div>
    </nav>

    <!-- Loading State -->
    <div v-if="venuesStore.loading" class="pt-32 px-6 max-w-5xl mx-auto animate-pulse">
      <div class="h-80 bg-white/10 rounded-2xl mb-8"></div>
      <div class="h-8 bg-white/10 rounded w-1/2 mb-4"></div>
      <div class="h-4 bg-white/10 rounded w-full mb-2"></div>
    </div>

    <!-- Content -->
    <div v-else-if="venue" class="pt-24">

      <!-- Hero Image -->
      <div class="relative h-80 md:h-[460px] overflow-hidden">
        <img :src="venue.image_url" :alt="venue.name" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
      </div>

      <!-- Main Content -->
      <div class="max-w-5xl mx-auto px-6 -mt-16 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <!-- Left: Details -->
          <div class="lg:col-span-2">
            <div class="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
              <h1 class="text-3xl font-bold mb-3">{{ venue.name }}</h1>

              <div class="flex flex-wrap gap-4 mb-6">
                <div class="flex items-center gap-1.5 text-slate-400 text-sm">
                  <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {{ venue.location }}
                </div>
                <div class="flex items-center gap-1.5 text-slate-400 text-sm">
                  <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                  </svg>
                  Up to {{ venue.capacity }} guests
                </div>
              </div>

              <h2 class="text-lg font-semibold mb-3 text-slate-200">About This Venue</h2>
              <p class="text-slate-400 leading-relaxed">{{ venue.description }}</p>
            </div>

            <!-- Features -->
            <div class="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 class="text-lg font-semibold mb-5">What's Included</h2>
              <div class="grid grid-cols-2 gap-3">
                <div v-for="feature in features" :key="feature"
                  class="flex items-center gap-2.5 text-slate-300 text-sm">
                  <div class="w-5 h-5 rounded-full bg-indigo-600/20 flex items-center justify-center shrink-0">
                    <svg class="w-3 h-3 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  {{ feature }}
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Booking Card -->
          <div class="lg:col-span-1">
            <div class="sticky top-24 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div class="text-center mb-6">
                <div class="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-lg">Ready to Book?</h3>
                <p class="text-slate-400 text-sm mt-1">Secure your date now</p>
              </div>

              <div class="space-y-3 mb-6 text-sm text-slate-400">
                <div class="flex justify-between">
                  <span>Venue</span>
                  <span class="text-white font-medium">{{ venue.name }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Capacity</span>
                  <span class="text-white font-medium">{{ venue.capacity }} guests</span>
                </div>
                <div class="flex justify-between">
                  <span>Location</span>
                  <span class="text-white font-medium text-right max-w-[140px]">{{ venue.location }}</span>
                </div>
              </div>

              <router-link
                :to="`/venues/${venue.id}/book`"
                class="block w-full bg-indigo-600 hover:bg-indigo-500 text-white text-center font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20">
                Book This Venue
              </router-link>

              <p class="text-slate-600 text-xs text-center mt-3">No payment required to submit</p>
            </div>
          </div>
        </div>
      </div>

      <div class="pb-20"></div>
    </div>

    <!-- Not Found -->
    <div v-else class="pt-40 text-center">
      <p class="text-slate-400">Venue not found.</p>
      <router-link to="/" class="text-indigo-400 hover:underline mt-4 inline-block">← Back to venues</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useVenuesStore } from '../stores/venues'

const route = useRoute()
const venuesStore = useVenuesStore()
const venue = computed(() => venuesStore.currentVenue)

const features = [
  'Air Conditioning', 'Parking Available', 'Catering Kitchen',
  'AV Equipment', 'High-Speed WiFi', 'Dedicated Staff',
  'Stage & Lighting', 'Bridal Suite',
]

onMounted(() => {
  venuesStore.fetchVenueById(route.params.id)
})
</script>
