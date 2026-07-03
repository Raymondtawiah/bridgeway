import { useState, useEffect, useRef, type ReactNode } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.15, ...options });

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

type ScrollSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollSection({ children, className = '', delay = 0 }: ScrollSectionProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isInView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
