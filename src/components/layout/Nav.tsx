import { useEffect, useState } from 'react';
import { useLang } from '../../context/LangContext';

const NAV_LINKS = [
  { href: '#about',      en: 'About',      fr: 'À propos'     },
  { href: '#skills',     en: 'Skills',     fr: 'Compétences'  },
  { href: '#experience', en: 'Experience', fr: 'Expérience'   },
  { href: '#projects',   en: 'Projects',   fr: 'Projets'      },
  { href: '#contact',    en: 'Contact',    fr: 'Contact'      },
];

export default function Nav() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled]     = useState(false);
  const [active, setActive]         = useState('');
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">EM</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <div className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link${active === l.href.slice(1) ? ' nav-link--active' : ''}`}
              onClick={closeMenu}
            >
              {lang === 'en' ? l.en : l.fr}
            </a>
          ))}
          <button
            className="lang-btn"
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}
