import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useAnimations = () => {
  useEffect(() => {
    // 1. Initialize ScrollReveal for generic simple fade-ups
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '30px',
      duration: 800,
      delay: 100,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      reset: false
    });

    sr.reveal('.reveal-up');
    sr.reveal('.reveal-left', { origin: 'left', distance: '50px' });
    sr.reveal('.reveal-right', { origin: 'right', distance: '50px' });

    // Cleanup ScrollReveal (optional but good practice)
    return () => sr.destroy();
  }, []);
};
