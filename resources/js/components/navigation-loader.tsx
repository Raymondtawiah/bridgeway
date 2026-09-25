import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '@/components/loader';

export default function NavigationLoader() {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const initialPathnameRef = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname === initialPathnameRef.current) {
      return;
    }

    const frame = requestAnimationFrame(() => setIsNavigating(true));
    timeoutRef.current = setTimeout(() => setIsNavigating(false), 500);

    return () => {
      cancelAnimationFrame(frame);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [location.pathname]);

  if (!isNavigating) {
    return null;
  }

  return <Loader />;
}
