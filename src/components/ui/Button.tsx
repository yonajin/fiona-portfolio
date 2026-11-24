import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  icon?: ReactNode
  children: ReactNode
}

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-[2px] px-5 py-3 text-sm font-medium tracking-[0.01em] transition-[background-color,color,border-color,transform] duration-300 ease-(--ease-soft) active:translate-y-px'

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-paper hover:bg-accent-dark',
  secondary: 'border border-ink/80 text-ink hover:border-accent-dark hover:text-accent-dark',
  ghost: 'px-1 text-ink hover:text-accent-dark',
}

/** Link styled as a button. All CTAs on the site are links (anchors, mailto, downloads). */
export function ButtonLink({ variant = 'primary', icon, children, className = '', ...rest }: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      {icon ? (
        <span aria-hidden="true" className="transition-transform duration-300 ease-(--ease-soft) group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </a>
  )
}
