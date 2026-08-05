# United Church of Religious Science

A complete, professional nonprofit website built with React 18, Vite, Tailwind CSS, React Router DOM, React Helmet Async, and Lucide React.

## Organization
- **Name**: United Church of Religious Science
- **EIN**: 77-0003763
- **Status**: 501(c)(3) Tax-Exempt Religious Organization
- **Address**: 2646 Palma Dr Ste 250, Ventura, CA 93003-7739
- **Email**: admin@unitedchurchofreligiousscience.sbs
- **Website**: https://unitedchurchofreligiousscience.sbs

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment (GitHub Pages)

1. Push this repository to GitHub
2. Go to Settings > Pages
3. Select "Deploy from a branch" and choose `gh-pages` or configure GitHub Actions
4. Update `vite.config.js` base URL if deploying to a subdirectory

## Structure
- `src/pages/` - All page components
- `src/components/` - Reusable UI components
- `src/layouts/` - Layout wrappers
- `src/seo/` - SEO and Schema.org components
- `public/` - Static assets

## Compliance Notes
- EIN appears 10+ times across the site
- Physical address appears 8+ times
- Email is clickable (mailto:) and appears 6+ times
- Phone is clickable (tel:)
- No placeholder text or Lorem Ipsum
- Schema.org Organization JSON-LD included
- Sitemap.xml and robots.txt included
