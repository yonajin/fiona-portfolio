import type { NavItem } from '../types'

/**
 * Personal details used across the site.
 * Edit here — every section reads from this file.
 */
export const profile = {
  name: 'Fiona Gene U. Basa',
  firstName: 'Fiona Gene',
  wordmark: 'FGB.',
  roles: ['Computer Science Student', 'Aspiring Software Engineer', 'Software Quality Engineering Enthusiast'],
  location: 'Urdaneta City, Pangasinan, PH',
  email: 'fionagene@gmail.com',
  github: { href: 'https://github.com/yonajin', handle: 'yonajin' },
  linkedin: { href: 'https://www.linkedin.com/in/fionagenebasa/', handle: 'fionagenebasa' },
  /**
   * Path to the resume inside /public. Set to null to hide the
   * "Download Resume" button.
   * Note: the current PDF includes a phone number — remove it from the
   * file first if you don't want it public.
   */
  resumeUrl: '/resume/Fiona_Gene_Basa_Resume.pdf' as string | null,
  availability: {
    open: true,
    label: 'Open to Internship Opportunities',
    detail: 'OJT · December 2026 – January 2027 · approx. 500 hours',
  },
} as const

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
