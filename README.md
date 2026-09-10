# Agletras - Static Company Portfolio Website

Agletras is a research-driven technology company focused on Open-Source Intelligence, intelligent automation, artificial intelligence research, cybersecurity, and information analysis.

This repository contains the static frontend source code for the Agletras corporate website.

## Features

- **Next.js 15+ App Router**: High-performance static site generation.
- **Tailwind CSS v4**: Modern, responsive, utility-first styling.
- **Framer Motion**: Subtle, sophisticated animations.
- **Static Export**: Generates pure HTML/CSS/JS without needing a Node.js server.
- **SEO & Accessibility**: Complete metadata, schema.org JSON-LD, robots.txt, sitemap.xml, and WCAG-friendly contrast.
- **Premium Design**: Dark technology aesthetic with subtle Banyan tree / network visualizations.

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build & Export

To create a production static build:

```bash
npm run build
```

The output will be placed in the `out/` directory, which contains purely static files ready to be hosted anywhere.

## Deployment to Cloudflare Pages

This project is configured for static export (`output: 'export'` in `next.config.ts`), making it incredibly fast and easy to deploy to Cloudflare Pages, GitHub Pages, Vercel, or Netlify.

**Steps for Cloudflare Pages:**

1. Push this code to a GitHub/GitLab/Bitbucket repository.
2. Log in to your Cloudflare Dashboard and navigate to **Workers & Pages**.
3. Click **Create application** -> **Pages** -> **Connect to Git**.
4. Select your repository.
5. In the Build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
6. Click **Save and Deploy**.

Cloudflare will automatically build and distribute your site globally across their edge network.

## Architecture Notes

- **No backend**: The site is 100% static to ensure maximum security and performance.
- **Lucide React**: Used for scalable, clean SVG iconography.
- **Motion**: Uses Framer Motion for scroll-triggered layout animations. Ensure `prefers-reduced-motion` is respected by utilizing Framer Motion's accessibility features implicitly or using standard transitions.

## License

Copyright © 2026 Agletras. All rights reserved.
