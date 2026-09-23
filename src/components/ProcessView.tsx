import { PageId } from '../types';
import { PROCESS_STEPS } from '../data/services';
import {
  FileSpreadsheet,
  ArrowRight,
  ShieldCheck,
  Workflow
} from 'lucide-react';
import { TARGET_SALES_EMAIL } from '../utils/rfqEmail';

interface ProcessViewProps {
  onNavigate: (page: PageId) => void;
}

export default function ProcessView({ onNavigate }: ProcessViewProps) {
  return (
    <div className="bg-white">
      {/* Header - Deep Navy Background */}
      <section className="bg-gradient-to-b from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 lg:py-24 border-b border-[#1a2a4a] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs uppercase tracking-widest font-semibold mb-6">
            <Workflow className="w-3.5 h-3.5 text-[#c9a84c]" />
            <span>Structured Methodology</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white max-w-3xl mx-auto leading-tight">
            Transparent &amp; Structured <br />
            <span className="text-[#c9a84c]">8-Step Sourcing Process</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            From preliminary drawings to final door-to-door delivery, we enforce transparency, quality assurance,
            and complete risk mitigation at each milestone.
          </p>
        </div>
      </section>

      {/* Timeline Section - Pure White with Off-White Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-2 border-[#c9a84c]/30 ml-4 sm:ml-8 space-y-12 pb-8">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="relative pl-6 sm:pl-10 group">
                {/* Step Number Circle */}
                <div className="absolute -left-[19px] sm:-left-[21px] top-1.5 w-10 h-10 rounded-full bg-[#0a1628] border-2 border-[#c9a84c] flex items-center justify-center text-white font-bold text-xs shadow-navy group-hover:bg-[#c9a84c] group-hover:text-[#0a1628] transition-colors">
                  {item.step}
                </div>

                <div className="bg-[#f8f9fa] p-6 sm:p-8 rounded-2xl border border-[#e9ecef] hover:border-[#c9a84c]/50 shadow-navy hover:shadow-navy-lg transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#c9a84c]">
                      Phase {item.step}
                    </span>
                    <span className="text-xs text-[#6c757d] font-medium">Nordic Governance</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#212529] font-display mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#212529] mb-2 leading-relaxed">
                    {item.summary}
                  </p>

                  <p className="text-xs text-[#6c757d] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sourcing Guarantee Footer - Deep Navy Card */}
          <div className="mt-16 p-8 rounded-2xl bg-[#0a1628] text-white border border-[#1a2a4a] shadow-navy-lg text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[rgba(201,168,76,0.15)] text-[#c9a84c] flex items-center justify-center mx-auto border border-[rgba(201,168,76,0.3)]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              From Supplier Search to Successful Delivery — We Support Every Step
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Directly submit your drawings or product requirements to <span className="text-[#d4af37] font-semibold">{TARGET_SALES_EMAIL}</span>.
              We will prepare an initial sourcing feasibility report and supplier quotation comparison.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('rfq')}
                className="px-6 py-3 rounded-xl bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#0a1628] font-bold text-sm shadow-navy transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#0a1628]" />
                <span>Submit Your RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
