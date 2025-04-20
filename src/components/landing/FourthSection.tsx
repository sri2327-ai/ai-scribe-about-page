
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Heart, Brain, FileText, Clock, Shield } from "lucide-react";
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

const SpecialtyBadge = ({ name }: { name: string }) => (
  <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-1.5 mb-1.5">
    {name}
  </div>
);

const MetricCard = ({ icon: Icon, title, value }: { icon: any, title: string, value: string }) => (
  <div className="flex items-start gap-2 p-1.5 rounded-lg bg-gray-50 hover:-translate-y-1 transition-transform duration-200">
    <div className="p-1.5 rounded-lg bg-white">
      <Icon className="w-3.5 h-3.5 text-[#387E89]" />
    </div>
    <div>
      <p className="text-xs font-medium text-gray-600">{title}</p>
      <p className="text-base font-semibold text-[#143151]">{value}</p>
    </div>
  </div>
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
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="p-4 flex flex-col gap-3">
      <div className="h-64 w-full bg-gray-50 rounded-lg overflow-hidden relative group">
        <div className="w-full h-full flex items-center justify-center p-3">
          <Illustration />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#143151] to-[#387E89] opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-center text-sm px-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Click to see {title} in action
          </p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="text-center">
          <h3 className="text-lg font-bold text-[#143151]">{title}</h3>
          <h4 className="text-sm font-semibold text-[#387E89]">{subtitle}</h4>
        </div>
        
        <p className="text-gray-600 text-center text-xs">{description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {metrics.map((metric, idx) => (
            <MetricCard key={idx} {...metric} />
          ))}
        </div>
        
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5">
            <Stethoscope className="w-3.5 h-3.5 text-[#387E89]" />
            <p className="text-xs font-medium text-gray-700">Works with all specialties:</p>
          </div>
          <div className="flex flex-wrap gap-0.5">
            {allSpecialties.map((specialty, idx) => (
              <SpecialtyBadge key={idx} name={specialty} />
            ))}
          </div>
        </div>
        
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#387E89]" />
            <p className="text-xs font-medium text-gray-700">Compatible with:</p>
          </div>
          <div className="flex flex-wrap gap-0.5">
            {(title === "C.R.U.S.H" ? compatibleSystems.crush : compatibleSystems.bravo).map((system, idx) => (
              <span
                key={idx}
                className="px-1.5 py-0.5 text-xs rounded bg-gray-100 text-gray-600 hover:scale-105 transition-transform duration-200"
              >
                {system}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Button 
        className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white hover:from-[#0d1f31] hover:to-[#2c6269] shadow-lg"
      >
        See {title} Demo
        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
      </Button>
    </div>
  </div>
);

export const FourthSection = () => {
  return (
    <section className="py-6 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-4">
        <div className="max-w-[900px] mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
            Meet Bravo & CRUSH – A S10'ing Experience
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            From AI scribes to AI agents, Crush & Bravo solve medical office challenges by streamlining documentation, 
            optimizing real-time clinical prompts, automating clinical workflows, and improving medical decision-making.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
          <ProductCard 
            title="C.R.U.S.H"
            subtitle="AI Medical Scribe Assistant"
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
            subtitle="AI Patient Care Agent"
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
