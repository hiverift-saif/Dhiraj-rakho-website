import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Award, 
  Handshake, 
  Target, 
  DollarSign, 
  Star,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export function PartnerPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const partnershipBenefits = [
    {
      title: "High Commission Structure",
      description: "Earn attractive commissions on every successful registration",
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      details: "Competitive commission rates on all services"
    },
    {
      title: "Marketing Support",
      description: "Complete marketing materials and promotional support",
      icon: <Target className="w-8 h-8 text-blue-500" />,
      details: "Brochures, presentations, digital assets"
    },
    {
      title: "Training & Certification",
      description: "Comprehensive training on all services and legal updates",
      icon: <Award className="w-8 h-8 text-purple-500" />,
      details: "Monthly training sessions and updates"
    },
    {
      title: "Dedicated Support",
      description: "Dedicated relationship manager for partner support",
      icon: <Users className="w-8 h-8 text-orange-500" />,
      details: "Priority support and quick resolution"
    }
  ];

  const partnerTypes = [
    {
      type: "Business Consultant",
      description: "Expand your service offerings with legal and compliance services",
      requirements: ["Existing client base", "Business advisory experience", "Professional network"],
      support: "Complete back-office support for all legal services"
    },
    {
      type: "CA/Legal Professional",
      description: "Partner with us to offer comprehensive business registration services",
      requirements: ["Professional certification", "Practice license", "Client relationships"],
      support: "Technical expertise and documentation support"
    },
    {
      type: "Regional Partner",
      description: "Become our exclusive partner in your city or region",
      requirements: ["Local market knowledge", "Business setup capability", "Investment capacity"],
      support: "Territory exclusivity and marketing support"
    },
    {
      type: "Referral Partner",
      description: "Earn by referring clients for business registration services",
      requirements: ["Network of potential clients", "Basic business knowledge", "Communication skills"],
      support: "Training and referral tracking system"
    }
  ];

  const partnerProcess = [
    {
      step: "1",
      title: "Application",
      description: "Submit your partnership application with required documents"
    },
    {
      step: "2",
      title: "Evaluation",
      description: "Our team evaluates your application and conducts background verification"
    },
    {
      step: "3",
      title: "Agreement",
      description: "Sign the partnership agreement and complete onboarding process"
    },
    {
      step: "4",
      title: "Activation",
      description: "Get access to portal, training materials, and start earning"
    }
  ];

  const successStories = [
    {
      name: "Rajesh Gupta",
      location: "Mumbai",
      type: "Business Consultant",
      achievement: "150+ registrations in 6 months",
      testimonial: "Partnership with Dhiraj Rakho has transformed my consultancy business."
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      type: "CA Professional",
      achievement: "200+ clients served",
      testimonial: "Excellent support team and seamless process management."
    },
    {
      name: "Amit Patel",
      location: "Bangalore",
      type: "Regional Partner",
      achievement: "₹50L+ revenue generated",
      testimonial: "Best decision to partner with a reliable and professional team."
    }
  ];

  const handleGetStarted = () => {
    setIsFormOpen(true);
  };

  return (
    <>
      <div>
        <PageHero 
          title="Partner With Us"
          subtitle="Join our network of successful partners and grow your business with our comprehensive legal and business registration services."
          backgroundImage="https://images.unsplash.com/photo-1591453214154-c95db71dbd83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlJTIwbWVldGluZ3xlbnwxfHx8fDE3NTg2NTM1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />
        
        {/* Partnership Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join our growing network of partners and unlock new revenue opportunities with comprehensive support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                  <p className="text-xs text-blue-600 font-medium">{benefit.details}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
              <p className="text-lg text-gray-600">
                Multiple partnership models to suit your business and expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {partnerTypes.map((partner, index) => (
                <Card key={index} className="p-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">{partner.type}</CardTitle>
                    <CardDescription>{partner.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {partner.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-2">Our Support:</h4>
                        <p className="text-sm text-gray-600">{partner.support}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={handleGetStarted}
                      >
                        Apply for {partner.type}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Become a Partner</h2>
              <p className="text-lg text-gray-600">
                Simple 4-step process to join our partner network
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerProcess.map((item, index) => (
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

        {/* Success Stories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Success Stories</h2>
              <p className="text-lg text-gray-600">
                Hear from our successful partners across India
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {story.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">{story.name}</h4>
                      <p className="text-sm text-gray-600 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {story.location}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-blue-600">{story.type}</p>
                    <p className="text-sm text-green-600 font-medium">{story.achievement}</p>
                  </div>
                  <p className="text-sm text-gray-700 italic">"{story.testimonial}"</p>
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Application Form */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply for Partnership</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our partnership team will contact you within 24 hours
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input placeholder="Enter your phone number" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email address" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City/Location *
                      </label>
                      <Input placeholder="Enter your city" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Partnership Type *
                    </label>
                    <Input placeholder="e.g., Business Consultant, CA Professional, Regional Partner" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Business/Experience
                    </label>
                    <Textarea 
                      placeholder="Tell us about your current business, experience, and why you want to partner with us..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="text-center">
                    <Button 
                      size="lg" 
                      className="px-12"
                      onClick={handleGetStarted}
                    >
                      Submit Partnership Application
                    </Button>
                    <p className="text-sm text-gray-600 mt-4">
                      Our team will review your application and get back to you within 24 hours
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Ready to Partner?</h2>
                <p className="text-xl mb-8">
                  Join our network of successful partners and start earning from day one. Get complete support and grow your business with us.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-lg px-8 py-4"
                  onClick={handleGetStarted}
                >
                  Start Partnership Journey
                </Button>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>partners@dhirajrakho.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1" />
                  <span>Business Centers across India<br />Mumbai | Delhi | Bangalore | Pune</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        serviceType="Partnership Application"
      />
    </>
  );
}