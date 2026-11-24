import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  number: string
  label: string
  id: string
  children: ReactNode
  intro?: ReactNode
}

/**
 * Editorial section header: a numbered label over a rule, then a serif title.
 * `id` is applied to the heading so the section can use aria-labelledby.
 */
export function SectionHeading({ number, label, id, children, intro }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-baseline justify-between border-t border-ink pt-3">
        <p className="eyebrow">
          <span className="text-accent-dark">{number}</span>
          <span className="mx-2" aria-hidden="true">
            —
          </span>
          {label}
        </p>
        <span className="eyebrow hidden sm:inline" aria-hidden="true">
          FGB / {number}
        </span>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-12">
        <h2
          id={id}
          className="font-serif text-[2.75rem] leading-[0.98] tracking-[-0.01em] text-ink md:col-span-7 md:text-6xl lg:text-7xl"
        >
          {children}
        </h2>
        {intro ? (
          <p className="max-w-md self-end text-[0.95rem] leading-relaxed text-subtle md:col-span-5 md:justify-self-end">
            {intro}
          </p>
        ) : null}
      </div>
    </Reveal>
  )
}
