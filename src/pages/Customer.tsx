
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
    <main className="min-h-screen bg-white">
      <HeroStats />
      <PromoBanner />
      
      {isMobile ? (
        <div className="py-8">
          <ResponsiveCarousel
            items={sections}
            renderItem={({ Component, id }) => (
              <div key={id} className="w-full">
                <Component />
              </div>
            )}
            columnsMobile={1}
            autoPlay={false}
            showControls={true}
            controlsBelow={true}
          />
        </div>
      ) : (
        <>
          {sections.map(({ Component, id }) => (
            <Component key={id} />
          ))}
        </>
      )}
      
      <HeroSection />
    </main>
  );
};

export default Customer;
