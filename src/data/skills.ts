import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    items: ['PHP', 'JavaScript', 'TypeScript', 'Python', 'Kotlin', 'SQL'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['HTML', 'CSS', 'React', 'Vite', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    id: 'database',
    title: 'Database',
    items: ['MySQL', 'MariaDB', 'PostgreSQL', 'Supabase'],
  },
  {
    id: 'tools',
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'XAMPP'],
  },
]

export const interests: string[] = [
  'Software Engineering',
  'Software Quality Engineering',
  'Manual Testing',
  'Database Management',
  'Web Development',
  'Android Development',
]
