import { useState } from "react";
import { PageHero } from "./PageHero";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ContactForm } from "./ContactForm";
import { Check, Clock, FileText, Users, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  description: string;
  benefits: string[];
  requirements?: string[];
  documents?: string[];
  process?: Array<{
    step: number;
    title: string;
    description: string;
    duration: string;
  }>;
  additionalInfo?: React.ReactNode;
}

export function ServicePageTemplate({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb21wYW55JTIwcmVnaXN0cmF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTcxMTU0NzIwOXww&ixlib=rb-4.1.0&q=80&w=1080",
  description,
  benefits,
  requirements,
  documents,
  process,
  additionalInfo
}: ServicePageTemplateProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About {title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {description}
              </p>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxidXNpbmVzcyUyMG1lZXRpbmclMjBpbmRpYW58ZW58MXx8fHwxNzExNTQ3MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Requirements and Documents Section */}
        {(requirements || documents) && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Requirements & Documents
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {requirements && (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Users className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold">Requirements</h3>
                    </div>
                    <ul className="space-y-3">
                      {requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {documents && (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <FileText className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold">Required Documents</h3>
                    </div>
                    <ul className="space-y-3">
                      {documents.map((doc, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </section>
        )}

        {/* Process Section */}
        {process && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="flex items-center justify-center text-sm text-blue-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {step.duration}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Additional Information */}
        {additionalInfo && (
          <section className="mb-16">
            {additionalInfo}
          </section>
        )}

        {/* CTA Section */}
        <section className="text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get expert assistance with {title.toLowerCase()} and complete legal compliance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsFormOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Get Started Now
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
        serviceType={title}
      />
    </div>
  );
}