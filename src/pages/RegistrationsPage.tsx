import { PageHero } from "../components/PageHero";
import { RegistrationTypeCard } from "../components/RegistrationTypeCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { CheckCircle, Clock, FileText, Users } from "lucide-react";

export function RegistrationsPage() {
  const registrationTypes = [
    {
      title: "Private Limited Company",
      description: "Most popular choice for startups and growing businesses",
      features: ["Limited Liability", "Separate Legal Entity", "Easy Funding", "Tax Benefits"],
      image: "https://images.unsplash.com/photo-1733826544831-ad71d05c8423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdGFydHVwJTIwb2ZmaWNlJTIwbW9kZXJuJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODY1MjY1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "One Person Company (OPC)",
      description: "Perfect for single entrepreneurs",
      features: ["Single Member", "Limited Liability", "Easy Compliance", "Professional Credibility"],
      image: "https://images.unsplash.com/photo-1720167300687-5e1a11ea955d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBlbnRyZXByZW5ldXIlMjBzaW5nbGUlMjBwZXJzb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTg2NTI2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Limited Liability Partnership (LLP)",
      description: "Ideal for professional services",
      features: ["Partner Flexibility", "Lower Compliance", "Tax Efficient", "Professional Image"],
      image: "https://images.unsplash.com/photo-1749102166798-5ba7f3907279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHBhcnRuZXJzJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTg2NTI2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Partnership Firm",
      description: "Simple structure for small businesses",
      features: ["Easy Formation", "Shared Profits", "Minimal Compliance", "Quick Setup"],
      image: "https://images.unsplash.com/photo-1663181889781-19f3b9d185eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzbWFsbCUyMGJ1c2luZXNzJTIwcGFydG5lcnNoaXAlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzU4NjUyNjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Sole Proprietorship",
      description: "Simplest form for individual business",
      features: ["Individual Ownership", "Easy Setup", "Full Control", "Minimal Paperwork"],
      image: "https://images.unsplash.com/photo-1739066598279-1297113f5c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBpbmRpdmlkdWFsJTIwYnVzaW5lc3MlMjBvd25lciUyMHNob3B8ZW58MXx8fHwxNzU4NjUyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Section 8 Company (NGO)",
      description: "For non-profit organizations",
      features: ["Tax Exemption", "80G & 12A Benefits", "CSR Eligibility", "Credibility"],
      image: "https://images.unsplash.com/photo-1612446485216-2dc52fc0bb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBuZ28lMjBjaGFyaXR5JTIwb3JnYW5pemF0aW9uJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NTg2NTI2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Document Collection",
      description: "We help gather all required documents including PAN, Aadhaar, and address proofs"
    },
    {
      step: "2",
      title: "Name Approval",
      description: "File application for company name approval with MCA"
    },
    {
      step: "3",
      title: "Registration Filing",
      description: "Submit incorporation documents and forms to Registrar of Companies"
    },
    {
      step: "4",
      title: "Certificate Issuance",
      description: "Receive Certificate of Incorporation and commence business operations"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Expert Guidance",
      description: "Professional assistance from experienced company secretaries and chartered accountants"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Fast Processing",
      description: "Quick turnaround time with real-time status updates"
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      title: "Complete Documentation",
      description: "All legal documents prepared and filed correctly"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Post-Registration Support",
      description: "Ongoing compliance and business advisory services"
    }
  ];

  return (
    <div>
      <PageHero 
        title="Business Registration Services"
        subtitle="Register your business with ease. Choose from various business structures that suit your needs and get started in just 7 days."
        backgroundImage="https://images.unsplash.com/photo-1652503591857-0dbb07631692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NTg2NTI4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />
      
      {/* Registration Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Business Structure</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the most suitable business registration type based on your requirements, investment, and future plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrationTypes.map((type, index) => (
              <RegistrationTypeCard
                key={index}
                title={type.title}
                description={type.description}
                features={type.features}
                image={type.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple 4-Step Registration Process</h2>
            <p className="text-lg text-gray-600">
              Our streamlined process ensures quick and hassle-free business registration
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Registration Services</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Register Your Business?</h2>
          <p className="text-xl mb-8">
            Get expert guidance and register your business in just 7 days with complete legal compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
              Compare Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}