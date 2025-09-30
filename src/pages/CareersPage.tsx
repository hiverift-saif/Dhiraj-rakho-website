import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ContactForm } from "../components/ContactForm";
import { Briefcase, MapPin, Clock, Users, Award, TrendingUp, Heart, Send } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CareersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const jobOpenings = [
    {
      title: "Business Registration Executive",
      department: "Operations",
      location: "Office",
      type: "Full-time",
      experience: "1-3 years",
      description: "Handle client registration processes, documentation, and compliance requirements.",
      requirements: [
        "Bachelor's degree in Law, Commerce, or related field",
        "Experience in business registration processes",
        "Strong communication and client handling skills",
        "Knowledge of ROC procedures and compliance"
      ]
    },
    {
      title: "Legal Consultant",
      department: "Legal",
      location: "Office/Remote",
      type: "Full-time",
      experience: "3-5 years",
      description: "Provide legal advice to clients, draft legal documents, and ensure compliance.",
      requirements: [
        "LLB degree with active bar council enrollment",
        "Experience in corporate law and compliance",
        "Excellent drafting and advisory skills",
        "Client relationship management experience"
      ]
    },
    {
      title: "Tax Consultant (CA)",
      department: "Taxation",
      location: "Office",
      type: "Full-time",
      experience: "2-4 years",
      description: "Handle GST registration, tax planning, and compliance for corporate clients.",
      requirements: [
        "Qualified Chartered Accountant (CA)",
        "Experience in GST and corporate taxation",
        "Proficiency in tax software and returns filing",
        "Strong analytical and problem-solving skills"
      ]
    },
    {
      title: "Company Secretary",
      department: "Compliance",
      location: "Office",
      type: "Full-time",
      experience: "2-5 years",
      description: "Ensure corporate compliance, board meetings, and regulatory filings.",
      requirements: [
        "Qualified Company Secretary (CS)",
        "Experience in ROC filings and corporate governance",
        "Knowledge of Companies Act and SEBI regulations",
        "Detail-oriented with strong organizational skills"
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working hours and supportive work environment"
    },
    {
      icon: TrendingUp,
      title: "Competitive Compensation",
      description: "Market-competitive salary with performance bonuses"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative and inclusive workplace culture"
    }
  ];

  const workCulture = [
    "Professional development and training programs",
    "Recognition and rewards for outstanding performance",
    "Health and wellness benefits",
    "Team building activities and events",
    "Open door policy and transparent communication",
    "Opportunity to work with diverse clients and industries"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Careers at Dhiraj Rakho"
        subtitle="Join our team of legal and business experts to help entrepreneurs build successful businesses"
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxidXNpbmVzcyUyMG1lZXRpbmclMjBpbmRpYW58ZW58MXx8fHwxNzExNTQ3MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Work With Us */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Dhiraj Rakho, we believe our team is our greatest asset. We foster a culture of learning, 
                growth, and collaboration where every team member can thrive and contribute to our mission 
                of helping businesses succeed.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Join us to be part of a dynamic team that makes a real difference in the entrepreneurial 
                ecosystem by providing expert legal and business services to growing companies.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxOHx8dGVhbSUyMHdvcmslMjBpbmRpYXxlbnwxfHx8fDE3MTE1NDcyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team working together"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Employee Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-6">
                  <benefit.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Work Culture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Work Culture
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {workCulture.map((item, index) => (
                  <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <Heart className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Openings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Current Job Openings
          </h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <Badge variant="outline">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{job.description}</p>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="text-gray-600 space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <Button
                        onClick={() => setIsFormOpen(true)}
                        className="w-full mb-3"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                      <p className="text-sm text-gray-500 text-center">
                        Send your resume and cover letter
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Application Process
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Apply Online</h3>
                  <p className="text-gray-600 text-sm">Submit your application through our form</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Initial Screening</h3>
                  <p className="text-gray-600 text-sm">We review your profile and qualifications</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Interview Process</h3>
                  <p className="text-gray-600 text-sm">Technical and HR interview rounds</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Welcome Aboard</h3>
                  <p className="text-gray-600 text-sm">Onboarding and team integration</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact for Careers */}
        <section className="text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Don't See the Right Position?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button
                size="lg"
                onClick={() => setIsFormOpen(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Send Your Resume
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Email: careers@dhirajrakho.com
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        serviceType="Career Application"
      />
    </div>
  );
}