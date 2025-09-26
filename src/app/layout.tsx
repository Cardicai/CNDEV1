import './globals.css'
import '../styles/theme.css'
import TopBar from '@/components/topbar/TopBar'
import WorldSidebar from '@/components/sidebar/WorldSidebar'

export const metadata = { title: 'CN World', description: 'Cardic Nexus Community' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <TopBar />
        <div className="container mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-4">
          <WorldSidebar />
          <main className="rounded-2xl border border-white/10 bg-surface/70 backdrop-blur p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
