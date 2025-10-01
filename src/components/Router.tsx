import { useState, createContext, useContext, ReactNode } from 'react';

type Page = 'home' | 'registrations' | 'compliance' | 'ipr' | 'taxation' | 'consultation' | 'more' | 'partner' | 
  'private-limited-company' | 'llp-registration' | 'partnership-firm' | 'ngo-registration' | 'trademark-registration' | 'gst-registration' |
  'about-us' | 'contact-us' | 'partner-with-us' | 'legal-services' | 'architect-services' | 'terms-conditions' | 'privacy-policy' | 'refund-policy' | 'careers' |
  // Compliance Services
  'msme-registration' | 'epf-registration' | 'shop-establishment-registration' | 'llp-annual-compliance' |
  'annual-compliance-private-limited' | 'outsource-bookkeeping' | 'bookkeeping-accounting' | 'nidhi-company-compliance' |
  'change-llp-agreement' | 'appointment-auditor' | 'ngo-compliance' | 'annual-compliance-society' |
  'annual-compliance-partnership' | 'form-inc-20a' | 'trust-annual-compliance' | 'partnership-tax-return' |
  'change-company-name' | 'close-private-limited' | 'change-registered-office' | 'change-object-clause' |
  'revival-struck-off' | 'change-director' | 'add-designated-partner' | 'dir-3-kyc' | 'strike-off-section-8' |
  'winding-up-company' | 'director-appointment' | 'increase-authorized-capital' | 'removal-director' |
  'change-auditor' | 'issue-shares' | 'transfer-shares' | 'convert-partnership-llp' |
  // IPR Services
  'trademark-renewal' | 'trademark-objection' | 'trademark-opposition' | 'international-trademark' |
  'trademark-rectification' | 'trademark-ecommerce' | 'trademark-hearing' | 'trademark-objection-response' |
  'trademark-infringement' | 'trademark-assignment' | 'copyright-registration' | 'patent-registration' |
  'design-registration' | 'ip-dispute' |
  // Taxation Services - Income Tax
  'income-tax-return' | 'tds-return' | 'pf-return' | 'itr-2-form' | 'itr-7-form' | 'itr-1-form' | '80-iac-exemption' |
  // Taxation Services - GST
  'gst-return-filing' | 'gstr9-return' | 'cancel-gst' | 'virtual-place-gst' | 'additional-place-gst' |
  'gst-ecommerce' | 'gst-return-ecommerce' | 'input-tax-credit' | 'gst-e-invoice' | 'e-way-bill' |
  // Consultation Services - CA Services
  'online-ca-services' | 'mergers-acquisitions' | 'financial-consultancy' | 'financial-modeling' |
  // Consultation Services - Business Consultants
  'payment-gateway' | 'startup-planning' | 'csr-registration' | 'pitch-deck' |
  // Consultation Services - Lawyer & Expert
  'consumer-complaint' | 'cheque-bounce' |
  // More Services - Environmental
  'consent-establish' | 'environmental-due-diligence' | 'epr-registration' | 'environmental-auditing' |
  'plastic-waste-auth' | 'epr-e-waste' | 'eia-assessment' |
  // More Services - Agreement and Contracts
  'mou' | 'joint-venture' | 'franchise-agreement' | 'shareholder-agreement' | 'founders-agreement' |
  'legal-heir-certificate' | 'sale-deed' | 'terms-use-agreement' | 'master-service-agreement' |
  'succession-certificate' | 'gift-deed' | 'relinquishment-deed' | 'transfer-pricing' | 'nda' |
  'share-purchase' | 'service-level-agreement' | 'probate-will' | 'fire-department-noc' | 'non-compete' |
  // More Services - Tool & Calculators
  'nic-code' | 'company-name-check' | 'search-company' |
  // More Services - Resources
  'blog' | 'guides' |
  // More Services - Regulatory
  'nbfc-registration' | 'nbfc-compliance' | 'payment-bank-license' | 'payment-gateway-license' |
  'legal-notice-defamation' | 'legal-notice' |
  // More Services - Get to Know Us
  'reviews' |
  // Company Registration
  'public-limited-company' | 'trust-registration' | 'sole-proprietorship' | 'opc-registration' | 'society-registration' |
  'startup-india' | 'startup-registration' | 'virtual-office' | 'nidhi-company' | 'microfinance-company' | 'producer-company' |
  'wordmark-registration' | 'psara-license' | 'iec-registration' | 'digital-signature' | 'class-3-dsc' | 'indian-subsidiary' |
  'ssi-registration' | 'foreign-subsidiary' | 'foreign-company' | 'barcode-registration' |
  // Government Registration
  'drug-license' | 'liquor-license' | 'iso-registration' | 'ayush-license' | 'fieo-registration' | 'medical-device' |
  'isi-mark' | 'professional-tax' | 'ptec-registration' | 'rcmc-registration' | 'factory-license' | 'icegate-registration' |
  'petrol-pump-license' | 'network-license' | 'tec-certification' | 'spice-plus-form' | 'issn-number' | 'iso-22000' |
  'iso-50001' | 'iso-31000' | 'iso-9001' | 'iso-27001' | 'iso-14001' | 'duns-number' | 'gi-registration' |
  'gmp-certification' | 'isbn-number' | 'tobacco-license' |
  // FSSAI Registration
  'fssai-registration' | 'fssai-central-license' | 'fssai-state-license' | 'fssai-renewal' | 'fssai-product-approval' |
  'fssai-license-renewal' | 'halal-certification' |
  // Trade License
  'trade-license' | 'gumasta-license' |
  // Business Certifications
  'rera-registration' | 'nsic-registration' | 'peso-certificate' | 'hallmark-registration' | 'rubber-board' |
  'ijcepa-certificate' | 'fpo-mark' | 'spice-board' | 'bee-registration' | 'make-in-india' | 'zed-certification' |
  'nsdc-registration' | 'ngo-project-report' | 'cmmi-certification' | 'apeda-registration' | 'texprocil-registration' |
  'good-standing-certificate' | 'ce-certification' |
  // Business License
  'rni-registration' | 'cdsco-registration' | 'ad-code-registration' | 'gsp-registration' | 'safta-license' |
  'wpc-certificate' | 'mstc-license' | 'agmark-license' |
  // BIS Registration
  'bis-certification' | 'bis-power-banks' | 'bis-fmcs' | 'bis-toys' |
  // NGO
  'section-8-company' | 'darpan-registration' | '12a-80g-registration' | 'fcra-registration' | 'ngo-accounting' |
  // International Business Setup
  'dubai-company' | 'uk-company' | 'singapore-company' | 'usa-company' | 'canada-company' | 'oman-company' |
  'malaysia-company' | 'australia-company' | 'thailand-company' | 'hong-kong-company' | 'indonesia-company' |
  'qatar-company' | 'italy-company' | 'sweden-company' | 'ireland-company' | 'netherlands-company' |
  'mauritius-company' | 'saudi-arabia-company' | 'france-company' | 'germany-company' | 'bvi-company' |
  'new-zealand-company' | 'dubai-free-zone' |
  // Other Services
  'virtual-cfo' | 'tea-board' | 'insurance-repository' | 'sepc-license' | 'gjepc-registration' | 'isp-registration';

interface RouterContextType {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}