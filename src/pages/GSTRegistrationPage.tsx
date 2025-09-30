import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ContactForm } from "../components/ContactForm";
import { Check, Calculator, FileText, Clock, AlertTriangle, Receipt, Building } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function GSTRegistrationPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const benefits = [
    "Legal Business Recognition",
    "Input Tax Credit Benefits",
    "Seamless Interstate Trade",
    "Enhanced Business Credibility",
    "Government Scheme Eligibility",
    "Easier Business Loans",
    "Online Return Filing",
    "Digital Tax Compliance"
  ];

  const gstTypes = [
    {
      type: "Regular GST",
      turnover: "Above ₹40 Lakhs",
      description: "Standard GST registration for businesses with higher turnover",
      features: ["Full input tax credit", "Monthly/Quarterly returns", "All business types eligible"]
    },
    {
      type: "Composition Scheme",
      turnover: "Up to ₹1.5 Crores",
      description: "Simplified GST scheme with lower tax rates",
      features: ["Lower tax rates", "Quarterly returns", "Limited input tax credit"]
    },
    {
      type: "Casual Taxable Person",
      turnover: "Any Amount",
      description: "For non-resident taxpayers conducting business temporarily",
      features: ["Temporary registration", "Valid for specific period", "For occasional transactions"]
    }
  ];

  const eligibilityCriteria = [
    "Turnover exceeding ₹40 Lakhs (₹20 Lakhs for NE states)",
    "Inter-state supply of goods/services",
    "E-commerce marketplace facilitator",
    "Online supplier through e-commerce",
    "Casual taxable person",
    "Non-resident taxable person",
    "Input service distributor",
    "Person required to deduct TDS under GST"
  ];

  const documents = [
    "PAN Card of Business Entity",
    "Aadhaar Card of Authorized Signatory",
    "Proof of Business Registration",
    "Bank Account Statement/Cancelled Cheque",
    "Address Proof of Principal Place of Business",
    "Rental Agreement/Ownership Proof",
    "Digital Signature Certificate (DSC)",
    "Board Resolution (for Companies)",
    "Partnership Deed (for Partnerships)",
    "Photograph of Authorized Signatory"
  ];

  const process = [
    {
      step: 1,
      title: "Document Preparation",
      description: "Gather and prepare all required documents",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Online Application",
      description: "Submit GST registration application online",
      duration: "1 day"
    },
    {
      step: 3,
      title: "Verification",
      description: "GST department verifies application and documents",
      duration: "3-7 days"
    },
    {
      step: 4,
      title: "GSTIN Allocation",
      description: "Receive GST identification number",
      duration: "1-2 days"
    }
  ];

  const returnTypes = [
    {
      type: "GSTR-1",
      description: "Monthly/Quarterly outward supplies return",
      dueDate: "11th of next month"
    },
    {
      type: "GSTR-3B",
      description: "Monthly summary return with tax payment",
      dueDate: "20th of next month"
    },
    {
      type: "GSTR-9",
      description: "Annual return",
      dueDate: "31st December of next year"
    }
  ];

  const gstRates = [
    { rate: "0%", items: "Essential items like fruits, vegetables, milk" },
    { rate: "5%", items: "Daily necessities like sugar, tea, coffee" },
    { rate: "12%", items: "Processed foods, apparel below ₹1000" },
    { rate: "18%", items: "Most goods and services, IT services" },
    { rate: "28%", items: "Luxury items, automobiles, aerated drinks" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="GST Registration Services"
        subtitle="Complete GST registration with expert guidance and ongoing compliance support"
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNXx8Z3N0JTIwdGF4JTIwY2FsY3VsYXRpb258ZW58MXx8fHwxNzExNTQ3MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why is GST Registration Important?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                GST registration is mandatory for businesses exceeding the prescribed turnover threshold. It provides legal recognition, input tax credit benefits, and enables seamless business operations across India under the unified tax system.
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
                src="https://images.unsplash.com/photo-1554224154-26032fced8bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxN3x8dGF4JTIwY2FsY3VsYXRpb24lMjBpbmRpYXxlbnwxfHx8fDE3MTE1NDcyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="GST tax calculation"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* GST Types Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Types of GST Registration
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gstTypes.map((gst, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold">{gst.type}</h3>
                    <p className="text-blue-600 font-medium">{gst.turnover}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{gst.description}</p>
                  <ul className="space-y-2">
                    {gst.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Who Needs GST Registration?
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Mandatory Registration For:</h3>
                  <ul className="space-y-3">
                    {eligibilityCriteria.map((criteria, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-blue-800">Turnover Thresholds:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-blue-700">General States:</span>
                      <span className="font-semibold text-blue-800">₹40 Lakhs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">NE & Hill States:</span>
                      <span className="font-semibold text-blue-800">₹20 Lakhs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Services:</span>
                      <span className="font-semibold text-blue-800">₹20 Lakhs</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Documents Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Required Documents
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start bg-gray-50 p-3 rounded-lg">
                    <FileText className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="flex items-center justify-center text-sm text-green-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* GST Rates Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            GST Rate Structure
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {gstRates.map((rate, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {rate.rate}
                      </div>
                      <span className="text-gray-700">{rate.items}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Returns Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            GST Return Filing
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {returnTypes.map((returnType, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Receipt className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{returnType.type}</h3>
                  <p className="text-gray-600 mb-3">{returnType.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    Due: {returnType.dueDate}
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
                Ready to Register for GST?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get expert assistance with GST registration and ongoing compliance support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsFormOpen(true)}
                  className="bg-green-600 hover:bg-green-700"
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
        serviceType="GST Registration"
      />
    </div>
  );
}