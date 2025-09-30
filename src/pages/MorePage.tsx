import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { 
  CheckCircle, 
  Globe, 
  Building, 
  FileText, 
  Shield, 
  Users, 
  Briefcase, 
  Award,
  BookOpen,
  HelpCircle,
  Info
} from "lucide-react";

export function MorePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const additionalServices = [
    {
      title: "FSSAI License",
      description: "Food Safety and Standards Authority of India license for food businesses",
      icon: <Shield className="w-8 h-8 text-green-500" />,
      features: [
        "Basic/State/Central FSSAI",
        "Food Safety Compliance",
        "License Renewal",
        "Amendment Services"
      ],
      image: "https://images.unsplash.com/photo-1684217879196-aa55164cf7e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHNlcnZpY2VzJTIwb2ZmaWNlJTIwZGlnaXRhbHxlbnwxfHx8fDE3NTg2NTM0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Import Export Code (IEC)",
      description: "Mandatory code for import and export business activities",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      features: [
        "IEC Registration",
        "Director General of Foreign Trade",
        "Customs Clearance",
        "Export Benefits"
      ],
      image: "https://images.unsplash.com/photo-1684217879196-aa55164cf7e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHNlcnZpY2VzJTIwb2ZmaWNlJTIwZGlnaXRhbHxlbnwxfHx8fDE3NTg2NTM0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Professional Tax License",
      description: "State-wise professional tax registration and compliance",
      icon: <Award className="w-8 h-8 text-purple-500" />,
      features: [
        "Professional Tax Registration",
        "Monthly Compliance",
        "Certificate Issuance",
        "Penalty Management"
      ],
      image: "https://images.unsplash.com/photo-1684217879196-aa55164cf7e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHNlcnZpY2VzJTIwb2ZmaWNlJTIwZGlnaXRhbHxlbnwxfHx8fDE3NTg2NTM0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Digital Signature Certificate",
      description: "Digital signature for online document signing and filing",
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      features: [
        "Class 2/Class 3 DSC",
        "2-3 Years Validity",
        "E-filing Compatible",
        "Token/USB Option"
      ],
      image: "https://images.unsplash.com/photo-1684217879196-aa55164cf7e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHNlcnZpY2VzJTIwb2ZmaWNlJTIwZGlnaXRhbHxlbnwxfHx8fDE3NTg2NTM0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Startup India Registration",
      description: "Recognition and benefits under Startup India initiative",
      icon: <Building className="w-8 h-8 text-red-500" />,
      features: [
        "DPIIT Recognition",
        "Tax Exemptions",
        "Compliance Relaxations",
        "IPR Benefits"
      ],
      image: "https://images.unsplash.com/photo-1684217879196-aa55164cf7e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHNlcnZpY2VzJTIwb2ZmaWNlJTIwZGlnaXRhbHxlbnwxfHx8fDE3NTg2NTM0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "MSME Registration",
      description: "Micro, Small and Medium Enterprises registration for benefits",
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      features: [
        "Udyam Registration",
        "Government Subsidies",
        "Easy Loan Access",
        "Tender Benefits"
      ],
      image: "https://images.unsplash.com/photo-1684217879196-aa55164cf7e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHNlcnZpY2VzJTIwb2ZmaWNlJTIwZGlnaXRhbHxlbnwxfHx8fDE3NTg2NTM0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const businessSupport = [
    {
      title: "Business Plan Development",
      description: "Comprehensive business plan for funding and strategic direction",
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      details: "Market research, financial projections, competitive analysis"
    },
    {
      title: "Funding Assistance",
      description: "Support in raising funds from investors and financial institutions",
      icon: <Award className="w-6 h-6 text-green-500" />,
      details: "Pitch deck preparation, investor connections, loan documentation"
    },
    {
      title: "Legal Documentation",
      description: "Comprehensive legal document drafting and review services",
      icon: <FileText className="w-6 h-6 text-purple-500" />,
      details: "Contracts, agreements, MOUs, employment contracts"
    },
    {
      title: "Business Advisory",
      description: "Strategic business consultation for growth and expansion",
      icon: <Users className="w-6 h-6 text-orange-500" />,
      details: "Market expansion, operational efficiency, regulatory guidance"
    }
  ];

  const resources = [
    {
      title: "Knowledge Base",
      description: "Comprehensive guides and articles on business and legal topics",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      content: [
        "Business Registration Guides",
        "Tax Planning Articles",
        "Compliance Checklists",
        "Legal Templates"
      ]
    },
    {
      title: "FAQs",
      description: "Frequently asked questions about our services",
      icon: <HelpCircle className="w-8 h-8 text-green-500" />,
      content: [
        "Registration Process",
        "Document Requirements",
        "Service Information",
        "Timeline Queries"
      ]
    }
  ];

  const handleGetStarted = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsFormOpen(true);
  };

  return (
    <>
      <div>
        <PageHero 
          title="Additional Business Services"
          subtitle="Comprehensive business support services beyond basic registrations. From licenses to digital certificates, we cover all your business needs."
          backgroundImage="https://images.unsplash.com/photo-1684217879196-aa55164cf7e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHNlcnZpY2VzJTIwb2ZmaWNlJTIwZGlnaXRhbHxlbnwxfHx8fDE3NTg2NTM0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />
        
        {/* Additional Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Business Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Beyond basic registrations, we offer specialized services to help your business grow and comply with regulations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(30, 64, 175, 0.2) 100%), url('${service.image}')`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white">
                        <h3 className="text-lg font-semibold drop-shadow-lg">{service.title}</h3>
                        <p className="text-sm text-gray-200 drop-shadow">{service.description}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1"
                        onClick={() => handleGetStarted(service.title)}
                      >
                        Get Started
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Info className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Business Support Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Support Services</h2>
              <p className="text-lg text-gray-600">
                Comprehensive support to help your business succeed beyond compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {businessSupport.map((support, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {support.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{support.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{support.description}</p>
                  <p className="text-xs text-gray-500 mb-4">{support.details}</p>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleGetStarted(support.title)}
                  >
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Support</h2>
              <p className="text-lg text-gray-600">
                Access helpful resources and get answers to your questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-6">
                    {resource.icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{resource.title}</h3>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {resource.content.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleGetStarted(resource.title)}
                  >
                    Access {resource.title}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl mb-8">
              Can't find what you're looking for? Let us create a custom service package for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-4"
                onClick={() => handleGetStarted("Custom Solution")}
              >
                Request Custom Solution
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleGetStarted("General Inquiry")}
              >
                Contact Us
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