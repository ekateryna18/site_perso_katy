import type { TText } from '../types';

export interface Experience {
  period: string;
  role: TText;
  company: string;
  location: string;
  bullets: TText[];
  tags: string[];
}

export interface Education {
  period: string;
  degree: TText;
  school: string;
  level: string;
}

export const experiences: Experience[] = [
  {
    period: 'Déc. 2025 — présent',
    role: { en: 'Full Stack Developer — Apprenticeship', fr: 'Développeuse Full Stack — Alternance' },
    company: 'VNWeb',
    location: 'Antibes, France',
    bullets: [
      {
        en: 'Developed new features for client projects, primarily with JavaScript, Node.js and Express',
        fr: "Développement de nouvelles fonctionnalités pour les projets clients, principalement en JavaScript, Node.js et Express",
      },
      {
        en: 'Integrated and configured AWS services: Cognito (auth), S3 (storage), DynamoDB (NoSQL), Lambda (async processing), SES (transactional emails)',
        fr: 'Intégration et configuration des services AWS : Cognito (authentification), S3 (stockage), DynamoDB (NoSQL), Lambda (traitements asynchrones), SES (emails transactionnels)',
      },
      {
        en: 'Applied internal coding conventions and development best practices across all deliverables',
        fr: "Application rigoureuse des conventions de codage et des bonnes pratiques de développement définies en interne",
      },
    ],
    tags: ['JavaScript', 'Node.js', 'Express', 'AWS', 'DynamoDB', 'S3', 'Lambda'],
  },
  {
    period: '2025',
    role: { en: 'Digital Content Production Assistant', fr: 'Assistante de Production de Contenu Numérique' },
    company: 'MDPI Publishing',
    location: 'Cluj-Napoca, Romania',
    bullets: [
      {
        en: 'Formatted and proofread academic documents according to editorial standards',
        fr: 'Mise en forme et relecture de documents académiques selon les normes éditoriales',
      },
      {
        en: 'Processed documents using XML and Microsoft Word workflows',
        fr: 'Traitement de documents via des workflows XML et Microsoft Word',
      },
    ],
    tags: ['XML', 'MS Word'],
  },
  {
    period: '2024',
    role: { en: 'SAP ABAP Developer Intern', fr: 'Développeuse SAP ABAP Stagiaire' },
    company: 'MSG Systems',
    location: 'Cluj-Napoca, Romania',
    bullets: [
      {
        en: 'Built a hotel reservation management client project end-to-end',
        fr: "Réalisation d'un projet client de gestion des réservations hôtelières de bout en bout",
      },
      {
        en: 'Developed with RAP (RESTful ABAP Programming Model) and managed SAP database configurations',
        fr: "Développement avec le modèle RAP (RESTful ABAP Programming Model) et gestion des configurations de base de données SAP",
      },
      {
        en: 'Worked in an Agile environment — project coordination, functional testing, cross-team communication',
        fr: "Travail en environnement Agile — coordination de projet, tests fonctionnels, communication inter-équipes",
      },
    ],
    tags: ['SAP ABAP', 'RAP', 'ABAP Objects', 'Jira', 'Agile'],
  },
  {
    period: '2023',
    role: { en: 'C# Developer Intern', fr: 'Développeuse C# Stagiaire' },
    company: 'Accenture Industry X',
    location: 'Cluj-Napoca, Romania',
    bullets: [
      {
        en: 'Migrated a Windows Forms UI to WPF and improved overall code quality',
        fr: "Migration d'une interface Windows Forms vers WPF et amélioration de la qualité du code",
      },
      {
        en: 'Worked autonomously on the full migration scope with full technical documentation',
        fr: "Travail en autonomie sur l'ensemble du périmètre de migration avec documentation technique complète",
      },
      {
        en: 'Integrated Apache Log4Net for structured application logging',
        fr: "Intégration d'Apache Log4Net pour une journalisation structurée de l'application",
      },
    ],
    tags: ['C#', 'WPF', 'Windows Forms', 'POO', 'Log4Net'],
  },
];

export const education: Education[] = [
  {
    period: '2025 — 2027',
    degree: {
      en: 'Expert in Security of Software Development (ESDI)',
      fr: 'Expert(e) en Sécurité des Développements Informatiques (ESDI)',
    },
    school: 'AcadéNice — Nice, France',
    level: 'Niv. 7 — RNCP37173',
  },
  {
    period: '2021 — 2024',
    degree: { en: "Bachelor's in Computer Science", fr: 'Licence en Informatique' },
    school: 'Babeș-Bolyai University — Cluj-Napoca, Romania',
    level: 'Bac+3',
  },
];
