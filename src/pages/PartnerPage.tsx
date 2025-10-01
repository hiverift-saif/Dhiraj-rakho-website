import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Label } from "../components/ui/label";
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
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    partnershipType: "",
    currentBusiness: "",
    experience: "",
    clientBase: "",
    investmentCapacity: "",
    professionalCertification: "",
    referralNetwork: ""
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open contact form with the partnership application details
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </Label>
                      <Input 
                        id="fullName"
                        placeholder="Enter your full name" 
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </Label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </Label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="your.email@example.com" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-sm font-medium text-gray-700 mb-2">
                        City/Location *
                      </Label>
                      <Input 
                        id="city"
                        placeholder="e.g., Mumbai, Delhi, Bangalore" 
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="partnershipType" className="text-sm font-medium text-gray-700 mb-2">
                      Partnership Type *
                    </Label>
                    <Select 
                      required
                      value={formData.partnershipType}
                      onValueChange={(value) => setFormData({...formData, partnershipType: value})}
                    >
                      <SelectTrigger id="partnershipType">
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business-consultant">Business Consultant</SelectItem>
                        <SelectItem value="ca-legal-professional">CA/Legal Professional</SelectItem>
                        <SelectItem value="regional-partner">Regional Partner</SelectItem>
                        <SelectItem value="referral-partner">Referral Partner</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Dynamic fields based on partnership type */}
                  {formData.partnershipType === 'business-consultant' && (
                    <>
                      <div>
                        <Label htmlFor="experience" className="text-sm font-medium text-gray-700 mb-2">
                          Business Advisory Experience *
                        </Label>
                        <Select 
                          required
                          value={formData.experience}
                          onValueChange={(value) => setFormData({...formData, experience: value})}
                        >
                          <SelectTrigger id="experience">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="2-5">2-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="clientBase" className="text-sm font-medium text-gray-700 mb-2">
                          Size of Existing Client Base *
                        </Label>
                        <Select 
                          required
                          value={formData.clientBase}
                          onValueChange={(value) => setFormData({...formData, clientBase: value})}
                        >
                          <SelectTrigger id="clientBase">
                            <SelectValue placeholder="Select client base size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-10">0-10 clients</SelectItem>
                            <SelectItem value="10-50">10-50 clients</SelectItem>
                            <SelectItem value="50-100">50-100 clients</SelectItem>
                            <SelectItem value="100+">100+ clients</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="currentBusiness" className="text-sm font-medium text-gray-700 mb-2">
                          Current Business Services & Professional Network *
                        </Label>
                        <Textarea 
                          id="currentBusiness"
                          placeholder="Tell us about:&#10;• Your current consultancy services&#10;• Types of clients you serve&#10;• Your professional network&#10;• Why you want to expand with legal services"
                          className="min-h-[140px]"
                          required
                          value={formData.currentBusiness}
                          onChange={(e) => setFormData({...formData, currentBusiness: e.target.value})}
                        />
                      </div>
                    </>
                  )}

                  {formData.partnershipType === 'ca-legal-professional' && (
                    <>
                      <div>
                        <Label htmlFor="professionalCertification" className="text-sm font-medium text-gray-700 mb-2">
                          Professional Certification/License *
                        </Label>
                        <Input 
                          id="professionalCertification"
                          placeholder="e.g., CA Membership Number, Bar Council ID" 
                          required
                          value={formData.professionalCertification}
                          onChange={(e) => setFormData({...formData, professionalCertification: e.target.value})}
                        />
                      </div>

                      <div>
                        <Label htmlFor="experience" className="text-sm font-medium text-gray-700 mb-2">
                          Years of Professional Practice *
                        </Label>
                        <Select 
                          required
                          value={formData.experience}
                          onValueChange={(value) => setFormData({...formData, experience: value})}
                        >
                          <SelectTrigger id="experience">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="2-5">2-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="currentBusiness" className="text-sm font-medium text-gray-700 mb-2">
                          Practice Details & Client Relationships *
                        </Label>
                        <Textarea 
                          id="currentBusiness"
                          placeholder="Tell us about:&#10;• Your current practice areas&#10;• Size of client portfolio&#10;• Type of services you currently offer&#10;• Interest in business registration services"
                          className="min-h-[140px]"
                          required
                          value={formData.currentBusiness}
                          onChange={(e) => setFormData({...formData, currentBusiness: e.target.value})}
                        />
                      </div>
                    </>
                  )}

                  {formData.partnershipType === 'regional-partner' && (
                    <>
                      <div>
                        <Label htmlFor="experience" className="text-sm font-medium text-gray-700 mb-2">
                          Business Setup/Management Experience *
                        </Label>
                        <Select 
                          required
                          value={formData.experience}
                          onValueChange={(value) => setFormData({...formData, experience: value})}
                        >
                          <SelectTrigger id="experience">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="2-5">2-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="investmentCapacity" className="text-sm font-medium text-gray-700 mb-2">
                          Investment Capacity *
                        </Label>
                        <Select 
                          required
                          value={formData.investmentCapacity}
                          onValueChange={(value) => setFormData({...formData, investmentCapacity: value})}
                        >
                          <SelectTrigger id="investmentCapacity">
                            <SelectValue placeholder="Select investment range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5-10L">₹5-10 Lakhs</SelectItem>
                            <SelectItem value="10-25L">₹10-25 Lakhs</SelectItem>
                            <SelectItem value="25-50L">₹25-50 Lakhs</SelectItem>
                            <SelectItem value="50L+">₹50+ Lakhs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="currentBusiness" className="text-sm font-medium text-gray-700 mb-2">
                          Local Market Knowledge & Business Plan *
                        </Label>
                        <Textarea 
                          id="currentBusiness"
                          placeholder="Tell us about:&#10;• Your knowledge of local business market&#10;• Existing infrastructure or office space&#10;• Team size and capabilities&#10;• Territory/cities you want to cover&#10;• Growth plans for the region"
                          className="min-h-[140px]"
                          required
                          value={formData.currentBusiness}
                          onChange={(e) => setFormData({...formData, currentBusiness: e.target.value})}
                        />
                      </div>
                    </>
                  )}

                  {formData.partnershipType === 'referral-partner' && (
                    <>
                      <div>
                        <Label htmlFor="referralNetwork" className="text-sm font-medium text-gray-700 mb-2">
                          Size of Your Professional Network *
                        </Label>
                        <Select 
                          required
                          value={formData.referralNetwork}
                          onValueChange={(value) => setFormData({...formData, referralNetwork: value})}
                        >
                          <SelectTrigger id="referralNetwork">
                            <SelectValue placeholder="Select network size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small (1-50 contacts)</SelectItem>
                            <SelectItem value="medium">Medium (50-200 contacts)</SelectItem>
                            <SelectItem value="large">Large (200-500 contacts)</SelectItem>
                            <SelectItem value="extensive">Extensive (500+ contacts)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="experience" className="text-sm font-medium text-gray-700 mb-2">
                          Experience in Business Development/Sales *
                        </Label>
                        <Select 
                          required
                          value={formData.experience}
                          onValueChange={(value) => setFormData({...formData, experience: value})}
                        >
                          <SelectTrigger id="experience">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years (Beginner)</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5+">5+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="currentBusiness" className="text-sm font-medium text-gray-700 mb-2">
                          Network of Potential Clients & Communication Skills *
                        </Label>
                        <Textarea 
                          id="currentBusiness"
                          placeholder="Tell us about:&#10;• Types of contacts in your network (startups, SMEs, etc.)&#10;• Your communication and sales skills&#10;• Expected monthly referrals&#10;• Why you're interested in this opportunity"
                          className="min-h-[140px]"
                          required
                          value={formData.currentBusiness}
                          onChange={(e) => setFormData({...formData, currentBusiness: e.target.value})}
                        />
                      </div>
                    </>
                  )}

                  {!formData.partnershipType && (
                    <div className="text-center py-8 text-gray-500">
                      Please select a partnership type above to continue
                    </div>
                  )}

                  {formData.partnershipType && (
                    <div className="text-center">
                      <Button 
                        type="submit"
                        size="lg" 
                        className="px-12"
                      >
                        Submit Partnership Application
                      </Button>
                      <p className="text-sm text-gray-600 mt-4">
                        Our team will review your application and get back to you within 24 hours
                      </p>
                    </div>
                  )}
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