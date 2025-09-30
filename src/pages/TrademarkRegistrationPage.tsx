import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ContactForm } from "../components/ContactForm";
import { Check, Shield, Search, FileText, Clock, Award, AlertCircle, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function TrademarkRegistrationPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const benefits = [
    "Exclusive Rights Protection",
    "Legal Ownership Proof",
    "Brand Recognition",
    "Nationwide Protection",
    "Asset Value Creation",
    "Licensing Opportunities",
    "Infringement Legal Action",
    "10-Year Validity (Renewable)"
  ];

  const trademarkTypes = [
    {
      type: "Word Mark",
      description: "Protection for text, words, letters, or numbers",
      example: "Company names, slogans, product names"
    },
    {
      type: "Device Mark",
      description: "Protection for logos, symbols, or graphical elements",
      example: "Brand logos, symbols, graphical designs"
    },
    {
      type: "Combined Mark",
      description: "Protection for combination of words and design elements",
      example: "Logo with company name, branded designs"
    }
  ];

  const classes = [
    "Chemicals & Chemical Preparations",
    "Paints, Varnishes, Lacquers",
    "Cosmetics & Cleaning Preparations",
    "Industrial Oils & Lubricants",
    "Pharmaceutical & Medical Preparations",
    "Common Metals & Their Alloys",
    "Hand Tools & Implements",
    "Scientific & Electrical Apparatus",
    "Medical Apparatus & Instruments",
    "Vehicles & Apparatus for Locomotion",
    "Textiles & Textile Goods",
    "Clothing, Footwear, Headgear",
    "Games, Toys & Sporting Goods",
    "Food Products & Beverages"
  ];

  const requirements = [
    "Trademark Search Report",
    "Applicant Details (Individual/Company)",
    "Description of Goods/Services",
    "Class Selection (1-45 Classes)",
    "Power of Attorney",
    "Priority Document (if applicable)",
    "User Affidavit (if applicable)",
    "Trademark Representation"
  ];

  const documents = [
    "Trademark Logo/Wordmark",
    "Applicant's PAN Card",
    "Applicant's Address Proof",
    "Incorporation Certificate (for Companies)",
    "Partnership Deed (for Partnerships)",
    "Power of Attorney",
    "Priority Document (if claiming priority)",
    "User Affidavit (if using TM for 5+ years)"
  ];

  const process = [
    {
      step: 1,
      title: "Trademark Search",
      description: "Comprehensive search to check availability",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Application Filing",
      description: "File trademark application with IPO",
      duration: "1 day"
    },
    {
      step: 3,
      title: "Examination",
      description: "IPO examines application for compliance",
      duration: "12-18 months"
    },
    {
      step: 4,
      title: "Registration",
      description: "Certificate issuance after approval",
      duration: "1-2 months"
    }
  ];

  const timeline = [
    { stage: "Application Filing", time: "Day 1", description: "Application submitted to IP Office" },
    { stage: "Application Number", time: "1-2 days", description: "Receive application number and filing receipt" },
    { stage: "Publication", time: "12-18 months", description: "Application published in Trademark Journal" },
    { stage: "Opposition Period", time: "4 months", description: "Public opposition period (if any)" },
    { stage: "Registration", time: "1-2 months", description: "Certificate of registration issued" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Trademark Registration Services"
        subtitle="Protect your brand identity with comprehensive trademark registration and legal compliance"
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHx0cmFkZW1hcmslMjBicmFuZCUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzExNTQ3MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Register Your Trademark?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Trademark registration provides exclusive legal rights to your brand name, logo, or symbol. It protects your business identity from unauthorized use and helps build brand recognition and customer trust.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxicmFuZCUyMHByb3RlY3Rpb24lMjB0cmFkZW1hcmt8ZW58MXx8fHwxNzExNTQ3MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Brand protection trademark"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Trademark Types Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Types of Trademark Protection
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trademarkTypes.map((trademark, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold">{trademark.type}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{trademark.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Examples:</strong> {trademark.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trademark Classes Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Trademark Classes
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg text-gray-600 mb-6 text-center">
                Trademarks are classified into 45 classes (1-34 for goods, 35-45 for services). Select the appropriate class for your business.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {classes.slice(0, 12).map((className, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <Award className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{className}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Button 
                  variant="outline" 
                  onClick={() => setIsFormOpen(true)}
                >
                  Get Complete Class List
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Requirements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Registration Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Search className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Basic Requirements</h3>
                </div>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Required Documents</h3>
                </div>
                <ul className="space-y-3">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Registration Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="flex items-center justify-center text-sm text-purple-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Registration Timeline
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-24 text-right mr-4">
                      <span className="text-sm font-medium text-blue-600">{item.time}</span>
                    </div>
                    <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1 mr-4"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.stage}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Important Notes */}
        <section className="mb-16">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Considerations</h3>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• Trademark protection is class-specific</li>
                    <li>• Registration is valid for 10 years (renewable indefinitely)</li>
                    <li>• Use ® symbol only after registration is complete</li>
                    <li>• Renewal required before expiry to maintain protection</li>
                    <li>• Trademark must be used in commerce to maintain rights</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Protect Your Brand?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get expert trademark search and registration services with complete legal compliance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsFormOpen(true)}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Get Started Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsFormOpen(true)}
                >
                  Free Trademark Search
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Legal consultation is free of cost
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        serviceType="Trademark Registration"
      />
    </div>
  );
}