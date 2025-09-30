import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle, Info } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { RegistrationDetailsModal } from "./RegistrationDetailsModal";

interface RegistrationTypeCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export function RegistrationTypeCard({ 
  title, 
  description, 
  features, 
  image 
}: RegistrationTypeCardProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  return (
    <>
      <Card className="relative hover:shadow-lg transition-shadow overflow-hidden">
        {/* Image Header */}
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(30, 64, 175, 0.2) 100%), url('${image}')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-white">
              <h3 className="text-lg font-semibold drop-shadow-lg">{title}</h3>
              <p className="text-sm text-gray-200 drop-shadow">{description}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6">
          <ul className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <Button 
              className="flex-1" 
              onClick={() => setIsFormOpen(true)}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setIsDetailsOpen(true)}
            >
              <Info className="w-4 h-4 mr-2" />
              More Details
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        serviceType={title}
      />
      
      <RegistrationDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        registrationType={title}
        onGetStarted={() => setIsFormOpen(true)}
      />
    </>
  );
}