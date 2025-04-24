
import React from 'react';
import DemoRequestForm from '@/components/contact/DemoRequestForm';
import { Card } from "@/components/ui/card";
import { QuoteTestimonial } from '@/components/landing/QuoteTestimonial';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Info Side - Only show description on mobile */}
        <div className="w-full space-y-6">
          <Card className="p-8 shadow-lg rounded-xl bg-white border border-gray-200 hidden md:block">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#133255] mb-3 leading-tight">
              Schedule Your Free Demo
            </h2>
            <p className="text-gray-800 mb-3 text-lg">
              See S10.AI's <b>Bravo</b> &amp; <b>Crush</b> in action – join 1,000+ providers saving time!
            </p>
            <p className="text-gray-800 mb-6 text-lg">
              Our 15-minute virtual demo shows how <b>Bravo</b> automates scheduling and patient communication, and <b>Crush</b> delivers 99% accurate clinical notes, integrated with your EHR. Tailored to your specialty, no commitment needed.
            </p>
            <div className="mb-4 text-gray-800 text-sm">
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
          <div className="md:hidden mb-8">
            <h2 className="text-3xl font-extrabold text-[#133255] mb-3 leading-tight">
              Schedule Your Free Demo
            </h2>
            <p className="text-gray-800 mb-3">
              See S10.AI's <b>Bravo</b> &amp; <b>Crush</b> in action – join 1,000+ providers saving time!
            </p>
          </div>

          {/* Testimonial - Now on the left side below info */}
          <QuoteTestimonial
            quote="S10.AI has completely transformed our practice workflow. The demo was eye-opening, and implementation was seamless. Now we save hours daily on documentation."
            author="Dr. Sarah Mitchell"
            role="Family Medicine, Boston"
            image="/placeholder.svg"
          />
        </div>
        
        {/* Form Side */}
        <div className="w-full">
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
