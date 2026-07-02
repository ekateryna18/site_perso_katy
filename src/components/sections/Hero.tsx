import { useEffect, useState } from 'react';
import { useLang } from '../../context/LangContext';
import CornerBrackets from '../ui/CornerBrackets';

const ROLES = {
  en: ['DevSecOps', 'Security-First Builder', 'CI/CD & Docker', 'OWASP · RGPD · Cryptographie'],
  fr: ['DevSecOps', 'Sécurité dès la conception', 'CI/CD & Docker', 'OWASP · RGPD · Cryptographie'],
};

const SPARKLES = [
  { ch: '✦', cls: 'sp1' },
  { ch: '✧', cls: 'sp2' },
  { ch: '✦', cls: 'sp3' },
  { ch: '✧', cls: 'sp4' },
  { ch: '✦', cls: 'sp5' },
  { ch: '✧', cls: 'sp6' },
  { ch: '✦', cls: 'sp7' },
  { ch: '✧', cls: 'sp8' },
  { ch: '✦', cls: 'sp9' },
  { ch: '✧', cls: 'sp10' },
  { ch: '✦', cls: 'sp11' },
  { ch: '✧', cls: 'sp12' },
];

export default function Hero() {
  const { lang, t } = useLang();
  const [typed, setTyped]       = useState('');
  const [roleIdx, setRoleIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setTyped('');
    setDeleting(false);
  }, [lang]);

  useEffect(() => {
    const list = ROLES[lang];
    const word = list[roleIdx % list.length];

    if (!deleting) {
      if (typed.length < word.length) {
        const id = setTimeout(() => setTyped(word.slice(0, typed.length + 1)), 88);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setDeleting(true), 1700);
      return () => clearTimeout(id);
    } else {
      if (typed.length > 0) {
        const id = setTimeout(() => setTyped(typed.slice(0, -1)), 55);
        return () => clearTimeout(id);
      }
      setDeleting(false);
      setRoleIdx(prev => prev + 1);
    }
  }, [typed, deleting, roleIdx, lang]);

  return (
    <section id="hero" className="hero">

      {/* Radial glow blobs */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob--1" />
        <div className="hero-blob hero-blob--2" />
        <div className="hero-blob hero-blob--3" />
      </div>

      {/* Giant ghost text */}
      <div className="hero-ghost" aria-hidden="true">
        <span>ECATERINA</span>
        <span>MUNTEANU</span>
      </div>

      {/* CRT scanlines */}
      <div className="hero-scanlines" aria-hidden="true" />

      {/* Sparkles — more density */}
      <div className="hero-sparkles" aria-hidden="true">
        {SPARKLES.map(s => (
          <span key={s.cls} className={`sp ${s.cls}`}>{s.ch}</span>
        ))}
      </div>

      {/* Terminal corner */}
      <div className="terminal-corner" aria-hidden="true">
        <span>INIT_PORTFOLIO.EXE</span>
        <span>MODULES......... [OK]</span>
        <span>SYS://USER/EM_v2025</span>
        <span className="terminal-blink">▮ READY</span>
      </div>

      <div className="hero-content">
        <CornerBrackets />

        <div className="hero-tag">
          <span className="tag-pulse" />
          {t({
            en: 'Open to apprenticeship opportunities',
            fr: 'Disponible pour une alternance',
          })}
        </div>

        <h1 className="hero-name">
          <span className="glitch" data-text="Ecaterina">Ecaterina</span>
          <span className="glitch" data-text="Munteanu">Munteanu</span>
        </h1>

        <div className="hero-role">
          <span className="mono-prefix">$ </span>
          <span>{typed}</span>
          <span className="blink-cursor">_</span>
        </div>

        <p className="hero-bio">
          {t({
            en: 'DevSecOps — security baked in from the first commit.',
            fr: 'DevSecOps — la sécurité intégrée dès le premier commit.',
          })}
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            {t({ en: 'View Projects', fr: 'Voir les Projets' })}
          </a>
          <a href="#contact" className="btn-ghost">
            {t({ en: 'Get in Touch', fr: 'Me Contacter' })}
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="scroll-label">{t({ en: 'scroll', fr: 'défiler' })}</span>
        <div className="scroll-bar" />
      </div>
    </section>
  );
}
