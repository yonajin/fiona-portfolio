import { Maximize2 } from 'lucide-react'
import type { Certification } from '../../types'
import { ProjectImageView } from '../projects/ProjectImageView'

interface CertificationCardProps {
  certification: Certification
  onOpen: (certification: Certification) => void
}

/**
 * Certificate preview card. The whole card is clickable via a stretched
 * pseudo-element on the button, keeping a single tab stop per card.
 */
export function CertificationCard({ certification, onOpen }: CertificationCardProps) {
  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative overflow-hidden border border-line bg-sand">
        <ProjectImageView
          image={certification.image}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 100vw"
          className="aspect-[4/3] h-auto w-full object-cover object-top transition-transform duration-700 ease-(--ease-soft) group-hover:scale-[1.02] motion-reduce:transition-none"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/5 transition-colors duration-500 group-hover:bg-ink/[0.03]"
        />
        <span
          aria-hidden="true"
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center bg-paper/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        >
          <Maximize2 size={14} strokeWidth={1.75} />
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <p className="font-mono text-xs tracking-wide text-subtle">
          {certification.dateLabel} <time dateTime={certification.dateISO}>{certification.date}</time>
        </p>
        <h4 className="mt-2 text-[1.0625rem] font-medium leading-snug text-ink">
          <button
            type="button"
            onClick={() => onOpen(certification)}
            aria-haspopup="dialog"
            className="text-left transition-colors duration-200 after:absolute after:inset-0 after:content-[''] group-hover:text-accent-dark focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-accent-dark"
          >
            {certification.title}
            <span className="sr-only"> — view certificate</span>
          </button>
        </h4>
        <p className="mt-1 font-serif text-lg italic text-accent-dark">{certification.issuer}</p>
      </div>
    </article>
  )
}
