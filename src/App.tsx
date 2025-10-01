import { RouterProvider, useRouter } from "./components/Router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { RegistrationsPage } from "./pages/RegistrationsPage";
import { CompliancePage } from "./pages/CompliancePage";
import { IPRPage } from "./pages/IPRPage";
import { TaxationPage } from "./pages/TaxationPage";
import { ConsultationPage } from "./pages/ConsultationPage";
import { MorePage } from "./pages/MorePage";

import { PrivateLimitedCompanyPage } from "./pages/PrivateLimitedCompanyPage";
import { LLPRegistrationPage } from "./pages/LLPRegistrationPage";
import { PartnershipFirmPage } from "./pages/PartnershipFirmPage";
import { NGORegistrationPage } from "./pages/NGORegistrationPage";
import { TrademarkRegistrationPage } from "./pages/TrademarkRegistrationPage";
import { GSTRegistrationPage } from "./pages/GSTRegistrationPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { TermsConditionsPage } from "./pages/TermsConditionsPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { RefundPolicyPage } from "./pages/RefundPolicyPage";
import { CareersPage } from "./pages/CareersPage";
import { PublicLimitedCompanyPage } from "./pages/PublicLimitedCompanyPage";
import { TrustRegistrationPage } from "./pages/TrustRegistrationPage";
import { SoleProprietorshipPage } from "./pages/SoleProprietorshipPage";
import { GenericServicePage } from "./components/GenericServicePage";
import { LegalServicesPage } from "./pages/LegalServicesPage";
import { ArchitectServicesPage } from "./pages/ArchitectServicesPage";
import { PartnerPage } from "./pages/PartnerPage";

function AppContent() {
  const { currentPage } = useRouter();

  const renderPage = () => {
    switch (currentPage) {
      case 'registrations':
        return <RegistrationsPage />;
      case 'compliance':
        return <CompliancePage />;
      case 'ipr':
        return <IPRPage />;
      case 'taxation':
        return <TaxationPage />;
      case 'consultation':
        return <ConsultationPage />;
      case 'more':
        return <MorePage />;

      
      // Specific Service Pages
      case 'private-limited-company':
        return <PrivateLimitedCompanyPage />;
      case 'llp-registration':
        return <LLPRegistrationPage />;
      case 'partnership-firm':
        return <PartnershipFirmPage />;
      case 'ngo-registration':
        return <NGORegistrationPage />;
      case 'trademark-registration':
        return <TrademarkRegistrationPage />;
      case 'gst-registration':
        return <GSTRegistrationPage />;
      case 'public-limited-company':
        return <PublicLimitedCompanyPage />;
      case 'trust-registration':
        return <TrustRegistrationPage />;
      case 'sole-proprietorship':
        return <SoleProprietorshipPage />;
      
      // Quick Links
      case 'about-us':
        return <AboutUsPage />;
      case 'contact-us':
        return <ContactUsPage />;
      case 'partner-with-us':
        return <PartnerPage />;
      case 'legal-services':
        return <LegalServicesPage />;
      case 'architect-services':
        return <ArchitectServicesPage />;
      case 'terms-conditions':
        return <TermsConditionsPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'refund-policy':
        return <RefundPolicyPage />;
      case 'careers':
        return <CareersPage />;
      
      // Generic Service Pages - Using the GenericServicePage component for all other services
      case 'opc-registration':
      case 'society-registration':
      case 'startup-india':
      case 'startup-registration':
      case 'virtual-office':
      case 'nidhi-company':
      case 'microfinance-company':
      case 'producer-company':
      case 'wordmark-registration':
      case 'psara-license':
      case 'iec-registration':
      case 'digital-signature':
      case 'class-3-dsc':
      case 'indian-subsidiary':
      case 'ssi-registration':
      case 'foreign-subsidiary':
      case 'foreign-company':
      case 'barcode-registration':
      case 'drug-license':
      case 'liquor-license':
      case 'iso-registration':
      case 'ayush-license':
      case 'fieo-registration':
      case 'medical-device':
      case 'isi-mark':
      case 'professional-tax':
      case 'ptec-registration':
      case 'rcmc-registration':
      case 'factory-license':
      case 'icegate-registration':
      case 'petrol-pump-license':
      case 'network-license':
      case 'tec-certification':
      case 'spice-plus-form':
      case 'issn-number':
      case 'iso-22000':
      case 'iso-50001':
      case 'iso-31000':
      case 'iso-9001':
      case 'iso-27001':
      case 'iso-14001':
      case 'duns-number':
      case 'gi-registration':
      case 'gmp-certification':
      case 'isbn-number':
      case 'tobacco-license':
      case 'fssai-registration':
      case 'fssai-central-license':
      case 'fssai-state-license':
      case 'fssai-renewal':
      case 'fssai-product-approval':
      case 'fssai-license-renewal':
      case 'halal-certification':
      case 'trade-license':
      case 'gumasta-license':
      case 'rera-registration':
      case 'nsic-registration':
      case 'peso-certificate':
      case 'hallmark-registration':
      case 'rubber-board':
      case 'ijcepa-certificate':
      case 'fpo-mark':
      case 'spice-board':
      case 'bee-registration':
      case 'make-in-india':
      case 'zed-certification':
      case 'nsdc-registration':
      case 'ngo-project-report':
      case 'cmmi-certification':
      case 'apeda-registration':
      case 'texprocil-registration':
      case 'good-standing-certificate':
      case 'ce-certification':
      case 'rni-registration':
      case 'cdsco-registration':
      case 'ad-code-registration':
      case 'gsp-registration':
      case 'safta-license':
      case 'wpc-certificate':
      case 'mstc-license':
      case 'agmark-license':
      case 'bis-certification':
      case 'bis-power-banks':
      case 'bis-fmcs':
      case 'bis-toys':
      case 'section-8-company':
      case 'darpan-registration':
      case '12a-80g-registration':
      case 'fcra-registration':
      case 'ngo-accounting':
      case 'dubai-company':
      case 'uk-company':
      case 'singapore-company':
      case 'usa-company':
      case 'canada-company':
      case 'oman-company':
      case 'malaysia-company':
      case 'australia-company':
      case 'thailand-company':
      case 'hong-kong-company':
      case 'indonesia-company':
      case 'qatar-company':
      case 'italy-company':
      case 'sweden-company':
      case 'ireland-company':
      case 'netherlands-company':
      case 'mauritius-company':
      case 'saudi-arabia-company':
      case 'france-company':
      case 'germany-company':
      case 'bvi-company':
      case 'new-zealand-company':
      case 'dubai-free-zone':
      case 'virtual-cfo':
      case 'tea-board':
      case 'insurance-repository':
      case 'sepc-license':
      case 'gjepc-registration':
      case 'isp-registration':
      // Compliance Services
      case 'msme-registration':
      case 'epf-registration':
      case 'shop-establishment-registration':
      case 'llp-annual-compliance':
      case 'annual-compliance-private-limited':
      case 'outsource-bookkeeping':
      case 'bookkeeping-accounting':
      case 'nidhi-company-compliance':
      case 'change-llp-agreement':
      case 'appointment-auditor':
      case 'ngo-compliance':
      case 'annual-compliance-society':
      case 'annual-compliance-partnership':
      case 'form-inc-20a':
      case 'trust-annual-compliance':
      case 'partnership-tax-return':
      case 'change-company-name':
      case 'close-private-limited':
      case 'change-registered-office':
      case 'change-object-clause':
      case 'revival-struck-off':
      case 'change-director':
      case 'add-designated-partner':
      case 'dir-3-kyc':
      case 'strike-off-section-8':
      case 'winding-up-company':
      case 'director-appointment':
      case 'increase-authorized-capital':
      case 'removal-director':
      case 'change-auditor':
      case 'issue-shares':
      case 'transfer-shares':
      case 'convert-partnership-llp':
      // IPR Services
      case 'trademark-renewal':
      case 'trademark-objection':
      case 'trademark-opposition':
      case 'international-trademark':
      case 'trademark-rectification':
      case 'trademark-ecommerce':
      case 'trademark-hearing':
      case 'trademark-objection-response':
      case 'trademark-infringement':
      case 'trademark-assignment':
      case 'copyright-registration':
      case 'patent-registration':
      case 'design-registration':
      case 'ip-dispute':
      // Taxation Services - Income Tax
      case 'income-tax-return':
      case 'tds-return':
      case 'pf-return':
      case 'itr-2-form':
      case 'itr-7-form':
      case 'itr-1-form':
      case '80-iac-exemption':
      // Taxation Services - GST
      case 'gst-return-filing':
      case 'gstr9-return':
      case 'cancel-gst':
      case 'virtual-place-gst':
      case 'additional-place-gst':
      case 'gst-ecommerce':
      case 'gst-return-ecommerce':
      case 'input-tax-credit':
      case 'gst-e-invoice':
      case 'e-way-bill':
      // Consultation Services - CA Services
      case 'online-ca-services':
      case 'mergers-acquisitions':
      case 'financial-consultancy':
      case 'financial-modeling':
      // Consultation Services - Business Consultants
      case 'payment-gateway':
      case 'startup-planning':
      case 'csr-registration':
      case 'pitch-deck':
      // Consultation Services - Lawyer & Expert
      case 'consumer-complaint':
      case 'cheque-bounce':
      // More Services - Environmental
      case 'consent-establish':
      case 'environmental-due-diligence':
      case 'epr-registration':
      case 'environmental-auditing':
      case 'plastic-waste-auth':
      case 'epr-e-waste':
      case 'eia-assessment':
      // More Services - Agreement and Contracts
      case 'mou':
      case 'joint-venture':
      case 'franchise-agreement':
      case 'shareholder-agreement':
      case 'founders-agreement':
      case 'legal-heir-certificate':
      case 'sale-deed':
      case 'terms-use-agreement':
      case 'master-service-agreement':
      case 'succession-certificate':
      case 'gift-deed':
      case 'relinquishment-deed':
      case 'transfer-pricing':
      case 'nda':
      case 'share-purchase':
      case 'service-level-agreement':
      case 'probate-will':
      case 'fire-department-noc':
      case 'non-compete':
      // More Services - Tool & Calculators
      case 'nic-code':
      case 'company-name-check':
      case 'search-company':
      // More Services - Resources
      case 'blog':
      case 'guides':
      // More Services - Regulatory
      case 'nbfc-registration':
      case 'nbfc-compliance':
      case 'payment-bank-license':
      case 'payment-gateway-license':
      case 'legal-notice-defamation':
      case 'legal-notice':
      // More Services - Get to Know Us (reviews)
      case 'reviews':
        return <GenericServicePage serviceKey={currentPage} />;
      
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}