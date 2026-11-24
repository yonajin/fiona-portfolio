interface TechListProps {
  items: string[]
  label?: string
}

export function TechList({ items, label = 'Technologies' }: TechListProps) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <li
          key={tech}
          className="border border-line bg-paper px-2 py-1 font-mono text-[0.6875rem] leading-none tracking-wide text-subtle"
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}
