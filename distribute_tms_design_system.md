# Distribute TMS - Core UI Design & Aesthetics System

**Context for Developer/AI:** You are receiving this design system spec to build a marketing landing page for Distribute TMS. Your goal is to recreate the exact "Pro Max" corporate aesthetic from the main CRM codebase so the transition between the marketing site and the logged-in app feels seamless.

---

## 🎨 1. Colors & Theming (Tailwind Variables)

The CRM uses a highly specific `oklch` color palette for incredibly smooth interpolation between light and dark modes, heavily augmented with a striking Brand Orange. We use **Shadcn UI** conventions. 

### Core Brand
*   **Primary Brand:** `#FE9F4D` (Used for primary CTA buttons, highlighted chat bubbles, active states).
*   **Brand Hover:** `#fd8f35`
*   **Brand Foreground:** `#ffffff` (White text over the orange).

### Light Mode (`.theme-light`)
*   **Background:** `#ffffff` (`oklch(1 0 0)`)
*   **Foreground (Text):** Near Black (`oklch(0.145 0 0)`)
*   **Cards/Popovers:** `#ffffff`
*   **Borders & Inputs:** Very light gray (`oklch(0.922 0 0)`)
*   **Muted/Secondary:** Light Gray backdrop (`oklch(0.97 0 0)`) with slightly darker gray text (`oklch(0.556 0 0)`).

### Dark Mode (`.dark`)
*   **Background:** `#1a1a1a` (`oklch(0.145 0 0)`) - A gorgeous deep, flat charcoal.
*   **Foreground (Text):** Near White (`oklch(0.985 0 0)`)
*   **Cards/Popovers:** Lightly elevated charcoal (`oklch(0.205 0 0)`)
*   **Borders & Inputs:** 10% / 15% opacity white (`oklch(1 0 0 / 10%)`) -> Clean glass/border effect.
*   **Sidebar (CRM specific):** Absolute dark `#151515` with `#1e1e1e` accents and `#ffffff` text.

---

## 🔠 2. Typography

*   **Primary Font:** `Inter` (Sans-Serif, used for the main body and `font-inter` utility).
*   **Heading Font / Alternative:** `Geist` (Passed as the `--font-sans` CSS variable).
*   **Vibe:** Highly legible, modern, and serious. Use standard text sizes but lean into medium/semibold font weights (e.g., `font-medium`, `font-semibold`) for headers to give it that "premium tech SaaS" feel.

---

## 📐 3. Core Visual Styles & Shapes

*   **Border Radius:** 
    *   Base `--radius` is set exactly to `0.625rem` (10px).
    *   This gives a slightly soft but professional square look (neither completely sharp nor aggressively pill-shaped like Web2 apps).
*   **Elevated Cards:** The app uses a specific custom utility class `.card-elevated`.
    *   **Tailwind Equivalent:** `bg-card border border-border rounded-xl shadow-sm`
    *   This defines our primary bounding boxes. Cards should have visible but subtle 1px borders and a very soft drop shadow in light mode.
*   **Glassmorphism/Backdrops:** 
    *   Dark mode borders (`oklch(1 0 0 / 10%)`) heavily imply we use subtle transparency overlaps. 
    *   When building floating navigations/headers on the marketing site, you should use `bg-background/80 backdrop-blur-md border-b`.

---

## 🎛️ 4. Component Patterns

*   **Primary CTA Buttons:** `bg-brand text-brand-foreground hover:bg-brand-hover rounded-md px-4 py-2 font-medium transition-colors`
    *   *Note:* The brand orange (`#FE9F4D`) must POP aggressively against the dark mode backgrounds.
*   **Input Fields / Form Elements:** `bg-transparent border border-input rounded-md px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`
*   **Focus States:** We use a customized focus ring: `.focus-brand:focus-visible { @apply outline-none ring-2 ring-brand/40 ring-offset-1; }`.

---

## 🏗️ 5. Layout & Vibe

*   **Vibe:** "Silicon Valley Premium", minimalist, authoritative. It needs to strike a balance between a high-tech financial terminal and modern consumer-friendly aesthetics.
*   **Animations:**
    *   Subtle fade-ins: The codebase strictly uses a built-in `.animate-fade-in` (`fade-in 0.15s ease-out both`).
    *   UI components shouldn't "bounce"; they should fade and slide up perfectly.
*   **General Layout:** The CRM relies on a sticky top-header or a heavy left-sidebar. For the marketing site, use a sticky glassmorphism Top Navbar, followed by large, spaced-out sections (`py-24`).

---

## ⚙️ 6. Configuration Dumps

### `tailwind.config.js` (Core Extensions)
```javascript
theme: {
  extend: {
    colors: {
      sidebar: {
        DEFAULT: "#151515",
        foreground: "#ffffff",
        accent: "#1e1e1e",
        border: "#2a2a2a",
      },
      brand: {
        DEFAULT: "#FE9F4D",
        hover: "#fd8f35",
        foreground: "#ffffff",
      },
    },
    borderRadius: {
      lg: "var(--radius)", /* 0.625rem */
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  }
}
```

### Key `globals.css` Utilities (To Add to Marketing Site)
```css
@layer utilities {
  .card-elevated {
    @apply bg-card border border-border rounded-xl shadow-sm;
  }
  .focus-brand:focus-visible {
    @apply outline-none ring-2 ring-brand/40 ring-offset-1;
  }
}
@keyframes fade-in {
  from { opacity: 0; transform: scale(0.97) translateY(4px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.15s ease-out both;
}
```
