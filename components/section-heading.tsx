import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <Reveal className={cn(align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl')}>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
        <span className="h-px w-8 bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-balance md:text-5xl">
        {title} {highlight && <span className="gold-text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  )
}
