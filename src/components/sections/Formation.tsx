import { useLang } from '../../context/LangContext';
import { useReveal } from '../../hooks/useReveal';
import SectionHead from '../ui/SectionHead';
import CornerBrackets from '../ui/CornerBrackets';
import { education } from '../../data/experience';
import type { Education } from '../../data/experience';

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

export default function Formation() {
  const { t } = useLang();

  return (
    <section id="formation" className="section section-alt">
      <div className="container">
        <SectionHead num="02." title={t({ en: 'Education', fr: 'Formation' })} />
        <div className="edu-grid">
          {education.map((edu, i) => (
            <EduCard key={i} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
