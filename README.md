# AI Democratix Website

A professional corporate website for AI Democratix, an AI Upskilling & Adoption consultancy based in Singapore.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + Plain CSS with design tokens
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)
- **Analytics**: Google Analytics 4
- **Hosting**: GitHub Pages with automated deployment

## Project Structure

```
aix-website/
├── .github/workflows/      # GitHub Actions deployment
├── public/                 # Static assets
│   ├── images/
│   └── .nojekyll          # For GitHub Pages
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/
│   │   ├── programs-services/
│   │   ├── how-we-work/
│   │   ├── clients-outcomes/
│   │   ├── contact/
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   ├── globals.css    # Global styles & design tokens
│   │   └── not-found.tsx  # 404 page
│   ├── components/
│   │   ├── layout/        # Header, Footer
│   │   ├── ui/            # Reusable UI components
│   │   ├── home/          # Home page sections
│   │   ├── contact/       # Contact form
│   │   └── analytics/     # Google Analytics
│   ├── lib/
│   │   └── constants.ts   # Site constants
│   └── types/
│       └── index.ts       # TypeScript interfaces
├── next.config.ts         # Next.js config (static export)
└── package.json
```

## Local Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aix-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional)**
   ```bash
   cp .env.local.example .env.local
   ```
   Add your Google Analytics ID to `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

The static site will be exported to the `/out` directory.

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: GitHub Actions

2. **Add Google Analytics secret**
   - Go to repository Settings > Secrets and variables > Actions
   - Add a new secret:
     - Name: `GA_MEASUREMENT_ID`
     - Value: Your Google Analytics measurement ID (G-XXXXXXXXXX)

3. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy website"
   git push origin main
   ```

The GitHub Actions workflow will automatically build and deploy your site.

## Design System

### Colors
- Background: `#F2F2F2`
- Background Alt: `#FFFFFF`
- Text Primary: `#222222`
- Text Secondary: `#555555`
- Accent: `#2F80ED`
- Border: `#E0E0E0`

### Typography
- Font Family: Inter (Google Fonts)
- H1: 40px (32px mobile)
- H2: 28px (24px mobile)
- H3: 22px (18px mobile)
- Body: 16px

### Spacing
- XS: 8px
- SM: 16px
- MD: 24px
- LG: 40px
- XL: 60px
- 2XL: 80px

## Content Updates

### Updating Page Content

1. **Navigate to the page file** in `src/app/[page]/page.tsx`
2. **Edit the content** directly in the JSX
3. **Test locally** with `npm run dev`
4. **Commit and push** to deploy

### Replacing Placeholder Images

1. **Add your images** to `public/images/`
2. **Update image references** in page components
3. **Recommended formats**: WebP with PNG/JPG fallback
4. **Set explicit dimensions** to prevent layout shift

### Adding Case Studies

Edit `src/app/clients-outcomes/page.tsx` and add new case study blocks following the existing template structure.

## Key Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Static site generation (fast, SEO-friendly)
- ✅ Accessibility compliant (WCAG 2.1 AA)
- ✅ Google Analytics integration
- ✅ Contact form (mailto: based)
- ✅ Smooth animations and hover effects
- ✅ Optimized for GitHub Pages

## Pages

1. **Home** (`/`) - Hero, services overview, process, founder bio
2. **About** (`/about/`) - Company story, philosophy, team
3. **Programs & Services** (`/programs-services/`) - Detailed service offerings
4. **How We Work** (`/how-we-work/`) - 4-step engagement model
5. **Clients & Outcomes** (`/clients-outcomes/`) - Case studies, testimonials
6. **Contact** (`/contact/`) - Contact form and alternative methods

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For questions or support:
- Email: yamseng.or@aidemocratix.com
- LinkedIn: [linkedin.com/in/yamseng](https://linkedin.com/in/yamseng)

## License

© 2025 AI Democratix. All rights reserved.
