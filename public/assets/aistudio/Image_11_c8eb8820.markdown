---
name: Vibrant Adventure System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#603e39'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#956d67'
  outline-variant: '#ebbbb4'
  surface-tint: '#c00100'
  primary: '#bc0100'
  on-primary: '#ffffff'
  primary-container: '#eb0000'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4a8'
  secondary: '#745b00'
  on-secondary: '#ffffff'
  secondary-container: '#ffcb09'
  on-secondary-container: '#6f5700'
  tertiary: '#3c4dcb'
  on-tertiary: '#ffffff'
  tertiary-container: '#5768e6'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930100'
  secondary-fixed: '#ffe08d'
  secondary-fixed-dim: '#f2c000'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#dfe0ff'
  tertiary-fixed-dim: '#bcc2ff'
  on-tertiary-fixed: '#000b62'
  on-tertiary-fixed-variant: '#2335b5'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e5e2e1'
typography:
  h1:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Spline Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Spline Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin: 32px
  container-max: 1280px
---

## Brand & Style

This design system is built on the thrill of discovery and the high-energy aesthetics of world-class gaming franchises. The brand personality is **vibrant, competitive, and adventurous**, targeting an audience that values nostalgia blended with cutting-edge digital experiences. 

The design style is a hybrid of **High-Contrast Bold** and **Tactile Minimalism**. It utilizes heavy saturated strokes, oversized typography, and physical metaphors to create an interface that feels like a premium handheld gaming device. The goal is to evoke a sense of "the journey," using energetic motion and primary colors to keep the user engaged in a playful, high-stakes environment.

## Colors

The palette is derived from iconic adventurous themes, utilizing high-chroma primaries to establish immediate brand recognition. 

- **Pokéball Red (#FF0000):** Used for primary actions, critical alerts, and top-tier branding elements.
- **Pikachu Yellow (#FFCB05):** Reserved for highlights, achievements, and "special" interactive states to provide warmth and energy.
- **Blue (#3B4CCA):** Utilized for secondary information, links, and progress indicators, offering a cool contrast to the warmer tones.
- **Neutral (#212121):** A deep charcoal used for heavy borders and high-readability text to ground the vibrant palette.

Backgrounds remain off-white to allow the high-saturation components to pop without causing visual fatigue.

## Typography

The typography strategy prioritizes impact and character. **Epilogue** is used for headlines to provide a heavy, editorial feel that demands attention. **Spline Sans** offers a friendly and dynamic rhythm for body copy, maintaining legibility during long gaming descriptions. **Space Grotesk** is reserved for labels and technical data, providing a slight futuristic/geometric edge that fits the tech-heavy lore of the adventure theme. Use tight letter-spacing on headlines to enhance the "bold" gaming aesthetic.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** with generous margins to frame content like a screen within a screen. Spacing follows an 8px base unit to ensure mathematical harmony. 

To support high-impact scroll animations, sections should be defined by clear vertical "zones" with high padding (minimum 120px) to allow for **parallax offsets** and **fade-in triggers** as the user moves down the page. Elements should have "breathing room" to transition into the viewport without overlapping with adjacent content.

## Elevation & Depth

Depth is conveyed through **Bold Borders** and **Hard Shadows** rather than soft blurs. Elements should feel physical and "pressable."

- **Level 1 (Surface):** 2px solid neutral border.
- **Level 2 (Hover/Lift):** A 4px offset hard shadow (non-blurred) using the neutral color to simulate the element popping off the page.
- **Active State:** The element shifts 2px down and right, mimicking a physical button press and reducing the shadow depth.

This tactile approach ensures the interface feels like a collection of physical objects.

## Shapes

The shape language is primarily **Rounded**, striking a balance between friendly approachability and the sleek industrial design of modern hardware. 

- **Standard Containers:** Use `rounded-lg` (1rem) for most cards and sections.
- **Interactive Elements:** Buttons and badges use `rounded-xl` (1.5rem) or full pill-shapes to invite interaction.
- **Accents:** Use circular shapes specifically for iconography and Pokéball-inspired motifs to create a thematic rhythm.

## Components

### Pokéball Buttons
Buttons are split horizontally. The top half is Pokéball Red and the bottom half is White, separated by a thick 3px Neutral band. A circular "button" icon sits in the dead center. On hover, the center icon glows Pikachu Yellow.

### Cards & Hover Lifts
Cards feature a thick 2px Neutral outline. Upon hover, the card should scale by 1.02x and gain a hard Pikachu Yellow shadow offset by 6px. This "lift" effect provides immediate feedback that the card is a selectable item.

### Input Fields
Inputs are stark white with heavy 2px borders. Focus states change the border color to Blue and add a subtle Blue inner glow.

### Adventure Chips
Small, pill-shaped badges used for categories or "Type" labels. These use the Tertiary Blue or Secondary Yellow backgrounds with high-contrast bold text.

### Scroll Animations
- **Parallax:** Background environmental assets (like clouds or terrain) should move at 0.5x scroll speed relative to the foreground content.
- **Staggered Fade-ins:** Elements within a grid should fade and slide up 20px sequentially (200ms delay between items) as they enter the viewport to create a sense of discovery.