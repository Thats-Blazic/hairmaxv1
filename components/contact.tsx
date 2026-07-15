'use client'

import { useState } from 'react'
import { Phone, Mail, MessageCircle, MapPin, Send, Check } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/social-icons'
import { SITE } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, staggerContainer, staggerItem } from '@/components/reveal'
import { motion } from 'framer-motion'

const inputClass =
  'w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary'

const CONTACT_CARDS = [
  { icon: Phone, label: 'Telefon', value: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: `@${SITE.instagram}`,
    href: `https://www.instagram.com/hairmaxprodajakose`,
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
  { icon: MapPin, label: 'Lokacija', value: SITE.address, href: '#contact' },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Kontakt"
          title="Povežimo"
          highlight="se"
          description="Kontaktirajte nas putem omiljenog kanala ili pošaljite poruku — odgovorićemo sa pažnjom."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {CONTACT_CARDS.map((card) => (
              <motion.a
                key={card.label}
                variants={staggerItem}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <card.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {card.label}
                  </p>
                  <p className="mt-1 break-words text-foreground/90">{card.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <Reveal direction="left" delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-6 md:p-8"
            >
              <div>
                <label htmlFor="c-name" className="mb-2 block text-sm text-muted-foreground">
                  Ime
                </label>
                <input id="c-name" required placeholder="Vaše ime" className={inputClass} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-email" className="mb-2 block text-sm text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="c-phone" className="mb-2 block text-sm text-muted-foreground">
                    Telefon
                  </label>
                  <input
                    id="c-phone"
                    type="tel"
                    placeholder="060 68 68 462"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <label htmlFor="c-message" className="mb-2 block text-sm text-muted-foreground">
                  Poruka
                </label>
                <textarea
                  id="c-message"
                  required
                  rows={5}
                  placeholder="Kako vam možemo pomoći?"
                  className={`${inputClass} flex-1 resize-none`}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
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
      </div>
    </section>
  )
}
