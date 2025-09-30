import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { CheckCircle, Users, MessageCircle, Phone, Mail, Clock, Shield, Award } from "lucide-react";

export function ConsultationPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const consultationServices = [
    {
      title: "Business Setup Consultation",
      description: "Expert guidance on choosing the right business structure",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      duration: "60 minutes",
      price: "FREE",
      features: [
        "Business Structure Analysis",
        "Compliance Requirements",
        "Tax Implications",
        "Future Scalability Planning",
        "Cost-Benefit Analysis"
      ]
    },
    {
      title: "Legal Advisory",
      description: "Professional legal consultation for business matters",
      icon: <Shield className="w-8 h-8 text-green-500" />,
      duration: "45 minutes",
      price: "FREE",
      features: [
        "Contract Review",
        "Partnership Agreements",
        "Regulatory Compliance",
        "Risk Assessment",
        "Legal Documentation"
      ]
    },
    {
      title: "Tax Planning Session",
      description: "Strategic tax planning and optimization advice",
      icon: <Award className="w-8 h-8 text-purple-500" />,
      duration: "90 minutes",
      price: "FREE",
      features: [
        "Tax Structure Planning",
        "Investment Advisory",
        "Deduction Optimization",
        "Advance Tax Strategy",
        "Annual Planning"
      ]
    }
  ];

  const expertTeam = [
    {
      name: "CA Rajesh Kumar",
      designation: "Senior Partner & Chartered Accountant",
      experience: "15+ Years",
      specialization: "Corporate Law & Taxation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcm9mZXNzaW9uYWwlMjBtYW4lMjBzdWl0fGVufDF8fHx8MTc1ODY1MTg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Priya Sharma",
      designation: "Legal Advisor & Company Secretary",
      experience: "12+ Years",
      specialization: "Business Registration & Compliance",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHN1aXR8ZW58MXx8fHwxNzU4NjUxODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Amit Patel",
      designation: "IP Attorney & Patent Agent",
      experience: "10+ Years",
      specialization: "Intellectual Property Rights",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcm9mZXNzaW9uYWwlMjBtYW4lMjBsYXd5ZXJ8ZW58MXx8fHwxNzU4NjUxODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const consultationProcess = [
    {
      step: "1",
      title: "Book Your Consultation",
      description: "Schedule a free consultation at your convenient time"
    },
    {
      step: "2",
      title: "Initial Assessment",
      description: "Our experts understand your business needs and challenges"
    },
    {
      step: "3",
      title: "Custom Solutions",
      description: "Receive tailored recommendations and actionable strategies"
    },
    {
      step: "4",
      title: "Implementation Support",
      description: "Get ongoing support to implement our recommendations"
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      method: "Phone Consultation",
      details: "+91 9876543210",
      availability: "Mon-Sat, 9 AM - 7 PM"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-500" />,
      method: "Video Call",
      details: "Zoom/Google Meet",
      availability: "By Appointment"
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-500" />,
      method: "Email Support",
      details: "info@dhirajrakho.com",
      availability: "24/7 Response"
    }
  ];

  const handleGetStarted = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsFormOpen(true);
  };

  return (
    <>
      <div>
        <PageHero 
          title="Legal Consultation Services"
          subtitle="Get expert legal and business advice from experienced professionals. Free consultation to help you make informed decisions for your business."
          backgroundImage="https://images.unsplash.com/photo-1724315069759-3bac28f679f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBsZWdhbCUyMGNvbnN1bHRhdGlvbiUyMGxhd3llciUyMG1lZXRpbmd8ZW58MXx8fHwxNzU4NjUzNDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        />
        
        {/* Consultation Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Consultation Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get professional guidance from our team of experts. All initial consultations are completely free of cost.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {consultationServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="flex items-center justify-between pt-4">
                      <div className="text-2xl font-bold text-green-600">{service.price}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full"
                      onClick={() => handleGetStarted(service.title)}
                    >
                      Book Free Consultation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Team */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
              <p className="text-lg text-gray-600">
                Experienced professionals ready to guide you through your business journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {expertTeam.map((expert, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={expert.image} 
                        alt={expert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{expert.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      {expert.designation}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Award className="w-4 h-4 text-orange-500 mr-2" />
                        <span className="text-sm font-medium">{expert.experience}</span>
                      </div>
                      <p className="text-sm text-gray-600">{expert.specialization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Consultation Works</h2>
              <p className="text-lg text-gray-600">
                Simple 4-step process to get expert guidance for your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationProcess.map((item, index) => (
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

        {/* Contact Methods */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Connect</h2>
              <p className="text-lg text-gray-600">
                Choose your preferred method of consultation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.method}</h3>
                  <p className="text-blue-600 font-medium mb-1">{method.details}</p>
                  <p className="text-sm text-gray-600">{method.availability}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Booking Form */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our expert will contact you within 24 hours
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
                        Business Type
                      </label>
                      <Input placeholder="e.g., Startup, Existing Business" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Consultation Topic *
                    </label>
                    <Input placeholder="e.g., Business Registration, Tax Planning, Legal Advice" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your requirements and specific questions..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="text-center">
                    <Button 
                      size="lg" 
                      className="px-12"
                      onClick={() => handleGetStarted("General Consultation")}
                    >
                      Schedule Free Consultation
                    </Button>
                    <p className="text-sm text-gray-600 mt-4">
                      * All consultations are completely free of cost
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Expert Guidance?</h2>
            <p className="text-xl mb-8">
              Don't make business decisions alone. Get professional consultation from our experienced team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-4"
                onClick={() => handleGetStarted("Phone Consultation")}
              >
                Call Now: +91 9876543210
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleGetStarted("Video Call Consultation")}
              >
                Schedule Video Call
              </Button>
            </div>
          </div>
        </section>
      </div>

      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        serviceType={selectedService}
      />
    </>
  );
}