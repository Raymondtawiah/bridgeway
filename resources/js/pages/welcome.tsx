import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle,
  Star
} from 'lucide-react';
import MainNavbar from '@/components/main-navbar';
import MainFooter from '@/components/main-footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

/* ────────────────────────────────────────────────────────────────
   Reveal: fades + slides a section/element up into place the first
   time it enters the viewport. `delay` (ms) lets a group of siblings
   stagger instead of arriving all at once.
   ──────────────────────────────────────────────────────────────── */
type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
};

function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preference: show immediately, no animation.
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

export default function WelcomePage() {
  const { t } = useLanguage();

  // Simple mount-in for the hero, since it's visible on load and never
  // needs a scroll trigger.
  const [heroIn, setHeroIn] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setHeroIn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const [destSlide, setDestSlide] = useState(0);
  const destSlideRef = useRef<HTMLDivElement | null>(null);
  const destDragStart = useRef({ x: 0, y: 0 });
  const destDragging = useRef(false);

  const destHandleStart = (x: number, y: number) => {
    destDragStart.current = { x, y };
    destDragging.current = true;
  };
  const destHandleMove = (x: number, y: number) => {
    if (!destDragging.current || !destSlideRef.current) return;
    const dx = x - destDragStart.current.x;
    const dy = y - destDragStart.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
      if (dx < -30 && destSlide < destinationImages.length - 1) setDestSlide((p) => p + 1);
      if (dx > 30 && destSlide > 0) setDestSlide((p) => p - 1);
      destDragging.current = false;
    }
  };
  const destHandleEnd = () => { destDragging.current = false; };

  const destinationImages = [
    '/kakum1.png',
    '/kakum2.jpg',
    '/kakum3.jpg',
    '/Nkrumah2.jpg',
    '/Nkrumah3.jpg',
    '/Elimina1.jpg',
    '/Elimina2.jpg',
    '/Elimina3.jpg'
  ];

  const [testSlide, setTestSlide] = useState(0);
  const testSlideRef = useRef<HTMLDivElement | null>(null);
  const testDragStart = useRef({ x: 0, y: 0 });
  const testDragging = useRef(false);

  const testHandleStart = (x: number, y: number) => {
    testDragStart.current = { x, y };
    testDragging.current = true;
  };
  const testHandleMove = (x: number, y: number) => {
    if (!testDragging.current || !testSlideRef.current) return;
    const dx = x - testDragStart.current.x;
    const dy = y - testDragStart.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
      if (dx < -30 && testSlide < testimonialsData.length - 1) setTestSlide((p) => p + 1);
      if (dx > 30 && testSlide > 0) setTestSlide((p) => p - 1);
      testDragging.current = false;
    }
  };
  const testHandleEnd = () => { testDragging.current = false; };

  const testimonialsData = Array.isArray((t as any)('testimonials.items'))
    ? (t as any)('testimonials.items')
    : [
        { name: 'Sarah Johnson', role: 'Medical Intern, Germany', text: 'BRIDGEWAY made my medical internship in Ghana seamless. From hospital placement to on-site support, everything was perfectly organized.' },
        { name: 'Michael Chen', role: 'Tech Intern, Canada', text: 'The tech placement exceeded my expectations. Working with local teams while exploring Ghana was a life-changing experience.' },
        { name: 'Aisha Patel', role: 'Cultural Exchange, UK', text: 'I came for a 6-week cultural program and left with lifelong friends and a deeper understanding of global collaboration.' }
      ];

  const objectives = [
    t('objectives.items.0'),
    t('objectives.items.1'),
    t('objectives.items.2'),
    t('objectives.items.3'),
    t('objectives.items.4'),
  ];

  const navLinks = [
    { label: 'Home', href: '/', active: true, i18nKey: 'nav.home' },
    { label: 'About Us', href: '/about', i18nKey: 'nav.aboutUs' },
    { label: 'Programs', href: '/program', i18nKey: 'nav.programs' },
    { label: 'Why Ghana', href: '/why-ghana', i18nKey: 'nav.whyGhana' },
    { label: 'Contact / FAQ', href: '/contact', i18nKey: 'nav.contactFaq' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-emerald-200">

      <MainNavbar
        navLinks={navLinks}
        ctaLabel={t('nav.applyNow') as string}
      />

      {/* --- HERO SECTION --- */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div
            className={`lg:col-span-12 transition-all duration-700 ease-out ${
              heroIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              {t('hero.badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-stone-100 max-w-xl mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex justify-center">
              <Link to="/program" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                {t('hero.ctaApply')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- DESTINATIONS --- */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2">{t('destinations.kicker')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">{t('destinations.title')}</h2>
            <p className="mt-4 text-stone-600">{t('destinations.subtitle')}</p>
          </Reveal>

          {/* Mobile swipeable carousel */}
          <div className="md:hidden select-none">
            <div
              ref={destSlideRef}
              className="relative overflow-hidden touch-pan-y"
              onMouseDown={(e) => destHandleStart(e.clientX, e.clientY)}
              onMouseMove={(e) => destHandleMove(e.clientX, e.clientY)}
              onMouseUp={destHandleEnd}
              onMouseLeave={destHandleEnd}
              onTouchStart={(e) => destHandleStart(e.touches[0].clientX, e.touches[0].clientY)}
              onTouchMove={(e) => destHandleMove(e.touches[0].clientX, e.touches[0].clientY)}
              onTouchEnd={destHandleEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${destSlide * 100}%)` }}
              >
                {destinationImages.map((src, idx) => (
                  <div key={idx} className="w-full shrink-0 px-1">
                    <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm aspect-square">
                      <img
                        src={src}
                        alt={`Ghana destination ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {destinationImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setDestSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    destSlide === idx ? 'w-6 bg-emerald-600' : 'w-2.5 bg-stone-300'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {destinationImages.map((src, idx) => (
              <Reveal key={idx} delay={idx * 80} className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm aspect-square">
                <img
                  src={src}
                  alt={`Ghana destination ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2">{t('stats.kicker')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">{t('stats.title')}</h2>
            <p className="mt-4 text-stone-600">{t('stats.subtitle')}</p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: t('stats.programs'), value: 12, suffix: '+' },
              { label: t('stats.partners'), value: 35, suffix: '+' },
              { label: t('stats.satisfaction'), value: 98, suffix: '%' },
              { label: t('stats.countries'), value: 18, suffix: '+' },
            ].map((stat, idx) => (
              <Reveal key={idx} delay={idx * 100} className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-emerald-700 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm font-semibold text-stone-500 uppercase tracking-wider">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2">{t('testimonials.kicker')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">{t('testimonials.title')}</h2>
            <p className="mt-4 text-stone-600">{t('testimonials.subtitle')}</p>
          </Reveal>

          {/* Mobile swipeable carousel */}
          <div className="md:hidden select-none">
            <div
              ref={testSlideRef}
              className="relative overflow-hidden touch-pan-y"
              onMouseDown={(e) => testHandleStart(e.clientX, e.clientY)}
              onMouseMove={(e) => testHandleMove(e.clientX, e.clientY)}
              onMouseUp={testHandleEnd}
              onMouseLeave={testHandleEnd}
              onTouchStart={(e) => testHandleStart(e.touches[0].clientX, e.touches[0].clientY)}
              onTouchMove={(e) => testHandleMove(e.touches[0].clientX, e.touches[0].clientY)}
              onTouchEnd={testHandleEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${testSlide * 100}%)` }}
              >
                {testimonialsData.map((item: { name: string; role: string; text: string; initials?: string }, idx: number) => {
                  const initials = (item as any).initials || item.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase();
                  const avatarColors = ['bg-emerald-600', 'bg-blue-600', 'bg-amber-600'];
                  const avatarColor = avatarColors[idx % avatarColors.length];
                  return (
                    <div key={idx} className="w-full shrink-0 px-1">
                      <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200 shadow-sm flex flex-col h-full">
                        <div className="flex gap-1 text-amber-500 mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <p className="text-stone-700 leading-relaxed mb-6 flex-1">"{item.text}"</p>
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-white font-bold text-sm`}>
                            {initials}
                          </div>
                          <div>
                            <div className="font-bold text-stone-900 text-sm">{item.name}</div>
                            <div className="text-xs text-stone-500">{item.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonialsData.map((_: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setTestSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    testSlide === idx ? 'w-6 bg-emerald-600' : 'w-2.5 bg-stone-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((item: { name: string; role: string; text: string; initials?: string }, idx: number) => {
              const initials = (item as any).initials || item.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase();
              const avatarColors = ['bg-emerald-600', 'bg-blue-600', 'bg-amber-600'];
              const avatarColor = avatarColors[idx % avatarColors.length];
              return (
                <Reveal key={idx} delay={idx * 120} className="bg-stone-50 p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col">
                  <div className="flex gap-1 text-amber-500 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-700 leading-relaxed mb-6 flex-1">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-white font-bold text-sm`}>
                      {initials}
                    </div>
                    <div>
                      <div className="font-bold text-stone-900 text-sm">{item.name}</div>
                      <div className="text-xs text-stone-500">{item.role}</div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  );
}


