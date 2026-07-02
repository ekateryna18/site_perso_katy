import { useLang } from '../../context/LangContext';
import { useReveal } from '../../hooks/useReveal';
import SectionHead from '../ui/SectionHead';
import TechTag from '../ui/TechTag';
import CornerBrackets from '../ui/CornerBrackets';
import { experiences } from '../../data/experience';
import type { Experience } from '../../data/experience';

function TimelineCard({ exp }: { exp: Experience }) {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`t-item reveal${visible ? ' visible' : ''}`}>
      <div className="t-dot" />
      <div className="t-card">
        <CornerBrackets />
        <div className="t-header">
          <h3 className="t-role">{t(exp.role)}</h3>
          <span className="t-company">{exp.company}</span>
        </div>
        <div className="t-meta">
          <span className="t-period">{exp.period}</span>
          <span className="t-location">{exp.location}</span>
        </div>
        <ul className="t-bullets">
          {exp.bullets.map((b, i) => (
            <li key={i}>{t(b)}</li>
          ))}
        </ul>
        <div className="t-tags">
          {exp.tags.map(tag => <TechTag key={tag} label={tag} />)}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead num="04." title={t({ en: 'Experience', fr: 'Expérience' })} />
        <div className="timeline">
          {experiences.map((exp, i) => (
            <TimelineCard key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
