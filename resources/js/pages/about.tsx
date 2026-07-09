import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import MainNavbar from '@/components/main-navbar';
import MainFooter from '@/components/main-footer';
import { ArrowRight } from 'lucide-react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
};

function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as any}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();

  const navLinks = [
    { label: 'Home', href: '/', active: false, i18nKey: 'nav.home' },
    { label: 'About Us', href: '/about', active: true, i18nKey: 'nav.aboutUs' },
    { label: 'Programs', href: '/program', i18nKey: 'nav.programs' },
    { label: 'Why Ghana', href: '/why-ghana', i18nKey: 'nav.whyGhana' },
    { label: 'Contact / FAQ', href: '/contact', active: false, i18nKey: 'nav.contactFaq' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-emerald-200">
      <MainNavbar
        navLinks={navLinks}
        ctaLabel={t('nav.applyNow') as string}
      />

      {/* --- HERO --- */}
      <section className="relative overflow-hidden text-white py-24 lg:py-32">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              {t('about.kicker')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              {t('about.headline')}
            </h1>
            <p className="text-lg text-stone-100 max-w-2xl leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- ABOUT US / BUSINESS CONCEPT --- */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <h2 className="text-xs font-bold text-emerald-700 tracking-widest uppercase mb-3">{t('about.kicker')}</h2>
            <p className="text-3xl font-bold text-stone-900 tracking-tight mb-6">
              {t('about.headline')}
            </p>
            <div className="h-1 w-20 bg-amber-500 rounded"></div>
          </Reveal>
          <Reveal className="lg:col-span-7 space-y-6 text-stone-600 leading-relaxed text-lg" delay={120}>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </Reveal>
        </div>
      </section>

      <hr className="border-stone-200 max-w-7xl mx-auto" />

      {/* --- VISION & MISSION --- */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-stone-200/60">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">👁️‍🗨️</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">{t('visionMission.visionTitle')}</h3>
            <p className="text-stone-600 leading-relaxed">
              {t('visionMission.visionText')}
            </p>
          </Reveal>

          <Reveal className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-stone-200/60" delay={140}>
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">{t('visionMission.missionTitle')}</h3>
            <p className="text-stone-600 leading-relaxed">
              {t('visionMission.missionText')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- CORE OBJECTIVES --- */}
      <section id="objectives" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase mb-3 block">{t('objectives.sectionKicker')}</span>
            <h3 className="text-3xl font-bold tracking-tight text-stone-900 mb-4">{t('objectives.sectionTitle')}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {t('objectives.sectionIntro')}
            </p>
          </Reveal>
          <div className="lg:col-span-8 space-y-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Reveal
                key={idx}
                delay={idx * 90}
                className="flex items-start bg-stone-50 border border-stone-200 p-5 rounded-2xl"
              >
                <svg className="w-6 h-6 text-emerald-600 shrink-0 mr-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-stone-800 font-medium text-base sm:text-lg">{t(`objectives.items.${idx}`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <MainFooter />
    </div>
  );
}
