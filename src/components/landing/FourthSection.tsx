import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Heart, Brain, FileText, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import CrushIllustration from './illustrations/CrushIllustration';
import BravoIllustration from './illustrations/BravoIllustration';

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

const specialtyMetrics = {
  primaryCare: "Reduces documentation time by 75%",
  cardiology: "Increases patient face time by 40%",
  neurology: "Improves clinical accuracy by 95%",
  pediatrics: "Saves 12+ hours per week"
};

const SpecialtyBadge = ({ name }: { name: string }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2 mb-2"
  >
    {name}
  </motion.div>
);

const MetricCard = ({ icon: Icon, title, value }: { icon: any, title: string, value: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50"
  >
    <div className="p-2 rounded-lg bg-white">
      <Icon className="w-4 h-4 text-[#387E89]" />
    </div>
    <div>
      <p className="text-sm font-medium text-gray-600">{title}</p>
      <p className="text-lg font-semibold text-[#143151]">{value}</p>
    </div>
  </motion.div>
);

const ProductCard = ({ 
  title, 
  subtitle, 
  description, 
  Illustration,
  metrics,
  isUniversal = false
}: {
  title: string;
  subtitle: string;
  description: string;
  Illustration: React.ComponentType;
  metrics: { title: string; value: string; icon: any }[];
  isUniversal?: boolean;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-full"
  >
    <div className="p-6 flex flex-col gap-6 h-full">
      <div className="aspect-video w-full bg-gray-50 rounded-lg overflow-hidden relative group">
        <div className="w-full h-full">
          <Illustration />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#143151]/80 to-[#387E89]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <p className="text-white text-center text-sm px-4">
              Click to see {title} in action
            </p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4 flex-1">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#143151]">{title}</h3>
          <h4 className="text-lg font-semibold text-[#387E89]">{subtitle}</h4>
        </div>
        
        <p className="text-gray-600 text-center">{description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {metrics.map((metric, idx) => (
            <MetricCard key={idx} {...metric} />
          ))}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-[#387E89]" />
            <p className="text-sm font-medium text-gray-700">Works with all specialties:</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {allSpecialties.map((specialty, idx) => (
              <SpecialtyBadge key={idx} name={specialty} />
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#387E89]" />
            <p className="text-sm font-medium text-gray-700">Compatible with:</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(title === "C.R.U.S.H" ? compatibleSystems.crush : compatibleSystems.bravo).map((system, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-600"
              >
                {system}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <Button 
        className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white hover:from-[#0d1f31] hover:to-[#2c6269] shadow-xl mt-auto"
      >
        See {title} Demo
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </motion.div>
);

export const FourthSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
        <div className="max-w-[900px] mx-auto text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Meet Bravo & CRUSH – A S10'ing Experience
          </h3>
          <p className="text-lg text-gray-600">
            From AI scribes to AI agents, Crush & Bravo solve medical office challenges by streamlining documentation, 
            optimizing real-time clinical prompts, automating clinical workflows, and improving medical decision-making.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <ProductCard 
            title="C.R.U.S.H"
            subtitle="AI Medical Scribe Assistant Powered by Robots"
            description="Crush automates documentation, transcribes in real time using generative AI, and integrates with your preferred EHR, reducing burnout and freeing you to focus on care."
            Illustration={CrushIllustration}
            metrics={[
              { icon: Clock, title: "Documentation Time", value: "-75%" },
              { icon: FileText, title: "Note Accuracy", value: "99%" },
              { icon: Heart, title: "Patient Face Time", value: "+40%" },
              { icon: Shield, title: "Compliance Rate", value: "100%" }
            ]}
          />
          <ProductCard 
            title="B.R.A.V.O"
            subtitle="AI Patient Care Agent Powered by Robots"
            description="Bravo automates scheduling, patient communication, insurance verification, and follow-ups, keeping your clinic efficient and patients engaged."
            Illustration={BravoIllustration}
            metrics={[
              { icon: Clock, title: "Admin Tasks", value: "-85%" },
              { icon: FileText, title: "Patient Satisfaction", value: "+60%" },
              { icon: Brain, title: "AI Accuracy", value: "98%" },
              { icon: Stethoscope, title: "Care Quality", value: "+45%" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
