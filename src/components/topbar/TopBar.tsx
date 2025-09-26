'use client'
import ThemeToggle from '@/components/ThemeToggle'

export default function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-surface/80 backdrop-blur">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-full border border-primary/60 bg-primary/10 shadow">
            <svg viewBox="0 0 24 24" className="size-7 text-primary" aria-hidden="true">
              <circle cx="12" cy="3" r="1" fill="currentColor" />
              <path d="M12 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="5" y="6.5" width="14" height="11" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="9.5" cy="12" r="1.2" fill="currentColor" />
              <circle cx="14.5" cy="12" r="1.2" fill="currentColor" />
              <path d="M9 14.5c.8.8 1.8 1.2 3 1.2s2.2-.4 3-1.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="3.5" y="10" width="1.5" height="4" rx="0.75" fill="currentColor" />
              <rect x="19" y="10" width="1.5" height="4" rx="0.75" fill="currentColor" />
            </svg>
          </div>
          <h1 className="text-lg font-semibold tracking-tight">CN World</h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
