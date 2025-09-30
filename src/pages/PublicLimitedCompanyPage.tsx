import { ServicePageTemplate } from "../components/ServicePageTemplate";

export function PublicLimitedCompanyPage() {
  return (
    <ServicePageTemplate
      title="Public Limited Company Registration"
      subtitle="Register your Public Limited Company with IPO readiness and public fundraising capabilities"
      description="A Public Limited Company is ideal for businesses planning to raise capital from the public through share offerings. It provides maximum credibility, unlimited growth potential, and access to capital markets while ensuring compliance with stringent regulatory requirements."
      benefits={[
        "Access to Public Capital Markets",
        "IPO and Share Listing Eligibility",
        "Maximum Business Credibility",
        "Unlimited Fundraising Potential",
        "Transfer of Shares to Public",
        "Tax Benefits and Incentives",
        "Perpetual Succession",
        "Limited Liability Protection",
        "Professional Management Structure",
        "Regulatory Compliance Framework"
      ]}
      requirements={[
        "Minimum 3 Directors (Maximum 15)",
        "Minimum 7 Shareholders (No Maximum Limit)",
        "Minimum Authorized Capital: ₹5,00,000",
        "Directors must have DIN",
        "Digital Signature Certificate (DSC)",
        "Registered Office Address",
        "Memorandum and Articles of Association",
        "Compliance Officer Appointment"
      ]}
      documents={[
        "PAN Card of all Directors",
        "Aadhaar Card of all Directors",
        "Passport Size Photographs",
        "Address Proof of Directors",
        "Address Proof of Registered Office",
        "Utility Bills (Electricity/Water/Gas)",
        "No Objection Certificate (if rented)",
        "Board Resolution",
        "Subscriber Sheet",
        "Declaration of Compliance"
      ]}
      process={[
        {
          step: 1,
          title: "Name Reservation",
          description: "Apply for company name approval with MCA",
          duration: "2-3 days"
        },
        {
          step: 2,
          title: "Document Preparation",
          description: "Prepare MOA, AOA and other incorporation documents",
          duration: "2-3 days"
        },
        {
          step: 3,
          title: "Filing with ROC",
          description: "Submit incorporation application with Registrar",
          duration: "7-15 days"
        },
        {
          step: 4,
          title: "Certificate Issue",
          description: "Receive Certificate of Incorporation",
          duration: "1-2 days"
        }
      ]}
    />
  );
}