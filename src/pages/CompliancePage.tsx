import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { CheckCircle, Calendar, FileText, AlertCircle, Shield, Clock, Info } from "lucide-react";
import { useRouter } from "../components/Router";

export function CompliancePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const { navigateTo } = useRouter();

  const complianceCategories = [
    {
      category: "Company Compliance",
      description: "Essential compliance requirements for your company",
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      bgImage: "https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMGNvbXBsaWFuY2UlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4NjUzMjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        { name: "MSME Registration", description: "Micro, Small & Medium Enterprise registration" },
        { name: "EPF Registration", description: "Employee Provident Fund registration" },
        { name: "Shop & Establishment Registration", description: "State-specific business registration" }
      ]
    },
    {
      category: "Annual Compliance",
      description: "Yearly compliance obligations and filings",
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      bgImage: "https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFjY291bnRpbmclMjBmaW5hbmNpYWwlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzU4NjkzMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        { name: "LLP Annual Compliance", description: "Annual filings for Limited Liability Partnership" },
        { name: "Annual Compliance for Private Limited Company", description: "Complete annual filing package" },
        { name: "Outsource Bookkeeping Services", description: "Professional bookkeeping outsourcing" },
        { name: "Book Keeping and Accounting Services", description: "Complete accounting solutions" },
        { name: "Nidhi Company Compliance", description: "Annual compliance for Nidhi companies" },
        { name: "Change in LLP Agreement", description: "Modification of LLP agreement" },
        { name: "Appointment of Auditor", description: "Auditor appointment and compliance" },
        { name: "NGO Compliance", description: "Non-profit organization compliance" },
        { name: "Annual Compliance for Society", description: "Society registration annual filing" },
        { name: "Annual Compliance for Partnership Firm", description: "Partnership firm yearly compliance" },
        { name: "Form INC-20A", description: "Annual return filing for companies" },
        { name: "Trust Annual Compliance", description: "Trust annual filing requirements" },
        { name: "Partnership Firm Tax Return Filing", description: "Tax return filing for partnerships" }
      ]
    },
    {
      category: "MCA Services",
      description: "Ministry of Corporate Affairs services",
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      bgImage: "https://images.unsplash.com/photo-1758518727600-2c5f48419eac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGRvY3VtZW50YXRpb258ZW58MXx8fHwxNzU4NjkzMzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        { name: "Change Pvt Ltd Company Name", description: "Company name change procedure" },
        { name: "Close Private Limited Company", description: "Company closure and winding up" },
        { name: "Change in Registered Office", description: "Registered office address change" },
        { name: "Change in Object Clause", description: "Modification of company objectives" },
        { name: "Revival of Struck Off Companies", description: "Company revival from struck-off status" },
        { name: "Change in Director", description: "Director appointment and resignation" },
        { name: "Add Designated Partner", description: "Adding new designated partner in LLP" },
        { name: "DIR-3 KYC for Directors", description: "Director KYC compliance" },
        { name: "Strike off Section 8 Companies", description: "Section 8 company closure" }
      ]
    },
    {
      category: "Event Based Compliance",
      description: "Compliance for specific business events",
      icon: <AlertCircle className="w-8 h-8 text-orange-500" />,
      bgImage: "https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzU4NjkzMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        { name: "Winding Up of a Company", description: "Complete company winding up process" },
        { name: "Director Appointment", description: "Appointment of new directors" },
        { name: "Increase Authorized Capital", description: "Capital increase procedures" },
        { name: "Removal of Director", description: "Director removal process" },
        { name: "Change of Auditor", description: "Auditor change and appointment" },
        { name: "Issue of Shares", description: "New share issuance process" },
        { name: "Transfer of Shares", description: "Share transfer procedures" }
      ]
    },
    {
      category: "Convert Your Business",
      description: "Business structure conversion services",
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      bgImage: "https://images.unsplash.com/photo-1753955900083-b62ee8d97805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1ZGl0JTIwZmluYW5jaWFsJTIwcmV2aWV3fGVufDF8fHx8MTc1ODY5MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      services: [
        { name: "Convert Partnership Into LLP Company", description: "Partnership to LLP conversion" }
      ]
    }
  ];

  const complianceCalendar = [
    {
      month: "March",
      deadlines: [
        "ITR Filing for Companies (31st March)",
        "Annual Return Filing",
        "Board Meeting for Annual Accounts"
      ]
    },
    {
      month: "June",
      deadlines: [
        "Q1 GST Returns (10th June)",
        "Advance Tax Payment (15th June)",
        "TDS Return Filing"
      ]
    },
    {
      month: "September",
      deadlines: [
        "Q2 GST Returns (10th September)",
        "Advance Tax Payment (15th September)",
        "Half-yearly Board Meeting"
      ]
    },
    {
      month: "December",
      deadlines: [
        "Q3 GST Returns (10th December)",
        "Advance Tax Payment (15th December)",
        "Annual GST Return Filing"
      ]
    }
  ];

  const penalties = [
    {
      compliance: "Late Annual Return Filing",
      penalty: "₹100 per day (minimum ₹5,000)",
      impact: "Strike-off proceedings may be initiated"
    },
    {
      compliance: "GST Return Delay",
      penalty: "₹200 per day per return",
      impact: "GST registration may be cancelled"
    },
    {
      compliance: "Income Tax Return Delay",
      penalty: "₹5,000 to ₹10,000",
      impact: "Interest and prosecution proceedings"
    },
    {
      compliance: "Board Meeting Non-compliance",
      penalty: "₹25,000 to ₹5 lakh",
      impact: "Director disqualification"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Timely Compliance",
      description: "Never miss a deadline with our automated reminder system and expert team"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Penalty Protection",
      description: "Avoid costly penalties and legal issues with professional compliance management"
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      title: "Complete Documentation",
      description: "Maintain proper records and documentation for all regulatory requirements"
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-orange-500" />,
      title: "Risk Management",
      description: "Identify and mitigate compliance risks before they become problems"
    }
  ];

  const handleGetStarted = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsFormOpen(true);
  };

  const getServiceRoute = (serviceName: string): string => {
    const serviceRoutes: Record<string, string> = {
      "MSME Registration": "msme-registration",
      "EPF Registration": "epf-registration",
      "Shop & Establishment Registration": "shop-establishment-registration",
      "LLP Annual Compliance": "llp-annual-compliance",
      "Annual Compliance for Private Limited Company": "annual-compliance-private-limited",
      "Outsource Bookkeeping Services": "outsource-bookkeeping",
      "Book Keeping and Accounting Services": "bookkeeping-accounting",
      "Nidhi Company Compliance": "nidhi-company-compliance",
      "Change in LLP Agreement": "change-llp-agreement",
      "Appointment of Auditor": "appointment-auditor",
      "NGO Compliance": "ngo-compliance",
      "Annual Compliance for Society": "annual-compliance-society",
      "Annual Compliance for Partnership Firm": "annual-compliance-partnership",
      "Form INC-20A": "form-inc-20a",
      "Trust Annual Compliance": "trust-annual-compliance",
      "Partnership Firm Tax Return Filing": "partnership-tax-return",
      "Change Pvt Ltd Company Name": "change-company-name",
      "Close Private Limited Company": "close-private-limited",
      "Change in Registered Office": "change-registered-office",
      "Change in Object Clause": "change-object-clause",
      "Revival of Struck Off Companies": "revival-struck-off",
      "Change in Director": "change-director",
      "Add Designated Partner": "add-designated-partner",
      "DIR-3 KYC for Directors": "dir-3-kyc",
      "Strike off Section 8 Companies": "strike-off-section-8",
      "Winding Up of a Company": "winding-up-company",
      "Director Appointment": "director-appointment",
      "Increase Authorized Capital": "increase-authorized-capital",
      "Removal of Director": "removal-director",
      "Change of Auditor": "change-auditor",
      "Issue of Shares": "issue-shares",
      "Transfer of Shares": "transfer-shares",
      "Convert Partnership Into LLP Company": "convert-partnership-llp"
    };
    
    return serviceRoutes[serviceName] || "";
  };

  const handleMoreDetails = (serviceName: string) => {
    const route = getServiceRoute(serviceName);
    if (route) {
      navigateTo(route as any);
    }
  };

  return (
    <>
      <div>
        <PageHero 
          title="Compliance Services"
          subtitle="Stay compliant with all regulatory requirements. Our expert team ensures timely filing and helps you avoid penalties."
          backgroundImage="https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMGNvbXBsaWFuY2UlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4NjUzMjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />
        
        {/* Compliance Services by Category */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Compliance Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From annual filings to event-based compliance, we handle all your regulatory requirements professionally and on time.
              </p>
            </div>

            <div className="space-y-12">
              {complianceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-gray-50 rounded-lg overflow-hidden">
                  {/* Category Header with Background Image */}
                  <div 
                    className="relative h-32 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(30, 64, 175, 0.5) 100%), url('${category.bgImage}')`
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="flex justify-center mb-2">
                          {category.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{category.category}</h3>
                        <p className="text-gray-200">{category.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Services Section */}
                  <div className="p-8">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.services.map((service, serviceIndex) => (
                        <Card key={serviceIndex} className="hover:shadow-lg transition-shadow bg-white">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                                <div className="flex gap-2">
                                  <Button 
                                    size="sm"
                                    onClick={() => handleGetStarted(service.name)}
                                  >
                                    Get Started
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleMoreDetails(service.name)}
                                  >
                                    <Info className="w-4 h-4 mr-1" />
                                    Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Calendar */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Annual Compliance Calendar</h2>
              <p className="text-lg text-gray-600">
                Stay ahead with our quarterly compliance deadlines overview
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceCalendar.map((quarter, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl text-center text-blue-600">{quarter.month}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {quarter.deadlines.map((deadline, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Calendar className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {deadline}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Penalty Information */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Avoid Heavy Penalties</h2>
              <p className="text-lg text-gray-600">
                Non-compliance can result in significant financial and legal consequences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {penalties.map((penalty, index) => (
                <Card key={index} className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                      {penalty.compliance}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <span className="font-semibold text-red-600">Penalty: </span>
                        {penalty.penalty}
                      </div>
                      <div>
                        <span className="font-semibold text-red-600">Impact: </span>
                        {penalty.impact}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Compliance Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Compliance Services</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ensure 100% Compliance</h2>
            <p className="text-xl mb-8">
              Let our experts handle all your compliance requirements while you focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-4"
                onClick={() => handleGetStarted("Compliance Audit")}
              >
                Get Compliance Audit
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleGetStarted("All Compliance Services")}
              >
                View All Services
              </Button>
            </div>
          </div>
        </section>
      </div>

      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        serviceType={selectedService}
      />
    </>
  );
}