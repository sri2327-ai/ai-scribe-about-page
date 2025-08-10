import React, { Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FirstSection } from '@/components/landing/FirstSection';
import { FourthSection } from '@/components/landing/FourthSection';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { SectionLoader } from '@/components/ui/section-loader';
import { PracticeTypeSelector } from '@/components/landing/PracticeTypeSelector';
import IntegrationSection from '@/components/landing/IntegrationSection';
import TenthSection from '@/components/landing/TenthSection';
import PracticeHealthCheckSection from '@/components/landing/PracticeHealthCheckSection';
import FloatingAICTA from '@/components/landing/FloatingAICTA';
import ShareWithColleaguesCTA from '@/components/landing/ShareWithColleaguesCTA';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { typography } from '@/lib/typography';
import { PlayCircle } from 'lucide-react';
import AnimatedHeader from '@/components/landing/AnimatedHeader';
import { useExitIntent } from "@/hooks/useExitIntent";
import { ExitIntentPopup } from "@/components/ui/exit-intent-popup";
import ConnectedPlatformSection from '@/components/landing/ConnectedPlatformSection';
import ProviderInterviewSection from '@/components/landing/ProviderInterviewSection';

// Lazy load heavier sections
const SecondSection = React.lazy(() => import('@/components/landing/SecondSection'));
const ThirdSection = React.lazy(() => import('@/components/landing/ThirdSection'));
const FifthSection = React.lazy(() => import('@/components/landing/FifthSection'));
const SeventhSection = React.lazy(() => import('@/components/landing/SeventhSection'));
const NinthSection = React.lazy(() => import('@/components/landing/NinthSection'));
const EleventhSection = React.lazy(() => import('@/components/landing/EleventhSection'));

const Landing = () => {
  console.log("Rendering Landing page");
  
  const [isClient, setIsClient] = useState(false);
  
  // Ensure client-side only features are properly hydrated
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { shouldShow, markAsShown } = useExitIntent({
    threshold: 60,
    delay: 2000,
    inactivityTimeout: 25000,
    enabled: isClient // Only enable when client-side
  });

  const handleBookDemo = () => {
    console.log('Book demo clicked from landing page');
    markAsShown();
    window.open('/contact', '_blank');
  };

  const handleClosePopup = () => {
    console.log('Landing page popup closed');
    markAsShown();
  };

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

  const handlePracticeTypeSelect = (type: string) => {
    console.log("Practice type selected on landing page:", type);
  };

  return (
    <>
      <AnimatedHeader />
      
      <main className="min-h-screen bg-white overflow-x-hidden">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          
          <title>S10.AI - Next Generation Clinical AI for Healthcare Providers</title>
          <meta name="description" content="S10.AI delivers innovative ambient AI solutions for healthcare providers, reducing administrative burden and improving patient care through AI medical scribes, documentation automation, and clinical workflow solutions." />
          <link rel="canonical" href="https://s10.ai" />
          
          <link rel="preload" href="/HeaderLogo.png" as="image" />
          
          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>
        </Helmet>

        <div className={typography.spacing.container}>
          <Breadcrumb className="py-4 flex justify-between items-center">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <div className="flex items-center gap-2">
                  <BreadcrumbLink asChild>
                    <Link to="/pricing">Pricing</Link>
                  </BreadcrumbLink>
                  <div className="bg-gradient-to-r from-purple-200 to-pink-200 text-purple-700 text-xs font-medium px-2 py-1 rounded-full shadow-sm animate-pulse">
                    New
                  </div>
                </div>
              </BreadcrumbItem>
            </BreadcrumbList>
            
            <Button 
              size="sm" 
              variant="ghost" 
              className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 py-1.5 rounded-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              onClick={() => window.open('#watch-demo', '_self')} 
            >
              <span className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-700 ease-in-out"></span>
              <PlayCircle className="mr-2 w-4 h-4 text-white group-hover:text-white" />
              <span className="relative z-10">Watch Demo</span>
            </Button>
          </Breadcrumb>
        </div>

        <FirstSection />
        
        <Suspense fallback={<SectionLoader />}>
          <SecondSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ThirdSection />
        </Suspense>
        
        {/* New Connected Platform Section */}
        <ConnectedPlatformSection />
        
        {/* Interview Feature Section */}
        <ProviderInterviewSection />
        
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
        
        {/* Practice Health Check Section - Added above EleventhSection */}
        <PracticeHealthCheckSection />
        
        <Suspense fallback={<SectionLoader />}>
          <EleventhSection />
        </Suspense>
        
        {/* Share with Colleagues CTA */}
        <ShareWithColleaguesCTA />
        
        {/* Floating AI CTA - Always visible */}
        <FloatingAICTA />
        
        {/* Only render exit intent popup on client side */}
        {isClient && (
          <ExitIntentPopup
            isOpen={shouldShow}
            onClose={handleClosePopup}
            onBookDemo={handleBookDemo}
            variant="general"
          />
        )}
      </main>
      
      <Footer />
    </>
  );
};

export default Landing;
