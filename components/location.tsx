'use client'

import { MapPin, Clock, Car, Train } from 'lucide-react'
import { SITE, WORKING_HOURS } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Location() {
  return (
    <section id="location" className="scroll-mt-24 bg-secondary/30 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Lokacija"
          title="Posetite naš"
          highlight="atelje"
          description="Smešten u srcu grada, naš salon je vaše privatno utočište u svet luksuza."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="h-full min-h-80 overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Mapa lokacije salona"
                src="https://www.google.com/maps?q=Belgrade&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-80 w-full grayscale-[0.4] contrast-125"
              />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-card p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg">Adresa salona</h3>
                  <p className="mt-1 text-muted-foreground">{SITE.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-lg">Radno vreme</h3>
                  <ul className="mt-2 space-y-1.5">
                    {WORKING_HOURS.map((row) => (
                      <li
                        key={row.day}
                        className="flex items-center justify-between border-b border-border/50 pb-1.5 text-sm"
                      >
                        <span className="text-foreground/90">{row.day}</span>
                        <span className="text-muted-foreground">{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-4">
                  <Car className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground/90">Parking dostupan</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-4">
                  <Train className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground/90">Javni prevoz u blizini</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
