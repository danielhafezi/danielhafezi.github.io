# Color Palette Documentation

## Current Palette: Deep Tech (Indigo + Cyan) - December 2024

| Hex Code | HSL | Name | Usage |
|----------|-----|------|-------|
| `#0a0f1a` | `222 47% 7%` | Darkest | Main page background |
| `#141b2d` | `222 35% 13%` | Dark | Cards, inputs, popovers |
| `#1e293b` | `217 33% 17%` | Slate | Borders, muted elements |
| `#6366f1` | `239 84% 67%` | Indigo | Secondary accent |
| `#22d3ee` | `187 85% 53%` | Cyan | Primary accent (buttons, links, hovers) |

## RGB Values (for gradients)
- Cyan: `34,211,238`
- Indigo: `99,102,241`
- Slate: `30,41,59`

## Files to Update When Changing Colors

### 1. CSS Variables (Global)
**File:** `app/globals.css`
- Update the `:root` block with HSL values
- Variables: `--background`, `--card`, `--primary`, `--secondary`, `--accent`, `--border`, `--muted`

### 2. Main Page
**File:** `app/page.tsx`
Hardcoded hex colors used for:
- Main `div` background: `bg-[#0a0f1a]`
- Conic gradient aurora effect (line ~43)
- Floating orbs (lines ~46-48): `bg-[#22d3ee]/20`, `bg-[#6366f1]/20`, `bg-[#1e293b]/50`
- Cursor spotlight radial gradient (line ~59)
- "About Me" label: `text-[#22d3ee]/80`
- "Hafezi" gradient text: `from-[#22d3ee] via-[#6366f1] to-[#1e293b]`
- Social icon hovers
- Experience dots
- "Projects" label
- Timeline line gradients
- Timeline dots

### 3. Project Cards
**File:** `components/project-card.tsx`
Hardcoded hex colors used for:
- Card background: `bg-[#141b2d]`
- Card border: `border-[#1e293b]/50`
- Hover border: `hover:border-[#22d3ee]/30`
- Hover shadow: uses cyan RGB `rgba(34,211,238,0.15)`
- Featured ring: `ring-[#22d3ee]/30`
- Featured badge gradient: `from-[#22d3ee]/20 to-[#6366f1]/20`
- Star icon: `text-[#22d3ee]`
- Image overlay gradient: `from-[#141b2d]`

## Quick Search Patterns

To find all color usages, search for:
- `#0a0f1a` - Background
- `#141b2d` - Cards  
- `#1e293b` - Borders/Muted
- `#6366f1` - Indigo accent
- `#22d3ee` - Cyan primary

Also search for RGB equivalents:
- `34,211,238` - Cyan
- `99,102,241` - Indigo
- `30,41,59` - Slate

## Previous Palettes

### Coral/Mauve (December 2024)
| Hex | Name | Usage |
|-----|------|-------|
| `#11151C` | Darkest Navy | Background |
| `#212D40` | Dark Navy | Cards |
| `#364156` | Medium Navy | Borders |
| `#7D4E57` | Mauve/Wine | Secondary |
| `#D66853` | Coral | Primary |
