
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { S10Demo } from '@/components/demo/S10Demo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ShootingStars from '@/components/ui/shooting-stars';

const InteractiveDemo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for the 3D assets
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <Helmet>
        <title>Interactive Demo | S10.AI - Experience the Future of Healthcare AI</title>
        <meta name="description" content="Experience an interactive 3D demonstration of S10.AI's end-to-end healthcare automation platform, from patient engagement to AI medical scribing and clinical workflow optimization." />
      </Helmet>

      {/* Background effects */}
      <ShootingStars className="opacity-30" starCount={30} colors={["#1EAEDB", "#ffffff"]} />
      
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            ← Back to Home
          </Button>
        </Link>
      </div>

      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-t-blue-500 border-b-blue-500 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
            <p className="text-white text-xl">Loading Experience...</p>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-white px-4 relative">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Experience the Future of Clinical Automation
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mb-8 text-gray-300">
            From patient engagement to real-time documentation and post-visit support—see how S10.AI transforms care delivery, end-to-end.
          </p>
          <div className="text-sm text-gray-400 animate-bounce">
            Scroll to begin the journey
            <div className="mt-2 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
          </div>
        </section>

        {/* Demo container */}
        <S10Demo />
      </div>
    </div>
  );
};

export default InteractiveDemo;
