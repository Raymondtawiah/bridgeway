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

export default function WelcomePage() {
  const objectives = [
    "Facilitate international exchange programs across multiple sectors.",
    "Promote Ghana as a preferred destination for educational and professional exchanges.",
    "Generate sustainable revenue through premium exchange services.",
    "Foster international partnerships and collaborations.",
    "Support local institutions through global exposure and knowledge transfer."
  ];

  const services = [
    { title: "Educational Exchange Programs", icon: <BookOpen className="w-6 h-6 text-emerald-600" />, desc: "Connecting students and academic institutions for global learning and academic credit transfer." },
    { title: "Healthcare Exchange Programs", icon: <HeartPulse className="w-6 h-6 text-emerald-600" />, desc: "Medical placements, clinical rotations, and knowledge transfer in certified regional hospitals." },
    { title: "Agricultural Exchange Programs", icon: <Sprout className="w-6 h-6 text-emerald-600" />, desc: "Sustainable farming practices, agribusiness collaboration, and rural development initiatives." },
    { title: "Sports Exchange Programs", icon: <Trophy className="w-6 h-6 text-emerald-600" />, desc: "Athletic development, scouting, cross-cultural tournaments, and sports management exchanges." },
    { title: "Tourism and Cultural Exchange", icon: <Compass className="w-6 h-6 text-emerald-600" />, desc: "Curated cultural immersion, heritage tours, and authentic local experiences across Ghana." },
    { title: "Information Technology Exchange", icon: <Cpu className="w-6 h-6 text-emerald-600" />, desc: "Tech ecosystem collaboration, coding bootcamps, digital innovation, and software development placements." },
    { title: "Corporate and Professional Exchange", icon: <Briefcase className="w-6 h-6 text-emerald-600" />, desc: "Professional attachments, internships, executive networking, and corporate partnership programs." }
  ];

  const navLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'About Us', href: '#about' },
    { label: 'Programs', href: '/explore' },
    { label: 'Why Ghana', href: '#why-ghana' },
    { label: 'Application', href: '#revenue' },
    { label: 'Contact / FAQ', href: '#services' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-emerald-200">
      
      <MainNavbar
        navLinks={navLinks}
        ctaLabel="Apply Now"
      />

      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-br from-emerald-900 via-stone-900 to-amber-950 text-white py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Bridgeway International Exchange Hub
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              International internships & exchange programs in Ghana
            </h1>
            <p className="text-lg text-stone-300 max-w-xl mb-8 leading-relaxed">
              Certified medical, technical, and social internships with dynamic personal support on the ground in Ghana. Connect professional development with safe, global work frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg">
                Apply now
              </button>
              <a href="/explore" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all">
                Discover programs
              </a>
            </div>
          </div>

          {/* Side Context Widget */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
            <span className="text-xs uppercase tracking-widest font-mono text-amber-400 block mb-4">// Business Concept</span>
            <p className="text-stone-300 text-base leading-relaxed mb-6">
              BRIDGEWAY LLC is a dedicated international exchange and cultural immersion company connecting individuals, institutions, and professionals with curated development options across Ghana.
            </p>
            <div className="border-t border-white/10 pt-4 space-y-3">
              <div className="flex justify-between text-xs text-stone-400"><span>Ecosystem Target:</span><span className="text-white font-semibold">Accra, Ghana Hub</span></div>
              <div className="flex justify-between text-xs text-stone-400"><span>Primary Focus:</span><span className="text-white font-semibold">Skills Transfer & Growth</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT US / BUSINESS CONCEPT --- */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-bold text-emerald-700 tracking-widest uppercase mb-3">About Us</h2>
            <p className="text-3xl font-bold text-stone-900 tracking-tight mb-6">
              BRIDGEWAY LLC
            </p>
            <div className="h-1 w-20 bg-amber-500 rounded"></div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-stone-600 leading-relaxed text-lg">
            <p>
              BRIDGEWAY LLC is a profit-oriented international exchange and cultural immersion company dedicated to connecting individuals, institutions, organizations, and professionals from around the world with meaningful exchange opportunities in Ghana.
            </p>
            <p>
              Through carefully designed programs in education, healthcare, sports, agriculture, tourism, information technology, entrepreneurship, and community development, XCHANGERS creates transformative experiences that foster global collaboration, cultural understanding, skills transfer, and economic growth.
            </p>
            <p>
              The company serves as a bridge between Ghana and the international community by facilitating internships, volunteer placements, student exchanges, professional attachments, cultural immersion programs, study tours, and specialized industry exchange programs.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-stone-200 max-w-7xl mx-auto" />

      {/* --- WHY GHANA / COMPANY OVERVIEW --- */}
      <section id="why-ghana" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-emerald-700 tracking-widest uppercase mb-3">Why Ghana</h2>
          <p className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">Company Overview</p>
          <p className="mt-4 text-stone-600">A vibrant hub for international exchange and professional growth.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 text-stone-600 leading-relaxed text-base">
            <p>
              The world is increasingly interconnected, creating a growing demand for international experiences, cultural exchange, professional exposure, and global networking opportunities.
            </p>
            <p>
              Ghana, known for its <strong>political stability, rich cultural heritage, hospitable people, educational institutions, growing technology ecosystem, and thriving agricultural sector</strong>, presents a unique destination for exchange programs.
            </p>
            <p className="bg-stone-100 p-6 rounded-2xl border-l-4 border-emerald-700 text-stone-700 font-medium text-base">
              BRIDGEWAY LLC seeks to capitalize on this opportunity by positioning itself as a one-stop international exchange hub that provides comprehensive exchange experiences for individuals and organizations worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-900 mb-4">Revenue Model</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              BRIDGEWAY LLC will operate through a service-based model generating income from:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-700">
              {[
                "Program participation fees",
                "Placement and coordination fees",
                "Accommodation arrangements",
                "Airport pickup and transportation",
                "Visa assistance services",
                "Tour and excursion packages",
                "Institutional partnership agreements",
                "Corporate sponsorships",
                "Consultancy services",
                "Cultural immersion programs"
              ].map((item, i) => (
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
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Our Vision</h3>
            <p className="text-stone-600 leading-relaxed">
              To become Africa's leading international exchange and cultural immersion organization, connecting people, ideas, and opportunities across borders for sustainable development and global impact.
            </p>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-stone-200/60">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Our Mission</h3>
            <p className="text-stone-600 leading-relaxed">
              To provide high-quality, safe, and impactful exchange experiences that promote cultural understanding, professional development, innovation, and international collaboration while contributing to Ghana's socio-economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE OBJECTIVES --- */}
      <section id="objectives" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase mb-3 block">Strategic Framework</span>
            <h3 className="text-3xl font-bold tracking-tight text-stone-900 mb-4">Our Core Objectives</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Concrete milestones focused on quality assurance, structural value alignment, and strategic partnerships.
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
            <h2 className="text-xs font-bold text-emerald-700 tracking-widest uppercase mb-3">Products and Services</h2>
            <p className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Specialized Industry Exchange Programs
            </p>
            <p className="mt-4 text-stone-600">Tailored, multi-sector paths mapped out for professionals, students, and organizations worldwide.</p>
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

      {/* --- PERSPECTIVE ADVANTAGE SECTION --- */}
      <section className="bg-stone-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-3">Why Choose Us</h2>
          <p className="text-2xl sm:text-3xl font-bold mb-6 text-white">Connecting local knowledge with international practice</p>
          <p className="text-stone-400 max-w-3xl mx-auto mb-10 leading-relaxed text-base sm:text-lg">
            Bridgeway LLC connects professional development with real international work experience in a structured and safe framework. Every single pathway integrates practical professional learning with profound intercultural exposure.
          </p>
          <a href="/explore" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5">
            Explore Programs <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} BRIDGEWAY LLC. All rights reserved. Connecting World Exchange Ecosystems.</p>
        </div>
      </footer>

    </div>
  );
}
