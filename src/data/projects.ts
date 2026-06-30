import type { TText } from '../types';

export interface Project {
  num: string;
  title: TText;
  desc: TText;
  tags: string[];
  link: string;
  soon?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    num: '01',
    title: { en: 'AI Daily Agenda', fr: 'Agenda Quotidien IA' },
    desc: {
      en: 'A mobile app generating personalized daily schedules using AI. React Native frontend with a Python/Flask backend and MongoDB for data persistence.',
      fr: "Une application mobile générant des plannings quotidiens personnalisés via l'IA. Frontend React Native avec un backend Python/Flask et MongoDB.",
    },
    tags: ['React Native', 'Expo', 'TypeScript', 'Python', 'Flask', 'MongoDB'],
    link: 'https://github.com/ekateryna18',
    featured: true,
  },
  {
    num: '02',
    title: { en: 'Oh My Matcha!', fr: 'Oh My Matcha !' },
    desc: {
      en: 'Full-stack GDPR-compliant tea shop with click-and-collect ordering. School challenge to implement 100% RGPD — cookie consent, loyalty system, full account erasure.',
      fr: "Application click-and-collect pour boutique de thé, construite comme défi RGPD complet — consentement cookies, système de fidélité, effacement total des données.",
    },
    tags: ['React', 'TypeScript', 'NestJS', 'MongoDB', 'Docker', 'JWT'],
    link: 'https://github.com/ekateryna18/oh-my-matcha',
    featured: true,
  },
  {
    num: '03',
    title: { en: 'Flowlance', fr: 'Flowlance' },
    desc: {
      en: 'Self-hosted SaaS for French freelance devs — AI-generated project specs, automatic task breakdown, legally-compliant invoicing, and a secure client portal. RNCP project.',
      fr: 'SaaS self-hosted pour développeurs freelances — CDC généré par IA, découpage automatique des tâches, facturation conforme au droit français et portail client sécurisé. Projet RNCP.',
    },
    tags: ['Next.js', 'TypeScript', 'SQLite', 'Drizzle', 'Auth.js', 'Docker'],
    link: 'https://github.com/ekateryna18',
    soon: true,
    featured: true,
  },
  {
    num: '04',
    title: { en: 'Flight Management App', fr: 'App Gestion de Vols' },
    desc: {
      en: 'Desktop flight management system with a JavaFX UI, PostgreSQL database, and REST services, implemented with Hibernate ORM and Spring architecture.',
      fr: 'Système de gestion de vols desktop avec interface JavaFX, base PostgreSQL et services REST, implémenté avec Hibernate ORM et Spring.',
    },
    tags: ['Java', 'JavaFX', 'PostgreSQL', 'Spring', 'Hibernate'],
    link: 'https://github.com/ekateryna18',
  },
];
