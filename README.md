# Crystal Kizor

An editorial portfolio for Crystal Kizor, bringing selected architectural work, ideas, and connected initiatives into one responsive single-page experience.

## Design rationale

The visual direction uses warm ivory, charcoal, clay, and muted olive with Cormorant Garamond display type and Manrope for interface and body text. The layout uses generous editorial spacing, thin rules, asymmetrical project imagery, and restrained hover transitions. Tailwind CSS 4 utilities provide component styling; global CSS is limited to brand tokens, document defaults, focus treatment, and reduced-motion behavior.

The page introduces Crystal's point of view before presenting work and the wider ecosystem. The initiatives are grouped into Design & Build, Knowledge & Voice, and People & Purpose so related efforts read as a connected practice rather than unrelated cards.

## Stack

- Next.js App Router 16.4
- React 19.3 and TypeScript 5.9
- Tailwind CSS 4.3
- Motion 14 and Lucide React 1.52 are already installed; the current page uses CSS transitions and no added client animation layer.
- pnpm 12

## Getting started

Install the locked dependencies and start the development server:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000` in a browser.

## Validation

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

There are no automated test scripts in `package.json` at this stage. The site has also been checked in a browser at mobile and desktop viewport widths, including the Escape-to-close mobile menu behavior.

## Assets

The original assessment brief and supplied source materials remain local-only under `assessment/brief/` and `assessment/original-assets/` and are intentionally not published in the public GitHub repository. Optimized WebP image derivatives used by the site live under `public/images/` and `public/logos/`; the original files were not modified. The header monogram and App Router favicon/Apple icon are crops of the supplied Crystal Kizor logo collection. The social preview is `public/og/crystal-kizor.png` (1200 × 630).

Publicly tracked written submissions live in `assessment/submission/`: the design-thinking note, AI product proposal, and analytics improvement response. They are not embedded on the homepage.

## Deployment

This project is deployed on Vercel at https://crystal-kizor-omega.vercel.app.

The production origin is configured through `NEXT_PUBLIC_SITE_URL` in the app's environment configuration, with `src/lib/site-config.ts` acting as the single configuration point. This keeps canonical URLs, Open Graph metadata, and social preview image URLs aligned with the live deployment. No server-side secrets, backend services, external image hosts, or analytics integrations are required.

## Content requiring confirmation

- Direct email, project enquiry, and speaking-booking destinations were not provided. The contact section therefore links to relevant on-page context rather than inventing an address or external destination.
- Project locations, technical descriptions, credits, awards, publication links, social profiles, and a fuller biography were not supplied and are not claimed here.
- The hero positioning and explanatory copy are editorial presentation, not asserted official taglines.
- Direct contact destinations remain unavailable; replace the contextual on-page routes only when verified project and speaking enquiry destinations are supplied.
