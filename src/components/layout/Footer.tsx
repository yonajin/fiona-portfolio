import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/90 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-4xl leading-none">
              FGB<span className="text-accent">.</span>
            </p>
            <p className="mt-4 text-sm text-paper/70">{profile.name}</p>
            <p className="mt-1 font-mono text-[0.6875rem] tracking-wide text-paper/55">
              &copy; {year} · Designed &amp; built with care.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
            <a
              href={profile.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-paper/80 transition-colors hover:text-paper"
            >
              <GithubIcon size={16} />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={profile.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-paper/80 transition-colors hover:text-paper"
            >
              <LinkedinIcon size={16} />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 border border-paper/30 px-3.5 py-2 text-paper transition-colors hover:border-accent hover:text-accent"
            >
              Back to top
              <ArrowUp
                size={15}
                strokeWidth={1.75}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
