import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import { useRouter } from "./Router";

const services = [
  { name: "Private Limited Company", path: "private-limited-company" },
  { name: "LLP Registration", path: "llp-registration" },
  { name: "Partnership Firm", path: "partnership-firm" },
  { name: "NGO Registration", path: "ngo-registration" },
  { name: "Trademark Registration", path: "trademark-registration" },
  { name: "GST Registration", path: "gst-registration" }
];

const professionalServices = [
  { name: "Legal Services", path: "legal-services" },
  { name: "Architect Services", path: "architect-services" },
  { name: "CA Services", path: "online-ca-services" },
  { name: "Business Consultants", path: "startup-planning" },
  { name: "Financial Consultancy", path: "financial-consultancy" },
  { name: "Tax Services", path: "income-tax-return" }
];

const quickLinks = [
  { name: "About Us", path: "about-us" },
  { name: "Contact Us", path: "contact-us" },
  { name: "Terms & Conditions", path: "terms-conditions" },
  { name: "Privacy Policy", path: "privacy-policy" },
  { name: "Refund Policy", path: "refund-policy" },
  { name: "Careers", path: "careers" }
];

export function Footer() {
  const { navigateTo } = useRouter();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Dhiraj Rakho</h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Your trusted partner for business registration and legal services. 
              Fast, reliable, and expert-led solutions for your business needs.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base break-all">info@dhirajrakho.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">
                  Business Address,<br />
                  City, State - 123456
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigateTo(service.path as any)} 
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Professional Services</h4>
            <ul className="space-y-2">
              {professionalServices.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigateTo(service.path as any)} 
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigateTo(link.path as any)} 
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Subscribe to our newsletter for latest updates and business insights.
            </p>
            
            <div className="flex flex-col sm:flex-row mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:border-blue-500 text-sm sm:text-base mb-2 sm:mb-0"
              />
              <button className="px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md sm:rounded-l-none sm:rounded-r-md transition-colors text-sm sm:text-base">
                Subscribe
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-8 sm:mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2024 Dhiraj Rakho. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-right">
              Made with ❤️ for Indian entrepreneurs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}