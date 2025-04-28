
import React from 'react';
import { Facebook, Linkedin, Clock, X } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import OptimizedImage from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";
import styles from "@/styles/casecontentpage.module.scss";
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
  image,
  children,
  ctaTitle = "Transform Your Practice with CRUSH",
  ctaDescription = "Experience the power of AI-driven documentation. Get started today!"
}: CaseStudyLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/50">
      <Helmet>
        <title>{`${title} | CRUSH AI Medical Scribe`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Banner */}
      <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Max 3 min read</span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
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

            <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-xl">
              <OptimizedImage
                src={image}
                alt={title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* CTA Card */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 shadow-lg transform hover:scale-[1.02] transition-transform">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{ctaTitle}</h3>
            <p className="text-gray-600 mb-6">{ctaDescription}</p>
            <Button size="lg" className="w-full md:w-auto animate-fade-in">
              Book Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
