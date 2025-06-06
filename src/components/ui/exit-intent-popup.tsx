
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
            description: "S10.AI uses cutting-edge RPA/Agentic technology that works seamlessly without complex API integrations. Just plug and play.",
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

// Memoized language grid component for performance
const LanguageGrid = React.memo(() => (
  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1.5 sm:gap-2 text-xs">
    {supportedLanguages.map((lang) => (
      <div
        key={lang}
        className="flex items-center gap-1 bg-white p-1.5 sm:p-2 rounded-md shadow-sm"
      >
        <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 flex-shrink-0" />
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
        className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl p-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 border-2 border-blue-300 shadow-2xl overflow-hidden mx-2 sm:mx-4 max-h-[95vh] overflow-y-auto"
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
          outline: 'none !important',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25) !important'
        }}
      >
        <div className="relative" style={{ outline: 'none !important' }}>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-200 hover:scale-110"
            style={{ outline: 'none !important' }}
            onFocus={(e) => e.target.style.outline = 'none'}
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-[#143151] via-[#387E89] to-[#143151] text-white p-3 sm:p-4 md:p-6 lg:p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 leading-tight px-8 sm:px-0">{content.title}</h2>
              <p className="text-blue-100 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium px-4 sm:px-0">{content.subtitle}</p>
            </div>
          </div>

          {/* Main content */}
          <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 relative z-10">
            {/* Key benefits */}
            <div className="grid gap-3 sm:gap-4 md:gap-6 md:grid-cols-2">
              {content.features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                    <div className={`p-1.5 sm:p-2 md:p-3 bg-${feature.color}-100 rounded-xl shadow-sm`}>
                      <feature.icon className={`w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-${feature.color}-600`} />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm md:text-lg lg:text-xl text-gray-800 leading-tight">{feature.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3 md:mb-4">{feature.description}</p>
                  {feature.title.includes('Languages') && (
                    <button
                      onClick={() => setShowLanguages(!showLanguages)}
                      className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 underline font-medium transition-colors focus:outline-none focus-visible:outline-none"
                      style={{ outline: 'none' }}
                    >
                      {showLanguages ? 'Hide' : 'View all'} supported languages →
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Language list - Improved responsive layout */}
            {showLanguages && (
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-3 sm:p-4 md:p-6 max-h-48 sm:max-h-56 md:max-h-64 overflow-y-auto border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-center text-sm sm:text-base">All Supported Languages</h4>
                <LanguageGrid />
              </div>
            )}

            {/* Value proposition */}
            <div className="text-center bg-gradient-to-r from-blue-50 via-white to-teal-50 rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 border border-blue-200">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 leading-tight">
                {content.cta}
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                {content.ctaDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center">
                <Button
                  onClick={onBookDemo}
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-bold px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
                  style={{ outline: 'none !important' }}
                  onFocus={(e) => e.target.style.outline = 'none'}
                >
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 md:mr-3" />
                  Book Your Demo Now
                </Button>
                
                <Button
                  onClick={handleQuickTour}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full border-2 border-gray-300 hover:bg-gray-50 font-semibold text-gray-700 hover:border-gray-400 transition-all duration-300 text-xs sm:text-sm md:text-base"
                  style={{ outline: 'none !important' }}
                  onFocus={(e) => e.target.style.outline = 'none'}
                >
                  <PlayCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
                  Quick Tour
                </Button>
              </div>
            </div>

            {/* Trust signals */}
            <div className="text-center">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-6 text-xs sm:text-sm text-gray-600 bg-white/80 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-green-600" />
                  <span className="font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-blue-600" />
                  <span className="font-medium">HITRUST Certified</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-green-600" />
                  <span className="font-medium">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-purple-600" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
