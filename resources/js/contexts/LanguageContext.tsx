import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import de from '../locales/de.json';
import it from '../locales/it.json';
import pt from '../locales/pt.json';

type Locale = 'en' | 'fr' | 'de' | 'it' | 'pt';

type Translations = typeof en;

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string, fallback?: string | string[]) => string | string[];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const translations: Record<Locale, Translations> = { en, fr, de, it, pt };

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((acc: unknown, part: string) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj as unknown);
}

function interpolate(template: string, values?: Record<string, string>): string {
  if (!values) return template;
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] ?? _);
}

function useTranslations(locale: Locale) {
  const dict = translations[locale];

  return (key: string, fallback?: string | string[]) => {
    const raw = getNestedValue(dict as unknown as Record<string, unknown>, key);
    if (Array.isArray(raw)) {
      return raw as string[];
    }
    if (typeof raw === 'string') {
      return interpolate(raw);
    }
    return fallback ?? key;
  };
}

type Props = {
  children: ReactNode;
  initialLocale?: Locale;
};

export function LanguageProvider({ children, initialLocale }: Props) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('app_locale') : null;
    return (stored === 'en' || stored === 'fr' || stored === 'de' || stored === 'it' || stored === 'pt') ? stored : initialLocale ?? 'en';
  });

  useEffect(() => {
    localStorage.setItem('app_locale', locale);
  }, [locale]);

  const t = useTranslations(locale);
  const setLocale = (next: Locale) => setLocaleState(next);
  const toggleLocale = () => setLocaleState((prev) => {
    const locales: Locale[] = ['en', 'fr', 'de', 'it', 'pt'];
    const idx = locales.indexOf(prev);
    return locales[(idx + 1) % locales.length];
  });

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
