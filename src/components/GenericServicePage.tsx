import { ServicePageTemplate } from "./ServicePageTemplate";

// Service data mapping
const serviceData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  category: string;
}> = {
  "opc-registration": {
    title: "One Person Company (OPC) Registration",
    subtitle: "Register your OPC with single-person ownership and limited liability benefits",
    description: "One Person Company (OPC) allows a single entrepreneur to operate a corporate entity with limited liability protection. It combines the benefits of sole proprietorship and company structure, making it ideal for small-scale businesses and individual entrepreneurs.",
    benefits: [
      "Single Person Ownership",
      "Limited Liability Protection",
      "Separate Legal Entity",
      "Perpetual Succession",
      "Credibility Enhancement",
      "Easy Compliance",
      "Capital Raising Options",
      "Professional Structure"
    ],
    category: "Company Registration"
  },
  "society-registration": {
    title: "Society Registration",
    subtitle: "Register your Society for non-profit activities and social welfare initiatives",
    description: "Society registration is ideal for groups of individuals coming together for charitable, educational, scientific, or literary purposes. A registered society enjoys legal recognition, tax benefits, and the ability to receive donations for social causes.",
    benefits: [
      "Legal Recognition",
      "Tax Exemption Benefits",
      "Donation Eligibility",
      "Government Grants Access",
      "Perpetual Succession",
      "Limited Liability",
      "Social Impact",
      "Credibility Enhancement"
    ],
    category: "Company Registration"
  },
  "startup-india": {
    title: "Startup India Registration",
    subtitle: "Register under Startup India initiative for government benefits and support",
    description: "Startup India registration provides access to various government schemes, tax benefits, and support programs designed to foster innovation and entrepreneurship. It offers a comprehensive ecosystem for startups to grow and scale their businesses.",
    benefits: [
      "Tax Exemptions for 3 Years",
      "Self-Certification Compliance",
      "Fast-Track Patent Application",
      "Government Tenders Exemption",
      "Funding Support Access",
      "Incubation Support",
      "Networking Opportunities",
      "Mentor Access"
    ],
    category: "Company Registration"
  },
  "virtual-office": {
    title: "Virtual Office Services",
    subtitle: "Get a prestigious business address without physical office space",
    description: "Virtual Office services provide businesses with a professional address, mail handling, and communication services without the need for physical office space. It's cost-effective for startups and businesses looking to establish presence in prime locations.",
    benefits: [
      "Professional Business Address",
      "Mail Forwarding Services",
      "Phone Answering Services",
      "Meeting Room Access",
      "Cost-Effective Solution",
      "Prime Location Presence",
      "Business Registration Address",
      "Flexible Services"
    ],
    category: "Company Registration"
  },
  "fssai-registration": {
    title: "FSSAI Registration",
    subtitle: "Get FSSAI license for food business operations and legal compliance",
    description: "FSSAI (Food Safety and Standards Authority of India) registration is mandatory for all food businesses in India. It ensures food safety standards and provides legal authorization to manufacture, store, distribute, or sell food products.",
    benefits: [
      "Legal Food Business Operation",
      "Consumer Trust Building",
      "Market Access",
      "Export Eligibility",
      "Brand Credibility",
      "Quality Assurance",
      "Regulatory Compliance",
      "Business Growth Support"
    ],
    category: "FSSAI Registration"
  },
  "trade-license": {
    title: "Trade License",
    subtitle: "Obtain trade license for legal business operations in your locality",
    description: "Trade License is a mandatory document issued by municipal authorities that allows businesses to operate legally in a specific area. It ensures compliance with local regulations and provides authorization for commercial activities.",
    benefits: [
      "Legal Business Authorization",
      "Local Compliance",
      "Business Credibility",
      "Bank Account Opening",
      "Government Tender Eligibility",
      "Insurance Claims",
      "Legal Protection",
      "Business Expansion Support"
    ],
    category: "Trade License"
  },
  "gst-registration": {
    title: "GST Registration",
    subtitle: "Register for GST and ensure tax compliance for your business operations",
    description: "GST Registration is mandatory for businesses with turnover exceeding prescribed limits. It provides input tax credit benefits, legal recognition, and enables seamless interstate business operations under India's unified tax system.",
    benefits: [
      "Input Tax Credit Benefits",
      "Legal Business Recognition",
      "Interstate Trade Facilitation",
      "Enhanced Credibility",
      "Government Scheme Access",
      "Easy Loan Approval",
      "Online Compliance",
      "Tax Optimization"
    ],
    category: "Government Registration"
  },
  // Company Compliance Services
  "msme-registration": {
    title: "MSME Registration",
    subtitle: "Micro, Small & Medium Enterprise registration for government benefits",
    description: "MSME Registration provides recognition to micro, small, and medium enterprises, offering various government benefits, subsidies, and support schemes to promote business growth and development.",
    benefits: [
      "Government Subsidy Access",
      "Priority Sector Lending",
      "Collateral-Free Loans",
      "Protection Against Delayed Payments",
      "Tax Benefits",
      "Technology Upgradation Support",
      "Market Development Assistance",
      "Export Promotion Benefits"
    ],
    category: "Company Compliance"
  },
  "epf-registration": {
    title: "EPF Registration",
    subtitle: "Employee Provident Fund registration for employee benefits",
    description: "EPF Registration is mandatory for establishments with 20 or more employees. It provides social security benefits to employees through provident fund, pension scheme, and insurance coverage.",
    benefits: [
      "Employee Social Security",
      "Retirement Benefits",
      "Insurance Coverage",
      "Tax Benefits",
      "Legal Compliance",
      "Employee Retention",
      "Government Subsidies",
      "Professional Credibility"
    ],
    category: "Company Compliance"
  },
  "shop-establishment-registration": {
    title: "Shop & Establishment Registration",
    subtitle: "State-specific business registration for commercial establishments",
    description: "Shop & Establishment Registration is a mandatory license required for businesses operating commercial establishments. It regulates working conditions, hours of work, and employment terms.",
    benefits: [
      "Legal Business Operation",
      "Employee Protection Rights",
      "Bank Account Opening",
      "License for Other Registrations",
      "Government Scheme Access",
      "Business Credibility",
      "Loan Eligibility",
      "Regulatory Compliance"
    ],
    category: "Company Compliance"
  },
  // Annual Compliance Services
  "llp-annual-compliance": {
    title: "LLP Annual Compliance",
    subtitle: "Annual filings and compliance requirements for Limited Liability Partnership",
    description: "LLP Annual Compliance includes filing annual returns, maintaining statutory records, and ensuring regulatory compliance as per the Limited Liability Partnership Act.",
    benefits: [
      "Regulatory Compliance",
      "Penalty Avoidance",
      "Good Standing Maintenance",
      "Partner Protection",
      "Business Continuity",
      "Tax Benefits",
      "Legal Protection",
      "Professional Management"
    ],
    category: "Annual Compliance"
  },
  "annual-compliance-private-limited": {
    title: "Annual Compliance for Private Limited Company",
    subtitle: "Complete annual filing package for private limited companies",
    description: "Annual Compliance for Private Limited Companies includes filing annual returns, financial statements, board resolutions, and maintaining statutory compliance with ROC.",
    benefits: [
      "Complete ROC Compliance",
      "Penalty Prevention",
      "Statutory Record Maintenance",
      "Director Protection",
      "Business Good Standing",
      "Audit Compliance",
      "Tax Optimization",
      "Legal Safety"
    ],
    category: "Annual Compliance"
  },
  "outsource-bookkeeping": {
    title: "Outsource Bookkeeping Services",
    subtitle: "Professional bookkeeping outsourcing for business efficiency",
    description: "Outsource Bookkeeping Services provide professional management of financial records, accounting processes, and regulatory compliance, allowing businesses to focus on core operations.",
    benefits: [
      "Cost-Effective Solutions",
      "Professional Expertise",
      "Time Saving",
      "Accurate Financial Records",
      "Regulatory Compliance",
      "Business Focus",
      "Scalable Services",
      "Technology Integration"
    ],
    category: "Annual Compliance"
  },
  "bookkeeping-accounting": {
    title: "Book Keeping and Accounting Services",
    subtitle: "Complete accounting solutions for business financial management",
    description: "Comprehensive bookkeeping and accounting services including financial record maintenance, tax preparation, and business advisory to ensure accurate financial management.",
    benefits: [
      "Accurate Financial Records",
      "Tax Preparation Support",
      "Business Advisory",
      "Cash Flow Management",
      "Financial Reporting",
      "Compliance Assurance",
      "Growth Planning",
      "Professional Standards"
    ],
    category: "Annual Compliance"
  },
  "nidhi-company-compliance": {
    title: "Nidhi Company Compliance",
    subtitle: "Annual compliance and regulatory requirements for Nidhi companies",
    description: "Nidhi Company Compliance includes annual filing requirements, maintaining member records, and ensuring compliance with specific regulations governing Nidhi companies.",
    benefits: [
      "Regulatory Compliance",
      "Member Protection",
      "RBI Compliance",
      "Penalty Avoidance",
      "Operational Continuity",
      "Legal Protection",
      "Business Credibility",
      "Growth Support"
    ],
    category: "Annual Compliance"
  },
  "change-llp-agreement": {
    title: "Change in LLP Agreement",
    subtitle: "Modification and updating of LLP partnership agreement",
    description: "Change in LLP Agreement involves modifying the Limited Liability Partnership agreement to reflect new terms, conditions, or structural changes as per business requirements.",
    benefits: [
      "Business Flexibility",
      "Legal Update",
      "Partner Rights Protection",
      "Regulatory Compliance",
      "Dispute Prevention",
      "Operational Clarity",
      "Growth Accommodation",
      "Professional Structure"
    ],
    category: "Annual Compliance"
  },
  "appointment-auditor": {
    title: "Appointment of Auditor",
    subtitle: "Auditor appointment and compliance procedures",
    description: "Appointment of Auditor involves selecting qualified auditors and completing necessary formalities for annual audit compliance as per company law requirements.",
    benefits: [
      "Audit Compliance",
      "Professional Standards",
      "Legal Requirements",
      "Financial Transparency",
      "Stakeholder Confidence",
      "Regulatory Adherence",
      "Quality Assurance",
      "Business Credibility"
    ],
    category: "Annual Compliance"
  },
  "ngo-compliance": {
    title: "NGO Compliance",
    subtitle: "Non-profit organization compliance and regulatory filings",
    description: "NGO Compliance includes annual filing requirements, maintaining donor records, and ensuring compliance with regulations governing non-profit organizations.",
    benefits: [
      "Regulatory Compliance",
      "Tax Exemption Maintenance",
      "Donor Confidence",
      "Grant Eligibility",
      "Legal Protection",
      "Transparency Standards",
      "Operational Continuity",
      "Social Impact"
    ],
    category: "Annual Compliance"
  },
  "annual-compliance-society": {
    title: "Annual Compliance for Society",
    subtitle: "Society registration annual filing and compliance requirements",
    description: "Annual Compliance for Society includes filing annual returns, maintaining member records, and ensuring ongoing compliance with society registration requirements.",
    benefits: [
      "Legal Status Maintenance",
      "Tax Benefits Continuation",
      "Regulatory Compliance",
      "Member Protection",
      "Grant Eligibility",
      "Social Recognition",
      "Operational Legality",
      "Community Trust"
    ],
    category: "Annual Compliance"
  },
  "annual-compliance-partnership": {
    title: "Annual Compliance for Partnership Firm",
    subtitle: "Partnership firm yearly compliance and filing requirements",
    description: "Annual Compliance for Partnership Firm includes tax filing, maintaining partnership records, and ensuring ongoing compliance with partnership regulations.",
    benefits: [
      "Tax Compliance",
      "Partner Protection",
      "Legal Status Maintenance",
      "Business Continuity",
      "Regulatory Adherence",
      "Financial Transparency",
      "Growth Support",
      "Professional Management"
    ],
    category: "Annual Compliance"
  },
  "form-inc-20a": {
    title: "Form INC-20A",
    subtitle: "Annual return filing for companies with ROC",
    description: "Form INC-20A is the annual return form filed by companies with the Registrar of Companies, containing details about company's affairs, shareholding, and financial position.",
    benefits: [
      "ROC Compliance",
      "Legal Requirement Fulfillment",
      "Company Good Standing",
      "Penalty Avoidance",
      "Stakeholder Transparency",
      "Regulatory Adherence",
      "Business Credibility",
      "Operational Continuity"
    ],
    category: "Annual Compliance"
  },
  "trust-annual-compliance": {
    title: "Trust Annual Compliance",
    subtitle: "Trust annual filing requirements and regulatory compliance",
    description: "Trust Annual Compliance includes filing annual returns, maintaining beneficiary records, and ensuring ongoing compliance with trust deed and regulations.",
    benefits: [
      "Legal Status Maintenance",
      "Tax Exemption Benefits",
      "Regulatory Compliance",
      "Beneficiary Protection",
      "Donation Eligibility",
      "Government Recognition",
      "Operational Legality",
      "Trust Credibility"
    ],
    category: "Annual Compliance"
  },
  "partnership-tax-return": {
    title: "Partnership Firm Tax Return Filing",
    subtitle: "Tax return filing services for partnership firms",
    description: "Partnership Firm Tax Return Filing includes preparation and filing of income tax returns for partnership firms, ensuring tax compliance and optimization.",
    benefits: [
      "Tax Compliance",
      "Penalty Avoidance",
      "Refund Optimization",
      "Legal Protection",
      "Financial Planning",
      "Professional Standards",
      "Audit Preparedness",
      "Business Growth Support"
    ],
    category: "Annual Compliance"
  },
  // MCA Services
  "change-company-name": {
    title: "Change Pvt Ltd Company Name",
    subtitle: "Company name change procedure with regulatory approval",
    description: "Change Private Limited Company Name involves legal procedures to modify company name, including ROC approval and updating all regulatory records.",
    benefits: [
      "Brand Flexibility",
      "Market Positioning",
      "Legal Name Change",
      "Regulatory Update",
      "Business Rebranding",
      "Corporate Identity",
      "Stakeholder Communication",
      "Professional Image"
    ],
    category: "MCA Services"
  },
  "close-private-limited": {
    title: "Close Private Limited Company",
    subtitle: "Company closure and winding up procedures",
    description: "Close Private Limited Company involves the legal process of company closure, including settling liabilities, distributing assets, and completing regulatory formalities.",
    benefits: [
      "Legal Closure",
      "Liability Settlement",
      "Asset Distribution",
      "Regulatory Compliance",
      "Director Relief",
      "Tax Clearance",
      "Professional Closure",
      "Legal Protection"
    ],
    category: "MCA Services"
  },
  "change-registered-office": {
    title: "Change in Registered Office",
    subtitle: "Registered office address change procedures",
    description: "Change in Registered Office involves updating company's registered address with ROC and other regulatory authorities as per prescribed procedures.",
    benefits: [
      "Address Flexibility",
      "Regulatory Update",
      "Business Relocation",
      "Legal Compliance",
      "Cost Optimization",
      "Operational Efficiency",
      "Professional Presence",
      "Stakeholder Communication"
    ],
    category: "MCA Services"
  },
  "change-object-clause": {
    title: "Change in Object Clause",
    subtitle: "Modification of company business objectives and activities",
    description: "Change in Object Clause involves modifying the main objects or business activities of the company as stated in the Memorandum of Association.",
    benefits: [
      "Business Diversification",
      "Legal Authorization",
      "Growth Opportunities",
      "Market Expansion",
      "Regulatory Compliance",
      "Operational Flexibility",
      "Strategic Planning",
      "Business Evolution"
    ],
    category: "MCA Services"
  },
  "revival-struck-off": {
    title: "Revival of Struck Off Companies",
    subtitle: "Company revival from struck-off status procedures",
    description: "Revival of Struck Off Companies involves restoring a company to active status after it has been struck off from the ROC register due to non-compliance.",
    benefits: [
      "Business Restoration",
      "Legal Status Recovery",
      "Asset Recovery",
      "Operational Resumption",
      "Stakeholder Protection",
      "Regulatory Compliance",
      "Business Continuity",
      "Professional Standing"
    ],
    category: "MCA Services"
  },
  "change-director": {
    title: "Change in Director",
    subtitle: "Director appointment, resignation, and change procedures",
    description: "Change in Director involves appointment of new directors, resignation of existing directors, and updating director details with regulatory authorities.",
    benefits: [
      "Leadership Flexibility",
      "Governance Update",
      "Regulatory Compliance",
      "Strategic Planning",
      "Stakeholder Management",
      "Professional Standards",
      "Business Growth",
      "Legal Protection"
    ],
    category: "MCA Services"
  },
  "add-designated-partner": {
    title: "Add Designated Partner",
    subtitle: "Adding new designated partner in Limited Liability Partnership",
    description: "Add Designated Partner involves appointing additional designated partners in LLP, including compliance formalities and regulatory filings.",
    benefits: [
      "Partnership Expansion",
      "Shared Responsibility",
      "Business Growth",
      "Risk Distribution",
      "Expertise Addition",
      "Regulatory Compliance",
      "Operational Efficiency",
      "Professional Management"
    ],
    category: "MCA Services"
  },
  "dir-3-kyc": {
    title: "DIR-3 KYC for Directors",
    subtitle: "Director KYC compliance and annual verification",
    description: "DIR-3 KYC is the annual KYC (Know Your Customer) compliance required for all directors of companies, ensuring updated director information with ROC.",
    benefits: [
      "Regulatory Compliance",
      "Director Verification",
      "Legal Requirement",
      "Penalty Avoidance",
      "Professional Standards",
      "Corporate Governance",
      "Stakeholder Confidence",
      "Operational Continuity"
    ],
    category: "MCA Services"
  },
  "strike-off-section-8": {
    title: "Strike off Section 8 Companies",
    subtitle: "Section 8 company closure and strike-off procedures",
    description: "Strike off Section 8 Companies involves the process of closing non-profit companies registered under Section 8 of the Companies Act.",
    benefits: [
      "Legal Closure",
      "Regulatory Compliance",
      "Director Relief",
      "Asset Management",
      "Tax Clearance",
      "Professional Closure",
      "Legal Protection",
      "Stakeholder Notification"
    ],
    category: "MCA Services"
  },
  // Event Based Compliance
  "winding-up-company": {
    title: "Winding Up of a Company",
    subtitle: "Complete company winding up and closure process",
    description: "Winding Up of a Company is the process of bringing a company's existence to an end, involving settlement of debts, distribution of assets, and legal closure.",
    benefits: [
      "Legal Company Closure",
      "Debt Settlement",
      "Asset Distribution",
      "Director Liability Relief",
      "Regulatory Compliance",
      "Professional Closure",
      "Stakeholder Protection",
      "Legal Finality"
    ],
    category: "Event Based Compliance"
  },
  "director-appointment": {
    title: "Director Appointment",
    subtitle: "Appointment of new directors with regulatory compliance",
    description: "Director Appointment involves the formal process of appointing new directors to a company, including regulatory filings and compliance procedures.",
    benefits: [
      "Leadership Enhancement",
      "Governance Strengthening",
      "Expertise Addition",
      "Strategic Planning",
      "Regulatory Compliance",
      "Professional Standards",
      "Business Growth",
      "Stakeholder Confidence"
    ],
    category: "Event Based Compliance"
  },
  "increase-authorized-capital": {
    title: "Increase Authorized Capital",
    subtitle: "Capital increase procedures and regulatory compliance",
    description: "Increase Authorized Capital involves raising the maximum share capital that a company is authorized to issue, requiring shareholder approval and regulatory filings.",
    benefits: [
      "Growth Capital Access",
      "Business Expansion",
      "Investor Attraction",
      "Financial Flexibility",
      "Strategic Planning",
      "Market Opportunities",
      "Regulatory Compliance",
      "Professional Structure"
    ],
    category: "Event Based Compliance"
  },
  "removal-director": {
    title: "Removal of Director",
    subtitle: "Director removal process and regulatory procedures",
    description: "Removal of Director involves the formal process of removing a director from company's board, including compliance with legal procedures and regulatory requirements.",
    benefits: [
      "Governance Flexibility",
      "Board Restructuring",
      "Professional Management",
      "Strategic Planning",
      "Regulatory Compliance",
      "Stakeholder Protection",
      "Legal Process",
      "Business Continuity"
    ],
    category: "Event Based Compliance"
  },
  "change-auditor": {
    title: "Change of Auditor",
    subtitle: "Auditor change and appointment procedures",
    description: "Change of Auditor involves replacing the existing auditor with a new one, including compliance with rotation requirements and regulatory procedures.",
    benefits: [
      "Audit Quality Enhancement",
      "Professional Standards",
      "Regulatory Compliance",
      "Fresh Perspective",
      "Cost Optimization",
      "Expertise Improvement",
      "Stakeholder Confidence",
      "Governance Strengthening"
    ],
    category: "Event Based Compliance"
  },
  "issue-shares": {
    title: "Issue of Shares",
    subtitle: "New share issuance process and regulatory compliance",
    description: "Issue of Shares involves issuing new shares to raise capital, including regulatory approvals, documentation, and compliance with securities regulations.",
    benefits: [
      "Capital Raising",
      "Business Expansion",
      "Investor Participation",
      "Growth Funding",
      "Market Access",
      "Professional Structure",
      "Regulatory Compliance",
      "Strategic Planning"
    ],
    category: "Event Based Compliance"
  },
  "transfer-shares": {
    title: "Transfer of Shares",
    subtitle: "Share transfer procedures and regulatory compliance",
    description: "Transfer of Shares involves the legal transfer of share ownership from one person to another, including documentation and regulatory compliance.",
    benefits: [
      "Ownership Transfer",
      "Investment Liquidity",
      "Regulatory Compliance",
      "Legal Documentation",
      "Stakeholder Management",
      "Professional Process",
      "Market Participation",
      "Business Flexibility"
    ],
    category: "Event Based Compliance"
  },
  // Convert Your Business
  "convert-partnership-llp": {
    title: "Convert Partnership Into LLP Company",
    subtitle: "Partnership to Limited Liability Partnership conversion",
    description: "Convert Partnership Into LLP Company involves transforming a traditional partnership into a Limited Liability Partnership, providing limited liability benefits and professional structure.",
    benefits: [
      "Limited Liability Protection",
      "Professional Structure",
      "Regulatory Benefits",
      "Business Continuity",
      "Partner Protection",
      "Tax Advantages",
      "Growth Opportunities",
      "Legal Recognition"
    ],
    category: "Convert Your Business"
  },
  // IPR Services - Trademark Registration
  "trademark-renewal": {
    title: "Trademark Renewal",
    subtitle: "Renew your trademark registration to maintain protection",
    description: "Trademark Renewal is essential to maintain continuous protection of your trademark rights. The renewal process ensures your brand remains legally protected and maintains its exclusive usage rights in the marketplace.",
    benefits: [
      "Continued Brand Protection",
      "Exclusive Usage Rights",
      "Legal Enforcement Power",
      "Brand Value Maintenance",
      "Market Position Security",
      "Licensing Opportunities",
      "Investment Protection",
      "Global Recognition"
    ],
    category: "Trademark Registration"
  },
  "trademark-objection": {
    title: "Trademark Objection",
    subtitle: "Handle trademark objections and examination reports",
    description: "Trademark Objection response involves addressing concerns raised by the trademark examiner during the examination process, ensuring successful trademark registration through proper legal responses.",
    benefits: [
      "Professional Legal Response",
      "Registration Success Rate",
      "Expert Guidance",
      "Documentation Support",
      "Legal Compliance",
      "Time Efficiency",
      "Cost Optimization",
      "Brand Protection Assurance"
    ],
    category: "Trademark Registration"
  },
  "trademark-opposition": {
    title: "Trademark Opposition",
    subtitle: "Handle trademark opposition proceedings effectively",
    description: "Trademark Opposition involves defending your trademark application against opposition filed by third parties, ensuring successful registration through proper legal representation and evidence presentation.",
    benefits: [
      "Legal Defense Strategy",
      "Professional Representation",
      "Evidence Preparation",
      "Expert Advocacy",
      "Rights Protection",
      "Registration Success",
      "Cost-Effective Solutions",
      "Brand Security"
    ],
    category: "Trademark Registration"
  },
  "international-trademark": {
    title: "International Trademark Registration",
    subtitle: "Protect your brand globally with international trademark registration",
    description: "International Trademark Registration extends your brand protection across multiple countries through Madrid Protocol, providing comprehensive global trademark protection for international business expansion.",
    benefits: [
      "Global Brand Protection",
      "Madrid Protocol Benefits",
      "Cost-Effective International Filing",
      "Simplified Management",
      "Market Expansion Support",
      "Uniform Protection",
      "Centralized Administration",
      "International Recognition"
    ],
    category: "Trademark Registration"
  },
  "trademark-rectification": {
    title: "Trademark Rectification",
    subtitle: "Correct errors and modify trademark registrations",
    description: "Trademark Rectification allows correction of errors in trademark registration details, modification of trademark information, and updating registration records to reflect accurate information.",
    benefits: [
      "Error Correction",
      "Information Updates",
      "Legal Accuracy",
      "Registration Maintenance",
      "Compliance Assurance",
      "Documentation Support",
      "Professional Assistance",
      "Brand Integrity"
    ],
    category: "Trademark Registration"
  },
  "trademark-ecommerce": {
    title: "Trademark Registration for E-commerce",
    subtitle: "Specialized trademark protection for online businesses",
    description: "Trademark Registration for E-commerce provides comprehensive brand protection for online businesses, including domain protection, marketplace registration, and digital brand security measures.",
    benefits: [
      "Online Brand Protection",
      "Marketplace Registration",
      "Domain Security",
      "Digital Brand Rights",
      "E-commerce Platform Support",
      "Online Enforcement",
      "Customer Trust Building",
      "Business Credibility"
    ],
    category: "Trademark Registration"
  },
  "trademark-hearing": {
    title: "Trademark Hearing",
    subtitle: "Professional representation in trademark hearings",
    description: "Trademark Hearing representation involves professional advocacy before the trademark office during hearing proceedings, ensuring effective presentation of your case and maximizing registration success.",
    benefits: [
      "Professional Representation",
      "Expert Advocacy",
      "Legal Expertise",
      "Case Preparation",
      "Hearing Strategy",
      "Documentation Support",
      "Registration Success",
      "Legal Compliance"
    ],
    category: "Trademark Registration"
  },
  "trademark-objection-response": {
    title: "Response to Trademark Objection",
    subtitle: "Professional response to trademark examination objections",
    description: "Response to Trademark Objection involves preparing and filing comprehensive responses to examination reports, addressing all objections raised by the trademark examiner with proper legal arguments and evidence.",
    benefits: [
      "Professional Legal Response",
      "Objection Resolution",
      "Expert Legal Arguments",
      "Evidence Preparation",
      "Registration Success",
      "Compliance Assurance",
      "Time Management",
      "Cost Efficiency"
    ],
    category: "Trademark Registration"
  },
  "trademark-infringement": {
    title: "Trademark Infringement",
    subtitle: "Protect your trademark from unauthorized use and infringement",
    description: "Trademark Infringement services include monitoring, detection, and legal action against unauthorized use of your trademark, ensuring comprehensive protection of your brand rights and market position.",
    benefits: [
      "Brand Protection",
      "Legal Enforcement",
      "Infringement Detection",
      "Market Monitoring",
      "Legal Action Support",
      "Rights Enforcement",
      "Brand Value Protection",
      "Professional Advocacy"
    ],
    category: "Trademark Registration"
  },
  "trademark-assignment": {
    title: "Trademark Assignment",
    subtitle: "Transfer trademark ownership with proper legal procedures",
    description: "Trademark Assignment involves the legal transfer of trademark ownership from one party to another, including all rights, title, and interest in the trademark with proper documentation and registration.",
    benefits: [
      "Ownership Transfer",
      "Legal Documentation",
      "Rights Transfer",
      "Registration Update",
      "Compliance Assurance",
      "Professional Process",
      "Asset Management",
      "Business Flexibility"
    ],
    category: "Trademark Registration"
  },
  // Copyright Registration
  "copyright-registration": {
    title: "Copyright Registration",
    subtitle: "Protect your creative works with copyright registration",
    description: "Copyright Registration provides legal protection for original creative works including literary, artistic, musical, and software works, establishing ownership rights and enabling legal enforcement against infringement.",
    benefits: [
      "Creative Work Protection",
      "Legal Ownership Proof",
      "Infringement Protection",
      "Licensing Rights",
      "Legal Enforcement",
      "International Protection",
      "Moral Rights Protection",
      "Commercial Value Enhancement"
    ],
    category: "Copyright Registration"
  },
  // Patent Registration
  "patent-registration": {
    title: "Patent Registration",
    subtitle: "Protect your inventions with patent registration",
    description: "Patent Registration provides exclusive rights to inventions, innovations, and technical solutions, offering legal protection and commercial benefits for inventors and businesses investing in research and development.",
    benefits: [
      "Invention Protection",
      "Exclusive Rights",
      "Commercial Exploitation",
      "Licensing Opportunities",
      "Market Advantage",
      "Investment Protection",
      "Technology Transfer",
      "Innovation Recognition"
    ],
    category: "Patent Registration"
  },
  // Design Registration
  "design-registration": {
    title: "Design Registration",
    subtitle: "Protect your unique designs and visual aesthetics",
    description: "Design Registration protects the visual appearance, shape, configuration, pattern, or ornamentation of products, providing exclusive rights to unique designs and preventing unauthorized copying.",
    benefits: [
      "Design Protection",
      "Aesthetic Rights",
      "Market Exclusivity",
      "Commercial Value",
      "Brand Differentiation",
      "Design Innovation",
      "Legal Enforcement",
      "Competitive Advantage"
    ],
    category: "Design Registration"
  },
  // Intellectual Property Dispute
  "ip-dispute": {
    title: "Intellectual Property Dispute",
    subtitle: "Professional resolution of IP disputes and conflicts",
    description: "Intellectual Property Dispute resolution involves handling conflicts related to trademarks, copyrights, patents, and designs through negotiation, mediation, litigation, and other legal remedies to protect IP rights.",
    benefits: [
      "Legal Resolution",
      "Rights Protection",
      "Professional Advocacy",
      "Expert Representation",
      "Dispute Resolution",
      "Cost-Effective Solutions",
      "Strategic Guidance",
      "IP Rights Enforcement"
    ],
    category: "Intellectual Property Dispute"
  },
  // Taxation Services - Income Tax
  "income-tax-return": {
    title: "Income Tax Return Filing",
    subtitle: "Professional income tax return filing services for individuals and businesses",
    description: "Income Tax Return Filing involves preparation and submission of annual tax returns to comply with Indian tax laws, ensuring accurate calculation of tax liability and claiming eligible deductions and exemptions.",
    benefits: [
      "Professional Tax Compliance",
      "Maximum Deduction Claims",
      "Error-Free Filing",
      "Timely Submission",
      "Expert Tax Planning",
      "Refund Optimization",
      "Legal Compliance",
      "Penalty Avoidance"
    ],
    category: "Income Tax"
  },
  "tds-return": {
    title: "TDS Return Filing",
    subtitle: "Tax Deducted at Source return filing and compliance services",
    description: "TDS Return Filing involves quarterly submission of TDS returns to comply with tax deduction obligations, ensuring proper reporting of tax deductions and avoiding penalties for non-compliance.",
    benefits: [
      "Quarterly Compliance",
      "Penalty Avoidance",
      "Accurate TDS Reporting",
      "Professional Filing",
      "Legal Compliance",
      "Expert Guidance",
      "Timely Submission",
      "Cost Optimization"
    ],
    category: "Income Tax"
  },
  "pf-return": {
    title: "PF Return Filing",
    subtitle: "Provident Fund return filing and compliance services",
    description: "PF Return Filing involves submission of monthly and annual PF returns for establishments, ensuring compliance with EPF regulations and avoiding penalties for delayed submissions.",
    benefits: [
      "EPF Compliance",
      "Monthly Return Filing",
      "Annual Return Submission",
      "Penalty Avoidance",
      "Professional Support",
      "Employee Benefits",
      "Legal Compliance",
      "Expert Assistance"
    ],
    category: "Income Tax"
  },
  "itr-2-form": {
    title: "ITR 2 Form Filing",
    subtitle: "Income Tax Return Form 2 filing for individuals and HUFs",
    description: "ITR 2 Form Filing is for individuals and HUFs having income from house property, capital gains, foreign assets, or income exceeding Rs. 50 lakh, requiring detailed disclosure and professional preparation.",
    benefits: [
      "Capital Gains Reporting",
      "Foreign Asset Disclosure",
      "Professional Preparation",
      "Complex Income Handling",
      "Legal Compliance",
      "Expert Tax Planning",
      "Accurate Filing",
      "Penalty Prevention"
    ],
    category: "Income Tax"
  },
  "itr-7-form": {
    title: "ITR 7 Form Filing",
    subtitle: "Income Tax Return Form 7 filing for trusts and political parties",
    description: "ITR 7 Form Filing is specifically designed for persons including companies who are required to furnish return under sections 139(4A) or 139(4B) or 139(4C) or 139(4D), including trusts and political parties.",
    benefits: [
      "Trust Tax Compliance",
      "Political Party Filing",
      "Specialized Form Handling",
      "Professional Expertise",
      "Legal Compliance",
      "Accurate Submission",
      "Expert Guidance",
      "Penalty Avoidance"
    ],
    category: "Income Tax"
  },
  "itr-1-form": {
    title: "ITR 1 Form Filing",
    subtitle: "Simple income tax return filing for salaried individuals",
    description: "ITR 1 Form Filing is for resident individuals having income from salary, one house property, and other sources up to Rs. 50 lakh, providing a simple and straightforward tax filing process.",
    benefits: [
      "Simple Tax Filing",
      "Salaried Individual Focus",
      "Quick Processing",
      "Professional Support",
      "Accurate Calculation",
      "Refund Optimization",
      "Legal Compliance",
      "Cost-Effective"
    ],
    category: "Income Tax"
  },
  "80-iac-exemption": {
    title: "80-IAC Tax Exemption for Startups",
    subtitle: "Tax exemption benefits for eligible startup companies",
    description: "80-IAC Tax Exemption provides 100% tax exemption for three consecutive years for eligible startups, helping new businesses save on tax liability and invest more in growth and development.",
    benefits: [
      "100% Tax Exemption",
      "Three Year Benefit",
      "Startup Support",
      "Growth Capital Saving",
      "Professional Guidance",
      "Eligibility Assessment",
      "Compliance Support",
      "Strategic Tax Planning"
    ],
    category: "Income Tax"
  },
  // Taxation Services - GST
  "gst-return-filing": {
    title: "GST Return Filing",
    subtitle: "Comprehensive GST return filing services for businesses",
    description: "GST Return Filing involves monthly, quarterly, and annual submission of GST returns including GSTR-1, GSTR-3B, and other applicable returns to ensure GST compliance and avoid penalties.",
    benefits: [
      "Monthly GST Compliance",
      "All GST Return Types",
      "Input Credit Optimization",
      "Penalty Avoidance",
      "Professional Filing",
      "Expert Support",
      "Timely Submission",
      "Cost Efficiency"
    ],
    category: "Good & Service Tax"
  },
  "gstr9-return": {
    title: "GSTR9 Annual Return",
    subtitle: "Annual GST return filing and reconciliation services",
    description: "GSTR9 Annual Return is a comprehensive annual return that consolidates all monthly and quarterly returns filed during the year, requiring detailed reconciliation and professional preparation.",
    benefits: [
      "Annual Reconciliation",
      "Comprehensive Reporting",
      "Professional Preparation",
      "Compliance Assurance",
      "Error Correction",
      "Expert Guidance",
      "Penalty Prevention",
      "Detailed Analysis"
    ],
    category: "Good & Service Tax"
  },
  "cancel-gst": {
    title: "Cancel GST Registration",
    subtitle: "GST registration cancellation and closure services",
    description: "Cancel GST Registration involves the process of surrendering GST registration when business operations cease or fall below the threshold, ensuring proper closure and compliance.",
    benefits: [
      "Legal GST Closure",
      "Compliance Completion",
      "Professional Process",
      "Document Support",
      "Expert Guidance",
      "Penalty Avoidance",
      "Proper Closure",
      "Final Return Filing"
    ],
    category: "Good & Service Tax"
  },
  "virtual-place-gst": {
    title: "Virtual Place of Business in GST",
    subtitle: "GST registration for virtual business operations",
    description: "Virtual Place of Business in GST allows registration of business premises that exist digitally, essential for e-commerce and online service providers operating without physical presence.",
    benefits: [
      "Digital Business Support",
      "E-commerce Enablement",
      "Virtual Office Recognition",
      "GST Compliance",
      "Professional Registration",
      "Expert Assistance",
      "Legal Authorization",
      "Business Flexibility"
    ],
    category: "Good & Service Tax"
  },
  "additional-place-gst": {
    title: "Additional Place of Business in GST",
    subtitle: "GST registration for additional business locations",
    description: "Additional Place of Business in GST involves registering additional business premises under the same PAN, allowing businesses to operate from multiple locations with proper GST compliance.",
    benefits: [
      "Multiple Location Support",
      "Business Expansion",
      "Centralized Management",
      "GST Compliance",
      "Professional Registration",
      "Expert Support",
      "Operational Flexibility",
      "Legal Authorization"
    ],
    category: "Good & Service Tax"
  },
  "gst-ecommerce": {
    title: "GST Registration for E-commerce",
    subtitle: "Specialized GST registration for e-commerce businesses",
    description: "GST Registration for E-commerce involves specific compliance requirements for online businesses, including marketplace and vendor registrations with specialized GST provisions.",
    benefits: [
      "E-commerce Specific Compliance",
      "Marketplace Registration",
      "TCS Compliance",
      "Professional Support",
      "Online Business Authorization",
      "Expert Guidance",
      "Digital Economy Support",
      "Regulatory Compliance"
    ],
    category: "Good & Service Tax"
  },
  "gst-return-ecommerce": {
    title: "GST Return Filing for E-commerce",
    subtitle: "Specialized GST return filing for e-commerce platforms",
    description: "GST Return Filing for E-commerce involves complex return preparations for marketplace operators and e-commerce vendors, ensuring compliance with specific e-commerce GST regulations.",
    benefits: [
      "E-commerce Specific Returns",
      "TCS Return Filing",
      "Marketplace Compliance",
      "Professional Preparation",
      "Complex Calculation Support",
      "Expert Assistance",
      "Penalty Avoidance",
      "Digital Business Support"
    ],
    category: "Good & Service Tax"
  },
  "input-tax-credit": {
    title: "Input Tax Credit",
    subtitle: "Input tax credit optimization and reconciliation services",
    description: "Input Tax Credit services include optimization, reconciliation, and claiming of eligible input credits to reduce GST liability and ensure maximum tax efficiency for businesses.",
    benefits: [
      "Credit Optimization",
      "Tax Liability Reduction",
      "Professional Reconciliation",
      "Maximum Credit Claims",
      "Expert Analysis",
      "Compliance Assurance",
      "Cost Reduction",
      "Strategic Planning"
    ],
    category: "Good & Service Tax"
  },
  "gst-e-invoice": {
    title: "GST E-Invoice",
    subtitle: "Electronic invoice generation and compliance services",
    description: "GST E-Invoice involves generation of electronic invoices through the Invoice Registration Portal (IRP) for businesses with turnover above specified limits, ensuring digital compliance.",
    benefits: [
      "Digital Invoice Compliance",
      "IRP Integration",
      "Automated Processing",
      "Real-time Validation",
      "Professional Setup",
      "Expert Support",
      "Compliance Assurance",
      "Efficiency Enhancement"
    ],
    category: "Good & Service Tax"
  },
  "e-way-bill": {
    title: "E-Way Bill Registration",
    subtitle: "Electronic way bill registration and generation services",
    description: "E-Way Bill Registration enables generation of electronic way bills for movement of goods worth more than Rs. 50,000, ensuring compliance with GST transportation requirements.",
    benefits: [
      "Goods Movement Compliance",
      "Digital Documentation",
      "Transportation Authorization",
      "Professional Support",
      "Expert Registration",
      "Compliance Assurance",
      "Penalty Avoidance",
      "Efficient Processing"
    ],
    category: "Good & Service Tax"
  },
  // Consultation Services - CA Services
  "online-ca-services": {
    title: "Online Chartered Accountant Services",
    subtitle: "Comprehensive CA services delivered digitally for modern businesses",
    description: "Online Chartered Accountant Services provide professional accounting, tax, and financial advisory services through digital platforms, offering convenience and expert guidance for businesses of all sizes.",
    benefits: [
      "Digital CA Expertise",
      "Remote Professional Support",
      "Cost-Effective Solutions",
      "24/7 Accessibility",
      "Expert Financial Guidance",
      "Compliance Management",
      "Tax Optimization",
      "Business Advisory"
    ],
    category: "CA Services"
  },
  "mergers-acquisitions": {
    title: "Mergers and Acquisitions",
    subtitle: "Professional M&A advisory and transaction support services",
    description: "Mergers and Acquisitions services provide comprehensive support for corporate restructuring, business combinations, and strategic transactions including due diligence, valuation, and regulatory compliance.",
    benefits: [
      "Strategic Transaction Support",
      "Due Diligence Expertise",
      "Valuation Services",
      "Regulatory Compliance",
      "Professional Advisory",
      "Risk Assessment",
      "Deal Structuring",
      "Post-Merger Integration"
    ],
    category: "CA Services"
  },
  "financial-consultancy": {
    title: "Financial Consultancy Services",
    subtitle: "Expert financial advisory and planning services for businesses",
    description: "Financial Consultancy Services provide comprehensive financial planning, analysis, and advisory services to help businesses optimize their financial performance and achieve strategic objectives.",
    benefits: [
      "Financial Planning",
      "Investment Advisory",
      "Risk Management",
      "Cash Flow Optimization",
      "Strategic Financial Analysis",
      "Growth Planning",
      "Cost Optimization",
      "Performance Enhancement"
    ],
    category: "CA Services"
  },
  "financial-modeling": {
    title: "Financial Modeling for Startups",
    subtitle: "Professional financial modeling and forecasting for startup businesses",
    description: "Financial Modeling for Startups involves creating comprehensive financial projections, business models, and forecasting tools to support fundraising, strategic planning, and business growth.",
    benefits: [
      "Startup Financial Projections",
      "Fundraising Support",
      "Investor-Ready Models",
      "Growth Forecasting",
      "Scenario Analysis",
      "Professional Modeling",
      "Strategic Planning",
      "Business Validation"
    ],
    category: "CA Services"
  },
  // Consultation Services - Business Consultants
  "payment-gateway": {
    title: "Payment Gateway Aggregator Solutions",
    subtitle: "Comprehensive payment gateway integration and management services",
    description: "Payment Gateway Aggregator Solutions provide end-to-end payment processing solutions for businesses, including integration, compliance, and optimization of digital payment systems.",
    benefits: [
      "Multi-Gateway Integration",
      "Payment Optimization",
      "Compliance Management",
      "Transaction Security",
      "Cost Reduction",
      "Performance Analytics",
      "Technical Support",
      "Business Growth Enablement"
    ],
    category: "Business Consultants"
  },
  "startup-planning": {
    title: "Startup Planning",
    subtitle: "Comprehensive startup planning and business development services",
    description: "Startup Planning provides end-to-end support for new businesses including business plan development, market analysis, financial planning, and strategic guidance for successful business launch.",
    benefits: [
      "Business Plan Development",
      "Market Analysis",
      "Financial Planning",
      "Strategic Guidance",
      "Regulatory Compliance",
      "Investor Readiness",
      "Growth Strategy",
      "Risk Assessment"
    ],
    category: "Business Consultants"
  },
  "csr-registration": {
    title: "CSR Registration",
    subtitle: "Corporate Social Responsibility registration and compliance services",
    description: "CSR Registration involves compliance with Corporate Social Responsibility requirements for eligible companies, including CSR committee formation, policy development, and activity reporting.",
    benefits: [
      "CSR Compliance",
      "Committee Formation",
      "Policy Development",
      "Activity Planning",
      "Regulatory Adherence",
      "Impact Assessment",
      "Professional Guidance",
      "Reporting Support"
    ],
    category: "Business Consultants"
  },
  "pitch-deck": {
    title: "Pitch Deck for Start-ups",
    subtitle: "Professional pitch deck creation for startup fundraising",
    description: "Pitch Deck creation involves developing compelling investor presentations for startups, including market analysis, business model, financial projections, and growth strategies to attract funding.",
    benefits: [
      "Investor-Ready Presentations",
      "Professional Design",
      "Market Analysis",
      "Financial Projections",
      "Fundraising Support",
      "Strategic Messaging",
      "Growth Story",
      "Competitive Advantage"
    ],
    category: "Business Consultants"
  },
  // Consultation Services - Lawyer & Expert
  "consumer-complaint": {
    title: "Consumer Complaint",
    subtitle: "Consumer dispute resolution and complaint filing services",
    description: "Consumer Complaint services provide legal support for consumer disputes, including complaint filing, representation in consumer courts, and resolution of consumer grievances through proper legal channels.",
    benefits: [
      "Legal Consumer Protection",
      "Complaint Filing Support",
      "Court Representation",
      "Dispute Resolution",
      "Expert Legal Guidance",
      "Rights Protection",
      "Compensation Claims",
      "Professional Advocacy"
    ],
    category: "Lawyer & Expert"
  },
  "cheque-bounce": {
    title: "Cheque Bounce Notice",
    subtitle: "Legal notice and action for dishonored cheques",
    description: "Cheque Bounce Notice services include legal notice drafting, filing, and court proceedings for dishonored cheques under Section 138 of the Negotiable Instruments Act, ensuring legal recovery.",
    benefits: [
      "Legal Notice Drafting",
      "Court Proceedings",
      "Money Recovery",
      "Professional Representation",
      "Legal Compliance",
      "Expert Guidance",
      "Swift Action",
      "Rights Protection"
    ],
    category: "Lawyer & Expert"
  },
  // More Services - Environmental
  "consent-establish": {
    title: "Consent to Establish",
    subtitle: "Environmental clearance for establishing new industrial projects",
    description: "Consent to Establish is a mandatory environmental clearance required before setting up any industrial project, ensuring compliance with pollution control norms and environmental regulations.",
    benefits: [
      "Environmental Compliance",
      "Legal Project Authorization",
      "Pollution Control Adherence",
      "Regulatory Approval",
      "Professional Support",
      "Expert Guidance",
      "Sustainable Development",
      "Industrial Permission"
    ],
    category: "Environmental"
  },
  "environmental-due-diligence": {
    title: "Environmental Due Diligence Services",
    subtitle: "Comprehensive environmental assessment and compliance services",
    description: "Environmental Due Diligence involves thorough assessment of environmental risks, compliance status, and potential liabilities for businesses, supporting informed decision-making and risk management.",
    benefits: [
      "Risk Assessment",
      "Compliance Evaluation",
      "Environmental Audit",
      "Professional Analysis",
      "Legal Protection",
      "Expert Guidance",
      "Liability Assessment",
      "Strategic Planning"
    ],
    category: "Environmental"
  },
  "epr-registration": {
    title: "EPR Registration",
    subtitle: "Extended Producer Responsibility registration and compliance",
    description: "EPR Registration involves compliance with Extended Producer Responsibility norms for manufacturers, importers, and brand owners, ensuring proper waste management and environmental protection.",
    benefits: [
      "Waste Management Compliance",
      "Producer Responsibility",
      "Environmental Protection",
      "Regulatory Adherence",
      "Professional Registration",
      "Expert Support",
      "Sustainable Business",
      "Legal Compliance"
    ],
    category: "Environmental"
  },
  "environmental-auditing": {
    title: "Environmental Auditing",
    subtitle: "Professional environmental audit and assessment services",
    description: "Environmental Auditing involves systematic evaluation of environmental performance, compliance status, and improvement opportunities for businesses to ensure sustainable operations.",
    benefits: [
      "Performance Evaluation",
      "Compliance Assessment",
      "Improvement Identification",
      "Professional Audit",
      "Environmental Management",
      "Expert Analysis",
      "Sustainability Support",
      "Risk Mitigation"
    ],
    category: "Environmental"
  },
  "plastic-waste-auth": {
    title: "Plastic Waste Authorization",
    subtitle: "Authorization for plastic waste management and recycling",
    description: "Plastic Waste Authorization involves obtaining necessary permits for plastic waste collection, recycling, and disposal activities, ensuring compliance with plastic waste management rules.",
    benefits: [
      "Waste Management Authorization",
      "Recycling Compliance",
      "Environmental Protection",
      "Regulatory Adherence",
      "Professional Support",
      "Expert Guidance",
      "Sustainable Operations",
      "Legal Permission"
    ],
    category: "Environmental"
  },
  "epr-e-waste": {
    title: "EPR Authorization for E-Waste",
    subtitle: "Extended Producer Responsibility for electronic waste management",
    description: "EPR Authorization for E-Waste involves compliance with e-waste management rules for producers, manufacturers, and recyclers of electronic products, ensuring proper disposal and recycling.",
    benefits: [
      "E-Waste Compliance",
      "Electronic Product Responsibility",
      "Recycling Authorization",
      "Environmental Protection",
      "Regulatory Adherence",
      "Professional Support",
      "Sustainable Electronics",
      "Legal Compliance"
    ],
    category: "Environmental"
  },
  "eia-assessment": {
    title: "Environmental Impact Assessment (EIA)",
    subtitle: "Comprehensive environmental impact evaluation for projects",
    description: "Environmental Impact Assessment involves detailed analysis of potential environmental impacts of proposed projects, providing scientific basis for environmental clearance and sustainable development.",
    benefits: [
      "Impact Analysis",
      "Environmental Clearance",
      "Scientific Assessment",
      "Regulatory Compliance",
      "Professional Evaluation",
      "Expert Analysis",
      "Sustainable Development",
      "Risk Assessment"
    ],
    category: "Environmental"
  }
};

interface GenericServicePageProps {
  serviceKey: string;
}

export function GenericServicePage({ serviceKey }: GenericServicePageProps) {
  const service = serviceData[serviceKey];
  
  if (!service) {
    return (
      <ServicePageTemplate
        title="Service Registration"
        subtitle="Professional service registration with expert guidance"
        description="Get professional assistance with your service registration needs. Our expert team ensures complete compliance and hassle-free processing for all your business requirements."
        benefits={[
          "Expert Professional Guidance",
          "Complete Documentation Support",
          "Fast Processing",
          "Legal Compliance Assurance",
          "Ongoing Support",
          "Transparent Process",
          "Cost-Effective Solutions",
          "Customer Satisfaction"
        ]}
      />
    );
  }

  const defaultRequirements = [
    "Required business documents",
    "Identity and address proofs",
    "Business registration details",
    "Compliance documentation",
    "Application forms",
    "Supporting certificates"
  ];

  const defaultDocuments = [
    "PAN Card",
    "Aadhaar Card",
    "Address Proof",
    "Passport Size Photographs",
    "Business Registration Certificate",
    "Bank Account Details",
    "GST Registration (if applicable)",
    "Other relevant documents"
  ];

  const defaultProcess = [
    {
      step: 1,
      title: "Consultation",
      description: "Free consultation to understand requirements",
      duration: "1 day"
    },
    {
      step: 2,
      title: "Documentation",
      description: "Prepare and verify all required documents",
      duration: "2-3 days"
    },
    {
      step: 3,
      title: "Application Filing",
      description: "Submit application with authorities",
      duration: "5-15 days"
    },
    {
      step: 4,
      title: "Approval & Delivery",
      description: "Receive approved certificates and documents",
      duration: "1-3 days"
    }
  ];

  return (
    <ServicePageTemplate
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      benefits={service.benefits}
      requirements={defaultRequirements}
      documents={defaultDocuments}
      process={defaultProcess}
    />
  );
}