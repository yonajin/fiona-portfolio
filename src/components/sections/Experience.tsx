import { timeline } from '../../data/experience'
import { Certifications } from '../certifications/Certifications'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line bg-sand/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          number="04"
          label="Education & Experience"
          id="experience-title"
          intro="Where I study, the academic work I've contributed to, and the certifications I've completed."
        >
          Experience.
        </SectionHeading>

        <div className="space-y-16 md:space-y-20">
          {timeline.map((group) => (
            <Reveal key={group.id} className="grid gap-6 md:grid-cols-12 md:gap-8">
              <h3 className="eyebrow md:col-span-3 md:pt-5">{group.title}</h3>
              <ol className="border-t border-ink md:col-span-9">
                {group.entries.map((entry) => (
                  <li
                    key={`${entry.period}-${entry.title}`}
                    className="grid gap-2 border-b border-line py-5 sm:grid-cols-[10rem_1fr] sm:gap-8"
                  >
                    <p className="font-mono text-xs leading-6 tracking-wide text-subtle">{entry.period}</p>
                    <div className={entry.placeholder ? 'border-l-2 border-dashed border-accent pl-4' : ''}>
                      <p className="text-[1.0625rem] font-medium leading-snug text-ink">{entry.title}</p>
                      {entry.organization ? (
                        <p className="mt-1 font-serif text-lg italic text-accent-dark">{entry.organization}</p>
                      ) : null}
                      {entry.details ? (
                        <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-subtle">{entry.details}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
          <Certifications />
        </div>
      </div>
    </section>
  )
}
