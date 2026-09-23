import { useState } from 'react';
import { PageId } from '../types';
import { TEAM_MEMBERS, FOUNDER_INFO } from '../data/team';
import {
  Users,
  Award,
  Globe2,
  Mail,
  Linkedin,
  MapPin,
  GraduationCap,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Building,
  ArrowUpRight,
  FileSpreadsheet,
  Check,
  Sparkles,
  Phone
} from 'lucide-react';
import { TARGET_SALES_EMAIL, FINLAND_PHONE } from '../utils/rfqEmail';

interface AboutUsViewProps {
  onNavigate: (page: PageId) => void;
}

export default function AboutUsView({ onNavigate }: AboutUsViewProps) {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', 'Executive Leadership', 'Strategic Sourcing', 'Quality & Auditing', 'European Logistics & Compliance'];

  const filteredTeam = selectedDept === 'All'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((m) => m.department === selectedDept);

  return (
    <div className="bg-white">
      {/* Hero Header - Deep Navy Background with Gold Accent */}
      <section className="bg-gradient-to-b from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 lg:py-24 border-b border-[#1a2a4a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs uppercase tracking-widest font-semibold mb-6">
            <Users className="w-3.5 h-3.5 text-[#c9a84c]" />
            <span>About JK NordSourcing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display max-w-4xl mx-auto leading-tight">
            Building Strong Global Partnerships. <br className="hidden sm:inline" />
            <span className="text-[#c9a84c]">Delivering Shared Success.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Headquartered in Espoo, Finland, JK NordSourcing bridges European buyers with certified global manufacturers
            through deep engineering expertise, strict Nordic governance, and direct on-site verification.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('rfq')}
              className="px-6 py-3 rounded-xl bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#0a1628] font-bold text-sm shadow-navy hover:shadow-navy-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#0a1628]" />
              <span>Submit Your RFQ</span>
            </button>
            <a
              href="#our-team-section"
              className="px-6 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-white font-medium text-sm border border-[rgba(255,255,255,0.15)] hover:border-[#c9a84c]/50 transition-all flex items-center gap-2 shadow-sm"
            >
              <Users className="w-4 h-4 text-[#c9a84c]" />
              <span>Meet Our Team</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values - Pure White with Off-White Cards */}
      <section className="py-16 bg-white border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#f8f9fa] border border-[#e9ecef] hover:border-[#c9a84c]/50 shadow-navy hover:shadow-navy-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center mb-5 shadow-xs">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#212529] mb-3 font-display">Our Vision</h3>
              <p className="text-[#6c757d] text-sm leading-relaxed">
                To be the primary trusted European bridge to global manufacturing excellence — removing geographic, linguistic,
                and quality barriers through uncompromising transparency and technical accountability.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f8f9fa] border border-[#e9ecef] hover:border-[#c9a84c]/50 shadow-navy hover:shadow-navy-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center mb-5 shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#212529] mb-3 font-display">Our Mission</h3>
              <p className="text-[#6c757d] text-sm leading-relaxed">
                Empower European companies to expand manufacturing margins and diversify supply chains without sacrificing
                product reliability, certified standards (EN/ISO/DIN), or ethical workplace requirements.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f8f9fa] border border-[#e9ecef] hover:border-[#c9a84c]/50 shadow-navy hover:shadow-navy-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center mb-5 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#212529] mb-3 font-display">Our Core Promise</h3>
              <p className="text-[#6c757d] text-sm leading-relaxed">
                We represent your interests on the ground. We evaluate factories as if they were our own, review test
                certificates before shipment, and guarantee that what reaches your warehouse matches your purchase orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Hubs Banner - Off-White Background */}
      <section className="py-12 bg-[#f8f9fa] border-b border-[#e9ecef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#e9ecef] p-6 sm:p-8 shadow-navy">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8f9fa] text-[#212529] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#e9ecef]">
                  <Building className="w-3.5 h-3.5 text-[#c9a84c]" />
                  <span>Bilateral Strategic Hubs</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#212529] font-display">
                  Nordic Headquarters &amp; Asian Manufacturing Presence
                </h2>
                <p className="mt-3 text-[#6c757d] text-sm sm:text-base leading-relaxed">
                  Our dual-hub structure eliminates communication delays and time zone bottlenecks. Our headquarters in Espoo, Finland
                  handles European legal contracts, commercial guarantees, and direct buyer support, while our offices in India manage
                  daily factory floor oversight, supplier audits, and container dispatch.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#0a1628] text-white border border-[#1a2a4a] shadow-navy">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🇫🇮</span>
                    <div>
                      <h4 className="font-bold text-white text-base">Espoo, Finland</h4>
                      <p className="text-xs text-[#c9a84c]">European Headquarters</p>
                    </div>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 mt-3 pt-3 border-t border-[#1a2a4a]">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                      <span>EU Contracts &amp; Governance</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                      <span>Dedicated Account Management</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                      <span>Direct: +358 46 665 0787</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#f8f9fa] border border-[#e9ecef]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🇮🇳</span>
                    <div>
                      <h4 className="font-bold text-[#212529] text-base">Mumbai &amp; Delhi, India</h4>
                      <p className="text-xs text-[#6c757d]">Sourcing &amp; Quality Hub</p>
                    </div>
                  </div>
                  <ul className="text-xs text-[#6c757d] space-y-1.5 mt-3 pt-3 border-t border-[#e9ecef]">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                      <span>On-Site Factory Audits</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                      <span>Pre-Shipment Inspections</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                      <span>Direct: +91 80000 83352</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR TEAM SECTION - One Person Company Founder & CEO Binita Kausal
         ========================================================================= */}
      <section id="our-team-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Child 1 (div:nth-of-type(1)): Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(201,168,76,0.15)] text-[#c9a84c] text-xs uppercase tracking-widest font-semibold mb-4 border border-[rgba(201,168,76,0.3)]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>One Person Company (OPC) &bull; Executive Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#212529] font-display">
              Founder &amp; CEO: Binita Kausal
            </h2>
            <p className="mt-4 text-[#6c757d] text-base leading-relaxed">
              JK NordSourcing is an agile <strong>One Person Company (OPC)</strong> founded and directed by <strong>Binita Kausal</strong> from Espoo, Finland. 
              European buyers enjoy single-point executive accountability, zero intermediary overhead, and direct oversight over certified global manufacturing corridors.
            </p>
          </div>

          {/* Child 2 (div:nth-of-type(2)): Founder Profile & OPC Strategic Governance Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Founder Executive Card (lg:col-span-5) */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-[#e9ecef] shadow-navy-lg hover:border-[#c9a84c]/60 transition-all flex flex-col justify-between overflow-hidden relative">
              <div className="h-3 bg-gradient-to-r from-[#0a1628] via-[#c9a84c] to-[#0a1628]" />
              
              <div className="p-6 sm:p-8">
                {/* Photo & Badges */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                  <div className="relative shrink-0 mx-auto sm:mx-0">
                    <img
                      src={FOUNDER_INFO.avatarUrl}
                      alt={FOUNDER_INFO.name}
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover border-4 border-white shadow-navy ring-2 ring-[#c9a84c]"
                    />
                    <span
                      className="absolute -bottom-1 -right-1 text-2xl bg-white p-1 rounded-full shadow-md border border-[#e9ecef]"
                      title="Espoo, Finland"
                    >
                      {FOUNDER_INFO.flag}
                    </span>
                  </div>

                  <div className="text-center sm:text-left flex-1 min-w-0">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#0a1628] text-[#c9a84c] border border-[#1a2a4a] mb-2 shadow-xs">
                      <Sparkles className="w-3 h-3 text-[#c9a84c]" />
                      <span>One Person Company (OPC)</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#212529] font-display">
                      {FOUNDER_INFO.name}
                    </h3>
                    <p className="text-sm font-bold text-[#c9a84c]">
                      {FOUNDER_INFO.role}
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[#6c757d] text-xs mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                      <span>{FOUNDER_INFO.location}</span>
                    </div>
                  </div>
                </div>

                {/* Experience & Education Ribbon */}
                <div className="p-4 rounded-2xl bg-[#f8f9fa] border border-[#e9ecef] space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs">
                    <Briefcase className="w-4 h-4 text-[#0a1628] shrink-0" />
                    <span className="font-semibold text-[#212529]">{FOUNDER_INFO.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6c757d]">
                    <GraduationCap className="w-4 h-4 text-[#c9a84c] shrink-0" />
                    <span>{FOUNDER_INFO.education}</span>
                  </div>
                </div>

                {/* Bio Narrative */}
                <p className="text-xs sm:text-sm text-[#495057] leading-relaxed mb-6">
                  {FOUNDER_INFO.bio}
                </p>

                {/* Core Specialties */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#6c757d] mb-2.5">
                    Executive Focus Areas
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {FOUNDER_INFO.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs bg-[#f8f9fa] text-[#212529] border border-[#e9ecef] font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Communication Bar */}
              <div className="p-5 bg-[#0a1628] text-white border-t border-[#1a2a4a] flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`mailto:${FOUNDER_INFO.email}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#c9a84c] hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#c9a84c]" />
                  <span>{FOUNDER_INFO.email}</span>
                </a>

                <div className="flex items-center gap-3">
                  <a
                    href={FOUNDER_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#c9a84c]" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70" />
                  </a>
                  <button
                    onClick={() => onNavigate('rfq')}
                    className="px-3.5 py-1.5 rounded-lg bg-[#c9a84c] text-[#0a1628] font-bold text-xs hover:bg-[#d4af37] transition-all cursor-pointer"
                  >
                    Direct RFQ
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: One Person Company Governance & Advantage (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="bg-[#f8f9fa] rounded-3xl p-6 sm:p-8 border border-[#e9ecef] shadow-navy">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c9a84c] mb-2">
                  <Award className="w-4 h-4 text-[#c9a84c]" />
                  <span>The One Person Company (OPC) Advantage</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold font-display text-[#212529] mb-4">
                  Why European Industrial Buyers Choose Direct Founder Stewardship
                </h4>
                <p className="text-xs sm:text-sm text-[#6c757d] leading-relaxed mb-6">
                  Traditional trading brokers hand off your engineering drawings to junior coordinators with zero technical authority.
                  In our One Person Company model, every specification, commercial term, and mill test certificate is directly governed by Binita Kausal.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FOUNDER_INFO.governanceHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 sm:p-5 rounded-2xl border border-[#e9ecef] hover:border-[#c9a84c]/50 transition-all shadow-xs"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-lg bg-[rgba(201,168,76,0.15)] text-[#c9a84c] flex items-center justify-center font-bold text-xs shrink-0">
                          0{idx + 1}
                        </div>
                        <h5 className="font-bold text-sm text-[#212529]">{item.title}</h5>
                      </div>
                      <p className="text-xs text-[#6c757d] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Founder Guarantee Quote */}
              <div className="bg-[#0a1628] text-white rounded-3xl p-6 sm:p-8 border border-[#1a2a4a] shadow-navy-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <ShieldCheck className="w-32 h-32 text-[#c9a84c]" />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c9a84c] mb-3">
                    <ShieldCheck className="w-4 h-4 text-[#c9a84c]" />
                    <span>Personal Executive Guarantee</span>
                  </div>
                  <blockquote className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-4">
                    &ldquo;In international industrial procurement, transparency and accountability are non-negotiable. 
                    As Founder &amp; CEO, I personally guarantee that every component and contract delivered to our European buyers satisfies strict Nordic precision, verified chemical composition, and full contractual transparency.&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-between border-t border-[#1a2a4a] pt-4 mt-2">
                    <div>
                      <div className="font-bold text-white text-sm">Binita Kausal</div>
                      <div className="text-xs text-[#c9a84c]">Founder &amp; CEO &bull; JK NordSourcing (OPC)</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Espoo, Finland</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sourcing Team Assurance Banner */}
          <div className="mt-16 p-8 rounded-2xl bg-[#0a1628] text-white border border-[#1a2a4a] shadow-navy-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#c9a84c] text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-[#c9a84c]" />
                <span>Direct Executive Inquiry</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Ready to review technical drawings directly with Founder &amp; CEO Binita Kausal?
              </h3>
              <p className="mt-2 text-slate-300 text-sm">
                Transmit your Bill of Materials (BOM) or RFQ directly to <strong className="text-[#d4af37]">{TARGET_SALES_EMAIL}</strong> for prompt evaluation, manufacturer audits, and binding bids.
              </p>
            </div>
            <button
              onClick={() => onNavigate('rfq')}
              className="shrink-0 px-6 py-3 rounded-xl bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#0a1628] font-bold text-sm shadow-navy transition-all cursor-pointer flex items-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#0a1628]" />
              <span>Submit RFQ to Founder</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Numerical Milestones - Deep Navy */}
      <section className="py-16 bg-[#0a1628] text-white border-t border-[#1a2a4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#c9a84c] font-display">500+</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">Verified Suppliers</div>
              <p className="text-xs text-slate-400 mt-1">Directly audited factories</p>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#c9a84c] font-display">50+</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">Countries Served</div>
              <p className="text-xs text-slate-400 mt-1">Cross-continental deliveries</p>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#c9a84c] font-display">1,000+</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">Completed Projects</div>
              <p className="text-xs text-slate-400 mt-1">Industrial batches delivered</p>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#c9a84c] font-display">98%</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">Client Satisfaction</div>
              <p className="text-xs text-slate-400 mt-1">Long-term repeat contracts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
