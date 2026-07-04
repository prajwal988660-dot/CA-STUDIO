import { useEffect, useState } from 'react';

// Floating button that appears after scrolling down and smooth-scrolls to top.
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl bg-brand-text text-white shadow-xl flex items-center justify-center text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      &uarr;
    </button>
  );
}
