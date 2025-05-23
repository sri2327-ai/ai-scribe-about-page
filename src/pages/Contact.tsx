
import React from 'react';
import DemoRequestForm from '@/components/contact/DemoRequestForm';
import { Card } from "@/components/ui/card";
import { QuoteTestimonial } from '@/components/landing/QuoteTestimonial';
import { useIsMobile } from '@/hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-16 px-3 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
        {/* Info Side - Only show description on mobile */}
        <div className="w-full space-y-4 sm:space-y-6 order-2 lg:order-1">
          <Card className="p-4 sm:p-6 lg:p-8 shadow-lg rounded-xl bg-white border border-gray-200 hidden md:block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#133255] mb-3 leading-tight">
              Schedule Your Free Demo
            </h2>
            <p className="text-gray-800 mb-3 text-sm sm:text-base lg:text-lg">
              See S10.AI's <b>Bravo</b> &amp; <b>Crush</b> in action – join 1,000+ providers saving time!
            </p>
            <p className="text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
              Our 15-minute virtual demo shows how <b>Bravo</b> automates scheduling and patient communication, and <b>Crush</b> delivers 99% accurate clinical notes, integrated with your EHR. Tailored to your specialty, no commitment needed.
            </p>
            <div className="mb-4 text-gray-800 text-xs sm:text-sm">
              <b>What to Expect:</b> Personalized walkthrough with our AI experts, plus Q&amp;A.<br />
              <span className="block mt-2">
                <b>Questions?</b> Email <a href="mailto:support@s10.ai" className="underline text-[#387E89]">support@s10.ai</a> or call <a className="underline text-[#387E89]" href="tel:+16314886390">+1 631 4886 390</a>
              </span>
            </div>
            <div className="bg-[#E9F4FD] rounded-md p-3 text-xs text-[#133255] font-medium">
              "HIPAA-compliant, ISO 27001-certified, trusted by 40,000+ providers. Save 90% on charting with Crush and reduce no-shows with Bravo."
            </div>
          </Card>

          {/* Mobile only description */}
          <div className="md:hidden mb-6 sm:mb-8 order-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#133255] mb-3 leading-tight">
              Schedule Your Free Demo
            </h2>
            <p className="text-gray-800 mb-3 text-sm sm:text-base">
              See S10.AI's <b>Bravo</b> &amp; <b>Crush</b> in action – join 1,000+ providers saving time!
            </p>
          </div>

          {/* Testimonial - Only show on desktop and larger tablets */}
          {!isMobile && (
            <div className="hidden lg:block">
              <QuoteTestimonial
                quote="S10.AI has completely transformed our practice workflow. The demo was eye-opening, and implementation was seamless. Now we save hours daily on documentation."
                author="Dr. Sarah Mitchell"
                role="Family Medicine, Boston"
                image="/placeholder.svg"
              />
            </div>
          )}
        </div>
        
        {/* Form Side */}
        <div className="w-full order-1 lg:order-2">
          <DemoRequestForm />
          
          {/* Testimonial - Show on mobile and medium tablets below form */}
          {(isMobile || window.innerWidth < 1024) && (
            <div className="mt-6 sm:mt-8 lg:hidden">
              <QuoteTestimonial
                quote="S10.AI has completely transformed our practice workflow. The demo was eye-opening, and implementation was seamless. Now we save hours daily on documentation."
                author="Dr. Sarah Mitchell"
                role="Family Medicine, Boston"
                image="/placeholder.svg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
