import React from "react";
import { HeroSection } from "./HeroSection";
import { AdvantagesSection } from "./AdvantagesSection";
import { FinalCTA } from "./FinalCTA";
import { ScriptLoader } from "./ScriptLoader";
import { S10AISection } from "./S10AISection";

export const AdvantagesContent = () => {
  return (
    <ScriptLoader>
      <div className="bg-black min-h-screen text-gray-100 antialiased overflow-x-hidden">
        <style dangerouslySetInnerHTML={{ __html: `
          .hero-text-content-wrapper { 
            position: relative;
            z-index: 10; 
          }
          
          .cta-button-secondary {
             background-color: #374151; /* Darker Gray for contrast on black */
             color: #F3F4F6; 
             transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
          }
          .cta-button-secondary:hover {
            background-color: #4B5563; /* Slightly lighter gray on hover */
            box-shadow: 0 8px 15px rgba(0,0,0,0.3);
          }
          
          .benefit-highlight {
            background-color: #1f2937; /* Dark Slate Blue */
            border-left: 4px solid #14B8A6; /* Teal-500 */
          }
          .benefit-highlight-edge {
            background-color: #1f2937; /* Dark Slate Blue */
             border-left: 4px solid #2563EB; /* Blue-600 */
          }
          .benefit-highlight h4, .benefit-highlight-edge h4 {
            color: #E5E7EB; 
          }
          .benefit-highlight p, .benefit-highlight-edge p {
            color: #D1D5DB; 
          }
          
          .tubelight-active-bg {
            background: linear-gradient(to right, #0D9488, #2563EB); 
            box-shadow: inset 0 0 10px 3px rgba(255, 255, 255, 0.08), 
                        0 0 18px 4px rgba(20, 184, 166, 0.45), 
                        0 0 18px 4px rgba(37, 99, 235, 0.35); 
          }
          .tubelight-glow-main {
             background: linear-gradient(to right, #2DD4BF, #60A5FA); 
             height: 3px; 
             box-shadow: 0 0 12px 3px rgba(45, 212, 191, 0.8), 
                         0 0 12px 3px rgba(96, 165, 250, 0.6); 
          }
          .tubelight-glow-blur1 {
            background-color: rgba(20, 184, 166, 0.3); 
            height: 14px; 
            filter: blur(12px); 
          }
          .tubelight-glow-blur2 {
            background-color: rgba(37, 99, 235, 0.25); 
            height: 14px;
            filter: blur(12px);
          }

          /* Styles for Advantage Section Content Display Card */
          #advantageContentDisplayWrapper { 
            width: 100%;
          }
          .advantage-content-display { 
            width: 100%; 
            height: auto; /* Ensure height is determined by content */
          }
        `}} />
        <HeroSection />
        <AdvantagesSection />
        <S10AISection />
        <FinalCTA />
      </div>
    </ScriptLoader>
  );
};
