import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { CheckCircle, Search, FileText, Building, Award, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  message: string;
}

export function LegalServicesPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    city: "",
    message: ""
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
        message: ""
      });
    }, 3000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const scrollToForm = () => {
    document.getElementById('expert-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Documentation & Legal Services",
      description: "Agreements, Wills, Notices",
      icon: FileText,
      items: ["Legal Agreements", "Will Drafting", "Legal Notices", "Property Documentation"]
    },
    {
      title: "Business & Startups",
      description: "Company Registration, Compliance, VLO",
      icon: Building,
      items: ["Company Registration", "Startup Compliance", "Virtual Legal Office", "Business Structuring"]
    },
    {
      title: "Trademark & IP",
      description: "Registration, Renewal",
      icon: Award,
      items: ["Trademark Registration", "Patent Filing", "Copyright Protection", "IP Renewal"]
    },
    {
      title: "Architect Services",
      description: "Design & Planning Solutions",
      icon: Users,
      items: ["Residential Planning", "Commercial Design", "Interior Solutions", "3D Elevation"]
    }
  ];

  const features = [
    "5000+ Lawyers & Professionals onboarded",
    "Trusted Architects & Experts across India", 
    "One platform for all services",
    "Confidential & Secure Assistance"
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "They helped me with company registration and legal compliance. Excellent service!",
      rating: 5
    },
    {
      name: "Priya Sharma", 
      role: "Property Developer",
      content: "Found the perfect architect for my residential project. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Startup Founder", 
      content: "Complete legal support for my startup. Professional and reliable service.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Your Legal & Professional Services, Simplified
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From lawyers to architects — all trusted professionals in one place.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search for legal services, architects, or other professionals..."
                className="pl-12 pr-32 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500"
              />
              <Button 
                onClick={scrollToForm}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
              >
                Find an Expert
              </Button>
            </div>
          </div>

          <div className="mt-12">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMHNlcnZpY2VzJTIwbGF3eWVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODg3MDg0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Legal and Professional Services"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal and professional services to meet all your business and personal needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToForm}
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Request Service
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
              Trusted by thousands of clients across India for professional excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-green-50 rounded-lg">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Hub Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Knowledge Hub</h2>
            <p className="text-xl text-gray-600">
              Expert insights and guidance for your legal and professional needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Legal Guides</CardTitle>
                <CardDescription>Comprehensive guides for legal procedures and compliance.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Architect & Design Tips</CardTitle>
                <CardDescription>Professional insights for your architectural projects.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">FAQs</CardTitle>
                <CardDescription>Common questions and expert answers.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">View FAQs</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="expert-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4 text-gray-900">Get Expert Help Today</h2>
            <p className="text-xl text-gray-600">
              Connect with verified professionals for your legal and architectural needs.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl mb-2 text-gray-900">Thank You!</h3>
                  <p className="text-gray-600">Our team will connect you with the right professional.</p>
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
                      <label className="block text-sm mb-2 text-gray-700">Phone Number *</label>
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
                          <SelectItem value="lawyer">Lawyer Services</SelectItem>
                          <SelectItem value="architect">Architect Services</SelectItem>
                          <SelectItem value="documentation">Documentation & Legal</SelectItem>
                          <SelectItem value="business">Business & Startups</SelectItem>
                          <SelectItem value="trademark">Trademark & IP</SelectItem>
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
                    <label className="block text-sm mb-2 text-gray-700">Message / Project Details</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                      className="w-full"
                      placeholder="Describe your requirements..."
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

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Client Testimonials</h2>
            <p className="text-xl text-gray-600">
              See what our clients say about our professional services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
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
    </div>
  );
}