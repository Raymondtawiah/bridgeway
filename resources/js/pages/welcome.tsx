import React, { useState } from 'react';
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
  CheckCircle
} from 'lucide-react';
import MainNavbar from '@/components/main-navbar';
import MainFooter from '@/components/main-footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WelcomePage() {
  const { t } = useLanguage();

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
    { label: 'Home', href: '#/', active: true, i18nKey: 'nav.home' },
    { label: 'About Us', href: '#about', i18nKey: 'nav.aboutUs' },
    { label: 'Programs', href: '#explore', i18nKey: 'nav.programs' },
    { label: 'Why Ghana', href: '#why-ghana', i18nKey: 'nav.whyGhana' },
    { label: 'Application', href: '#revenue', i18nKey: 'nav.application' },
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
      <section className="bg-gradient-to-br from-emerald-900 via-stone-900 to-amber-950 text-white py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              {t('hero.badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-stone-300 max-w-xl mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg">
                {t('hero.ctaApply')}
              </button>
              <a href="#explore" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all">
                {t('hero.ctaDiscover')}
              </a>
            </div>
          </div>

          {/* Side Context Widget */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
            <span className="text-xs uppercase tracking-widest font-mono text-amber-400 block mb-4">// {t('heroWidget.conceptLabel')}</span>
            <p className="text-stone-300 text-base leading-relaxed mb-6">
              {t('heroWidget.conceptText')}
            </p>
            <div className="border-t border-white/10 pt-4 space-y-3">
              <div className="flex justify-between text-xs text-stone-400"><span>{t('heroWidget.ecoTarget')}</span><span className="text-white font-semibold">{t('heroWidget.ecoValue')}</span></div>
              <div className="flex justify-between text-xs text-stone-400"><span>{t('heroWidget.focusPrimary')}</span><span className="text-white font-semibold">{t('heroWidget.focusValue')}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT US / BUSINESS CONCEPT --- */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-bold text-emerald-700 tracking-widest uppercase mb-3">{t('about.kicker')}</h2>
            <p className="text-3xl font-bold text-stone-900 tracking-tight mb-6">
              {t('about.headline')}
            </p>
            <div className="h-1 w-20 bg-amber-500 rounded"></div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-stone-600 leading-relaxed text-lg">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>
        </div>
      </section>

      <hr className="border-stone-200 max-w-7xl mx-auto" />

      {/* --- WHY GHANA / COMPANY OVERVIEW --- */}
      <section id="why-ghana" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-emerald-700 tracking-widest uppercase mb-3">{t('whyGhana.kicker')}</h2>
          <p className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">{t('whyGhana.headline')}</p>
          <p className="mt-4 text-stone-600">{t('whyGhana.subhead')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 text-stone-600 leading-relaxed text-base">
            <p>{t('whyGhana.p1')}</p>
            <p>{t('whyGhana.p2')}</p>
            <p className="bg-stone-100 p-6 rounded-2xl border-l-4 border-emerald-700 text-stone-700 font-medium text-base">
              {t('whyGhana.highlight')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-900 mb-4">{t('whyGhana.revenueTitle')}</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              {t('whyGhana.revenueIntro')}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-700">
              {t('whyGhana.revenueItems').map((item: string, i: number) => (
                <li key={i} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-stone-200 max-w-7xl mx-auto" />

      {/* --- VISION & MISSION --- */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-stone-200/60">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">👁️‍🗨️</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">{t('visionMission.visionTitle')}</h3>
            <p className="text-stone-600 leading-relaxed">
              {t('visionMission.visionText')}
            </p>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-stone-200/60">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">{t('visionMission.missionTitle')}</h3>
            <p className="text-stone-600 leading-relaxed">
              {t('visionMission.missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE OBJECTIVES --- */}
      <section id="objectives" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase mb-3 block">{t('objectives.sectionKicker')}</span>
            <h3 className="text-3xl font-bold tracking-tight text-stone-900 mb-4">{t('objectives.sectionTitle')}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {t('objectives.sectionIntro')}
            </p>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {objectives.map((objective, idx) => (
              <div key={idx} className="flex items-start bg-stone-50 border border-stone-200 p-5 rounded-2xl">
                <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mr-4 mt-0.5" />
                <p className="text-stone-800 font-medium text-base sm:text-lg">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUCTS AND SERVICES --- */}
      <section id="services" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-emerald-700 tracking-widest uppercase mb-3">{t('services.kicker')}</h2>
            <p className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              {t('services.title')}
            </p>
            <p className="mt-4 text-stone-600">{t('services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-stone-200/50 transition-all group">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-700 group-hover:text-white transition-all">
                  {React.cloneElement(service.icon, { className: "w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" })}
                </div>
                <h4 className="text-lg font-bold text-stone-900 mb-2">{service.title}</h4>
                <p className="text-sm text-stone-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US / PERSPECTIVE ADVANTAGE --- */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-3">{t('cta.beforeTitle')}</h2>
          <p className="text-2xl sm:text-3xl font-bold mb-6 text-white">{t('cta.heading')}</p>
          <p className="text-stone-400 max-w-3xl mx-auto mb-10 leading-relaxed text-base sm:text-lg">
            {t('cta.text')}
          </p>
          <a href="#explore" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5">
            {t('cta.button')} <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      <MainFooter />

    </div>
  );
}
