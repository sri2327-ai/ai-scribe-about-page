
import React, { Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FirstSection } from '@/components/landing/FirstSection';
import { FourthSection } from '@/components/landing/FourthSection';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { SectionLoader } from '@/components/ui/section-loader';
import { PracticeTypeSelector } from '@/components/landing/PracticeTypeSelector';
import IntegrationSection from '@/components/landing/IntegrationSection';
import TenthSection from '@/components/landing/TenthSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { landingPageStyles } from '@/styles/landing-page-utils';

// Lazy load heavier sections
const SecondSection = React.lazy(() => import('@/components/landing/SecondSection'));
const ThirdSection = React.lazy(() => import('@/components/landing/ThirdSection'));
const FifthSection = React.lazy(() => import('@/components/landing/FifthSection'));
const SixthSection = React.lazy(() => import('@/components/landing/SixthSection'));
const SeventhSection = React.lazy(() => import('@/components/landing/SeventhSection'));
const NinthSection = React.lazy(() => import('@/components/landing/NinthSection'));
const EleventhSection = React.lazy(() => import('@/components/landing/EleventhSection'));

const Landing = () => {
  console.log("Rendering Landing page");
  
  // Ensure smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "S10.AI",
    "url": "https://s10.ai",
    "logo": "https://s10.ai/logo.png",
    "description": "S10.AI delivers innovative ambient AI solutions for healthcare providers, reducing administrative burden and improving patient care through AI medical scribes, documentation automation, and clinical workflow solutions.",
    "sameAs": [
      "https://linkedin.com/company/s10ai",
      "https://twitter.com/s10ai"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "offers": {
      "@type": "Offer",
      "name": "AI Medical Scribe Solutions",
      "description": "Ambient AI solutions for healthcare documentation and workflow automation"
    }
  };

  // Add a handler for the onSelect prop
  const handlePracticeTypeSelect = (type: string) => {
    console.log("Practice type selected on landing page:", type);
    // You can add more functionality here if needed
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white overflow-x-hidden"
      style={{ scrollBehavior: 'smooth' }}
    >
      <Helmet>
        {/* Add preconnect for critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        <title>S10.AI - Next Generation Clinical AI for Healthcare Providers</title>
        <meta name="description" content="S10.AI delivers innovative ambient AI solutions for healthcare providers, reducing administrative burden and improving patient care through AI medical scribes, documentation automation, and clinical workflow solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://s10.ai" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/pricing">Pricing</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Action button in header */}
          <Button 
            size="sm" 
            variant="outline" 
            className="hidden sm:flex bg-white shadow-sm hover:bg-gray-50 transition-all duration-200"
            asChild
          >
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </div>
      </header>

      <div className="focus-visible:outline-none" tabIndex={-1}>
        <FirstSection />
        
        <Suspense fallback={<SectionLoader />}>
          <SecondSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ThirdSection />
        </Suspense>
        
        <FourthSection />
        
        <IntegrationSection />
        
        <Suspense fallback={<SectionLoader />}>
          <FifthSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader aria-label="Loading sixth section" />}>
          <SixthSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <SeventhSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <NinthSection />
        </Suspense>
        
        <TenthSection />
        
        <PracticeTypeSelector onSelect={handlePracticeTypeSelect} />
        
        <Suspense fallback={<SectionLoader />}>
          <EleventhSection />
        </Suspense>
      </div>

      {/* Skip to content link for accessibility */}
      <a 
        href="#skip-to-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 z-50 rounded shadow"
      >
        Skip to content
      </a>
    </motion.main>
  );
};

export default Landing;
