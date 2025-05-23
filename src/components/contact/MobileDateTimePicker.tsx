
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, CheckCircle2, X } from "lucide-react";
import DateStep from './steps/DateStep';
import TimezoneStep from './steps/TimezoneStep';
import TimeStep from './steps/TimeStep';
import ConfirmStep from './steps/ConfirmStep';

interface MobileDateTimePickerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedTime: string | undefined;
  setSelectedTime: (time: string | undefined) => void;
  timeZone: string;
  setTimeZone: (zone: string) => void;
  timeSlots: string[];
  timeZoneOptions: string[];
}

const MobileDateTimePicker = ({
  open,
  onOpenChange,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  timeZone,
  setTimeZone,
  timeSlots,
  timeZoneOptions,
}: MobileDateTimePickerProps) => {
  const [currentStep, setCurrentStep] = useState<'date' | 'timezone' | 'time' | 'confirm'>('date');

  const handleConfirm = () => {
    if (selectedDate && selectedTime && timeZone) {
      onOpenChange(false);
    }
  };

  const handleNextStep = () => {
    console.log('Next step clicked, current step:', currentStep);
    console.log('Selected date:', selectedDate);
    console.log('Selected time:', selectedTime);
    console.log('Time zone:', timeZone);

    if (currentStep === 'date' && selectedDate) {
      setCurrentStep('timezone');
    } else if (currentStep === 'timezone' && timeZone && timeZone.length > 0) {
      setCurrentStep('time');
    } else if (currentStep === 'time' && selectedTime) {
      setCurrentStep('confirm');
    }
  };

  const handleBackStep = () => {
    if (currentStep === 'timezone') {
      setCurrentStep('date');
    } else if (currentStep === 'time') {
      setCurrentStep('timezone');
    } else if (currentStep === 'confirm') {
      setCurrentStep('time');
    }
  };

  const getStepNumber = () => {
    switch (currentStep) {
      case 'date': return 1;
      case 'timezone': return 2;
      case 'time': return 3;
      case 'confirm': return 4;
      default: return 1;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 'date': return 'Choose Date';
      case 'timezone': return 'Select Timezone';
      case 'time': return 'Pick Time';
      case 'confirm': return 'Confirm Demo';
      default: return 'Schedule Demo';
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 'date': return !!selectedDate;
      case 'timezone': return !!(timeZone && timeZone.length > 0);
      case 'time': return !!selectedTime;
      default: return false;
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="bottom" 
        className="h-[92vh] sm:h-[90vh] bg-gradient-to-b from-gray-50 to-white overflow-hidden p-0 flex flex-col border-0 rounded-t-3xl"
      >
        {/* Enhanced Header */}
        <SheetHeader className="px-6 pt-6 pb-4 bg-white border-b border-gray-100 flex-shrink-0 rounded-t-3xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenChange(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
              <div>
                <SheetTitle className="text-xl font-bold text-[#133255] text-left">
                  {getStepTitle()}
                </SheetTitle>
                <p className="text-xs text-gray-500 mt-1">Step {getStepNumber()} of 4</p>
              </div>
            </div>
            <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {Math.round((getStepNumber() / 4) * 100)}%
            </div>
          </div>
          
          {/* Enhanced Progress Bar */}
          <div className="flex space-x-2">
            {['date', 'timezone', 'time', 'confirm'].map((step, index) => (
              <div
                key={step}
                className={`flex-1 h-3 rounded-full transition-all duration-500 ${
                  getStepNumber() > index + 1 
                    ? 'bg-gradient-to-r from-green-400 to-green-500' 
                    : getStepNumber() === index + 1 
                    ? 'bg-gradient-to-r from-[#387E89] to-[#2c6269]' 
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </SheetHeader>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          {currentStep === 'date' && (
            <DateStep 
              selectedDate={selectedDate} 
              setSelectedDate={setSelectedDate} 
            />
          )}

          {currentStep === 'timezone' && (
            <TimezoneStep 
              timeZone={timeZone} 
              setTimeZone={setTimeZone} 
              timeZoneOptions={timeZoneOptions} 
            />
          )}

          {currentStep === 'time' && (
            <TimeStep 
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              timeSlots={timeSlots}
            />
          )}

          {currentStep === 'confirm' && (
            <ConfirmStep 
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              timeZone={timeZone}
            />
          )}
        </div>

        {/* Enhanced Bottom Navigation */}
        <div className="p-6 bg-white border-t border-gray-100 flex-shrink-0">
          {currentStep !== 'confirm' ? (
            <div className="flex gap-4">
              {currentStep !== 'date' && (
                <Button
                  variant="outline"
                  onClick={handleBackStep}
                  className="flex-1 h-14 text-base font-semibold border-2 rounded-2xl hover:bg-gray-50 transition-all duration-200"
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  Back
                </Button>
              )}
              <Button
                onClick={handleNextStep}
                disabled={!canProceed()}
                className={`h-14 text-base font-semibold rounded-2xl transition-all duration-300 ${
                  currentStep === 'date' ? 'flex-1' : 'flex-[2]'
                } ${
                  canProceed() 
                    ? 'bg-gradient-to-r from-[#387E89] to-[#2c6269] hover:from-[#2c6269] hover:to-[#1e4a52] text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                }`}
              >
                Continue
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={handleBackStep}
                className="flex-1 h-14 text-base font-semibold border-2 rounded-2xl hover:bg-gray-50 transition-all duration-200"
              >
                <ChevronLeft className="mr-2 h-5 w-5" />
                Back
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-[2] h-14 text-base font-semibold bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Confirm Demo
                <CheckCircle2 className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileDateTimePicker;
