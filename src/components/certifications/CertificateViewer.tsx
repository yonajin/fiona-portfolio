import { useEffect, useRef, type MouseEvent } from 'react'
import { ArrowUpRight, FileText, X } from 'lucide-react'
import type { Certification } from '../../types'
import { ProjectImageView } from '../projects/ProjectImageView'

interface CertificateViewerProps {
  certification: Certification | null
  onClose: () => void
}

/**
 * Full-size certificate viewer in a native <dialog>: focus is trapped,
 * Escape and backdrop clicks close it, and focus returns to the card.
 */
export function CertificateViewer({ certification, onClose }: CertificateViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (certification && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = 'hidden'
    } else if (!certification && dialog.open) {
      dialog.close()
    }
  }, [certification])

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

  const onDialogClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) dialogRef.current?.close()
  }

  const titleId = certification ? `certificate-${certification.id}-title` : undefined

  return (
    <dialog
      ref={dialogRef}
      onClick={onDialogClick}
      aria-labelledby={titleId}
      className="m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-4xl overflow-y-auto border border-line bg-paper p-0 text-ink shadow-[0_30px_80px_-30px_rgba(37,39,41,0.5)] open:motion-safe:animate-[rise_400ms_var(--ease-soft)_both]"
    >
      {certification ? (
        <div>
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-paper/95 px-5 py-3.5 backdrop-blur-sm sm:px-8">
            <p className="eyebrow truncate">Certificate</p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="-mr-2 inline-flex h-10 w-10 shrink-0 items-center justify-center text-ink transition-colors hover:text-accent-dark"
              aria-label="Close certificate"
              autoFocus
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <div className="px-5 pb-8 pt-6 sm:px-8">
            <div className="border border-line bg-sand">
              <ProjectImageView
                image={certification.image}
                sizes="(min-width: 896px) 830px, 100vw"
                loading="eager"
                className="h-auto w-full"
              />
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="font-mono text-xs tracking-wide text-subtle">
                  {certification.dateLabel}{' '}
                  <time dateTime={certification.dateISO}>{certification.date}</time>
                </p>
                <h2 id={titleId} className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">
                  {certification.title}
                </h2>
                <p className="mt-2 font-serif text-xl italic text-accent-dark">{certification.issuer}</p>

                {certification.coverage?.length ? (
                  <>
                    <h3 className="eyebrow mt-8">Coverage</h3>
                    <ul className="mt-3 border-t border-line">
                      {certification.coverage.map((topic, i) => (
                        <li key={topic} className="flex items-baseline gap-4 border-b border-line py-2.5 text-[0.95rem]">
                          <span className="font-mono text-[0.6875rem] text-subtle">{String(i + 1).padStart(2, '0')}</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>

              <div className="md:col-span-5">
                <dl className="border-t border-ink">
                  <div className="grid grid-cols-[7rem_1fr] gap-3 border-b border-line py-3">
                    <dt className="eyebrow pt-0.5">Issuer</dt>
                    <dd className="text-sm">{certification.issuer}</dd>
                  </div>
                  <div className="grid grid-cols-[7rem_1fr] gap-3 border-b border-line py-3">
                    <dt className="eyebrow pt-0.5">{certification.dateLabel}</dt>
                    <dd className="text-sm">{certification.date}</dd>
                  </div>
                  {certification.details?.map((detail) => (
                    <div key={detail.label} className="grid grid-cols-[7rem_1fr] gap-3 border-b border-line py-3">
                      <dt className="eyebrow pt-0.5">{detail.label}</dt>
                      <dd className="break-all text-sm">{detail.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  {certification.pdf ? (
                    <a
                      href={certification.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-dark"
                    >
                      <FileText size={15} strokeWidth={1.75} aria-hidden="true" />
                      Open PDF
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                  {certification.verifyUrl ? (
                    <a
                      href={certification.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-ink/80 px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent-dark hover:text-accent-dark"
                    >
                      Verify credential
                      <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  )
}
