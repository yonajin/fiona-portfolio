import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Delay in ms before the transition starts */
  delay?: number
}

/** Fades content up once it scrolls into view. Disabled by prefers-reduced-motion (see index.css). */
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
