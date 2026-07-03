import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

type NavLink = {
  label: string;
  href: string;
  active?: boolean;
};

type Props = {
  navLinks: NavLink[];
  ctaLabel?: string;
  onCtaClick?: () => void;
};

export default function MainNavbar({ navLinks, ctaLabel, onCtaClick }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe className="w-8 h-8 text-emerald-700" />
          <span className="text-2xl font-black tracking-wider text-stone-900">
            BRIDGEWAY<span className="text-amber-600">LLC</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-1 font-semibold text-sm uppercase tracking-wider">
          {navLinks.map((link) => (
            <NavLinkItem key={link.label} link={link} />
          ))}
        </nav>

        {ctaLabel && (
          <div className="hidden md:block">
            <button
              onClick={onCtaClick}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm shadow-md transition-all"
            >
              {ctaLabel}
            </button>
          </div>
        )}

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-stone-600 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 flex flex-col space-y-3 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`py-2 border-b border-stone-100 ${
                link.active ? 'text-emerald-700 font-bold' : 'text-stone-700'
              }`}
            >
              {link.label}
            </a>
          ))}
          {ctaLabel && (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onCtaClick?.();
              }}
              className="w-full bg-emerald-700 text-white py-2.5 rounded-full font-semibold"
            >
              {ctaLabel}
            </button>
          )}
        </div>
      )}
    </header>
  );
}

function NavLinkItem({ link }: { link: NavLink }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link.href}
      className={`relative px-3 py-2 transition-colors ${
        link.active ? 'text-emerald-700' : 'text-stone-600 hover:text-stone-900'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{link.label}</span>
      <span
        className="absolute bottom-0 left-0 h-0.5 bg-emerald-700 transition-all duration-300 ease-out"
        style={{
          width: isHovered || link.active ? '100%' : '0%',
        }}
      />
    </a>
  );
}
