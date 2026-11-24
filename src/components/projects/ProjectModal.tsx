import { useEffect, useRef, type MouseEvent } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '../../types'
import { ProjectGallery } from './ProjectGallery'
import { StatusBadge } from './StatusBadge'
import { TechList } from './TechList'

const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-')

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

/**
 * Project details in a native <dialog>: focus is trapped, Escape closes it,
 * and focus returns to the card that opened it.
 */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = 'hidden'
    } else if (!project && dialog.open) {
      dialog.close()
    }
  }, [project])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleClose = () => {
      document.documentElement.style.overflow = ''
      onClose()
    }
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  // Click on the backdrop (outside the panel) closes the dialog
  const onDialogClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) dialogRef.current?.close()
  }

  return (
    <dialog
      ref={dialogRef}
      onClick={onDialogClick}
      aria-labelledby={project ? `project-${project.id}-title` : undefined}
      className="m-0 ml-auto h-dvh max-h-dvh w-full max-w-2xl overflow-y-auto border-l border-line bg-paper p-0 text-ink shadow-[0_0_0_1px_rgba(37,39,41,0.04),-24px_0_60px_-30px_rgba(37,39,41,0.35)] open:motion-safe:animate-[rise_400ms_var(--ease-soft)_both] backdrop:backdrop-blur-[1px]"
    >
      {project ? (
        <div className="flex min-h-full flex-col">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper/95 px-6 py-4 backdrop-blur-sm sm:px-10">
            <p className="eyebrow">
              <span className="text-accent-dark">{project.number}</span>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              Project details
            </p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-accent-dark"
              aria-label="Close project details"
              autoFocus
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 px-6 pb-14 pt-10 sm:px-10">
            <div className="flex flex-wrap items-center gap-3">
              <p className="eyebrow">{[project.context, project.year].filter(Boolean).join(' · ')}</p>
              <StatusBadge status={project.status} />
            </div>
            <h2 id={`project-${project.id}-title`} className="mt-3 font-serif text-5xl leading-[0.95] sm:text-6xl">
              {project.title}
            </h2>
            <p className="mt-3 text-subtle">{project.tagline}</p>
            {project.status === 'in-progress' ? (
              <p className="mt-4 border-l-2 border-accent pl-3 text-sm leading-relaxed text-subtle">
                This project is still in development. Some planned features are not finished yet, and details may
                change.
              </p>
            ) : null}

            {project.image ? (
              <section aria-label={`${project.title} screenshots`} className="mt-8">
                {project.galleryTitle || project.gallerySections?.length ? (
                  <h3 className="eyebrow mb-3">{project.galleryTitle ?? 'Web Application'}</h3>
                ) : null}
                <ProjectGallery images={[project.image, ...(project.gallery ?? [])]} layout={project.galleryLayout} />
              </section>
            ) : null}

            {project.gallerySections?.map((section) => (
              <section
                key={section.title}
                aria-labelledby={`${project.id}-${slug(section.title)}`}
                className="mt-12 border-t border-line pt-6"
              >
                <h3 id={`${project.id}-${slug(section.title)}`} className="eyebrow mb-4">
                  {section.title}
                </h3>
                <ProjectGallery images={section.images} layout={section.layout} />
              </section>
            ))}

            <dl className="mt-10 grid gap-6 border-t border-ink pt-6 sm:grid-cols-2">
              {project.role ? (
                <div>
                  <dt className="eyebrow">Role</dt>
                  <dd className="mt-1.5 text-sm">{project.role}</dd>
                </div>
              ) : null}
              <div className={project.role ? '' : 'sm:col-span-2'}>
                <dt className="eyebrow">Technologies</dt>
                <dd className="mt-2.5">
                  <TechList items={project.technologies} />
                </dd>
              </div>
            </dl>

            <div className="mt-10 space-y-4 text-[1.0625rem] leading-relaxed text-ink/85">
              {project.description.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <h3 className="eyebrow mt-10">Highlights</h3>
            <ul className="mt-3 border-t border-line">
              {project.highlights.map((h, i) => (
                <li key={h} className="flex items-baseline gap-4 border-b border-line py-3 text-[0.95rem]">
                  <span className="font-mono text-[0.6875rem] text-subtle">{String(i + 1).padStart(2, '0')}</span>
                  {h}
                </li>
              ))}
            </ul>

            <h3 className="eyebrow mt-10">Links</h3>
            {project.links.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 border border-ink/80 px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent-dark hover:text-accent-dark"
                    >
                      {link.label}
                      <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-subtle">
                Source code and demo available on request &mdash;{' '}
                <a href="#contact" onClick={() => dialogRef.current?.close()} className="text-accent-dark link-underline">
                  get in touch
                </a>
                .
              </p>
            )}
          </div>
        </div>
      ) : null}
    </dialog>
  )
}
