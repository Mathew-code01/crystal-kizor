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

## Assets

Original assessment imagery is preserved under `assessment/original-assets/`. Optimized WebP derivatives used by the site live under `public/images/` and `public/logos/`. The originals were not modified. The header monogram is cropped from the supplied Crystal Kizor logo collection; original files remain available in the assessment directory.

## Deployment

Deploy the repository to Vercel using the Next.js preset. Connect the Git repository, use the `pnpm` package manager, and run the standard `pnpm build` production build. No server-side secrets, backend services, external image hosts, or analytics integrations are required.

Set the canonical production URL in Next.js metadata only after the deployment domain is confirmed; no production URL is currently known, so `metadataBase` is intentionally omitted.

## Content requiring confirmation

- Direct email, project enquiry, and speaking-booking destinations were not provided. The contact section therefore links to relevant on-page context rather than inventing an address or external destination.
- Project locations, technical descriptions, credits, awards, publication links, social profiles, and a fuller biography were not supplied and are not claimed here.
- The hero positioning and explanatory copy are editorial presentation, not asserted official taglines.
