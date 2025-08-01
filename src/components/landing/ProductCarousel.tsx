import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Heart, Brain, FileText, Clock, Shield, CheckCircle, Cog, Zap } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CrushIllustration from './illustrations/CrushIllustration';
import BravoIllustration from './illustrations/BravoIllustration';
import CustomAIIllustration from './illustrations/CustomAIIllustration';
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

const compatibleSystems = {
  crush: ["Epic", "Cerner", "Athena", "AllScripts", "and any other EHR"],
  bravo: ["Epic", "Cerner", "Athena", "AllScripts", "any EHR", "PMS", "VOIP"],
  custom: ["Any System", "Custom APIs", "Webhooks", "Database", "Third-party Tools"]
};

const allSpecialties = [
  "Primary Care",
  "Cardiology", 
  "Neurology", 
  "Internal Medicine",
  "Family Practice",
  "Pediatrics",
  "And More"
];

const SpecialtyBadge = ({ name }: { name: string }) => (
  <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-1 mb-1">
    <CheckCircle className="w-3 h-3 mr-1" />
    {name}
  </div>
);

const MetricCard = ({ 
  icon: Icon, 
  title, 
  value, 
  positive = true 
}: { 
  icon: any, 
  title: string, 
  value: string,
  positive?: boolean
}) => (
  <div className="flex items-start gap-2 p-3 md:p-2 rounded-lg shadow-sm transition-all duration-200 bg-gray-50 hover:bg-gray-100">
    <div className="p-2 md:p-1.5 rounded-lg bg-gray-100">
      <Icon className="w-5 h-5 md:w-4 md:h-4 text-gray-600" />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sm md:text-xs font-medium text-gray-600 leading-tight">{title}</p>
      <p className="text-base md:text-sm font-bold text-gray-700 mt-0.5">{value}</p>
    </div>
  </div>
);

const ProductCard = ({ 
  title, 
  subtitle, 
  description, 
  Illustration,
  metrics,
  isPositive = true,
  ctaText = "See Demo",
  compatibleSystemsKey
}: {
  title: string;
  subtitle: string;
  description: string;
  Illustration: React.ComponentType;
  metrics: { title: string; value: string; icon: any; positive?: boolean }[];
  isPositive?: boolean;
  ctaText?: string;
  compatibleSystemsKey: keyof typeof compatibleSystems;
}) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col">
    <div className="p-4 md:p-6 flex flex-col gap-4 md:gap-3 h-full">
      {/* Illustration */}
      <div 
        className="h-52 md:h-48 w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden relative group"
        style={{ minHeight: '208px' }}
      >
        <div className="w-full h-full flex items-center justify-center p-4 md:p-3 transition-opacity duration-300">
          <div className="w-4/5 md:w-3/4 h-4/5 md:h-3/4">
            <Illustration />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#143151] to-[#387E89] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-center text-base md:text-sm font-medium px-4 md:px-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Click to see {title} in action
          </p>
        </div>
      </div>
      
      <div className="space-y-4 md:space-y-3 flex-grow">
        <div className="text-center">
          <h3 className="text-2xl md:text-xl font-bold bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent leading-tight">{title}</h3>
          <h4 className="text-base md:text-sm font-semibold text-gray-600 mt-1">{subtitle}</h4>
        </div>
        
        <p className="text-gray-600 text-sm md:text-xs leading-relaxed border-l-4 border-gray-200 pl-3 md:pl-2 py-2 md:py-1">{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2">
          {metrics.map((metric, idx) => (
            <MetricCard 
              key={idx} 
              {...metric} 
              positive={metric.positive !== undefined ? metric.positive : isPositive} 
            />
          ))}
        </div>
        
        <div className="space-y-3 md:space-y-2">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4 md:w-3 md:h-3 text-[#387E89]" />
            <p className="text-sm md:text-xs font-medium text-gray-700">Compatible with all specialties:</p>
          </div>
          <div className="flex flex-wrap gap-1.5 md:gap-1">
            {allSpecialties.slice(0, 4).map((specialty, idx) => (
              <SpecialtyBadge key={idx} name={specialty} />
            ))}
            <SpecialtyBadge name="And More" />
          </div>
        </div>
        
        <div className="space-y-2 md:space-y-1">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 md:w-3 md:h-3 text-[#387E89]" />
            <p className="text-sm md:text-xs font-medium text-gray-700">Compatible with:</p>
          </div>
          <div className="flex flex-wrap gap-1.5 md:gap-1">
            {compatibleSystems[compatibleSystemsKey].slice(0, 4).map((system, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 md:px-2 md:py-1 text-sm md:text-xs rounded-md bg-gray-100 text-gray-600 hover:scale-105 transition-transform duration-200"
              >
                {system}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Button 
        className="w-full shadow-lg transition-all duration-300 text-white font-medium bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] py-3 md:py-2.5 text-base md:text-sm"
      >
        {ctaText}
        <ArrowRight className="ml-2 h-5 w-5 md:h-4 md:w-4" />
      </Button>
    </div>
  </div>
);

export const ProductCarousel = () => {
  const products = [
    {
      title: "C.R.U.S.H",
      subtitle: "AI Medical Scribe Assistant",
      description: "Reduce documentation time and increase patient face time with our AI-powered medical scribe that integrates seamlessly with your EHR.",
      Illustration: CrushIllustration,
      isPositive: true,
      metrics: [
        { icon: Clock, title: "Documentation Time", value: "-75%", positive: true },
        { icon: FileText, title: "Note Accuracy", value: "99%" },
        { icon: Heart, title: "Patient Face Time", value: "+40%" },
        { icon: Shield, title: "Compliance Rate", value: "100%" }
      ],
      ctaText: "See CRUSH Demo",
      compatibleSystemsKey: "crush" as const
    },
    {
      title: "B.R.A.V.O",
      subtitle: "AI Patient Care Agent",
      description: "Transform patient management with an AI assistant that handles scheduling, communication, and administrative tasks with remarkable efficiency.",
      Illustration: BravoIllustration,
      isPositive: false,
      metrics: [
        { icon: Clock, title: "Admin Tasks", value: "-85%", positive: true },
        { icon: FileText, title: "Patient Satisfaction", value: "+60%" },
        { icon: Brain, title: "AI Accuracy", value: "98%" },
        { icon: Stethoscope, title: "Care Quality", value: "+45%" }
      ],
      ctaText: "See BRAVO Demo",
      compatibleSystemsKey: "bravo" as const
    },
    {
      title: "Custom AI Agents",
      subtitle: "Tailored AI Solutions",
      description: "Build custom AI agents that perfectly match your unique workflows. From patient intake to billing automation - create AI that works exactly how you need it.",
      Illustration: CustomAIIllustration,
      isPositive: true,
      metrics: [
        { icon: Cog, title: "Custom Workflows", value: "∞" },
        { icon: Zap, title: "Setup Time", value: "<30min" },
        { icon: Brain, title: "AI Flexibility", value: "100%" },
        { icon: Shield, title: "System Integration", value: "Any" }
      ],
      ctaText: "Build Custom Agent",
      compatibleSystemsKey: "custom" as const
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-[90%] sm:basis-[85%] md:basis-1/2 lg:basis-1/3">
              <div className="h-full">
                <ProductCard {...product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Only show arrows on mobile and tablet */}
        <div className="block lg:hidden">
          <CarouselPrevious className="left-2 h-10 w-10 md:h-12 md:w-12" />
          <CarouselNext className="right-2 h-10 w-10 md:h-12 md:w-12" />
        </div>
      </Carousel>
    </div>
  );
};
