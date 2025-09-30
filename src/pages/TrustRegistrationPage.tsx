import { ServicePageTemplate } from "../components/ServicePageTemplate";

export function TrustRegistrationPage() {
  return (
    <ServicePageTemplate
      title="Trust Registration"
      subtitle="Register your Trust for charitable, educational, or religious activities with complete legal compliance"
      description="Trust registration is ideal for individuals or groups wanting to engage in charitable, educational, religious, or social welfare activities. A registered trust enjoys tax exemptions, legal recognition, and the ability to receive donations and grants for noble causes."
      benefits={[
        "Tax Exemption under 12A & 80G",
        "Legal Entity Status",
        "Perpetual Succession",
        "Donation Receipt Eligibility",
        "Government Grant Access",
        "Foreign Funding Eligibility (FCRA)",
        "Credibility and Trust",
        "Limited Liability for Trustees",
        "Property Ownership Rights",
        "Social Impact Recognition"
      ]}
      requirements={[
        "Minimum 2 Trustees",
        "Trust Deed Execution",
        "Registered Office Address",
        "Settlor (Trust Creator)",
        "Trust Property/Corpus",
        "Defined Trust Objectives",
        "Trustee Consent Letters",
        "Trust Registration Application"
      ]}
      documents={[
        "Trust Deed (Stamp Paper)",
        "PAN Card of all Trustees",
        "Aadhaar Card of all Trustees",
        "Address Proof of Trustees",
        "Passport Size Photographs",
        "Address Proof of Trust Office",
        "Utility Bills of Office Address",
        "No Objection Certificate (if rented)",
        "Consent Letters from Trustees",
        "Affidavit of Trustees"
      ]}
      process={[
        {
          step: 1,
          title: "Trust Deed Drafting",
          description: "Prepare comprehensive trust deed with objectives",
          duration: "2-3 days"
        },
        {
          step: 2,
          title: "Deed Execution",
          description: "Execute trust deed on stamp paper with signatures",
          duration: "1 day"
        },
        {
          step: 3,
          title: "Registration Filing",
          description: "Submit application with Registrar of Trusts",
          duration: "7-15 days"
        },
        {
          step: 4,
          title: "Certificate Issue",
          description: "Receive Trust Registration Certificate",
          duration: "1-2 days"
        }
      ]}
    />
  );
}