
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CrushIllustration } from './illustrations/CrushIllustration';
import { BravoIllustration } from './illustrations/BravoIllustration';

export const FourthSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
        <div className="max-w-[900px] mx-auto text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Meet Bravo & CRUSH – A S10'ing Experience
          </h3>
          <p className="text-lg text-gray-600">
            From AI scribes to AI agents, Crush & Bravo solve medical office challenges by streamlining documentation, optimizing real-time clinical prompts, automating clinical workflows, and improving medical decision-making. They cut admin tasks and enhance patient care—always ready to assist, with enterprise-grade AI enhancing every aspect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {[
            {
              title: "C.R.U.S.H",
              subtitle: "AI Medical Scribe Assistant Powered by Robots",
              description: "Crush automates documentation, transcribes in real time using generative AI, and integrates with your preferred EHR, reducing burnout and freeing you to focus on care.",
              Illustration: CrushIllustration
            },
            {
              title: "B.R.A.V.O",
              subtitle: "AI Patient Care Agent Powered by Robots",
              description: "Bravo automates scheduling, patient communication, insurance verification, and follow-ups, keeping your clinic efficient and patients engaged.",
              Illustration: BravoIllustration
            }
          ].map(({ title, subtitle, description, Illustration }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6 flex flex-col gap-6">
                <div className="aspect-video w-full bg-gray-50 rounded-lg overflow-hidden">
                  <Illustration />
                </div>
                
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl font-bold text-[#143151] text-center">
                    {title}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-[#387E89] text-center">
                    {subtitle}
                  </h4>
                  
                  <p className="text-gray-600 text-center min-h-[80px]">
                    {description}
                  </p>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white"
                >
                  View More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
