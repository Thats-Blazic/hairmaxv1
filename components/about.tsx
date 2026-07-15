'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Gem, BadgeCheck, Sparkles, Crown, type LucideIcon } from 'lucide-react'
import { FEATURES } from '@/lib/site-data'
import { Reveal, staggerContainer, staggerItem } from '@/components/reveal'

const ICONS: Record<string, LucideIcon> = {
  Gem,
  BadgeCheck,
  Sparkles,
  Crown,
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="right">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
              <Image
                src="/about-salon.png"
                alt="Stilista radi na luksuznim ekstenzijama kose"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-primary/30 glass p-5 sm:block">
              <p className="font-serif text-3xl text-primary">20+</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Godina u svetu kose
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" />
            O našem salonu
          </span>
          <Reveal direction="left" delay={0.1}>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-balance md:text-5xl">
              Gde se zanat susreće sa <span className="gold-text-gradient">luksuzom</span>
            </h2>
          </Reveal>
          <Reveal direction="left" delay={0.2}>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Od prve konsultacije
              do finalnog stilizovanja, naša misija je da pružimo besprekoran,
              prirodan rezultat i iskustvo klijenta obeleženo diskrecijom,
              udobnošću i pravim luksuzom.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {FEATURES.map((feature) => {
              const Icon = ICONS[feature.icon]
              return (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
