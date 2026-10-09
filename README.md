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

Original assessment imagery is preserved under `assessment/original-assets/`. Optimized WebP derivatives used by the site live under `public/images/` and `public/logos/`; the original files were not modified. The header monogram and App Router favicon/Apple icon are crops of the supplied Crystal Kizor logo collection. The social preview is `public/og/crystal-kizor.png` (1200 × 630).

Separate assessment responses are in `assessment/submission/`: the AI product proposal, analytics/improvement answer, and design-thinking note. They are not included in the homepage.

## Deployment

Deploy the repository to Vercel using the Next.js preset. Connect the Git repository, use the `pnpm` package manager, and run the standard `pnpm build` production build. No server-side secrets, backend services, external image hosts, or analytics integrations are required.

Set `NEXT_PUBLIC_SITE_URL` to the real production origin in Vercel's Production environment variables after the domain is confirmed (for local verification, put the same variable in ignored `.env.local`). `src/lib/site-config.ts` is the single configuration point. When set, Next.js emits the canonical URL and absolute Open Graph/Twitter social-image URLs; without it, domain-dependent metadata is omitted. Do not set it to localhost or an example domain for a public deployment.

After deployment, inspect the generated page source for canonical, Open Graph and Twitter metadata and fetch the configured social image URL. Use each platform's sharing debugger to inspect and refresh cached previews after metadata or image changes.

## Content requiring confirmation

- Direct email, project enquiry, and speaking-booking destinations were not provided. The contact section therefore links to relevant on-page context rather than inventing an address or external destination.
- Project locations, technical descriptions, credits, awards, publication links, social profiles, and a fuller biography were not supplied and are not claimed here.
- The hero positioning and explanatory copy are editorial presentation, not asserted official taglines.
- The real deployment origin is not yet known. Configure `NEXT_PUBLIC_SITE_URL` before publishing so canonical and social metadata can resolve to the live site.
- Direct contact destinations remain unavailable; replace the contextual on-page routes only when verified project and speaking enquiry destinations are supplied.
