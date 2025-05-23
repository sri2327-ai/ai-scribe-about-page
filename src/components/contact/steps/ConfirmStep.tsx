
import React from 'react';
import { CheckCircle2, Calendar, Clock, Globe, User, Mail, Phone } from "lucide-react";
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
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-center p-6 flex-shrink-0">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-[#133255] mb-2">Confirm Demo</h2>
        <p className="text-gray-600 text-sm leading-relaxed">Review your selection and we'll send you a calendar invite</p>
      </div>

      {/* Confirmation Details */}
      <div className="flex-1 px-4 pb-6 overflow-y-auto">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 space-y-4">
          <h3 className="text-lg font-bold text-[#133255] text-center mb-6">Your Demo Details</h3>
          
          {/* Date */}
          <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Calendar className="h-5 w-5 text-[#387E89]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-blue-700">Date</p>
              <p className="text-lg font-bold text-[#133255] break-words">
                {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}
              </p>
            </div>
          </div>
          
          {/* Time */}
          <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <Clock className="h-5 w-5 text-[#387E89]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-orange-700">Time</p>
              <p className="text-lg font-bold text-[#133255]">{selectedTime}</p>
            </div>
          </div>
          
          {/* Timezone */}
          <div className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl border border-green-100">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Globe className="h-5 w-5 text-[#387E89]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-green-700">Timezone</p>
              <p className="text-lg font-bold text-[#133255] break-words">{formatTimezoneName(timeZone)}</p>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100">
          <h4 className="text-lg font-bold text-[#133255] mb-4 text-center">What to Expect</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Calendar invite</span> sent to your email immediately
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Personalized demo</span> of Bravo & Crush AI features
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Q&A session</span> with our AI experts
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 bg-gray-50 rounded-2xl p-4">
          <p className="text-center text-xs text-gray-600 leading-relaxed">
            <span className="font-semibold">Need to reschedule?</span> Contact us at{' '}
            <a href="mailto:support@s10.ai" className="text-[#387E89] font-medium underline">
              support@s10.ai
            </a>{' '}
            or{' '}
            <a href="tel:+16314886390" className="text-[#387E89] font-medium underline">
              +1 631 488 6390
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmStep;
