import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../lib/supabase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Login with email + password
  async function login(email, password) {
    loading.value = true
    error.value = null
    const { data, error: err } = await supabase.auth.signInWithPassword({ email, password })
    if (err) error.value = err.message
    else user.value = data.user
    loading.value = false
  }

  // Logout
  async function logout() {
    await supabase.auth.signOut()
    user.value = null
  }

  // Restore session on page reload
  async function init() {
    const { data } = await supabase.auth.getSession()
    user.value = data.session?.user ?? null

    supabase.auth.onAuthStateChange((_event, session) => {
      user.value = session?.user ?? null
    })
  }

  return { user, loading, error, login, logout, init }
})
