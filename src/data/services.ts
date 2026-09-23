export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  deliverables: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'supplier-id',
    iconName: 'Search',
    title: 'Global Supplier Identification',
    shortDesc: 'Finding the right manufacturers that match your requirements across global markets.',
    fullDesc: 'We identify vetted manufacturers with the exact tooling, capacity, and certifications needed for your specifications, filtering out intermediaries and broker markups.',
    benefits: ['Direct manufacturer access', 'No middleman inflated markups', 'Verified machinery and tooling'],
    deliverables: ['Comparative Supplier Dossier', 'Capability Matrix', 'Factory Audit Scorecard']
  },
  {
    id: 'manufacturer-verification',
    iconName: 'ShieldCheck',
    title: 'Manufacturer Verification',
    shortDesc: 'Checking certifications, capacity, capabilities and reliability of suppliers.',
    fullDesc: 'Rigorous vetting covering business registration, credit standing, ISO/PED/CE credentials, financial stability, and historical delivery track record.',
    benefits: ['Risk elimination before contracting', 'Independent credential cross-checking', 'Nordic governance standard'],
    deliverables: ['Due Diligence Report', 'Authenticity Checks on ISO/CE/PED Certificates']
  },
  {
    id: 'factory-assessment',
    iconName: 'Building2',
    title: 'Factory Assessment & On-Site Audits',
    shortDesc: 'On-site visits and evaluation of production facilities, labor standards, and processes.',
    fullDesc: 'Our on-the-ground technical engineers physically inspect production lines, calibration equipment, workforce safety, and raw material storage before any order is placed.',
    benefits: ['Physical proof of operational capability', 'Safety & environmental compliance', 'Quality control checkpoint analysis'],
    deliverables: ['Comprehensive Photographic Audit Report', 'Machinery Calibration Logs', 'CAPA Plan']
  },
  {
    id: 'product-sourcing',
    iconName: 'PackageCheck',
    title: 'Product Sourcing & Prototyping',
    shortDesc: 'End-to-end sourcing of a wide range of industrial and engineering products.',
    fullDesc: 'From standard commodity materials to custom precision-machined components according to your CAD drawings and metallurgic specifications.',
    benefits: ['Custom tooling management', 'Fast sample turnaround', 'Tight tolerance assurance'],
    deliverables: ['Pre-Production Golden Sample', 'Dimensional Inspection Report (CMM)']
  },
  {
    id: 'rfq-negotiation',
    iconName: 'CircleDollarSign',
    title: 'RFQ & Price Negotiation',
    shortDesc: 'Managing RFQs and negotiating the best possible commercial and payment terms.',
    fullDesc: 'We break down bill of materials (BOM), raw material index costs, and processing margins to negotiate optimal volume discounts without sacrificing material integrity.',
    benefits: ['Cost transparency', 'Favorable credit terms (L/C, T/T)', 'Currency risk shielding in EUR/USD'],
    deliverables: ['Detailed Cost Breakdown Analysis', 'Multi-Supplier Bidding Sheet', 'Binding Commercial Agreement']
  },
  {
    id: 'quality-inspection',
    iconName: 'ClipboardCheck',
    title: 'Quality Inspection Coordination',
    shortDesc: 'Arranging inspections to ensure quality and compliance at every production stage.',
    fullDesc: 'Pre-production inspections (PPI), during production inspections (DUPRO), and pre-shipment inspections (PSI) aligned with AQL standards and EN 10204 3.1 certification.',
    benefits: ['Zero defective batch delivery', 'EN 10204 3.1 / 3.2 compliance', 'Chemical & mechanical testing verification'],
    deliverables: ['Third-Party Lab Test Reports', 'PSI Certificate of Acceptance', 'Batch Traceability Sheets']
  },
  {
    id: 'export-docs',
    iconName: 'FileText',
    title: 'Export Documentation Support',
    shortDesc: 'Supporting all required export documents, customs classifications, and certificates.',
    fullDesc: 'Complete preparation of Bills of Lading, Commercial Invoices, Packing Lists, Certificates of Origin, EUR.1, and customs HS code compliance.',
    benefits: ['Smooth EU border customs clearance', 'Zero demurrage or port delay costs', 'Preferential tariff utilization'],
    deliverables: ['Customs Clearance Package', 'Certificate of Origin', 'Verified Packing Specification']
  },
  {
    id: 'supply-chain',
    iconName: 'Truck',
    title: 'Supply Chain Coordination',
    shortDesc: 'Coordinating production schedules, container loading, and multimodal delivery to your door.',
    fullDesc: 'End-to-end logistics coordination by ocean (FCL/LCL), air freight, and European inland trucking directly to your central distribution warehouse or manufacturing plant.',
    benefits: ['Guaranteed Incoterms 2020 execution (DDP/DAP/CIF)', 'Real-time transit tracking', 'Cargo insurance coverage'],
    deliverables: ['Multimodal Waybill / Bill of Lading', 'Live Milestone Tracking Updates', 'Delivery Proof of Acceptance']
  }
];

export const INDUSTRIES = [
  {
    icon: 'Layers',
    title: 'Stainless Steel & Metal',
    desc: 'Pipes, seamless tubes, forged fittings, flanges, fasteners (A2/A4), sheets, coils, and specialty alloys.',
    popularItems: ['ASTM A312 / A240', 'Duplex & Super Duplex', 'EN 1092-1 Flanges']
  },
  {
    icon: 'Cog',
    title: 'Industrial Machinery',
    desc: 'Processing equipment, precision gearboxes, pumps, valves, hydraulic cylinders, and replacement parts.',
    popularItems: ['Hydraulic Valves', 'CNC Machine Components', 'Custom Gear Sets']
  },
  {
    icon: 'Building',
    title: 'Construction Materials',
    desc: 'Structural steel fabrications, scaffolding systems, architectural hardware, rebars, and fastening anchors.',
    popularItems: ['EN 1090 Structural Steel', 'High-Tensile Fasteners', 'Pre-Fab Anchors']
  },
  {
    icon: 'Compass',
    title: 'Engineering Components',
    desc: 'Precision turned parts, CNC milling, investment castings, metal stampings, and bespoke assemblies.',
    popularItems: ['CMM-Inspected Parts', 'Tight Tolerance (±0.01mm)', 'Custom Tooling']
  },
  {
    icon: 'Car',
    title: 'Automotive Parts',
    desc: 'OEM & aftermarket automotive parts, chassis components, stamped brackets, and engine sub-assemblies.',
    popularItems: ['IATF 16949 Certified', 'Suspension Components', 'Die-Cast Aluminum']
  },
  {
    icon: 'Zap',
    title: 'Electrical & Automation',
    desc: 'Industrial cables, junction boxes, switchgear parts, copper busbars, and explosion-proof enclosures.',
    popularItems: ['CE / IEC Standards', 'Low & Medium Voltage', 'Control Cabinets']
  },
  {
    icon: 'Box',
    title: 'Packaging Solutions',
    desc: 'Export-grade pallets, heavy-duty wooden crates, VCI anti-corrosion films, strapping, and custom packaging.',
    popularItems: ['ISPM 15 Heat-Treated', 'Moisture-Barrier Bags', 'Eco-Recyclable Boxes']
  },
  {
    icon: 'Wrench',
    title: 'General Industrial & MRO',
    desc: 'Maintenance, repair, and operational consumables, industrial tooling, safety PPE, and consumables.',
    popularItems: ['B2B Bulk Consumables', 'Standardized Tooling', 'High-Volume MRO']
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Requirement Discussion',
    summary: 'Detailed consultation to map technical drawings, volume targets, tolerances, and quality criteria.',
    detail: 'We evaluate your exact technical specifications, CAD drawings, material grades (e.g. 304, 316L, 1.4404), and delivery deadlines.'
  },
  {
    step: '02',
    title: 'Global Supplier Search',
    summary: 'Shortlisting certified manufacturers with optimal production lines from our vetted supplier database.',
    detail: 'We compare raw material sourcing capabilities, monthly plant capacity, and historical delivery records across trusted facilities.'
  },
  {
    step: '03',
    title: 'Manufacturer Verification',
    summary: 'Rigorous vetting of certifications (ISO, PED, CE, IATF), creditworthiness, and factory audits.',
    detail: 'We review mill certificates, quality management frameworks, and execute on-site verification audits to ensure capability.'
  },
  {
    step: '04',
    title: 'Quotation Comparison',
    summary: 'Direct factory pricing negotiation and transparent commercial comparison for best ROI.',
    detail: 'Transparent line-item bids with clear currency hedging, tooling breakdown, Incoterms, and payment terms.'
  },
  {
    step: '05',
    title: 'Sample Evaluation',
    summary: 'Prototyping, pre-production golden samples, and certified lab analysis before serial run.',
    detail: 'Physical samples sent to you with full CMM dimensional reports and metallurgical chemical test certificates.'
  },
  {
    step: '06',
    title: 'Quality Inspection',
    summary: 'AQL 2.5 / 1.0 inspections during and after production with EN 10204 3.1 certificate validation.',
    detail: 'Comprehensive photographic inspection reports, dimensional checks, coating thickness tests, and packaging verification.'
  },
  {
    step: '07',
    title: 'Order Management',
    summary: 'Dedicated project managers tracking production milestones, raw material flow, and lead times.',
    detail: 'Weekly progress reports with photos and video walkthroughs of your batch in progress.'
  },
  {
    step: '08',
    title: 'Logistics & Door Delivery',
    summary: 'Seamless customs documentation, shipping coordination, and reliable door delivery in Europe.',
    detail: 'Door-to-door delivery with customs clearance, sea/air shipping, and insured cargo protection.'
  }
];
