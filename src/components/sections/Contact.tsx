import { ArrowUpRight, Mail } from 'lucide-react'
import type { ReactNode } from 'react'
import { profile } from '../../data/profile'
import { ButtonLink } from '../ui/Button'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { Reveal } from '../ui/Reveal'

interface ContactRow {
  label: string
  value: string
  href: string
  icon: ReactNode
  external: boolean
}

const rows: ContactRow[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <Mail size={18} strokeWidth={1.5} aria-hidden="true" />,
    external: false,
  },
  {
    label: 'GitHub',
    value: `github.com/${profile.github.handle}`,
    href: profile.github.href,
    icon: <GithubIcon />,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: `linkedin.com/in/${profile.linkedin.handle}`,
    href: profile.linkedin.href,
    icon: <LinkedinIcon />,
    external: true,
  },
]

const mailSubject = encodeURIComponent('Hello Fiona — from your portfolio')

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-baseline justify-between border-t border-ink pt-3">
            <p className="eyebrow">
              <span className="text-accent-dark">05</span>
              <span className="mx-2" aria-hidden="true">
                —
              </span>
              Contact
            </p>
            <span className="eyebrow hidden sm:inline" aria-hidden="true">
              FGB / 05
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-14 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7">
            <h2
              id="contact-title"
              className="font-serif text-[3.25rem] leading-[0.95] tracking-[-0.015em] text-ink sm:text-7xl lg:text-[5.5rem]"
            >
              Have something <em className="text-accent-dark">in mind?</em>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-subtle">
              I&rsquo;m always open to learning opportunities, collaboration, and conversations about technology.
            </p>
            <div className="mt-10">
              <ButtonLink
                href={`mailto:${profile.email}?subject=${mailSubject}`}
                icon={<ArrowUpRight size={16} strokeWidth={1.75} />}
              >
                Send me an email
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5 md:self-end" delay={120}>
            <ul className="border-t border-ink">
              {rows.map((row) => (
                <li key={row.label} className="border-b border-line">
                  <a
                    href={row.href}
                    {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 py-5 transition-colors hover:text-accent-dark"
                  >
                    <span className="text-subtle transition-colors group-hover:text-accent-dark">{row.icon}</span>
                    <span className="flex-1">
                      <span className="eyebrow block">{row.label}</span>
                      <span className="mt-1 block break-all text-[0.95rem] text-ink group-hover:text-accent-dark">
                        {row.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="text-subtle transition-transform duration-300 ease-(--ease-soft) group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-dark"
                    />
                    {row.external ? <span className="sr-only">(opens in a new tab)</span> : null}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
