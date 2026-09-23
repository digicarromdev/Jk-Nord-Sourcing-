export type PageId =
  | 'home'
  | 'who'
  | 'about'
  | 'services'
  | 'process'
  | 'contact'
  | 'rfq';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Executive Leadership' | 'Strategic Sourcing' | 'Quality & Auditing' | 'European Logistics & Compliance';
  location: string;
  flag: string;
  experience: string;
  education: string;
  bio: string;
  specialties: string[];
  email: string;
  phone?: string;
  linkedinUrl?: string;
  avatarUrl: string;
}

export interface RfqFormData {
  // Buyer info
  companyName: string;
  contactPerson: string;
  designation: string;
  email: string;
  phone: string;
  country: string;
  city: string;

  // Inquiry info
  date: string;
  rfqNumber: string;
  projectName: string;
  selectedIndustries: string[];

  // Product Requirement
  productDescription: string;
  materialGrade: string;
  standard: string;
  typeForm: string;
  sizeDimension: string;
  thickness: string;
  length: string;
  surfaceFinish: string;
  quantityRequired: string;
  unit: string;
  estimatedAnnualRequirement: string;
  applicationUse: string;
  targetPrice: string;

  // Quality & Certification
  certificates: string[];
  testingRequirements: string;

  // Commercial Info
  incoterm: string;
  deliveryLocation: string;
  deliveryDate: string;
  paymentPreferences: string[];
  currency: string;

  // Additional
  packagingRequirement: string;
  specialRequirements: string;
  attachedDocs: string[];

  // Declaration
  declarationName: string;
  declarationDesignation: string;
  signatureReference: string;
  declarationDate: string;
  agreedToTerms: boolean;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
