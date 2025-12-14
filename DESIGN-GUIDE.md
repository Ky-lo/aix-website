# AI Democratix Website - Design & Style Guide

**Version:** 1.0
**Theme:** Obsidian + Cyan
**Last Updated:** December 2025

This guide documents the design system and visual language for the AI Democratix website. Use this as a reference when creating new pages or building similar websites.

---

## 1. Design Philosophy

### Core Principles
- **Minimalist & Professional**: Clean, focused design with lots of white space
- **Dark Theme First**: Modern dark aesthetic with light mode as secondary option
- **Scannable Content**: Clear visual hierarchy for busy executive audience
- **Subtle Accents**: Strategic use of cyan for highlights and interactive elements
- **Mobile-First**: Responsive design that works seamlessly across all devices

### Brand Positioning
"Making AI Real" - Practical, structured AI Upskilling & Adoption partner for enterprise

---

## 2. Color Palette

### Primary Colors (Obsidian - Dark Grays)

```css
--color-obsidian-950: #0B0D10  /* Deepest dark - primary background */
--color-obsidian-900: #151820  /* Secondary background */
--color-obsidian-800: #1F2330  /* Tertiary background */
--color-obsidian-700: #2A2F40  /* Hover states */
--color-obsidian-600: #404968  /* Borders */
--color-obsidian-500: #5A6482  /* Muted elements */
```

### Accent Colors (Cyan)

```css
--color-cyan-400: #22D3EE  /* Bright highlights */
--color-cyan-500: #06B6D4  /* Primary accent */
--color-cyan-600: #0891B2  /* Hover states */
--color-cyan-700: #0E7490  /* Pressed states */
--color-cyan-800: #155E75  /* Deep accents */
```

### Text Colors (Slate)

```css
--color-slate-50:  #F8FAFC  /* Primary text on dark */
--color-slate-100: #E2E8F0  /* Secondary text */
--color-slate-200: #CBD5E1  /* Tertiary text */
--color-slate-300: #94A3B8  /* Muted text */
--color-slate-400: #64748B  /* Disabled text */
--color-slate-600: #475569  /* Text on light backgrounds */
--color-slate-700: #334155  /* Secondary text on light */
--color-slate-900: #0F172A  /* Primary text on light */
```

### Semantic Tokens (Dark Theme - Default)

```css
--bg-primary: #0B0D10
--bg-secondary: #151820
--bg-tertiary: #1F2330
--bg-hover: #2A2F40

--text-primary: #E2E8F0
--text-secondary: #CBD5E1
--text-tertiary: #94A3B8
--text-muted: #64748B

--border-primary: #2A2F40
--border-accent: #22D3EE

--accent-primary: #22D3EE
--accent-hover: #06B6D4
--accent-active: #0891B2
```

### Light Theme Overrides

When `data-theme="light"` is applied to `<html>`:

```css
--bg-primary: #F8FAFC
--bg-secondary: #F1F5F9
--text-primary: #0F172A
--border-accent: #0891B2
--accent-primary: #0891B2
```

---

## 3. Typography

### Font Families

```css
--font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif
--font-family-display: 'Instrument Serif', Georgia, serif
```

**Usage:**
- Body text: Inter (sans-serif)
- Headings: Instrument Serif (serif)

### Type Scale

```css
--font-size-small: 14px
--font-size-body: 16px
--font-size-large: 18px

H1: 72px (desktop) / 48px (mobile) - font-weight: 300
H2: 48px (desktop) / 32px (mobile) - font-weight: 400
H3: 28px - font-weight: 400
H4: 20px - font-weight: 600
Body: 16px - line-height: 1.6
```

### Line Heights

```css
--line-height-tight: 1.2
--line-height-normal: 1.6
--line-height-relaxed: 1.8
```

### Font Weights

- **300** - Light (for large headings)
- **400** - Regular (body, smaller headings)
- **500** - Medium (navigation links)
- **600** - Semi-bold (subheadings, emphasis)
- **700** - Bold (highlights, CTAs)

### Letter Spacing

- **Headlines**: -0.04em (tighter for large text)
- **Subheadings**: -0.02em
- **Body**: 0 (default)
- **Eyebrows/Labels**: 0.1em - 0.2em (uppercase labels)

---

## 4. Spacing System

### Base Unit: 8px

```css
--spacing-xs: 0.5rem   /* 8px */
--spacing-sm: 0.75rem  /* 12px */
--spacing-md: 1rem     /* 16px */
--spacing-lg: 1.5rem   /* 24px */
--spacing-xl: 2rem     /* 32px */
--spacing-2xl: 3rem    /* 48px */
--spacing-3xl: 4rem    /* 64px */
```

### Application Guidelines

- **Tiny gaps**: Use `--spacing-xs` (icons, inline elements)
- **Small gaps**: Use `--spacing-sm` (between related items)
- **Medium gaps**: Use `--spacing-md` to `--spacing-lg` (cards, form fields)
- **Large gaps**: Use `--spacing-xl` to `--spacing-2xl` (sections)
- **Section padding**: Use `--spacing-3xl` (major page sections)

---

## 5. Layout & Grid

### Container Widths

```css
--max-width: 1200px  /* Global max-width for content */
```

### Responsive Breakpoints

```css
Mobile Portrait:  < 768px
Mobile Landscape: 768px - 1024px
Tablet:          768px - 1024px
Desktop:         > 1024px
```

### Common Layouts

#### 1. Hero Section
- Full-width background
- Centered content, max-width 900px
- Vertical padding: `--spacing-xl`
- Min-height: 70vh (desktop), auto (mobile)

#### 2. Three-Column Grid
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: var(--spacing-xl);

/* Mobile */
@media (max-width: 1024px) {
  grid-template-columns: 1fr;
}
```

#### 3. Two-Column Grid (2x2)
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: var(--spacing-md);

/* Mobile */
@media (max-width: 768px) {
  grid-template-columns: 1fr;
}
```

---

## 6. Components

### Buttons

#### Primary Button
```css
background: var(--gradient-accent);
color: white;
padding: 14px 32px;
border-radius: 6px;
font-weight: 600;
transition: all 0.2s ease;

/* Hover */
transform: translateY(-2px);
box-shadow: var(--shadow-cyan);
```

#### Secondary Button
```css
background: transparent;
border: 1px solid var(--border-accent);
color: var(--accent-primary);
```

### Cards

#### Standard Card
```css
background: var(--bg-secondary);
border: 1px solid var(--border-primary);
border-radius: 8px;
padding: var(--spacing-xl);
transition: all 0.3s ease;

/* Hover */
transform: translateY(-4px);
box-shadow: var(--shadow-cyan);
border-color: var(--border-accent);
```

#### Accent Border Card
```css
border-left: 4px solid var(--border-accent);

/* Hover */
border-left-width: 6px;
transform: translateX(4px);
```

### Section Eyebrows

Small labels above section headings:
```css
font-size: 12px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.1em;
color: var(--color-cyan-500);
```

### Navigation

#### Desktop Nav Links
```css
font-size: 15px;
font-weight: 500;
border-bottom: 2px solid transparent;

/* Active */
color: var(--accent-primary);
border-bottom-color: var(--accent-primary);
```

#### Mobile Nav Links
```css
border-left: 3px solid transparent;
padding: var(--spacing-sm);

/* Active */
color: var(--accent-primary);
border-left-color: var(--accent-primary);
background: rgba(34, 211, 238, 0.1);
```

### Footer

```css
background: var(--color-obsidian-900);
border-top: 1px solid rgba(34, 211, 238, 0.2);
padding: var(--spacing-md) 0;

/* Layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

/* Mobile: Stack vertically */
@media (max-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
}
```

---

## 7. Shadows & Effects

### Shadow System

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.5);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.6);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.7);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.8);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.9);

/* Cyan glow for interactive elements */
--shadow-cyan: 0 4px 12px rgba(34, 211, 238, 0.3);
```

### Gradients

```css
/* Primary dark gradient */
--gradient-primary: linear-gradient(135deg, #0B0D10 0%, #1F2330 50%, #0E7490 100%);

/* Cyan accent gradient */
--gradient-accent: linear-gradient(90deg, #06B6D4 0%, #22D3EE 100%);

/* Subtle background gradient */
--gradient-subtle: linear-gradient(180deg, #151820 0%, #1F2330 100%);
```

### Border Radius

```css
--border-radius: 8px  /* Standard */
--border-radius-sm: 6px  /* Buttons, small elements */
--border-radius-lg: 12px  /* Large cards */
```

### Transitions

```css
--transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1)
```

---

## 8. Interactive States

### Hover States

**Cards:**
- `transform: translateY(-4px)` - Lift effect
- Add `box-shadow: var(--shadow-cyan)` - Cyan glow
- Change `border-color` to `--border-accent`

**Buttons:**
- `transform: translateY(-2px)` - Subtle lift
- Increase shadow intensity
- Brighten background slightly

**Links:**
- `color: var(--accent-hover)` - Cyan hover color
- `opacity: 1` - Remove any transparency

### Active States

**Buttons:**
- `transform: scale(0.98)` - Press down effect
- `color: var(--accent-active)` - Darker cyan

**Navigation:**
- Border indicator (bottom for desktop, left for mobile)
- Cyan text color
- Subtle background highlight

### Focus States

```css
outline: 2px solid var(--border-accent);
outline-offset: 2px;
```

---

## 9. Animation Patterns

### Logo Marquee

```css
animation: scroll 40s linear infinite;

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Pause on hover */
.marqueeTrack:hover {
  animation-play-state: paused;
}
```

### Testimonial Carousel

- Auto-advance every 7 seconds
- Fade transition between slides
- Pause on hover
- Manual navigation with arrows and dots

### Image Effects

```css
/* Grayscale to color on hover */
filter: grayscale(100%);
opacity: 0.6;

/* Hover */
filter: grayscale(0%);
opacity: 1;
transform: scale(1.05);
```

---

## 10. Iconography

### Icon Library
**Lucide React** - Consistent, simple line icons

### Icon Sizes
- Small: 16px (footer, inline)
- Medium: 20-24px (navigation, section eyebrows)
- Large: 32px+ (hero sections)

### Icon Colors
- Primary: `--text-primary`
- Accent: `--accent-primary` (eyebrows, highlights)
- Muted: `--text-muted` (secondary icons)

---

## 11. Accessibility

### Contrast Ratios
- Text on dark background: WCAG AA compliant (4.5:1 minimum)
- Cyan accent (#22D3EE) provides sufficient contrast on dark (#0B0D10)

### Focus Indicators
All interactive elements have visible focus states with cyan outline

### Keyboard Navigation
- Tab navigation works through all interactive elements
- Mobile menu closes on selection
- Skip to content links (if needed)

### Screen Readers
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for images
- ARIA labels for icon-only buttons

---

## 12. Best Practices

### Do's ✅
- Use semantic design tokens (--bg-primary, --accent-primary) instead of raw colors
- Maintain consistent spacing using the 8px grid
- Keep visual hierarchy clear (size, weight, color)
- Test on mobile devices (both portrait and landscape)
- Use cyan strategically for highlights, not everywhere
- Provide hover states for all interactive elements
- Keep sections scannable with clear eyebrows and headings

### Don'ts ❌
- Don't use more than 3 levels of visual hierarchy per section
- Don't mix font families (stick to Inter + Instrument Serif)
- Don't add complexity without purpose
- Don't use bright colors beyond cyan accent
- Don't skip responsive testing
- Don't use animations that can't be paused
- Don't create walls of text - break into sections

---

## 13. Component Examples

### Section Structure

```tsx
<Section
  eyebrow="CATEGORY LABEL"
  eyebrowIcon={<Icon />}
  title="Section Heading"
  intro="Optional introductory paragraph"
  background="alt"  // or "default"
>
  {/* Content */}
</Section>
```

### Card with Accent Border

```tsx
<div className={styles.card}>
  <h3>Card Title</h3>
  <p>Card content with clear hierarchy</p>
</div>
```

```css
.card {
  padding: var(--spacing-xl);
  background: var(--bg-secondary);
  border-left: 4px solid var(--border-accent);
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
}

.card:hover {
  border-left-width: 6px;
  transform: translateX(4px);
  box-shadow: var(--shadow-cyan);
}
```

### Gradient Text Effect

```css
.gradientText {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 14. File Organization

```
/src
  /app
    globals.css          # Design tokens & base styles
    /[page]
      page.tsx           # Page component
      page.module.css    # Page-specific styles
  /components
    /ui                  # Reusable components
    /layout              # Header, Footer
    /home                # Page-specific components
  /lib
    constants.ts         # Site config
```

---

## 15. Version History

**v1.0** - December 2025
- Initial Obsidian + Cyan theme
- Dark theme as default with light mode toggle
- Full responsive design (mobile-first)
- Component library established
- Testimonial carousel and logo marquee

---

## 16. Future Considerations

### Potential Enhancements
- Animation library for page transitions
- Extended color palette (orange/red variants)
- Dark mode auto-detection based on system preference
- Print stylesheet for document-friendly pages
- Enhanced micro-interactions

### Scalability
This design system is built to scale:
- Use design tokens for easy theme switching
- Modular components can be reused across pages
- Responsive patterns apply to new content
- Semantic naming makes updates straightforward

---

**Document Maintained By:** AI Democratix Development Team
**For Questions:** yamseng.or@aidemocratix.com
