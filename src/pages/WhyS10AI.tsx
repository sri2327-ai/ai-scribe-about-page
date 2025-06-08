
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhyS10Hero from '@/components/why-s10/WhyS10Hero';
import WhyS10Features from '@/components/why-s10/WhyS10Features';
import WhyS10StackCards from '@/components/why-s10/WhyS10StackCards';
import WhyS10Details from '@/components/why-s10/WhyS10Details';
import WhyS10HowItWorks from '@/components/why-s10/WhyS10HowItWorks';
import WhyS10Showcase from '@/components/why-s10/WhyS10Showcase';
import WhyS10Newsletter from '@/components/why-s10/WhyS10Newsletter';

const WhyS10AI = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Why S10.AI? - Advanced Healthcare AI Solutions</title>
        <meta 
          name="description" 
          content="Discover why S10.AI is revolutionizing healthcare with cutting-edge AI technology, adaptive learning, and human-like intuition." 
        />
      </Helmet>
      
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      
      <main className="min-h-screen bg-white">
        <WhyS10Hero />
        <WhyS10Features />
        <WhyS10StackCards />
        <WhyS10Details />
        <WhyS10HowItWorks />
        <WhyS10Showcase />
        <WhyS10Newsletter />
      </main>
      
      <Footer />
    </>
  );
};

export default WhyS10AI;
