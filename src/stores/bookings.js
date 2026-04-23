import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { supabase } from '../lib/supabase'
import { useToastStore } from './toast'

export const useBookingsStore = defineStore('bookings', () => {
  const bookings = ref([])
  const loading = ref(false)
  const error = ref(null)
  const updatingId = ref(null)

  const total = computed(() => bookings.value.length)
  const pending = computed(() => bookings.value.filter(b => b.status === 'pending').length)
  const approved = computed(() => bookings.value.filter(b => b.status === 'approved').length)
  const rejected = computed(() => bookings.value.filter(b => b.status === 'rejected').length)

  async function fetchBookings() {
    loading.value = true
    error.value = null
    const { data, error: err } = await supabase
      .from('bookings')
      .select('*, venues(name)')
      .order('created_at', { ascending: false })
    if (err) error.value = err.message
    else bookings.value = data
    loading.value = false
  }

  async function updateStatus(id, status) {
    const toast = useToastStore()
    updatingId.value = id
    const { error: err } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', id)

    if (err) {
      toast.error('Failed to update booking status')
    } else {
      const booking = bookings.value.find(b => b.id === id)
      if (booking) booking.status = status
      const messages = {
        approved: '✅ Booking approved successfully',
        rejected: '❌ Booking rejected',
        pending: '🔄 Booking reset to pending',
      }
      toast.success(messages[status] || 'Status updated')
    }
    updatingId.value = null
  }

  return { bookings, loading, error, updatingId, total, pending, approved, rejected, fetchBookings, updateStatus }
})
