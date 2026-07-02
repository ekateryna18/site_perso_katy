import type { TText } from '../types';

export interface SkillCategory {
  category: TText;
  items: string[];
}

export interface SkillGroup {
  label: TText;
  sublabel: string;
  categories: SkillCategory[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: { en: 'Computer Science Fundamentals', fr: 'Fondements en Informatique' },
    sublabel: 'Babeș-Bolyai University — 2021–2024',
    categories: [
      {
        category: { en: 'Core Concepts', fr: 'Concepts fondamentaux' },
        items: ['Algorithmique', 'POO', 'Java', 'C++', 'Linux'],
      },
      {
        category: { en: 'Databases & Networks', fr: 'Bases de données & Réseaux' },
        items: ['SQL', 'PostgreSQL', 'TCP/IP', 'UDP', 'Modèle OSI'],
      },
    ],
  },
  {
    label: { en: 'Security Engineering', fr: 'Sécurité des Développements' },
    sublabel: 'AcadéNice — ESDI Niv. 7 — 2025–2027',
    categories: [
      {
        category: { en: 'Application Security', fr: 'Sécurité applicative' },
        items: ['OWASP Top 10', 'Burp Suite', 'Pentesting', 'SAST', 'DAST'],
      },
      {
        category: { en: 'DevSecOps', fr: 'DevSecOps' },
        items: ['Docker', 'CI/CD', 'Gitleaks', 'Semgrep', 'CodeQL', 'OWASP ZAP', 'GitHub Actions'],
      },
      {
        category: { en: 'Cryptography & Auth', fr: 'Cryptographie & Auth' },
        items: ['AES-256-GCM', 'Argon2id', 'JWT', 'httpOnly cookies'],
      },
      {
        category: { en: 'RGPD & Audit', fr: 'RGPD & Audit' },
        items: ['Privacy by Design', 'CNIL', "Plan d'audit", 'Plan de sécurisation'],
      },
      {
        category: { en: 'Monitoring', fr: 'Monitoring' },
        items: ['Grafana', 'Loki', 'Promtail'],
      },
      {
        category: { en: 'Project Management', fr: 'Gestion de projet' },
        items: ['Agile', 'Kanban', 'GitHub Projects', 'Jira'],
      },
    ],
  },
  {
    label: { en: 'Professional Stack', fr: 'Stack Professionnelle' },
    sublabel: 'VNWeb · MSG Systems · Accenture · MDPI · Oh My Matcha · Flowlance · AI Agenda',
    categories: [
      {
        category: { en: 'Frontend', fr: 'Front-end' },
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Expo'],
      },
      {
        category: { en: 'Backend', fr: 'Back-end' },
        items: ['Node.js', 'Express', 'Python', 'Java', 'C#', 'SAP ABAP'],
      },
      {
        category: { en: 'Databases', fr: 'Bases de données' },
        items: ['PostgreSQL', 'MongoDB', 'SQLite', 'DynamoDB'],
      },
      {
        category: { en: 'Cloud & Infra', fr: 'Cloud & Infra' },
        items: ['AWS', 'S3', 'Lambda', 'Cognito', 'SES', 'Scaleway', 'Traefik', 'Litestream'],
      },
      {
        category: { en: 'Frameworks', fr: 'Frameworks' },
        items: ['Spring Boot', 'NestJS', 'Flask', 'Hibernate', 'Auth.js', 'Drizzle', 'React Native'],
      },
    ],
  },
];
