import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { FirstSection } from '@/components/landing/FirstSection';
import { FourthSection } from '@/components/landing/FourthSection';
import { SixthSection } from '@/components/landing/SixthSection';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { SectionLoader } from '@/components/ui/section-loader';
import { PracticeTypeSelector } from '@/components/landing/PracticeTypeSelector';
import IntegrationSection from '@/components/landing/IntegrationSection';

// Properly import all lazy components
const SecondSection = React.lazy(() => import('@/components/landing/SecondSection'));
const ThirdSection = React.lazy(() => import('@/components/landing/ThirdSection'));
const FifthSection = React.lazy(() => import('@/components/landing/FifthSection'));
const SeventhSection = React.lazy(() => import('@/components/landing/SeventhSection'));
const EighthSection = React.lazy(() => import('@/components/landing/EighthSection'));
const NinthSection = React.lazy(() => import('@/components/landing/NinthSection'));
const TenthSection = React.lazy(() => import('@/components/landing/TenthSection'));
const EleventhSection = React.lazy(() => import('@/components/landing/EleventhSection'));

const Landing = () => {
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

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>S10.AI - Next Generation Clinical AI for Healthcare Providers</title>
        <meta name="description" content="S10.AI delivers innovative ambient AI solutions for healthcare providers, reducing administrative burden and improving patient care through AI medical scribes, documentation automation, and clinical workflow solutions." />
        <link rel="canonical" href="https://s10.ai" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

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
      <SixthSection />
      <Suspense fallback={<SectionLoader />}>
        <SeventhSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <EighthSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <NinthSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TenthSection />
      </Suspense>
      <PracticeTypeSelector />
      <Suspense fallback={<SectionLoader />}>
        <EleventhSection />
      </Suspense>
    </main>
  );
};

export default Landing;
