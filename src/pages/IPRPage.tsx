import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { CheckCircle, Shield, Lightbulb, Copyright, BadgeCheck, Info } from "lucide-react";
import { useRouter } from "../components/Router";

export function IPRPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const { navigateTo } = useRouter();

  const iprServices = [
    {
      title: "Trademark Registration",
      description: "Protect your brand name, logo, and slogan",
      icon: <BadgeCheck className="w-8 h-8 text-blue-500" />,
      features: [
        "Trademark Search & Analysis",
        "Application Filing",
        "Examination Response",
        "Registration Certificate",
        "10 Years Protection"
      ],
      image: "https://images.unsplash.com/photo-1659869764315-dc3d188141fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlbGxlY3R1YWwlMjBwcm9wZXJ0eSUyMGxlZ2FsJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc1ODY5MzgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      path: "trademark-registration"
    },
    {
      title: "Copyright Registration",
      description: "Secure your creative works and content",
      icon: <Copyright className="w-8 h-8 text-green-500" />,
      features: [
        "Literary Works Protection",
        "Artistic Works Coverage",
        "Software Code Protection",
        "Lifetime + 60 Years Protection",
        "Legal Evidence of Ownership"
      ],
      image: "https://images.unsplash.com/photo-1593444285553-28163240e3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3B5cmlnaHQlMjBwYXRlbnQlMjByZWdpc3RyYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzU4NjkzODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      path: "copyright-registration"
    },
    {
      title: "Patent Registration",
      description: "Protect your inventions and innovations",
      icon: <Lightbulb className="w-8 h-8 text-purple-500" />,
      features: [
        "Prior Art Search",
        "Patent Drafting",
        "Examination Handling",
        "20 Years Protection",
        "Exclusive Rights"
      ],
      image: "https://images.unsplash.com/photo-1605606722649-39761c5a3397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBpbm5vdmF0aW9uJTIwY3JlYXRpdmUlMjBwYXRlbnR8ZW58MXx8fHwxNzU4NjkzODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      path: "patent-registration"
    },
    {
      title: "Design Registration",
      description: "Protect the visual design of your products",
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      features: [
        "Design Search",
        "Application Filing",
        "Examination Support",
        "15 Years Protection",
        "Renewal Services"
      ],
      image: "https://images.unsplash.com/photo-1605606722649-39761c5a3397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBpbm5vdmF0aW9uJTIwY3JlYXRpdmUlMjBwYXRlbnR8ZW58MXx8fHwxNzU4NjkzODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      path: "design-registration"
    },
    {
      title: "Intellectual Property Dispute",
      description: "Professional IP dispute resolution and enforcement",
      icon: <Shield className="w-8 h-8 text-red-500" />,
      features: [
        "Infringement Cases",
        "Legal Representation",
        "IP Enforcement",
        "Dispute Resolution",
        "Rights Protection"
      ],
      image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRpc3B1dGUlMjBpbnRlbGxlY3R1YWwlMjBwcm9wZXJ0eSUyMGNvdXJ0fGVufDF8fHx8MTc1ODY5MzgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      path: "ip-dispute"
    }
  ];

  const whyProtect = [
    {
      title: "Brand Protection",
      description: "Prevent unauthorized use of your brand elements and maintain market exclusivity",
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Legal Rights",
      description: "Establish legal ownership and enforce rights against infringement",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      title: "Business Value",
      description: "Increase company valuation and create valuable intellectual assets",
      icon: <Lightbulb className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Market Advantage",
      description: "Gain competitive edge and prevent competitors from copying your innovations",
      icon: <BadgeCheck className="w-6 h-6 text-orange-500" />
    }
  ];

  const process = [
    {
      step: "1",
      title: "Search & Analysis",
      description: "Comprehensive search to ensure your IP is unique and registrable"
    },
    {
      step: "2",
      title: "Application Preparation",
      description: "Expert drafting and preparation of all required documents and forms"
    },
    {
      step: "3",
      title: "Filing & Examination",
      description: "Submit application and handle all examination queries professionally"
    },
    {
      step: "4",
      title: "Registration & Protection",
      description: "Obtain registration certificate and enjoy full legal protection"
    }
  ];

  const comparisonTable = [
    {
      type: "Trademark",
      protection: "Brand Names, Logos",
      duration: "10 Years (Renewable)",
      timeline: "12-18 months"
    },
    {
      type: "Copyright",
      protection: "Creative Works",
      duration: "Lifetime + 60 Years",
      timeline: "4-6 months"
    },
    {
      type: "Patent",
      protection: "Inventions",
      duration: "20 Years",
      timeline: "18-36 months"
    },
    {
      type: "Design",
      protection: "Product Appearance",
      duration: "15 Years",
      timeline: "6-12 months"
    }
  ];

  const handleGetStarted = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsFormOpen(true);
  };

  const handleViewDetails = (servicePath: string) => {
    navigateTo(servicePath as any);
  };

  return (
    <>
      <div>
        <PageHero 
          title="Intellectual Property Rights"
          subtitle="Protect your innovations, brands, and creative works. Secure your intellectual property with expert legal guidance and comprehensive protection services."
          backgroundImage="https://images.unsplash.com/photo-1691328024236-55b85f698fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlbGxlY3R1YWwlMjBwcm9wZXJ0eSUyMHBhdGVudCUyMHRyYWRlbWFyayUyMGluZGlhfGVufDF8fHx8MTc1ODY1MzI1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />
        
        {/* IPR Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete IP Protection Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Safeguard your intellectual property with our comprehensive registration and protection services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {iprServices.map((service, index) => (
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
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => handleViewDetails(service.path)}
                      >
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

        {/* Trademark Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Trademark Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From initial registration to ongoing protection, we offer complete trademark services to safeguard your brand
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: "Trademark Registration", path: "trademark-registration", icon: <BadgeCheck className="w-5 h-5" /> },
                { name: "Trademark Renewal", path: "trademark-renewal", icon: <CheckCircle className="w-5 h-5" /> },
                { name: "Trademark Objection", path: "trademark-objection", icon: <Shield className="w-5 h-5" /> },
                { name: "Trademark Opposition", path: "trademark-opposition", icon: <Shield className="w-5 h-5" /> },
                { name: "International Trademark", path: "international-trademark", icon: <BadgeCheck className="w-5 h-5" /> },
                { name: "Trademark Rectification", path: "trademark-rectification", icon: <CheckCircle className="w-5 h-5" /> },
                { name: "E-commerce Trademark", path: "trademark-ecommerce", icon: <BadgeCheck className="w-5 h-5" /> },
                { name: "Trademark Hearing", path: "trademark-hearing", icon: <Shield className="w-5 h-5" /> },
                { name: "Objection Response", path: "trademark-objection-response", icon: <CheckCircle className="w-5 h-5" /> },
                { name: "Trademark Infringement", path: "trademark-infringement", icon: <Shield className="w-5 h-5" /> },
                { name: "Trademark Assignment", path: "trademark-assignment", icon: <BadgeCheck className="w-5 h-5" /> }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleViewDetails(service.path)}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-500">{service.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-900">{service.name}</h4>
                        <p className="text-sm text-gray-600">Expert assistance with professional guidance</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                size="lg" 
                onClick={() => handleGetStarted("Trademark Services")}
                className="px-8"
              >
                Get Trademark Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Why Protect IP */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Protect Your Intellectual Property?</h2>
              <p className="text-lg text-gray-600">
                Intellectual property protection is crucial for business success and competitive advantage
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyProtect.map((reason, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* IPR Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IP Registration Process</h2>
              <p className="text-lg text-gray-600">
                Professional and systematic approach to secure your intellectual property rights
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IP Protection Comparison</h2>
              <p className="text-lg text-gray-600">
                Choose the right protection for your intellectual property
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">IP Type</th>
                    <th className="px-6 py-4 text-left">What it Protects</th>
                    <th className="px-6 py-4 text-left">Protection Duration</th>
                    <th className="px-6 py-4 text-left">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold">{row.type}</td>
                      <td className="px-6 py-4">{row.protection}</td>
                      <td className="px-6 py-4">{row.duration}</td>
                      <td className="px-6 py-4">{row.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Intellectual Property Today</h2>
            <p className="text-xl mb-8">
              Don't let competitors steal your ideas. Secure your innovations with professional IP protection services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-4"
                onClick={() => handleGetStarted("Free IP Consultation")}
              >
                Free IP Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleGetStarted("IP Search Tool")}
              >
                IP Search Tool
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