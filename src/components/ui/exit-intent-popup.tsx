
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Globe, Zap, Calendar, CheckCircle, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";

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
        title: "Transform Your Front Office with AI Agents",
        subtitle: "Tired of staffing shortages? Let BRAVO's AI agents handle patient calls 24/7.",
        features: [
          {
            icon: Users,
            title: "AI-Powered Staffing",
            description: "BRAVO's RPA/Agentic technology deploys intelligent agents that handle patient interactions, scheduling, and follow-ups without human intervention.",
            color: "purple"
          },
          {
            icon: Globe,
            title: "65+ Languages Supported",
            description: "From English to Welsh, Arabic to Vietnamese - BRAVO speaks your patients' language for truly global healthcare delivery.",
            color: "teal"
          }
        ],
        cta: "Ready to solve your staffing crisis?",
        ctaDescription: "See how BRAVO's AI agents can replace multiple staff positions while improving patient satisfaction and reducing operational costs."
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

export const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({
  isOpen,
  onClose,
  onBookDemo,
  variant = 'general'
}) => {
  const [showLanguages, setShowLanguages] = useState(false);
  const content = getVariantContent(variant);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-3xl p-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 border-2 border-blue-300 shadow-2xl overflow-hidden"
        hideCloseButton={true}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-200 hover:scale-110"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>

          {/* Header */}
          <div className="bg-gradient-to-r from-[#143151] via-[#387E89] to-[#143151] text-white p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative z-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{content.title}</h2>
              <p className="text-blue-100 text-lg md:text-xl font-medium">{content.subtitle}</p>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="p-8 space-y-8 relative z-10">
            {/* Key benefits */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {content.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 bg-${feature.color}-100 rounded-xl shadow-sm`}>
                      <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                  {feature.title.includes('Languages') && (
                    <button
                      onClick={() => setShowLanguages(!showLanguages)}
                      className="text-sm text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                    >
                      {showLanguages ? 'Hide' : 'View all'} supported languages →
                    </button>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Language list */}
            {showLanguages && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 max-h-48 overflow-y-auto border border-gray-200"
              >
                <h4 className="font-semibold text-gray-800 mb-4 text-center">All Supported Languages</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
                  {supportedLanguages.map((lang, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.01, duration: 0.2 }}
                      className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{lang}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Value proposition */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center bg-gradient-to-r from-blue-50 via-white to-teal-50 rounded-xl p-8 border border-blue-200"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                {content.cta}
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
                {content.ctaDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={onBookDemo}
                  size="lg"
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-bold px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Book Your Demo Now
                </Button>
                
                <Button
                  onClick={onClose}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 rounded-full border-2 border-gray-300 hover:bg-gray-50 font-semibold text-gray-700 hover:border-gray-400 transition-all duration-300"
                >
                  Maybe Later
                </Button>
              </div>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600 bg-white/80 rounded-full px-6 py-3 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">HITRUST Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="font-medium">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
