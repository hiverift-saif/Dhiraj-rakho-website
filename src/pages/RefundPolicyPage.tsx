import { PageHero } from "../components/PageHero";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";

export function RefundPolicyPage() {
  const eligibleRefunds = [
    "Service not delivered within promised timeframe",
    "Failure to obtain registration due to our error",
    "Duplicate payment or billing error",
    "Service cancellation before commencement"
  ];

  const nonEligibleRefunds = [
    "Change of mind after service completion",
    "Rejection due to incorrect client information",
    "Government fee and statutory charges",
    "Services already delivered successfully"
  ];

  const refundTimeline = [
    {
      step: "Request Submission",
      duration: "Day 1",
      description: "Submit refund request with supporting documents"
    },
    {
      step: "Review Process",
      duration: "3-5 Days",
      description: "Our team reviews the refund request and eligibility"
    },
    {
      step: "Approval/Rejection",
      duration: "1-2 Days",
      description: "Decision communicated via email with detailed reasoning"
    },
    {
      step: "Refund Processing",
      duration: "7-10 Days",
      description: "Approved refunds processed to original payment method"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Refund Policy"
        subtitle="Understand our refund terms and conditions for various services"
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxNXx8bW9uZXklMjByZWZ1bmR8ZW58MXx8fHwxNzExNTQ3MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card>
          <CardContent className="p-8">
            <div className="mb-8">
              <p className="text-lg text-gray-600 mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                This refund policy outlines the conditions under which refunds may be requested and processed 
                for services provided by Dhiraj Rakho. We strive to ensure client satisfaction while maintaining 
                fair business practices.
              </p>
            </div>

            {/* General Policy */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">General Refund Policy</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-800">
                  We offer refunds within <strong>30 days</strong> of service commencement for eligible cases. 
                  Refund requests must be submitted in writing with proper justification and supporting documents.
                </p>
              </div>
            </div>

            {/* Eligible vs Non-Eligible */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-green-800">Eligible for Refund</h3>
                  </div>
                  <ul className="space-y-3">
                    {eligibleRefunds.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <XCircle className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-lg font-semibold text-red-800">Not Eligible for Refund</h3>
                  </div>
                  <ul className="space-y-3">
                    {nonEligibleRefunds.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Refund Process */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Refund Process Timeline</h2>
              <div className="space-y-4">
                {refundTimeline.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-24 text-right mr-4">
                      <span className="text-sm font-medium text-blue-600">{step.duration}</span>
                    </div>
                    <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-1 mr-4"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{step.step}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Specific Policies */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Service-Specific Refund Terms</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Business Registration Services</h3>
                    <p className="text-gray-600">
                      Full refund if registration is not obtained due to our error. Partial refund available 
                      if service is cancelled before government filing.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Consultation Services</h3>
                    <p className="text-gray-600">
                      Refund available if consultation is not provided within 24 hours of scheduled time 
                      without prior notice.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Government Fees</h3>
                    <p className="text-gray-600">
                      Government fees, statutory charges, and third-party costs are non-refundable 
                      once submitted to authorities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* How to Request Refund */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">How to Request a Refund</h2>
              <Card>
                <CardContent className="p-6">
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                      <div>
                        <p className="font-medium">Send Request Email</p>
                        <p className="text-gray-600">Email refund request to refunds@dhirajrakho.com</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                      <div>
                        <p className="font-medium">Include Required Information</p>
                        <p className="text-gray-600">Service details, payment reference, reason for refund</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                      <div>
                        <p className="font-medium">Attach Supporting Documents</p>
                        <p className="text-gray-600">Payment receipts, service agreements, correspondence</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                      <div>
                        <p className="font-medium">Await Response</p>
                        <p className="text-gray-600">We'll review and respond within 3-5 business days</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notes</h3>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• Refunds are processed to the original payment method only</li>
                    <li>• Processing time may vary based on payment method and bank</li>
                    <li>• Partial services completed will be deducted from refund amount</li>
                    <li>• All refund decisions are final and at management discretion</li>
                    <li>• Contact us at support@dhirajrakho.com for any refund queries</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}