import { useLang } from '../../context/LangContext';
import { useReveal } from '../../hooks/useReveal';
import SectionHead from '../ui/SectionHead';
import TechTag from '../ui/TechTag';
import CornerBrackets from '../ui/CornerBrackets';
import { experiences, education } from '../../data/experience';
import type { Experience, Education } from '../../data/experience';

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

function EduCard({ edu }: { edu: Education }) {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`edu-card reveal${visible ? ' visible' : ''}`}>
      <CornerBrackets />
      <div className="edu-spark">✦</div>
      <div className="edu-period">{edu.period}</div>
      <h3>{t(edu.degree)}</h3>
      <span className="edu-school">{edu.school}</span>
      <span className="edu-badge">{edu.level}</span>
    </div>
  );
}

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead num="03." title={t({ en: 'Experience', fr: 'Expérience' })} />

        <div className="timeline">
          {experiences.map((exp, i) => (
            <TimelineCard key={i} exp={exp} />
          ))}
        </div>

        <div className="section-head edu-head">
          <span className="sec-num">04.</span>
          <h2 className="sec-title">{t({ en: 'Education', fr: 'Formation' })}</h2>
          <div className="sec-line" />
        </div>
        <div className="edu-grid">
          {education.map((edu, i) => (
            <EduCard key={i} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
