import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface BlogPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlogPopup: React.FC<BlogPopupProps> = ({ isOpen, onClose }) => {
  const handleStartAssessment = () => {
    // Add your assessment logic here
    window.open('https://calendly.com/s10-ai/demo', '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-3xl w-full mx-3 sm:mx-4 p-0 bg-white border-0 shadow-2xl rounded-2xl"
        hideCloseButton
      >
        <div className="relative bg-gradient-to-br from-white via-slate-50 to-blue-50/30 rounded-2xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 backdrop-blur-sm"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>

          {/* Content */}
          <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-14 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
                Save Hours in Documentation
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 mx-auto leading-relaxed max-w-lg">
                If you're a healthcare professional who's tired of spending time on paperwork, the answer might just lie in this{" "}
                <span className="font-bold text-[#387E89]">FREE</span> assessment!
              </p>

              {/* CTA Section */}
              <div className="max-w-sm mx-auto space-y-4">
                <Button
                  onClick={handleStartAssessment}
                  className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2a5f68] text-white border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:ring-4 focus:ring-[#387E89]/20 focus:outline-none"
                >
                  <span className="flex items-center justify-center gap-2">
                    Start Your Free Assessment
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
                
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No credit card required
                  </span>
                  {" • "}
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Takes 2 minutes
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-[#387E89]/20 to-transparent rounded-full blur-xl"></div>
          <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-tl from-[#143151]/15 to-transparent rounded-full blur-lg"></div>
          <div className="absolute top-1/4 right-8 w-2 h-2 bg-[#387E89]/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-12 w-1 h-1 bg-[#143151]/40 rounded-full animate-pulse delay-700"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};