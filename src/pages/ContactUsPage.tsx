import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@dhirajrakho.com",
      secondary: "support@dhirajrakho.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 7631 999 888",
      secondary: "+91 7631 999 888",
      description: "Available Mon-Sat, 9 AM - 7 PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Vijay Nagar",
      secondary: "New Delhi - 110009",
      description: "Schedule an appointment"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const services = [
    "Private Limited Company Registration",
    "LLP Registration",
    "Partnership Firm Registration",
    "NGO Registration",
    "Trademark Registration",
    "GST Registration",
    "Tax Consultation",
    "Legal Compliance",
    "Other Services"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our expert team for personalized business solutions and legal consultation"
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxidXNpbmVzcyUyMG1lZXRpbmclMjBpbmRpYW58ZW58MXx8fHwxNzExNTQ3MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <info.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  <p className="text-gray-900 font-medium">{info.primary}</p>
                  <p className="text-gray-600">{info.secondary}</p>
                  <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 text-center">
                      <strong>Legal consultation is free of cost</strong> - We'll get back to you within 24 hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Business Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="font-medium text-gray-900">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Quick Response Guarantee</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Email queries: Within 2 hours</li>
                    <li>• Phone calls: Immediate response</li>
                    <li>• Emergency support: 24/7 available</li>
                    <li>• Free consultation: Always included</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Additional Services */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Additional Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Annual Compliance Management</li>
                    <li>• Legal Documentation Support</li>
                    <li>• Business Restructuring Advice</li>
                    <li>• International Business Setup</li>
                    <li>• Ongoing Legal Consultation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-0">
              <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Office Location Map</p>
                  <p className="text-sm text-gray-500">Interactive map will be available here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">How long does business registration take?</h3>
                <p className="text-gray-600">Typically 7-15 days depending on the type of registration and document completeness.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Is consultation really free?</h3>
                <p className="text-gray-600">Yes, we provide free initial consultation to understand your requirements and guide you accordingly.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Do you provide ongoing compliance support?</h3>
                <p className="text-gray-600">Yes, we offer comprehensive compliance management services for all registered entities.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">What if I need urgent registration?</h3>
                <p className="text-gray-600">We offer expedited services for urgent requirements with dedicated support and faster processing.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}