import { profile } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const facts: { label: string; value: string }[] = [
  { label: 'Studying', value: 'BS Computer Science, PHINMA UPang College of Urdaneta' },
  { label: 'Based in', value: profile.location },
  { label: 'Focus', value: 'Software engineering & software quality' },
  { label: 'Languages', value: 'English, Filipino' },
  { label: 'Availability', value: profile.availability.detail },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading number="01" label="About" id="about-title">
          A little about me.
        </SectionHeading>

        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7 lg:col-span-7">
            <p className="font-serif text-[1.75rem] leading-snug text-ink md:text-[2rem]">
              I like understanding software from the inside out — how an application is put together, and how it holds up
              once real people start using it.
            </p>

            <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink/85">
              <p>
                I&rsquo;m a Computer Science student, and most of what I&rsquo;ve learned has come from building things
                end to end. Across academic and client projects I&rsquo;ve worked on web application development,
                Android application development, database management, software testing, and system development &mdash;
                from a cable and internet service management system to a booking platform for a photography studio.
              </p>
              <p>
                Working on both sides of a project has taught me that building a feature and making sure it&rsquo;s
                reliable are part of the same job. I enjoy writing the code, and I enjoy just as much testing it,
                questioning it, and tightening it until it behaves the way it should. That&rsquo;s why I&rsquo;m
                drawn to both software engineering and software quality engineering.
              </p>
              <p>
                {/* EDIT: personal touch — swap for something that's true for you */}
                I&rsquo;m usually the one who reads the error message twice before asking for help, and then writes
                down what fixed it. Outside of coursework I keep picking up new tools and certifications, most recently
                in cybersecurity, data analytics, and cloud basics.
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5 md:pl-6 lg:col-span-4 lg:col-start-9 lg:pl-0" delay={120}>
            <dl className="border-t border-ink">
              {facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-4">
                  <dt className="eyebrow pt-0.5">{fact.label}</dt>
                  <dd className="text-sm leading-relaxed text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>

            {/* EDIT: replace with a line that is genuinely yours, or remove this figure */}
            <figure className="mt-10 bg-sand px-6 py-7">
              <blockquote className="font-serif text-xl italic leading-snug text-ink">
                &ldquo;Build it so it works. Test it so you know it does.&rdquo;
              </blockquote>
              <figcaption className="eyebrow mt-4">A working principle</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
