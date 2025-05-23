
import React from 'react';
import { CheckCircle2 } from "lucide-react";
import { format } from "date-fns";

interface ConfirmStepProps {
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
  timeZone: string;
}

const ConfirmStep = ({ selectedDate, selectedTime, timeZone }: ConfirmStepProps) => {
  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-[#133255] mb-2">Confirm Your Demo</h3>
        <p className="text-gray-600">Please review your selection</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <span className="text-gray-600">Date</span>
          <span className="font-medium text-[#133255]">
            {selectedDate && format(selectedDate, "MM/dd/yyyy")}
          </span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <span className="text-gray-600">Timezone</span>
          <span className="font-medium text-[#133255]">{timeZone}</span>
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="text-gray-600">Time</span>
          <span className="font-medium text-[#133255]">{selectedTime}</span>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-4">
        <p className="text-sm text-blue-800 text-center">
          🎯 You'll receive a calendar invite and reminder email before your demo
        </p>
      </div>
    </div>
  );
};

export default ConfirmStep;
