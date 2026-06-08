import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Lang, TText } from '../types';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (text: TText) => string;
}

const Ctx = createContext<LangCtx>(null!);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  const t = (text: TText) => text[lang];
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
