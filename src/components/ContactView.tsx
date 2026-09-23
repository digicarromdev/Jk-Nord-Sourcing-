import { useState, FormEvent } from 'react';
import { PageId, ContactFormData } from '../types';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  CheckCircle2,
  FileSpreadsheet,
  MessageSquare,
  Building,
  ExternalLink
} from 'lucide-react';
import { TARGET_SALES_EMAIL, FINLAND_PHONE, INDIA_PHONE } from '../utils/rfqEmail';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
}

export default function ContactView({ onNavigate }: ContactViewProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: 'Product Sourcing Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastMethod, setLastMethod] = useState<'gmail' | 'mailto' | null>(null);

  const buildEmailContent = () => {
    const subject = `[Contact Inquiry] ${formData.companyName ? formData.companyName + ' - ' : ''}${formData.subject}`;
    const body = `JK NordSourcing - Direct Contact Inquiry
========================================

Sender Information:
• Contact Name: ${formData.fullName || 'Not specified'}
• Company: ${formData.companyName || 'Not specified'}
• Business Email: ${formData.email || 'Not specified'}
• Phone Number: ${formData.phone || 'Not specified'}
• Topic: ${formData.subject}

Message / Sourcing Requirements:
----------------------------------------
${formData.message}

========================================
Transmitted via JK NordSourcing Contact Desk (https://jknordsourcing.com)
European Desk: ${TARGET_SALES_EMAIL} | Espoo, Finland`;

    return { subject, body };
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      handleOpenMailto();
    } else {
      handleDirectGmail();
    }
  };

  const handleDirectGmail = (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      return;
    }
    const { subject, body } = buildEmailContent();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TARGET_SALES_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setLastMethod('gmail');
  };

  const handleOpenMailto = () => {
    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Please fill in your Name, Email, and Message before sending.');
      return;
    }
    const { subject, body } = buildEmailContent();
    const mailtoUrl = `mailto:${encodeURIComponent(TARGET_SALES_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setLastMethod('mailto');
  };

  return (
    <div className="bg-white">
      {/* Header - Deep Navy Background */}
      <section className="bg-gradient-to-b from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 lg:py-24 border-b border-[#1a2a4a] text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs uppercase tracking-widest font-semibold mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-[#c9a84c]" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white max-w-3xl mx-auto leading-tight">
            Contact <span className="text-[#c9a84c]">JK NordSourcing</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            We are always open to connect, evaluate your technical requirements, and create long-term value for your enterprise.
          </p>
        </div>
      </section>

      {/* Main Contact Grid - Pure White */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#212529] font-display mb-3">
                  Get In Touch
                </h2>
                <p className="text-[#6c757d] text-sm leading-relaxed">
                  Direct inquiries for European sourcing, supplier qualification audits, metallurgy specifications,
                  or project-based procurement.
                </p>
              </div>

              {/* Office Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#f8f9fa] border border-[#e9ecef] flex items-start gap-4 shadow-navy">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center shrink-0 border border-[rgba(201,168,76,0.25)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c9a84c]">European Headquarters</span>
                    <h4 className="font-bold text-[#212529] text-base">Espoo, Finland</h4>
                    <p className="text-xs text-[#6c757d] mt-0.5">Serving clients across Europe &bull; Nordic Governance</p>
                    <div className="mt-2 text-xs text-[#212529]">
                      <strong>Phone: </strong>
                      <a href={`tel:${FINLAND_PHONE.replace(/\s+/g, '')}`} className="text-[#0a1628] hover:text-[#c9a84c] font-medium">
                        {FINLAND_PHONE}
                      </a>
                      <span className="text-[#6c757d] ml-1">(Business / WhatsApp)</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#f8f9fa] border border-[#e9ecef] flex items-start gap-4 shadow-navy">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center shrink-0 border border-[rgba(201,168,76,0.25)]">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c9a84c]">Sourcing &amp; Quality Hub</span>
                    <h4 className="font-bold text-[#212529] text-base">Mumbai &amp; Delhi, India</h4>
                    <p className="text-xs text-[#6c757d] mt-0.5">Direct on-site factory audits &amp; pre-shipment inspections</p>
                    <div className="mt-2 text-xs text-[#212529]">
                      <strong>Phone: </strong>
                      <a href={`tel:${INDIA_PHONE.replace(/\s+/g, '')}`} className="text-[#0a1628] hover:text-[#c9a84c] font-medium">
                        {INDIA_PHONE}
                      </a>
                      <span className="text-[#6c757d] ml-1">(Business / WhatsApp)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Channels - Deep Navy Card */}
              <div className="p-5 rounded-2xl bg-[#0a1628] text-white border border-[#1a2a4a] shadow-navy space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#c9a84c] shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400">Direct Sales &amp; RFQ Desk</div>
                    <a href={`mailto:${TARGET_SALES_EMAIL}`} className="text-sm font-bold text-[#c9a84c] hover:underline">
                      {TARGET_SALES_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#1a2a4a]">
                  <Globe className="w-5 h-5 text-[#c9a84c] shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400">Official Web Domain</div>
                    <span className="text-sm font-semibold text-slate-200">
                      www.jknordsourcing.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Formal RFQ Prompt */}
              <div className="p-5 rounded-2xl bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.3)] text-[#212529]">
                <h4 className="text-sm font-bold text-[#212529] mb-1">Have technical drawings or an RFQ?</h4>
                <p className="text-xs text-[#6c757d] mb-3">
                  For formal inquiries with quantity, alloy grades, and Incoterm preferences, please use our comprehensive RFQ form.
                </p>
                <button
                  onClick={() => onNavigate('rfq')}
                  className="w-full py-2.5 rounded-xl bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#0a1628] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-navy transition-all"
                >
                  <FileSpreadsheet className="w-4 h-4 text-[#0a1628]" />
                  <span>Go to Submit RFQ Page</span>
                </button>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-[#f8f9fa] p-8 sm:p-10 rounded-3xl border border-[#e9ecef] shadow-navy">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#212529] font-display">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-[#6c757d] mt-1">
                  Transmits directly to our sales desk at <strong className="text-[#0a1628]">{TARGET_SALES_EMAIL}</strong>.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block mb-0.5">
                      {lastMethod === 'gmail' ? 'Message Opened in Gmail!' : 'Message Opened in Your Email App!'}
                    </strong>
                    <span>
                      {lastMethod === 'gmail'
                        ? `Your message has been pre-filled in Gmail addressed to ${TARGET_SALES_EMAIL}. Simply click 'Send' in your Gmail compose tab.`
                        : `Your default email app (Outlook, Apple Mail, or Thunderbird) has been launched with your message pre-filled to ${TARGET_SALES_EMAIL}.`}
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1">
                      Full Name <span className="text-[#c9a84c]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Mikko Virta"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Nordic Valve Group"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] bg-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1">
                      Business Email <span className="text-[#c9a84c]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. m.virta@company.fi"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1">
                      Phone Number (with country code)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +358 40 555 1234"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] bg-white outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1">
                    Subject / Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] bg-white font-medium outline-none"
                  >
                    <option value="Product Sourcing Inquiry">Product Sourcing Inquiry</option>
                    <option value="Manufacturer Verification & Factory Audit">Manufacturer Verification &amp; Factory Audit</option>
                    <option value="Quality Inspection (EN 10204 3.1)">Quality Inspection (EN 10204 3.1)</option>
                    <option value="Supply Chain & Freight Coordination">Supply Chain &amp; Freight Coordination</option>
                    <option value="General Partnership Inquiry">General Partnership Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1">
                    Message Details <span className="text-[#c9a84c]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the products, quantities, or manufacturing challenges you would like assistance with..."
                    className="w-full px-4 py-3 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] bg-white outline-none"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
                    {/* PRIMARY ACTION: DIRECT GMAIL (Visible only on desktop screens) */}
                    <button
                      type="button"
                      id="contact-submit-gmail-btn"
                      onClick={handleDirectGmail}
                      className="hidden lg:flex w-full py-3.5 px-4 rounded-xl bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#0a1628] font-bold text-sm shadow-navy hover:shadow-navy-lg items-center justify-center gap-3 transition-all cursor-pointer group active:scale-[0.99]"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#0a1628] text-[#c9a84c] flex items-center justify-center font-black text-sm shadow shrink-0">
                        M
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-black tracking-tight flex items-center gap-1.5">
                          <span>Send via Gmail</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                        <div className="text-[11px] font-normal text-[#0a1628]/80 leading-tight">
                          Direct in web Gmail
                        </div>
                      </div>
                    </button>

                    {/* SECONDARY ACTION: OTHER EMAIL CLIENTS (Full width on mobile/tablet) */}
                    <button
                      type="submit"
                      id="contact-submit-other-mail-btn"
                      onClick={handleOpenMailto}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#0a1628] hover:bg-[#1a2a4a] active:bg-[#070f1c] text-white font-bold text-sm border border-[#1a2a4a] hover:border-[#c9a84c]/50 flex items-center justify-center gap-3 transition-all cursor-pointer group active:scale-[0.99]"
                    >
                      <Mail className="w-5 h-5 text-[#c9a84c] shrink-0" />
                      <div className="text-left">
                        <div className="text-sm font-bold text-slate-100">
                          Send with Other Email App
                        </div>
                        <div className="text-[11px] font-normal text-slate-400 leading-tight">
                          Outlook, Apple Mail, or Thunderbird
                        </div>
                      </div>
                    </button>
                  </div>

                  <p className="text-center text-xs text-[#6c757d] pt-1">
                    Pre-addressed to <a href={`mailto:${TARGET_SALES_EMAIL}`} className="text-[#0a1628] font-semibold underline hover:text-[#c9a84c]">{TARGET_SALES_EMAIL}</a> with automated Nordic desk routing
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
