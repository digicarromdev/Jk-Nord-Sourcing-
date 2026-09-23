import { RfqFormData } from '../types';

export const TARGET_SALES_EMAIL = 'info@jknordsourcing.com';
export const GENERAL_INFO_EMAIL = 'info@jknordsourcing.com';
export const FINLAND_PHONE = '+358 46 665 0787';
export const INDIA_PHONE = '+91 80000 83352';

export function formatRfqEmailBody(data: RfqFormData): string {
  const industries = data.selectedIndustries.length > 0 ? data.selectedIndustries.join(', ') : 'Not specified';
  const certs = data.certificates.length > 0 ? data.certificates.join(', ') : 'Standard commercial certificates';
  const payments = data.paymentPreferences.length > 0 ? data.paymentPreferences.join(', ') : 'To be discussed';
  const docs = data.attachedDocs.length > 0 ? data.attachedDocs.join(', ') : 'Will send upon request';

  return `===============================================================
BUYER REQUIREMENT SPECIFICATION (RFQ)
Recipient: ${TARGET_SALES_EMAIL}
JK NordSourcing | European Sourcing & Procurement
===============================================================

1. BUYER INFORMATION
---------------------------------------------------------------
* Company Name:      ${data.companyName || 'N/A'}
* Contact Person:    ${data.contactPerson || 'N/A'}
* Designation/Role:  ${data.designation || 'N/A'}
* Buyer Email:       ${data.email || 'N/A'}
* Phone / WhatsApp:  ${data.phone || 'N/A'}
* Country:           ${data.country || 'N/A'}
* City / Region:     ${data.city || 'N/A'}

2. INQUIRY INFORMATION
---------------------------------------------------------------
* Date:              ${data.date || new Date().toISOString().split('T')[0]}
* Inquiry / RFQ No.: ${data.rfqNumber || 'RFQ-' + Date.now().toString().slice(-6)}
* Project Name:      ${data.projectName || 'General Procurement'}
* Target Industries: ${industries}

3. PRODUCT REQUIREMENT SPECIFICATIONS
---------------------------------------------------------------
* Product Desc:      ${data.productDescription || 'N/A'}
* Material Grade:    ${data.materialGrade || 'Standard'}
* Standards:         ${data.standard || 'ASTM / EN / DIN'}
* Form / Type:       ${data.typeForm || 'Standard'}
* Size / Dimension:  ${data.sizeDimension || 'As per specification'}
* Thickness:         ${data.thickness || 'N/A'}
* Length:            ${data.length || 'N/A'}
* Surface Finish:    ${data.surfaceFinish || 'Mill standard'}
* Quantity Required: ${data.quantityRequired || 'N/A'} ${data.unit || 'PCS'}
* Annual Volume:     ${data.estimatedAnnualRequirement || 'Not specified'}
* Application / Use: ${data.applicationUse || 'Industrial engineering'}
* Target Price:      ${data.targetPrice || 'Competitive market price'}

4. QUALITY, CERTIFICATIONS & TESTING
---------------------------------------------------------------
* Required Certs:    ${certs}
* Testing Reqs:      ${data.testingRequirements || 'Standard manufacturer mill test inspection'}

5. COMMERCIAL & LOGISTICS
---------------------------------------------------------------
* Preferred Incoterm:${data.incoterm || 'CIF / DDP'}
* Destination Port:  ${data.deliveryLocation || 'European Port / Warehouse'}
* Required By Date:  ${data.deliveryDate || 'Earliest available'}
* Payment Terms:     ${payments}
* Currency:          ${data.currency || 'EUR'}

6. ADDITIONAL INSTRUCTIONS & DOCUMENTS
---------------------------------------------------------------
* Packaging Specs:   ${data.packagingRequirement || 'Export seaworthy pallet packaging'}
* Comments / Notes:  ${data.specialRequirements || 'Please provide formal quotation with lead time.'}
* Available Docs:    ${docs}

7. DECLARATION & AUTHORIZATION
---------------------------------------------------------------
* Declarant:         ${data.declarationName || data.contactPerson || 'Authorized Buyer'}
* Title:             ${data.declarationDesignation || data.designation || 'Procurement Officer'}
* Signature Ref:     ${data.signatureReference || 'Digital Verification'}
* Date:              ${data.declarationDate || new Date().toISOString().split('T')[0]}

===============================================================
Sent via JK NordSourcing RFQ Portal
Portal URL: https://www.jknordsourcing.com
===============================================================`;
}

export function generateRfqSubject(data: RfqFormData): string {
  const company = data.companyName ? data.companyName.trim() : 'New Buyer';
  const prod = data.productDescription ? data.productDescription.slice(0, 40).trim() : 'Industrial Sourcing Inquiry';
  const qty = data.quantityRequired ? ` - ${data.quantityRequired} ${data.unit || ''}` : '';
  return `[RFQ Submission] ${company}: ${prod}${qty}`;
}

export function generateGmailComposeUrl(data: RfqFormData): string {
  const subject = generateRfqSubject(data);
  const body = formatRfqEmailBody(data);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TARGET_SALES_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function generateMailtoUrl(data: RfqFormData): string {
  const subject = generateRfqSubject(data);
  const body = formatRfqEmailBody(data);
  return `mailto:${TARGET_SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
