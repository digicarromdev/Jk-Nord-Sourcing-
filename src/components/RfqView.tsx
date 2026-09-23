import { useState, FormEvent } from 'react';
import { RfqFormData } from '../types';
import {
  TARGET_SALES_EMAIL,
  formatRfqEmailBody,
  generateRfqSubject,
  generateGmailComposeUrl,
  generateMailtoUrl
} from '../utils/rfqEmail';
import {
  FileText,
  Mail,
  Copy,
  Check,
  Download,
  ExternalLink,
  Sparkles,
  Building,
  User,
  ShieldCheck,
  DollarSign,
  Package,
  FileCheck2,
  HelpCircle
} from 'lucide-react';

interface RfqViewProps {
  onSuccess?: () => void;
}

const INITIAL_FORM_DATA: RfqFormData = {
  companyName: '',
  contactPerson: '',
  designation: '',
  email: '',
  phone: '',
  country: '',
  city: '',

  date: new Date().toISOString().split('T')[0],
  rfqNumber: 'RFQ-' + Math.floor(100000 + Math.random() * 900000),
  projectName: '',
  selectedIndustries: [],

  productDescription: '',
  materialGrade: '',
  standard: '',
  typeForm: '',
  sizeDimension: '',
  thickness: '',
  length: '',
  surfaceFinish: '',
  quantityRequired: '',
  unit: 'PCS',
  estimatedAnnualRequirement: '',
  applicationUse: '',
  targetPrice: '',

  certificates: ['ISO 9001'],
  testingRequirements: '',

  incoterm: 'CIF',
  deliveryLocation: '',
  deliveryDate: '',
  paymentPreferences: ['T/T'],
  currency: 'EUR',

  packagingRequirement: '',
  specialRequirements: '',
  attachedDocs: [],

  declarationName: '',
  declarationDesignation: '',
  signatureReference: '',
  declarationDate: new Date().toISOString().split('T')[0],
  agreedToTerms: true
};

export default function RfqView({ onSuccess }: RfqViewProps) {
  const [formData, setFormData] = useState<RfqFormData>(INITIAL_FORM_DATA);
  const [copied, setCopied] = useState(false);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);

  // Industry options
  const industryList = [
    'Pharmaceutical',
    'Oil & Gas',
    'Food & Dairy',
    'Marine & Offshore',
    'Construction & Structural',
    'Automotive & Transport',
    'Electrical & Power',
    'Heavy Machinery & MRO'
  ];

  // Cert options
  const certList = [
    'EN 10204 3.1 Mill Test',
    'EN 10204 3.2 Third Party',
    'PED 2014/68/EU',
    'ISO 9001:2015',
    'CE Marking',
    'RoHS / REACH',
    'IATF 16949'
  ];

  // Payment options
  const paymentList = ['L/C (Letter of Credit)', 'T/T (Telegraphic Transfer)', 'CAD (Cash Against Documents)', 'Net 30 Days'];

  // Documents list
  const docChecklist = [
    'Engineering Drawing (2D / 3D CAD)',
    'Technical Datasheet',
    'Sample Photographs',
    'Bill of Materials (BOM)',
    'Material Test Specifications'
  ];

  const handleInputChange = (field: keyof RfqFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxToggle = (
    field: 'selectedIndustries' | 'certificates' | 'paymentPreferences' | 'attachedDocs',
    value: string
  ) => {
    setFormData((prev) => {
      const currentList = prev[field] as string[];
      if (currentList.includes(value)) {
        return { ...prev, [field]: currentList.filter((item) => item !== value) };
      } else {
        return { ...prev, [field]: [...currentList, value] };
      }
    });
  };

  // Pre-fill demo data so buyer can test Gmail compose immediately
  const handleAutoFillSample = () => {
    setFormData({
      companyName: 'Nordic Valve Solutions Oy',
      contactPerson: 'Eero Salonen',
      designation: 'Head of Purchasing',
      email: 'eero.salonen@nordicvalves.fi',
      phone: '+358 40 827 4910',
      country: 'Finland',
      city: 'Espoo',

      date: new Date().toISOString().split('T')[0],
      rfqNumber: 'RFQ-' + Math.floor(100000 + Math.random() * 900000),
      projectName: 'Baltic Pipeline Expansion 2026',
      selectedIndustries: ['Oil & Gas', 'Marine & Offshore'],

      productDescription: 'Precision CNC Machined Flanged Ball Valves & Heavy-Wall Seamless Pipes for cryogenic marine environments.',
      materialGrade: 'SS 316L (1.4404) & Super Duplex 2507',
      standard: 'EN 10217-7 / ASTM A312 / DIN 2605',
      typeForm: 'Seamless Flanged Valve Body & Butt-Weld Fittings',
      sizeDimension: 'DN 50 (2 inch) to DN 150 (6 inch)',
      thickness: 'SCH 40S & SCH 80S',
      length: '6000 mm lengths + machined components',
      surfaceFinish: 'Electropolished Ra < 0.4 µm internal, pickled & passivated external',
      quantityRequired: '2500',
      unit: 'PCS',
      estimatedAnnualRequirement: '12,000 PCS / Year',
      applicationUse: 'Cryogenic natural gas processing terminal piping',
      targetPrice: '€48.50 / PC',

      certificates: [
        'EN 10204 3.1 Mill Test',
        'PED 2014/68/EU',
        'ISO 9001:2015'
      ],
      testingRequirements: 'Positive Material Identification (PMI 100%), Hydrostatic test at 1.5x design pressure, Dye penetrant inspection on welds, Charpy V-notch impact test at -46°C.',

      incoterm: 'DDP',
      deliveryLocation: 'Helsinki Vuosaari Port / Espoo Warehouse, Finland',
      deliveryDate: '2026-11-15',
      paymentPreferences: ['T/T (Telegraphic Transfer)', 'L/C (Letter of Credit)'],
      currency: 'EUR',

      packagingRequirement: 'Solid ISPM 15 heat-treated fumigated wooden crates with moisture barrier and plastic cap protections on flanges.',
      specialRequirements: 'Mill certificates must accompany the packing list. Samples required within 14 days before serial production batch.',
      attachedDocs: ['Engineering Drawing (2D / 3D CAD)', 'Technical Datasheet'],

      declarationName: 'Eero Salonen',
      declarationDesignation: 'Head of Purchasing',
      signatureReference: 'DIGI-CONFIRM-NVS-2026',
      declarationDate: new Date().toISOString().split('T')[0],
      agreedToTerms: true
    });
  };

  const handleCopyClipboard = () => {
    const text = formatRfqEmailBody(formData);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownloadTxt = () => {
    const text = formatRfqEmailBody(formData);
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${formData.rfqNumber || 'RFQ'}_${formData.companyName ? formData.companyName.replace(/\s+/g, '_') : 'Specification'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Direct trigger for Gmail
  const handleOpenDirectGmail = (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.companyName || !formData.email || !formData.productDescription) {
      alert('Please fill in Company Name, Email, and Product Description before sending.');
      return;
    }

    const gmailUrl = generateGmailComposeUrl(formData);
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setShowSubmissionModal(true);
    if (onSuccess) onSuccess();
  };

  const handleOpenMailto = () => {
    const mailtoUrl = generateMailtoUrl(formData);
    window.location.href = mailtoUrl;
    setShowSubmissionModal(true);
  };

  return (
    <div className="bg-[#f8f9fa] py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* RFQ Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs uppercase tracking-widest font-semibold mb-4">
            <FileText className="w-3.5 h-3.5 text-[#c9a84c]" />
            <span>Buyer Requirement Specification</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#212529] font-display">
            Submit Your RFQ
          </h1>

          <p className="mt-4 text-[#6c757d] text-base sm:text-lg leading-relaxed">
            Directly transmitted to our European sourcing team at{' '}
            <span className="font-semibold text-[#0a1628] underline decoration-[#c9a84c] decoration-2">
              {TARGET_SALES_EMAIL}
            </span>
            . Fill the form below to receive competitive factory pricing, verified certifications, and lead times.
          </p>

          {/* Quick Action Bar for Gmail and Demo */}
          <div className="mt-6 p-4 rounded-2xl bg-white border border-[#e9ecef] shadow-navy flex flex-wrap items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[rgba(201,168,76,0.1)] text-[#c9a84c] flex items-center justify-center border border-[rgba(201,168,76,0.25)] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#212529]">Direct Gmail Dispatch Enabled</h4>
                <p className="text-xs text-[#6c757d]">
                  Pre-fills all specifications directly into Gmail addressed to <strong className="text-[#0a1628]">{TARGET_SALES_EMAIL}</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleAutoFillSample}
                className="px-3 py-2 rounded-lg bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#212529] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-[#e9ecef]"
                title="Fill with sample stainless steel valve & piping RFQ data"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c9a84c]" />
                <span>Fill Sample Data</span>
              </button>

              <button
                type="button"
                onClick={handleCopyClipboard}
                className="px-3 py-2 rounded-lg bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#212529] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-[#e9ecef]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#0a1628]" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* The Main RFQ Form */}
        <form onSubmit={handleOpenDirectGmail} className="space-y-8">
          {/* 1. Buyer Information */}
          <div className="bg-white rounded-2xl border border-[#e9ecef] shadow-navy overflow-hidden">
            <div className="bg-[#0a1628] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Building className="w-5 h-5 text-[#c9a84c]" />
                <h2 className="text-base font-bold font-display uppercase tracking-wider text-white">
                  1. Buyer Information
                </h2>
              </div>
              <span className="text-xs text-slate-400">Section 1 of 7</span>
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                  Company Name <span className="text-[#c9a84c]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="e.g. Nordic Industrial Oy"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] placeholder:text-[#6c757d] bg-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                  Contact Person <span className="text-[#c9a84c]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  placeholder="e.g. Jari Heikkinen"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] placeholder:text-[#6c757d] bg-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                  Designation / Role
                </label>
                <input
                  type="text"
                  value={formData.designation}
                  onChange={(e) => handleInputChange('designation', e.target.value)}
                  placeholder="e.g. Head of Procurement / Project Lead"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] placeholder:text-[#6c757d] bg-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                  Business Email <span className="text-[#c9a84c]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="e.g. procurement@company.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] placeholder:text-[#6c757d] bg-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                  Phone / Mobile (with country code) <span className="text-[#c9a84c]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="e.g. +358 40 123 4567"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] placeholder:text-[#6c757d] bg-white outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                    Country <span className="text-[#c9a84c]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    placeholder="e.g. Finland"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] placeholder:text-[#6c757d] bg-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="e.g. Espoo / Helsinki"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] placeholder:text-[#6c757d] bg-white outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Inquiry Information */}
          <div className="bg-white rounded-2xl border border-[#e9ecef] shadow-navy overflow-hidden">
            <div className="bg-[#0a1628] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#c9a84c]" />
                <h2 className="text-base font-bold font-display uppercase tracking-wider text-white">
                  2. Inquiry &amp; Industry Information
                </h2>
              </div>
              <span className="text-xs text-slate-400">Section 2 of 7</span>
            </div>

            <div className="p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                    Inquiry Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] bg-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                    Inquiry / RFQ Reference No.
                  </label>
                  <input
                    type="text"
                    value={formData.rfqNumber}
                    onChange={(e) => handleInputChange('rfqNumber', e.target.value)}
                    placeholder="e.g. RFQ-2026-001"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] text-sm text-[#212529] bg-white font-mono outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                    Project Name (If any)
                  </label>
                  <input
                    type="text"
                    value={formData.projectName}
                    onChange={(e) => handleInputChange('projectName', e.target.value)}
                    placeholder="e.g. Factory Modernization"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] text-sm text-[#212529] bg-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-2">
                  End Use / Targeted Industry Sector (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {industryList.map((ind) => {
                    const isChecked = formData.selectedIndustries.includes(ind);
                    return (
                      <label
                        key={ind}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-[#0a1628] text-white border-[#0a1628] ring-1 ring-[#c9a84c]'
                            : 'bg-[#f8f9fa] text-[#212529] border-[#e9ecef] hover:bg-[#e9ecef]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxToggle('selectedIndustries', ind)}
                          className="rounded text-[#c9a84c] focus:ring-[#c9a84c] w-3.5 h-3.5"
                        />
                        <span className="truncate">{ind}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Product Requirement Details */}
          <div className="bg-white rounded-2xl border border-[#e9ecef] shadow-navy overflow-hidden">
            <div className="bg-[#0a1628] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Package className="w-5 h-5 text-[#c9a84c]" />
                <h2 className="text-base font-bold font-display uppercase tracking-wider text-white">
                  3. Product Requirement Details
                </h2>
              </div>
              <span className="text-xs text-slate-400">Section 3 of 7</span>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                  Product Description &amp; Technical Specifications <span className="text-[#c9a84c]">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.productDescription}
                  onChange={(e) => handleInputChange('productDescription', e.target.value)}
                  placeholder="Provide comprehensive details of the product, alloy composition, execution standard, surface requirements, and functional use..."
                  className="w-full px-4 py-3 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] placeholder:text-[#6c757d] bg-white outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                    Standard (ASTM / EN / DIN / ISO)
                  </label>
                  <input
                    type="text"
                    value={formData.standard}
                    onChange={(e) => handleInputChange('standard', e.target.value)}
                    placeholder="e.g. ASTM A240, EN 10217-7, DIN 2605"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] bg-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                    Size / Dimension
                  </label>
                  <input
                    type="text"
                    value={formData.sizeDimension}
                    onChange={(e) => handleInputChange('sizeDimension', e.target.value)}
                    placeholder="e.g. OD 60.3 mm, DN 50, 2 inch"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] text-sm text-[#212529] bg-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[#e9ecef]">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                      Quantity <span className="text-[#c9a84c]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.quantityRequired}
                      onChange={(e) => handleInputChange('quantityRequired', e.target.value)}
                      placeholder="e.g. 5000"
                      className="w-full px-3 py-2.5 rounded-xl border border-[#e9ecef] text-sm text-[#212529] bg-white font-semibold outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                      Unit
                    </label>
                    <select
                      value={formData.unit}
                      onChange={(e) => handleInputChange('unit', e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#e9ecef] text-sm text-[#212529] bg-white font-medium outline-none"
                    >
                      <option value="PCS">PCS</option>
                      <option value="KG">KG</option>
                      <option value="MT">MT (Metric Tons)</option>
                      <option value="Meters">Meters</option>
                      <option value="Sets">Sets</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                    Estimated Annual Volume
                  </label>
                  <input
                    type="text"
                    value={formData.estimatedAnnualRequirement}
                    onChange={(e) => handleInputChange('estimatedAnnualRequirement', e.target.value)}
                    placeholder="e.g. 25,000 PCS / year"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] text-sm text-[#212529] bg-white outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4. Quality & Certification */}
          <div className="bg-white rounded-2xl border border-[#e9ecef] shadow-navy overflow-hidden">
            <div className="bg-[#0a1628] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#c9a84c]" />
                <h2 className="text-base font-bold font-display uppercase tracking-wider text-white">
                  4. Quality, Inspection &amp; Certification
                </h2>
              </div>
              <span className="text-xs text-slate-400">Section 4 of 7</span>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-2">
                  Required Mill &amp; Quality Certificates
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {certList.map((cert) => {
                    const isChecked = formData.certificates.includes(cert);
                    return (
                      <label
                        key={cert}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-[#0a1628] text-white border-[#0a1628] ring-1 ring-[#c9a84c]'
                            : 'bg-[#f8f9fa] text-[#212529] border-[#e9ecef] hover:bg-[#e9ecef]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxToggle('certificates', cert)}
                          className="rounded text-[#c9a84c] focus:ring-[#c9a84c] w-3.5 h-3.5"
                        />
                        <span className="truncate">{cert}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                  Specific Testing Requirements
                </label>
                <textarea
                  rows={2}
                  value={formData.testingRequirements}
                  onChange={(e) => handleInputChange('testingRequirements', e.target.value)}
                  placeholder="e.g. Ultrasonic testing, eddy current, PMI spectro test, hydrostatic pressure test, flattening/flare test, salt spray test..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] text-sm text-[#212529] bg-white outline-none"
                />
              </div>
            </div>
          </div>

          {/* 5. Commercial Information */}
          <div className="bg-white rounded-2xl border border-[#e9ecef] shadow-navy overflow-hidden">
            <div className="bg-[#0a1628] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <DollarSign className="w-5 h-5 text-[#c9a84c]" />
                <h2 className="text-base font-bold font-display uppercase tracking-wider text-white">
                  5. Commercial Terms &amp; Logistics
                </h2>
              </div>
              <span className="text-xs text-slate-400">Section 5 of 7</span>
            </div>

            <div className="p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                    Preferred Incoterm (2020)
                  </label>
                  <select
                    value={formData.incoterm}
                    onChange={(e) => handleInputChange('incoterm', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] text-sm text-[#212529] bg-white font-semibold outline-none"
                  >
                    <option value="CIF">CIF (Cost, Insurance &amp; Freight)</option>
                    <option value="DDP">DDP (Delivered Duty Paid to Door)</option>
                    <option value="FOB">FOB (Free on Board origin port)</option>
                    <option value="DAP">DAP (Delivered at Place)</option>
                    <option value="EXW">EXW (Ex Works)</option>
                    <option value="CIP">CIP (Carriage and Insurance Paid)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                    Delivery Destination Port / City
                  </label>
                  <input
                    type="text"
                    value={formData.deliveryLocation}
                    onChange={(e) => handleInputChange('deliveryLocation', e.target.value)}
                    placeholder="e.g. Helsinki Port / Hamburg / Rotterdam"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] text-sm text-[#212529] bg-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                    Required Delivery Date
                  </label>
                  <input
                    type="date"
                    value={formData.deliveryDate}
                    onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] text-sm text-[#212529] bg-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[#e9ecef]">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-2">
                    Payment Term Preference
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {paymentList.map((pay) => {
                      const isChecked = formData.paymentPreferences.includes(pay);
                      return (
                        <label
                          key={pay}
                          className={`flex items-center gap-2 p-2 rounded-xl border text-xs font-medium cursor-pointer ${
                            isChecked
                              ? 'bg-[#0a1628] text-white border-[#0a1628] ring-1 ring-[#c9a84c]'
                              : 'bg-[#f8f9fa] text-[#212529] border-[#e9ecef] hover:bg-[#e9ecef]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCheckboxToggle('paymentPreferences', pay)}
                            className="w-3.5 h-3.5 text-[#c9a84c] focus:ring-[#c9a84c] rounded"
                          />
                          <span className="truncate">{pay}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-2">
                    Trading Currency
                  </label>
                  <div className="flex gap-3">
                    {['EUR', 'USD', 'GBP'].map((cur) => (
                      <label
                        key={cur}
                        className={`flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                          formData.currency === cur
                            ? 'bg-[#c9a84c] text-[#0a1628] border-[#c9a84c] shadow-navy'
                            : 'bg-[#f8f9fa] text-[#212529] border-[#e9ecef] hover:bg-[#e9ecef]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="currency"
                          value={cur}
                          checked={formData.currency === cur}
                          onChange={(e) => handleInputChange('currency', e.target.value)}
                          className="sr-only"
                        />
                        <span>{cur}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Packaging & Drawings Checklist */}
          <div className="bg-white rounded-2xl border border-[#e9ecef] shadow-navy overflow-hidden">
            <div className="bg-[#0a1628] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FileCheck2 className="w-5 h-5 text-[#c9a84c]" />
                <h2 className="text-base font-bold font-display uppercase tracking-wider text-white">
                  6. Packaging &amp; Technical Drawings
                </h2>
              </div>
              <span className="text-xs text-slate-400">Section 6 of 7</span>
            </div>

            <div className="p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                    Export Packaging Requirements
                  </label>
                  <input
                    type="text"
                    value={formData.packagingRequirement}
                    onChange={(e) => handleInputChange('packagingRequirement', e.target.value)}
                    placeholder="e.g. Seaworthy ISPM 15 wooden crate with end caps"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] text-sm text-[#212529] bg-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1.5">
                    Special Remarks / Instructions
                  </label>
                  <input
                    type="text"
                    value={formData.specialRequirements}
                    onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                    placeholder="e.g. Barcode labeling per carton, delivery in 2 batches"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e9ecef] text-sm text-[#212529] bg-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-2">
                  Technical Drawings &amp; Supporting Files Available for Email Attachment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {docChecklist.map((doc) => {
                    const isChecked = formData.attachedDocs.includes(doc);
                    return (
                      <label
                        key={doc}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium cursor-pointer ${
                          isChecked
                            ? 'bg-[#0a1628] text-white border-[#0a1628] ring-1 ring-[#c9a84c]'
                            : 'bg-[#f8f9fa] text-[#212529] border-[#e9ecef] hover:bg-[#e9ecef]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxToggle('attachedDocs', doc)}
                          className="w-3.5 h-3.5 text-[#c9a84c] focus:ring-[#c9a84c] rounded"
                        />
                        <span className="truncate">{doc}</span>
                      </label>
                    );
                  })}
                </div>
                <p className="text-xs text-[#6c757d] mt-2 flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-[#c9a84c]" />
                  <span>
                    When you click "Send to Gmail", you can drag &amp; drop your CAD or PDF drawings directly onto the Gmail compose window.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* 7. Declaration & Sign-off */}
          <div className="bg-white rounded-2xl border border-[#e9ecef] shadow-navy overflow-hidden">
            <div className="bg-[#0a1628] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <User className="w-5 h-5 text-[#c9a84c]" />
                <h2 className="text-base font-bold font-display uppercase tracking-wider text-white">
                  7. Buyer Declaration &amp; Sign-off
                </h2>
              </div>
              <span className="text-xs text-slate-400">Section 7 of 7</span>
            </div>

            <div className="p-6 space-y-4">
              <div className="p-4 rounded-xl bg-[#f8f9fa] border border-[#e9ecef] text-xs text-[#6c757d] leading-relaxed">
                <strong className="text-[#0a1628] font-semibold block mb-1">Confirmation &amp; Confidentiality:</strong>
                We hereby confirm that the above specifications represent a genuine sourcing inquiry. JK NordSourcing treats all
                provided drawings and commercial data with strict Nordic business confidentiality and non-disclosure governance.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1">
                    Authorized Signatory Name
                  </label>
                  <input
                    type="text"
                    value={formData.declarationName}
                    onChange={(e) => handleInputChange('declarationName', e.target.value)}
                    placeholder="e.g. Jari Heikkinen"
                    className="w-full px-3 py-2 rounded-xl border border-[#e9ecef] text-sm text-[#212529] bg-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1">
                    Signatory Designation
                  </label>
                  <input
                    type="text"
                    value={formData.declarationDesignation}
                    onChange={(e) => handleInputChange('declarationDesignation', e.target.value)}
                    placeholder="e.g. Procurement Director"
                    className="w-full px-3 py-2 rounded-xl border border-[#e9ecef] text-sm text-[#212529] bg-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#212529] mb-1">
                    Digital Verification Stamp / Ref
                  </label>
                  <input
                    type="text"
                    value={formData.signatureReference}
                    onChange={(e) => handleInputChange('signatureReference', e.target.value)}
                    placeholder="e.g. SIGNED-NORDIC-2026"
                    className="w-full px-3 py-2 rounded-xl border border-[#e9ecef] text-sm text-[#212529] bg-white font-mono outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Master Submit Actions Card */}
          <div className="bg-[#0a1628] rounded-2xl p-6 sm:p-8 text-white border border-[#1a2a4a] shadow-navy-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1a2a4a]">
              <div>
                <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest block mb-1">
                  Ready for Direct Dispatch
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Send RFQ to info@jknordsourcing.com
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Choose your preferred method below to transmit this requirement to our European procurement desk.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyClipboard}
                  className="px-3.5 py-2 rounded-xl bg-[#1a2a4a] hover:bg-[#243556] text-slate-200 text-xs font-medium border border-[#243556] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#c9a84c]" />}
                  <span>{copied ? 'Copied' : 'Copy All Text'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadTxt}
                  className="px-3.5 py-2 rounded-xl bg-[#1a2a4a] hover:bg-[#243556] text-slate-200 text-xs font-medium border border-[#243556] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#c9a84c]" />
                  <span>Download .txt</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* PRIMARY ACTION: DIRECT GMAIL COMPOSE (Hidden on mobile) */}
              <button
                type="submit"
                id="submit-rfq-gmail-btn"
                className="hidden sm:flex w-full py-4 px-6 rounded-xl bg-[#c9a84c] hover:bg-[#d4af37] active:bg-[#b8942e] text-[#0a1628] font-bold text-base shadow-navy hover:shadow-navy-lg items-center justify-center gap-3 transition-all cursor-pointer group active:scale-[0.99]"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0a1628] text-[#c9a84c] flex items-center justify-center font-black text-sm shadow">
                  M
                </div>
                <div className="text-left">
                  <div className="text-sm font-black tracking-tight flex items-center gap-1.5">
                    <span>Direct Send via Gmail</span>
                    <ExternalLink className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-[11px] font-normal text-[#0a1628]/80">
                    Opens Gmail with info@jknordsourcing.com pre-filled
                  </div>
                </div>
              </button>

              {/* SECONDARY ACTION: DEFAULT MAIL CLIENT */}
              <button
                type="button"
                id="submit-rfq-mailto-btn"
                onClick={handleOpenMailto}
                className="w-full py-4 px-6 rounded-xl bg-[#1a2a4a] hover:bg-[#243556] text-white font-bold text-base border border-[#243556] flex items-center justify-center gap-3 transition-all cursor-pointer hover:border-[#c9a84c]/50"
              >
                <Mail className="w-5 h-5 text-[#c9a84c]" />
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-100">
                    Send with Other Email App
                  </div>
                  <div className="text-[11px] font-normal text-slate-400">
                    Outlook, Apple Mail, or Thunderbird
                  </div>
                </div>
              </button>
            </div>

            <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c9a84c]" />
              <span>
                Guaranteed response within 24 business hours from an assigned Nordic sourcing specialist.
              </span>
            </div>
          </div>
        </form>
      </div>

      {/* Submission Confirmation Modal */}
      {showSubmissionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a1628]/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-navy-lg border border-[#e9ecef] text-[#212529] space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-8 h-8" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold font-display text-[#212529]">
                RFQ Dispatched!
              </h3>
              <p className="text-sm text-[#6c757d]">
                Your RFQ for <strong className="text-[#0a1628]">{formData.companyName || 'your company'}</strong> has been generated
                for <strong className="text-[#0a1628]">{TARGET_SALES_EMAIL}</strong>.
              </p>
            </div>

            <div className="bg-[#f8f9fa] p-4 rounded-xl border border-[#e9ecef] text-xs text-[#212529] space-y-2">
              <div className="flex justify-between">
                <span className="text-[#6c757d]">Subject:</span>
                <span className="font-semibold text-[#0a1628] truncate max-w-[280px]">
                  {generateRfqSubject(formData)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6c757d]">Destination:</span>
                <span className="font-semibold text-[#0a1628]">{TARGET_SALES_EMAIL}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6c757d]">RFQ Ref:</span>
                <span className="font-mono text-[#0a1628] font-semibold">{formData.rfqNumber}</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={generateGmailComposeUrl(formData)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#c9a84c] hover:bg-[#d4af37] text-[#0a1628] font-bold text-sm flex items-center justify-center gap-2 shadow-navy cursor-pointer transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Gmail Again</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="flex gap-2">
                <button
                  onClick={handleCopyClipboard}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#212529] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#e9ecef]"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                </button>

                <button
                  onClick={handleDownloadTxt}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#212529] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#e9ecef]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .txt File</span>
                </button>
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => setShowSubmissionModal(false)}
                className="text-xs font-semibold text-[#6c757d] hover:text-[#0a1628] transition-colors cursor-pointer"
              >
                Close &amp; Return to Website
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
