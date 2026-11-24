import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in the reading zone
 * (roughly the upper-middle of the viewport).
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join('|')

  useEffect(() => {
    const elements = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0 || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))

    const onScroll = () => {
      // Clear the highlight when scrolled back into the hero
      const first = elements[0]
      if (first && window.scrollY + window.innerHeight * 0.35 < first.offsetTop) setActive(null)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [key])

  return active
}
