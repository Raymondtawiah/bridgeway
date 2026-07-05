import React, { useState } from 'react';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useLanguage } from '@/contexts/LanguageContext';

type NavLink = {
  label: string;
  href: string;
  active?: boolean;
  i18nKey?: string;
};

type Lang = { code: string; label: string };

type Props = {
  navLinks: NavLink[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  activePage?: string;
};

export default function MainNavbar({ navLinks, ctaLabel, onCtaClick, activePage }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, setLocale, locale } = useLanguage();

  const handleNav = (href: string) => {
    window.location.hash = href;
    setIsMenuOpen(false);
  };

  const languages: Lang[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'it', label: 'IT' },
    { code: 'pt', label: 'PT' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale) ?? languages[0];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe className="w-8 h-8 text-emerald-700" />
          <span className="text-2xl font-black tracking-wider text-stone-900">
            {t('brand')}<span className="text-amber-600">{t('brandSuffix')}</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-1 font-semibold text-sm uppercase tracking-wider">
          {navLinks.map((link) => (
            <NavLinkItem key={link.label} link={link} t={t} activePage={activePage} />
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen((prev) => !prev)}
              className="flex items-center space-x-1 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-emerald-700 transition-colors px-2 py-1 border border-stone-200 rounded"
            >
              <span>{currentLanguage.label}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white border border-stone-200 rounded-lg shadow-lg overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLocale(lang.code as 'en' | 'fr' | 'de' | 'it' | 'pt');
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                      locale === lang.code ? 'text-emerald-700 bg-emerald-50' : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {ctaLabel && (
            <button
              onClick={onCtaClick}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm shadow-md transition-all"
            >
              {ctaLabel}
            </button>
          )}
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen((prev) => !prev)}
              className="flex items-center space-x-1 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-emerald-700 transition-colors px-2 py-1 border border-stone-200 rounded"
            >
              <span>{currentLanguage.label}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white border border-stone-200 rounded-lg shadow-lg overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLocale(lang.code as 'en' | 'fr' | 'de' | 'it' | 'pt');
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                      locale === lang.code ? 'text-emerald-700 bg-emerald-50' : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-stone-600 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 flex flex-col space-y-3 font-medium">
          {navLinks.map((link) => {
            const isHash = link.href.includes('#');
            if (isHash) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 border-b border-stone-100 ${
                    link.active ? 'text-emerald-700 font-bold' : 'text-stone-700'
                  }`}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`py-2 border-b border-stone-100 ${
                  link.active ? 'text-emerald-700 font-bold' : 'text-stone-700'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {ctaLabel && (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onCtaClick?.();
              }}
              className="w-full bg-emerald-700 text-white py-2.5 rounded-full font-semibold"
            >
              {ctaLabel}
            </button>
          )}
        </div>
      )}
    </header>
  );
}

function NavLinkItem({ link, t, activePage }: { link: NavLink; t: (key: string, fallback?: string) => string; activePage?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = link.active || (activePage && link.href.includes(activePage));
  const translatedLabel = link.i18nKey ? t(link.i18nKey, link.label) : link.label;
  const isHash = link.href.startsWith('#');

  if (isHash) {
    const href = link.href;
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          window.location.hash = href;
        }}
        className={`relative px-3 py-2 transition-colors ${
          isActive ? 'text-emerald-700' : 'text-stone-600 hover:text-stone-900'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10">{translatedLabel}</span>
        <span
          className="absolute bottom-0 left-0 h-0.5 bg-emerald-700 transition-all duration-300 ease-out"
          style={{ width: isHovered || isActive ? '100%' : '0%' }}
        />
      </a>
    );
  }

  return (
    <Link
      href={link.href}
      className={`relative px-3 py-2 transition-colors ${
        isActive ? 'text-emerald-700' : 'text-stone-600 hover:text-stone-900'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{translatedLabel}</span>
      <span
        className="absolute bottom-0 left-0 h-0.5 bg-emerald-700 transition-all duration-300 ease-out"
        style={{ width: isHovered || isActive ? '100%' : '0%' }}
      />
    </Link>
  );
}
