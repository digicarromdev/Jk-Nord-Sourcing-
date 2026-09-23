import { PageId } from '../types';
import {
  Globe,
  ShieldCheck,
  Award,
  Handshake,
  TrendingUp,
  Clock,
  FileSpreadsheet,
  Anchor,
  Users
} from 'lucide-react';
import { TARGET_SALES_EMAIL } from '../utils/rfqEmail';

interface WhoWeAreViewProps {
  onNavigate: (page: PageId) => void;
}

export default function WhoWeAreView({ onNavigate }: WhoWeAreViewProps) {
  const commitments = [
    {
      icon: ShieldCheck,
      title: 'Trust & Transparency',
      desc: 'We operate with unyielding honesty, open-book cost breakdowns, and direct communication in every single transaction.'
    },
    {
      icon: Award,
      title: 'European Quality Standards',
      desc: 'Enforcing strict compliance with EN 10204 3.1/3.2 certificates, PED 2014/68/EU directives, and ISO 9001 certified auditing.'
    },
    {
      icon: Handshake,
      title: 'Reliable Partnerships',
      desc: 'We build sustainable, multi-year sourcing relationships that grow alongside your production capacity.'
    },
    {
      icon: Globe,
      title: 'Global Manufacturing Reach',
      desc: 'Combining deep local knowledge on the factory floor with Nordic business ethics and European commercial contracts.'
    },
    {
      icon: TrendingUp,
      title: 'Cost & Margin Efficiency',
      desc: 'Direct factory pricing without multi-tier middleman markups, optimizing tooling investments and volume discounts.'
    },
    {
      icon: Clock,
      title: 'Reliable Lead Times & On-Time Delivery',
      desc: 'Active production milestone tracking with container logistics coordinated directly to your European warehouse.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Banner - Deep Navy Background */}
      <section className="bg-gradient-to-b from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 lg:py-24 border-b border-[#1a2a4a] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs uppercase tracking-widest font-semibold mb-6">
            <Globe className="w-3.5 h-3.5 text-[#c9a84c]" />
            <span>Who We Are</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white max-w-3xl mx-auto leading-tight">
            Your Trusted Extension in the <br />
            <span className="text-[#c9a84c]">Global Sourcing Market</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            JK NordSourcing connects European manufacturers and industrial distributors with verified, high-capability
            producers worldwide — mitigating cross-border risk, ensuring quality, and reducing procurement costs.
          </p>
        </div>
      </section>

      {/* Main Narrative with Graphic Card - Pure White */}
      <section className="py-20 bg-white border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8f9fa] text-[#212529] text-xs font-semibold uppercase tracking-wider border border-[#e9ecef]">
                <span>Nordic Governance &bull; Global Agility</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#212529] font-display leading-tight">
                Bridging European Standards with <br />
                <span className="text-[#c9a84c]">World-Class Manufacturing</span>
              </h2>

              <p className="text-[#6c757d] text-base leading-relaxed">
                Navigating foreign supplier markets can expose European buyers to inconsistent metallurgical grades,
                fraudulent test certificates, unexpected lead time delays, and difficult legal recourse.
              </p>

              <p className="text-[#6c757d] text-base leading-relaxed">
                At JK NordSourcing, we eliminate these liabilities. With headquarters in Espoo, Finland, and dedicated
                technical sourcing engineers situated directly near key Asian industrial manufacturing clusters, we act
                as your own in-house international procurement division.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e9ecef] flex items-start gap-3 shadow-navy">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center shrink-0 border border-[rgba(201,168,76,0.25)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] text-sm">European Standards</h4>
                    <p className="text-xs text-[#6c757d] mt-0.5">EN, DIN, ISO, and CE technical compliance</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e9ecef] flex items-start gap-3 shadow-navy">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center shrink-0 border border-[rgba(201,168,76,0.25)]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] text-sm">Audited Facilities</h4>
                    <p className="text-xs text-[#6c757d] mt-0.5">Physical floor inspections &amp; capacity checks</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e9ecef] flex items-start gap-3 shadow-navy">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center shrink-0 border border-[rgba(201,168,76,0.25)]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] text-sm">Dedicated Team</h4>
                    <p className="text-xs text-[#6c757d] mt-0.5">Engineers &amp; international trade specialists</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e9ecef] flex items-start gap-3 shadow-navy">
                  <div className="w-9 h-9 rounded-lg bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center shrink-0 border border-[rgba(201,168,76,0.25)]">
                    <Anchor className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#212529] text-sm">Incoterms Execution</h4>
                    <p className="text-xs text-[#6c757d] mt-0.5">CIF, FOB, DDP seamless customs clearing</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('rfq')}
                  className="px-6 py-3 rounded-xl bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#0a1628] font-bold text-sm shadow-navy transition-all cursor-pointer flex items-center gap-2"
                >
                  <FileSpreadsheet className="w-4 h-4 text-[#0a1628]" />
                  <span>Submit Your RFQ to Sales</span>
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-xl bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#212529] font-semibold text-sm border border-[#e9ecef] transition-all cursor-pointer flex items-center gap-2 shadow-sm"
                >
                  <Users className="w-4 h-4 text-[#c9a84c]" />
                  <span>View Our Team Profiles</span>
                </button>
              </div>
            </div>

            {/* Right Graphic Card - Deep Navy */}
            <div className="lg:col-span-5">
              <div className="bg-[#0a1628] rounded-3xl p-8 text-white border border-[#1a2a4a] shadow-navy-lg relative overflow-hidden">
                <div className="flex items-center justify-between pb-6 border-b border-[#1a2a4a]">
                  <div>
                    <div className="text-[#c9a84c] text-xs font-bold uppercase tracking-wider">Operational Overview</div>
                    <h3 className="text-xl font-bold font-display text-white mt-1">JK NordSourcing Bilateral Model</h3>
                  </div>
                  <Globe className="w-6 h-6 text-[#c9a84c]" />
                </div>

                <div className="py-6 space-y-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#1a2a4a] border border-[#243556]">
                    <span className="text-[#c9a84c] font-bold block mb-1">1. Requirement Intake (Finland Desk)</span>
                    <p className="text-slate-300">
                      Technical consultation in European time zones. Analysis of specifications, CAD drawings, and AQL requirements.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1a2a4a] border border-[#243556]">
                    <span className="text-[#c9a84c] font-bold block mb-1">2. On-the-Ground Auditing (Factory Hub)</span>
                    <p className="text-slate-300">
                      Physical inspection of manufacturing plants, raw material spectro analysis, calibration records, and capacity.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1a2a4a] border border-[#243556]">
                    <span className="text-[#c9a84c] font-bold block mb-1">3. Pre-Shipment Inspection (PSI Acceptance)</span>
                    <p className="text-slate-300">
                      Strict validation of EN 10204 3.1 mill test certificates, dimensional tolerances, and packaging prior to bill of lading issue.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1a2a4a] border border-[#243556]">
                    <span className="text-[#c9a84c] font-bold block mb-1">4. Delivery to European Warehouse</span>
                    <p className="text-slate-300">
                      Complete customs clearance, duties calculation, inland transit, and delivery proof directly to your distribution center.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1a2a4a] text-center">
                  <span className="text-xs text-slate-400">Direct Inquiries: </span>
                  <a href={`mailto:${TARGET_SALES_EMAIL}`} className="text-[#c9a84c] font-bold text-xs hover:underline">
                    {TARGET_SALES_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section - Off-White */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#212529] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#e9ecef]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c9a84c]" />
              <span>Our Commitments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#212529] font-display">
              Our Commitment to Your Business
            </h2>
            <p className="mt-4 text-[#6c757d] text-base leading-relaxed">
              Every partnership is anchored in six foundational principles that govern our operations, communication, and commercial deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-[#e9ecef] hover:border-[#c9a84c]/50 shadow-navy hover:shadow-navy-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center mb-5 shadow-xs border border-[rgba(201,168,76,0.25)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#212529] font-display mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#6c757d] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
