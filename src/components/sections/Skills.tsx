import { useLang } from '../../context/LangContext';
import { useReveal } from '../../hooks/useReveal';
import SectionHead from '../ui/SectionHead';
import CornerBrackets from '../ui/CornerBrackets';
import { skillGroups } from '../../data/skills';
import type { SkillCategory, SkillGroup } from '../../data/skills';

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

function SkillGroupBlock({ group }: { group: SkillGroup }) {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div className="skill-group">
      <div ref={ref} className={`skill-group-head reveal${visible ? ' visible' : ''}`}>
        <div className="skill-group-accent" />
        <div>
          <div className="skill-group-name">{t(group.label)}</div>
          <div className="skill-group-sublabel">{group.sublabel}</div>
        </div>
      </div>
      <div className="skills-grid">
        {group.categories.map((cat, i) => (
          <SkillCategoryCard key={i} category={cat} delay={i * 80} />
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
        <SectionHead num="03." title={t({ en: 'Skills', fr: 'Compétences' })} />
        <div className="skill-groups">
          {skillGroups.map((group, i) => (
            <SkillGroupBlock key={i} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
