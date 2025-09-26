'use client'
import { Home, NotebookPen, Users, Gamepad2, Compass } from 'lucide-react'
const base = "w-full font-semibold tracking-wide rounded-xl px-4 py-3 border-2 text-left border-primary/80 hover:bg-primary/10 transition flex items-center gap-2"
export default function WorldSidebar() {
  return (
    <aside className="hidden md:block sticky top-20 self-start">
      <div className="flex flex-col gap-3 w-48">
        <button className={base}><Home className="size-4" /> Home</button>
        <button className={base}><NotebookPen className="size-4" /> Notes</button>
        <button className={base}><Users className="size-4" /> Join Club</button>
        <button className={base}><Gamepad2 className="size-4" /> Play Game</button>
        <button className={base}><Compass className="size-4" /> Explore</button>
      </div>
    </aside>
  )
}
