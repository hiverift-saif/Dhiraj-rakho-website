import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ContactForm } from "../components/ContactForm";
import { Check, Users, Shield, FileText, Clock, TrendingUp, Briefcase } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function LLPRegistrationPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const benefits = [
    "Limited Liability Protection",
    "Separate Legal Entity",
    "No Minimum Capital Requirement",
    "Perpetual Succession",
    "Easy Compliance Requirements",
    "Tax Benefits",
    "Professional Credibility",
    "Easy Partner Addition/Removal"
  ];

  const requirements = [
    "Minimum 2 Partners (No Maximum Limit)",
    "At least 2 Designated Partners (Indian Residents)",
    "DIN for Designated Partners",
    "DSC for Designated Partners",
    "Registered Office Address",
    "LLP Agreement",
    "Statement of Account & Solvency"
  ];

  const documents = [
    "PAN Card of all Partners",
    "Aadhaar Card of all Partners",
    "Passport Size Photographs",
    "Address Proof of Partners",
    "Address Proof of Registered Office",
    "Utility Bills for Office Address",
    "No Objection Certificate (if rented)",
    "Consent Letter from Partners"
  ];

  const process = [
    {
      step: 1,
      title: "Name Application",
      description: "Apply for LLP name reservation with MCA",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "DIN & DSC",
      description: "Obtain DIN and DSC for designated partners",
      duration: "2-3 days"
    },
    {
      step: 3,
      title: "LLP Agreement",
      description: "Draft and finalize LLP Agreement",
      duration: "1-2 days"
    },
    {
      step: 4,
      title: "Registration",
      description: "File incorporation documents with ROC",
      duration: "5-7 days"
    }
  ];

  const compliance = [
    {
      title: "Annual Filing",
      description: "Annual Return and Statement of Account & Solvency",
      frequency: "Yearly"
    },
    {
      title: "Income Tax Return",
      description: "File ITR for LLP as a separate entity",
      frequency: "Yearly"
    },
    {
      title: "GST Compliance",
      description: "Monthly/Quarterly GST returns if applicable",
      frequency: "Monthly/Quarterly"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Limited Liability Partnership (LLP) Registration"
        subtitle="Register your LLP with minimal compliance and maximum flexibility for professional services"
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxwYXJ0bmVyc2hpcCUyMGJ1c2luZXNzfGVufDF8fHx8MTcxMTU0NzIwOXww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Limited Liability Partnership (LLP)?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                LLP combines the flexibility of a partnership with the limited liability protection of a company. It's ideal for professional services, consultancy firms, and businesses where partners want operational flexibility with legal protection.
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
                alt="Partnership meeting"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* LLP vs Company Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LLP vs Private Limited Company
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 px-4 font-semibold">Aspect</th>
                      <th className="py-3 px-4 font-semibold text-blue-600">LLP</th>
                      <th className="py-3 px-4 font-semibold text-gray-600">Private Limited</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Minimum Members</td>
                      <td className="py-3 px-4">2 Partners</td>
                      <td className="py-3 px-4">2 Directors</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Capital Requirement</td>
                      <td className="py-3 px-4">No Minimum</td>
                      <td className="py-3 px-4">₹1,00,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Compliance</td>
                      <td className="py-3 px-4">Minimal</td>
                      <td className="py-3 px-4">Extensive</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Audit Requirement</td>
                      <td className="py-3 px-4">Based on Turnover</td>
                      <td className="py-3 px-4">Mandatory</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Foreign Investment</td>
                      <td className="py-3 px-4">Not Allowed</td>
                      <td className="py-3 px-4">Allowed</td>
                    </tr>
                  </tbody>
                </table>
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

        {/* Compliance Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LLP Compliance Requirements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {compliance.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {item.frequency}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Register Your LLP?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get professional assistance with complete documentation and compliance guidance
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
        serviceType="LLP Registration"
      />
    </div>
  );
}