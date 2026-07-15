'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 md:pb-0">
      <div className="absolute inset-0">
        <Image
          src="/hero-salon.png"
          alt="Enterijer luksuznog frizerskog salona"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 lg:px-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary"
          >
            Luksuzni frizerski atelje
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl lg:text-8xl"
          >
            Premium <span className="gold-text-gradient">ekstenzije</span> za kosu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-4 font-serif text-2xl italic text-foreground/80 md:text-3xl"
          >
            Luksuz. Lepota. Samopouzdanje.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
          >
            Doživite umetnost transformacije sa 100% prirodnim ekstenzijama
            kose, ručno izrađenim od strane sertifikovanih specijalista u
            atmosferi čiste raskoši.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#booking"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Zakaži termin
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#shop"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 px-7 py-3.5 font-medium text-foreground transition-colors hover:bg-primary/10"
            >
              <ShoppingBag className="h-4 w-4" />
              Kupi kosu
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
