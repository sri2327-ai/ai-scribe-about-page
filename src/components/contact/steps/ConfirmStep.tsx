
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
    <div className="p-6 space-y-6 h-full flex flex-col justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-[#133255] mb-2">Confirm Your Demo</h3>
        <p className="text-gray-600">Please review your selection</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4 max-w-sm mx-auto w-full">
        <div className="flex items-center gap-4 py-3 border-b border-gray-100">
          <Calendar className="h-5 w-5 text-[#387E89]" />
          <div className="flex-1">
            <span className="text-sm text-gray-600">Date</span>
            <div className="font-medium text-[#133255]">
              {selectedDate && format(selectedDate, "MM/dd/yyyy")}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 py-3 border-b border-gray-100">
          <Globe className="h-5 w-5 text-[#387E89]" />
          <div className="flex-1">
            <span className="text-sm text-gray-600">Timezone</span>
            <div className="font-medium text-[#133255]">{formatTimezoneName(timeZone)}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 py-3">
          <Clock className="h-5 w-5 text-[#387E89]" />
          <div className="flex-1">
            <span className="text-sm text-gray-600">Time</span>
            <div className="font-medium text-[#133255]">{selectedTime}</div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-4 max-w-sm mx-auto w-full">
        <p className="text-sm text-blue-800 text-center">
          🎯 You'll receive a calendar invite and reminder email before your demo
        </p>
      </div>
    </div>
  );
};

export default ConfirmStep;
