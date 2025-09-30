import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ContactForm } from "./ContactForm";
import { 
  Building2, 
  Users, 
  Handshake, 
  Heart, 
  Rocket, 
  User,
  Info
} from "lucide-react";

const registrations = [
  {
    icon: Building2,
    title: "Private Limited Company",
    description: "Most popular choice for startups and growing businesses",
    features: ["Limited liability", "Easy funding", "Tax benefits"]
  },
  {
    icon: Users,
    title: "LLP Registration",
    description: "Perfect for professional services and partnerships",
    features: ["Flexible structure", "Tax advantages", "Easy compliance"]
  },
  {
    icon: Handshake,
    title: "Partnership Firm",
    description: "Simple structure for small businesses",
    features: ["Easy setup", "Shared profits", "Low compliance"]
  },
  {
    icon: Heart,
    title: "NGO Registration",
    description: "For non-profit organizations and social causes",
    features: ["Tax exemptions", "Grants eligible", "Social impact"]
  },
  {
    icon: Rocket,
    title: "Startup India Registration",
    description: "Special benefits for innovative startups",
    features: ["Tax holidays", "Fast-track patents", "Government support"]
  },
  {
    icon: User,
    title: "Proprietorship",
    description: "Simple structure for individual entrepreneurs",
    features: ["Complete control", "Easy setup", "Minimal compliance"]
  }
];

export function PopularRegistrations() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleGetStarted = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsFormOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Business Registrations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the right business structure for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrations.map((registration, index) => {
              const IconComponent = registration.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {registration.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {registration.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {registration.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1"
                        onClick={() => handleGetStarted(registration.title)}
                      >
                        Get Started
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => handleGetStarted(registration.title + " - More Details")}
                      >
                        <Info className="w-4 h-4 mr-2" />
                        More Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        serviceType={selectedService}
      />
    </>
  );
}