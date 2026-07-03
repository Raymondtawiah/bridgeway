import { useLanguage } from '@/contexts/LanguageContext';

export default function MainFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BRIDGEWAY LLC. {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
