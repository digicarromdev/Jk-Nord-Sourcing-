import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import CleaningComingSoon from './components/CleaningComingSoon';
import { ArrowUp } from 'lucide-react';
import { initGoogleIntegrations, trackPageView } from './utils/analytics';
import { getPageFromUrl, pushPageToUrl, PAGE_TITLES } from './utils/navigation';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => getPageFromUrl());
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize Google Analytics and Google Search Console tags
  useEffect(() => {
    initGoogleIntegrations();
    const initialPage = getPageFromUrl();
    pushPageToUrl(initialPage, true);
  }, []);

  // Listen to browser Back and Forward button events
  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromUrl();
      setCurrentPage(page);
      if (PAGE_TITLES[page]) {
        document.title = PAGE_TITLES[page];
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Track page views on route changes
  useEffect(() => {
    trackPageView(currentPage, PAGE_TITLES[currentPage]);
  }, [currentPage]);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070a12] text-slate-100 font-sans selection:bg-[#c9a84c]/30 selection:text-white">
      {/* Primary Finnish Cleaning Service Coming Soon Page Only */}
      <main className="flex-1">
        <CleaningComingSoon />
      </main>

      {/* Floating Back-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0d1424] text-white hover:bg-[#c9a84c] hover:text-[#070a12] shadow-2xl border border-white/10 transition-all cursor-pointer transform hover:-translate-y-1 active:scale-90"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
