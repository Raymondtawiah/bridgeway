import './../css/app.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ToastProvider } from '@/components/toast';
import WelcomePage from '@/pages/welcome';

function StaticApp() {
  useEffect(() => {
    const intercept = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;
      if (href.startsWith('#')) {
        e.preventDefault();
        window.location.hash = href;
      }
    };
    document.addEventListener('click', intercept);
    return () => document.removeEventListener('click', intercept);
  }, []);

  return (
    <LanguageProvider initialLocale="en">
      <ToastProvider>
        <WelcomePage />
      </ToastProvider>
    </LanguageProvider>
  );
}

const root = document.getElementById('app');
if (root) {
  ReactDOM.createRoot(root).render(<StaticApp />);
}
