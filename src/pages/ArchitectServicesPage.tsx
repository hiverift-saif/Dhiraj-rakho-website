import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { CheckCircle, Home, Building, Palette, Wrench, Users, Shield, Clock, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  projectDetails: string;
}

export function ArchitectServicesPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    city: "",
    projectDetails: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        city: "",
        projectDetails: ""
      });
    }, 3000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Residential Architecture",
      description: "House Planning & Layout",
      icon: Home,
      items: ["House Planning & Layout", "3D Elevation Design", "Villas & Apartments", "Custom Home Design"],
      image: "https://images.unsplash.com/photo-1668911494481-1643ee3e1235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZSUyMGhvdXNlJTIwZGVzaWdufGVufDF8fHx8MTc1ODg3MDg0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Commercial Architecture",
      description: "Office Space Planning",
      icon: Building,
      items: ["Office Space Planning", "Retail & Showroom Design", "Corporate Workspaces", "Commercial Buildings"],
      image: "https://images.unsplash.com/photo-1594235046983-73a3f117a37c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU4Nzg4NDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Interior Design Solutions",
      description: "Modular Kitchens & Interiors",
      icon: Palette,
      items: ["Modular Kitchens", "Living Room & Bedroom Interiors", "Office Interiors", "Complete Interior Solutions"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGtpdGNoZW58ZW58MHx8fHwxNzU4ODcwODUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Renovation & Space Optimization",
      description: "Smart Space Utilization",
      icon: Wrench,
      items: ["Old Building Renovation", "Smart Space Utilization", "Sustainable Solutions", "Modern Upgrades"],
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5vdmF0aW9uJTIwaG9tZSUyMGltcHJvdmVtZW50fGVufDF8fHx8MTc1ODg3MDg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Verified & Experienced Architects",
      description: "All our architects are thoroughly verified with proven track records"
    },
    {
      icon: Award,
      title: "Customized Designs for Every Budget",
      description: "Tailored solutions that fit your vision and budget requirements"
    },
    {
      icon: Shield,
      title: "End-to-End Assistance",
      description: "Complete support from concept development to execution"
    },
    {
      icon: Clock,
      title: "Transparent & Hassle-Free Process",
      description: "Clear timelines, transparent pricing, and seamless project management"
    }
  ];

  const portfolioImages = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NTg4NzA4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTg4NzA4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMG1vZGVybnxlbnwwfHx8fDE3NTg4NzA4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  const testimonials = [
    {
      name: "Rahul Gupta",
      role: "Homeowner",
      content: "They transformed my house into a dream home. The 3D designs were incredible!"
    },
    {
      name: "Meera Singh",
      role: "Business Owner",
      content: "Our office design was completed on time & within budget. Highly professional team."
    }
  ];

  const faqs = [
    {
      question: "How much does an architect charge?",
      answer: "Architect fees vary based on project scope, typically ranging from 5-15% of construction cost or fixed consultation fees."
    },
    {
      question: "Do you provide both design & execution?",
      answer: "Yes, we offer end-to-end services from initial design concepts to complete project execution and supervision."
    },
    {
      question: "Can I hire an architect in my city?",
      answer: "Absolutely! We have verified architects available in major cities across India to serve your local needs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">
              Transform Your Space with Professional Architect Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Residential | Commercial | Interior | Renovation
            </p>
            <Button 
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full"
            >
              Request Architect Consultation
            </Button>
          </div>

          <div className="mt-12">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1622120573004-c70648f2352e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NTg4NzA4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional Architecture Services"
              className="w-full max-w-5xl mx-auto rounded-lg shadow-lg h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Our Architect Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-6 text-gray-900">About Our Architect Services</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Dhiraj Rakho, we connect you with trusted architects who specialize in innovative, 
              functional, and cost-effective designs for homes, offices, and businesses. Our network 
              of verified professionals ensures you get the perfect match for your project needs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Our Architecture Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive design solutions for every space and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToForm}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for exceptional architectural solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Portfolio Showcase</h2>
            <p className="text-xl text-gray-600">
              A glimpse of our architectural excellence and design innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {portfolioImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                <ImageWithFallback 
                  src={image}
                  alt={`Architecture Portfolio ${index + 1}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="bg-white hover:bg-gray-50">
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="consultation-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4 text-gray-900">Get a Free Consultation with an Architect</h2>
            <p className="text-xl text-gray-600">
              Share your vision and let our experts bring it to life.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl mb-2 text-gray-900">Thank You!</h3>
                  <p className="text-gray-600">Our team will connect you with the right architect.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Full Name *</label>
                      <Input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Phone *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Select Service *</label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="interior">Interior</SelectItem>
                          <SelectItem value="renovation">Renovation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">City *</label>
                    <Input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Project Details</label>
                    <Textarea
                      value={formData.projectDetails}
                      onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                      rows={4}
                      className="w-full"
                      placeholder="Describe your project requirements, budget, timeline..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Submit Request
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Client Testimonials</h2>
            <p className="text-xl text-gray-600">
              Real experiences from our satisfied clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 text-lg italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our architect services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}