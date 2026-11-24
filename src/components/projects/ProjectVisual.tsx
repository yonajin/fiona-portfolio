import type { Project } from '../../types'
import { ProjectImageView } from './ProjectImageView'

interface ProjectVisualProps {
  project: Project
  size?: 'large' | 'small'
}

/**
 * Card preview. Shows the project's real screenshot when one is provided;
 * otherwise a quiet typographic plate (no fake screenshots).
 * Both use the same aspect ratio so cards line up either way.
 */
export function ProjectVisual({ project, size = 'large' }: ProjectVisualProps) {
  const aspect = size === 'large' ? 'aspect-[16/10]' : 'aspect-[16/9]'

  // Phone screenshots: show up to three screens side by side, uncropped,
  // inside the same frame so the card keeps its proportions.
  if (project.image && project.image.height > project.image.width) {
    const screens = [project.image, ...(project.gallery ?? [])].slice(0, 3)
    return (
      <div className={`hatch relative overflow-hidden border border-line bg-sand ${aspect}`}>
        <div className="absolute inset-0 flex items-center justify-center gap-[4%] px-[8%] py-[5%]">
          {screens.map((screen, i) => (
            <div
              key={screen.src}
              className={`h-full overflow-hidden rounded-[6px] border border-ink/10 bg-paper shadow-[0_8px_24px_-14px_rgba(37,39,41,0.45)] transition-transform duration-700 ease-(--ease-soft) motion-reduce:transition-none ${
                i === 1 ? 'group-hover:-translate-y-1.5' : 'group-hover:-translate-y-0.5'
              }`}
              style={{ aspectRatio: `${screen.width} / ${screen.height}` }}
            >
              <ProjectImageView
                image={i === 0 ? screen : { ...screen, alt: '' }}
                sizes="(min-width: 768px) 180px, 30vw"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
        <span
          aria-hidden="true"
          className="absolute bottom-3 right-3 h-3 w-3 bg-accent transition-colors duration-300 group-hover:bg-accent-dark"
        />
      </div>
    )
  }

  if (project.image) {
    return (
      <div className={`relative overflow-hidden border border-line bg-sand ${aspect}`}>
        <ProjectImageView
          image={project.image}
          sizes="(min-width: 768px) 560px, 100vw"
          className="absolute inset-0 h-full w-full object-cover object-left-top transition-transform duration-700 ease-(--ease-soft) group-hover:scale-[1.025] motion-reduce:transition-none"
        />
        {/* Hairline frame + subtle hover wash, keeps screenshots from looking pasted-on */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/5 transition-colors duration-500 group-hover:bg-ink/[0.03]"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-3 right-3 h-3 w-3 bg-accent transition-colors duration-300 group-hover:bg-accent-dark"
        />
      </div>
    )
  }

  return (
    <div
      aria-hidden="true"
      className={`hatch relative flex flex-col justify-between overflow-hidden border border-line bg-sand ${aspect} ${
        size === 'large' ? 'p-6 md:p-8' : 'p-5'
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="eyebrow">{project.context}</span>
        <span className="eyebrow">{project.year ?? '—'}</span>
      </div>

      <span
        className={`font-serif leading-none text-ink/90 transition-transform duration-700 ease-(--ease-soft) group-hover:-translate-y-1 ${
          size === 'large' ? 'text-[7rem] md:text-[9rem]' : 'text-[4.5rem]'
        }`}
      >
        {project.number}
      </span>

      <div className="flex items-end justify-between gap-4">
        <span className="h-px flex-1 bg-ink/20" />
        <span className="h-3 w-3 bg-accent transition-colors duration-300 group-hover:bg-accent-dark" />
      </div>
    </div>
  )
}
