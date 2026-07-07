import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/toast';
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
  const ref = useRef<HTMLElement | null>(null);
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

export default function ContactPage() {
  const { t } = useLanguage();

  const navLinks = [
    { label: 'Home', href: '/', active: false, i18nKey: 'nav.home' },
    { label: 'About Us', href: '/about', active: false, i18nKey: 'nav.aboutUs' },
    { label: 'Programs', href: '/program', active: false, i18nKey: 'nav.programs' },
    { label: 'Why Ghana', href: '/why-ghana', i18nKey: 'nav.whyGhana' },
    { label: 'Application', href: '#', i18nKey: 'nav.application' },
    { label: 'Contact / FAQ', href: '/contact', active: true, i18nKey: 'nav.contactFaq' },
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
              {t('contact.kicker')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-stone-100 max-w-2xl leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2">{t('contact.faqKicker')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">{t('contact.faqTitle')}</h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal className="space-y-6">
              {t('contact.faqItems').map((item: { question: string; answer: string }, idx: number) => (
                <div key={idx} className="bg-stone-50 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.question}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={120} className="rounded-3xl overflow-hidden border border-stone-200 shadow-sm">
              <img src="/faqs.jpg" alt="FAQ" className="w-full h-full object-cover" />
            </Reveal>
          </div>
        </div>
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
    <>
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

    <div className="mt-10 flex items-center justify-center gap-6">
      <a href="#" aria-label="X" className="inline-flex items-center justify-center rounded-full bg-stone-100 p-2 text-stone-500 hover:bg-stone-200 transition-all hover:scale-90">
        <img src="/x_icon.webp" alt="X" className="w-6 h-6 object-contain" />
      </a>
      <a href="#" aria-label="Instagram" className="inline-flex items-center justify-center rounded-full bg-stone-100 p-2 text-stone-500 hover:bg-stone-200 transition-all hover:scale-90">
        <img src="/instagram.jpg" alt="Instagram" className="w-6 h-6 object-contain" />
      </a>
      <a href="#" aria-label="Facebook" className="inline-flex items-center justify-center rounded-full bg-stone-100 p-2 text-stone-500 hover:bg-stone-200 transition-all hover:scale-90">
        <img src="/facebook.webp" alt="Facebook" className="w-6 h-6 object-contain" />
      </a>
      <a href="#" aria-label="TikTok" className="inline-flex items-center justify-center rounded-full bg-stone-100 p-2 text-stone-500 hover:bg-stone-200 transition-all hover:scale-90">
        <img src="/tiktok.png" alt="TikTok" className="w-6 h-6 object-contain" />
      </a>
    </div>
    </>
  );
}
