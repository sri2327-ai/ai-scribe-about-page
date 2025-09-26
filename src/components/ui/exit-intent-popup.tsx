
import React, { useMemo, useCallback } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Globe, Zap, Calendar, Users, Shield, Database, MessageSquare, PlayCircle } from "lucide-react";

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDemo: () => void;
  variant?: 'general' | 'crush' | 'bravo';
}

// Memoized content generator for better performance
const getVariantContent = (variant: string) => {
  switch (variant) {
    case 'bravo':
      return {
        title: "Break Language Barriers & System Silos",
        subtitle: "No APIs Required - Works with EHR, CRM, PMS, VOIP & Any Software",
        features: [
          {
            icon: MessageSquare,
            title: "AI Agents for Global Care",
            description: "BRAVO's RPA/Agentic technology deploys multilingual AI agents that communicate with patients in their native language.",
            highlight: "60+ Languages Supported",
            color: "purple"
          },
          {
            icon: Database,
            title: "Universal Software Integration",
            description: "Connect instantly with Epic, Cerner, Salesforce CRM, VOIP systems, PMS, or any software without complex APIs.",
            highlight: "No API Setup Required",
            color: "teal"
          }
        ],
        cta: "Ready to eliminate staffing and language barriers?",
        ctaDescription: "See BRAVO in action with a personalized demo."
      };
    case 'crush':
      return {
        title: "Documentation Without the API Headache",
        subtitle: "No APIs Required - Works with Any EHR",
        features: [
          {
            icon: Zap,
            title: "No API Required",
            description: "S10.AI uses cutting-edge RPA technology that integrates seamlessly without complex API setups.",
            highlight: "Universal Compatibility",
            color: "blue"
          },
          {
            icon: Globe,
            title: "60+ Languages Supported", 
            description: "Serve patients in their native language - from Spanish and Chinese to Welsh and Vietnamese.",
            highlight: "All Languages Included",
            color: "teal"
          }
        ],
        cta: "Ready to eliminate documentation burden?",
        ctaDescription: "Experience CRUSH AI with a personalized demo."
      };
    default:
      return {
        title: "Before You Leave – See Why Clinicians Choose S10.AI",
        subtitle: "#1 Customization Leader • Built for Busy Providers",
        features: [
          {
            icon: Zap,
            title: "The Only Fully Customizable Platform",
            description: "Adapts to your specialty, your workflow, your patients. No empty promises — S10.AI delivers what it claims.",
            highlight: "Total Customization",
            color: "blue"
          },
          {
            icon: Database,
            title: "Works With Your Current EHR",
            description: "Agentic technology integrates directly with Epic, Cerner, athenahealth, NextGen, and more — no APIs, no IT headaches.",
            highlight: "No Disruption",
            color: "purple"
          },
          {
            icon: Globe,
            title: "Serve Every Patient",
            description: "60+ languages included out of the box, from Spanish and Chinese to Welsh and Vietnamese. Improve access instantly.",
            highlight: "60+ Languages",
            color: "teal"
          }
        ],
        cta: "Ready to Transform Your Practice?",
        ctaDescription: "See S10.AI in action with a personalized demo."
      };
  }
};


export const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({
  isOpen,
  onClose,
  onBookDemo,
  variant = 'general'
}) => {
  const content = useMemo(() => getVariantContent(variant), [variant]);

  const handleQuickTour = useCallback(() => {
    onClose();
    window.open('/#watch-demo', '_self');
  }, [onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="w-[95vw] max-w-4xl p-0 bg-white border-0 shadow-2xl overflow-hidden mx-auto flex flex-col rounded-2xl h-auto max-h-[90vh]"
        hideCloseButton={true}
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
        onEscapeKeyDown={onClose}
        onPointerDownOutside={onClose}
        onInteractOutside={(e) => {
          e.preventDefault();
          onClose();
        }}
        style={{ outline: 'none' }}
      >
        <div className="relative flex flex-col h-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white p-4 sm:p-5 md:p-6 lg:p-8 text-center relative flex-shrink-0">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 z-20 p-2 sm:p-2.5 md:p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-200 hover:scale-110"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
            <div className="pr-12 sm:pr-14 md:pr-16">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 leading-tight">{content.title}</h2>
              <p className="text-blue-100 text-sm sm:text-base md:text-lg font-medium">{content.subtitle}</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            {/* Key features */}
            <div className="space-y-4">
              {content.features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-sm transition-all duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-${feature.color}-50 rounded-xl border border-${feature.color}-100 flex-shrink-0`}>
                      <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h3 className="font-bold text-lg text-gray-900">{feature.title}</h3>
                        <span className={`px-3 py-1.5 bg-${feature.color}-100 text-${feature.color}-700 text-sm font-semibold rounded-full self-start`}>
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {content.cta}
              </h3>
              <p className="text-gray-600 text-base">
                {content.ctaDescription}
              </p>
            </div>
          </div>

          {/* Sticky Bottom Actions */}
          <div className="flex-shrink-0 bg-white border-t border-gray-100 p-6 shadow-lg">
            <div className="flex flex-col gap-4">
              <Button
                onClick={onBookDemo}
                size="lg"
                className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Book Your Demo
              </Button>
              
              <Button
                onClick={handleQuickTour}
                variant="outline"
                size="lg"
                className="w-full py-4 px-8 rounded-xl border-2 border-gray-200 hover:bg-gray-50 font-semibold text-gray-700 hover:border-gray-300 transition-all duration-300 text-base"
              >
                <PlayCircle className="w-5 h-5 mr-3" />
                Watch Quick Tour
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
