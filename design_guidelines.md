# Hope Senior School - Design Guidelines

## Design Approach
**System:** Material Design principles adapted for educational credibility
**Rationale:** Schools require trustworthy, accessible, professional interfaces that communicate stability and competence while remaining approachable for students, parents, and staff.

## Typography System
- **Headings:** Inter (700 weight for H1/H2, 600 for H3/H4)
  - H1: text-5xl md:text-6xl
  - H2: text-4xl md:text-5xl  
  - H3: text-2xl md:text-3xl
  - H4: text-xl md:text-2xl
- **Body:** Inter (400 regular, 500 medium for emphasis)
  - Base: text-base md:text-lg
  - Small: text-sm
- **Navigation:** Inter 500 medium, text-sm uppercase tracking-wide

## Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl (for text-heavy sections)
- Grid gaps: gap-6 md:gap-8

## Page Structure (Homepage)

### 1. Navigation Header
- Sticky header with school logo (left), main nav links (center), "Apply Now" CTA (right)
- Desktop: horizontal menu, Mobile: hamburger menu
- Include quick links: Admissions, Academics, Contact

### 2. Hero Section (80vh)
**Image:** Wide campus photo showing main building with students (outdoor scene, welcoming)
- Full-width background image with gradient overlay for text readability
- Centered content: School name (H1), tagline "Inspiring Excellence Since [Year]", dual CTAs (primary: "Schedule a Visit", secondary: "Learn More")
- Subtle stats bar at bottom: "500+ Students | 95% College Acceptance | 50+ Years Excellence"

### 3. Welcome Section (2-column)
- Left: Principal's welcome message with headshot photo
- Right: Mission statement and core values presented as clean cards

### 4. Academic Programs (3-column grid)
- Cards showcasing: Primary School, Middle School, High School divisions
- Each card: icon, program name, brief description, "Explore Program" link
- Hover elevation effect

### 5. Why Choose Hope (4-column metrics)
- Statistics display: "500+ Students", "25:1 Student-Teacher Ratio", "95% College Acceptance", "30+ Extracurricular Activities"
- Large numbers with supporting text

### 6. Campus Life Gallery (Masonry grid)
- 6-8 images: Classrooms, sports facilities, library, science labs, performing arts
- Image captions on hover
- "Virtual Tour" CTA button below gallery

### 7. Testimonials (2-column alternating)
- Student and parent testimonials with photos
- Quote format with attribution (name, role, graduation year)

### 8. News & Events (3-column cards)
- Recent announcements and upcoming events
- Each card: thumbnail image, date, headline, excerpt
- "View All News" link

### 9. Quick Links Section (4-column)
- Admissions Process, Academic Calendar, Parent Portal, Career Opportunities
- Icon + title + description format

### 10. Contact CTA Section
- Centered: "Ready to Join Our Community?"
- Form fields: Name, Email, Phone, Message
- Right side: Contact information (address, phone, email, office hours)
- Embedded map showing school location

### 11. Footer
- Top: School logo, brief description
- Middle row (4 columns): Quick Links, Academics, Admissions, Resources
- Bottom: Newsletter signup, social media icons, copyright, privacy policy
- "Accredited by [Organizations]" trust badges

## Component Library

**Navigation:**
- Transparent header on hero, solid on scroll
- Dropdown menus for multi-level navigation (Academics > Departments)

**Buttons:**
- Primary: Solid fill, rounded-md, px-8 py-3
- Secondary: Outline style, same padding
- Text links: Underline on hover with arrow icon

**Cards:**
- Rounded-lg, subtle shadow, hover:shadow-lg transition
- Consistent padding: p-6
- Image cards: Image fills top, content below

**Forms:**
- Full-width inputs with labels above
- Rounded-md borders, focus states with ring
- Helper text below fields

**Image Treatment:**
- Aspect ratios: 16:9 for landscape, 3:4 for portraits
- Rounded corners: rounded-lg
- Object-fit: cover for consistency

## Images Required
1. **Hero:** Wide campus exterior with students (professional photography)
2. **Principal photo:** Professional headshot
3. **Academic programs:** 3 representative images per division
4. **Campus gallery:** 6-8 facility photos
5. **Testimonial photos:** 4-6 student/parent portraits
6. **News thumbnails:** Event and activity photos

## Accessibility
- Semantic HTML throughout (nav, main, section, article)
- Alt text for all images
- ARIA labels for interactive elements
- Keyboard navigation support
- Form labels and error states clearly indicated
- Minimum touch target: 44x44px

## Responsive Behavior
- Mobile: Single column, stacked sections, collapsible navigation
- Tablet: 2-column grids become active
- Desktop: Full multi-column layouts, maximum 4 columns

This creates a comprehensive, trustworthy school website that balances information density with visual appeal, establishing credibility while remaining accessible to all audiences.