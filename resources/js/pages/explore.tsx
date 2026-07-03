import React from 'react';
import { Globe, HeartPulse, Cpu, Compass, BookOpen, ChevronRight } from 'lucide-react';
import MainNavbar from '@/components/main-navbar';

export default function ExploreProgramsPage() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/' },
    { label: 'Programs', href: '/explore', active: true },
    { label: 'Why Ghana', href: '/' },
    { label: 'Application', href: '/' },
    { label: 'Contact / FAQ', href: '/' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-emerald-200">

      <MainNavbar
        navLinks={navLinks}
        ctaLabel="Apply Now"
      />

      {/* --- PATHWAY DIRECTORY MAIN SECTION --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2">Curriculum Directory</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">Find your matching program</h1>
          <p className="mt-4 text-stone-600">Our programs combine high-level practical work experience with international learning and intentional personal development.</p>
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
                <h2 className="text-2xl font-bold text-stone-900">Medical Internships</h2>
              </div>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Structured, closely supervised, and fully evaluated practical placements for clinical and healthcare track students inside certified regional hospitals in Ghana.
              </p>
              
              <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">Available Operational Tracks</span>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-stone-800 font-semibold"><ChevronRight className="w-4 h-4 mr-2 text-emerald-600" /> Nursing Internship</li>
                <li className="flex items-center text-stone-800 font-semibold"><ChevronRight className="w-4 h-4 mr-2 text-emerald-600" /> Clinical Rotation / Famulatur</li>
                <li className="flex items-center text-stone-800 font-semibold"><ChevronRight className="w-4 h-4 mr-2 text-emerald-600" /> Final Year Internship / PJ</li>
              </ul>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/60 text-sm font-semibold text-emerald-800">
              👉 Focus Priorities: Recognition, Practice, Exposure to Global Health Dynamics.
            </div>
          </div>

          {/* Technical Programs */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-700">
                  <Cpu className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-stone-900">Technical Internships</h2>
              </div>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Practical placements tailored for university students and technical professionals coming from diverse multi-sector fields.
              </p>
              
              <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">Core Specialty Fields</span>
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-stone-800 font-bold">
                <div className="bg-stone-50 p-3 rounded-lg">• Nursing & Public Health</div>
                <div className="bg-stone-50 p-3 rounded-lg">• Social Work</div>
                <div className="bg-stone-50 p-3 rounded-lg">• Education / Pedagogy</div>
                <div className="bg-stone-50 p-3 rounded-lg">• Business & Admin</div>
              </div>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/60 text-sm font-semibold text-amber-800">
              👉 Focus Priorities: Skills Transfer, Organizational Attachment, Systems Analysis.
            </div>
          </div>

        </div>

        {/* Secondary Auxiliary Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 flex items-start space-x-4">
            <div className="p-3 bg-stone-100 rounded-xl text-stone-700 shrink-0"><Compass className="w-6 h-6"/></div>
            <div>
              <h3 className="font-bold text-stone-900 text-lg mb-1">Volunteer Programs</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Active deployment and personal engagement in specialized localized social development projects with direct insight into local civil structures.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 flex items-start space-x-4">
            <div className="p-3 bg-stone-100 rounded-xl text-stone-700 shrink-0"><BookOpen className="w-6 h-6"/></div>
            <div>
              <h3 className="font-bold text-stone-900 text-lg mb-1">Intercultural Exchange</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Experience, learn, and grow through deliberate community integration, language familiarity, and deep localized mutual perspective building.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-16 bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Ready to find your match?</h3>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto mb-6">Connect directly with a specialist to verify course credits alignment, application windows, and upcoming institutional cohorts.</p>
          <button className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-3.5 rounded-xl transition-all shadow-md">
            Request Consultation Now
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} BRIDGEWAY LLC. Program Framework Ecosystem.</p>
        </div>
      </footer>

    </div>
  );
}
