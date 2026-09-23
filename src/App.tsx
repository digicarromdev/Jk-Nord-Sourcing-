import { useState, useEffect } from 'react';
import { PageId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import WhoWeAreView from './components/WhoWeAreView';
import AboutUsView from './components/AboutUsView';
import ServicesView from './components/ServicesView';
import ProcessView from './components/ProcessView';
import ContactView from './components/ContactView';
import RfqView from './components/RfqView';
import {
  FileSpreadsheet,
  ArrowUp,
  Mail,
  ShieldCheck
} from 'lucide-react';
import { TARGET_SALES_EMAIL } from './utils/rfqEmail';
import { initGoogleIntegrations, trackPageView } from './utils/analytics';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize Google Analytics and Google Search Console tags
  useEffect(() => {
    initGoogleIntegrations();
  }, []);

  // Track page views on route changes
  useEffect(() => {
    trackPageView(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#212529] font-sans selection:bg-[#c9a84c]/30 selection:text-[#0a1628]">
      {/* Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && <HomeView onNavigate={handleNavigate} />}
        {currentPage === 'who' && <WhoWeAreView onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutUsView onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesView onNavigate={handleNavigate} />}
        {currentPage === 'process' && <ProcessView onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactView onNavigate={handleNavigate} />}
        {currentPage === 'rfq' && <RfqView />}
      </main>

      {/* Persistent Floating RFQ Quick Action Pill (when not on RFQ page) */}
      {currentPage !== 'rfq' && (
        <div className="fixed bottom-6 left-6 z-30 hidden sm:flex items-center gap-2">
          <button
            onClick={() => handleNavigate('rfq')}
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0a1628] hover:bg-[#1a2a4a] text-white shadow-navy hover:shadow-navy-lg border border-[#c9a84c]/40 hover:border-[#d4af37] transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
            title="Submit RFQ directly to info@jknordsourcing.com"
          >
            <div className="w-6 h-6 rounded-full bg-[#c9a84c] text-[#0a1628] flex items-center justify-center font-bold text-xs">
              <FileSpreadsheet className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-white group-hover:text-[#d4af37] transition-colors">
              Submit RFQ to Sales
            </span>
          </button>
        </div>
      )}

      {/* Floating Back-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#0a1628] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a1628] border border-[#c9a84c]/40 shadow-navy hover:shadow-navy-lg transition-all cursor-pointer transform hover:-translate-y-1 active:scale-90"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
