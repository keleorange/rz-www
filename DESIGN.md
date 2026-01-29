# Design System: About Us - Corporate Profile
**Project ID:** projects/13332561399360083140

## 1. Visual Theme & Atmosphere

The design embodies **Professional Governmental Gravitas** with a clean, authoritative aesthetic. The interface balances traditional institutional trustworthiness with modern digital clarity. The overall mood is:
- **Formal yet Approachable**: Serious expertise without appearing cold
- **Data-Driven Authority**: Charts and metrics presented with visual hierarchy
- **Breathing Spaciousness**: Generous whitespace between content blocks
- **Modernist Precision**: Sharp alignments and consistent grid structure

## 2. Color Palette & Roles

### Primary Colors
- **Deep Institutional Red** (#B22222): Primary call-to-action buttons, key navigation elements, section accents
- **Dark Crimson** (#8B0000): Hover states for primary actions, important emphasis points
- **Professional Charcoal** (#1A1A1A): Main heading text, body copy, footer backgrounds

### Supporting Colors
- **Soft Neutral Background** (#F9FAFB): Page background, creating breathing room
- **Pure White** (#FFFFFF): Card surfaces, content containers, header background
- **Medium Gray** (#6B7280): Secondary text, metadata, supporting information
- **Light Border Gray** (#E5E7EB): Subtle dividers, card borders

## 3. Typography Rules

### Font Families
- **Primary Display**: Noto Sans SC - Used for all headings and navigation
  - Ultra-bold (900 weight) for major headings (H1, H2)
  - Bold (700 weight) for subheadings (H3, H4)
  - Semibold (600 weight) for labels and emphasis
  - Regular (400 weight) for body text

- **Serif Accent**: Playfair Display - Reserved for decorative headings when elegance is needed

### Typography Scale
- **Hero Headlines**: 3rem (48px) - 5xl, extra bold, charcoal color
- **Section Titles**: 2.25rem (36px) - 4xl, bold, charcoal color
- **Subsection Headers**: 1.5rem (24px) - 2xl, bold
- **Body Text**: 1rem (16px) - base, regular weight, gray-700
- **Small Metadata**: 0.875rem (14px) - sm, gray-500

### Letter Spacing & Line Height
- Headings: Tight letter spacing (-0.025em) for impact
- Body text: Normal letter spacing with generous line-height (1.6-1.8)

## 4. Component Stylings

### Buttons
- **Primary Button**:
  - Deep Institutional Red (#B22222) background
  - White text, semibold weight
  - Gentle corner rounding (0.5rem / 8px)
  - Hover: Transitions to Dark Crimson (#8B0000)
  - Padding: 0.75rem horizontal, 1.5rem vertical
  - Icon integration with Material Symbols

- **Secondary Button**:
  - Transparent background with Deep Red border (2px)
  - Red text matching border
  - Same corner rounding
  - Hover: Fills with red background, white text

### Cards/Containers
- **Corner Treatment**: Softly rounded (0.5rem / 8px radius)
- **Background**: Pure white (#FFFFFF) on light gray pages
- **Shadows**: Subtle elevation with soft gray shadows
  - Default: shadow-md (0 4px 6px rgba(0,0,0,0.07))
  - Hover: shadow-xl (0 20px 25px rgba(0,0,0,0.1))
- **Borders**: Hairline borders in light gray (#E5E7EB) when needed
- **Padding**: Generous internal spacing (1.5rem / 24px)

### Navigation
- **Top Navigation Bar**:
  - White background with subtle shadow
  - Horizontal link arrangement
  - Charcoal text with red hover state
  - Logo positioned left, links center, actions right

### Icons
- **Icon System**: Material Symbols Outlined
- **Styling**:
  - Light weight (300)
  - 24px default size
  - Aligned inline with text
  - Primary red color for emphasis

### Inputs/Forms
- **Border Style**: Solid 1px light gray borders
- **Corner Radius**: 0.375rem (6px) - slightly rounded
- **Focus State**: Red ring outline
- **Background**: White with subtle gray on disabled

## 5. Layout Principles

### Grid & Spacing
- **Container Width**: Max 1280px (xl breakpoint), centered
- **Column Grid**:
  - 1 column on mobile
  - 2 columns on tablet (md: 768px)
  - 4 columns on desktop (lg: 1024px)
- **Gap Spacing**: 2rem (32px) between cards/elements
- **Section Padding**: 4rem (64px) vertical, 1.5rem horizontal

### Whitespace Strategy
- **Generous Vertical Rhythm**: 3-4rem between major sections
- **Card Internal Spacing**: 1.5-2rem padding
- **Text Block Margins**: 1rem between paragraphs
- **Breathing Room**: Consistent 8px baseline grid

### Responsive Behavior
- **Desktop-First Design**: Optimized for 1280px-2560px viewports
- **Stacked Mobile**: Cards and grids collapse to single column
- **Flexible Images**: Scale proportionally while maintaining aspect ratios

## 6. Depth & Elevation

The design employs a **subtle layering system**:
- **Base Layer** (Page background): Flat, soft gray
- **Surface Layer** (Cards, containers): White with gentle shadows
- **Elevated Layer** (Modals, dropdowns): Deeper shadows (shadow-2xl)
- **Shadow Philosophy**: Whisper-soft diffused shadows that suggest depth without overwhelming

### Shadow Scale
- `shadow-sm`: Subtle hint of elevation (headers)
- `shadow-md`: Standard card depth (default cards)
- `shadow-lg`: Emphasized cards (featured content)
- `shadow-xl`: Interactive hover states
- `shadow-2xl`: Floating modals and overlays

## 7. Interaction States

### Hover Effects
- **Links**: Color shift from charcoal to primary red
- **Buttons**: Darken background color, slight scale transform
- **Cards**: Elevate shadow from md to xl
- **Icons**: Color shift to primary red

### Active States
- **Current Navigation**: Primary red text with bottom border accent
- **Selected Items**: Red background with white text

### Transitions
- **Duration**: 0.3s for most transitions
- **Easing**: ease-in-out for smooth, professional feel
- **Properties**: color, background-color, box-shadow, transform

## 8. Content Density

- **Airy Presentation**: Prioritizes readability over information density
- **Focused Content Blocks**: One main idea per card or section
- **Scannable Headlines**: Large, bold headings guide the eye
- **Supporting Details**: Smaller gray text provides context without clutter
