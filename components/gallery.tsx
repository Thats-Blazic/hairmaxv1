'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { GALLERY, type GalleryCategory } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const FILTERS: (GalleryCategory | 'Sve')[] = [
  'Sve',
  'Ekstenzije',
  'Transformacije',
  'Salon',
  'Klijenti',
]

export function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('Sve')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const visible = GALLERY.filter(
    (item) => filter === 'Sve' || item.category === filter,
  )

  const showAt = (index: number) => setLightbox(index)
  const close = () => setLightbox(null)
  const next = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % visible.length))
  const prev = () =>
    setLightbox((i) =>
      i === null ? null : (i - 1 + visible.length) % visible.length,
    )

  return (
    <section id="gallery" className="scroll-mt-24 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Galerija"
          title="Portfolio"
          highlight="transformacija"
          description="Istražite naše najbolje radove — od besprekornih ekstenzija do zadivljujućih transformacija, snimljenih u našem ateljeu."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-full border px-5 py-2 text-sm tracking-wide transition-all',
                filter === f
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visible.map((item, index) => (
              <motion.button
                type="button"
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => showAt(index)}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border border-border',
                  item.span ? 'row-span-2 aspect-[3/4] md:aspect-auto' : 'aspect-square',
                )}
              >
                <Image
                  src={item.src}
                  alt={`${item.category} — prikaz`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/0 transition-all duration-500 group-hover:ring-2 group-hover:ring-primary/70" />
                <span className="absolute bottom-4 left-4 translate-y-3 text-sm uppercase tracking-[0.2em] text-primary opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.category}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && visible[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Zatvori"
              className="absolute right-5 top-5 rounded-full border border-border p-2.5 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Prethodna"
              className="absolute left-4 rounded-full border border-border p-3 text-foreground transition-colors hover:border-primary hover:text-primary md:left-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <motion.div
              key={visible[lightbox].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-primary/30"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={visible[lightbox].src}
                alt={`${visible[lightbox].category} — prikaz`}
                fill
                className="object-cover"
              />
            </motion.div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Sledeća"
              className="absolute right-4 rounded-full border border-border p-3 text-foreground transition-colors hover:border-primary hover:text-primary md:right-10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
