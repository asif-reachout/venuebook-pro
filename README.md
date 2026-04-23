# 🏛️ VenueBook Pro — Hall & Venue Booking Web App

A production-quality, fully responsive venue booking web application built for the [KrackedDevs bounty](https://krackeddevs.com).

🌐 **Live Demo:** [venuebook-pro.netlify.app](https://venuebook-pro.netlify.app)

---

## ✨ Features

### Public (Guest) Experience
- 🏠 **Landing Page** — Hero section with venue grid loaded live from Supabase
- 🏛️ **Venue Details Page** — Full venue info, capacity, location, features, sticky booking card
- 📋 **Booking Request Form** — Full form with real-time validation, date picker, time slot selector
- ✅ **Custom JS Validation** — Inline error messages, color-coded inputs, auto-scroll to errors
- ⚠️ **Duplicate Booking Detection** — Warns if the selected date/slot is already taken
- 📊 **Form Progress Bar** — Visual completion indicator
- 🎉 **Booking Confirmation Page** — Animated success screen with pending status

### Admin Experience
- 🔐 **Admin Login** — Supabase email/password auth with glassmorphism UI
- 📊 **Dashboard** — Stats cards: Total / Pending / Approved / Rejected
- 🗂️ **Filter Tabs** — Switch between All / Pending / Approved / Rejected bookings
- ✅ **Approve / ❌ Reject** — One-click status updates with toast notifications
- 🔄 **Reset to Pending** — Undo any decision
- 📱 **Mobile Sidebar** — Collapsible drawer on small screens

### UX & Polish
- 🎬 **Page Transitions** — Smooth fade+slide animations between routes
- 🍞 **Toast Notifications** — Animated feedback on every action
- 💀 **Loading Skeletons** — On all data-fetching pages
- 🔴 **404 Page** — Custom not-found page
- 📱 **Fully Responsive** — Mobile-first design on all pages

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 (Composition API) |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| State Management | Pinia |
| Routing | Vue Router 4 |
| Backend / Auth / DB | Supabase |
| Deployment | Netlify |

---

## 🗄️ Database Schema

### `venues`
| Column | Type |
|---|---|
| id | UUID (PK) |
| name | TEXT |
| description | TEXT |
| location | TEXT |
| capacity | INT |
| image_url | TEXT |
| created_at | TIMESTAMPTZ |

### `bookings`
| Column | Type |
|---|---|
| id | UUID (PK) |
| venue_id | UUID (FK → venues) |
| name | TEXT |
| email | TEXT |
| phone | TEXT |
| date | DATE |
| time_slot | TEXT |
| status | TEXT (pending/approved/rejected) |
| created_at | TIMESTAMPTZ |

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/asif-reachout/venuebook-pro.git
cd venuebook-pro
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the SQL in Supabase SQL Editor
```sql
CREATE TABLE venues (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  location TEXT,
  capacity INT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  venue_id UUID REFERENCES venues(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  date DATE NOT NULL,
  time_slot TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 5. Run the dev server
```bash
npm run dev
```

---

## 📱 Pages & Routes

| Route | Page | Access |
|---|---|---|
| `/` | Landing page — venue listing | Public |
| `/venues/:id` | Venue detail page | Public |
| `/venues/:id/book` | Booking request form | Public |
| `/booking-confirmation` | Success page | Public |
| `/admin/login` | Admin login | Guest only |
| `/admin` | Admin dashboard | Authenticated |

---

## 🔐 Admin Setup

1. Go to **Supabase → Authentication → Users**
2. Click **Add user → Create new user**
3. Set your admin email + password
4. Visit `/admin/login` and sign in

---

## 📦 Project Structure

```
src/
├── components/
│   └── ToastNotification.vue   # Global toast system
├── lib/
│   └── supabase.js             # Supabase client
├── router/
│   └── index.js                # Vue Router with auth guards
├── stores/
│   ├── auth.js                 # Auth state (Pinia)
│   ├── bookings.js             # Bookings CRUD (Pinia)
│   ├── toast.js                # Toast notifications (Pinia)
│   └── venues.js               # Venues data (Pinia)
└── views/
    ├── Home.vue                # Landing page
    ├── VenueDetail.vue         # Venue details
    ├── BookingForm.vue         # Booking form
    ├── BookingConfirmation.vue # Success page
    ├── AdminLogin.vue          # Admin login
    ├── AdminDashboard.vue      # Admin panel
    └── NotFound.vue            # 404 page
```

---

## 🏆 Built for KrackedDevs Bounty

This project meets all 10 bounty requirements:
- ✅ Responsive landing page
- ✅ Venue details page
- ✅ Booking request form
- ✅ Date + time slot selection
- ✅ Booking confirmation page
- ✅ Admin login page
- ✅ Admin dashboard
- ✅ Pending / Approved / Rejected statuses
- ✅ Proper form validation
- ✅ Clean and user-friendly experience

---

Built with ❤️ using Vue 3 + Supabase
