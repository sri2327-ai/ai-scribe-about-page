
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { S10Demo } from '@/components/demo/S10Demo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const InteractiveDemo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <Helmet>
        <title>Interactive Demo | S10.AI - Experience the Future of Healthcare AI</title>
        <meta name="description" content="Experience an interactive demonstration of S10.AI's end-to-end healthcare automation platform, from patient engagement to AI medical scribing and clinical workflow optimization." />
      </Helmet>

      {/* Dynamic background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,20,40,0.8)_100%)]" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,174,219,0.15),rgba(0,0,0,0)_70%)]" />
        <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>
      
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left mr-2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-40">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-16 h-16">
              <div className="w-16 h-16 border-4 border-t-blue-500 border-b-blue-500 border-l-transparent border-r-transparent rounded-full animate-spin absolute"></div>
              <div className="w-16 h-16 border-4 border-r-teal-400 border-l-teal-400 border-t-transparent border-b-transparent rounded-full animate-spin absolute" style={{ animationDirection: 'reverse' }}></div>
            </div>
            <p className="text-white text-xl">Loading Experience...</p>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-white px-4 relative">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Experience the Future of Clinical Automation
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-center max-w-3xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            From patient engagement to real-time documentation and post-visit support—see how S10.AI transforms care delivery, end-to-end.
          </motion.p>
          <motion.div 
            className="text-sm text-gray-400 animate-bounce flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="mb-2">Scroll to begin the journey</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </motion.div>
        </section>

        {/* Demo container */}
        <S10Demo />

        {/* Call to action section */}
        <section className="min-h-[50vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-[#0a1a2a] to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to transform your clinical workflow?</h2>
              <p className="text-lg md:text-xl mb-10 text-gray-300">
                Join the healthcare revolution with S10.AI and experience 95% reduction in documentation time and 2x ROI within months.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border-none px-8 py-6 text-lg h-auto">
                  Request a Demo <ArrowRight className="ml-2" />
                </Button>
                <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg h-auto">
                  Download ROI Report
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InteractiveDemo;
