
import React from 'react';
import { CheckCircle2, Calendar, Clock, Globe } from "lucide-react";
import { format } from "date-fns";

interface ConfirmStepProps {
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
  timeZone: string;
}

const ConfirmStep = ({ selectedDate, selectedTime, timeZone }: ConfirmStepProps) => {
  const formatTimezoneName = (zone: string) => {
    return zone.replace(/_/g, ' ').replace('America/', '').replace('Europe/', '').replace('Asia/', '').replace('Australia/', '').replace('Pacific/', '');
  };

  return (
    <div className="h-full flex flex-col justify-center p-4">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-[#133255] mb-1">Confirm Your Demo</h3>
        <p className="text-sm text-gray-600">Please review your selection</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-3 max-w-sm mx-auto w-full">
        <div className="flex items-center gap-3 py-2 border-b border-gray-100">
          <Calendar className="h-4 w-4 text-[#387E89]" />
          <div className="flex-1">
            <span className="text-xs text-gray-600">Date</span>
            <div className="font-medium text-sm text-[#133255]">
              {selectedDate && format(selectedDate, "MM/dd/yyyy")}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 py-2 border-b border-gray-100">
          <Globe className="h-4 w-4 text-[#387E89]" />
          <div className="flex-1">
            <span className="text-xs text-gray-600">Timezone</span>
            <div className="font-medium text-sm text-[#133255]">{formatTimezoneName(timeZone)}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 py-2">
          <Clock className="h-4 w-4 text-[#387E89]" />
          <div className="flex-1">
            <span className="text-xs text-gray-600">Time</span>
            <div className="font-medium text-sm text-[#133255]">{selectedTime}</div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-3 max-w-sm mx-auto w-full mt-4">
        <p className="text-xs text-blue-800 text-center">
          🎯 You'll receive a calendar invite and reminder email before your demo
        </p>
      </div>
    </div>
  );
};

export default ConfirmStep;
