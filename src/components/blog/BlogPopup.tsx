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
        className="max-w-2xl w-full mx-4 p-0 bg-white border-0 shadow-2xl"
        hideCloseButton
      >
        <div className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-lg overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          {/* Content */}
          <div className="px-8 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Save Hours in Documentation
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto leading-relaxed">
              If you're a healthcare professional who's tired of spending time on paperwork, the answer might just lie in this{" "}
              <span className="font-semibold text-primary">FREE</span> assessment!
            </p>

            {/* CTA Section */}
            <div className="max-w-md mx-auto">
              <Button
                onClick={handleStartAssessment}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Assessment
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                No credit card required • Takes 2 minutes
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-orange-200/30 to-transparent rounded-full translate-x-20 translate-y-20"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};