'use client'
import { useEffect, useState } from 'react'
export default function ThemeToggle() {
  const [theme, setTheme] = useState<'black'|'galaxy'>('galaxy')
  useEffect(() => {
    const saved = localStorage.getItem('cn_theme') as 'black'|'galaxy'|null
    const next = saved || 'galaxy'
    document.documentElement.setAttribute('data-theme', next)
    setTheme(next)
  }, [])
  const toggle = () => {
    const next = theme === 'galaxy' ? 'black' : 'galaxy'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('cn_theme', next)
    setTheme(next)
  }
  return (
    <button onClick={toggle} className="rounded-full border border-primary/50 bg-primary/10 px-3 py-2 text-sm">
      {theme === 'galaxy' ? 'Galaxy' : 'Black'}
    </button>
  )
}
