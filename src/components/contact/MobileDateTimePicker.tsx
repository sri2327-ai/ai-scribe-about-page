
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle2, X } from "lucide-react";
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
        className="h-[95vh] bg-gradient-to-b from-white to-gray-50 overflow-hidden p-0 flex flex-col"
      >
        {/* Custom Close Button - positioned to avoid overlap */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-white shadow-sm p-1"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        {/* Header with Progress - adjusted padding to avoid close button */}
        <SheetHeader className="px-4 pt-4 pb-3 pr-12 bg-white border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <SheetTitle className="text-xl font-bold text-[#133255]">Schedule Demo</SheetTitle>
            <div className="text-xs text-gray-500">Step {getStepNumber()} of 4</div>
          </div>
          
          {/* Progress Bar */}
          <div className="flex space-x-2">
            {['date', 'timezone', 'time', 'confirm'].map((step, index) => (
              <div
                key={step}
                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                  getStepNumber() > index + 1 
                    ? 'bg-green-500' 
                    : getStepNumber() === index + 1 
                    ? 'bg-[#387E89]' 
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </SheetHeader>

        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-hidden">
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

        {/* Bottom Navigation */}
        <div className="p-4 bg-white border-t border-gray-100 flex-shrink-0">
          {currentStep !== 'confirm' ? (
            <div className="flex gap-3">
              {currentStep !== 'date' && (
                <Button
                  variant="outline"
                  onClick={handleBackStep}
                  className="flex-1 h-12 text-base"
                >
                  Back
                </Button>
              )}
              <Button
                onClick={handleNextStep}
                disabled={!canProceed()}
                className={`h-12 text-base transition-all duration-200 ${
                  currentStep === 'date' ? 'flex-1' : 'flex-[2]'
                } ${
                  canProceed() 
                    ? 'bg-[#387E89] hover:bg-[#2c6269] text-white' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Continue
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleBackStep}
                className="flex-1 h-12 text-base"
              >
                Back
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-[2] h-12 text-base bg-green-600 hover:bg-green-700 text-white"
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
