import type { ProjectImage } from '../../types'

interface ProjectImageViewProps {
  image: ProjectImage
  /** CSS `sizes` hint for picking between the small and full-size files */
  sizes: string
  className?: string
  loading?: 'lazy' | 'eager'
}

/**
 * Responsive <img> for project screenshots. Uses the ~720px file on small
 * screens when one is provided, and reserves space with width/height.
 */
export function ProjectImageView({ image, sizes, className = '', loading = 'lazy' }: ProjectImageViewProps) {
  const srcSet = image.srcSmall
    ? `${image.srcSmall} ${image.smallWidth ?? 720}w, ${image.src} ${image.width}w`
    : undefined

  return (
    <img
      src={image.src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={loading}
      decoding="async"
      className={className}
    />
  )
}
