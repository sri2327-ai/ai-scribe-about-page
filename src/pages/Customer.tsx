
import React from 'react';
import HeroStats from '@/components/customer/HeroStats';
import TestimonialCarousel from '@/components/customer/TestimonialCarousel';
import PromoBanner from '@/components/customer/PromoBanner';
import StunningCaseStudies from '@/components/customer/StunningCaseStudies';
import LogoScroll from '@/components/customer/LogoScroll';
import HeroSection from '@/components/customer/HeroSection';
import { useIsMobile } from '@/hooks/use-mobile';
import { ResponsiveCarousel } from '@/components/ui/ResponsiveCarousel';

const Customer = () => {
  const isMobile = useIsMobile();
  
  const sections = [
    { Component: TestimonialCarousel, id: 'testimonials' },
    { Component: StunningCaseStudies, id: 'case-studies' },
    { Component: LogoScroll, id: 'logos' },
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Fixed-width container to ensure consistent alignment */}
      <div className="max-w-7xl mx-auto">
        <HeroStats />
        <PromoBanner />
        
        {isMobile ? (
          <div className="py-4 px-4">
            <div className="my-8">
              {sections.map(({ Component, id }) => (
                <div key={id} className="mb-12">
                  <Component />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {sections.map(({ Component, id }) => (
              <Component key={id} />
            ))}
          </>
        )}
        
        <HeroSection />
      </div>
    </main>
  );
};

export default Customer;
