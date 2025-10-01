import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "./Router";

// Mobile Registration Dropdown Component
function MobileRegistrationDropdown({ onNavigate }: { onNavigate: (path: string) => void }) {
  const registrationServices = {
    "Company Registration": [
      { name: "Private Limited Company Registration", path: "private-limited-company" },
      { name: "LLP Registration", path: "llp-registration" },
      { name: "Public Limited Company Registration", path: "public-limited-company" },
      { name: "Partnership Firm Registration", path: "partnership-firm" },
      { name: "NGO Registration", path: "ngo-registration" },
      { name: "Trust Registration", path: "trust-registration" },
      { name: "Sole Proprietorship Registration", path: "sole-proprietorship" },
      { name: "OPC Registration", path: "opc-registration" },
      { name: "Society Registration", path: "society-registration" },
      { name: "Startup India Registration", path: "startup-india" },
      { name: "Virtual Office", path: "virtual-office" }
    ],
    "Government Registration": [
      { name: "Drug License", path: "drug-license" },
      { name: "Liquor License", path: "liquor-license" },
      { name: "ISO Registration", path: "iso-registration" },
      { name: "FSSAI Registration", path: "fssai-registration" },
      { name: "Trade License", path: "trade-license" },
      { name: "GST Registration", path: "gst-registration" }
    ],
    "International Business": [
      { name: "Dubai Company Registration", path: "dubai-company" },
      { name: "UK Company Registration", path: "uk-company" },
      { name: "Singapore Company Registration", path: "singapore-company" },
      { name: "USA Company Registration", path: "usa-company" }
    ],
    "Other Services": [
      { name: "Trademark Registration", path: "trademark-registration" },
      { name: "BIS Certification", path: "bis-certification" },
      { name: "Virtual CFO Services", path: "virtual-cfo" }
    ]
  };

  return (
    <div className="pl-4 space-y-2 max-h-64 overflow-y-auto">
      {Object.entries(registrationServices).map(([category, services]) => (
        <div key={category} className="space-y-1">
          <h4 className="text-sm font-medium text-gray-900 px-3 py-1 bg-gray-50 rounded">
            {category}
          </h4>
          {services.map((service) => (
            <button
              key={service.path}
              onClick={() => onNavigate(service.path)}
              className="block w-full text-left text-sm text-gray-600 hover:text-primary px-3 py-1 transition-colors"
            >
              {service.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

// Mobile Taxation Dropdown Component
function MobileTaxationDropdown({ onNavigate }: { onNavigate: (path: string) => void }) {
  const taxationServices = {
    "Income Tax": [
      { name: "Income Tax Return Filing", path: "income-tax-return" },
      { name: "TDS Return Filing", path: "tds-return" },
      { name: "PF Return", path: "pf-return" },
      { name: "ITR 2 Form Filing", path: "itr-2-form" },
      { name: "ITR 7 Form Filing", path: "itr-7-form" },
      { name: "ITR 1 Form Filing", path: "itr-1-form" },
      { name: "80-IAC Tax Exemption for Startups", path: "80-iac-exemption" }
    ],
    "Good & Service Tax": [
      { name: "GST Registration", path: "gst-registration" },
      { name: "GST Return Filing", path: "gst-return-filing" },
      { name: "GSTR9 Return", path: "gstr9-return" },
      { name: "Cancel GST Registration", path: "cancel-gst" },
      { name: "Virtual Place of Business in GST", path: "virtual-place-gst" },
      { name: "Additional Place of Business in GST", path: "additional-place-gst" },
      { name: "GST Registration for E-commerce", path: "gst-ecommerce" },
      { name: "GST Return Filing for E-commerce", path: "gst-return-ecommerce" },
      { name: "Input Tax Credit", path: "input-tax-credit" },
      { name: "GST E-Invoice", path: "gst-e-invoice" },
      { name: "E-Way Bill Registration", path: "e-way-bill" }
    ]
  };

  return (
    <div className="pl-4 space-y-2 max-h-64 overflow-y-auto">
      {Object.entries(taxationServices).map(([category, services]) => (
        <div key={category} className="space-y-1">
          <h4 className="text-sm font-medium text-gray-900 px-3 py-1 bg-gray-50 rounded">
            {category}
          </h4>
          {services.map((service) => (
            <button
              key={service.path}
              onClick={() => onNavigate(service.path)}
              className="block w-full text-left text-sm text-gray-600 hover:text-primary px-3 py-1 transition-colors"
            >
              {service.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

// Mobile Consultation Dropdown Component
function MobileConsultationDropdown({ onNavigate }: { onNavigate: (path: string) => void }) {
  const consultationServices = {
    "CA Services": [
      { name: "Online Chartered Accountant Services", path: "online-ca-services" },
      { name: "Mergers and Acquisitions", path: "mergers-acquisitions" },
      { name: "Financial Consultancy Services", path: "financial-consultancy" },
      { name: "Financial Modeling for Startups", path: "financial-modeling" }
    ],
    "Business Consultants": [
      { name: "Payment Gateway Aggregator Solutions", path: "payment-gateway" },
      { name: "Startup Planning", path: "startup-planning" },
      { name: "CSR Registration", path: "csr-registration" },
      { name: "Pitch Deck for Start-ups", path: "pitch-deck" }
    ],
    "Lawyer & Expert": [
      { name: "Consumer Complaint", path: "consumer-complaint" },
      { name: "Cheque Bounce Notice", path: "cheque-bounce" }
    ]
  };

  return (
    <div className="pl-4 space-y-2 max-h-64 overflow-y-auto">
      {Object.entries(consultationServices).map(([category, services]) => (
        <div key={category} className="space-y-1">
          <h4 className="text-sm font-medium text-gray-900 px-3 py-1 bg-gray-50 rounded">
            {category}
          </h4>
          {services.map((service) => (
            <button
              key={service.path}
              onClick={() => onNavigate(service.path)}
              className="block w-full text-left text-sm text-gray-600 hover:text-primary px-3 py-1 transition-colors"
            >
              {service.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

// Mobile More Dropdown Component
function MobileMoreDropdown({ onNavigate }: { onNavigate: (path: string) => void }) {
  const moreServices = {
    "Environmental": [
      { name: "Consent to Establish", path: "consent-establish" },
      { name: "Environmental Due Diligence Services", path: "environmental-due-diligence" },
      { name: "EPR Registration", path: "epr-registration" },
      { name: "Environmental Auditing", path: "environmental-auditing" },
      { name: "Plastic Waste Authorization", path: "plastic-waste-auth" },
      { name: "EPR Authorization for E-Waste", path: "epr-e-waste" },
      { name: "Environmental Impact Assessment (EIA)", path: "eia-assessment" }
    ],
    "Agreement and Contracts": [
      { name: "Memorandum of Understanding (MOU)", path: "mou" },
      { name: "Joint Venture Agreement", path: "joint-venture" },
      { name: "Franchise Agreement", path: "franchise-agreement" },
      { name: "Shareholder's Agreement", path: "shareholder-agreement" },
      { name: "Founders Agreement", path: "founders-agreement" },
      { name: "Legal Heir Certificate", path: "legal-heir-certificate" },
      { name: "Sale Deed", path: "sale-deed" },
      { name: "Terms of Use Agreement", path: "terms-use-agreement" },
      { name: "Master Service Agreement", path: "master-service-agreement" },
      { name: "Succession Certificate", path: "succession-certificate" },
      { name: "Gift Deed", path: "gift-deed" },
      { name: "Relinquishment Deed", path: "relinquishment-deed" },
      { name: "Transfer Pricing Agreement", path: "transfer-pricing" },
      { name: "Non-Disclosure Agreement (NDA)", path: "nda" },
      { name: "Share Purchase Agreement", path: "share-purchase" },
      { name: "Service Level Agreement", path: "service-level-agreement" },
      { name: "Probate of Will", path: "probate-will" },
      { name: "Fire Department NOC", path: "fire-department-noc" },
      { name: "Non-Compete Agreement", path: "non-compete" }
    ],
    "Tool & Calculators": [
      { name: "NIC Code", path: "nic-code" },
      { name: "Company Name Check", path: "company-name-check" },
      { name: "Search Company Details", path: "search-company" }
    ],
    "Resources": [
      { name: "Blog", path: "blog" },
      { name: "Guides", path: "guides" }
    ],
    "Regulatory": [
      { name: "NBFC Registration", path: "nbfc-registration" },
      { name: "NBFC Compliance", path: "nbfc-compliance" },
      { name: "Payment Bank License", path: "payment-bank-license" },
      { name: "Payment Gateway License", path: "payment-gateway-license" },
      { name: "Legal Notice for Defamation", path: "legal-notice-defamation" },
      { name: "Legal Notice", path: "legal-notice" }
    ]
  };

  return (
    <div className="pl-4 space-y-2 max-h-64 overflow-y-auto">
      {Object.entries(moreServices).map(([category, services]) => (
        <div key={category} className="space-y-1">
          <h4 className="text-sm font-medium text-gray-900 px-3 py-1 bg-gray-50 rounded">
            {category}
          </h4>
          {services.map((service) => (
            <button
              key={service.path}
              onClick={() => onNavigate(service.path)}
              className="block w-full text-left text-sm text-gray-600 hover:text-primary px-3 py-1 transition-colors"
            >
              {service.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

// Mobile IPR Dropdown Component
function MobileIPRDropdown({ onNavigate }: { onNavigate: (path: string) => void }) {
  const iprServices = {
    "Trademark Registration": [
      { name: "Trademark Registration", path: "trademark-registration" },
      { name: "Trademark Renewal", path: "trademark-renewal" },
      { name: "Trademark Objection", path: "trademark-objection" },
      { name: "Trademark Opposition", path: "trademark-opposition" },
      { name: "International Trademark Registration", path: "international-trademark" },
      { name: "Trademark Rectification", path: "trademark-rectification" },
      { name: "Trademark Registration for E-commerce", path: "trademark-ecommerce" },
      { name: "Trademark Hearing", path: "trademark-hearing" },
      { name: "Response to Trademark Objection", path: "trademark-objection-response" },
      { name: "Trademark Infringement", path: "trademark-infringement" },
      { name: "Trademark Assignment", path: "trademark-assignment" }
    ],
    "Copyright Registration": [
      { name: "Copyright Registration", path: "copyright-registration" }
    ],
    "Patent Registration": [
      { name: "Patent Registration", path: "patent-registration" }
    ],
    "Design Registration": [
      { name: "Design Registration", path: "design-registration" }
    ],
    "Intellectual Property Dispute": [
      { name: "Intellectual Property Dispute", path: "ip-dispute" }
    ]
  };

  return (
    <div className="pl-4 space-y-2 max-h-64 overflow-y-auto">
      {Object.entries(iprServices).map(([category, services]) => (
        <div key={category} className="space-y-1">
          <h4 className="text-sm font-medium text-gray-900 px-3 py-1 bg-gray-50 rounded">
            {category}
          </h4>
          {services.map((service) => (
            <button
              key={service.path}
              onClick={() => onNavigate(service.path)}
              className="block w-full text-left text-sm text-gray-600 hover:text-primary px-3 py-1 transition-colors"
            >
              {service.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

// Mobile Compliance Dropdown Component
function MobileComplianceDropdown({ onNavigate }: { onNavigate: (path: string) => void }) {
  const complianceServices = {
    "Company Compliance": [
      { name: "MSME Registration", path: "msme-registration" },
      { name: "EPF Registration", path: "epf-registration" },
      { name: "Shop & Establishment Registration", path: "shop-establishment-registration" }
    ],
    "Annual Compliance": [
      { name: "LLP Annual Compliance", path: "llp-annual-compliance" },
      { name: "Annual Compliance for Private Limited Company", path: "annual-compliance-private-limited" },
      { name: "Outsource Bookkeeping Services", path: "outsource-bookkeeping" },
      { name: "Book Keeping and Accounting Services", path: "bookkeeping-accounting" },
      { name: "Nidhi Company Compliance", path: "nidhi-company-compliance" },
      { name: "Change in LLP Agreement", path: "change-llp-agreement" },
      { name: "Appointment of Auditor", path: "appointment-auditor" },
      { name: "NGO Compliance", path: "ngo-compliance" },
      { name: "Annual Compliance for Society", path: "annual-compliance-society" },
      { name: "Annual Compliance for Partnership Firm", path: "annual-compliance-partnership" },
      { name: "Form INC-20A", path: "form-inc-20a" },
      { name: "Trust Annual Compliance", path: "trust-annual-compliance" },
      { name: "Partnership Firm Tax Return Filing", path: "partnership-tax-return" }
    ],
    "MCA Services": [
      { name: "Change Pvt Ltd Company Name", path: "change-company-name" },
      { name: "Close Private Limited Company", path: "close-private-limited" },
      { name: "Change in Registered Office", path: "change-registered-office" },
      { name: "Change in Object Clause", path: "change-object-clause" },
      { name: "Revival of Struck Off Companies", path: "revival-struck-off" },
      { name: "Change in Director", path: "change-director" },
      { name: "Add Designated Partner", path: "add-designated-partner" },
      { name: "DIR-3 KYC for Directors", path: "dir-3-kyc" },
      { name: "Strike off Section 8 Companies", path: "strike-off-section-8" }
    ],
    "Event Based Compliance": [
      { name: "Winding Up of a Company", path: "winding-up-company" },
      { name: "Director Appointment", path: "director-appointment" },
      { name: "Increase Authorized Capital", path: "increase-authorized-capital" },
      { name: "Removal of Director", path: "removal-director" },
      { name: "Change of Auditor", path: "change-auditor" },
      { name: "Issue of Shares", path: "issue-shares" },
      { name: "Transfer of Shares", path: "transfer-shares" }
    ],
    "Convert Your Business": [
      { name: "Convert Partnership Into LLP Company", path: "convert-partnership-llp" }
    ]
  };

  return (
    <div className="pl-4 space-y-2 max-h-64 overflow-y-auto">
      {Object.entries(complianceServices).map(([category, services]) => (
        <div key={category} className="space-y-1">
          <h4 className="text-sm font-medium text-gray-900 px-3 py-1 bg-gray-50 rounded">
            {category}
          </h4>
          {services.map((service) => (
            <button
              key={service.path}
              onClick={() => onNavigate(service.path)}
              className="block w-full text-left text-sm text-gray-600 hover:text-primary px-3 py-1 transition-colors"
            >
              {service.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

// Taxation Dropdown Component
function TaxationDropdownContent({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("Income Tax");

  const taxationServices = {
    "Income Tax": [
      { name: "Income Tax Return Filing", path: "income-tax-return" },
      { name: "TDS Return Filing", path: "tds-return" },
      { name: "PF Return", path: "pf-return" },
      { name: "ITR 2 Form Filing", path: "itr-2-form" },
      { name: "ITR 7 Form Filing", path: "itr-7-form" },
      { name: "ITR 1 Form Filing", path: "itr-1-form" },
      { name: "80-IAC Tax Exemption for Startups", path: "80-iac-exemption" }
    ],
    "Good & Service Tax": [
      { name: "GST Registration", path: "gst-registration" },
      { name: "GST Return Filing", path: "gst-return-filing" },
      { name: "GSTR9 Return", path: "gstr9-return" },
      { name: "Cancel GST Registration", path: "cancel-gst" },
      { name: "Virtual Place of Business in GST", path: "virtual-place-gst" },
      { name: "Additional Place of Business in GST", path: "additional-place-gst" },
      { name: "GST Registration for E-commerce", path: "gst-ecommerce" },
      { name: "GST Return Filing for E-commerce", path: "gst-return-ecommerce" },
      { name: "Input Tax Credit", path: "input-tax-credit" },
      { name: "GST E-Invoice", path: "gst-e-invoice" },
      { name: "E-Way Bill Registration", path: "e-way-bill" }
    ]
  };

  const currentServices = taxationServices[activeCategory as keyof typeof taxationServices] || [];
  
  // Split services into 3 columns
  const itemsPerColumn = Math.ceil(currentServices.length / 3);
  const column1 = currentServices.slice(0, itemsPerColumn);
  const column2 = currentServices.slice(itemsPerColumn, itemsPerColumn * 2);
  const column3 = currentServices.slice(itemsPerColumn * 2);

  return (
    <div className="flex bg-white rounded-lg overflow-hidden h-80 lg:h-96 max-h-[75vh]">
      {/* Left Sidebar - Categories */}
      <div className="w-48 lg:w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-1">
          {Object.keys(taxationServices).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm transition-colors rounded-md mb-1 ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content - Services in 3 columns */}
      <div className="flex-1 p-3 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 h-full overflow-y-auto">
          {/* Column 1 */}
          <div className="space-y-2">
            {column1.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-xs lg:text-sm text-gray-600 hover:text-blue-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-2 hidden lg:block">
            {column2.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-2 hidden lg:block">
            {column3.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Consultation Dropdown Component
function ConsultationDropdownContent({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("CA Services");

  const consultationServices = {
    "CA Services": [
      { name: "Online Chartered Accountant Services", path: "online-ca-services" },
      { name: "Mergers and Acquisitions", path: "mergers-acquisitions" },
      { name: "Financial Consultancy Services", path: "financial-consultancy" },
      { name: "Financial Modeling for Startups", path: "financial-modeling" }
    ],
    "Business Consultants": [
      { name: "Payment Gateway Aggregator Solutions", path: "payment-gateway" },
      { name: "Startup Planning", path: "startup-planning" },
      { name: "CSR Registration", path: "csr-registration" },
      { name: "Pitch Deck for Start-ups", path: "pitch-deck" }
    ],
    "Lawyer & Expert": [
      { name: "Consumer Complaint", path: "consumer-complaint" },
      { name: "Cheque Bounce Notice", path: "cheque-bounce" }
    ]
  };

  const currentServices = consultationServices[activeCategory as keyof typeof consultationServices] || [];
  
  // Split services into 3 columns
  const itemsPerColumn = Math.ceil(currentServices.length / 3);
  const column1 = currentServices.slice(0, itemsPerColumn);
  const column2 = currentServices.slice(itemsPerColumn, itemsPerColumn * 2);
  const column3 = currentServices.slice(itemsPerColumn * 2);

  return (
    <div className="flex bg-white rounded-lg overflow-hidden h-80 lg:h-96 max-h-[75vh]">
      {/* Left Sidebar - Categories */}
      <div className="w-48 lg:w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-1">
          {Object.keys(consultationServices).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`w-full text-left px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm transition-colors rounded-md mb-1 ${
                activeCategory === category
                  ? 'bg-green-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content - Services in 3 columns */}
      <div className="flex-1 p-3 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 h-full overflow-y-auto">
          {/* Column 1 */}
          <div className="space-y-2">
            {column1.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-xs lg:text-sm text-gray-600 hover:text-green-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-2 hidden lg:block">
            {column2.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-green-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-2 hidden lg:block">
            {column3.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-green-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// More Dropdown Component
function MoreDropdownContent({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("Environmental");

  const moreServices = {
    "Environmental": [
      { name: "Consent to Establish", path: "consent-establish" },
      { name: "Environmental Due Diligence Services", path: "environmental-due-diligence" },
      { name: "EPR Registration", path: "epr-registration" },
      { name: "Environmental Auditing", path: "environmental-auditing" },
      { name: "Plastic Waste Authorization", path: "plastic-waste-auth" },
      { name: "EPR Authorization for E-Waste", path: "epr-e-waste" },
      { name: "Environmental Impact Assessment (EIA)", path: "eia-assessment" }
    ],
    "Agreement and Contracts": [
      { name: "Memorandum of Understanding (MOU)", path: "mou" },
      { name: "Joint Venture Agreement", path: "joint-venture" },
      { name: "Franchise Agreement", path: "franchise-agreement" },
      { name: "Shareholder's Agreement", path: "shareholder-agreement" },
      { name: "Founders Agreement", path: "founders-agreement" },
      { name: "Legal Heir Certificate", path: "legal-heir-certificate" },
      { name: "Sale Deed", path: "sale-deed" },
      { name: "Terms of Use Agreement", path: "terms-use-agreement" },
      { name: "Master Service Agreement", path: "master-service-agreement" },
      { name: "Succession Certificate", path: "succession-certificate" },
      { name: "Gift Deed", path: "gift-deed" },
      { name: "Relinquishment Deed", path: "relinquishment-deed" },
      { name: "Transfer Pricing Agreement", path: "transfer-pricing" },
      { name: "Non-Disclosure Agreement (NDA)", path: "nda" },
      { name: "Share Purchase Agreement", path: "share-purchase" },
      { name: "Service Level Agreement", path: "service-level-agreement" },
      { name: "Probate of Will", path: "probate-will" },
      { name: "Fire Department NOC", path: "fire-department-noc" },
      { name: "Non-Compete Agreement", path: "non-compete" }
    ],
    "Tool & Calculators": [
      { name: "NIC Code", path: "nic-code" },
      { name: "Company Name Check", path: "company-name-check" },
      { name: "Search Company Details", path: "search-company" }
    ],
    "Resources": [
      { name: "Blog", path: "blog" },
      { name: "Guides", path: "guides" }
    ],
    "Regulatory": [
      { name: "NBFC Registration", path: "nbfc-registration" },
      { name: "NBFC Compliance", path: "nbfc-compliance" },
      { name: "Payment Bank License", path: "payment-bank-license" },
      { name: "Payment Gateway License", path: "payment-gateway-license" },
      { name: "Legal Notice for Defamation", path: "legal-notice-defamation" },
      { name: "Legal Notice", path: "legal-notice" }
    ],
    "Get to Know Us": [
      { name: "About Us", path: "about-us" },
      { name: "Contact Us", path: "contact-us" },
      { name: "Reviews", path: "reviews" }
    ]
  };

  const currentServices = moreServices[activeCategory as keyof typeof moreServices] || [];
  
  // Split services into 3 columns
  const itemsPerColumn = Math.ceil(currentServices.length / 3);
  const column1 = currentServices.slice(0, itemsPerColumn);
  const column2 = currentServices.slice(itemsPerColumn, itemsPerColumn * 2);
  const column3 = currentServices.slice(itemsPerColumn * 2);

  return (
    <div className="flex bg-white rounded-lg overflow-hidden" style={{ height: '400px' }}>
      {/* Left Sidebar - Categories */}
      <div className="w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-1">
          {Object.keys(moreServices).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors rounded-md mb-1 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content - Services in 3 columns */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-6 h-full">
          {/* Column 1 */}
          <div className="space-y-2">
            {column1.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-orange-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            {column2.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-orange-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            {column3.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-orange-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// IPR Dropdown Component
function IPRDropdownContent({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("Trademark Registration");

  const iprServices = {
    "Trademark Registration": [
      { name: "Trademark Registration", path: "trademark-registration" },
      { name: "Trademark Renewal", path: "trademark-renewal" },
      { name: "Trademark Objection", path: "trademark-objection" },
      { name: "Trademark Opposition", path: "trademark-opposition" },
      { name: "International Trademark Registration", path: "international-trademark" },
      { name: "Trademark Rectification", path: "trademark-rectification" },
      { name: "Trademark Registration for E-commerce", path: "trademark-ecommerce" },
      { name: "Trademark Hearing", path: "trademark-hearing" },
      { name: "Response to Trademark Objection", path: "trademark-objection-response" },
      { name: "Trademark Infringement", path: "trademark-infringement" },
      { name: "Trademark Assignment", path: "trademark-assignment" }
    ],
    "Copyright Registration": [
      { name: "Copyright Registration", path: "copyright-registration" }
    ],
    "Patent Registration": [
      { name: "Patent Registration", path: "patent-registration" }
    ],
    "Design Registration": [
      { name: "Design Registration", path: "design-registration" }
    ],
    "Intellectual Property Dispute": [
      { name: "Intellectual Property Dispute", path: "ip-dispute" }
    ]
  };

  const currentServices = iprServices[activeCategory as keyof typeof iprServices] || [];
  
  // Split services into 3 columns
  const itemsPerColumn = Math.ceil(currentServices.length / 3);
  const column1 = currentServices.slice(0, itemsPerColumn);
  const column2 = currentServices.slice(itemsPerColumn, itemsPerColumn * 2);
  const column3 = currentServices.slice(itemsPerColumn * 2);

  return (
    <div className="flex bg-white rounded-lg overflow-hidden" style={{ height: '400px' }}>
      {/* Left Sidebar - Categories */}
      <div className="w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-1">
          {Object.keys(iprServices).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors rounded-md mb-1 ${
                activeCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content - Services in 3 columns */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-6 h-full">
          {/* Column 1 */}
          <div className="space-y-2">
            {column1.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-purple-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            {column2.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-purple-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            {column3.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-purple-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Compliance Dropdown Component
function ComplianceDropdownContent({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("Company Compliance");

  const complianceServices = {
    "Company Compliance": [
      { name: "MSME Registration", path: "msme-registration" },
      { name: "EPF Registration", path: "epf-registration" },
      { name: "Shop & Establishment Registration", path: "shop-establishment-registration" }
    ],
    "Annual Compliance": [
      { name: "LLP Annual Compliance", path: "llp-annual-compliance" },
      { name: "Annual Compliance for Private Limited Company", path: "annual-compliance-private-limited" },
      { name: "Outsource Bookkeeping Services", path: "outsource-bookkeeping" },
      { name: "Book Keeping and Accounting Services", path: "bookkeeping-accounting" },
      { name: "Nidhi Company Compliance", path: "nidhi-company-compliance" },
      { name: "Change in LLP Agreement", path: "change-llp-agreement" },
      { name: "Appointment of Auditor", path: "appointment-auditor" },
      { name: "NGO Compliance", path: "ngo-compliance" },
      { name: "Annual Compliance for Society", path: "annual-compliance-society" },
      { name: "Annual Compliance for Partnership Firm", path: "annual-compliance-partnership" },
      { name: "Form INC-20A", path: "form-inc-20a" },
      { name: "Trust Annual Compliance", path: "trust-annual-compliance" },
      { name: "Partnership Firm Tax Return Filing", path: "partnership-tax-return" }
    ],
    "MCA Services": [
      { name: "Change Pvt Ltd Company Name", path: "change-company-name" },
      { name: "Close Private Limited Company", path: "close-private-limited" },
      { name: "Change in Registered Office", path: "change-registered-office" },
      { name: "Change in Object Clause", path: "change-object-clause" },
      { name: "Revival of Struck Off Companies", path: "revival-struck-off" },
      { name: "Change in Director", path: "change-director" },
      { name: "Add Designated Partner", path: "add-designated-partner" },
      { name: "DIR-3 KYC for Directors", path: "dir-3-kyc" },
      { name: "Strike off Section 8 Companies", path: "strike-off-section-8" }
    ],
    "Event Based Compliance": [
      { name: "Winding Up of a Company", path: "winding-up-company" },
      { name: "Director Appointment", path: "director-appointment" },
      { name: "Increase Authorized Capital", path: "increase-authorized-capital" },
      { name: "Removal of Director", path: "removal-director" },
      { name: "Change of Auditor", path: "change-auditor" },
      { name: "Issue of Shares", path: "issue-shares" },
      { name: "Transfer of Shares", path: "transfer-shares" }
    ],
    "Convert Your Business": [
      { name: "Convert Partnership Into LLP Company", path: "convert-partnership-llp" }
    ]
  };

  const currentServices = complianceServices[activeCategory as keyof typeof complianceServices] || [];
  
  // Split services into 3 columns
  const itemsPerColumn = Math.ceil(currentServices.length / 3);
  const column1 = currentServices.slice(0, itemsPerColumn);
  const column2 = currentServices.slice(itemsPerColumn, itemsPerColumn * 2);
  const column3 = currentServices.slice(itemsPerColumn * 2);

  return (
    <div className="flex bg-white rounded-lg overflow-hidden" style={{ height: '400px' }}>
      {/* Left Sidebar - Categories */}
      <div className="w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-1">
          {Object.keys(complianceServices).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors rounded-md mb-1 ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content - Services in 3 columns */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-6 h-full">
          {/* Column 1 */}
          <div className="space-y-2">
            {column1.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            {column2.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            {column3.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Registration Dropdown Component
function RegistrationDropdownContent({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("Company Registration");

  const registrationServices = {
    "Company Registration": [
      { name: "Private Limited Company Registration", path: "private-limited-company" },
      { name: "LLP Registration", path: "llp-registration" },
      { name: "Public Limited Company Registration", path: "public-limited-company" },
      { name: "Partnership Firm Registration", path: "partnership-firm" },
      { name: "NGO Registration", path: "ngo-registration" },
      { name: "Trust Registration", path: "trust-registration" },
      { name: "Sole Proprietorship Registration", path: "sole-proprietorship" },
      { name: "OPC Registration", path: "opc-registration" },
      { name: "Society Registration", path: "society-registration" },
      { name: "Startup India Registration", path: "startup-india" },
      { name: "Startup Registration", path: "startup-registration" },
      { name: "Virtual Office", path: "virtual-office" },
      { name: "Nidhi Company Registration", path: "nidhi-company" },
      { name: "Microfinance Company Registration", path: "microfinance-company" },
      { name: "Producer Company Registration", path: "producer-company" },
      { name: "Wordmark Registration", path: "wordmark-registration" },
      { name: "PSARA License", path: "psara-license" },
      { name: "IEC Registration/Import Export Code", path: "iec-registration" },
      { name: "Digital Signature Certificate", path: "digital-signature" },
      { name: "Class 3 Digital Signature Certificate", path: "class-3-dsc" },
      { name: "Indian Subsidiary Registration", path: "indian-subsidiary" },
      { name: "Small Scale Industries Registration", path: "ssi-registration" },
      { name: "Foreign Subsidiary Company Registration", path: "foreign-subsidiary" },
      { name: "Foreign Company Registration", path: "foreign-company" },
      { name: "Barcode Registration", path: "barcode-registration" }
    ],
    "Government Registration": [
      { name: "Drug License", path: "drug-license" },
      { name: "Liquor License", path: "liquor-license" },
      { name: "ISO Registration", path: "iso-registration" },
      { name: "Ayush License", path: "ayush-license" },
      { name: "FIEO Registration", path: "fieo-registration" },
      { name: "Medical Device Registration", path: "medical-device" },
      { name: "ISI Mark Certification", path: "isi-mark" },
      { name: "Professional Tax Registration", path: "professional-tax" },
      { name: "PTEC Registration", path: "ptec-registration" },
      { name: "RCMC Registration", path: "rcmc-registration" },
      { name: "Factory License", path: "factory-license" },
      { name: "ICEGATE Registration", path: "icegate-registration" },
      { name: "Petrol Pump License", path: "petrol-pump-license" },
      { name: "Network License", path: "network-license" },
      { name: "TEC Certification", path: "tec-certification" },
      { name: "SPICe+ Form", path: "spice-plus-form" },
      { name: "ISSN Number", path: "issn-number" },
      { name: "ISO 22000 FSMS Certification", path: "iso-22000" },
      { name: "ISO 50001 Certification", path: "iso-50001" },
      { name: "ISO 31000 Certification", path: "iso-31000" },
      { name: "ISO 9001 Certification", path: "iso-9001" },
      { name: "ISO 27001 Certification", path: "iso-27001" },
      { name: "ISO 14001 Certification", path: "iso-14001" },
      { name: "DUNS Number", path: "duns-number" },
      { name: "Geographical Indication Registration", path: "gi-registration" },
      { name: "GMP Certification", path: "gmp-certification" },
      { name: "ISBN Number Registration", path: "isbn-number" },
      { name: "Tobacco License Registration", path: "tobacco-license" }
    ],
    "FSSAI Registration": [
      { name: "FSSAI Registration", path: "fssai-registration" },
      { name: "FSSAI Central License", path: "fssai-central-license" },
      { name: "FSSAI State License", path: "fssai-state-license" },
      { name: "Basic FSSAI Registration Renewal", path: "fssai-renewal" },
      { name: "FSSAI Product Approval", path: "fssai-product-approval" },
      { name: "FSSAI License Renewal", path: "fssai-license-renewal" },
      { name: "Halal Certification", path: "halal-certification" }
    ],
    "Trade License": [
      { name: "Trade License", path: "trade-license" },
      { name: "Gumasta License", path: "gumasta-license" }
    ],
    "Business Certifications": [
      { name: "RERA Registration", path: "rera-registration" },
      { name: "NSIC Registration", path: "nsic-registration" },
      { name: "PESO Certificate", path: "peso-certificate" },
      { name: "Hallmark Registration", path: "hallmark-registration" },
      { name: "Rubber Board Registration", path: "rubber-board" },
      { name: "IJCEPA Certificate", path: "ijcepa-certificate" },
      { name: "FPO Mark Certification", path: "fpo-mark" },
      { name: "Spice Board Registration", path: "spice-board" },
      { name: "BEE Registration", path: "bee-registration" },
      { name: "Make In India Certificate", path: "make-in-india" },
      { name: "ZED Certification", path: "zed-certification" },
      { name: "NSDC Registration", path: "nsdc-registration" },
      { name: "NGO Project Report", path: "ngo-project-report" },
      { name: "CMMI Certification", path: "cmmi-certification" },
      { name: "APEDA Registration", path: "apeda-registration" },
      { name: "TEXPROCIL Registration", path: "texprocil-registration" },
      { name: "Certificate of Good Standing", path: "good-standing-certificate" },
      { name: "CE Certification", path: "ce-certification" }
    ],
    "Business License": [
      { name: "RNI Registration", path: "rni-registration" },
      { name: "CDSCO Registration", path: "cdsco-registration" },
      { name: "AD Code Registration", path: "ad-code-registration" },
      { name: "GSP Registration", path: "gsp-registration" },
      { name: "SAFTA License", path: "safta-license" },
      { name: "WPC Certificate", path: "wpc-certificate" },
      { name: "MSTC License Registration", path: "mstc-license" },
      { name: "AGMARK License", path: "agmark-license" }
    ],
    "BIS Registration": [
      { name: "BIS Certification", path: "bis-certification" },
      { name: "BIS Certification for Power Banks", path: "bis-power-banks" },
      { name: "BIS FMCS Certification", path: "bis-fmcs" },
      { name: "BIS Certification for Toys", path: "bis-toys" }
    ],
    "NGO": [
      { name: "Section 8 Company Registration", path: "section-8-company" },
      { name: "Darpan Registration", path: "darpan-registration" },
      { name: "12A and 80G Registration", path: "12a-80g-registration" },
      { name: "FCRA Registration", path: "fcra-registration" },
      { name: "NGO Accounting", path: "ngo-accounting" }
    ],
    "International Business Setup": [
      { name: "Company Registration in Dubai", path: "dubai-company" },
      { name: "UK Company Registration", path: "uk-company" },
      { name: "Singapore Company Registration", path: "singapore-company" },
      { name: "USA Company Registration", path: "usa-company" },
      { name: "Canada Company Registration", path: "canada-company" },
      { name: "Oman Company Registration", path: "oman-company" },
      { name: "Malaysia Company Registration", path: "malaysia-company" },
      { name: "Australia Company Registration", path: "australia-company" },
      { name: "Thailand Company Registration", path: "thailand-company" },
      { name: "Hong Kong Company Registration", path: "hong-kong-company" },
      { name: "Indonesia Company Registration", path: "indonesia-company" },
      { name: "Qatar Company Registration", path: "qatar-company" },
      { name: "Italy Company Registration", path: "italy-company" },
      { name: "Sweden Company Registration", path: "sweden-company" },
      { name: "Ireland Company Registration", path: "ireland-company" },
      { name: "Netherlands Company Registration", path: "netherlands-company" },
      { name: "Mauritius Company Registration", path: "mauritius-company" },
      { name: "Saudi Arabia Company Registration", path: "saudi-arabia-company" },
      { name: "France Company Registration", path: "france-company" },
      { name: "Germany Company Registration", path: "germany-company" },
      { name: "British Virgin Islands Registration", path: "bvi-company" },
      { name: "New Zealand Company Registration", path: "new-zealand-company" },
      { name: "Dubai Free Zone Company Registration", path: "dubai-free-zone" }
    ],
    "Other Services": [
      { name: "Virtual CFO Services", path: "virtual-cfo" },
      { name: "Tea Board Registration", path: "tea-board" },
      { name: "Insurance Repository Registration Services", path: "insurance-repository" },
      { name: "SEPC License", path: "sepc-license" },
      { name: "GJEPC Registration", path: "gjepc-registration" },
      { name: "ISP Registration", path: "isp-registration" }
    ]
  };

  const currentServices = registrationServices[activeCategory as keyof typeof registrationServices] || [];
  
  // Split services into 3 columns
  const itemsPerColumn = Math.ceil(currentServices.length / 3);
  const column1 = currentServices.slice(0, itemsPerColumn);
  const column2 = currentServices.slice(itemsPerColumn, itemsPerColumn * 2);
  const column3 = currentServices.slice(itemsPerColumn * 2);

  return (
    <div className="flex bg-white rounded-lg overflow-hidden" style={{ height: '400px' }}>
      {/* Left Sidebar - Categories */}
      <div className="w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-1">
          {Object.keys(registrationServices).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors rounded-md mb-1 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content - Services in 3 columns */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-6 h-full">
          {/* Column 1 */}
          <div className="space-y-2">
            {column1.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            {column2.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            {column3.map((service) => (
              <button
                key={service.path}
                onClick={() => onNavigate(service.path)}
                className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 transition-colors p-1"
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { currentPage, navigateTo } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);



  const navigationItems = [
    { label: "Legal Services", page: "legal-services" as const },
    { label: "Architect Services", page: "architect-services" as const }
  ];

  const handleNavigation = (page: typeof currentPage) => {
    navigateTo(page);
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-14 lg:h-16 gap-2">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigation('home')}>
            <h1 className="text-base lg:text-lg xl:text-xl font-bold text-primary whitespace-nowrap">Dhiraj Rakho</h1>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 flex-1 justify-center" ref={dropdownRef}>
            {/* Registrations Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('registrations')}
                className="flex items-center space-x-0.5 text-gray-700 hover:text-primary transition-colors px-1.5 xl:px-2 py-1"
              >
                <span className="text-xs xl:text-sm">Registrations</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen === 'registrations' ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen === 'registrations' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[90vw] max-w-4xl bg-white shadow-xl border border-gray-200 rounded-lg z-50">
                  <RegistrationDropdownContent onNavigate={handleNavigation} />
                </div>
              )}
            </div>

            {/* Compliance Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('compliance')}
                className="flex items-center space-x-0.5 text-gray-700 hover:text-primary transition-colors px-1.5 xl:px-2 py-1"
              >
                <span className="text-xs xl:text-sm">Compliance</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen === 'compliance' ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen === 'compliance' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[90vw] max-w-4xl bg-white shadow-xl border border-gray-200 rounded-lg z-50">
                  <ComplianceDropdownContent onNavigate={handleNavigation} />
                </div>
              )}
            </div>

            {/* IPR Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ipr')}
                className="flex items-center space-x-0.5 text-gray-700 hover:text-primary transition-colors px-1.5 xl:px-2 py-1"
              >
                <span className="text-xs xl:text-sm">IPR</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen === 'ipr' ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen === 'ipr' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[90vw] max-w-4xl bg-white shadow-xl border border-gray-200 rounded-lg z-50">
                  <IPRDropdownContent onNavigate={handleNavigation} />
                </div>
              )}
            </div>

            {/* Taxation Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('taxation')}
                className="flex items-center space-x-0.5 text-gray-700 hover:text-primary transition-colors px-1.5 xl:px-2 py-1"
              >
                <span className="text-xs xl:text-sm">Taxation</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen === 'taxation' ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen === 'taxation' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[90vw] max-w-4xl bg-white shadow-xl border border-gray-200 rounded-lg z-50">
                  <TaxationDropdownContent onNavigate={handleNavigation} />
                </div>
              )}
            </div>

            {/* Consultation Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('consultation')}
                className="flex items-center space-x-0.5 text-gray-700 hover:text-primary transition-colors px-1.5 xl:px-2 py-1"
              >
                <span className="text-xs xl:text-sm">Consultation</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen === 'consultation' ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen === 'consultation' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[90vw] max-w-4xl bg-white shadow-xl border border-gray-200 rounded-lg z-50">
                  <ConsultationDropdownContent onNavigate={handleNavigation} />
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('more')}
                className="flex items-center space-x-0.5 text-gray-700 hover:text-primary transition-colors px-1.5 xl:px-2 py-1"
              >
                <span className="text-xs xl:text-sm">More</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen === 'more' ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen === 'more' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[90vw] max-w-4xl bg-white shadow-xl border border-gray-200 rounded-lg z-50">
                  <MoreDropdownContent onNavigate={handleNavigation} />
                </div>
              )}
            </div>

            {/* Regular Navigation Items */}
            {navigationItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className={`transition-colors px-1.5 xl:px-2 py-1 text-xs xl:text-sm whitespace-nowrap ${
                  currentPage === item.page
                    ? "text-primary font-medium border-b-2 border-primary pb-1"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavigation('contact-us')}
              className="text-xs xl:text-sm px-2 xl:px-3"
            >
              Contact
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigation('partner-with-us')}
              className="text-xs xl:text-sm px-2 xl:px-3 whitespace-nowrap"
            >
              Partner with Us
            </Button>
          </div>

          {/* Medium screens navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-2 flex-1 justify-end">
            <nav className="flex items-center space-x-2">
              {/* Compact dropdowns for medium screens */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors px-2 py-1"
                >
                  <span className="text-sm">Services</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen === 'services' ? 'rotate-180' : ''}`} />
                </button>
              
              {dropdownOpen === 'services' && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-white shadow-xl border border-gray-200 rounded-lg z-50 max-h-96 overflow-y-auto">
                  <div className="p-4 space-y-3">
                    <button
                      onClick={() => {handleNavigation('registrations'); setDropdownOpen(null);}}
                      className="block w-full text-left text-sm text-gray-700 hover:text-primary py-2 border-b border-gray-100"
                    >
                      Registrations
                    </button>
                    <button
                      onClick={() => {handleNavigation('compliance'); setDropdownOpen(null);}}
                      className="block w-full text-left text-sm text-gray-700 hover:text-primary py-2 border-b border-gray-100"
                    >
                      Compliance
                    </button>
                    <button
                      onClick={() => {handleNavigation('ipr'); setDropdownOpen(null);}}
                      className="block w-full text-left text-sm text-gray-700 hover:text-primary py-2 border-b border-gray-100"
                    >
                      IPR
                    </button>
                    <button
                      onClick={() => {handleNavigation('taxation'); setDropdownOpen(null);}}
                      className="block w-full text-left text-sm text-gray-700 hover:text-primary py-2 border-b border-gray-100"
                    >
                      Taxation
                    </button>
                    <button
                      onClick={() => {handleNavigation('consultation'); setDropdownOpen(null);}}
                      className="block w-full text-left text-sm text-gray-700 hover:text-primary py-2 border-b border-gray-100"
                    >
                      Consultation
                    </button>
                    <button
                      onClick={() => {handleNavigation('more'); setDropdownOpen(null);}}
                      className="block w-full text-left text-sm text-gray-700 hover:text-primary py-2"
                    >
                      More Services
                    </button>
                  </div>
                </div>
              )}
            </div>

              {navigationItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className={`transition-colors px-2 py-1 text-sm ${
                    currentPage === item.page
                      ? "text-primary font-medium"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            {/* Right Side Buttons - Medium screens */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavigation('contact-us')}
              className="text-xs"
            >
              Contact
            </Button>
          </div>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white max-h-96 overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Registrations */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleDropdown('mobile-registrations')}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  <span>Registrations</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === 'mobile-registrations' ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen === 'mobile-registrations' && (
                  <MobileRegistrationDropdown onNavigate={handleNavigation} />
                )}
              </div>

              {/* Mobile Compliance */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleDropdown('mobile-compliance')}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  <span>Compliance</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === 'mobile-compliance' ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen === 'mobile-compliance' && (
                  <MobileComplianceDropdown onNavigate={handleNavigation} />
                )}
              </div>

              {/* Mobile IPR */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleDropdown('mobile-ipr')}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  <span>IPR</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === 'mobile-ipr' ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen === 'mobile-ipr' && (
                  <MobileIPRDropdown onNavigate={handleNavigation} />
                )}
              </div>

              {/* Mobile Taxation */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleDropdown('mobile-taxation')}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  <span>Taxation</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === 'mobile-taxation' ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen === 'mobile-taxation' && (
                  <MobileTaxationDropdown onNavigate={handleNavigation} />
                )}
              </div>

              {/* Mobile Consultation */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleDropdown('mobile-consultation')}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  <span>Consultation</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === 'mobile-consultation' ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen === 'mobile-consultation' && (
                  <MobileConsultationDropdown onNavigate={handleNavigation} />
                )}
              </div>

              {/* Mobile More */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleDropdown('mobile-more')}
                  className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  <span>More</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === 'mobile-more' ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen === 'mobile-more' && (
                  <MobileMoreDropdown onNavigate={handleNavigation} />
                )}
              </div>

              {/* Regular Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    currentPage === item.page
                      ? "bg-blue-50 text-primary font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}