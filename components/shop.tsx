'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, Plus, Ruler, Palette, Weight, Truck } from 'lucide-react'
import { PRODUCTS, PRODUCT_CATEGORIES, type ProductCategory } from '@/lib/site-data'
import { useCart } from '@/components/cart-context'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const FILTERS: (ProductCategory | 'Sve')[] = ['Sve', ...PRODUCT_CATEGORIES]

export function Shop() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('Sve')
  const { addItem, openCart } = useCart()

  const visible = PRODUCTS.filter(
    (p) => filter === 'Sve' || p.category === filter,
  )

  return (
    <section id="shop" className="scroll-mt-24 bg-secondary/30 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Prodavnica"
          title="Kolekcija"
          highlight="kose"
          description="Svaki paket je 100% prirodna kosa i PREMIUM kvaliteta."
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

        <p className="mx-auto mt-8 flex max-w-3xl items-start justify-center gap-3 rounded-2xl border border-primary/25 bg-card/80 px-5 py-4 text-center text-sm leading-relaxed text-muted-foreground sm:items-center sm:text-left">
          <Truck className="mt-0.5 h-5 w-5 shrink-0 text-primary sm:mt-0" />
          <span>
            Moguća je i dostava na adresu (BEX, DEX, City Express, Pošta Srbije).
            Plaćanje pouzećem.
          </span>
        </p>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((product) => (
              <motion.article
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs uppercase tracking-wider text-primary">
                    {product.category}
                  </span>
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full glass px-3 py-1 text-xs text-foreground">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    {product.rating}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl">{product.name}</h3>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                    <span className="flex flex-col items-center gap-1 rounded-lg bg-secondary/60 p-2 text-center">
                      <Ruler className="h-3.5 w-3.5 text-primary" />
                      {product.length}
                    </span>
                    <span className="flex flex-col items-center gap-1 rounded-lg bg-secondary/60 p-2 text-center">
                      <Palette className="h-3.5 w-3.5 text-primary" />
                      {product.color}
                    </span>
                    <span className="flex flex-col items-center gap-1 rounded-lg bg-secondary/60 p-2 text-center">
                      <Weight className="h-3.5 w-3.5 text-primary" />
                      {product.weight}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-serif text-2xl text-primary">
                      ${product.price}
                    </span>
                  </div>

                  <div className="mt-5 flex gap-2">
                    <button
                      type="button"
                      onClick={() => addItem(product)}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-primary/50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/10"
                    >
                      <Plus className="h-4 w-4" />
                      Dodaj u korpu
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        addItem(product)
                        openCart()
                      }}
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                    >
                      Kupi odmah
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
