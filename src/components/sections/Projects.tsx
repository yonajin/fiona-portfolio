import { useCallback, useState } from 'react'
import { projects } from '../../data/projects'
import type { Project } from '../../types'
import { ProjectCard } from '../projects/ProjectCard'
import { ProjectModal } from '../projects/ProjectModal'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const close = useCallback(() => setSelected(null), [])

  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-line bg-sand/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          number="02"
          label="Selected Work"
          id="projects-title"
          intro="A mix of thesis, capstone, and personal work — web systems, Android apps, and the databases behind them."
        >
          Projects.
        </SectionHeading>

        <div className="grid gap-16 md:grid-cols-2 md:gap-10 lg:gap-14">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 100} className="h-full">
              <ProjectCard project={project} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>

        {others.length > 0 ? (
          <>
            <Reveal className="mb-8 mt-20 flex items-baseline justify-between md:mt-24">
              <h3 className="eyebrow">Also built</h3>
              <span className="eyebrow" aria-hidden="true">
                {String(others.length).padStart(2, '0')} projects
              </span>
            </Reveal>
            <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-14">
              {others.map((project, i) => (
                <Reveal key={project.id} delay={i * 100} className="h-full">
                  <ProjectCard project={project} onOpen={setSelected} />
                </Reveal>
              ))}
            </div>
          </>
        ) : null}
      </div>

      <ProjectModal project={selected} onClose={close} />
    </section>
  )
}
