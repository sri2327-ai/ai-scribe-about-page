
import React from 'react';
import { Facebook, Linkedin, Clock, X } from "lucide-react";
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
      {/* Hero Banner */}
      <section className="pt-24 pb-12">
        <div className={styles.casestudycontainer}>
          <div className={styles.bannerCard}>
            <div className={styles.bannerContent}>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Max 3 min read</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {description}
              </p>

              <div className="flex gap-4">
                <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
                <X className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              </div>
            </div>

            <div className={styles.bannerImage}>
              <OptimizedImage
                src={image}
                alt={title}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className={cn(styles.casestudycontainer, "prose prose-lg max-w-none")}>
          {children}

          {/* CTA Card */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{ctaTitle}</h3>
            <p className="text-gray-600 mb-6">{ctaDescription}</p>
            <Button size="lg">
              Book Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
