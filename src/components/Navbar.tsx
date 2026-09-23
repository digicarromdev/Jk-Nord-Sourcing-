import { useState, useEffect } from 'react';
import { PageId } from '../types';
import { PAGE_ROUTES } from '../utils/navigation';
import {
  Menu,
  X,
  FileText,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Users
} from 'lucide-react';
import { TARGET_SALES_EMAIL, FINLAND_PHONE } from '../utils/rfqEmail';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; badge?: string; icon?: typeof Users }[] = [
    { id: 'home', label: 'Home' },
    { id: 'who', label: 'Who We Are' },
    { id: 'about', label: 'About Us', badge: 'Our Team', icon: Users },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Our Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Ribbon */}
      <header className="bg-[#0a1628] text-slate-300 text-xs border-b border-[#1a2a4a] hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#c9a84c]" />
              <span>Espoo, Finland &bull; European Sourcing Partner</span>
            </span>
            <span className="h-3 w-px bg-[#1a2a4a]" />
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ISO &amp; PED Verified Manufacturers</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${FINLAND_PHONE.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c9a84c]" />
              <span>{FINLAND_PHONE}</span>
            </a>
            <span className="h-3 w-px bg-[#1a2a4a]" />
            <a
              href={`mailto:${TARGET_SALES_EMAIL}`}
              className="flex items-center gap-1.5 text-white hover:text-[#d4af37] transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#c9a84c]" />
              <span>{TARGET_SALES_EMAIL}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Sticky Navbar */}
      <nav
        id="main-navigation"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a1628]/95 text-white backdrop-blur-md shadow-navy-lg border-b border-[#1a2a4a] py-2.5'
            : 'bg-white text-[#212529] border-b border-[#e9ecef] py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-btn"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center text-left group cursor-pointer focus:outline-none transition-transform duration-200 hover:opacity-95 active:scale-[0.99] py-0.5"
            aria-label="JK NordSourcing Home"
          >
            <BrandLogo
              variant={isScrolled ? 'dark' : 'light'}
              className={`w-auto object-contain transition-all duration-300 drop-shadow-sm ${
                isScrolled
                  ? 'h-10 sm:h-11 md:h-12 max-w-[220px] sm:max-w-[270px]'
                  : 'h-12 sm:h-14 md:h-16 lg:h-[4.25rem] max-w-[250px] sm:max-w-[320px] md:max-w-[380px]'
              }`}
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const href = PAGE_ROUTES[item.id] || '/';
              return (
                <a
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? isScrolled
                        ? 'text-white bg-[#1a2a4a] font-semibold shadow-xs'
                        : 'text-[#212529] bg-[#f8f9fa] border border-[#e9ecef] font-semibold shadow-xs'
                      : isScrolled
                        ? 'text-slate-300 hover:text-white hover:bg-[#1a2a4a]/60'
                        : 'text-[#6c757d] hover:text-[#212529] hover:bg-[#f8f9fa]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-[rgba(201,168,76,0.15)] text-[#c9a84c] border border-[rgba(201,168,76,0.3)]">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#c9a84c] rounded-full" />
                  )}
                </a>
              );
            })}

            {/* Submit RFQ CTA Button */}
            <div className={`pl-3 border-l ml-1 ${isScrolled ? 'border-[#1a2a4a]' : 'border-[#e9ecef]'}`}>
              <a
                id="navbar-submit-rfq-btn"
                href="/rfq"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('rfq');
                }}
                className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#0a1628] px-4 py-2.5 rounded-xl text-sm font-bold shadow-navy hover:shadow-navy-lg active:scale-[0.98] transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#0a1628]" />
                <span>Submit RFQ</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              id="mobile-rfq-shortcut-btn"
              href="/rfq"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('rfq');
              }}
              className="px-3 py-1.5 rounded-lg bg-[#c9a84c] hover:bg-[#d4af37] text-[#0a1628] text-xs font-bold flex items-center gap-1 cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RFQ</span>
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-lg focus:outline-none cursor-pointer ${
                isScrolled ? 'text-white hover:bg-[#1a2a4a]' : 'text-[#212529] hover:bg-[#f8f9fa]'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-b animate-in slide-in-from-top-4 duration-200 shadow-xl ${
            isScrolled ? 'bg-[#0a1628] border-[#1a2a4a]' : 'bg-white border-[#e9ecef]'
          }`}>
            <div className={`px-4 pt-3 pb-6 space-y-1 divide-y ${isScrolled ? 'divide-[#1a2a4a]' : 'divide-[#e9ecef]'}`}>
              <div className="py-2 space-y-1">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  const href = PAGE_ROUTES[item.id] || '/';
                  return (
                    <a
                      key={item.id}
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                        isActive
                          ? 'bg-[rgba(201,168,76,0.1)] text-[#c9a84c] font-semibold border border-[rgba(201,168,76,0.3)]'
                          : isScrolled
                            ? 'text-slate-200 hover:bg-[#1a2a4a] hover:text-white'
                            : 'text-[#212529] hover:bg-[#f8f9fa] hover:text-[#0a1628]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.label}
                        {item.badge && (
                          <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-[rgba(201,168,76,0.15)] text-[#c9a84c] border border-[rgba(201,168,76,0.3)]">
                            {item.badge}
                          </span>
                        )}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </a>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 space-y-3">
                <a
                  id="mobile-menu-rfq-action"
                  href="/rfq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('rfq');
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#d4af37] text-[#0a1628] font-bold px-4 py-3 rounded-xl shadow-navy cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Submit Buyer RFQ Form</span>
                </a>

                <div className={`p-3.5 rounded-xl border text-xs space-y-2 ${
                  isScrolled
                    ? 'bg-[#1a2a4a] border-[#243556] text-slate-300'
                    : 'bg-[#f8f9fa] border-[#e9ecef] text-[#6c757d]'
                }`}>
                  <div className="flex items-center justify-between">
                    <span>Direct Sales Email:</span>
                    <a href={`mailto:${TARGET_SALES_EMAIL}`} className="text-[#c9a84c] font-medium hover:underline">
                      {TARGET_SALES_EMAIL}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Finland Phone:</span>
                    <a href={`tel:${FINLAND_PHONE.replace(/\s+/g, '')}`} className={`${isScrolled ? 'text-white' : 'text-[#212529]'} hover:underline font-medium`}>
                      {FINLAND_PHONE}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
