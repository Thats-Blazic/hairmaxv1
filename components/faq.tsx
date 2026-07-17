'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Send,
  Check,
  Sparkles,
  ShoppingBag,
  Truck,
  Wallet,
  Layers,
  CalendarCheck,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/social-icons'
import { FAQ_ITEMS, SITE } from '@/lib/site-data'
import { Reveal, staggerContainer, staggerItem } from '@/components/reveal'
import { cn } from '@/lib/utils'

const FAQ_ICONS: LucideIcon[] = [
  Sparkles,
  ShoppingBag,
  Truck,
  Wallet,
  Layers,
  CalendarCheck,
  GraduationCap,
]

const CONTACT_CARDS = [
  { icon: Phone, label: 'Telefon', value: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: `@${SITE.instagram}`,
    href: 'https://www.instagram.com/hairmaxprodajakose',
  },
  {
    icon: FacebookIcon,
    label: 'Facebook',
    value: SITE.facebook,
    href: `https://facebook.com/${SITE.facebook}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: SITE.phoneDisplay,
    href: `https://wa.me/${SITE.whatsapp}`,
  },
  { icon: MapPin, label: 'Lokacija', value: SITE.address, href: undefined },
]

const inputClass =
  'w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-secondary/20 px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.06),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" />
            FAQ &amp; Kontakt
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-balance md:text-5xl">
            Često postavljana{' '}
            <span className="gold-text-gradient">pitanja</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Pronađite odgovore, kontaktirajte nas ili pošaljite poruku — sve na jednom
            mestu.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal direction="right" delay={0.1}>
              <h3 className="font-serif text-xl">Kontaktirajte nas</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Dostupni smo putem telefona, društvenih mreža i WhatsApp-a.
              </p>
            </Reveal>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mt-6 grid gap-3 sm:grid-cols-2"
            >
              {CONTACT_CARDS.map((card) => {
                const inner = (
                  <>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <card.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {card.label}
                      </p>
                      <p className="mt-1 break-words text-sm text-foreground/90">
                        {card.value}
                      </p>
                    </div>
                  </>
                )

                return card.href ? (
                  <motion.a
                    key={card.label}
                    variants={staggerItem}
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                  >
                    {inner}
                  </motion.a>
                ) : (
                  <motion.div
                    key={card.label}
                    variants={staggerItem}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
                  >
                    {inner}
                  </motion.div>
                )
              })}
            </motion.div>

            <Reveal direction="up" delay={0.2}>
              <form
                onSubmit={onSubmit}
                className="mt-8 flex flex-col gap-4 rounded-3xl border border-border bg-card p-6"
              >
                <h3 className="font-serif text-lg">Pošaljite poruku</h3>
                <input id="c-name" required placeholder="Vaše ime" className={inputClass} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    id="c-email"
                    type="email"
                    required
                    placeholder="Email"
                    className={inputClass}
                  />
                  <input
                    id="c-phone"
                    type="tel"
                    placeholder="060 68 68 462"
                    className={inputClass}
                  />
                </div>
                <textarea
                  id="c-message"
                  required
                  rows={4}
                  placeholder="Kako vam možemo pomoći?"
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  {sent ? (
                    <>
                      <Check className="h-5 w-5" />
                      Poruka poslata
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Pošalji poruku
                    </>
                  )}
                </button>
              </form>
            </Reveal>
          </div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4 lg:col-span-7"
          >
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index
              const Icon = FAQ_ICONS[index] ?? Sparkles

              return (
                <motion.li
                  key={item.question}
                  variants={staggerItem}
                  className={cn(
                    'group overflow-hidden rounded-2xl border bg-card transition-all duration-300',
                    isOpen
                      ? 'border-primary/50 shadow-[0_0_30px_-10px_rgba(212,175,55,0.35)]'
                      : 'border-border hover:border-primary/25',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span
                      className={cn(
                        'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300',
                        isOpen
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-primary/10 text-primary group-hover:bg-primary/20',
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1 font-serif text-lg leading-snug text-foreground">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        'hidden font-serif text-sm text-primary/40 sm:block',
                        isOpen && 'text-primary',
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-primary transition-transform duration-300',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mx-5 mb-5 border-t border-primary/15 pt-4 sm:mx-6">
                          <p className="pl-14 text-sm leading-relaxed text-muted-foreground sm:pl-[3.75rem]">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
