// src/hooks/useScrollAnimation.js
import { useEffect } from 'react';

const useScrollAnimation = (selector = '.project-card, .service-card', threshold = 0.1) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 100);
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [selector, threshold]);
};

export default useScrollAnimation;