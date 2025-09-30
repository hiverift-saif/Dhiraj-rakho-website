import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ContactForm } from "../components/ContactForm";
import { Users, Target, Award, Heart, CheckCircle, Star, Briefcase, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutUsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const values = [
    {
      icon: Heart,
      title: "Client First Approach",
      description: "We prioritize our clients' success and provide personalized solutions for every business need."
    },
    {
      icon: CheckCircle,
      title: "Excellence in Service",
      description: "We maintain the highest standards of professional service delivery and client satisfaction."
    },
    {
      icon: Target,
      title: "Result Oriented",
      description: "We focus on delivering tangible results that help businesses grow and succeed."
    },
    {
      icon: Globe,
      title: "Innovation & Technology",
      description: "We leverage latest technology to provide efficient and streamlined business solutions."
    }
  ];

  const stats = [
    { number: "1000+", label: "Businesses Registered" },
    { number: "500+", label: "Happy Clients" },
    { number: "15+", label: "Years of Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const services = [
    "Business Registration Services",
    "Legal Compliance Management",
    "Intellectual Property Rights",
    "Taxation Services",
    "Professional Consultation",
    "International Business Setup"
  ];

  const team = [
    {
      name: "Dhiraj Rakho",
      position: "Founder & CEO",
      qualification: "CS, CA, LLB",
      experience: "15+ years",
      description: "Expert in corporate law, taxation, and business registration with extensive experience in helping businesses achieve legal compliance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="About Dhiraj Rakho"
        subtitle="Your trusted partner for business registration and legal services with expert guidance and comprehensive solutions"
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxidXNpbmVzcyUyMG1lZXRpbmclMjBpbmRpYW58ZW58MXx8fHwxNzExNTQ3MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Overview */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Dhiraj Rakho has been a trusted name in business registration and legal services for over 15 years. We started with a vision to simplify complex legal processes for entrepreneurs and businesses across India.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our expertise spans across business registration, compliance management, intellectual property rights, taxation services, and professional consultation. We have successfully helped thousands of businesses establish their legal presence and maintain ongoing compliance.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With a team of qualified professionals including Chartered Accountants, Company Secretaries, and Legal Experts, we provide comprehensive solutions tailored to each client's unique requirements.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzExNTQ3MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional business meeting"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower entrepreneurs and businesses by providing accessible, reliable, and expert legal services that simplify complex regulatory requirements and enable business growth.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8 text-center">
                <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be India's most trusted and preferred partner for business registration and legal services, known for our expertise, integrity, and commitment to client success.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-6">
                  <value.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8">
                Our Achievements
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Services Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Service Portfolio
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <Briefcase className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Meet Our Founder
          </h2>
          <div className="max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold">
                        DR
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-medium">{member.position}</p>
                    </div>
                    <div className="md:col-span-2">
                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-500">Qualifications:</span>
                        <p className="text-lg font-semibold text-gray-900">{member.qualification}</p>
                      </div>
                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-500">Experience:</span>
                        <p className="text-lg font-semibold text-gray-900">{member.experience}</p>
                      </div>
                      <p className="text-gray-600">{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Dhiraj Rakho?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Expert Team</h3>
                <p className="text-gray-600">Qualified professionals with extensive experience in business law and compliance</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Proven Track Record</h3>
                <p className="text-gray-600">Successfully served thousands of clients with 99% satisfaction rate</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Personalized Service</h3>
                <p className="text-gray-600">Tailored solutions for every client's unique business requirements</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get expert legal and business consultation for your company registration needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsFormOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsFormOpen(true)}
                >
                  Free Consultation
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Legal consultation is free of cost
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        serviceType="General Consultation"
      />
    </div>
  );
}