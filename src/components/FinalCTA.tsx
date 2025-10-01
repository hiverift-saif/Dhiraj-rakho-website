import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent } from "./ui/card";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Grow Your Business in Just a Few Clicks
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Take the first step towards your entrepreneurial journey. Get started today!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Get Free Consultation
              </h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    className="h-12"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="h-12"
                  />
                </div>
                
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12"
                />
                
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pvt-ltd">Private Limited Company</SelectItem>
                    <SelectItem value="llp">LLP Registration</SelectItem>
                    <SelectItem value="partnership">Partnership Firm</SelectItem>
                    <SelectItem value="ngo">NGO Registration</SelectItem>
                    <SelectItem value="startup">Startup India</SelectItem>
                    <SelectItem value="proprietorship">Proprietorship</SelectItem>
                    <SelectItem value="other">Other Services</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button size="lg" className="w-full h-12 text-lg">
                  Start Application Now
                </Button>
                
                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our Terms & Conditions and Privacy Policy
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-100 mb-4">
            Need immediate assistance?
          </p>
          <Button variant="outline" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Call Now: +91 7631 999 888
          </Button>
        </div>
      </div>
    </section>
  );
}