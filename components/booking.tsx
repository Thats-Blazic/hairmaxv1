'use client'

import { useState } from 'react'
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react'
import { SITE, SERVICES_OPTIONS } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const inputClass =
  'w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary'

export function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICES_OPTIONS[0],
    date: '',
    time: '',
    notes: '',
  })

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const bookViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const message =
      `Novi zahtev za termin%0A%0A` +
      `Ime: ${form.name}%0A` +
      `Telefon: ${form.phone}%0A` +
      `Email: ${form.email}%0A` +
      `Usluga: ${form.service}%0A` +
      `Datum: ${form.date}%0A` +
      `Vreme: ${form.time}%0A` +
      `Napomene: ${form.notes || '—'}`
    window.open(`https://wa.me/${SITE.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <section id="booking" className="scroll-mt-24 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Zakazivanje"
          title="Rezervišite"
          highlight="termin"
          description="Popunite formular i potvrdite odmah preko WhatsApp-a. Naš tim će obezbediti željeni termin."
        />

        <Reveal direction="up" delay={0.1}>
          <form
            onSubmit={bookViaWhatsApp}
            className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-muted-foreground">
                  Ime i prezime
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Ana Petrović"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm text-muted-foreground">
                  Broj telefona
                </label>
                <input
                  id="phone"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="060 68 68 462"
                  className={inputClass}
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="mb-2 block text-sm text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="service" className="mb-2 block text-sm text-muted-foreground">
                  Usluga
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => update('service', e.target.value)}
                  className={inputClass}
                >
                  {SERVICES_OPTIONS.map((option) => (
                    <option key={option} value={option} className="bg-card">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="mb-2 block text-sm text-muted-foreground">
                  Datum
                </label>
                <input
                  id="date"
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => update('date', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="time" className="mb-2 block text-sm text-muted-foreground">
                  Vreme
                </label>
                <input
                  id="time"
                  required
                  type="time"
                  value={form.time}
                  onChange={(e) => update('time', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="notes" className="mb-2 block text-sm text-muted-foreground">
                  Napomene
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  placeholder="Opišite željeni izgled..."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <CalendarCheck className="h-5 w-5" />
              Zakaži preko WhatsApp-a
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
  )
}
