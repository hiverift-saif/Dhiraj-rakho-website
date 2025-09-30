import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ContactForm } from "../components/ContactForm";
import { Check, Heart, Users, Shield, FileText, Clock, Star, Gift } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function NGORegistrationPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const benefits = [
    "Tax Exemption Benefits",
    "Credibility and Trust",
    "Foreign Funding Eligibility",
    "Government Grants Access",
    "Legal Recognition",
    "Perpetual Succession",
    "Limited Liability Protection",
    "Social Impact Recognition"
  ];

  const types = [
    {
      title: "Trust",
      description: "Suitable for charitable activities with trustees managing the organization",
      registrationBody: "Registrar of Assurances",
      minMembers: "2 Trustees"
    },
    {
      title: "Society",
      description: "For educational, scientific, literary, or charitable purposes",
      registrationBody: "Registrar of Societies",
      minMembers: "7 Members"
    },
    {
      title: "Section 8 Company",
      description: "Non-profit company with corporate structure and governance",
      registrationBody: "Ministry of Corporate Affairs",
      minMembers: "2 Directors"
    }
  ];

  const requirements = [
    "Minimum Required Members",
    "Memorandum & Articles/Bye-laws",
    "Registered Office Address",
    "Board Resolution for Registration",
    "PAN Cards of All Members",
    "Address Proof of Members",
    "Passport Size Photographs",
    "Consent Letters from Members"
  ];

  const documents = [
    "Identity Proof (Aadhaar/Passport/DL)",
    "Address Proof of All Members",
    "PAN Card of All Members",
    "Passport Size Photographs",
    "Registered Office Address Proof",
    "Utility Bills of Office Address",
    "No Objection Certificate (if rented)",
    "Board Resolution for Registration",
    "Memorandum & Articles of Association"
  ];

  const process = [
    {
      step: 1,
      title: "Choose Structure",
      description: "Select appropriate NGO structure (Trust/Society/Section 8)",
      duration: "1 day"
    },
    {
      step: 2,
      title: "Name Approval",
      description: "Check name availability and get approval",
      duration: "2-3 days"
    },
    {
      step: 3,
      title: "Documentation",
      description: "Prepare all required documents and agreements",
      duration: "3-5 days"
    },
    {
      step: 4,
      title: "Registration",
      description: "File application with relevant authority",
      duration: "15-30 days"
    }
  ];

  const taxExemptions = [
    {
      section: "12A Registration",
      benefit: "Income tax exemption on surplus income",
      validity: "Permanent (with periodic renewal)"
    },
    {
      section: "80G Approval",
      benefit: "Donors get 50% tax deduction on donations",
      validity: "Valid for specified period"
    },
    {
      section: "FCRA Registration",
      benefit: "Receive foreign contributions and donations",
      validity: "5 years (renewable)"
    }
  ];

  const complianceRequirements = [
    "Annual Income Tax Return Filing",
    "Annual Activity Report",
    "Audit Report (if turnover > ₹1 Crore)",
    "Board Meeting Minutes",
    "Annual General Meeting",
    "FCRA Returns (if applicable)",
    "80G Compliance Report",
    "Change in Registration Updates"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="NGO Registration Services"
        subtitle="Register your NGO with complete legal compliance and tax exemption benefits"
        backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bmdvJTIwdm9sdW50ZWVyJTIwaW5kaWF8ZW58MXx8fHwxNzExNTQ3MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Register Your NGO?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                NGO registration provides legal recognition, tax benefits, and credibility for your social cause. It enables you to receive donations, apply for grants, and create a lasting social impact through structured operations.
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
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMnx8dm9sdW50ZWVyJTIwd29yayUyMGluZGlhfGVufDF8fHx8MTcxMTU0NzIwOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="NGO volunteer work"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Types of NGO Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Types of NGO Registration
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {types.map((type, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Registration Body:</span>
                      <p className="text-gray-600">{type.registrationBody}</p>
                    </div>
                    <div>
                      <span className="font-medium">Minimum Members:</span>
                      <p className="text-gray-600">{type.minMembers}</p>
                    </div>
                  </div>
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
                  <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="flex items-center justify-center text-sm text-red-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tax Exemptions Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tax Exemptions & Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {taxExemptions.map((exemption, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Gift className="w-8 h-8 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{exemption.section}</h3>
                  <p className="text-gray-600 mb-3">{exemption.benefit}</p>
                  <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {exemption.validity}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Compliance Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Annual Compliance Requirements
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {complianceRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Register Your NGO?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get expert assistance with NGO registration and tax exemption applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsFormOpen(true)}
                  className="bg-red-500 hover:bg-red-600"
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
        serviceType="NGO Registration"
      />
    </div>
  );
}