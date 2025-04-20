import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { FirstSection } from '@/components/landing/FirstSection';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { SectionLoader } from '@/components/ui/section-loader';

const SecondSection = lazy(() => import('@/components/landing/SecondSection').then(module => ({ default: module.default || module.SecondSection })));
const ThirdSection = lazy(() => import('@/components/landing/ThirdSection').then(module => ({ default: module.default || module.ThirdSection })));
const FourthSection = lazy(() => import('@/components/landing/FourthSection').then(module => ({ default: module.default || module.FourthSection })));
const IntegrationSection = lazy(() => import('@/components/landing/IntegrationSection'));
const FifthSection = lazy(() => import('@/components/landing/FifthSection').then(module => ({ default: module.default || module.FifthSection })));
const SeventhSection = lazy(() => import('@/components/landing/SeventhSection').then(module => ({ default: module.default || module.SeventhSection })));
const EighthSection = lazy(() => import('@/components/landing/EighthSection').then(module => ({ default: module.default || module.EighthSection })));
const NinthSection = lazy(() => import('@/components/landing/NinthSection').then(module => ({ default: module.default || module.NinthSection })));
const TenthSection = lazy(() => import('@/components/landing/TenthSection'));
const EleventhSection = lazy(() => import('@/components/landing/EleventhSection').then(module => ({ default: module.default || module.EleventhSection })));

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
      <Suspense fallback={<SectionLoader />}>
        <FourthSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <IntegrationSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FifthSection />
      </Suspense>
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
      <Suspense fallback={<SectionLoader />}>
        <EleventhSection />
      </Suspense>
    </main>
  );
};

export default Landing;
