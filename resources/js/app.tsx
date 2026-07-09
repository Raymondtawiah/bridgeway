import './../css/app.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ToastProvider } from '@/components/toast';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';
import WelcomePage from '@/pages/welcome';
import AboutPage from '@/pages/about';
import ProgramPage from '@/pages/program';
import ContactPage from '@/pages/contact';
import WhyGhanaPage from '@/pages/why-ghana';
import { Routes, Route } from 'react-router-dom';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

function PageLayout({ children, layout }: { children: React.ReactNode; layout: string }) {
  switch (layout) {
    case 'welcome':
    case 'about':
    case 'program':
    case 'contact':
    case 'why-ghana':
      return <>{children}</>;
    case 'auth':
      return <AuthLayout>{children}</AuthLayout>;
    case 'settings':
      return <AppLayout>{children}</AppLayout>;
    default:
      return <AppLayout>{children}</AppLayout>;
  }
}

const container = document.getElementById('app');
if (container) {
  const existing = (container as any).__reactRoot;
  const root = existing || ((container as any).__reactRoot = createRoot(container));
  root.render(
    <LanguageProvider>
      <ToastProvider>
        <TooltipProvider delayDuration={0}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PageLayout layout="welcome"><WelcomePage /></PageLayout>} />
              <Route path="/about" element={<PageLayout layout="about"><AboutPage /></PageLayout>} />
              <Route path="/program" element={<PageLayout layout="program"><ProgramPage /></PageLayout>} />
              <Route path="/contact" element={<PageLayout layout="contact"><ContactPage /></PageLayout>} />
              <Route path="/why-ghana" element={<PageLayout layout="why-ghana"><WhyGhanaPage /></PageLayout>} />
            </Routes>
            <Toaster />
          </BrowserRouter>
        </TooltipProvider>
      </ToastProvider>
    </LanguageProvider>
  );
}

initializeTheme();
