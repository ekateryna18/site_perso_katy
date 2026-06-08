import { useRef } from 'react';
import { useLang } from '../../context/LangContext';
import { useReveal } from '../../hooks/useReveal';
import SectionHead from '../ui/SectionHead';
import TechTag from '../ui/TechTag';
import CornerBrackets from '../ui/CornerBrackets';
import { projects } from '../../data/projects';
import type { Project } from '../../data/projects';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const glowRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x    = e.clientX - rect.left;
    const y    = e.clientY - rect.top;
    if (glowRef.current) {
      glowRef.current.style.top    = `${y - 80}px`;
      glowRef.current.style.left   = `${x - 80}px`;
      glowRef.current.style.width  = '200px';
      glowRef.current.style.height = '200px';
    }
  };

  const onMouseLeave = () => {
    if (glowRef.current) {
      glowRef.current.style.top    = '';
      glowRef.current.style.left   = '';
      glowRef.current.style.width  = '';
      glowRef.current.style.height = '';
    }
  };

  return (
    <div
      ref={ref}
      className={`proj-card${project.soon ? ' proj-soon' : ''} reveal${visible ? ' visible' : ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <CornerBrackets />
      <div ref={glowRef} className="proj-glow" />
      <div className="proj-num">{project.num}</div>
      <h3 className="proj-title">{t(project.title)}</h3>
      <p className="proj-desc">{t(project.desc)}</p>

      {project.tags.length > 0 && (
        <div className="proj-tags">
          {project.tags.map(tag => <TechTag key={tag} label={tag} />)}
        </div>
      )}

      {project.soon ? (
        <span className="soon-badge">
          {t({ en: 'In Progress', fr: 'En cours' })}
        </span>
      ) : (
        <div className="proj-links">
          <a href={project.link} className="proj-link" target="_blank" rel="noopener noreferrer">
            <GithubIcon /> GitHub
          </a>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHead num="05." title={t({ en: 'Projects', fr: 'Projets' })} />
        <div className="proj-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
