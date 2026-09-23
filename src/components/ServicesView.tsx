import { useState } from 'react';
import { PageId } from '../types';
import { SERVICES } from '../data/services';
import {
  Search,
  ShieldCheck,
  Building2,
  PackageCheck,
  CircleDollarSign,
  ClipboardCheck,
  FileText,
  Truck,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  ArrowDown,
  Sparkles,
  ChevronDown,
  Layers,
  ChevronRight,
  ChevronLeft,
  Check
} from 'lucide-react';
import { TARGET_SALES_EMAIL } from '../utils/rfqEmail';

interface ServicesViewProps {
  onNavigate: (page: PageId) => void;
}

export default function ServicesView({ onNavigate }: ServicesViewProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);
  const [highlightCard, setHighlightCard] = useState<boolean>(false);

  const iconMap: Record<string, any> = {
    Search,
    ShieldCheck,
    Building2,
    PackageCheck,
    CircleDollarSign,
    ClipboardCheck,
    FileText,
    Truck,
  };

  const selectedIndex = SERVICES.findIndex((s) => s.id === activeServiceId);
  const selectedService = SERVICES[selectedIndex] || SERVICES[0];
  const SelectedIcon = iconMap[selectedService.iconName] || Search;

  const scrollToTarget = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 95;
      const targetPos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
      if (targetId === 'capability-detail-card') {
        setHighlightCard(true);
        setTimeout(() => setHighlightCard(false), 2000);
      }
    }
  };

  const handleSelectService = (serviceId: string) => {
    setActiveServiceId(serviceId);
    scrollToTarget('capability-detail-card');
  };

  const handleNextService = () => {
    const nextIndex = (selectedIndex + 1) % SERVICES.length;
    handleSelectService(SERVICES[nextIndex].id);
  };

  const handlePrevService = () => {
    const prevIndex = (selectedIndex - 1 + SERVICES.length) % SERVICES.length;
    handleSelectService(SERVICES[prevIndex].id);
  };

  return (
    <div className="bg-white">
      {/* Header - Deep Navy Background */}
      <section className="bg-gradient-to-b from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 lg:py-20 border-b border-[#1a2a4a] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs uppercase tracking-widest font-semibold mb-6">
            <PackageCheck className="w-3.5 h-3.5 text-[#c9a84c]" />
            <span>Comprehensive Sourcing Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white max-w-3xl mx-auto leading-tight">
            End-to-End International <br />
            <span className="text-[#c9a84c]">Procurement &amp; Quality Services</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            From preliminary manufacturer verification and price negotiation to on-site metallurgical inspection
            and European customs delivery, we oversee every phase of your supply chain.
          </p>
        </div>
      </section>

      {/* Services Explorer - Core Capabilities & Capability Detail */}
      <section id="core-capabilities-section" className="py-16 sm:py-20 bg-white border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Sub-header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-[#e9ecef]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8f9fa] text-[#0a1628] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#e9ecef]">
                <Layers className="w-3.5 h-3.5 text-[#c9a84c]" />
                <span>Operational Sourcing Services</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#212529]">
                Core Capabilities &amp; Detailed Specifications
              </h2>
            </div>
            <div className="text-xs text-[#6c757d] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Click any capability on the left to inspect its full detail below</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Navigation: Core Capabilities List */}
            <div id="core-capabilities-list" className="lg:col-span-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#6c757d] px-3 pb-2">
                <span>Core Capabilities ({SERVICES.length})</span>
                <span className="text-[11px] text-[#c9a84c] normal-case font-normal flex items-center gap-1">
                  <span>Auto-scrolls to detail</span>
                  <ChevronDown className="w-3 h-3" />
                </span>
              </div>
              {SERVICES.map((s, idx) => {
                const Icon = iconMap[s.iconName] || Search;
                const isSelected = s.id === activeServiceId;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleSelectService(s.id)}
                    className={`w-full group flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0a1628] text-white shadow-navy border border-[#0a1628] ring-2 ring-[#c9a84c]'
                        : 'bg-[#f8f9fa] text-[#212529] hover:bg-[#e9ecef] border border-[#e9ecef]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'bg-[#c9a84c] text-[#0a1628]' : 'bg-[#e9ecef] text-[#212529] group-hover:bg-[#dee2e6]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-semibold truncate block">{s.title}</span>
                        <span className={`text-[11px] truncate block ${isSelected ? 'text-slate-300' : 'text-[#6c757d]'}`}>
                          Phase 0{idx + 1} &bull; {s.benefits[0]}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected
                          ? 'text-[#c9a84c] translate-x-1'
                          : 'text-[#adb5bd] group-hover:text-[#212529] group-hover:translate-x-1'
                      }`}
                    />
                  </button>
                );
              })}

              <div className="pt-3 px-2">
                <button
                  onClick={() => scrollToTarget('full-services-catalog')}
                  className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-[#f8f9fa] text-xs font-semibold text-[#0a1628] border border-[#e9ecef] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <PackageCheck className="w-3.5 h-3.5 text-[#c9a84c]" />
                  <span>View All Services Overview Grid &darr;</span>
                </button>
              </div>
            </div>

            {/* Service Detail Showcase: Capability Detail */}
            <div
              id="capability-detail-card"
              className={`lg:col-span-8 bg-[#f8f9fa] rounded-3xl p-6 sm:p-10 border transition-all duration-300 ${
                highlightCard
                  ? 'border-[#c9a84c] ring-4 ring-[#c9a84c]/20 shadow-navy-lg'
                  : 'border-[#e9ecef] shadow-navy'
              }`}
            >
              {/* Capability Detail Header & Navigation Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e9ecef]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[rgba(201,168,76,0.15)] text-[#c9a84c] flex items-center justify-center shadow-xs border border-[rgba(201,168,76,0.3)] shrink-0">
                    <SelectedIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
                        Capability Detail
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-white text-[#6c757d] border border-[#e9ecef]">
                        {selectedIndex + 1} of {SERVICES.length}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#212529] font-display">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Next / Previous cycling buttons */}
                <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                  <button
                    onClick={handlePrevService}
                    className="p-2 rounded-xl bg-white hover:bg-[#e9ecef] text-[#212529] border border-[#e9ecef] transition-all cursor-pointer flex items-center gap-1 text-xs font-medium"
                    title="Previous capability"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Prev</span>
                  </button>
                  <button
                    onClick={handleNextService}
                    className="p-2 rounded-xl bg-[#0a1628] hover:bg-[#12223c] text-white border border-[#0a1628] transition-all cursor-pointer flex items-center gap-1 text-xs font-medium"
                    title="Next capability"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4 text-[#c9a84c]" />
                  </button>
                </div>
              </div>

              {/* Full Description */}
              <p className="text-[#495057] text-base sm:text-lg leading-relaxed mb-8">
                {selectedService.fullDesc}
              </p>

              {/* Strategic Benefits & Deliverables Blocks with Targets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#e9ecef]">
                {/* Benefits */}
                <div id="capability-benefits" className="bg-white rounded-2xl p-5 border border-[#e9ecef] shadow-xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#212529] mb-3.5 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#c9a84c]" />
                    <span>Key Strategic Benefits</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#495057]">
                    {selectedService.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div id="capability-deliverables" className="bg-white rounded-2xl p-5 border border-[#e9ecef] shadow-xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#212529] mb-3.5 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#c9a84c]" />
                    <span>Tangible Deliverables</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#495057]">
                    {selectedService.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                        <span className="leading-snug">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Service Action Bar */}
              <div id="service-rfq-block" className="mt-8 pt-6 border-t border-[#e9ecef] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/70 rounded-2xl p-4 sm:p-5 border border-[#e9ecef]">
                <div>
                  <span className="text-xs text-[#6c757d] block font-medium">Ready to initiate this service?</span>
                  <span className="text-xs sm:text-sm font-bold text-[#0a1628]">Direct specification routing to {TARGET_SALES_EMAIL}</span>
                </div>
                <button
                  onClick={() => onNavigate('rfq')}
                  className="px-6 py-3 rounded-xl bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#0a1628] font-bold text-sm shadow-navy transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 select-none active:scale-[0.98]"
                >
                  <FileSpreadsheet className="w-4 h-4 text-[#0a1628]" />
                  <span>Submit Requirement Form</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of All 8 Services - Off-White Background */}
      <section id="full-services-catalog" className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0a1628] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#e9ecef]">
              <PackageCheck className="w-3.5 h-3.5 text-[#c9a84c]" />
              <span>Full Service Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#212529] font-display">
              Full Services Overview
            </h2>
            <p className="text-[#6c757d] text-sm mt-2">
              Every service is executed under European quality protocols with full contractual guarantees. Click any service to scroll up to its detailed specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((item) => {
              const Icon = iconMap[item.iconName] || Search;
              const isSelected = item.id === activeServiceId;
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#c9a84c] ring-2 ring-[#c9a84c]/30 shadow-navy-lg'
                      : 'border-[#e9ecef] hover:border-[#c9a84c]/50 shadow-navy hover:shadow-navy-lg'
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center mb-4 border border-[rgba(201,168,76,0.25)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[#212529] text-sm font-display mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6c757d] leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => handleSelectService(item.id)}
                    className="mt-4 pt-3 border-t border-[#e9ecef] text-xs font-semibold text-[#c9a84c] hover:text-[#0a1628] flex items-center justify-between cursor-pointer group"
                  >
                    <span>Inspect Capability Detail</span>
                    <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
