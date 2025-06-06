
import React, { useState, useMemo } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Globe, Zap, Calendar, CheckCircle, Users, Shield, Database, MessageSquare, PlayCircle, ChevronDown, ChevronUp, Star } from "lucide-react";

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDemo: () => void;
  variant?: 'general' | 'crush' | 'bravo';
}

const supportedLanguages = [
  "English", "Spanish", "Chinese", "French", "German", "Italian", "Portuguese", "Russian", "Japanese", "Korean", "Arabic", "Hindi"
];

const additionalLanguages = [
  "Afrikaans", "Armenian", "Azerbaijani", "Belarusian", "Bosnian", 
  "Bulgarian", "Catalan", "Croatian", "Czech", "Danish", "Dutch", 
  "Estonian", "Finnish", "Galician", "Greek", 
  "Hebrew", "Hungarian", "Icelandic", "Indonesian", 
  "Kannada", "Kazakh", "Latvian", "Lithuanian", 
  "Macedonian", "Malay", "Marathi", "Maori", "Nepali", "Norwegian", "Persian", 
  "Polish", "Romanian", "Serbian", "Slovak", 
  "Slovenian", "Swahili", "Swedish", "Tagalog", "Tamil", "Thai", 
  "Turkish", "Ukrainian", "Urdu", "Vietnamese", "Welsh"
];

const popularEHRs = [
  "Epic", "Cerner", "Allscripts", "athenahealth", "NextGen", "eClinicalWorks"
];

const additionalEHRs = [
  "MEDITECH", "DrChrono", "Practice Fusion", "Amazing Charts", "ChartLogic", "CureMD"
];

const getVariantContent = (variant: string) => {
  switch (variant) {
    case 'bravo':
      return {
        title: "Break Language Barriers & System Silos",
        subtitle: "No APIs Required - Works with Any EHR System",
        features: [
          {
            icon: MessageSquare,
            title: "AI Agents for Global Care",
            description: "BRAVO's RPA/Agentic technology deploys multilingual AI agents that communicate with patients in their native language.",
            highlight: "65+ Languages Supported",
            color: "purple"
          },
          {
            icon: Database,
            title: "Universal EHR Integration",
            description: "Connect instantly with Epic, Cerner, athenahealth, or any EHR without complex APIs.",
            highlight: "No API Setup Required",
            color: "teal"
          }
        ],
        cta: "Ready to eliminate staffing and language barriers?",
        ctaDescription: "See how BRAVO works with your preferred EHR system and handles multilingual patient interactions."
      };
    case 'crush':
      return {
        title: "Documentation Without the API Headache",
        subtitle: "Works Seamlessly with Epic, Cerner & All Major EHRs",
        features: [
          {
            icon: Zap,
            title: "No API Required",
            description: "CRUSH integrates directly with your existing workflow using advanced RPA technology.",
            highlight: "Zero Technical Setup",
            color: "blue"
          },
          {
            icon: Globe,
            title: "65+ Languages Supported", 
            description: "Document encounters in any language your patients speak - from English to Vietnamese.",
            highlight: "All Languages Included",
            color: "teal"
          }
        ],
        cta: "Ready to eliminate documentation burden?",
        ctaDescription: "Join providers using CRUSH with Epic, Cerner, athenahealth, and other major EHR systems."
      };
    default:
      return {
        title: "Before You Leave - See What Makes S10.AI Different",
        subtitle: "No APIs Required - Works with Epic, Cerner & All EHRs",
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
            title: "65+ Languages Supported",
            description: "Serve patients in their native language - from Spanish and Chinese to Welsh and Vietnamese.",
            highlight: "All Languages Included",
            color: "teal"
          }
        ],
        cta: "Ready to transform your practice?",
        ctaDescription: "Choose any EHR of your choice - S10.AI seamlessly connects with Epic, Cerner, athenahealth, NextGen, and all major systems."
      };
  }
};

// Improved language display component without scrolling
const LanguageShowcase = React.memo(() => {
  const [showAll, setShowAll] = useState(false);
  
  return (
    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-5 border border-blue-200">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-gray-800 flex items-center gap-2">
          <Globe className="w-5 h-5 text-blue-600" />
          65+ Supported Languages
        </h4>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm text-blue-600 font-medium">Most Popular</span>
        </div>
      </div>
      
      {/* Main languages grid - no scrolling */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
        {supportedLanguages.map((lang) => (
          <div
            key={lang}
            className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-200"
          >
            <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700 font-medium text-sm">{lang}</span>
          </div>
        ))}
      </div>
      
      {/* Additional languages preview */}
      {showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-4 animate-in slide-in-from-top duration-300">
          {additionalLanguages.map((lang) => (
            <div
              key={lang}
              className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-200"
            >
              <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 font-medium text-sm">{lang}</span>
            </div>
          ))}
        </div>
      )}
      
      {/* Show more/less button */}
      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 mx-auto text-blue-600 hover:text-blue-800 font-medium transition-colors bg-white px-4 py-2 rounded-full border border-blue-200 hover:border-blue-300 shadow-sm"
        >
          {showAll ? (
            <>
              Show Less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              +{additionalLanguages.length} More Languages <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
});

LanguageShowcase.displayName = 'LanguageShowcase';

// EHR compatibility showcase without scrolling
const EHRShowcase = React.memo(() => {
  const [showAll, setShowAll] = useState(false);
  
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-5 border border-green-200">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-gray-800 flex items-center gap-2">
          <Database className="w-5 h-5 text-green-600" />
          Compatible EHR Systems
        </h4>
        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
          NO API REQUIRED
        </div>
      </div>
      
      {/* Main EHRs grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        {popularEHRs.map((ehr) => (
          <div
            key={ehr}
            className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-100 hover:border-green-200 transition-colors shadow-sm"
          >
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="text-gray-700 font-semibold text-sm">{ehr}</span>
          </div>
        ))}
      </div>
      
      {/* Additional EHRs */}
      {showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4 animate-in slide-in-from-top duration-300">
          {additionalEHRs.map((ehr) => (
            <div
              key={ehr}
              className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-100 hover:border-green-200 transition-colors shadow-sm"
            >
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 font-semibold text-sm">{ehr}</span>
            </div>
          ))}
        </div>
      )}
      
      {/* Show more button and universal compatibility message */}
      <div className="space-y-3">
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 mx-auto text-green-600 hover:text-green-800 font-medium transition-colors bg-white px-4 py-2 rounded-full border border-green-200 hover:border-green-300 shadow-sm"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                +{additionalEHRs.length} More Systems <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
        
        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded-lg border border-green-200">
          <p className="text-center text-green-700 font-bold text-sm">
            + Works with ANY EHR system of your choice
          </p>
          <p className="text-center text-green-600 text-xs mt-1">
            Seamlessly connects without API setup
          </p>
        </div>
      </div>
    </div>
  );
});

EHRShowcase.displayName = 'EHRShowcase';

export const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({
  isOpen,
  onClose,
  onBookDemo,
  variant = 'general'
}) => {
  const [activeTab, setActiveTab] = useState<'languages' | 'ehr'>('languages');
  
  const content = useMemo(() => getVariantContent(variant), [variant]);

  const handleQuickTour = () => {
    onClose();
    window.open('/#watch-demo', '_self');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="w-[95vw] max-w-sm sm:max-w-lg lg:max-w-2xl xl:max-w-4xl h-[90vh] sm:h-[85vh] max-h-[800px] p-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 border-0 shadow-2xl overflow-hidden mx-auto flex flex-col rounded-xl"
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
          {/* Header with better close button positioning */}
          <div className="bg-gradient-to-r from-[#143151] via-[#387E89] to-[#143151] text-white p-4 sm:p-6 text-center relative overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-black/10"></div>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-20 p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-200 hover:scale-110"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="relative z-10 pr-16">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 leading-tight">{content.title}</h2>
              <p className="text-blue-100 text-sm sm:text-base font-medium">{content.subtitle}</p>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 min-h-0">
            {/* Key features */}
            <div className="grid gap-4 lg:grid-cols-2">
              {content.features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 bg-${feature.color}-100 rounded-xl shadow-sm flex-shrink-0`}>
                      <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-base lg:text-lg text-gray-800">{feature.title}</h3>
                        <span className={`px-2 py-1 bg-${feature.color}-100 text-${feature.color}-700 text-xs font-medium rounded-full`}>
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive showcase tabs */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-lg">
              <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
                <button
                  onClick={() => setActiveTab('languages')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'languages' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Globe className="w-4 h-4 inline mr-2" />
                  65+ Languages
                </button>
                <button
                  onClick={() => setActiveTab('ehr')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === 'ehr' 
                      ? 'bg-white text-green-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Database className="w-4 h-4 inline mr-2" />
                  EHR Systems
                </button>
              </div>
              
              {activeTab === 'languages' ? <LanguageShowcase /> : <EHRShowcase />}
            </div>

            {/* Value proposition */}
            <div className="text-center bg-gradient-to-r from-blue-50 via-white to-teal-50 rounded-xl p-5 border border-blue-200">
              <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-3">
                {content.cta}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                {content.ctaDescription}
              </p>
            </div>
          </div>

          {/* Fixed bottom actions */}
          <div className="flex-shrink-0 bg-white border-t border-gray-200 p-4 sm:p-5">
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <Button
                onClick={onBookDemo}
                size="lg"
                className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-bold py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Demo Now
              </Button>
              
              <Button
                onClick={handleQuickTour}
                variant="outline"
                size="lg"
                className="w-full py-4 rounded-full border-2 border-gray-300 hover:bg-gray-50 font-semibold text-gray-700 hover:border-gray-400 transition-all duration-300"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Quick Tour
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
