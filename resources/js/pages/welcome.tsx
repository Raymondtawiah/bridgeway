import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle,
  Star
} from 'lucide-react';
import MainNavbar from '@/components/main-navbar';
import MainFooter from '@/components/main-footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from '@inertiajs/react';

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

type BarData = {
  label: string;
  rate: number;
  color?: string;
};

const BAR_COLORS = [
  '#059669',
  '#2563eb',
  '#d97706',
  '#7c3aed',
  '#db2777',
  '#0891b2'
];

function BarChart({ data }: { data: BarData[] }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [cols, setCols] = React.useState(3);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    const currentCols = width < 500 ? 2 : 3;
    const rows = Math.ceil(data.length / currentCols);
    const cellWidth = width / currentCols;
    const cellHeight = height / rows;
    const radius = Math.min(cellWidth, cellHeight) * 0.32;
    const strokeWidth = Math.max(10, radius * 0.28);

    data.forEach((item, idx) => {
      const col = idx % currentCols;
      const row = Math.floor(idx / currentCols);
      const cx = cellWidth * col + cellWidth / 2;
      const cy = cellHeight * row + cellHeight / 2;
      const color = item.color || BAR_COLORS[idx % BAR_COLORS.length];
      const rate = Math.min(Math.max(item.rate, 0), 100);
      const angle = (rate / 100) * Math.PI * 2;

      ctx.beginPath();
      ctx.arc(cx, cy - 8, radius, 0, Math.PI * 2);
      ctx.strokeStyle = '#e7e5e4';
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = 'round';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy - 8, radius, -Math.PI / 2, -Math.PI / 2 + angle);
      ctx.strokeStyle = color;
      ctx.globalAlpha = hoveredIndex === idx ? 1 : 0.85;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = 'round';
      ctx.stroke();
      ctx.globalAlpha = 1;

      ctx.fillStyle = hoveredIndex === idx ? color : '#1c1917';
      ctx.font = `bold ${radius * 0.6}px system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${item.rate}%`, cx, cy - 8);

      ctx.fillStyle = '#78716c';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.textBaseline = 'alphabetic';
      const words = item.label.split(' ');
      const line1 = words.slice(0, 2).join(' ');
      const line2 = words.slice(2).join(' ');
      ctx.fillText(line1, cx, cy + radius + 12);
      if (line2) {
        ctx.fillText(line2, cx, cy + radius + 26);
      }
    });
  }, [data, hoveredIndex, cols]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCols = () => {
      const rect = canvas.getBoundingClientRect();
      setCols(rect.width < 500 ? 2 : 3);
    };

    updateCols();

    const observer = new ResizeObserver(() => updateCols());
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full" style={{ height: '420px' }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        onMouseMove={(e) => {
          const canvas = canvasRef.current;
          if (!canvas) return;
          const rect = canvas.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const currentCols = rect.width < 500 ? 2 : 3;
          const cellWidth = rect.width / currentCols;
          const cellHeight = rect.height / Math.ceil(data.length / currentCols);
          const col = Math.floor(x / cellWidth);
          const row = Math.floor(y / cellHeight);
          const idx = row * currentCols + col;
          if (idx >= 0 && idx < data.length) {
            setHoveredIndex(idx);
          } else {
            setHoveredIndex(null);
          }
        }}
        onMouseLeave={() => setHoveredIndex(null)}
      />
    </div>
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

  const [barsVisible, setBarsVisible] = useState(false);
  const barsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBarsVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
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

  const testimonialsData = t('testimonials.items');

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
        ctaLabel={t('nav.applyNow')}
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
              <Link href="/program" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
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

          {/* --- CANVAS BAR CHART --- */}
          <Reveal className="mt-20 bg-stone-50 rounded-3xl border border-stone-200 p-6 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2 text-center">{t('stats.chartTitle')}</h3>
            <p className="text-sm text-stone-500 mb-8 text-center">{t('stats.rate')}</p>
            <BarChart data={[
              { label: t('stats.medical'), rate: 94, color: '#059669' },
              { label: t('stats.technical'), rate: 91, color: '#2563eb' },
              { label: t('stats.cultural'), rate: 97, color: '#d97706' },
              { label: t('stats.agricultural'), rate: 88, color: '#7c3aed' },
              { label: t('stats.education'), rate: 95, color: '#db2777' },
              { label: t('stats.volunteer'), rate: 92, color: '#0891b2' }
            ]} />
          </Reveal>
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


