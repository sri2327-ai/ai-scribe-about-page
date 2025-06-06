
import React, { useState, useMemo } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Globe, Zap, Calendar, CheckCircle, Users, Shield, Database, MessageSquare, PlayCircle } from "lucide-react";

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDemo: () => void;
  variant?: 'general' | 'crush' | 'bravo';
}

const supportedLanguages = [
  "Afrikaans", "Arabic", "Armenian", "Azerbaijani", "Belarusian", "Bosnian", 
  "Bulgarian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", 
  "English", "Estonian", "Finnish", "French", "Galician", "German", "Greek", 
  "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Italian", 
  "Japanese", "Kannada", "Kazakh", "Korean", "Latvian", "Lithuanian", 
  "Macedonian", "Malay", "Marathi", "Maori", "Nepali", "Norwegian", "Persian", 
  "Polish", "Portuguese", "Romanian", "Russian", "Serbian", "Slovak", 
  "Slovenian", "Spanish", "Swahili", "Swedish", "Tagalog", "Tamil", "Thai", 
  "Turkish", "Ukrainian", "Urdu", "Vietnamese", "Welsh"
];

const getVariantContent = (variant: string) => {
  switch (variant) {
    case 'bravo':
      return {
        title: "Break Language Barriers & System Silos",
        subtitle: "Stop letting language differences and complex integrations limit your patient care.",
        features: [
          {
            icon: MessageSquare,
            title: "AI Agents for Global Care",
            description: "BRAVO's RPA/Agentic technology deploys multilingual AI agents that communicate with patients in their native language - no human interpreter needed.",
            color: "purple"
          },
          {
            icon: Database,
            title: "Seamless System Integration",
            description: "Connect with any CRM, EHR, or PMS without complex APIs. BRAVO's intelligent agents work with your existing systems instantly.",
            color: "teal"
          }
        ],
        cta: "Ready to eliminate staffing and language barriers?",
        ctaDescription: "See how BRAVO's AI agents handle multilingual patient interactions while seamlessly integrating with your practice management systems."
      };
    case 'crush':
      return {
        title: "Documentation Without the API Headache",
        subtitle: "Tired of complex EHR integrations? CRUSH works seamlessly without API requirements.",
        features: [
          {
            icon: Zap,
            title: "No API Required",
            description: "CRUSH uses advanced RPA/Agentic technology that integrates directly with your existing workflow - no complex API setups needed.",
            color: "blue"
          },
          {
            icon: Globe,
            title: "65+ Languages Supported", 
            description: "Document patient encounters in any language - from English to Welsh, Arabic to Vietnamese.",
            color: "teal"
          }
        ],
        cta: "Ready to eliminate documentation burden?",
        ctaDescription: "Join thousands of providers who've streamlined their workflow without technical complications or language barriers."
      };
    default:
      return {
        title: "Before You Leave - See What Makes S10.AI Different",
        subtitle: "Tired of AI solutions requiring complex integrations? We've got you covered.",
        features: [
          {
            icon: Zap,
            title: "No API Required",
            description: "S10.AI uses cutting-edge RPA/Agentic technology that works seamlessly without complex API integrations.",
            color: "blue"
          },
          {
            icon: Globe,
            title: "65+ Languages Supported",
            description: "From English to Welsh, Arabic to Vietnamese - we support your global practice needs effortlessly.",
            color: "teal"
          }
        ],
        cta: "Ready to transform your practice?",
        ctaDescription: "Join thousands of healthcare providers who've eliminated technical barriers and language limitations."
      };
  }
};

// Memoized language grid component
const LanguageGrid = React.memo(() => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5 text-xs max-h-32 overflow-y-auto pr-2">
    {supportedLanguages.map((lang) => (
      <div
        key={lang}
        className="flex items-center gap-1 bg-white p-1.5 rounded-md shadow-sm border border-gray-100 min-w-0"
      >
        <CheckCircle className="w-2.5 h-2.5 text-green-500 flex-shrink-0" />
        <span className="text-gray-700 font-medium truncate text-xs">{lang}</span>
      </div>
    ))}
  </div>
));

LanguageGrid.displayName = 'LanguageGrid';

export const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({
  isOpen,
  onClose,
  onBookDemo,
  variant = 'general'
}) => {
  const [showLanguages, setShowLanguages] = useState(false);
  
  // Memoize content to prevent recalculation on every render
  const content = useMemo(() => getVariantContent(variant), [variant]);

  const handleQuickTour = () => {
    onClose();
    // Navigate to quick tour or demo section
    window.open('/#watch-demo', '_self');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="w-[95vw] max-w-4xl h-[95vh] max-h-[800px] p-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 border border-gray-200 shadow-2xl overflow-hidden mx-auto flex flex-col"
        hideCloseButton={true}
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
        onEscapeKeyDown={onClose}
        onPointerDownOutside={onClose}
        onInteractOutside={(e) => {
          e.preventDefault();
          onClose();
        }}
        style={{ 
          outline: 'none',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        <div className="relative flex flex-col h-full" style={{ outline: 'none' }}>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-20 p-1.5 rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-200 hover:scale-110"
            style={{ outline: 'none' }}
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          {/* Header - Fixed height */}
          <div className="bg-gradient-to-r from-[#143151] via-[#387E89] to-[#143151] text-white p-3 md:p-4 text-center relative overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 leading-tight px-2">{content.title}</h2>
              <p className="text-blue-100 text-xs sm:text-sm md:text-base font-medium px-1">{content.subtitle}</p>
            </div>
          </div>

          {/* Scrollable content area - takes remaining space */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 min-h-0">
            {/* Key benefits */}
            <div className="grid gap-2 md:gap-3 md:grid-cols-2">
              {content.features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-3 md:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-2 bg-${feature.color}-100 rounded-xl shadow-sm flex-shrink-0`}>
                      <feature.icon className={`w-4 h-4 text-${feature.color}-600`} />
                    </div>
                    <h3 className="font-bold text-sm md:text-base text-gray-800 leading-tight">{feature.title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-2">{feature.description}</p>
                  {feature.title.includes('Languages') && (
                    <button
                      onClick={() => setShowLanguages(!showLanguages)}
                      className="text-xs md:text-sm text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                      style={{ outline: 'none' }}
                    >
                      {showLanguages ? 'Hide' : 'View all'} supported languages →
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Language list - Fixed height with scroll */}
            {showLanguages && (
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-3 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2 text-center text-sm">All Supported Languages</h4>
                <LanguageGrid />
              </div>
            )}

            {/* Value proposition */}
            <div className="text-center bg-gradient-to-r from-blue-50 via-white to-teal-50 rounded-xl p-3 md:p-4 border border-blue-200">
              <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2 leading-tight">
                {content.cta}
              </h3>
              <p className="text-gray-600 mb-3 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
                {content.ctaDescription}
              </p>
            </div>

            {/* Trust signals */}
            <div className="text-center">
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-600 bg-white/80 rounded-full px-3 py-2 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-green-600" />
                  <span className="font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-blue-600" />
                  <span className="font-medium">HITRUST Certified</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span className="font-medium">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-purple-600" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed bottom action buttons */}
          <div className="flex-shrink-0 bg-white border-t border-gray-200 p-3 md:p-4">
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center max-w-md mx-auto">
              <Button
                onClick={onBookDemo}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
                style={{ outline: 'none' }}
              >
                <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                Book Your Demo Now
              </Button>
              
              <Button
                onClick={handleQuickTour}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-gray-300 hover:bg-gray-50 font-semibold text-gray-700 hover:border-gray-400 transition-all duration-300 text-sm"
                style={{ outline: 'none' }}
              >
                <PlayCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                Quick Tour
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
