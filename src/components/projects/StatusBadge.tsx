import type { ProjectStatus } from '../../types'

interface StatusBadgeProps {
  status?: ProjectStatus
  className?: string
}

/** Badge text per status. Completed projects show no badge. */
const LABELS: Partial<Record<ProjectStatus, string>> = {
  'in-progress': 'In Progress',
}

/** Small outlined status label in the site's mono/eyebrow style. */
export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const label = status ? LABELS[status] : undefined
  if (!label) return null

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap border border-accent-dark/35 bg-paper/80 px-2 py-[0.3rem] font-mono text-[0.625rem] uppercase leading-none tracking-[0.14em] text-accent-dark ${className}`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
      <span className="sr-only">Status: </span>
      {label}
    </span>
  )
}
