# Distribute TMS - Marketing Site Handoff & Memory

**AI Context Reminder**: If you are reading this file, you have been invited into a new workspace (`distribute-tms-website`) to build the marketing landing page for the Distribute TMS SaaS application.

---

## 🧠 Project Memory & Context

### 1. The Core Product (What we are selling)
- **Product Name:** Distribute TMS
- **SaaS Architecture:** A robust Multi-Tenant Freight Management CRM built on Next.js, Drizzle, and Supabase.
- **Domains:**
  - `distributetms.com` = THIS marketing website (which we are building now).
  - `app.distributetms.com` = The SaaS application where the actual CRM lives.
- **The Users:**
  1. **Dispatchers/Brokerages** (The ones paying for the main software to manage freight).
  2. **Carriers** (External trucking companies invited by the dispatchers to bid on loads).
  3. **Drivers** (Mobile users tracking their specific dispatch).

### 2. Pricing Plan (Crucial for Marketing Copy)
Our pricing strategy should be front-and-center on this marketing site.
- **Dispatcher Starter:** $149/mo (Up to 3 users, standard dashboard, NO external carrier invites).
- **Dispatcher Professional:** $349/mo (Up to 10 users, UNLOCKS Carrier portal invites, Real-time chat, analytics).
- **Dispatcher Enterprise:** $899/mo (Unlimited users, dedicated Account Manager).
- **Carrier Access Plan:** When a dispatcher invites a carrier, the carrier gets a 3-day free trial, then pays **$180/week via Stripe** to access the premium Carrier Portal.

---

## 🎨 Design System & Aesthetic Constraints

The USER expects a highly premium, industry-leading aesthetic. You must follow these strict visual guidelines:

1. **"Pro Max" Corporate Aesthetic:** The site cannot look basic. It needs to look like a multi-million-dollar Silicon Valley SaaS company.
2. **Visual Patterns:**
   - **Glassmorphism:** Use blurred backdrops and sleek transparent cards (`backdrop-blur-md`, `bg-white/5` over dark backgrounds).
   - **Dark Mode Excellence:** The default theme should likely lean toward a stunning, deep-space dark mode with vibrant neon accents (e.g., Electric Blue or Neon Purple) for call-to-actions.
   - **Micro-Animations:** Use Framer Motion or `tw-animate-css` for entry animations, hover states, and dynamic scroll reveals.
   - **Typography:** Modern, clean sans-serif fonts (e.g., *Inter*, *Outfit*, *Plus Jakarta Sans*).
3. **Hero Section:** Must be highly cinematic. Likely incorporating a Video Sales Letter (VSL) or a massive dynamic video background behind the main value proposition.
4. **No Placeholders without Image Generation:** If you need background images or UI mockups of the CRM to display on the landing page, use your internal `generate_image` tool to create beautiful, conceptual screenshots of the "Distribute TMS Dashboard."

---

## 🚀 Execution Plan for the New Workspace

When you begin working in the new `distribute-tms-website` folder, execute this plan:

1. **Setup:** Ensure Tailwind CSS is installed. Create `src/styles/globals.css` with the designated color tokens.
2. **Component Library:** Bring in / configure Shadcn UI or create bespoke components for Buttons, Cards, and Navbars using the glassmorphism aesthetic.
3. **Build the Hero:** Start with `src/app/page.tsx` and build an awe-inspiring Hero section.
4. **Build the Feature Grid:** Visually split the "Admin Dashboard", "Carrier Portal", and "Driver App" into distinct, heavily animated feature blocks.
5. **Call to Action:** Every "Sign Up" or "Login" button must securely link out to `https://app.distributetms.com/login`.

---
*End of Memory File.*
