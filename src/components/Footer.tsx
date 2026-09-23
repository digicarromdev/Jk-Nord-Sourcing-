import { PageId } from '../types';
import {
  FileSpreadsheet,
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  ShieldCheck,
  Users
} from 'lucide-react';
import { TARGET_SALES_EMAIL, GENERAL_INFO_EMAIL, FINLAND_PHONE, INDIA_PHONE } from '../utils/rfqEmail';
import BrandLogo from './BrandLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (p: PageId) => {
    onNavigate(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a1628] text-slate-400 text-xs border-t border-[#1a2a4a]">
      {/* Pre-Footer Action Banner */}
      <div className="bg-[#07101e] border-b border-[#1a2a4a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">
              Direct Sales &amp; Procurement Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Ready to submit your Bill of Materials or Drawings?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Transmit your RFQ directly to <strong className="text-[#d4af37]">{TARGET_SALES_EMAIL}</strong> for verified factory bids.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleNav('rfq')}
              className="px-6 py-3 rounded-xl bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#0a1628] font-bold text-sm shadow-navy hover:shadow-navy-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#0a1628]" />
              <span>Submit RFQ Form</span>
            </button>
            <button
              onClick={() => handleNav('about')}
              className="px-5 py-3 rounded-xl bg-[#1a2a4a] hover:bg-[#243556] text-white font-medium text-sm border border-[#243556] hover:border-[#c9a84c]/50 transition-all cursor-pointer flex items-center gap-2"
            >
              <Users className="w-4 h-4 text-[#c9a84c]" />
              <span>Meet Our Team</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left cursor-pointer focus:outline-none block hover:opacity-95 transition-opacity"
              aria-label="JK NordSourcing Home"
            >
              <BrandLogo variant="dark" className="h-11 sm:h-12 w-auto max-w-[260px]" />
            </button>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Connecting European industrial enterprises with certified global manufacturers. Dedicated to strict Nordic governance,
              EN 10204 3.1 quality inspection, and transparent supply chain execution.
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-300 text-xs">
              <ShieldCheck className="w-4 h-4 text-[#c9a84c]" />
              <span>Quality &bull; Reliability &bull; Trust</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#c9a84c] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('who')} className="hover:text-[#c9a84c] transition-colors cursor-pointer">
                  Who We Are
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#c9a84c] transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>About Us</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] bg-[rgba(201,168,76,0.15)] text-[#c9a84c] font-bold border border-[rgba(201,168,76,0.3)]">Team</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#c9a84c] transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('process')} className="hover:text-[#c9a84c] transition-colors cursor-pointer">
                  Our Process
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('rfq')} className="text-[#c9a84c] font-semibold hover:underline cursor-pointer flex items-center gap-1">
                  <span>Submit RFQ</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Sourcing Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Procurement Services
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#c9a84c] transition-colors text-left cursor-pointer">
                  Global Supplier Identification
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#c9a84c] transition-colors text-left cursor-pointer">
                  Manufacturer Verification &amp; Auditing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#c9a84c] transition-colors text-left cursor-pointer">
                  Quality Inspection &amp; EN 10204 3.1
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#c9a84c] transition-colors text-left cursor-pointer">
                  Stainless Steel &amp; Metallurgy Sourcing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#c9a84c] transition-colors text-left cursor-pointer">
                  Customs &amp; Incoterms 2020 Freight
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Espoo, Finland</strong>
                  <div className="text-[11px] text-slate-400">European Headquarters</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c9a84c] shrink-0" />
                <div>
                  <a href={`tel:${FINLAND_PHONE.replace(/\s+/g, '')}`} className="text-white hover:text-[#c9a84c]">
                    {FINLAND_PHONE}
                  </a>
                  <span className="text-[10px] text-slate-400 ml-1">(Finland)</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c9a84c] shrink-0" />
                <div>
                  <a href={`tel:${INDIA_PHONE.replace(/\s+/g, '')}`} className="text-white hover:text-[#c9a84c]">
                    {INDIA_PHONE}
                  </a>
                  <span className="text-[10px] text-slate-400 ml-1">(India)</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-[#c9a84c] shrink-0" />
                <div>
                  <a href={`mailto:${TARGET_SALES_EMAIL}`} className="text-[#c9a84c] font-semibold hover:underline">
                    {TARGET_SALES_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#c9a84c] shrink-0" />
                <span className="text-slate-300">www.jknordsourcing.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-[#1a2a4a] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            &copy; 2026 JK NordSourcing. All Rights Reserved. &bull; Global Sourcing. Local Support.
          </div>
          <div className="flex items-center gap-6">
            <span>Serving Clients Across Europe</span>
            <span>Espoo, Finland</span>
            <span className="text-slate-400 flex items-center">
              Built By&nbsp;
              <a
                href="https://www.digicarrom.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] hover:underline hover:text-[#d4af37] font-medium transition-colors"
              >
                DigiCarrom
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
