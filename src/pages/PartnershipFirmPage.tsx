import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ContactForm } from "../components/ContactForm";
import { Check, Users, Handshake, FileText, Clock, AlertCircle, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function PartnershipFirmPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const benefits = [
    "Easy Formation Process",
    "Minimal Compliance Requirements",
    "Shared Responsibilities",
    "Tax Benefits",
    "Direct Tax Pass-through",
    "Operational Flexibility",
    "Cost-Effective Setup",
    "Quick Decision Making"
  ];

  const types = [
    {
      title: "General Partnership",
      description: "All partners have unlimited liability and equal management rights",
      features: ["Joint and several liability", "Equal profit sharing", "All partners can bind the firm"]
    },
    {
      title: "Limited Partnership",
      description: "Mix of general and limited partners with different liability levels",
      features: ["Limited partners have limited liability", "General partners manage business", "Limited partners are passive investors"]
    }
  ];

  const requirements = [
    "Minimum 2 Partners (Maximum 20)",
    "Partnership Agreement/Deed",
    "PAN Card for Partnership Firm",
    "Bank Account in Firm Name",
    "Business Address Proof",
    "Partner's Consent",
    "TAN if Tax Deduction Required"
  ];

  const documents = [
    "PAN Card of all Partners",
    "Aadhaar Card of all Partners",
    "Address Proof of Partners",
    "Passport Size Photographs",
    "Address Proof of Business Place",
    "Partnership Deed/Agreement",
    "Bank Account Opening Documents",
    "GST Registration (if applicable)"
  ];

  const process = [
    {
      step: 1,
      title: "Partnership Deed",
      description: "Draft comprehensive partnership agreement",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Name Registration",
      description: "Register firm name with Registrar of Firms",
      duration: "2-3 days"
    },
    {
      step: 3,
      title: "PAN & TAN",
      description: "Obtain PAN and TAN for the partnership firm",
      duration: "3-5 days"
    },
    {
      step: 4,
      title: "Registration",
      description: "Complete registration and obtain certificate",
      duration: "1-2 days"
    }
  ];

  const partnershipDeedClauses = [
    "Name and Address of Firm",
    "Nature of Business",
    "Capital Contribution by Partners",
    "Profit and Loss Sharing Ratio",
    "Rights and Duties of Partners",
    "Salary and Commission to Partners",
    "Interest on Capital and Drawings",
    "Dissolution Conditions"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Partnership Firm Registration"
        subtitle="Register your Partnership Firm with proper legal documentation and minimal compliance"
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxwYXJ0bmVyc2hpcCUyMGJ1c2luZXNzfGVufDF8fHx8MTcxMTU0NzIwOXww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is a Partnership Firm?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A Partnership Firm is a business structure where two or more individuals come together to carry on a business with shared profits and losses. It's the simplest form of business entity for multiple partners with minimal compliance requirements.
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxwYXJ0bmVyc2hpcCUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3MTE1NDcyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Partnership handshake"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Types of Partnership */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Types of Partnership
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {types.map((type, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Handshake className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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

        {/* Partnership Deed Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Partnership Deed Essentials
          </h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-gray-600 mb-6 text-center">
                A Partnership Deed is a legal document that outlines the terms and conditions of the partnership. It's crucial for avoiding disputes and ensuring smooth operations.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {partnershipDeedClauses.map((clause, index) => (
                  <div key={index} className="flex items-start">
                    <FileText className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{clause}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Important Note */}
        <section className="mb-16">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Considerations</h3>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• Partners have unlimited liability for firm's debts</li>
                    <li>• Registration is optional but recommended for legal protection</li>
                    <li>• Partnership dissolves upon death or withdrawal of a partner (unless specified)</li>
                    <li>• Partners are jointly and severally liable for firm's obligations</li>
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
                Ready to Register Your Partnership Firm?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get expert assistance with partnership deed drafting and complete registration process
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
        serviceType="Partnership Firm Registration"
      />
    </div>
  );
}