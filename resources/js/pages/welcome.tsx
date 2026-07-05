import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Award,
  Building,
  UserCheck,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  HeartPulse,
  Sprout,
  Trophy,
  Compass,
  Cpu,
  Briefcase,
  CheckCircle,
  Mail
} from 'lucide-react';
import MainNavbar from '@/components/main-navbar';
import MainFooter from '@/components/main-footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from '@inertiajs/react';
import { useToast } from '@/components/toast';

/* ────────────────────────────────────────────────────────────────
   Reveal: fades + slides a section/element up into place the first
   time it enters the viewport. `delay` (ms) lets a group of siblings
   stagger instead of arriving all at once.
   ──────────────────────────────────────────────────────────────── */
type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
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

  const [marqueePaused, setMarqueePaused] = useState(false);

  const objectives = [
    t('objectives.items.0'),
    t('objectives.items.1'),
    t('objectives.items.2'),
    t('objectives.items.3'),
    t('objectives.items.4'),
  ];

  const services = [
    { title: t('services.items.0.title'), icon: <BookOpen className="w-6 h-6 text-emerald-600" />, desc: t('services.items.0.desc') },
    { title: t('services.items.1.title'), icon: <HeartPulse className="w-6 h-6 text-emerald-600" />, desc: t('services.items.1.desc') },
    { title: t('services.items.2.title'), icon: <Sprout className="w-6 h-6 text-emerald-600" />, desc: t('services.items.2.desc') },
    { title: t('services.items.3.title'), icon: <Trophy className="w-6 h-6 text-emerald-600" />, desc: t('services.items.3.desc') },
    { title: t('services.items.4.title'), icon: <Compass className="w-6 h-6 text-emerald-600" />, desc: t('services.items.4.desc') },
    { title: t('services.items.5.title'), icon: <Cpu className="w-6 h-6 text-emerald-600" />, desc: t('services.items.5.desc') },
    { title: t('services.items.6.title'), icon: <Briefcase className="w-6 h-6 text-emerald-600" />, desc: t('services.items.6.desc') }
  ];

  const navLinks = [
    { label: 'Home', href: '/', active: true, i18nKey: 'nav.home' },
    { label: 'About Us', href: '#about', i18nKey: 'nav.aboutUs' },
    { label: 'Programs', href: '/explore', i18nKey: 'nav.programs' },
    { label: 'Why Ghana', href: '#why-ghana', i18nKey: 'nav.whyGhana' },
    { label: 'Application', href: '#', i18nKey: 'nav.application' },
    { label: 'Contact / FAQ', href: '#services', i18nKey: 'nav.contactFaq' },
  ];

  const whyChooseItems = [
    { title: t('whyChoose.items.0.title'), desc: t('whyChoose.items.0.desc'), icon: <Award className="w-6 h-6 text-emerald-700" /> },
    { title: t('whyChoose.items.1.title'), desc: t('whyChoose.items.1.desc'), icon: <Building className="w-6 h-6 text-emerald-700" /> },
    { title: t('whyChoose.items.2.title'), desc: t('whyChoose.items.2.desc'), icon: <UserCheck className="w-6 h-6 text-emerald-700" /> },
    { title: t('whyChoose.items.3.title'), desc: t('whyChoose.items.3.desc'), icon: <ShieldCheck className="w-6 h-6 text-emerald-700" /> }
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/explore" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                {t('hero.ctaApply')}
              </Link>
              <Link href="/explore" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5">
                {t('hero.ctaDiscover')}
              </Link>
            </div>
          </div>
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
            {objectives.map((objective, idx) => (
              <Reveal
                key={idx}
                delay={idx * 90}
                className="flex items-start bg-stone-50 border border-stone-200 p-5 rounded-2xl"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mr-4 mt-0.5" />
                <p className="text-stone-800 font-medium text-base sm:text-lg">{objective}</p>
              </Reveal>
            ))}
          </div>
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

          {/* Marquee on mobile, grid on md+ */}
          <div className="md:hidden overflow-hidden -mx-4">
            <div
              className={`marquee-track ${marqueePaused ? 'paused' : ''}`}
              onClick={() => setMarqueePaused((p) => !p)}
            >
              {[...services, ...services].map((service, idx) => (
                <div
                  key={idx}
                  className="w-[80vw] shrink-0 mx-3 bg-white p-6 rounded-2xl border border-stone-200"
                >
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-5">
                    {React.cloneElement(service.icon, { className: "w-6 h-6 text-emerald-700" })}
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">{service.desc}</p>
                </div>
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

      {/* --- WHY CHOOSE US / PERSPECTIVE ADVANTAGE --- */}
      <section className="bg-stone-900 text-white py-20">
        <Reveal className="max-w-5xl mx-auto px-4 text-center" as="div">
          <h2 className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-3">{t('cta.beforeTitle')}</h2>
          <p className="text-2xl sm:text-3xl font-bold mb-6 text-white">{t('cta.heading')}</p>
          <p className="text-stone-400 max-w-3xl mx-auto mb-10 leading-relaxed text-base sm:text-lg">
            {t('cta.text')}
          </p>
          <Link href="/explore" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5">
            {t('cta.button')} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Reveal>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="relative py-24 bg-stone-50 overflow-hidden">
        <style>{`
          @keyframes dotDrift {
            0% { background-position: 0 0; }
            100% { background-position: 24px 24px; }
          }
        `}</style>
        <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #0f766e 1px, transparent 1px)', backgroundSize: '24px 24px', animation: 'dotDrift 6s linear infinite'}} />
        <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2">{t('contact.kicker')}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">{t('contact.title')}</h2>
            <p className="mt-4 text-stone-600">{t('contact.subtitle')}</p>
          </div>

          <ContactForm />
        </Reveal>
      </section>

      <MainFooter />

    </div>
  );
}

function ContactForm() {
  const { t } = useLanguage();
  const { success } = useToast();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      success(t('contact.successMessage'), { title: t('contact.successTitle') });
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  const field =
    'w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/40 outline-none transition';

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="space-y-1">
          <span className="text-xs font-semibold text-stone-600">{t('contact.name')}</span>
          <input required className={field} placeholder={t('contact.name')} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} disabled={loading} />
        </label>
        <label className="space-y-1">
          <span className="text-xs font-semibold text-stone-600">{t('contact.email')}</span>
          <input required type="email" className={field} placeholder={t('contact.email')} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} disabled={loading} />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="space-y-1">
          <span className="text-xs font-semibold text-stone-600">{t('contact.phone')}</span>
          <input className={field} placeholder={t('contact.phone')} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} disabled={loading} />
        </label>
        <label className="space-y-1">
          <span className="text-xs font-semibold text-stone-600">{t('contact.subject')}</span>
          <input required className={field} placeholder={t('contact.subject')} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} disabled={loading} />
        </label>
      </div>

      <label className="space-y-1">
        <span className="text-xs font-semibold text-stone-600">{t('contact.message')}</span>
        <textarea required rows={5} className={field} placeholder={t('contact.message')} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} disabled={loading} />
      </label>

      <button type="submit" className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all" disabled={loading}>
        {t('contact.send')}
      </button>
    </form>
  );
}

