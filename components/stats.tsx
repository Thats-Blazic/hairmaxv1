'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '@/lib/site-data'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame: number
    const start = performance.now()
    const duration = 1600
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative z-10 -mt-20 px-5 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border glass lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 p-8 text-center"
            >
              <span className="font-serif text-4xl text-primary md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
