'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Start' },
  { href: '/ueber-mich', label: 'Über mich' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <Link
          href="/"
          className="flex flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-lg font-medium tracking-tight text-foreground md:text-xl">
            Psychotherapie Aldinger
          </span>
          <span className="text-xs tracking-wide text-muted-foreground">
            Privatpraxis · Berlin-Pankow
          </span>
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm transition-colors hover:text-primary',
                pathname === item.href
                  ? 'font-medium text-primary'
                  : 'text-foreground/80'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
          >
            Termin anfragen
          </Link>
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-border/60 bg-background px-4 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block border-b border-border/40 py-3 text-base',
                    pathname === item.href
                      ? 'font-medium text-primary'
                      : 'text-foreground/80'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
          >
            Termin anfragen
          </Link>
        </nav>
      )}
    </header>
  )
}
