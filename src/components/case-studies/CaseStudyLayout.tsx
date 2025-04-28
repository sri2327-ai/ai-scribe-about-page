
import React from 'react';
import { Facebook, Linkedin, Clock, X } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CaseStudyLayoutProps {
  title: string;
  description: string;
  image: string;
  children: React.ReactNode;
  ctaTitle?: string;
  ctaDescription?: string;
}

export const CaseStudyLayout = ({
  title,
  description,
  children,
  ctaTitle = "Transform Your Practice with CRUSH",
  ctaDescription = "Join thousands of healthcare providers who have revolutionized their documentation process."
}: CaseStudyLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/50">
      <Helmet>
        <title>{`${title} | CRUSH AI Medical Scribe`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Banner */}
      <section className="pt-12 md:pt-20 pb-6 md:pb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Max 3 min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {description}
            </p>

            <div className="flex gap-4 pt-2">
              <button 
                className="hover:scale-110 transition-transform rounded-full p-2 hover:bg-gray-100" 
                aria-label="Share on Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600" />
              </button>
              <button 
                className="hover:scale-110 transition-transform rounded-full p-2 hover:bg-gray-100" 
                aria-label="Share on X"
              >
                <X className="w-5 h-5 text-gray-600 hover:text-gray-900" />
              </button>
              <button 
                className="hover:scale-110 transition-transform rounded-full p-2 hover:bg-gray-100" 
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* Enhanced CTA Card */}
          <div className="mt-16 bg-gradient-to-br from-[#F2FCE2] to-green-50 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{ctaTitle}</h3>
              <p className="text-lg text-gray-600">{ctaDescription}</p>
              <Button 
                size="lg" 
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-6 text-lg h-auto transition-all duration-300 animate-fade-in shadow-lg hover:shadow-xl"
              >
                Book Your Free Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
