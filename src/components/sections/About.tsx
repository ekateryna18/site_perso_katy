import { useLang } from '../../context/LangContext';
import { useReveal } from '../../hooks/useReveal';
import SectionHead from '../ui/SectionHead';
import CornerBrackets from '../ui/CornerBrackets';

const TRAITS = {
  en: ['Organized', 'Proactive', 'Autonomous', 'Team Player', 'Adaptable', 'Detail-oriented', 'Optimistic'],
  fr: ['Organisée', 'Proactive', 'Autonome', "Esprit d'équipe", 'Adaptable', 'Attentive aux détails', 'Optimiste'],
};

const STATS = [
  { num: '3+', en: 'Years Coding',     fr: 'Ans de code'     },
  { num: '3',  en: 'Internships',      fr: 'Stages'          },
  { num: '10+', en: 'Technologies',    fr: 'Technologies'    },
  { num: '2',  en: 'Spoken Languages', fr: 'Langues parlées' },
];

export default function About() {
  const { lang, t } = useLang();
  const { ref: textRef, visible: textVisible } = useReveal<HTMLDivElement>();
  const { ref: statsRef, visible: statsVisible } = useReveal<HTMLDivElement>(0.15);

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead num="01." title={t({ en: 'About Me', fr: 'À Propos' })} />

        <div className="about-grid">
          <div ref={textRef} className={`about-text reveal${textVisible ? ' visible' : ''}`}>
            <p>
              {t({
                en: "I'm a passionate and motivated full-stack developer, currently pursuing a Master's degree (Bac+5) at AcadeNice in Nice, France. I'm actively seeking an apprenticeship to grow and contribute to innovative tech projects.",
                fr: "Je suis une développeuse full-stack passionnée et motivée, actuellement en Master (Bac+5) à AcadeNice à Nice, en France. Je recherche activement une alternance pour grandir et contribuer à des projets tech innovants.",
              })}
            </p>
            <p>
              {t({
                en: "I thrive in collaborative environments and bring leadership, strong communication, and sharp problem-solving to every team I'm part of.",
                fr: "Je m'épanouis dans les environnements collaboratifs et j'apporte leadership, bonne communication et une vraie capacité à résoudre les problèmes à chaque équipe.",
              })}
            </p>
            <div className="trait-pills">
              {TRAITS[lang].map(trait => (
                <span key={trait} className="pill">{trait}</span>
              ))}
            </div>
          </div>

          <div ref={statsRef} className={`about-stats reveal reveal-delay${statsVisible ? ' visible' : ''}`}>
            {STATS.map(s => (
              <div key={s.num} className="stat-card">
                <CornerBrackets />
                <span className="stat-spark">✦</span>
                <div className="stat-num">{s.num}</div>
                <div className="stat-lbl">{lang === 'en' ? s.en : s.fr}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
