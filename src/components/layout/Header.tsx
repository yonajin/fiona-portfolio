import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'

const sectionIds = navItems.map((item) => item.id)

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu: Escape closes, body scroll is locked, closes when resized to desktop
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const media = window.matchMedia('(min-width: 768px)')
    const onMedia = () => media.matches && setOpen(false)

    document.addEventListener('keydown', onKey)
    media.addEventListener('change', onMedia)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      media.removeEventListener('change', onMedia)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? 'border-b border-line bg-paper/92 backdrop-blur-sm' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-serif text-[1.65rem] leading-none tracking-tight text-ink transition-colors hover:text-accent-dark"
          aria-label={`${profile.name} — back to top`}
          onClick={() => setOpen(false)}
        >
          FGB<span className="text-accent">.</span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item, i) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`group flex items-baseline gap-1.5 text-sm transition-colors duration-200 ${
                      isActive ? 'text-ink' : 'text-subtle hover:text-ink'
                    }`}
                  >
                    <span
                      className={`font-mono text-[0.625rem] transition-colors ${
                        isActive ? 'text-accent-dark' : 'text-muted/70 group-hover:text-accent-dark'
                      }`}
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-px bg-accent-dark transition-[width] duration-300 ease-(--ease-soft) ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper md:hidden"
      >
        <nav aria-label="Mobile" className="px-5 pb-10 pt-6 sm:px-8">
          <ul>
            {navItems.map((item, i) => (
              <li key={item.id} className="border-b border-line">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5 font-serif text-4xl text-ink transition-colors hover:text-accent-dark"
                >
                  {item.label}
                  <span className="font-mono text-xs text-subtle" aria-hidden="true">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-10">{profile.availability.label}</p>
          <a href={`mailto:${profile.email}`} className="mt-2 inline-block text-accent-dark link-underline">
            {profile.email}
          </a>
        </nav>
      </div>
    </header>
  )
}
