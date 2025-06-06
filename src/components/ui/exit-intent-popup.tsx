
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Globe, Zap, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDemo: () => void;
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

export const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({
  isOpen,
  onClose,
  onBookDemo
}) => {
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-2xl p-0 bg-gradient-to-br from-white via-blue-50 to-teal-50 border-2 border-blue-200 shadow-2xl overflow-hidden"
        hideCloseButton={true}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white p-6 text-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-2">Wait! Before You Leave...</h2>
              <p className="text-blue-100">Tired of other AI scribes requiring complex API integrations?</p>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="p-6 space-y-6">
            {/* Key benefits */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-4"
            >
              <div className="bg-white rounded-lg p-4 shadow-md border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">No API Required</h3>
                </div>
                <p className="text-sm text-gray-600">
                  S10.AI uses RPM/Agentic technology that works seamlessly without complex API integrations. 
                  Just plug and play with your existing workflow.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <Globe className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">65+ Languages</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  From English to Welsh, Arabic to Vietnamese - we support your global practice needs.
                </p>
                <button
                  onClick={() => setShowLanguages(!showLanguages)}
                  className="text-xs text-blue-600 hover:text-blue-800 underline"
                >
                  {showLanguages ? 'Hide' : 'View all'} supported languages
                </button>
              </div>
            </motion.div>

            {/* Language list */}
            {showLanguages && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-gray-50 rounded-lg p-4 max-h-40 overflow-y-auto"
              >
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-xs">
                  {supportedLanguages.map((lang, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-gray-700">{lang}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Value proposition */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Ready to Transform Your Practice?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Join thousands of healthcare providers who've eliminated documentation burden 
                without the hassle of API integrations or language barriers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={onBookDemo}
                  size="lg"
                  className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Your Demo Now
                </Button>
                
                <Button
                  onClick={onClose}
                  variant="outline"
                  size="lg"
                  className="px-6 py-3 rounded-full border-gray-300 hover:bg-gray-50"
                >
                  Maybe Later
                </Button>
              </div>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-xs text-gray-500"
            >
              <p>✓ HIPAA Compliant  ✓ SOC 2 Certified  ✓ 99.9% Uptime  ✓ 24/7 Support</p>
            </motion.div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
