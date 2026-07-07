import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
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

export default function WhyGhanaPage() {
  const { t } = useLanguage();

  const kakumImages = [
    '/kakum1.png',
    '/kakum2.jpg',
    '/kakum3.jpg',
    '/kakum4.jpg',
    '/kakum5.jpg',
    '/kakum6.jpg'
  ];

  const [kakumSlide, setKakumSlide] = useState(0);
  const kakumSlideRef = React.useRef<HTMLDivElement>(null);
  const kakumDragStart = React.useRef({ x: 0, y: 0 });
  const kakumDragging = React.useRef(false);

  const kakumHandleStart = (x: number, y: number) => {
    kakumDragStart.current = { x, y };
    kakumDragging.current = true;
  };

  const kakumHandleMove = (x: number, y: number) => {
    if (!kakumDragging.current || !kakumSlideRef.current) return;
    const dx = x - kakumDragStart.current.x;
    const dy = y - kakumDragStart.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
      if (dx < -30 && kakumSlide < kakumImages.length - 1) setKakumSlide((p) => p + 1);
      if (dx > 30 && kakumSlide > 0) setKakumSlide((p) => p - 1);
      kakumDragging.current = false;
    }
  };

  const kakumHandleEnd = () => {
    kakumDragging.current = false;
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  const openLightbox = (src: string) => setSelectedImage(src);
  const closeLightbox = () => setSelectedImage(null);

  const nkrumahImages = [
    '/Nkrumah1.jpg',
    '/Nkrumah2.jpg',
    '/Nkrumah3.jpg',
    '/Nkrumah4.jpg'
  ];

  const [nkrumahSlide, setNkrumahSlide] = useState(0);
  const nkrumahSlideRef = React.useRef<HTMLDivElement>(null);
  const nkrumahDragStart = React.useRef({ x: 0, y: 0 });
  const nkrumahDragging = React.useRef(false);

  const nkrumahHandleStart = (x: number, y: number) => {
    nkrumahDragStart.current = { x, y };
    nkrumahDragging.current = true;
  };

  const nkrumahHandleMove = (x: number, y: number) => {
    if (!nkrumahDragging.current || !nkrumahSlideRef.current) return;
    const dx = x - nkrumahDragStart.current.x;
    const dy = y - nkrumahDragStart.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
      if (dx < -30 && nkrumahSlide < nkrumahImages.length - 1) setNkrumahSlide((p) => p + 1);
      if (dx > 30 && nkrumahSlide > 0) setNkrumahSlide((p) => p - 1);
      nkrumahDragging.current = false;
    }
  };

  const nkrumahHandleEnd = () => {
    nkrumahDragging.current = false;
  };

  const eliminaImages = [
    '/Elimina1.jpg',
    '/Elimina2.jpg',
    '/Elimina3.jpg',
    '/Elimina4.jpg'
  ];

  const [eliminaSlide, setEliminaSlide] = useState(0);
  const eliminaSlideRef = React.useRef<HTMLDivElement>(null);
  const eliminaDragStart = React.useRef({ x: 0, y: 0 });
  const eliminaDragging = React.useRef(false);

  const eliminaHandleStart = (x: number, y: number) => {
    eliminaDragStart.current = { x, y };
    eliminaDragging.current = true;
  };

  const eliminaHandleMove = (x: number, y: number) => {
    if (!eliminaDragging.current || !eliminaSlideRef.current) return;
    const dx = x - eliminaDragStart.current.x;
    const dy = y - eliminaDragStart.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
      if (dx < -30 && eliminaSlide < eliminaImages.length - 1) setEliminaSlide((p) => p + 1);
      if (dx > 30 && eliminaSlide > 0) setEliminaSlide((p) => p - 1);
      eliminaDragging.current = false;
    }
  };

  const eliminaHandleEnd = () => {
    eliminaDragging.current = false;
  };

  const navLinks = [
    { label: 'Home', href: '/', active: false, i18nKey: 'nav.home' },
    { label: 'About Us', href: '/about', active: false, i18nKey: 'nav.aboutUs' },
    { label: 'Programs', href: '/program', active: false, i18nKey: 'nav.programs' },
    { label: 'Why Ghana', href: '/why-ghana', active: true, i18nKey: 'nav.whyGhana' },
    { label: 'Application', href: '#', i18nKey: 'nav.application' },
    { label: 'Contact / FAQ', href: '/contact', active: false, i18nKey: 'nav.contactFaq' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-emerald-200">
      <MainNavbar
        navLinks={navLinks}
        ctaLabel={t('nav.applyNow')}
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
              {t('whyGhana.kicker')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              {t('whyGhana.headline')}
            </h1>
            <p className="text-lg text-stone-100 max-w-2xl leading-relaxed">
              {t('whyGhana.subhead')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- WHY GHANA / COMPANY OVERVIEW --- */}
      <section id="why-ghana" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-emerald-700 tracking-widest uppercase mb-3">{t('whyGhana.kicker')}</h2>
          <p className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">{t('whyGhana.headline')}</p>
          <p className="mt-4 text-stone-600">{t('whyGhana.subhead')}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8">
          <Reveal className="space-y-6 text-stone-600 leading-relaxed text-base max-w-4xl">
            <p>{t('whyGhana.p1')}</p>
            <p>{t('whyGhana.p2')}</p>
            <p className="bg-stone-100 p-6 rounded-2xl border-l-4 border-emerald-700 text-stone-700 font-medium text-base">
              {t('whyGhana.highlight')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- TOURIST ATTRACTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2">{t('whyGhana.touristKicker')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">{t('whyGhana.touristTitle')}</h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal delay={120} className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>{t('whyGhana.touristText')}</p>
            </Reveal>
            <Reveal className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
              <video
                className="w-full max-h-[28rem] object-cover"
                src="/National_Kakum.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- KAKUM IMAGE GALLERY --- */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="select-none">
            {/* Mobile swipeable carousel */}
            <div className="md:hidden">
              <div
                ref={kakumSlideRef}
                className="relative overflow-hidden touch-pan-y"
                onMouseDown={(e) => kakumHandleStart(e.clientX, e.clientY)}
                onMouseMove={(e) => kakumHandleMove(e.clientX, e.clientY)}
                onMouseUp={kakumHandleEnd}
                onMouseLeave={kakumHandleEnd}
                onTouchStart={(e) => kakumHandleStart(e.touches[0].clientX, e.touches[0].clientY)}
                onTouchMove={(e) => kakumHandleMove(e.touches[0].clientX, e.touches[0].clientY)}
                onTouchEnd={kakumHandleEnd}
              >
                <div
                  className="flex transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${kakumSlide * 100}%)` }}
                >
                  {kakumImages.map((src, idx) => (
                    <div key={idx} className="w-full shrink-0">
                      <div className="group overflow-hidden rounded-2xl border border-stone-200 shadow-sm cursor-pointer" onClick={() => openLightbox(src)}>
                        <img
                          src={src}
                          alt={`Kakum ${idx + 1}`}
                          className="w-full max-h-[28rem] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {kakumImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setKakumSlide(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      kakumSlide === idx ? 'w-6 bg-emerald-600' : 'w-2.5 bg-stone-300'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop 6-column grid */}
            <div className="hidden md:grid grid-cols-4 lg:grid-cols-6 gap-4">
              {kakumImages.map((src, idx) => (
                <div key={idx} className="h-64 rounded-2xl overflow-hidden border border-stone-200 shadow-sm cursor-pointer" onClick={() => openLightbox(src)}>
                  <img
                    src={src}
                    alt={`Kakum ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- HISTORIC LANDMARK --- */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2">{t('whyGhana.tourist2Kicker')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">{t('whyGhana.tourist2Title')}</h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
              <video
                className="w-full h-full object-cover"
                src="/Nkrumah.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </Reveal>
            <Reveal delay={120} className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>{t('whyGhana.tourist2Text')}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- NKRUMAH IMAGE GALLERY --- */}
      <section className="pb-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="select-none">
            {/* Mobile swipeable carousel */}
            <div className="md:hidden">
              <div
                ref={nkrumahSlideRef}
                className="relative overflow-hidden touch-pan-y"
                onMouseDown={(e) => nkrumahHandleStart(e.clientX, e.clientY)}
                onMouseMove={(e) => nkrumahHandleMove(e.clientX, e.clientY)}
                onMouseUp={nkrumahHandleEnd}
                onMouseLeave={nkrumahHandleEnd}
                onTouchStart={(e) => nkrumahHandleStart(e.touches[0].clientX, e.touches[0].clientY)}
                onTouchMove={(e) => nkrumahHandleMove(e.touches[0].clientX, e.touches[0].clientY)}
                onTouchEnd={nkrumahHandleEnd}
              >
                <div
                  className="flex transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${nkrumahSlide * 100}%)` }}
                >
                  {nkrumahImages.map((src, idx) => (
                    <div key={idx} className="w-full shrink-0">
                      <div className="group overflow-hidden rounded-2xl border border-stone-200 shadow-sm cursor-pointer" onClick={() => openLightbox(src)}>
                        <img
                          src={src}
                          alt={`Nkrumah ${idx + 1}`}
                          className="w-full max-h-[28rem] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {nkrumahImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setNkrumahSlide(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      nkrumahSlide === idx ? 'w-6 bg-emerald-600' : 'w-2.5 bg-stone-300'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
              {nkrumahImages.map((src, idx) => (
                <div key={idx} className="h-64 rounded-2xl overflow-hidden border border-stone-200 shadow-sm cursor-pointer" onClick={() => openLightbox(src)}>
                  <img
                    src={src}
                    alt={`Nkrumah ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- ELIMINA --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2">{t('whyGhana.tourist3Kicker')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">{t('whyGhana.tourist3Title')}</h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal delay={120} className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>{t('whyGhana.tourist3Text')}</p>
            </Reveal>
            <Reveal className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
              <video
                className="w-full max-h-[28rem] object-cover"
                src="/Elimina.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- ELIMINA IMAGE GALLERY --- */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="select-none">
            {/* Mobile swipeable carousel */}
            <div className="md:hidden">
              <div
                ref={eliminaSlideRef}
                className="relative overflow-hidden touch-pan-y"
                onMouseDown={(e) => eliminaHandleStart(e.clientX, e.clientY)}
                onMouseMove={(e) => eliminaHandleMove(e.clientX, e.clientY)}
                onMouseUp={eliminaHandleEnd}
                onMouseLeave={eliminaHandleEnd}
                onTouchStart={(e) => eliminaHandleStart(e.touches[0].clientX, e.touches[0].clientY)}
                onTouchMove={(e) => eliminaHandleMove(e.touches[0].clientX, e.touches[0].clientY)}
                onTouchEnd={eliminaHandleEnd}
              >
                <div
                  className="flex transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${eliminaSlide * 100}%)` }}
                >
                  {eliminaImages.map((src, idx) => (
                    <div key={idx} className="w-full shrink-0">
                      <div className="group overflow-hidden rounded-2xl border border-stone-200 shadow-sm cursor-pointer" onClick={() => openLightbox(src)}>
                        <img
                          src={src}
                          alt={`Elmina ${idx + 1}`}
                          className="w-full max-h-[28rem] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-6">
                {eliminaImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setEliminaSlide(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      eliminaSlide === idx ? 'w-6 bg-emerald-600' : 'w-2.5 bg-stone-300'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
              {eliminaImages.map((src, idx) => (
                <div key={idx} className="h-64 rounded-2xl overflow-hidden border border-stone-200 shadow-sm cursor-pointer" onClick={() => openLightbox(src)}>
                  <img
                    src={src}
                    alt={`Elmina ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-5xl w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <MainFooter />
    </div>
  );
}
