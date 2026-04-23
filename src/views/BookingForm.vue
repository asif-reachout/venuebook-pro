<template>
  <div class="min-h-screen bg-slate-950 text-white">

    <!-- Navbar -->
    <nav class="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
        <router-link :to="`/venues/${route.params.id}`"
          class="text-slate-400 hover:text-white transition flex items-center gap-1.5 text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Venue
        </router-link>
      </div>
    </nav>

    <div class="pt-28 pb-20 px-6 max-w-2xl mx-auto">

      <!-- Header -->
      <div class="mb-10">
        <span
          class="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium px-4 py-1.5 rounded-full mb-4">
          Step 1 of 1
        </span>
        <h1 class="text-3xl font-bold mb-2">Book Your Venue</h1>
        <p class="text-slate-400" v-if="venuesStore.currentVenue">
          Booking: <span class="text-indigo-300 font-medium">{{ venuesStore.currentVenue.name }}</span>
        </p>
      </div>

      <!-- Form Card -->
      <div class="bg-white/5 border border-white/10 rounded-2xl p-8">

        <!-- Success / Error -->
        <div v-if="submitError"
          class="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl p-3 mb-6">
          <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd" />
          </svg>
          {{ submitError }}
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-5">

          <!-- Full Name -->
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-1.5">Full Name *</label>
            <input v-model="form.name" id="booking-name" type="text" required placeholder="Your full name"
              class="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-1.5">Email Address *</label>
            <input v-model="form.email" id="booking-email" type="email" required placeholder="your@email.com"
              class="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-1.5">Phone Number</label>
            <input v-model="form.phone" id="booking-phone" type="tel" placeholder="+60 12-345 6789"
              class="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" />
          </div>

          <!-- Date + Time Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <!-- Date -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-1.5">Event Date *</label>
              <input v-model="form.date" id="booking-date" type="date" required :min="minDate"
                class="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition [color-scheme:dark]" />
            </div>

            <!-- Time Slot -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-1.5">Time Slot *</label>
              <select v-model="form.time_slot" id="booking-timeslot" required
                class="w-full bg-slate-800 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                <option value="" disabled>Select a slot</option>
                <option value="Morning (8AM - 12PM)">Morning (8AM – 12PM)</option>
                <option value="Afternoon (1PM - 5PM)">Afternoon (1PM – 5PM)</option>
                <option value="Evening (6PM - 11PM)">Evening (6PM – 11PM)</option>
                <option value="Full Day">Full Day</option>
              </select>
            </div>
          </div>

          <!-- Notes -->
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-1.5">Additional Notes <span
                class="text-slate-500">(optional)</span></label>
            <textarea v-model="form.notes" id="booking-notes" rows="3"
              placeholder="Any special requirements or requests..."
              class="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"></textarea>
          </div>

          <!-- Submit -->
          <button id="booking-submit" type="submit" :disabled="submitting"
            class="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 mt-2">
            <svg v-if="submitting" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            {{ submitting ? 'Submitting...' : 'Submit Booking Request' }}
          </button>

          <p class="text-slate-600 text-xs text-center">
            No payment required. You'll receive confirmation from our team.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useVenuesStore } from '../stores/venues'
import { supabase } from '../lib/supabase'

const route = useRoute()
const router = useRouter()
const venuesStore = useVenuesStore()

const submitting = ref(false)
const submitError = ref(null)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  date: '',
  time_slot: '',
  notes: '',
})

// Minimum date = today
const minDate = new Date().toISOString().split('T')[0]

async function handleSubmit() {
  submitting.value = true
  submitError.value = null

  const { error } = await supabase.from('bookings').insert({
    venue_id: route.params.id,
    name: form.name,
    email: form.email,
    phone: form.phone,
    date: form.date,
    time_slot: form.time_slot,
    status: 'pending',
  })

  submitting.value = false

  if (error) {
    submitError.value = error.message
  } else {
    router.push(`/booking-confirmation?name=${encodeURIComponent(form.name)}&venue=${encodeURIComponent(venuesStore.currentVenue?.name)}`)
  }
}

onMounted(() => {
  if (!venuesStore.currentVenue || venuesStore.currentVenue.id !== route.params.id) {
    venuesStore.fetchVenueById(route.params.id)
  }
})
</script>
