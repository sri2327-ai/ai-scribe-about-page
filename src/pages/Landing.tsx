
import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { FirstSection } from '@/components/landing/FirstSection';

// Lazy load components for better performance
const SecondSection = lazy(() => import('@/components/landing/SecondSection').then(module => ({ default: module.SecondSection })));
const ThirdSection = lazy(() => import('@/components/landing/ThirdSection').then(module => ({ default: module.ThirdSection })));
const FourthSection = lazy(() => import('@/components/landing/FourthSection').then(module => ({ default: module.FourthSection })));
const FifthSection = lazy(() => import('@/components/landing/FifthSection').then(module => ({ default: module.FifthSection })));
const SixthSection = lazy(() => import('@/components/landing/SixthSection').then(module => ({ default: module.SixthSection })));
const SeventhSection = lazy(() => import('@/components/landing/SeventhSection').then(module => ({ default: module.SeventhSection })));
const EighthSection = lazy(() => import('@/components/landing/EighthSection').then(module => ({ default: module.EighthSection })));
const NinthSection = lazy(() => import('@/components/landing/NinthSection').then(module => ({ default: module.NinthSection })));
const TenthSection = lazy(() => import('@/components/landing/TenthSection').then(module => ({ default: module.TenthSection })));
const EleventhSection = lazy(() => import('@/components/landing/EleventhSection').then(module => ({ default: module.EleventhSection })));

// Loading component for Suspense fallback
const SectionLoader = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-slate-200 h-10 w-10"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const Landing = () => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>S10.AI - Next Generation Clinical AI for Healthcare Providers</title>
        <meta name="description" content="S10.AI delivers innovative ambient AI solutions for healthcare providers, reducing administrative burden and improving patient care through AI medical scribes, documentation automation, and clinical workflow solutions." />
        <link rel="canonical" href="https://s10.ai" />
      </Helmet>
      
      {/* FirstSection is not lazy loaded because it's above the fold */}
      <FirstSection />
      
      {/* Lazy load all sections below the fold */}
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
        <FifthSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SixthSection />
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
