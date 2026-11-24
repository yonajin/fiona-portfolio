import type { TimelineGroup } from '../types'

/**
 * Education, experience, and certifications.
 * Entries with `placeholder: true` are shown in a muted style —
 * replace them with real details (and remove the flag) when you have them.
 */
export const timeline: TimelineGroup[] = [
  {
    id: 'education',
    title: 'Education',
    entries: [
      {
        period: '2023 — 2027',
        title: 'Bachelor of Science in Computer Science',
        organization: 'PHINMA UPang College of Urdaneta',
        details: 'Urdaneta City, Pangasinan · Expected graduation May 2027',
      },
    ],
  },
  {
    id: 'internship',
    title: 'Internship',
    entries: [
      {
        period: 'Dec 2026 — Jan 2027',
        title: 'On-the-Job Training (OJT)',
        organization: 'Company to be announced',
        details:
          'Currently seeking an internship placement of approximately 500 hours. This entry will be updated once confirmed.',
        placeholder: true,
      },
      // EDIT: when you start, replace the entry above with e.g.
      // { period: 'Dec 2026 — Jan 2027', title: 'Software QA Intern', organization: 'Company Name', details: 'What you worked on.' },
    ],
  },
  {
    id: 'academic',
    title: 'Relevant Academic Experience',
    entries: [
      {
        period: 'Capstone',
        title: 'Developer & Quality Assurance — Jonathan Photography System',
        details:
          'Built and tested a full-stack studio website and booking system; ran user testing with 7 participants, including the client.',
      },
      {
        period: 'Thesis',
        title: 'Front-end Developer & Documentation — Cable Manager',
        details:
          'Worked on the web administration system and Android subscriber app for a cable and internet service provider.',
      },
      {
        period: '2025',
        title: 'Front-end Developer — U-Eat Ordering System',
        details: 'Developed the Android front end for a school canteen ordering app; tested with 50 users.',
      },
    ],
  },
  // Certifications live in ./certifications.ts and are rendered with previews.
]
