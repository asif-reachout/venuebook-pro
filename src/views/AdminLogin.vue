<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 transition-colors duration-300 relative overflow-hidden">

    <!-- Background glow & Blobs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-indigo-400/10 dark:bg-indigo-600/15 rounded-full blur-3xl">
      </div>
      <div
        class="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-600/15 rounded-full blur-3xl">
      </div>
      <!-- Grid pattern overlay -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none dark:opacity-100 opacity-50">
      </div>
    </div>

    <!-- Back to Home -->
    <div class="absolute top-6 left-6 z-10">
      <router-link to="/"
        class="flex items-center gap-2 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 font-medium text-sm transition-colors bg-white/50 dark:bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </router-link>
    </div>

    <div class="relative w-full max-w-md z-10">

      <!-- Logo / Header -->
      <div class="text-center mb-10">
        <div class="inline-flex items-center justify-center mb-5 relative group">
          <div
            class="absolute inset-0 bg-indigo-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full">
          </div>
          <img src="/logo.png" alt="VenueBook"
            class="w-20 h-20 rounded-2xl shadow-xl shadow-indigo-500/20 relative z-10" />
        </div>
        <h1 class="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">VenueBook Admin</h1>
        <p class="text-slate-500 dark:text-slate-400 text-sm">Secure access to the management portal</p>
      </div>

      <!-- Card Container with Gradient Border -->
      <div class="relative group">
        <div
          class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500">
        </div>
        <div
          class="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl">

          <!-- Error Alert -->
          <div v-if="authStore.error"
            class="flex items-start gap-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 text-sm rounded-xl p-4 mb-6">
            <svg class="w-5 h-5 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd" />
            </svg>
            <span class="leading-relaxed">{{ authStore.error }}</span>
          </div>

          <form @submit.prevent="handleLogin" class="space-y-6">

            <!-- Email -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input id="login-email" v-model="email" type="email" required placeholder="admin@example.com"
                  class="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-inner" />
              </div>
            </div>

            <!-- Password -->
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
              </div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input id="login-password" v-model="password" type="password" required placeholder="••••••••"
                  class="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-inner" />
              </div>
            </div>

            <!-- Submit -->
            <button id="login-submit" type="submit" :disabled="authStore.loading"
              class="relative w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed text-white font-bold rounded-xl py-3.5 text-sm transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center justify-center gap-2 overflow-hidden group">
              <div
                class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
              </div>
              <svg v-if="authStore.loading" class="animate-spin w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span class="relative z-10">{{ authStore.loading ? 'Authenticating...' : 'Sign In to Dashboard' }}</span>
            </button>
          </form>
        </div>
      </div>

      <p class="text-center text-slate-500 dark:text-slate-500 text-xs mt-8 font-medium">Venue Booking System © 2026</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')

async function handleLogin() {
  await authStore.login(email.value, password.value)
  if (!authStore.error) {
    router.push('/admin')
  }
}
</script>
