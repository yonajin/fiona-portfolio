import { useCallback, useState } from 'react'
import { certifications } from '../../data/certifications'
import type { Certification } from '../../types'
import { Reveal } from '../ui/Reveal'
import { CertificateViewer } from './CertificateViewer'
import { CertificationCard } from './CertificationCard'

/**
 * Certifications group for the Experience section. Uses the same
 * label-column / content-column grid as the timeline groups above it.
 */
export function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null)
  const close = useCallback(() => setSelected(null), [])

  if (certifications.length === 0) return null

  return (
    <Reveal className="grid gap-6 md:grid-cols-12 md:gap-8">
      <h3 id="certifications-title" className="eyebrow md:col-span-3 md:pt-5">
        Certifications
      </h3>
      <div className="border-t border-ink pt-6 md:col-span-9">
        <ul aria-labelledby="certifications-title" className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {certifications.map((certification) => (
            <li key={certification.id}>
              <CertificationCard certification={certification} onOpen={setSelected} />
            </li>
          ))}
        </ul>
      </div>
      <CertificateViewer certification={selected} onClose={close} />
    </Reveal>
  )
}
