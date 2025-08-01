
import React, { useState, useMemo, useCallback } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Globe, Zap, Calendar, CheckCircle, Users, Shield, Database, MessageSquare, PlayCircle, ChevronDown, ChevronUp } from "lucide-react";

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

const popularEHRs = [
  "Epic", "Cerner", "Allscripts", "athenahealth", "NextGen", "eClinicalWorks"
];

const bravoSoftwareSystems = [
  "Epic EHR", "Cerner EHR", "Salesforce CRM", "RingCentral VOIP", "athenaCollector PMS", "Any Software"
];

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
        title: "Before You Leave - See What Makes S10.AI Different",
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
        cta: "Ready to transform your practice?",
        ctaDescription: "Join providers using S10.AI with Epic, Cerner, athenahealth, NextGen, and all major EHR systems."
      };
  }
};

// Optimized language display component
const LanguageShowcase = React.memo(() => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const displayLanguages = useMemo(() => 
    isExpanded ? supportedLanguages : supportedLanguages.slice(0, 12),
    [isExpanded]
  );
  
  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);
  
  return (
    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-2 sm:p-3 border border-blue-200 relative">
      <div className="flex flex-col xs:flex-row xs:items-center justify-between mb-2 sm:mb-3 gap-1 sm:gap-2">
        <h4 className="font-semibold text-gray-800 text-xs sm:text-sm flex items-center gap-1 sm:gap-1.5 min-w-0">
          <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
          <span className="truncate text-xs sm:text-sm">All 60+ Languages</span>
        </h4>
        <button
          onClick={toggleExpanded}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-xs font-medium transition-colors bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-blue-200 hover:border-blue-300 flex-shrink-0 self-start xs:self-auto"
        >
          <span className="hidden xs:inline text-xs">{isExpanded ? 'Less' : 'All'}</span>
          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-1.5">
        {displayLanguages.map((lang) => (
          <div
            key={lang}
            className="flex items-center gap-1 bg-white p-1 sm:p-1.5 rounded-md border border-gray-100 hover:border-blue-200 transition-all duration-200"
          >
            <CheckCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700 font-medium text-xs truncate">{lang}</span>
          </div>
        ))}
      </div>
      
      {!isExpanded && supportedLanguages.length > 12 && (
        <div className="text-center mt-2">
          <span className="text-xs text-blue-600 font-medium">
            +{supportedLanguages.length - 12} more
          </span>
        </div>
      )}
    </div>
  );
});

LanguageShowcase.displayName = 'LanguageShowcase';

// Enhanced software systems showcase for Bravo
const BravoSoftwareShowcase = React.memo(() => (
  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-2 sm:p-3 border border-green-200">
    <h4 className="font-semibold text-gray-800 text-xs sm:text-sm mb-2 sm:mb-3 flex items-center gap-1 sm:gap-1.5">
      <Database className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
      <span className="truncate text-xs sm:text-sm">Compatible Systems</span>
    </h4>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
      {bravoSoftwareSystems.map((system) => (
        <div
          key={system}
          className="flex items-center gap-1 sm:gap-1.5 bg-white p-1 sm:p-2 rounded-lg border border-gray-100 hover:border-green-200 transition-colors"
        >
          <CheckCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-green-500 flex-shrink-0" />
          <span className="text-gray-700 font-medium text-xs truncate">{system}</span>
        </div>
      ))}
    </div>
    <div className="text-center">
      <span className="text-xs text-green-600 font-medium bg-green-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
        No API Required
      </span>
    </div>
  </div>
));

BravoSoftwareShowcase.displayName = 'BravoSoftwareShowcase';

// EHR compatibility showcase (for non-Bravo variants)
const EHRShowcase = React.memo(() => (
  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-2 sm:p-3 border border-green-200">
    <h4 className="font-semibold text-gray-800 text-xs sm:text-sm mb-2 sm:mb-3 flex items-center gap-1 sm:gap-1.5">
      <Database className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
      <span className="truncate text-xs sm:text-sm">Compatible EHRs</span>
    </h4>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
      {popularEHRs.map((ehr) => (
        <div
          key={ehr}
          className="flex items-center gap-1 sm:gap-1.5 bg-white p-1 sm:p-2 rounded-lg border border-gray-100 hover:border-green-200 transition-colors"
        >
          <CheckCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-green-500 flex-shrink-0" />
          <span className="text-gray-700 font-medium text-xs truncate">{ehr}</span>
        </div>
      ))}
    </div>
    <div className="text-center">
      <span className="text-xs text-green-600 font-medium bg-green-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
        + Any EHR System
      </span>
    </div>
  </div>
));

EHRShowcase.displayName = 'EHRShowcase';

export const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({
  isOpen,
  onClose,
  onBookDemo,
  variant = 'general'
}) => {
  const [activeTab, setActiveTab] = useState<'languages' | 'ehr'>('languages');
  
  const content = useMemo(() => getVariantContent(variant), [variant]);

  const handleQuickTour = useCallback(() => {
    onClose();
    window.open('/#watch-demo', '_self');
  }, [onClose]);

  const handleTabChange = useCallback((tab: 'languages' | 'ehr') => {
    setActiveTab(tab);
  }, []);

  // Choose the right showcase component based on variant
  const SystemsShowcase = useMemo(() => 
    variant === 'bravo' ? BravoSoftwareShowcase : EHRShowcase, 
    [variant]
  );

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
          <div className="flex-1 overflow-y-auto p-2 sm:p-3 lg:p-4 space-y-3 sm:space-y-4 min-h-0">
            {/* Key features */}
            <div className="grid gap-2 sm:gap-3 lg:grid-cols-2">
              {content.features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-2 sm:p-3 lg:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-2 sm:gap-3 mb-2">
                    <div className={`p-1.5 sm:p-2 bg-${feature.color}-100 rounded-xl shadow-sm flex-shrink-0`}>
                      <feature.icon className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-${feature.color}-600`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col gap-1 mb-1 sm:mb-2">
                        <h3 className="font-bold text-xs sm:text-sm lg:text-base text-gray-800 leading-tight">{feature.title}</h3>
                        <span className={`px-1.5 sm:px-2 py-0.5 bg-${feature.color}-100 text-${feature.color}-700 text-xs font-medium rounded-full w-fit`}>
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive showcase tabs */}
            <div className="bg-white rounded-xl p-2 sm:p-3 lg:p-4 border border-gray-200 shadow-lg">
              <div className="flex bg-gray-100 rounded-lg p-1 mb-2 sm:mb-3">
                <button
                  onClick={() => handleTabChange('languages')}
                  className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-md text-xs font-medium transition-all duration-200 ${
                    activeTab === 'languages' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Globe className="w-3 h-3 inline mr-1" />
                  <span className="hidden xs:inline">Languages</span>
                  <span className="xs:hidden">Lang</span>
                </button>
                <button
                  onClick={() => handleTabChange('ehr')}
                  className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-md text-xs font-medium transition-all duration-200 ${
                    activeTab === 'ehr' 
                      ? 'bg-white text-green-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Database className="w-3 h-3 inline mr-1" />
                  <span className="hidden xs:inline">{variant === 'bravo' ? 'Systems' : 'EHRs'}</span>
                  <span className="xs:hidden">{variant === 'bravo' ? 'Sys' : 'EHR'}</span>
                </button>
              </div>
              
              {activeTab === 'languages' ? <LanguageShowcase /> : <SystemsShowcase />}
            </div>

            {/* Value proposition */}
            <div className="text-center bg-gradient-to-r from-blue-50 via-white to-teal-50 rounded-xl p-2 sm:p-3 lg:p-4 border border-blue-200">
              <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-800 mb-1 sm:mb-2">
                {content.cta}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {content.ctaDescription}
              </p>
            </div>
          </div>

          {/* Fixed bottom actions */}
          <div className="flex-shrink-0 bg-white border-t border-gray-200 p-2 sm:p-3 lg:p-4">
            <div className="flex flex-col gap-2 max-w-sm mx-auto">
              <Button
                onClick={onBookDemo}
                size="sm"
                className="w-full bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-bold py-2 sm:py-2.5 lg:py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
              >
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Book Demo
              </Button>
              
              <Button
                onClick={handleQuickTour}
                variant="outline"
                size="sm"
                className="w-full py-2 sm:py-2.5 lg:py-3 rounded-full border-2 border-gray-300 hover:bg-gray-50 font-semibold text-gray-700 hover:border-gray-400 transition-all duration-300 text-xs sm:text-sm"
              >
                <PlayCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Quick Tour
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
