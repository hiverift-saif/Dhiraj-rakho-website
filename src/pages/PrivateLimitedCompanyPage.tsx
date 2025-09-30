import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ContactForm } from "../components/ContactForm";
import { Check, Building2, Users, Shield, FileText, Clock, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function PrivateLimitedCompanyPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const benefits = [
    "Limited Liability Protection",
    "Separate Legal Entity",
    "Perpetual Succession",
    "Easy Transfer of Ownership",
    "Better Credibility",
    "Easy to Raise Capital",
    "Tax Benefits",
    "PAN & TAN Allocation"
  ];

  const requirements = [
    "Minimum 2 Directors (Maximum 15)",
    "Minimum 2 Shareholders (Maximum 200)",
    "Minimum Authorized Capital: ₹1,00,000",
    "Directors must have DIN (Director Identification Number)",
    "Digital Signature Certificate (DSC) for Directors",
    "Registered Office Address",
    "Memorandum and Articles of Association"
  ];

  const documents = [
    "PAN Card of all Directors",
    "Aadhaar Card of all Directors",
    "Passport Size Photographs",
    "Address Proof of Directors",
    "Address Proof of Registered Office",
    "Utility Bills (Electricity/Water/Gas)",
    "No Objection Certificate (if rented)"
  ];

  const process = [
    {
      step: 1,
      title: "Name Reservation",
      description: "Apply for company name approval with MCA",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Documentation",
      description: "Prepare and verify all required documents",
      duration: "1 day"
    },
    {
      step: 3,
      title: "MCA Filing",
      description: "File incorporation documents with Registrar of Companies",
      duration: "3-5 days"
    },
    {
      step: 4,
      title: "Certificate Issue",
      description: "Receive Certificate of Incorporation",
      duration: "1 day"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Private Limited Company Registration"
        subtitle="Register your Private Limited Company with expert guidance and complete legal compliance"
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb21wYW55JTIwcmVnaXN0cmF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTcxMTU0NzIwOXww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Private Limited Company?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A Private Limited Company is the most popular business structure in India, offering limited liability protection and credibility for business growth. It's ideal for startups and established businesses looking for investor funding and expansion.
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
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxidXNpbmVzcyUyMG1lZXRpbmclMjBpbmRpYW58ZW58MXx8fHwxNzExNTQ3MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business meeting"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
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
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
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
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="flex items-center justify-center text-sm text-blue-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Post-Registration Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Post-Registration Services
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Bank Account Opening</h3>
                  <p className="text-gray-600">Assistance with current account opening in leading banks</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Compliance Management</h3>
                  <p className="text-gray-600">Annual ROC filing and compliance support</p>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">GST Registration</h3>
                  <p className="text-gray-600">Complete GST registration and setup</p>
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
                Ready to Register Your Private Limited Company?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get expert assistance with complete documentation and legal compliance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsFormOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Get Started Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsFormOpen(true)}
                >
                  Free Consultation
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
        serviceType="Private Limited Company Registration"
      />
    </div>
  );
}