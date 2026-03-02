
## Cinematic Product Story Slider — Option 4

### What's changing

The current `ProductDemoPanel` uses a top-tab switcher with a description strip below it, which feels cluttered. We'll replace it with a single wide cinematic card that slides horizontally between the 4 product stories with:

- Left/right arrow navigation
- Dot indicators at the bottom
- Auto-advance every 6 seconds (pauses on hover or manual interaction)
- Smooth horizontal slide-in/out transitions via `framer-motion`

---

### Layout of the new card

```text
┌────────────────────────────────────────────────┐
│  ← gradient header bar (product color accent)  │
│    [icon] PRODUCT NAME        [badge pill] LIVE │
├────────────────────────────────────────────────┤
│                                                │
│         <Demo Component — full width>          │
│                                                │
├────────────────────────────────────────────────┤
│  [◀]   ● ○ ○ ○   [▶]    6s progress bar       │
└────────────────────────────────────────────────┘
```

- The header bar uses a subtle left-border color accent per product (navy / teal / mid / light) instead of a heavy tab row
- Demo fills the card body with generous padding — no description strip eating vertical space
- Bottom controls: left arrow, 4 dot indicators (filled = active, hollow = inactive), right arrow, and a thin progress bar showing time until auto-advance

---

### Technical implementation

**File edited: `src/pages/HomeLanding.tsx`**

1. Import `useEffect`, `useRef` alongside existing imports
2. Replace `ProductDemoPanel` component entirely with `CinematicDemoSlider`:
   - `activeIdx` state (0–3)
   - `direction` state (`'left' | 'right'`) drives which way the slide enters/exits
   - `paused` state — set to `true` on hover or manual nav click, resets after 10s idle
   - `useEffect` with `setInterval` for 6-second auto-advance (cleared when `paused`)
   - `progress` state (0→100 over 6s) shown as a thin teal progress bar at the bottom
   - `framer-motion` `AnimatePresence` with `custom={direction}` and `variants` for x-slide in/out (`x: ±60, opacity: 0` → `x: 0, opacity: 1`)
3. Header of the card:
   - Thin left-border strip in the active product's color
   - Icon + product full label on the left
   - Badge pill + pulsing LIVE dot on the right
   - No tab row, no description strip below it
4. Footer controls:
   - Prev/Next arrow buttons (ghost, circular, hover lifts)
   - 4 dot indicators — active dot widens into a small pill animated with `layoutId`
   - Thin `progress` bar underneath the dots, resets on any navigation

---

### No changes to `FirstSection.tsx`

All four demo components (`ScribeDemo`, `ReceptionistDemo`, `CustomAgentsDemo`, `IntegrationsDemo`) remain as-is and are just rendered in the new slider body.
