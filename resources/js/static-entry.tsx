import './../css/app.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from '@/contexts/LanguageContext';
import WelcomePage from '@/pages/welcome';
import ExploreProgramsPage from '@/pages/explore';

type Page = 'welcome' | 'explore';

function getPageFromHash(): Page {
  const hash = window.location.hash;
  if (hash.includes('explore')) return 'explore';
  return 'welcome';
}

function StaticApp() {
  const [page, setPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const handleHash = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <LanguageProvider initialLocale="en">
      {page === 'welcome' && <WelcomePage />}
      {page === 'explore' && <ExploreProgramsPage />}
    </LanguageProvider>
  );
}

const root = document.getElementById('app');
if (root) {
  ReactDOM.createRoot(root).render(<StaticApp />);
}
