import type { TText } from '../types';

export interface SkillCategory {
  category: TText;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: { en: 'Backend', fr: 'Back-end' },
    items: ['Java', 'Python', 'Node.js', 'REST API', 'HTTP Services'],
  },
  {
    category: { en: 'Frontend', fr: 'Front-end' },
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Expo'],
  },
  {
    category: { en: 'Databases', fr: 'Bases de données' },
    items: ['PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    category: { en: 'Frameworks & Tools', fr: 'Frameworks & Outils' },
    items: ['Spring Boot', 'Flask', 'Hibernate', 'Tailwind', 'Git', 'Agile'],
  },
];
