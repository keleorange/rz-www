# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Payload CMS 3.x website template built with Next.js 15 (App Router), TypeScript, and Vercel Postgres. It's a full-stack application where Payload CMS powers both the admin panel and the frontend website in a single deployment.

## Tech Stack

- **CMS**: Payload CMS 3.73.0
- **Framework**: Next.js 15.4.11 (App Router)
- **Database**: Vercel Postgres (via `@payloadcms/db-vercel-postgres`)
- **Editor**: Lexical Rich Text Editor
- **Styling**: TailwindCSS 4.x + shadcn/ui components
- **Testing**: Vitest (integration) + Playwright (e2e)
- **Package Manager**: pnpm (required: ^9 || ^10)

## Development Commands

```bash
# Development
pnpm dev                    # Start dev server (http://localhost:3000)
pnpm build                  # Production build (runs next-sitemap after)
pnpm start                  # Start production server

# Type Safety
pnpm generate:types         # Generate TypeScript types from Payload schema
pnpm generate:importmap     # Generate import map for admin panel

# Testing
pnpm test                   # Run all tests (integration + e2e)
pnpm test:int               # Run Vitest integration tests
pnpm test:e2e               # Run Playwright e2e tests

# Code Quality
pnpm lint                   # Run ESLint
pnpm lint:fix               # Fix ESLint issues

# Database (Postgres)
pnpm payload migrate:create # Create new migration
pnpm payload migrate        # Run pending migrations
```

## Architecture

### Directory Structure

```
src/
├── app/
│   ├── (frontend)/         # Public website routes (Next.js App Router)
│   │   ├── [slug]/         # Dynamic page routes
│   │   ├── posts/          # Blog listing and posts
│   │   ├── search/         # Search functionality
│   │   └── next/           # API routes (seed, preview, exit-preview)
│   └── (payload)/          # Payload admin panel + API
│       ├── admin/          # Admin UI routes
│       └── api/            # REST + GraphQL APIs
├── collections/            # Payload collections (Pages, Posts, Media, Categories, Users)
├── globals/                # Payload globals (Header, Footer)
├── blocks/                 # Layout builder blocks (Hero, Content, Media, CTA, Archive, Form, Code, Banner)
├── heros/                  # Hero variants (HighImpact, MediumImpact, LowImpact, PostHero)
├── components/             # Shared React components
├── access/                 # Access control functions (authenticated, anyone, authenticatedOrPublished)
├── fields/                 # Reusable field configurations (slug, link, defaultLexical)
├── hooks/                  # Payload hooks (revalidation, populateAuthors, etc.)
├── utilities/              # Helper functions (generateMeta, getMediaUrl, formatAuthors)
├── providers/              # React context providers (Theme, HeaderTheme)
└── payload.config.ts       # Main Payload configuration
```

### Key Architectural Patterns

**Payload + Next.js Integration**: The app serves both the admin panel (`/admin`) and the public website from the same Next.js instance using route groups.

**Layout Builder Pattern**: Pages and Posts use a flexible layout builder with reusable blocks (`src/blocks/`). Each block has a `config.ts` (Payload schema) and `Component.tsx` (React rendering).

**Draft Preview System**: Uses Payload's versions/drafts feature with custom preview URLs that securely fetch draft content in the frontend.

**On-Demand Revalidation**: Collections and globals have `afterChange` hooks that trigger Next.js revalidation when published content changes.

**Access Control**: Three-tier system (collection-level, field-level, global-level). See `src/access/` for reusable access control functions. **CRITICAL**: Local API operations bypass access control by default unless `overrideAccess: false` is set.

## Important Development Notes

### Type Generation

Always run `pnpm generate:types` after changing Payload schemas. Generated types are in `src/payload-types.ts`.

### Database Migrations (Postgres)

This project uses Vercel Postgres with strict schema management:

- **Development**: `push: true` in config syncs schema changes automatically
- **Production**: Must create and run migrations:
  ```bash
  pnpm payload migrate:create  # Before deploying
  pnpm payload migrate         # On server before start
  ```

### Access Control Patterns

The codebase defines reusable access control in `src/access/`:
- `anyone.ts`: Public access
- `authenticated.ts`: Logged-in users only
- `authenticatedOrPublished.ts`: Public sees published, users see all (including drafts)

When using Local API with a user context, always set `overrideAccess: false`:
```typescript
await payload.find({
  collection: 'posts',
  user: req.user,
  overrideAccess: false, // Required to enforce access control
})
```

### Live Preview & Draft System

Collections with drafts enabled (Pages, Posts) use:
- `versions: { drafts: true }` for draft/publish workflow
- Custom preview URLs that redirect to frontend with secure tokens
- `afterChange` hooks to revalidate published content

### Plugin Configuration

Payload plugins are configured in `src/plugins/index.ts`:
- Form Builder
- Nested Docs (for Categories)
- Redirects
- Search (with custom `beforeSync` and `fieldOverrides`)
- SEO
- Vercel Analytics & Speed Insights

### Styling & Components

- **TailwindCSS 4.x** with custom configuration
- **shadcn/ui** components in `src/components/ui/`
- **CSS Variables** defined in `src/cssVariables.js` for theming
- **Dark Mode** support via Theme provider (`src/providers/Theme/`)

### Testing Approach

- **Integration tests** (Vitest): Test Payload operations, hooks, access control
- **E2E tests** (Playwright): Test full user workflows including admin panel

### Jobs & Scheduled Publishing

Configured in `payload.config.ts` with cron-based job execution. Access control allows:
- Authenticated users (in admin panel)
- Vercel Cron (via `CRON_SECRET` bearer token)

## Environment Variables

Required variables (see `.env.example`):
- `POSTGRES_URL`: Database connection string
- `PAYLOAD_SECRET`: Encryption secret
- `NEXT_PUBLIC_SERVER_URL`: Public URL (auto-set on Vercel)
- `CRON_SECRET`: For scheduled jobs on Vercel (optional)

## Common Patterns

### Getting Payload Instance

```typescript
// In API routes or Server Components
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })
const posts = await payload.find({ collection: 'posts' })
```

### Adding a New Block

1. Create `src/blocks/YourBlock/config.ts` (Payload schema)
2. Create `src/blocks/YourBlock/Component.tsx` (React component)
3. Add to blocks array in collection config (Pages or Posts)
4. Add to `RenderBlocks.tsx` switch statement

### Creating a Migration

```bash
pnpm payload migrate:create
# Edit generated file in src/migrations/
# Commit and deploy with your code
```

## Deployment

The template is optimized for Vercel:
- Vercel Postgres adapter configured
- Automatic production URL detection
- Sitemap generation post-build
- Image optimization configured for Google user content

**Pre-deployment checklist**:
1. Run `pnpm build` successfully
2. Create any pending migrations
3. Set required environment variables
4. Run migrations on production after build

## Resources

- Payload Docs: https://payloadcms.com/docs
- Payload LLM Context: https://payloadcms.com/llms-full.txt
- Template Source: https://github.com/payloadcms/payload/tree/main/templates/website
