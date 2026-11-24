import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../types'
import { ProjectVisual } from './ProjectVisual'
import { StatusBadge } from './StatusBadge'
import { TechList } from './TechList'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

/**
 * The whole card is clickable via a stretched pseudo-element on the title
 * button, so there is a single, well-labelled tab stop per card.
 */
export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const featured = project.featured

  return (
    <article
      className={`group relative flex h-full flex-col ${
        featured ? '' : 'border-t border-line pt-6'
      }`}
    >
      <ProjectVisual project={project} size={featured ? 'large' : 'small'} />

      <div className={`flex flex-1 flex-col ${featured ? 'pt-7' : 'pt-5'}`}>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <p className="eyebrow whitespace-nowrap">
            <span className="text-accent-dark">{project.number}</span>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            {project.context}
          </p>
          <span className="flex shrink-0 items-center gap-3">
            <StatusBadge status={project.status} />
            {featured ? <span className="eyebrow text-accent-dark">Featured</span> : null}
          </span>
        </div>

        <h3 className={`mt-3 font-serif leading-none text-ink ${featured ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-left transition-colors duration-200 after:absolute after:inset-0 after:content-[''] group-hover:text-accent-dark focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-accent-dark"
            aria-haspopup="dialog"
          >
            {project.title}
            <span className="sr-only"> — view project details</span>
          </button>
        </h3>

        <p className="mt-2 text-sm text-subtle">{project.tagline}</p>

        <p className={`mt-4 leading-relaxed text-ink/85 ${featured ? 'text-[1.0625rem]' : 'text-[0.95rem]'}`}>
          {project.summary}
        </p>

        {featured ? (
          <ul className="mt-5 grid gap-x-6 gap-y-1.5 text-sm text-ink sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span className="mt-[0.55rem] h-px w-3 shrink-0 bg-accent-dark" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex flex-1 flex-col justify-end gap-5">
          <TechList items={project.technologies} />
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent-dark"
          >
            View details
            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              className="transition-transform duration-300 ease-(--ease-soft) group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </article>
  )
}
