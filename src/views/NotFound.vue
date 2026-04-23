<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white flex items-center justify-center p-6 transition-colors duration-300">
    <div class="text-center">
      <p class="text-8xl font-black text-indigo-600/10 dark:text-indigo-600/30 mb-4 select-none">404</p>
      <h1 class="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Page Not Found</h1>
      <p class="text-slate-500 dark:text-slate-400 text-sm mb-8">The page you're looking for doesn't exist.</p>
      <router-link to="/"
        class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition">
        ← Back to Home
      </router-link>
    </div>
  </div>
</template>
