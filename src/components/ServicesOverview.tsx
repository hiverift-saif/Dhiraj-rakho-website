import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "./Router";
import { 
  Building2, 
  FileCheck, 
  Copyright, 
  Calculator, 
  MessageSquare, 
  Globe 
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Registrations",
    description: "Company, LLP, Partnership, and other business registrations",
    page: "registrations" as const
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "ROC filing, annual returns, and regulatory compliance",
    page: "compliance" as const
  },
  {
    icon: Copyright,
    title: "IPR",
    description: "Trademark, copyright, and patent registration services",
    page: "ipr" as const
  },
  {
    icon: Calculator,
    title: "Taxation",
    description: "GST registration, income tax filing, and tax planning",
    page: "taxation" as const
  },
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Expert legal and business consultation services",
    page: "consultation" as const
  },
  {
    icon: Globe,
    title: "International Business",
    description: "Foreign company setup and international compliance",
    page: "more" as const
  }
];

export function ServicesOverview() {
  const { navigateTo } = useRouter();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive business and legal services to help you start, grow, and manage your business effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => navigateTo(service.page)}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Button variant="outline" size="sm" onClick={(e) => {
                    e.stopPropagation();
                    navigateTo(service.page);
                  }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={() => navigateTo('more')}>
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
}