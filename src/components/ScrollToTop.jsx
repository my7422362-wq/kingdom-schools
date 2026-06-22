import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isInitialLoad = useRef(true);

  // Save scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Restore scroll position on initial page load/refresh
  useEffect(() => {
    const restorePosition = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition && isInitialLoad.current) {
        const position = parseInt(savedPosition, 10);
        // Use requestAnimationFrame for smoother restoration
        requestAnimationFrame(() => {
          window.scrollTo(0, position);
        });
        isInitialLoad.current = false;
      }
    };

    // Wait for page to be fully loaded
    if (document.readyState === 'complete') {
      restorePosition();
    } else {
      window.addEventListener('load', restorePosition);
      return () => window.removeEventListener('load', restorePosition);
    }
  }, []);

  // Scroll to top on route change (internal navigation within the app)
  useEffect(() => {
    // Skip the first render - we handle refresh separately
    if (isInitialLoad.current) {
      return;
    }

    // For route changes, always scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

