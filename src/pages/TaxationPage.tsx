import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { CheckCircle, Calculator, FileText, TrendingUp, Clock, Shield, Info } from "lucide-react";

export function TaxationPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const taxServices = [
    {
      title: "GST Services",
      description: "Complete GST registration and filing services",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      features: [
        "GST Registration",
        "Monthly Returns (GSTR-1, 3B)",
        "Annual Return (GSTR-9)",
        "Input Tax Credit Management",
        "GST Audit Support"
      ],
      image: "https://images.unsplash.com/photo-1627155596311-c90f02e25402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmaW5hbmNpYWwlMjBkb2N1bWVudHMlMjBnc3QlMjBmaWxpbmd8ZW58MXx8fHwxNzU4NjUzMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Income Tax Filing",
      description: "Professional ITR filing for individuals and businesses",
      icon: <Calculator className="w-8 h-8 text-green-500" />,
      features: [
        "ITR-1 to ITR-7 Filing",
        "Tax Computation",
        "Refund Processing",
        "Notice Handling",
        "Tax Planning Advice"
      ],
      image: "https://images.unsplash.com/photo-1668930185267-1f3c19851b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMGFjY291bnRpbmclMjBjYWxjdWxhdG9yfGVufDF8fHx8MTc1ODY1MzMzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "TDS Services",
      description: "TDS compliance and return filing",
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      features: [
        "TDS Return Filing",
        "Form 16/16A Generation",
        "TDS Certificate Issuance",
        "Lower Deduction Certificates",
        "TDS Notice Handling"
      ],
      image: "https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0YXglMjBjb25zdWx0YXRpb24lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4NjUzMzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning and optimization",
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      features: [
        "Tax Structure Planning",
        "Investment Advisory",
        "Advance Tax Calculation",
        "Loss Set-off Planning",
        "Audit Representation"
      ],
      image: "https://images.unsplash.com/photo-1577791464704-3bbd2da56803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMGZpbmFuY2UlMjBtZWV0aW5nJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzU4NjUzMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const gstSlabs = [
    { rate: "0%", items: "Essential goods (rice, wheat, milk, etc.)", description: "Basic necessities" },
    { rate: "5%", items: "Household items (sugar, tea, coffee, etc.)", description: "Common household goods" },
    { rate: "12%", items: "Processed foods, computers, mobile phones", description: "Processed and tech items" },
    { rate: "18%", items: "Financial services, restaurants, hotels", description: "Services and hospitality" },
    { rate: "28%", items: "Luxury items (cars, AC, refrigerator)", description: "Luxury and high-end goods" }
  ];

  const taxBenefits = [
    {
      section: "Section 80C",
      limit: "₹1.5 Lakh",
      investments: ["ELSS, PPF, NSC", "Life Insurance Premium", "Home Loan Principal", "Tuition Fees"]
    },
    {
      section: "Section 80D",
      limit: "₹25,000",
      investments: ["Health Insurance Premium", "Preventive Health Check-up", "Parents' Health Insurance"]
    },
    {
      section: "Section 24",
      limit: "₹2 Lakh",
      investments: ["Home Loan Interest", "Self-occupied Property", "Let-out Property Interest"]
    },
    {
      section: "Section 80CCD",
      limit: "₹2 Lakh",
      investments: ["NPS Contribution", "Employer NPS", "Additional NPS Investment"]
    }
  ];

  const dueDates = [
    {
      filing: "GSTR-1 (Monthly)",
      dueDate: "11th of next month",
      penalty: "₹200 per day"
    },
    {
      filing: "GSTR-3B (Monthly)",
      dueDate: "20th of next month",
      penalty: "₹200 per day"
    },
    {
      filing: "ITR Filing",
      dueDate: "31st July (Individuals)",
      penalty: "₹5,000 to ₹10,000"
    },
    {
      filing: "TDS Return",
      dueDate: "31st of next month",
      penalty: "₹200 per day"
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
          title="Taxation Services"
          subtitle="Complete tax solutions for individuals and businesses. Expert GST, Income Tax, and TDS services with professional compliance management."
          backgroundImage="https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0YXglMjBjb25zdWx0YXRpb24lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4NjUzMzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />
        
        {/* Tax Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Tax Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From GST registration to income tax planning, we provide end-to-end taxation solutions for all your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {taxServices.map((service, index) => (
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

        {/* GST Rate Structure */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">GST Rate Structure</h2>
              <p className="text-lg text-gray-600">
                Understanding the current GST rates for different categories of goods and services
              </p>
            </div>

            <div className="space-y-4">
              {gstSlabs.map((slab, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                          {slab.rate}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{slab.description}</h3>
                          <p className="text-gray-600">{slab.items}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tax Saving Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tax Saving Opportunities</h2>
              <p className="text-lg text-gray-600">
                Maximize your tax savings with these popular deduction sections
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {taxBenefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">{benefit.section}</CardTitle>
                    <CardDescription>
                      <span className="text-lg font-bold text-green-600">Up to {benefit.limit}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.investments.map((investment, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {investment}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Due Dates & Penalties */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Due Dates</h2>
              <p className="text-lg text-gray-600">
                Stay compliant with timely filing to avoid penalties
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {dueDates.map((item, index) => (
                <Card key={index} className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Clock className="w-5 h-5 text-red-500 mr-2" />
                      {item.filing}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <span className="font-semibold text-blue-600">Due Date: </span>
                        {item.dueDate}
                      </div>
                      <div>
                        <span className="font-semibold text-red-600">Late Filing Penalty: </span>
                        {item.penalty}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Tax Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Tax Services</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Calculator className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Tax Professionals</h3>
                <p className="text-gray-600 text-sm">Qualified CAs and tax experts with years of experience</p>
              </Card>
              <Card className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Clock className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Timely Filing</h3>
                <p className="text-gray-600 text-sm">Never miss a deadline with our automated reminder system</p>
              </Card>
              <Card className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Shield className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Maximum Savings</h3>
                <p className="text-gray-600 text-sm">Strategic planning to minimize your tax liability legally</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Professional Tax Services</h2>
            <p className="text-xl mb-8">
              Let our tax experts handle your compliance while you focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-4"
                onClick={() => handleGetStarted("Free Tax Consultation")}
              >
                Free Tax Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleGetStarted("Calculate Tax Savings")}
              >
                Calculate Tax Savings
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