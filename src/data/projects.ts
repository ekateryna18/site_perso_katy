import type { TText } from '../types';

export interface Project {
  num: string;
  title: TText;
  desc: TText;
  tags: string[];
  link: string;
  soon?: boolean;
}

export const projects: Project[] = [
  {
    num: '01',
    title: { en: 'AI Daily Agenda', fr: 'Agenda Quotidien IA' },
    desc: {
      en: 'A mobile app generating personalized daily schedules using AI. React Native frontend with a Python/Flask backend and MongoDB for data persistence.',
      fr: "Une application mobile générant des plannings quotidiens personnalisés via l'IA. Frontend React Native avec un backend Python/Flask et MongoDB.",
    },
    tags: ['React', 'Expo', 'TypeScript', 'Python', 'Flask', 'MongoDB'],
    link: 'https://github.com/ekateryna18',
  },
  {
    num: '02',
    title: { en: 'Flight Management App', fr: 'App Gestion de Vols' },
    desc: {
      en: 'Desktop flight management system with a JavaFX UI, PostgreSQL database, and REST services, implemented with Hibernate ORM and Spring architecture.',
      fr: 'Système de gestion de vols desktop avec interface JavaFX, base PostgreSQL et services REST, implémenté avec Hibernate ORM et Spring.',
    },
    tags: ['Java', 'JavaFX', 'PostgreSQL', 'Spring', 'Hibernate'],
    link: 'https://github.com/ekateryna18',
  },
  {
    num: '03',
    title: { en: 'Java Chat Application', fr: 'Application Chat Java' },
    desc: {
      en: 'Real-time chat application built with JavaFX and PostgreSQL, using a layered architecture for scalability and clean separation of concerns.',
      fr: 'Application de chat en temps réel construite avec JavaFX et PostgreSQL, avec une architecture en couches pour la scalabilité.',
    },
    tags: ['Java', 'JavaFX', 'PostgreSQL'],
    link: 'https://github.com/ekateryna18',
  },
  {
    num: '04',
    title: { en: 'More Coming Soon…', fr: "D'autres à venir…" },
    desc: {
      en: 'This space is reserved for upcoming projects. Check back soon!',
      fr: 'Cet espace est réservé aux projets à venir. Revenez bientôt !',
    },
    tags: [],
    link: '#',
    soon: true,
  },
];
