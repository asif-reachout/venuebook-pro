import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../lib/supabase'

export const useVenuesStore = defineStore('venues', () => {
  const venues = ref([])
  const currentVenue = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function fetchVenues() {
    loading.value = true
    error.value = null
    const { data, error: err } = await supabase.from('venues').select('*').order('created_at')
    if (err) error.value = err.message
    else venues.value = data
    loading.value = false
  }

  async function fetchVenueById(id) {
    loading.value = true
    error.value = null
    const { data, error: err } = await supabase.from('venues').select('*').eq('id', id).single()
    if (err) error.value = err.message
    else currentVenue.value = data
    loading.value = false
  }

  return { venues, currentVenue, loading, error, fetchVenues, fetchVenueById }
})
