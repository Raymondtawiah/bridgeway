import './../css/app.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ToastProvider } from '@/components/toast';
import WelcomePage from '@/pages/welcome';
import ExploreProgramsPage from '@/pages/explore';

type Page = 'welcome' | 'explore';

function getPageFromHash(): Page {
  if (typeof window === 'undefined') return 'welcome';
  const raw = window.location.hash.replace(/^#/, '');
  const normalized = raw.replace(/^\//, '');
  const first = normalized.split('/')[0].split('?')[0];
  if (first === 'explore') return 'explore';
  return 'welcome';
}

function StaticApp() {
  const [page, setPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const handleHash = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

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
        {page === 'welcome' && <WelcomePage />}
        {page === 'explore' && <ExploreProgramsPage />}
      </ToastProvider>
    </LanguageProvider>
  );
}

const root = document.getElementById('app');
if (root) {
  ReactDOM.createRoot(root).render(<StaticApp />);
}
