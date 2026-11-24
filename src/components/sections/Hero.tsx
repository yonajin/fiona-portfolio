import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { navItems, profile } from '../../data/profile'
import { ButtonLink } from '../ui/Button'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-16">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Masthead row */}
        <div
          className="flex items-center justify-between border-b border-line py-4 motion-safe:animate-[rise_700ms_var(--ease-soft)_both]"
        >
          <p className="eyebrow">Portfolio — Edition {new Date().getFullYear()}</p>
          <p className="eyebrow hidden sm:block">{profile.location}</p>
        </div>

        <div className="grid gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-24">
          {/* Main column */}
          <div className="lg:col-span-8 lg:pr-12">
            <p className="eyebrow motion-safe:animate-[rise_700ms_var(--ease-soft)_80ms_both]">
              Computer Science <span className="mx-1 text-accent-dark">·</span> Software Development
            </p>

            <h1
              id="hero-title"
              className="mt-6 font-serif text-[3.25rem] leading-[0.95] tracking-[-0.015em] text-ink sm:text-7xl lg:text-[6.25rem] motion-safe:animate-[rise_800ms_var(--ease-soft)_140ms_both]"
            >
              Building <em className="text-accent-dark">thoughtful</em> solutions through code.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-subtle motion-safe:animate-[rise_800ms_var(--ease-soft)_220ms_both]">
              I&rsquo;m {profile.firstName}, a Computer Science student passionate about software development,
              problem-solving, and building reliable digital experiences.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 motion-safe:animate-[rise_800ms_var(--ease-soft)_300ms_both]">
              <ButtonLink href="#projects" icon={<ArrowDown size={16} strokeWidth={1.75} />}>
                View My Projects
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary" icon={<ArrowUpRight size={16} strokeWidth={1.75} />}>
                Get In Touch
              </ButtonLink>
              {profile.resumeUrl ? (
                <ButtonLink
                  href={profile.resumeUrl}
                  variant="ghost"
                  download
                  icon={<Download size={16} strokeWidth={1.75} />}
                  aria-label="Download resume (PDF)"
                >
                  Download Resume
                </ButtonLink>
              ) : null}
            </div>

            {profile.availability.open ? (
              <p className="mt-10 inline-flex items-start gap-3 text-sm text-ink motion-safe:animate-[rise_800ms_var(--ease-soft)_380ms_both]">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-dark motion-safe:animate-[pulse-dot_2.4s_ease-in-out_infinite]"
                  aria-hidden="true"
                />
                <span>
                  {profile.availability.label}
                  <span className="mt-0.5 block font-mono text-[0.6875rem] tracking-wide text-subtle sm:ml-2 sm:mt-0 sm:inline">
                    {profile.availability.detail}
                  </span>
                </span>
              </p>
            ) : null}
          </div>

          {/* Side column: contents index + geometric mark */}
          <aside
            aria-label="Contents"
            className="flex flex-col justify-between gap-12 lg:col-span-4 lg:border-l lg:border-line lg:pl-8 motion-safe:animate-[rise_900ms_var(--ease-soft)_420ms_both]"
          >
            <HeroMark />

            <div>
              <p className="eyebrow mb-3">In this issue</p>
              <ol className="border-t border-ink">
                {navItems.map((item, i) => (
                  <li key={item.id} className="border-b border-line">
                    <a
                      href={`#${item.id}`}
                      className="group flex items-baseline justify-between py-2.5 text-sm text-ink transition-colors hover:text-accent-dark"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[0.6875rem] text-subtle group-hover:text-accent-dark">
                          0{i + 1}
                        </span>
                        {item.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px w-6 bg-line transition-[width,background-color] duration-300 ease-(--ease-soft) group-hover:w-10 group-hover:bg-accent-dark"
                      />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

/** Minimal Swiss-style composition: circle, quarter fill, crosshair and rule. */
function HeroMark() {
  return (
    <svg viewBox="0 0 240 240" className="hidden h-auto w-full max-w-[15rem] self-end lg:block" aria-hidden="true">
      <line x1="0" y1="120" x2="240" y2="120" stroke="#E3E1DB" strokeWidth="1" />
      <line x1="120" y1="0" x2="120" y2="240" stroke="#E3E1DB" strokeWidth="1" />
      <path d="M120 120 L120 36 A84 84 0 0 1 204 120 Z" fill="#8299AD" opacity="0.9" />
      <circle cx="120" cy="120" r="84" fill="none" stroke="#252729" strokeWidth="1" />
      <circle cx="120" cy="120" r="3" fill="#252729" />
      <line x1="36" y1="204" x2="204" y2="36" stroke="#252729" strokeWidth="1" strokeDasharray="2 5" />
      <text x="0" y="236" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1.5" fill="#777A7C">
        FIG. 01
      </text>
      <text x="240" y="236" textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1.5" fill="#777A7C">
        BUILD / TEST
      </text>
    </svg>
  )
}
