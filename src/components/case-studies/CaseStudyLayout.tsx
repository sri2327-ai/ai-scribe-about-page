
import React from 'react';
import { Facebook, Linkedin, Clock, X } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import OptimizedImage from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";

interface CaseStudyLayoutProps {
  title: string;
  description: string;
  image: string;
  children: React.ReactNode;
  ctaTitle?: string;
}

export const CaseStudyLayout = ({
  title,
  description,
  image,
  children,
  ctaTitle = "Transform Your Practice with S10.AI"
}: CaseStudyLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/50">
      <Helmet>
        <title>{`${title} | S10.AI Medical Scribe`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Banner */}
      <section className="pt-24 md:pt-28 pb-8 md:pb-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Max 3 min read</span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 break-words hyphens-auto leading-tight">
              {title}
            </h1>
            
            <p className="text-base md:text-lg text-gray-600">
              {description}
            </p>

            <div className="flex gap-4 pt-2">
              <button className="hover:scale-110 transition-transform" aria-label="Share on Facebook">
                <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600" />
              </button>
              <button className="hover:scale-110 transition-transform" aria-label="Share on X">
                <X className="w-5 h-5 text-gray-600 hover:text-gray-900" />
              </button>
              <button className="hover:scale-110 transition-transform" aria-label="Share on LinkedIn">
                <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
              </button>
            </div>
          </div>

          <div className="mt-8 md:mt-12 relative rounded-lg overflow-hidden shadow-lg">
            <OptimizedImage
              src={image}
              alt={title}
              className="w-full h-auto max-h-80 object-cover"
              priority={true}
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* Single CTA at the bottom */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 shadow-lg transform hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                <span className="text-[#D946EF]">{ctaTitle}</span>
              </h3>
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl h-auto"
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
