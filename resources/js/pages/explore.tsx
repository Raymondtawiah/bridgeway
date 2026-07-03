import React from 'react';
import { Globe, HeartPulse, Cpu, Compass, BookOpen, ChevronRight } from 'lucide-react';
import MainNavbar from '@/components/main-navbar';
import MainFooter from '@/components/main-footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ExploreProgramsPage() {
  const { t } = useLanguage();

  const navLinks = [
    { label: 'Home', href: '#/', i18nKey: 'nav.home' },
    { label: 'About Us', href: '#about', i18nKey: 'nav.aboutUs' },
    { label: 'Programs', href: '#explore', active: true, i18nKey: 'nav.programs' },
    { label: 'Why Ghana', href: '#why-ghana', i18nKey: 'nav.whyGhana' },
    { label: 'Application', href: '#revenue', i18nKey: 'nav.application' },
    { label: 'Contact / FAQ', href: '#services', i18nKey: 'nav.contactFaq' },
  ];

  const medicalTracks = t('explore.medicalTracks') as string[];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-emerald-200">

      <MainNavbar
        navLinks={navLinks}
        ctaLabel={t('nav.applyNow')}
      />

      {/* --- PATHWAY DIRECTORY MAIN SECTION --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2">{t('explore.kicker')}</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">{t('explore.title')}</h1>
          <p className="mt-4 text-stone-600">{t('explore.subtitle')}</p>
        </div>

        {/* Major Sectors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Medical Programs */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-stone-900">{t('explore.medicalTitle')}</h2>
              </div>
              <p className="text-stone-600 mb-6 leading-relaxed">
                {t('explore.medicalDesc')}
              </p>
              
              <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">{t('explore.medicalTracksLabel')}</span>
              <ul className="space-y-3 mb-6">
                {medicalTracks.map((track, idx) => (
                  <li key={idx} className="flex items-center text-stone-800 font-semibold"><ChevronRight className="w-4 h-4 mr-2 text-emerald-600" /> {track}</li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/60 text-sm font-semibold text-emerald-800">
              👉 {t('explore.medicalFocus')}
            </div>
          </div>

          {/* Technical Programs */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-700">
                  <Cpu className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-stone-900">{t('explore.techTitle')}</h2>
              </div>
              <p className="text-stone-600 mb-6 leading-relaxed">
                {t('explore.techDesc')}
              </p>
              
              <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">{t('explore.techFieldsLabel')}</span>
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-stone-800 font-bold">
                {t('explore.techFields').map((field: string, idx: number) => (
                  <div key={idx} className="bg-stone-50 p-3 rounded-lg">• {field}</div>
                ))}
              </div>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/60 text-sm font-semibold text-amber-800">
              👉 {t('explore.techFocus')}
            </div>
          </div>

        </div>

        {/* Secondary Auxiliary Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-16 bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold mb-4">{t('explore.ctaTitle')}</h3>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto mb-6">{t('explore.ctaText')}</p>
          <button className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-3.5 rounded-xl transition-all shadow-md">
            {t('explore.ctaButton')}
          </button>
        </div>
      </section>

      <MainFooter />

    </div>
  );
}
