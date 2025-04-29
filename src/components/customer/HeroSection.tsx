
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Experience the <span className="text-pink-500">S10.AI</span> difference today
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Join the thousands of healthcare providers who have transformed their practice with our AI solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            asChild
            className="rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#1d4269] hover:to-[#4999a5] text-white px-8 py-6 h-auto"
          >
            <Link to="/contact">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
