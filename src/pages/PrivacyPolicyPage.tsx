import { PageHero } from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";

export function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect personal information such as name, email, phone number, business details, and documents necessary for providing our services. This information is collected directly from you during consultation and service delivery."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use your information to provide business registration services, maintain compliance records, communicate about services, process payments, and improve our service quality."
    },
    {
      title: "3. Information Sharing",
      content: "We may share your information with government authorities as required for business registration, authorized service providers who assist in service delivery, and legal authorities when required by law."
    },
    {
      title: "4. Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes secure storage and encrypted transmission of sensitive data."
    },
    {
      title: "5. Data Retention",
      content: "We retain your personal information for as long as necessary to provide services and comply with legal obligations. Business registration documents are maintained as per regulatory requirements."
    },
    {
      title: "6. Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You may also withdraw consent for certain data processing activities, subject to legal and contractual obligations."
    },
    {
      title: "7. Cookies and Tracking",
      content: "Our website may use cookies to improve user experience and analyze website usage. You can control cookie settings through your browser preferences."
    },
    {
      title: "8. Third-Party Links",
      content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies."
    },
    {
      title: "9. Changes to Privacy Policy",
      content: "We may update this privacy policy from time to time. We will notify you of any significant changes through our website or direct communication."
    },
    {
      title: "10. Contact Us",
      content: "If you have any questions about this privacy policy or our data practices, please contact us using the information provided below."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Privacy Policy"
        subtitle="Learn how we collect, use, and protect your personal information"
        backgroundImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxN3x8cHJpdmFjeSUyMHNlY3VyaXR5fGVufDF8fHx8MTcxMTU0NzIwOXww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card>
          <CardContent className="p-8">
            <div className="mb-8">
              <p className="text-lg text-gray-600 mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                This Privacy Policy describes how Dhiraj Rakho collects, uses, and protects your 
                personal information when you use our services. We are committed to ensuring your 
                privacy and the security of your personal data.
              </p>
            </div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Your Privacy Matters</h3>
              <p className="text-green-800 mb-3">
                We are committed to protecting your privacy and maintaining the confidentiality of your information. 
                Our privacy practices comply with applicable data protection laws.
              </p>
              <div className="text-green-800">
                <p className="font-medium mb-1">Contact our Privacy Officer:</p>
                <ul>
                  <li>Email: privacy@dhirajrakho.com</li>
                  <li>Phone: +91 XXXXX XXXXX</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}