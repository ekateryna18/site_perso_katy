import { useLang } from '../../context/LangContext';
import { useReveal } from '../../hooks/useReveal';
import SectionHead from '../ui/SectionHead';
import CornerBrackets from '../ui/CornerBrackets';
import { skills } from '../../data/skills';
import type { SkillCategory } from '../../data/skills';

function SkillCategoryCard({ category, delay }: { category: SkillCategory; delay: number }) {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`skill-cat reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CornerBrackets />
      <h3 className="cat-title">
        <span className="cat-hex">⬡</span>
        {t(category.category)}
      </h3>
      <div className="skill-pills">
        {category.items.map(item => (
          <span key={item} className="skill-pill">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHead num="02." title={t({ en: 'Skills', fr: 'Compétences' })} />
        <div className="skills-grid">
          {skills.map((cat, i) => (
            <SkillCategoryCard key={i} category={cat} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
