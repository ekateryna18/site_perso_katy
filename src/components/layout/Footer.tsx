import { useLang } from '../../context/LangContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-copy">
          {t({
            en: 'Designed & Built by Ecaterina Munteanu',
            fr: 'Conçu & Développé par Ecaterina Munteanu',
          })}
        </span>
        <span className="footer-spark">2025 ✦</span>
      </div>
    </footer>
  );
}
