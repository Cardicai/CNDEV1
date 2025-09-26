# CN World Starter
Neon galaxy + black themed Next.js (App Router) starter with Supabase client, shell pages, and health routes.

## Quick Start
1. Install: `npm i`
2. Copy envs: `cp env.example .env.local` and fill values.
3. Dev: `npm run dev` → http://localhost:3000

## Deploy (Vercel)
- Set envs in Project → Settings → Environment Variables:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Health checks:
- `/api/health` → confirms env flags
- `/api/db-check` → checks DB connectivity to table `rooms` (create later)

## Structure
- `src/app` → App Router routes
- `src/components` → UI components
- `src/lib/supabaseClient.ts` → browser client
- `src/styles/theme.css` → galaxy/black themes
