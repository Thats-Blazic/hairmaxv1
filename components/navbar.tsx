'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/site-data'
import { useCart } from '@/components/cart-context'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { count, openCart } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border glass py-3'
          : 'border-b border-transparent bg-transparent py-5',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-serif text-xl tracking-wide text-foreground md:text-2xl">
            Hair <span className="gold-text-gradient">Max</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Iznajmljivanje Kose
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openCart}
            aria-label="Otvori korpu"
            className="relative rounded-full border border-border p-2.5 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                {count}
              </span>
            )}
          </button>

          <a
            href="#booking"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 md:inline-flex"
          >
            Zakaži
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Otvori meni"
            className="rounded-full border border-border p-2.5 text-foreground transition-colors hover:border-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden glass lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/50 py-3 text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-primary px-5 py-3 text-center font-medium text-primary-foreground"
                >
                  Zakaži termin
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
