import { useState } from "react";
import { Button } from "./ui/button";
import { ContactForm } from "./ContactForm";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaGVyZWQlMjBhY2NvdW50YW50JTIwcHJvZmVzc2lvbmFsJTIwb2ZmaWNlJTIwbWVldGluZ3xlbnwxfHx8fDE3NTg2NTQxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional CS CA consultation services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl">
            Register Your Business in Just{" "}
            <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">7 Days</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-lg px-2">
            Fast, reliable, and expert-led business & legal services with free consultation.
            Start your entrepreneurial journey with confidence.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsFormOpen(true)}
          >
            Get Free Consultation
          </Button>

          {/* Free consultation message */}
          <div className="text-center">
            <p className="text-base sm:text-lg text-blue-200 font-medium drop-shadow-lg">
              Legal consultation is free of cost
            </p>
          </div>
        </div>
      </section>
      
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        serviceType="General Consultation"
      />
    </>
  );
}