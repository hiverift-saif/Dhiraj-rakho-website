import { PageHero } from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";

export function TermsConditionsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      title: "2. Service Description", 
      content: "Dhiraj Rakho provides business registration, legal compliance, and consultation services. We strive to provide accurate and timely services but do not guarantee specific outcomes."
    },
    {
      title: "3. Client Responsibilities",
      content: "Clients must provide accurate and complete information, submit required documents promptly, and comply with applicable laws and regulations."
    },
    {
      title: "4. Payment Terms",
      content: "Payment terms will be communicated during service engagement. Services may be suspended for non-payment. Refunds are subject to our refund policy."
    },
    {
      title: "5. Confidentiality",
      content: "We maintain strict confidentiality of all client information and will not disclose any confidential information without prior written consent."
    },
    {
      title: "6. Limitation of Liability",
      content: "Our liability is limited to the fees paid for services. We are not liable for any indirect, consequential, or punitive damages."
    },
    {
      title: "7. Intellectual Property",
      content: "All content, trademarks, and intellectual property on our website and materials remain our property or that of our licensors."
    },
    {
      title: "8. Termination",
      content: "Either party may terminate services with appropriate notice. Termination does not affect obligations that have already accrued."
    },
    {
      title: "9. Governing Law",
      content: "These terms are governed by Indian law and any disputes will be resolved in the appropriate jurisdiction."
    },
    {
      title: "10. Changes to Terms",
      content: "We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read our terms and conditions carefully before using our services"
        backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNXx8bGVnYWwlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzExNTQ3MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card>
          <CardContent className="p-8">
            <div className="mb-8">
              <p className="text-lg text-gray-600 mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                These Terms and Conditions govern your relationship with Dhiraj Rakho operated services. 
                Please read these Terms and Conditions carefully before using our services.
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

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Contact Information</h3>
              <p className="text-blue-800">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <ul className="mt-2 text-blue-800">
                <li>Email: info@dhirajrakho.com</li>
                <li>Phone: +91 XXXXX XXXXX</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}