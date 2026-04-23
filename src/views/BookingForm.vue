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
        <span class="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium px-4 py-1.5 rounded-full mb-4">
          Booking Request
        </span>
        <h1 class="text-3xl font-bold mb-2">Book Your Venue</h1>
        <p class="text-slate-400" v-if="venuesStore.currentVenue">
          Booking: <span class="text-indigo-300 font-medium">{{ venuesStore.currentVenue.name }}</span>
        </p>
      </div>

      <!-- Form Card -->
      <div class="bg-white/5 border border-white/10 rounded-2xl p-8">

        <!-- Submit Error -->
        <div v-if="submitError"
          class="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl p-3 mb-6">
          <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd" />
          </svg>
          {{ submitError }}
        </div>

        <form @submit.prevent="handleSubmit" novalidate class="space-y-5">

          <!-- Full Name -->
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-1.5">
              Full Name <span class="text-red-400">*</span>
            </label>
            <input
              v-model="form.name"
              id="booking-name"
              type="text"
              placeholder="Your full name"
              :class="inputClass('name')"
              @blur="touch('name')"
            />
            <p v-if="errors.name" class="text-red-400 text-xs mt-1.5 flex items-center gap-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              {{ errors.name }}
            </p>
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-1.5">
              Email Address <span class="text-red-400">*</span>
            </label>
            <input
              v-model="form.email"
              id="booking-email"
              type="email"
              placeholder="your@email.com"
              :class="inputClass('email')"
              @blur="touch('email')"
            />
            <p v-if="errors.email" class="text-red-400 text-xs mt-1.5 flex items-center gap-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              {{ errors.email }}
            </p>
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-1.5">
              Phone Number <span class="text-slate-500 text-xs">(optional)</span>
            </label>
            <input
              v-model="form.phone"
              id="booking-phone"
              type="tel"
              placeholder="+60 12-345 6789"
              :class="inputClass('phone')"
              @blur="touch('phone')"
            />
            <p v-if="errors.phone" class="text-red-400 text-xs mt-1.5 flex items-center gap-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              {{ errors.phone }}
            </p>
          </div>

          <!-- Date + Time Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <!-- Date -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-1.5">
                Event Date <span class="text-red-400">*</span>
              </label>
              <input
                v-model="form.date"
                id="booking-date"
                type="date"
                :min="minDate"
                :class="inputClass('date')"
                @blur="touch('date')"
                @change="touch('date')"
              />
              <p v-if="errors.date" class="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                {{ errors.date }}
              </p>
            </div>

            <!-- Time Slot -->
            <div>
              <label class="block text-sm font-medium text-slate-300 mb-1.5">
                Time Slot <span class="text-red-400">*</span>
              </label>
              <select
                v-model="form.time_slot"
                id="booking-timeslot"
                :class="inputClass('time_slot')"
                @blur="touch('time_slot')"
                @change="touch('time_slot')"
              >
                <option value="" disabled>Select a slot</option>
                <option value="Morning (8AM - 12PM)">Morning (8AM – 12PM)</option>
                <option value="Afternoon (1PM - 5PM)">Afternoon (1PM – 5PM)</option>
                <option value="Evening (6PM - 11PM)">Evening (6PM – 11PM)</option>
                <option value="Full Day">Full Day</option>
              </select>
              <p v-if="errors.time_slot" class="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                {{ errors.time_slot }}
              </p>
            </div>
          </div>

          <!-- Duplicate booking warning -->
          <div v-if="duplicateWarning"
            class="flex items-start gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm rounded-xl p-3">
            <svg class="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
            {{ duplicateWarning }}
          </div>

          <!-- Notes -->
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-1.5">
              Additional Notes <span class="text-slate-500 text-xs">(optional)</span>
            </label>
            <textarea
              v-model="form.notes"
              id="booking-notes"
              rows="3"
              placeholder="Any special requirements or requests..."
              class="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
            ></textarea>
          </div>

          <!-- Character count for notes -->
          <p v-if="form.notes.length > 0" class="text-slate-600 text-xs -mt-3 text-right">
            {{ form.notes.length }} / 500 characters
          </p>

          <!-- Progress indicator -->
          <div class="bg-white/5 rounded-xl p-4">
            <div class="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Form completion</span>
              <span class="font-medium text-white">{{ completionPercent }}%</span>
            </div>
            <div class="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                :style="{ width: completionPercent + '%' }"
              ></div>
            </div>
          </div>

          <!-- Submit -->
          <button
            id="booking-submit"
            type="submit"
            :disabled="submitting || isCheckingDuplicate"
            class="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 mt-2">
            <svg v-if="submitting || isCheckingDuplicate" class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            {{ submitting ? 'Submitting...' : isCheckingDuplicate ? 'Checking availability...' : 'Submit Booking Request' }}
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
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useVenuesStore } from '../stores/venues'
import { supabase } from '../lib/supabase'

const route = useRoute()
const router = useRouter()
const venuesStore = useVenuesStore()

const submitting = ref(false)
const submitError = ref(null)
const isCheckingDuplicate = ref(false)
const duplicateWarning = ref(null)
const touched = reactive({})

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

// --- Validation Rules ---
function validateField(field) {
  const v = form[field]?.toString().trim()
  switch (field) {
    case 'name':
      if (!v) return 'Full name is required'
      if (v.length < 2) return 'Name must be at least 2 characters'
      if (v.length > 100) return 'Name is too long'
      return ''
    case 'email':
      if (!v) return 'Email address is required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Please enter a valid email address'
      return ''
    case 'phone':
      if (!v) return '' // optional
      if (!/^[+\d\s\-()]{7,20}$/.test(v)) return 'Enter a valid phone number (e.g. +60 12-345 6789)'
      return ''
    case 'date':
      if (!v) return 'Please select an event date'
      if (v < minDate) return 'Date cannot be in the past'
      return ''
    case 'time_slot':
      if (!v) return 'Please select a time slot'
      return ''
    default:
      return ''
  }
}

const errors = computed(() => {
  const result = {}
  for (const field of ['name', 'email', 'phone', 'date', 'time_slot']) {
    if (touched[field]) result[field] = validateField(field)
  }
  return result
})

function touch(field) {
  touched[field] = true
}

function touchAll() {
  for (const field of ['name', 'email', 'phone', 'date', 'time_slot']) {
    touched[field] = true
  }
}

function isValid() {
  return ['name', 'email', 'phone', 'date', 'time_slot'].every(f => !validateField(f))
}

// --- Form Completion Progress ---
const completionPercent = computed(() => {
  const required = ['name', 'email', 'date', 'time_slot']
  const filled = required.filter(f => form[f]?.toString().trim()).length
  return Math.round((filled / required.length) * 100)
})

// --- Input CSS helper ---
function inputClass(field) {
  const base = 'w-full border text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition'
  const isSelect = field === 'time_slot'
  const bg = isSelect ? 'bg-slate-800' : 'bg-white/5'
  if (!touched[field]) return `${base} ${bg} border-white/10 focus:ring-indigo-500`
  if (errors.value[field]) return `${base} ${bg} border-red-500/50 focus:ring-red-500 bg-red-500/5`
  if (form[field]) return `${base} ${bg} border-emerald-500/40 focus:ring-emerald-500`
  return `${base} ${bg} border-white/10 focus:ring-indigo-500`
}

// --- Duplicate booking check ---
async function checkDuplicate() {
  if (!form.date || !form.time_slot) return
  isCheckingDuplicate.value = true
  duplicateWarning.value = null

  const { data } = await supabase
    .from('bookings')
    .select('id')
    .eq('venue_id', route.params.id)
    .eq('date', form.date)
    .eq('time_slot', form.time_slot)
    .in('status', ['pending', 'approved'])

  if (data && data.length > 0) {
    duplicateWarning.value = `⚠️ This venue already has a booking for ${form.time_slot} on the selected date. You can still submit, but it may be rejected.`
  }
  isCheckingDuplicate.value = false
}

// Watch date + time_slot for duplicate check
watch([() => form.date, () => form.time_slot], ([date, slot]) => {
  if (date && slot) checkDuplicate()
})

// --- Submit ---
async function handleSubmit() {
  touchAll()
  if (!isValid()) {
    // Scroll to first error
    const el = document.querySelector('[class*="border-red"]')
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    return
  }

  submitting.value = true
  submitError.value = null

  const { error } = await supabase.from('bookings').insert({
    venue_id: route.params.id,
    name: form.name.trim(),
    email: form.email.trim().toLowerCase(),
    phone: form.phone.trim() || null,
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
