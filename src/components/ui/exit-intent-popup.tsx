
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
        ctaDescription: "See how BRAVO works with EHR, CRM, PMS, VOIP, and any software system while handling multilingual patient interactions."
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
        ctaDescription: "Join providers using CRUSH with Epic, Cerner, athenahealth, and other major EHR systems."
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
        cta: "Join the thousands of clinicians already using S10.AI",
        ctaDescription: "Save time, reduce clicks, and improve patient care. Start using it without disrupting your existing systems."
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
        className="w-[95vw] max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-[90vh] max-h-[600px] sm:max-h-[650px] p-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 border-0 shadow-2xl overflow-hidden mx-auto flex flex-col rounded-xl"
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
          <div className="bg-gradient-to-r from-[#143151] via-[#387E89] to-[#143151] text-white p-3 sm:p-4 text-center relative overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-black/10"></div>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-20 p-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-200 hover:scale-110"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </button>
            <div className="relative z-10 pr-6 sm:pr-8">
              <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-1 leading-tight">{content.title}</h2>
              <p className="text-blue-100 text-xs sm:text-sm font-medium">{content.subtitle}</p>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-5 space-y-4 sm:space-y-5 min-h-0">
            {/* Key features - Single column for better scannability */}
            <div className="space-y-3 sm:space-y-4">
              {content.features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`p-2.5 sm:p-3 bg-${feature.color}-50 rounded-2xl border border-${feature.color}-100 flex-shrink-0`}>
                      <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${feature.color}-600`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-sm sm:text-base text-gray-900">{feature.title}</h3>
                        <span className={`px-2 py-1 bg-${feature.color}-100 text-${feature.color}-700 text-xs font-semibold rounded-full whitespace-nowrap`}>
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Value proposition - Enhanced for scannability */}
            <div className="text-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-4 sm:p-6 border border-blue-100">
              <div className="max-w-md mx-auto">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {content.cta}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {content.ctaDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Fixed bottom actions - Enhanced for scannability */}
          <div className="flex-shrink-0 bg-white border-t border-gray-100 p-4 sm:p-5">
            <div className="flex flex-col gap-3 max-w-xs mx-auto">
              <Button
                onClick={onBookDemo}
                size="lg"
                className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-bold py-3 sm:py-3.5 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Book Demo
              </Button>
              
              <Button
                onClick={handleQuickTour}
                variant="outline"
                size="lg"
                className="w-full py-3 sm:py-3.5 rounded-2xl border-2 border-gray-200 hover:bg-gray-50 font-semibold text-gray-700 hover:border-gray-300 transition-all duration-300 text-sm sm:text-base"
              >
                <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Quick Tour
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
