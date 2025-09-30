import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle, Clock, FileText, Users, Shield, Award, X } from "lucide-react";

interface RegistrationDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  registrationType: string;
  onGetStarted: () => void;
}

export function RegistrationDetailsModal({ 
  isOpen, 
  onClose, 
  registrationType,
  onGetStarted 
}: RegistrationDetailsModalProps) {
  
  const getRegistrationDetails = (type: string) => {
    switch (type) {
      case "Private Limited Company":
        return {
          title: "Private Limited Company Registration",
          description: "Most popular choice for startups and growing businesses with limited liability protection",
          minDirectors: "2",
          minShareholders: "2",
          paidUpCapital: "₹1 lakh minimum",
          advantages: [
            "Limited Liability Protection",
            "Separate Legal Entity",
            "Easy Transfer of Ownership",
            "Access to Funding & Investment",
            "Tax Benefits & Exemptions",
            "Build Business Credit",
            "Professional Credibility",
            "Perpetual Existence"
          ],
          documents: [
            "PAN Card of Directors",
            "Aadhaar Card of Directors", 
            "Passport Size Photos",
            "Address Proof (Utility Bill)",
            "Bank Statement (3 months)",
            "Rent Agreement (if rented premises)",
            "NOC from Property Owner"
          ],
          process: [
            "Digital Signature Certificate (DSC)",
            "Director Identification Number (DIN)",
            "Name Reservation (RUN)",
            "Incorporation Filing",
            "Certificate of Incorporation",
            "PAN & TAN Application"
          ],
          compliance: [
            "Annual Return Filing",
            "Income Tax Return",
            "Board Meetings (minimum 4 per year)",
            "Annual General Meeting",
            "Maintenance of Statutory Registers"
          ]
        };
      
      case "One Person Company (OPC)":
        return {
          title: "One Person Company (OPC) Registration",
          description: "Perfect for single entrepreneurs who want limited liability with sole ownership", 
          minDirectors: "1",
          minShareholders: "1",
          paidUpCapital: "₹1 lakh minimum",
          advantages: [
            "Single Person Ownership",
            "Limited Liability Protection",
            "Separate Legal Entity",
            "Easy Compliance Requirements",
            "Professional Credibility",
            "Tax Benefits",
            "Easy Conversion to Private Limited",
            "Perpetual Succession"
          ],
          documents: [
            "PAN Card of Director",
            "Aadhaar Card of Director",
            "Passport Size Photo",
            "Address Proof",
            "Bank Statement",
            "Nominee Details & Consent",
            "Registered Office Proof"
          ],
          process: [
            "Digital Signature Certificate (DSC)",
            "Director Identification Number (DIN)",
            "Name Reservation",
            "Incorporation Filing",
            "Certificate of Incorporation",
            "PAN & TAN Application"
          ],
          compliance: [
            "Annual Return Filing",
            "Income Tax Return",
            "Board Resolution",
            "Financial Statement Filing",
            "Annual Filing with MCA"
          ]
        };

      case "Limited Liability Partnership (LLP)":
        return {
          title: "Limited Liability Partnership (LLP) Registration",
          description: "Ideal for professional services and partnerships with flexible structure",
          minDirectors: "2 Partners",
          minShareholders: "N/A",
          paidUpCapital: "No minimum requirement",
          advantages: [
            "Limited Liability for Partners",
            "Flexible Management Structure", 
            "Tax Efficient Structure",
            "Easy Addition/Removal of Partners",
            "Lower Compliance Requirements",
            "Professional Image",
            "Perpetual Existence",
            "No Audit Requirement (turnover < ₹40 lakhs)"
          ],
          documents: [
            "PAN Card of Partners",
            "Aadhaar Card of Partners",
            "Passport Size Photos",
            "Address Proof of Partners",
            "Bank Statement",
            "Registered Office Proof",
            "Partnership Agreement Draft"
          ],
          process: [
            "Digital Signature Certificate (DSC)",
            "Designated Partner Identification Number (DPIN)",
            "Name Reservation",
            "LLP Incorporation",
            "Certificate of Incorporation",
            "PAN & TAN Application"
          ],
          compliance: [
            "Annual Return Filing",
            "Income Tax Return",
            "Statement of Account & Solvency",
            "Partnership Agreement Updates",
            "Annual Filing with MCA"
          ]
        };

      case "Partnership Firm":
        return {
          title: "Partnership Firm Registration",
          description: "Simple structure for small businesses with shared profits and responsibilities",
          minDirectors: "2 Partners",
          minShareholders: "N/A", 
          paidUpCapital: "No minimum requirement",
          advantages: [
            "Easy Formation & Setup",
            "Shared Profits & Losses",
            "Quick Decision Making",
            "Minimal Legal Formalities",
            "Tax Benefits for Partners",
            "Flexible Operations",
            "Lower Registration Cost",
            "Direct Tax Benefits"
          ],
          documents: [
            "PAN Card of Partners",
            "Aadhaar Card of Partners",
            "Passport Size Photos", 
            "Address Proof of Partners",
            "Bank Statement",
            "Partnership Deed",
            "Registered Office Proof"
          ],
          process: [
            "Partnership Deed Preparation",
            "Registration with Registrar",
            "Certificate of Registration",
            "PAN Application for Firm",
            "Bank Account Opening",
            "Other License Applications"
          ],
          compliance: [
            "Income Tax Return Filing",
            "Annual Information Return",
            "Partnership Return Filing",
            "GST Compliance (if applicable)",
            "TDS Compliance"
          ]
        };

      case "Sole Proprietorship":
        return {
          title: "Sole Proprietorship Registration",
          description: "Simplest form for individual entrepreneurs with complete control",
          minDirectors: "1 (Owner)",
          minShareholders: "N/A",
          paidUpCapital: "No minimum requirement",
          advantages: [
            "Complete Ownership & Control",
            "Easy Setup & Minimal Cost",
            "Direct Tax Benefits",
            "Quick Decision Making",
            "Minimal Legal Compliance",
            "Easy Closure Process",
            "No Sharing of Profits",
            "Simple Business Operations"
          ],
          documents: [
            "PAN Card of Proprietor",
            "Aadhaar Card of Proprietor",
            "Passport Size Photo",
            "Address Proof",
            "Bank Statement",
            "Business Address Proof",
            "Declaration Form"
          ],
          process: [
            "Business Name Registration",
            "GST Registration (if required)",
            "Shop & Establishment License",
            "Bank Account Opening",
            "Other Business Licenses",
            "MSME Registration (optional)"
          ],
          compliance: [
            "Income Tax Return Filing",
            "GST Returns (if applicable)",
            "Professional Tax (state-wise)",
            "License Renewals",
            "TDS Compliance"
          ]
        };

      case "Section 8 Company (NGO)":
        return {
          title: "Section 8 Company (NGO) Registration",
          description: "For non-profit organizations with charitable or social objectives",
          minDirectors: "3",
          minShareholders: "3",
          paidUpCapital: "No minimum requirement",
          advantages: [
            "Tax Exemption Benefits",
            "80G & 12A Registration Eligibility",
            "CSR Funding Eligibility",
            "Government Grants Access",
            "Credibility & Trust",
            "Perpetual Existence",
            "Limited Liability Protection",
            "Foreign Funding (with FCRA)"
          ],
          documents: [
            "PAN Card of Directors",
            "Aadhaar Card of Directors",
            "Passport Size Photos",
            "Address Proof of Directors",
            "Educational Qualifications",
            "Affidavit of Directors",
            "Registered Office Proof",
            "Project Report/Proposal"
          ],
          process: [
            "Digital Signature Certificate (DSC)",
            "Director Identification Number (DIN)",
            "Name Reservation with 'Foundation/Trust/Society'",
            "MCA Approval for Section 8",
            "Incorporation Certificate",
            "12A & 80G Registration"
          ],
          compliance: [
            "Annual Return Filing",
            "Annual Activity Report",
            "Income Tax Return (if applicable)",
            "Board Meetings",
            "Compliance with Section 8 Rules"
          ]
        };

      default:
        return {
          title: "Business Registration Details",
          description: "Complete information about business registration process",
          minDirectors: "As required",
          minShareholders: "As required", 
          paidUpCapital: "As per requirement",
          advantages: ["Professional Setup", "Legal Compliance", "Business Growth"],
          documents: ["Required Documents", "Address Proof", "Identity Proof"],
          process: ["Application", "Verification", "Approval", "Certificate"],
          compliance: ["Annual Filing", "Tax Returns", "Regulatory Compliance"]
        };
    }
  };

  const details = getRegistrationDetails(registrationType);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-blue-600">{details.title}</DialogTitle>
          <DialogDescription className="text-lg">
            {details.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Quick Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold flex items-center mb-3">
                <Clock className="w-4 h-4 mr-2 text-blue-600" />
                Quick Info
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Min Directors:</span>
                  <span className="font-medium">{details.minDirectors}</span>
                </div>
                {details.minShareholders !== "N/A" && (
                  <div className="flex justify-between">
                    <span>Min Shareholders:</span>
                    <span className="font-medium">{details.minShareholders}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Capital:</span>
                  <span className="font-medium">{details.paidUpCapital}</span>
                </div>
              </div>
            </div>

            <Button 
              className="w-full" 
              onClick={() => {
                onGetStarted();
                onClose();
              }}
            >
              Get Started Now
            </Button>
          </div>

          {/* Detailed Information */}
          <div className="md:col-span-2 space-y-6">
            {/* Advantages */}
            <div>
              <h4 className="font-semibold flex items-center mb-3">
                <Award className="w-4 h-4 mr-2 text-green-600" />
                Key Advantages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {details.advantages.map((advantage, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    {advantage}
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div>
              <h4 className="font-semibold flex items-center mb-3">
                <FileText className="w-4 h-4 mr-2 text-orange-600" />
                Required Documents
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {details.documents.map((doc, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <CheckCircle className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Process */}
            <div>
              <h4 className="font-semibold flex items-center mb-3">
                <Users className="w-4 h-4 mr-2 text-purple-600" />
                Registration Process
              </h4>
              <div className="space-y-2">
                {details.process.map((step, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                      {idx + 1}
                    </div>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Requirements */}
            <div>
              <h4 className="font-semibold flex items-center mb-3">
                <Shield className="w-4 h-4 mr-2 text-red-600" />
                Annual Compliance
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {details.compliance.map((requirement, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <CheckCircle className="w-3 h-3 text-red-500 mr-2 flex-shrink-0" />
                    {requirement}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button 
            onClick={() => {
              onGetStarted();
              onClose();
            }}
          >
            Start Registration Process
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}