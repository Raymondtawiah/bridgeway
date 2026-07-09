import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import MainNavbar from '@/components/main-navbar';
import MainFooter from '@/components/main-footer';
import {
  ArrowRight,
  BookOpen,
  HeartPulse,
  Sprout,
  Trophy,
  Compass,
  Cpu,
  Briefcase,
  ChevronRight
} from 'lucide-react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
};

function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  React.useEffect(() => {
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

export default function ProgramPage() {
  const { t } = useLanguage();

  const services = [
    { title: t('services.items.0.title'), icon: <BookOpen className="w-6 h-6 text-emerald-600" />, desc: t('services.items.0.desc') },
    { title: t('services.items.1.title'), icon: <HeartPulse className="w-6 h-6 text-emerald-600" />, desc: t('services.items.1.desc') },
    { title: t('services.items.2.title'), icon: <Sprout className="w-6 h-6 text-emerald-600" />, desc: t('services.items.2.desc') },
    { title: t('services.items.3.title'), icon: <Trophy className="w-6 h-6 text-emerald-600" />, desc: t('services.items.3.desc') },
    { title: t('services.items.4.title'), icon: <Compass className="w-6 h-6 text-emerald-600" />, desc: t('services.items.4.desc') },
    { title: t('services.items.5.title'), icon: <Cpu className="w-6 h-6 text-emerald-600" />, desc: t('services.items.5.desc') },
    { title: t('services.items.6.title'), icon: <Briefcase className="w-6 h-6 text-emerald-600" />, desc: t('services.items.6.desc') }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);

  const handleStart = (x: number, y: number) => {
    dragStart.current = { x, y };
    dragging.current = true;
  };

  const handleMove = (x: number, y: number) => {
    if (!dragging.current || !slideRef.current) return;
    const dx = x - dragStart.current.x;
    const dy = y - dragStart.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
      if (dx < -30 && currentSlide < services.length - 1) setCurrentSlide((p) => p + 1);
      if (dx > 30 && currentSlide > 0) setCurrentSlide((p) => p - 1);
      dragging.current = false;
    }
  };

  const handleEnd = () => {
    dragging.current = false;
  };

  const navLinks = [
    { label: 'Home', href: '/', active: false, i18nKey: 'nav.home' },
    { label: 'About Us', href: '/about', active: false, i18nKey: 'nav.aboutUs' },
    { label: 'Programs', href: '/program', active: true, i18nKey: 'nav.programs' },
    { label: 'Why Ghana', href: '/why-ghana', i18nKey: 'nav.whyGhana' },
    { label: 'Contact / FAQ', href: '/contact', i18nKey: 'nav.contactFaq' },
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
              {t('services.kicker')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              {t('services.title')}
            </h1>
            <p className="text-lg text-stone-100 max-w-2xl leading-relaxed">
              {t('services.subtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- PRODUCTS AND SERVICES --- */}
      <section id="services" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-emerald-700 tracking-widest uppercase mb-3">{t('services.kicker')}</h2>
            <p className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              {t('services.title')}
            </p>
            <p className="mt-4 text-stone-600">{t('services.subtitle')}</p>
          </Reveal>

          {/* Draggable carousel on mobile, grid on md+ */}
          <div className="md:hidden select-none">
            <div
              ref={slideRef}
              className="relative overflow-hidden touch-pan-y"
              onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
              onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={(e) => handleStart(e.touches[0].clientX, e.touches[0].clientY)}
              onTouchMove={(e) => handleMove(e.touches[0].clientX, e.touches[0].clientY)}
              onTouchEnd={handleEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, idx) => (
                  <div key={idx} className="w-full shrink-0 px-4">
                    <div className="w-full bg-white p-6 rounded-2xl border border-stone-200">
                      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-5">
                        {React.cloneElement(service.icon, { className: "w-6 h-6 text-emerald-700" })}
                      </div>
                      <h4 className="text-lg font-bold text-stone-900 mb-2">{service.title}</h4>
                      <p className="text-sm text-stone-500 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === idx ? 'w-6 bg-emerald-600' : 'w-2.5 bg-stone-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Reveal
                key={idx}
                delay={(idx % 3) * 100}
                className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-stone-200/50 transition-all group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-700 group-hover:text-white transition-all">
                  {React.cloneElement(service.icon, { className: "w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" })}
                </div>
                <h4 className="text-lg font-bold text-stone-900 mb-2">{service.title}</h4>
                <p className="text-sm text-stone-500 leading-relaxed">{service.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROGRAMS / PATHWAY DIRECTORY --- */}
      <section id="explore" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2">{t('explore.kicker')}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">{t('explore.title')}</h2>
          <p className="mt-4 text-stone-600">{t('explore.subtitle')}</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Reveal delay={100} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">{t('explore.medicalTitle')}</h3>
              </div>
              <p className="text-stone-600 mb-6 leading-relaxed">{t('explore.medicalDesc')}</p>
              <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">{t('explore.medicalTracksLabel')}</span>
              <ul className="space-y-3 mb-6">
                {(t('explore.medicalTracks') as string[]).map((track: string, idx: number) => (
                  <li key={idx} className="flex items-center text-stone-800 font-semibold"><ChevronRight className="w-4 h-4 mr-2 text-emerald-600" /> {track}</li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/60 text-sm font-semibold text-emerald-800">
              👉 {t('explore.medicalFocus')}
            </div>
          </Reveal>

          <Reveal delay={200} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-700">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">{t('explore.techTitle')}</h3>
              </div>
              <p className="text-stone-600 mb-6 leading-relaxed">{t('explore.techDesc')}</p>
              <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">{t('explore.techFieldsLabel')}</span>
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-stone-800 font-bold">
                {(t('explore.techFields') as string[]).map((field: string, idx: number) => (
                  <div key={idx} className="bg-stone-50 p-3 rounded-lg">• {field}</div>
                ))}
              </div>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/60 text-sm font-semibold text-amber-800">
              👉 {t('explore.techFocus')}
            </div>
          </Reveal>
        </div>

        <Reveal delay={100} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 flex items-start space-x-4">
            <div className="p-3 bg-stone-100 rounded-xl text-stone-700 shrink-0"><Compass className="w-6 h-6"/></div>
            <div>
              <h3 className="font-bold text-stone-900 text-lg mb-1">{t('explore.volunteerTitle')}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{t('explore.volunteerDesc')}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 flex items-start space-x-4">
            <div className="p-3 bg-stone-100 rounded-xl text-stone-700 shrink-0"><BookOpen className="w-6 h-6"/></div>
            <div>
              <h3 className="font-bold text-stone-900 text-lg mb-1">{t('explore.interculturalTitle')}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{t('explore.interculturalDesc')}</p>
            </div>
          </div>
        </Reveal>
      </section>
      <MainFooter />
    </div>
  );
}
