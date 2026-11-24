import { interests, skillGroups } from '../../data/skills'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          number="03"
          label="Toolkit"
          id="skills-title"
          intro="The languages, frameworks, and tools I've used in coursework and projects. No percentages — just what I work with."
        >
          Skills.
        </SectionHeading>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 80}>
              <h3 className="flex items-baseline justify-between border-t border-ink pb-4 pt-3">
                <span className="text-sm font-medium text-ink">{group.title}</span>
                <span className="font-mono text-[0.6875rem] text-subtle" aria-hidden="true">
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-center justify-between border-b border-line py-2.5 text-[0.95rem] text-ink/90"
                  >
                    {item}
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 bg-line transition-colors duration-300 group-hover:bg-accent-dark"
                    />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 bg-sand px-6 py-10 sm:px-10 md:mt-24 md:py-12" delay={100}>
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h3 className="eyebrow">Areas of interest</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-subtle">
                Where I want to keep growing — building software, and making sure it&rsquo;s reliable.
              </p>
            </div>
            <ul className="flex flex-wrap content-start gap-x-6 gap-y-2 md:col-span-8">
              {interests.map((interest, i) => (
                <li key={interest} className="font-serif text-2xl leading-tight text-ink md:text-[2rem]">
                  {interest}
                  {i < interests.length - 1 ? (
                    <span className="ml-6 text-accent" aria-hidden="true">
                      /
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
