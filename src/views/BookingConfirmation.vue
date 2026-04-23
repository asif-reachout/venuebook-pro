<template>
  <div class="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">

    <!-- Background glow -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div class="absolute top-1/3 left-1/3 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-md w-full text-center">

      <!-- Success Icon -->
      <div class="flex items-center justify-center mb-8">
        <div class="relative">
          <div class="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center">
            <div class="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <!-- Ping animation -->
          <span class="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping"></span>
        </div>
      </div>

      <h1 class="text-3xl font-bold mb-3">Booking Submitted!</h1>
      <p class="text-slate-400 mb-2">
        Thank you, <span class="text-white font-medium">{{ name }}</span>!
      </p>
      <p class="text-slate-400 text-sm mb-8">
        Your booking request for
        <span class="text-indigo-300 font-medium">{{ venueName }}</span>
        has been received. Our team will review and confirm it shortly.
      </p>

      <!-- Status Card -->
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left space-y-3">
        <div class="flex items-center justify-between text-sm">
          <span class="text-slate-400">Status</span>
          <span class="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs px-3 py-1 rounded-full font-medium">
            ⏳ Pending Review
          </span>
        </div>
        <div class="flex items-center justify-between text-sm">
          <span class="text-slate-400">What's next?</span>
          <span class="text-slate-300 text-right max-w-[180px]">Admin will approve or reject your request</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <router-link to="/"
          class="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const name = computed(() => route.query.name || 'Guest')
const venueName = computed(() => route.query.venue || 'the venue')
</script>
