'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  CalendarCheck,
  Check,
  Clock,
  GraduationCap,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { LASH_COURSE, SITE } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, staggerContainer, staggerItem } from '@/components/reveal'

const ICONS: Record<string, LucideIcon> = {
  GraduationCap,
  Users,
  Sparkles,
  Award,
}

const inputClass =
  'w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary'

export function LashCourse() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const applyViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const message =
      `Prijava za edukaciju za nadogradnju trepavica%0A%0A` +
      `Ime: ${form.name}%0A` +
      `Telefon: ${form.phone}%0A` +
      `Email: ${form.email}%0A` +
      `Napomene: ${form.notes || '—'}`
    window.open(`https://wa.me/${SITE.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.12),transparent_55%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary"
            >
              Hair Max Akademija
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-balance md:text-6xl lg:text-7xl"
            >
              Edukacija za{' '}
              <span className="gold-text-gradient">nadogradnju trepavica</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Naučite profesionalnu tehniku nadograđivanja trepavica u elegantnom
              ambijentu Hair Max ateljea. Od teorije do prakse — sve što vam treba
              da započnete ili unapredite karijeru.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-2 text-sm text-foreground/90">
                <Clock className="h-4 w-4 text-primary" />
                {LASH_COURSE.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-2 text-sm text-foreground/90">
                <GraduationCap className="h-4 w-4 text-primary" />
                {LASH_COURSE.level}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Zašto ova edukacija"
            title="Profesionalna obuka u"
            highlight="luksuznom okruženju"
            description="Edukacija je osmišljena da vam pruži čvrste osnove i samopouzdanje u radu sa klijentima, uz pristup koji prati Hair Max standarde kvaliteta."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {LASH_COURSE.highlights.map((item) => {
              const Icon = ICONS[item.icon]
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary/30 px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Program edukacije"
                title="Šta ćete"
                highlight="savladati"
                description="Detaljan plan obuke koji pokriva sve ključne tehnike i znanja potrebna za profesionalan rad."
              />

              <Reveal direction="left" delay={0.1}>
                <ul className="mt-10 space-y-4">
                  {LASH_COURSE.modules.map((module) => (
                    <li
                      key={module}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/90">
                        {module}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div>
              <SectionHeading
                align="left"
                eyebrow="Uključeno"
                title="Šta dobijate"
                highlight="uz edukaciju"
              />

              <Reveal direction="right" delay={0.1}>
                <ul className="mt-10 space-y-4">
                  {LASH_COURSE.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-primary/20 bg-card p-5"
                    >
                      <Sparkles className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Prijava"
            title="Rezervišite"
            highlight="svoje mesto"
            description="Popunite formular i prijavite se za edukaciju preko WhatsApp-a. Kontaktiraćemo vas sa detaljima o terminima i cenama."
          />

          <Reveal direction="up" delay={0.1}>
            <form
              onSubmit={applyViaWhatsApp}
              className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="lc-name" className="mb-2 block text-sm text-muted-foreground">
                    Ime i prezime
                  </label>
                  <input
                    id="lc-name"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Vaše ime"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="lc-phone" className="mb-2 block text-sm text-muted-foreground">
                    Broj telefona
                  </label>
                  <input
                    id="lc-phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="060 68 68 462"
                    className={inputClass}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="lc-email" className="mb-2 block text-sm text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="lc-email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="hairmax888@gmail.com"
                    className={inputClass}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="lc-notes" className="mb-2 block text-sm text-muted-foreground">
                    Napomene
                  </label>
                  <textarea
                    id="lc-notes"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    placeholder="Imate li prethodno iskustvo? Koji termin vam odgovara?"
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <CalendarCheck className="h-5 w-5" />
                Prijavi se preko WhatsApp-a
              </button>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  Pozovi odmah
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
