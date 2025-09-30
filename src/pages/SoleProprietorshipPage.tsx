import { ServicePageTemplate } from "../components/ServicePageTemplate";

export function SoleProprietorshipPage() {
  return (
    <ServicePageTemplate
      title="Sole Proprietorship Registration"
      subtitle="Register your Sole Proprietorship for simple, cost-effective business setup with minimal compliance"
      description="Sole Proprietorship is the simplest form of business structure where a single individual owns and operates the entire business. It offers complete control, easy setup, and minimal regulatory compliance, making it ideal for small businesses and individual entrepreneurs."
      benefits={[
        "Complete Business Control",
        "Simple Registration Process",
        "Minimal Compliance Requirements",
        "Low Cost Setup",
        "Easy Business Operations",
        "Direct Tax Benefits",
        "Quick Decision Making",
        "No Separate Legal Entity Needed",
        "Personal Asset Utilization",
        "Flexible Business Structure"
      ]}
      requirements={[
        "Single Business Owner",
        "Business Name Selection",
        "Registered Business Address",
        "PAN Card of Proprietor",
        "Aadhaar Card of Proprietor",
        "Business Activity Definition",
        "Trade License (if required)",
        "GST Registration (if applicable)"
      ]}
      documents={[
        "PAN Card of Proprietor",
        "Aadhaar Card of Proprietor",
        "Address Proof of Proprietor",
        "Passport Size Photographs",
        "Business Address Proof",
        "Utility Bills of Business Place",
        "No Objection Certificate (if rented)",
        "Bank Account Opening Documents",
        "Trade License Application",
        "GST Registration Documents"
      ]}
      process={[
        {
          step: 1,
          title: "Business Planning",
          description: "Define business activities and choose business name",
          duration: "1 day"
        },
        {
          step: 2,
          title: "Documentation",
          description: "Gather and prepare all required documents",
          duration: "1-2 days"
        },
        {
          step: 3,
          title: "Registration Process",
          description: "Apply for necessary licenses and registrations",
          duration: "5-10 days"
        },
        {
          step: 4,
          title: "Business Commencement",
          description: "Start business operations with all compliance",
          duration: "1 day"
        }
      ]}
    />
  );
}