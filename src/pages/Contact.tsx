
import React from 'react';
import DemoRequestForm from '@/components/contact/DemoRequestForm';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#A5CCF3] flex items-center justify-center py-12 px-2">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 items-start justify-center">
        {/* Info & Testimonial LEFT side */}
        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col gap-6">
          <Card className="p-6 shadow-lg rounded-xl bg-white/90 border border-gray-200">
            <h2 className="text-2xl font-semibold text-[#133255] mb-2">
              Schedule Your Free Demo
            </h2>
            <p className="text-gray-800 mb-3">
              See S10.AI's <b>Bravo</b> &amp; <b>Crush</b> in action – join 1,000+ providers saving time!
            </p>
            <p className="text-gray-800 mb-3">
              Our 15-minute virtual demo shows how <b>Bravo</b> automates scheduling and patient communication, and <b>Crush</b> delivers 99% accurate clinical notes, integrated with your EHR. Tailored to your specialty, no commitment needed.
            </p>
            <button
              className="mt-2 mb-3 px-6 py-2 w-full rounded-lg bg-[#387E89] text-white font-bold hover:bg-[#133255] transition"
              tabIndex={-1}
              disabled
            >
              Schedule Demo
            </button>
            <div className="mb-4 text-gray-800 text-sm">
              <b>What to Expect:</b> Personalized walkthrough with our AI experts, plus Q&A.<br />
              <span className="block mt-2">
                <b>Questions?</b> Email <a href="mailto:support@s10.ai" className="underline text-[#387E89]">support@s10.ai</a> or call <a className="underline text-[#387E89]" href="tel:+16314886390">+1 631 4886 390</a>
              </span>
            </div>
            <div className="bg-[#E9F4FD] rounded-md p-3 text-xs text-[#133255] font-medium mb-2">
              "HIPAA-compliant, ISO 27001-certified, trusted by 40,000+ providers. Save 90% on charting with Crush and reduce no-shows with Bravo."
            </div>
          </Card>

          {/* Testimonial */}
          <Card className="p-5 bg-[#FAFBFD] border border-gray-100 rounded-lg shadow">
            <p className="italic text-[#143151] mb-4 text-base leading-relaxed">
              &ldquo;S10.AI is effortless and customizable!&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-[#387E89]/25">
                <AvatarImage
                  src="/lovable-uploads/95bdf500-1ad7-4b7b-ba3d-f163efd104c8.png"
                  alt="Dr. Lisbeth Roy"
                />
                <AvatarFallback className="bg-[#387E89]/10 text-[#387E89]">LR</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-[#143151]">Dr. Lisbeth Roy</p>
                <p className="text-sm text-gray-600">CEO, Doctors Studio</p>
              </div>
            </div>
          </Card>
        </div>
        {/* FORM RIGHT side */}
        <div className="w-full md:w-1/2 lg:w-2/5">
          <DemoRequestForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
