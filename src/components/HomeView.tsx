import { useState } from 'react';
import { PageId } from '../types';
import { SERVICES, INDUSTRIES } from '../data/services';
import { TEAM_MEMBERS, FOUNDER_INFO } from '../data/team';
import {
  ShieldCheck,
  Globe2,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  Search,
  Building2,
  PackageCheck,
  CircleDollarSign,
  ClipboardCheck,
  FileText,
  Truck,
  Layers,
  Cog,
  Building,
  Compass,
  Car,
  Zap,
  Box,
  Wrench,
  Users,
  Award,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { TARGET_SALES_EMAIL, FINLAND_PHONE } from '../utils/rfqEmail';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [activeTab, setActiveTab] = useState<string>('services');

  const navTabs = [
    {
      id: 'services',
      targetId: 'services-grid',
      label: 'Core Services',
      icon: PackageCheck
    },
    {
      id: 'team',
      targetId: 'team-section',
      label: 'Nordic Team',
      icon: Users
    },
    {
      id: 'industries',
      targetId: 'industries-section',
      label: 'Industries We Serve',
      icon: Layers
    },
    {
      id: 'workflow',
      targetId: 'workflow-section',
      label: '8-Step Sourcing Workflow',
      icon: Cog
    },
    {
      id: 'rfq',
      targetId: 'rfq-cta-section',
      label: 'Launch RFQ Form',
      icon: FileSpreadsheet
    }
  ];

  const handleTabClick = (targetId: string, tabId: string) => {
    setActiveTab(tabId);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 90;
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });
    }
  };

  const iconMap: Record<string, any> = {
    Search,
    ShieldCheck,
    Building2,
    PackageCheck,
    CircleDollarSign,
    ClipboardCheck,
    FileText,
    Truck,
    Layers,
    Cog,
    Building,
    Compass,
    Car,
    Zap,
    Box,
    Wrench,
  };

  return (
    <div>
      {/* Hero Section - Premium Dark Navy as specified in PDF */}
      <section className="relative bg-gradient-to-b from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden border-b border-[#1a2a4a]">
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Subtle atmospheric accents */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[rgba(201,168,76,0.08)] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[rgba(26,42,74,0.4)] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] text-[#d4af37] text-xs uppercase tracking-widest font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#c9a84c]" />
                <span>European Sourcing &amp; Procurement Partner</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.15]">
                Connecting Europe with <br />
                <span className="text-[#c9a84c] italic">Trusted Global</span> Manufacturers
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We act as your trusted extension in the global market — identifying the right suppliers, verifying capabilities,
                ensuring quality, and negotiating optimal pricing with complete Nordic governance.
              </p>

              <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm font-medium text-slate-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a84c] shrink-0" />
                  <span>Quality</span>
                </span>
                <span className="text-slate-500">&bull;</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a84c] shrink-0" />
                  <span>Reliability</span>
                </span>
                <span className="text-slate-500">&bull;</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a84c] shrink-0" />
                  <span>Trust</span>
                </span>
              </div>

              {/* Call to action buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  id="hero-submit-rfq-cta"
                  onClick={() => onNavigate('rfq')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#0a1628] font-bold text-base shadow-navy hover:shadow-navy-lg transition-all transform active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <FileSpreadsheet className="w-5 h-5 text-[#0a1628]" />
                  <span>Submit Your RFQ</span>
                </button>

                <button
                  id="hero-services-cta"
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-white font-semibold text-base border border-[rgba(255,255,255,0.15)] hover:border-[#c9a84c]/50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-[#c9a84c]" />
                </button>
              </div>

              {/* Trust bar */}
              <div className="pt-6 border-t border-[#1a2a4a] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Direct Send to Gmail: <strong className="text-[#d4af37]">{TARGET_SALES_EMAIL}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Finland: <strong className="text-white">{FINLAND_PHONE}</strong></span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card with Glassmorphism */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md p-6 sm:p-8 shadow-navy-lg">
                <div className="flex items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] flex items-center justify-center text-[#c9a84c]">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Global Procurement Hub</h3>
                      <p className="text-xs text-slate-400">Espoo &bull; Europe &bull; Global</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-semibold">
                    Live Sourcing
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-xl bg-[#1a2a4a]/70 border border-[#243556] text-center">
                    <div className="text-2xl font-bold text-[#c9a84c] font-display">500+</div>
                    <div className="text-xs font-semibold text-white mt-1">Verified Suppliers</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Audited facilities</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#1a2a4a]/70 border border-[#243556] text-center">
                    <div className="text-2xl font-bold text-[#c9a84c] font-display">100%</div>
                    <div className="text-xs font-semibold text-white mt-1">Inspection Proof</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">EN 10204 3.1 &amp; ISO</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#1a2a4a]/70 border border-[#243556] text-center">
                    <div className="text-2xl font-bold text-[#c9a84c] font-display">24-48h</div>
                    <div className="text-xs font-semibold text-white mt-1">RFQ Response</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Rapid turnaround</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#1a2a4a]/70 border border-[#243556] text-center">
                    <div className="text-2xl font-bold text-[#c9a84c] font-display">DDP / CIF</div>
                    <div className="text-xs font-semibold text-white mt-1">Incoterms 2020</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">To warehouse door</div>
                  </div>
                </div>

                {/* Quick RFQ snippet trigger */}
                <div className="p-4 rounded-xl bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.3)] text-xs text-slate-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-[#c9a84c]">Need immediate pricing?</span>
                    <span className="text-[10px] text-slate-400">info@jknordsourcing.com</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Submit specifications and our engineering desk will match 3 vetted suppliers with guaranteed price breakdown.
                  </p>
                  <button
                    onClick={() => onNavigate('rfq')}
                    className="w-full py-2.5 rounded-lg bg-[#c9a84c] text-[#0a1628] font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#d4af37] transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Launch RFQ Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section - Pure White with Off-White cards */}
      <section id="services-section" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-14">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#f8f9fa] text-[#212529] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3 border border-[#e9ecef] shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
              <span>What We Do</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#212529] font-display tracking-tight leading-tight sm:leading-tight">
              End-to-End Procurement Solutions
            </h2>
            <p className="mt-2.5 sm:mt-4 text-[#6c757d] text-sm sm:text-base leading-relaxed px-1 sm:px-0 max-w-2xl mx-auto">
              We eliminate the friction and uncertainty of international purchasing by handling factory auditing,
              metallurgical quality assurance, commercial negotiation, and door-to-door freight.
            </p>

            {/* Child 2 (div:nth-of-type(2)): Interactive Tabs with Automatic Downward Scrolling */}
            <div className="mt-6 sm:mt-8 pt-1">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-[#f8f9fa] border border-[#e9ecef] max-w-full overflow-x-auto scrollbar-none shadow-xs">
                {navTabs.map((tab) => {
                  const TabIcon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.targetId, tab.id)}
                      className={`group relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer select-none active:scale-[0.98] ${
                        isActive
                          ? 'bg-[#0a1628] text-white shadow-navy border border-[#0a1628]'
                          : 'bg-white hover:bg-white text-[#495057] hover:text-[#0a1628] border border-[#e9ecef] hover:border-[#c9a84c]/50'
                      }`}
                      aria-label={`Scroll downward to ${tab.label}`}
                    >
                      <TabIcon
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                          isActive ? 'text-[#c9a84c]' : 'text-[#6c757d] group-hover:text-[#c9a84c]'
                        }`}
                      />
                      <span>{tab.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isActive
                            ? 'text-[#c9a84c] translate-y-0.5'
                            : 'text-slate-400 group-hover:text-[#0a1628] group-hover:translate-y-0.5'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-[#6c757d] mt-2.5 flex items-center justify-center gap-1.5">
                <ChevronDown className="w-3 h-3 text-[#c9a84c] animate-bounce" />
                <span>Click any tab to automatically scroll downward to that section</span>
              </p>
            </div>
          </div>

          <div id="services-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SERVICES.slice(0, 6).map((service) => {
              const Icon = iconMap[service.iconName] || Search;
              return (
                <div
                  key={service.id}
                  onClick={() => onNavigate('services')}
                  className="bg-[#f8f9fa] rounded-2xl p-5 sm:p-7 border border-[#e9ecef] hover:border-[#c9a84c]/60 active:border-[#c9a84c] shadow-navy hover:shadow-navy-lg transition-all group flex flex-col justify-between cursor-pointer active:scale-[0.99]"
                >
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#c9a84c] group-hover:text-[#0a1628] transition-colors shadow-xs shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#212529] mb-1.5 sm:mb-2 font-display group-hover:text-[#0a1628] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#6c757d] text-xs sm:text-sm leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3.5 sm:pt-4 border-t border-[#e9ecef] flex items-center justify-between text-xs min-h-[40px]">
                    <span className="font-semibold text-[#212529] group-hover:text-[#c9a84c] transition-colors">Learn More</span>
                    <span className="text-[#c9a84c] group-hover:translate-x-1.5 transition-transform flex items-center gap-1 font-medium">
                      <span className="text-[11px] sm:hidden">Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-12 text-center px-2 sm:px-0">
            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-xl bg-[#0a1628] hover:bg-[#1a2a4a] active:bg-[#112240] text-white font-semibold text-sm transition-all cursor-pointer shadow-navy active:scale-98"
            >
              <span>View All 8 Core Sourcing Services</span>
              <ChevronRight className="w-4 h-4 text-[#c9a84c]" />
            </button>
          </div>
        </div>
      </section>

      {/* One Person Company Leadership Feature Banner - Deep Navy Dark Section */}
      <section id="team-section" className="py-16 bg-[#0a1628] text-white border-y border-[#1a2a4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(201,168,76,0.15)] text-[#c9a84c] text-xs font-semibold uppercase tracking-wider border border-[rgba(201,168,76,0.3)]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>One Person Company (OPC) &bull; Executive Leadership</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
                Led by Founder &amp; CEO Binita Kausal
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Operating as an agile One Person Company (OPC) headquartered in Espoo, Finland, JK NordSourcing gives European enterprises single-point accountability, direct factory negotiations, and verified EN 10204 3.1 quality inspections with zero broker bureaucracy.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-5 py-2.5 rounded-xl bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#0a1628] font-bold text-sm shadow-navy transition-all cursor-pointer flex items-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  <span>Meet Founder &amp; CEO Binita Kausal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('rfq')}
                  className="px-5 py-2.5 rounded-xl bg-[#1a2a4a] hover:bg-[#243556] text-white font-medium text-sm border border-[#243556] hover:border-[#c9a84c]/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <FileSpreadsheet className="w-4 h-4 text-[#c9a84c]" />
                  <span>Submit RFQ Direct to CEO</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                onClick={() => onNavigate('about')}
                className="p-6 rounded-3xl bg-[#12223c] border border-[#1e3256] hover:border-[#c9a84c]/60 cursor-pointer transition-all hover:-translate-y-1 shadow-navy-lg flex items-center gap-5 group"
              >
                <div className="relative shrink-0">
                  <img
                    src={FOUNDER_INFO.avatarUrl}
                    alt={FOUNDER_INFO.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#c9a84c] shadow-navy group-hover:scale-105 transition-transform duration-300"
                  />
                  <span
                    className="absolute -bottom-1 -right-1 text-xl bg-[#0a1628] p-0.5 rounded-full shadow-sm border border-[#1e3256]"
                    title="Espoo, Finland"
                  >
                    {FOUNDER_INFO.flag}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#c9a84c] text-[#0a1628] mb-1">
                    One Person Company (OPC)
                  </div>
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-[#c9a84c] transition-colors">
                    {FOUNDER_INFO.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#c9a84c]">
                    {FOUNDER_INFO.role}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {FOUNDER_INFO.location} &bull; {FOUNDER_INFO.experience.split('in')[0].trim()}
                  </div>
                  <div className="mt-2 text-[11px] text-slate-300 line-clamp-2">
                    Direct executive stewardship across European procurement &amp; global manufacturing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Off-White with Pure White Cards */}
      <section id="industries-section" className="py-20 bg-[#f8f9fa] border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#212529] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#e9ecef]">
              <Layers className="w-3.5 h-3.5 text-[#c9a84c]" />
              <span>Sectors &amp; Materials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#212529] font-display">
              Industries We Serve
            </h2>
            <p className="mt-4 text-[#6c757d] text-base leading-relaxed">
              We source high-tolerance industrial materials and assemblies tailored to European engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind, index) => {
              const Icon = iconMap[ind.icon] || Cog;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-[#e9ecef] hover:border-[#c9a84c]/50 shadow-navy hover:shadow-navy-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center mb-4 group-hover:bg-[#c9a84c] group-hover:text-[#0a1628] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#212529] font-display mb-2">
                    {ind.title}
                  </h4>
                  <p className="text-xs text-[#6c757d] leading-relaxed mb-3">
                    {ind.desc}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {ind.popularItems.map((item, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#f8f9fa] text-[#6c757d] font-medium border border-[#e9ecef]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Teaser Banner - Deep Navy Container with Gold Accents */}
      <section id="workflow-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="rfq-cta-section" className="bg-[#0a1628] rounded-3xl p-8 sm:p-12 text-white border border-[#1a2a4a] shadow-navy-lg relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(201,168,76,0.15)] text-[#c9a84c] text-xs font-semibold uppercase tracking-wider mb-4 border border-[rgba(201,168,76,0.3)]">
                <span>Structured 8-Step Sourcing Process</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white leading-tight">
                From Technical Drawing to <br />
                <span className="text-[#c9a84c]">Delivered Production Batch</span>
              </h2>
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                We handle requirement mapping, supplier shortlisting, sample prototyping, AQL pre-shipment inspections,
                customs export clearances, and insured door delivery.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('process')}
                  className="px-6 py-3 rounded-xl bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#0a1628] font-bold text-sm shadow-navy transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>View Our 8-Step Workflow</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('rfq')}
                  className="px-6 py-3 rounded-xl bg-[#1a2a4a] hover:bg-[#243556] text-white font-semibold text-sm border border-[#243556] hover:border-[#c9a84c]/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <FileSpreadsheet className="w-4 h-4 text-[#c9a84c]" />
                  <span>Submit Your RFQ Directly</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
