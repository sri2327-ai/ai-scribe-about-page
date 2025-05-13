
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Heart, Brain, FileText, Clock, Shield, CheckCircle } from "lucide-react";
import CrushIllustration from './illustrations/CrushIllustration';
import BravoIllustration from './illustrations/BravoIllustration';
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

const compatibleSystems = {
  crush: ["Epic", "Cerner", "Athena", "AllScripts", "and any other EHR"],
  bravo: ["Epic", "Cerner", "Athena", "AllScripts", "any EHR", "PMS", "VOIP"]
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
  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2 mb-2">
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
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex items-start gap-3 p-3 rounded-lg shadow-sm transition-all duration-200 bg-green-50"
  >
    <div className="p-2 rounded-lg bg-green-100">
      <Icon className="w-5 h-5 text-green-600" />
    </div>
    <div>
      <p className="text-sm font-medium text-gray-600">{title}</p>
      <p className="text-lg font-bold text-green-700">{value}</p>
    </div>
  </motion.div>
);

const FeatureBullet = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2 mb-2">
    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
    <span className="text-sm text-gray-600">{text}</span>
  </div>
);

const ProductCard = ({ 
  title, 
  subtitle, 
  description, 
  Illustration,
  metrics,
  features = [],
  isPositive = true,
  ctaText = "See Demo",
  isUniversal = false
}: {
  title: string;
  subtitle: string;
  description: string;
  Illustration: React.ComponentType;
  metrics: { title: string; value: string; icon: any; positive?: boolean }[];
  features?: string[];
  isPositive?: boolean;
  ctaText?: string;
  isUniversal?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col"
  >
    <div className="p-5 flex flex-col gap-4 h-full">
      <div className="h-56 w-full bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden relative group">
        <motion.div 
          className="w-full h-full flex items-center justify-center p-4 transition-opacity duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-3/4 h-3/4">
            <Illustration />
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-center text-lg font-medium px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Click to see {title} in action
          </p>
        </div>
      </div>
      
      <div className="space-y-4 flex-grow">
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">{title}</h3>
          <h4 className="text-base font-semibold text-gray-600">{subtitle}</h4>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-green-200 pl-3 py-1">{description}</p>
        
        {features.length > 0 && (
          <div className="space-y-1 bg-green-50 p-3 rounded-lg">
            <h5 className="font-medium text-sm text-gray-700 mb-2">Key Benefits</h5>
            {features.map((feature, idx) => (
              <FeatureBullet key={idx} text={feature} />
            ))}
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-2">
          {metrics.map((metric, idx) => (
            <MetricCard 
              key={idx} 
              {...metric}
            />
          ))}
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-green-600" />
            <p className="text-xs font-medium text-gray-700">Compatible with all specialties:</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {allSpecialties.map((specialty, idx) => (
              <SpecialtyBadge key={idx} name={specialty} />
            ))}
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-600" />
            <p className="text-xs font-medium text-gray-700">Compatible with:</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {(title === "C.R.U.S.H" ? compatibleSystems.crush : compatibleSystems.bravo).map((system, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded bg-green-100 text-green-700 hover:scale-105 transition-transform duration-200"
              >
                {system}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Button 
        className="w-full shadow-xl transition-all duration-300 text-white font-medium bg-gradient-to-r from-green-700 to-green-500 hover:from-green-800 hover:to-green-600"
      >
        {ctaText}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </motion.div>
);

export const FourthSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
              Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">Bravo & CRUSH</span> – A S10'ing Experience
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Our AI solutions streamline medical workflows and improve patient care through intelligent automation. Designed specifically for clinicians, these tools adapt to your specialty and integrate seamlessly with your existing systems.
            </p>
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch justify-center">
          <div className="w-full md:w-1/2 max-w-[550px]">
            <ProductCard 
              title="C.R.U.S.H"
              subtitle="AI Medical Scribe Assistant"
              description="Reduce documentation time and increase patient face time with our AI-powered medical scribe that integrates seamlessly with your EHR."
              features={[
                "Real-time documentation during patient encounters",
                "Automated note generation with clinical accuracy",
                "Smart templates tailored to your specialty"
              ]}
              Illustration={CrushIllustration}
              isPositive={true}
              metrics={[
                { icon: Clock, title: "Documentation Time", value: "-75%" },
                { icon: FileText, title: "Note Accuracy", value: "99%" },
                { icon: Heart, title: "Patient Face Time", value: "+40%" },
                { icon: Shield, title: "Compliance Rate", value: "100%" }
              ]}
              ctaText="See CRUSH Demo"
            />
          </div>
          <div className="w-full md:w-1/2 max-w-[550px]">
            <ProductCard 
              title="B.R.A.V.O"
              subtitle="AI Patient Care Agent"
              description="Transform patient management with an AI assistant that handles scheduling, communication, and administrative tasks with remarkable efficiency."
              features={[
                "Automated appointment scheduling and reminders",
                "Intelligent patient communication and follow-ups",
                "Streamlined insurance verification workflows"
              ]}
              Illustration={BravoIllustration}
              isPositive={false}
              metrics={[
                { icon: Clock, title: "Admin Tasks", value: "-85%" },
                { icon: FileText, title: "Patient Satisfaction", value: "+60%" },
                { icon: Brain, title: "AI Accuracy", value: "98%" },
                { icon: Stethoscope, title: "Care Quality", value: "+45%" }
              ]}
              ctaText="See BRAVO Demo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
