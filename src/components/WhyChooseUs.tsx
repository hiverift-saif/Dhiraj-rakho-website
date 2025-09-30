import { Button } from "./ui/button";
import { 
  DollarSign, 
  Users, 
  Shield, 
  Clock,
  Phone 
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Packages",
    description: "All-in-one pricing with no hidden fees"
  },
  {
    icon: Users,
    title: "Dedicated Expert Support",
    description: "Personal assistance throughout the process"
  },
  {
    icon: Shield,
    title: "Compliance Ensured",
    description: "100% legal compliance guaranteed"
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "Delivered within promised timeframes"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Dhiraj Rakho?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of businesses for reliable and professional services
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Benefits List */}
          <div className="mb-12 lg:mb-0">
            <div className="space-y-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        ✅ {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Button size="lg" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Talk to Experts (+91 XXXXX XXXXX)
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1684144103636-1059b160184e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzU4NjUwMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Indian business consultation meeting"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}