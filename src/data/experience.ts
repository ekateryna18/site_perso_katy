import type { TText } from '../types';

export interface Experience {
  role: TText;
  company: string;
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
    role: { en: 'C# Developer Intern', fr: 'Développeuse C# Stagiaire' },
    company: 'Accenture Industry X',
    bullets: [
      {
        en: 'Optimized existing C# code for improved performance and maintainability',
        fr: 'Optimisation du code C# existant pour de meilleures performances et maintenabilité',
      },
      {
        en: 'Migrated Windows Forms applications to modern WPF architecture',
        fr: "Migration d'applications Windows Forms vers l'architecture WPF moderne",
      },
      {
        en: 'Integrated Log4Net for structured application logging',
        fr: 'Intégration de Log4Net pour une journalisation structurée',
      },
    ],
    tags: ['C#', 'WPF', 'Log4Net'],
  },
  {
    role: { en: 'SAP ABAP Developer Intern', fr: 'Développeuse SAP ABAP Stagiaire' },
    company: 'MSG Systems',
    bullets: [
      {
        en: 'Managed and optimized SAP database configurations',
        fr: 'Gestion et optimisation des configurations de base de données SAP',
      },
      {
        en: 'Developed with RAP (RESTful ABAP Programming Model)',
        fr: "Développement avec le modèle de programmation RAP (RESTful ABAP)",
      },
      {
        en: 'Worked in an Agile environment with cross-functional teams',
        fr: "Travail en environnement Agile au sein d'équipes pluridisciplinaires",
      },
    ],
    tags: ['SAP', 'ABAP', 'RAP', 'Agile'],
  },
  {
    role: { en: 'Content Production Assistant', fr: 'Assistante Production de Contenu' },
    company: 'MDPI Publishing',
    bullets: [
      {
        en: 'Prepared and formatted academic documents for publication',
        fr: 'Préparation et mise en forme de documents académiques pour publication',
      },
      {
        en: 'Processed documents using XML and Microsoft Word workflows',
        fr: 'Traitement de documents via des workflows XML et Microsoft Word',
      },
    ],
    tags: ['XML', 'MS Word'],
  },
];

export const education: Education[] = [
  {
    period: '2025 — 2027',
    degree: { en: 'MBA Full Stack Development', fr: 'MBA Développement Full Stack' },
    school: 'AcadeNice — Nice, France',
    level: 'Bac+5',
  },
  {
    period: '2021 — 2024',
    degree: { en: "Bachelor's in Computer Science", fr: 'Licence en Informatique' },
    school: 'Babeș-Bolyai University — Cluj Napoca, Romania',
    level: 'Bac+3',
  },
];
