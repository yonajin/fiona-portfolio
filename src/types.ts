export interface NavItem {
  id: string
  label: string
}

export interface ExternalLink {
  label: string
  href: string
}

export interface ProjectImage {
  /** Full-size image, path relative to /public, e.g. "/projects/cable-manager/dashboard.webp" */
  src: string
  /** Optional smaller version used on small screens and in thumbnails */
  srcSmall?: string
  /** Width of `srcSmall` in pixels (defaults to 720) */
  smallWidth?: number
  /** Intrinsic size of `src`, used to reserve space and avoid layout shift */
  width: number
  height: number
  alt: string
  /** Short label shown under the image in the details gallery */
  caption?: string
}

export interface Project {
  id: string
  /** Display number, e.g. "01" */
  number: string
  title: string
  /** One-line description shown under the title */
  tagline: string
  /** e.g. "Thesis Project", "Capstone Project" */
  context: string
  year?: string
  /** Your role on the project */
  role?: string
  /** Short summary shown on the card */
  summary: string
  /** Longer paragraphs shown in the details modal */
  description: string[]
  highlights: string[]
  technologies: string[]
  /** Leave empty to show "Links available on request" */
  links: ExternalLink[]
  featured: boolean
  /**
   * Development status. Omit (or use "completed") for finished projects;
   * "in-progress" shows an IN PROGRESS badge on the card and in the details modal.
   */
  status?: ProjectStatus
  /** Primary screenshot for the card. Leave undefined until you have a real one. */
  image?: ProjectImage
  /** Additional screenshots shown in the details modal (the primary image is shown first automatically) */
  gallery?: ProjectImage[]
  /** Optional heading for the main gallery (image + gallery) in the details modal */
  galleryTitle?: string
  /** Layout of the main gallery; use "portrait" for phone screenshots (default "landscape") */
  galleryLayout?: 'landscape' | 'portrait'
  /** Further labelled screenshot groups shown below the main gallery in the details modal */
  gallerySections?: GallerySection[]
}

export type ProjectStatus = 'in-progress' | 'completed'

export interface GallerySection {
  title: string
  /** "portrait" lays phone screenshots out in a multi-column grid */
  layout: 'landscape' | 'portrait'
  images: ProjectImage[]
}

export interface SkillGroup {
  id: string
  title: string
  items: string[]
}

export interface TimelineEntry {
  period: string
  title: string
  organization?: string
  details?: string
  /** Marks entries that are still to be filled in */
  placeholder?: boolean
}

export interface CertificationDetail {
  label: string
  value: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  /** Human-readable date, e.g. "October 23, 2025" */
  date: string
  /** ISO date (YYYY-MM-DD), used for sorting and the <time> element */
  dateISO: string
  /** Label for the date, e.g. "Completed" or "Issued" */
  dateLabel: string
  /** Extra facts shown in the viewer (credential ID, duration, status...) */
  details?: CertificationDetail[]
  /** Topics covered, shown as a list in the viewer */
  coverage?: string[]
  /** Rendered preview of the real certificate */
  image: ProjectImage
  /** The original certificate PDF (path inside /public) */
  pdf?: string
  /** Public verification URL printed on the certificate, if any */
  verifyUrl?: string
}

export interface TimelineGroup {
  id: string
  title: string
  entries: TimelineEntry[]
}
