import { ArrowUpRight } from 'lucide-react'
import type { ProjectImage } from '../../types'
import { ProjectImageView } from './ProjectImageView'

interface ProjectGalleryProps {
  images: ProjectImage[]
  /**
   * "landscape" (default): first image full width, the rest in two columns.
   * "portrait": phone screenshots in an even grid, aspect ratio preserved.
   */
  layout?: 'landscape' | 'portrait'
}

/**
 * Screenshot gallery for the details modal. Each image links to its full-size file.
 */
export function ProjectGallery({ images, layout = 'landscape' }: ProjectGalleryProps) {
  if (images.length === 0) return null

  if (layout === 'portrait') {
    return (
      <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3">
        {images.map((image, i) => (
          <li key={image.src}>
            <GalleryItem image={image} index={i} total={images.length} sizes="(min-width: 640px) 190px, 50vw" />
          </li>
        ))}
      </ul>
    )
  }

  const [lead, ...rest] = images

  return (
    <div className="space-y-6">
      {lead ? <GalleryItem image={lead} index={0} total={images.length} sizes="(min-width: 672px) 590px, 100vw" /> : null}
      {rest.length > 0 ? (
        <ul className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
          {rest.map((image, i) => (
            <li key={image.src}>
              <GalleryItem image={image} index={i + 1} total={images.length} sizes="(min-width: 640px) 290px, 100vw" />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

interface GalleryItemProps {
  image: ProjectImage
  index: number
  total: number
  sizes: string
}

function GalleryItem({ image, index, total, sizes }: GalleryItemProps) {
  const label = image.caption ?? image.alt
  return (
    <figure>
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        className="group/img relative block overflow-hidden border border-line bg-sand"
      >
        <ProjectImageView
          image={image}
          sizes={sizes}
          className="h-auto w-full transition-transform duration-700 ease-(--ease-soft) group-hover/img:scale-[1.015] motion-reduce:transition-none"
        />
        <span
          aria-hidden="true"
          className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center bg-paper/90 text-ink opacity-0 transition-opacity duration-300 group-hover/img:opacity-100 group-focus-visible/img:opacity-100"
        >
          <ArrowUpRight size={14} strokeWidth={1.75} />
        </span>
        <span className="sr-only"> (open full-size image in a new tab)</span>
      </a>
      <figcaption className="mt-2 flex items-baseline gap-3 text-sm text-subtle">
        <span className="font-mono text-[0.6875rem]" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </span>
        {label}
      </figcaption>
    </figure>
  )
}
