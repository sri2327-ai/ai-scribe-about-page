
import React, { Suspense } from 'react';
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

// Lazy load heavier sections
const SecondSection = React.lazy(() => import('@/components/landing/SecondSection'));
const ThirdSection = React.lazy(() => import('@/components/landing/ThirdSection'));
const FifthSection = React.lazy(() => import('@/components/landing/FifthSection'));
const SeventhSection = React.lazy(() => import('@/components/landing/SeventhSection'));
const NinthSection = React.lazy(() => import('@/components/landing/NinthSection'));
const EleventhSection = React.lazy(() => import('@/components/landing/EleventhSection'));

const Landing = () => {
  console.log("Rendering Landing page");
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
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        {/* Add preconnect for critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        <title>S10.AI - Next Generation Clinical AI for Healthcare Providers</title>
        <meta name="description" content="S10.AI delivers innovative ambient AI solutions for healthcare providers, reducing administrative burden and improving patient care through AI medical scribes, documentation automation, and clinical workflow solutions." />
        <link rel="canonical" href="https://s10.ai" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        <Breadcrumb className="py-4 md:py-6">
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

        {/* Add a debug button for testing - we can remove this later */}
        <div className="fixed top-20 right-4 z-50">
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-white shadow-md"
            onClick={() => {
              console.log("Navigating to pricing");
              window.location.href = "/pricing";
            }}
          >
            View Pricing
          </Button>
        </div>

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
    </main>
  );
};

export default Landing;
