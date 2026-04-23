<template>
  <teleport to="body">
    <transition-group name="toast" tag="div"
      class="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
      <div v-for="toast in toasts" :key="toast.id"
        :class="[
          'flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl text-sm font-medium pointer-events-auto border backdrop-blur-xl max-w-xs',
          toast.type === 'success' ? 'bg-emerald-950/90 border-emerald-500/30 text-emerald-300' :
          toast.type === 'error'   ? 'bg-red-950/90 border-red-500/30 text-red-300' :
                                     'bg-slate-800/90 border-white/10 text-white'
        ]">
        <!-- Icon -->
        <span class="text-base shrink-0">
          {{ toast.type === 'success' ? '✅' : toast.type === 'error' ? '❌' : 'ℹ️' }}
        </span>
        {{ toast.message }}
      </div>
    </transition-group>
  </teleport>
</template>

<script setup>
import { useToastStore } from '../stores/toast'
import { storeToRefs } from 'pinia'

const toastStore = useToastStore()
const { toasts } = storeToRefs(toastStore)
</script>

<style scoped>
.toast-enter-active { transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
.toast-leave-active { transition: all 0.2s ease; }
.toast-enter-from   { opacity: 0; transform: translateX(60px) scale(0.9); }
.toast-leave-to     { opacity: 0; transform: translateX(60px); }
</style>
