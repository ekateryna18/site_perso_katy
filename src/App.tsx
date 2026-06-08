import { useEffect } from 'react';
import { LangProvider } from './context/LangContext';
import Cursor from './components/ui/Cursor';
import Particles from './components/ui/Particles';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function SparkleEffect() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes burst {
        0%   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -220%) scale(2.2); }
      }
    `;
    document.head.appendChild(style);

    const onClick = (e: MouseEvent) => {
      if (window.innerWidth <= 768) return;
      const el = document.createElement('span');
      el.textContent = '✦';
      el.style.cssText = `
        position:fixed;left:${e.clientX}px;top:${e.clientY}px;
        color:#ff0077;font-size:.9rem;pointer-events:none;z-index:9999;
        transform:translate(-50%,-50%);animation:burst .6s ease forwards;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 650);
    };

    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      style.remove();
    };
  }, []);

  return null;
}

export default function App() {
  return (
    <LangProvider>
      <SparkleEffect />
      <Cursor />
      <Particles />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
