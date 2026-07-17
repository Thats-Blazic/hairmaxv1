'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { SITE } from '@/lib/site-data'

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } =
    useCart()

  const checkoutViaWhatsApp = () => {
    const lines = items.map(
      (item) => `• ${item.name} (${item.length}, ${item.weight}) x${item.quantity} — $${item.price * item.quantity}`,
    )
    const message = `Zdravo Hair Max! Želim da poručim:%0A${lines.join('%0A')}%0A%0AUkupno: $${total}`
    window.open(`https://wa.me/${SITE.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[70] bg-background/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col border-l border-border bg-card"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <h2 className="flex items-center gap-2 font-serif text-xl">
                <ShoppingBag className="h-5 w-5 text-primary" />
                Vaša korpa
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Zatvori korpu"
                className="rounded-full border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground/50" />
                <p className="text-muted-foreground">Korpa je prazna.</p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-2 rounded-full border border-primary/50 px-6 py-2.5 text-sm text-foreground transition-colors hover:bg-primary/10"
                >
                  Nastavi kupovinu
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5 no-scrollbar">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 rounded-2xl border border-border p-3"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-serif text-base leading-tight">
                              {item.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {item.length} · {item.weight}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            aria-label={`Ukloni ${item.name}`}
                            className="text-muted-foreground transition-colors hover:text-primary"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              aria-label="Smanji količinu"
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-6 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              aria-label="Povećaj količinu"
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="font-medium text-primary">
                            ${item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border px-6 py-5">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Ukupno</span>
                    <span className="font-serif text-2xl text-primary">
                      ${total}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={checkoutViaWhatsApp}
                    className="mt-4 w-full rounded-full bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Poruči preko WhatsApp-a
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
