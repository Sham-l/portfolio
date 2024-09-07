'use client';
import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], threshold = 0.6) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold },
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [sectionIds, threshold]);

  return activeSection;
}
