
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Clock, CalendarIcon, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

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
  const [currentStep, setCurrentStep] = useState<'date' | 'time' | 'timezone' | 'confirm'>('date');

  const handleConfirm = () => {
    if (selectedDate && selectedTime && timeZone) {
      onOpenChange(false);
    }
  };

  const handleNextStep = () => {
    if (currentStep === 'date' && selectedDate) {
      setCurrentStep('time');
    } else if (currentStep === 'time' && selectedTime) {
      setCurrentStep('timezone');
    } else if (currentStep === 'timezone' && timeZone) {
      setCurrentStep('confirm');
    }
  };

  const handleBackStep = () => {
    if (currentStep === 'time') {
      setCurrentStep('date');
    } else if (currentStep === 'timezone') {
      setCurrentStep('time');
    } else if (currentStep === 'confirm') {
      setCurrentStep('timezone');
    }
  };

  const getStepNumber = () => {
    switch (currentStep) {
      case 'date': return 1;
      case 'time': return 2;
      case 'timezone': return 3;
      case 'confirm': return 4;
      default: return 1;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 'date': return !!selectedDate;
      case 'time': return !!selectedTime;
      case 'timezone': return !!timeZone;
      default: return false;
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="bottom" 
        className="h-[95vh] bg-gradient-to-b from-white to-gray-50 overflow-hidden p-0"
      >
        {/* Header with Progress */}
        <SheetHeader className="px-6 pt-6 pb-4 bg-white border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <SheetTitle className="text-2xl font-bold text-[#133255]">Schedule Demo</SheetTitle>
            <div className="text-sm text-gray-500">Step {getStepNumber()} of 4</div>
          </div>
          
          {/* Progress Bar */}
          <div className="flex space-x-2">
            {['date', 'time', 'timezone', 'confirm'].map((step, index) => (
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

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {/* Date Selection */}
          {currentStep === 'date' && (
            <div className="p-6 space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <CalendarIcon className="w-8 h-8 text-[#387E89]" />
                </div>
                <h3 className="text-xl font-semibold text-[#133255] mb-2">Choose Your Date</h3>
                <p className="text-gray-600">Select a convenient day for your demo</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="w-full mx-auto"
                  disabled={(date) => 
                    date < new Date() || 
                    date.getDay() === 0 || 
                    date.getDay() === 6
                  }
                />
              </div>
              
              <div className="text-center text-sm text-gray-500">
                * Weekends are not available for demos
              </div>
            </div>
          )}

          {/* Time Selection */}
          {currentStep === 'time' && (
            <div className="p-6 space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <Clock className="w-8 h-8 text-[#387E89]" />
                </div>
                <h3 className="text-xl font-semibold text-[#133255] mb-2">Pick Your Time</h3>
                <p className="text-gray-600">
                  {selectedDate && `${format(selectedDate, "EEEE, MMMM d")}`}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    type="button"
                    variant="outline"
                    size="lg"
                    className={`h-14 flex items-center justify-center gap-3 text-base transition-all duration-200 touch-manipulation ${
                      selectedTime === time 
                        ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg scale-105' 
                        : 'bg-white hover:bg-gray-50 hover:border-[#387E89] hover:text-[#387E89]'
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    <Clock className="h-5 w-5" />
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Timezone Selection */}
          {currentStep === 'timezone' && (
            <div className="p-6 space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-[#387E89]" />
                </div>
                <h3 className="text-xl font-semibold text-[#133255] mb-2">Confirm Timezone</h3>
                <p className="text-gray-600">We've detected your timezone</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <Select value={timeZone} onValueChange={setTimeZone}>
                  <SelectTrigger className="w-full h-14 text-base bg-white border-gray-200">
                    <SelectValue placeholder="Select your timezone" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] overflow-y-auto bg-white z-[999]">
                    {timeZoneOptions.map((tz) => (
                      <SelectItem key={tz} value={tz} className="py-3">
                        {tz}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Confirmation */}
          {currentStep === 'confirm' && (
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
                    {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium text-[#133255]">{selectedTime}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600">Timezone</span>
                  <span className="font-medium text-[#133255]">{timeZone}</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm text-blue-800 text-center">
                  🎯 You'll receive a calendar invite and reminder email before your demo
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="p-6 bg-white border-t border-gray-100 space-y-4">
          {currentStep !== 'confirm' ? (
            <div className="flex gap-3">
              {currentStep !== 'date' && (
                <Button
                  variant="outline"
                  onClick={handleBackStep}
                  className="flex-1 h-12 text-base touch-manipulation"
                >
                  Back
                </Button>
              )}
              <Button
                onClick={handleNextStep}
                disabled={!canProceed()}
                className={`h-12 text-base transition-all duration-200 touch-manipulation ${
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
                className="flex-1 h-12 text-base touch-manipulation"
              >
                Back
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-[2] h-12 text-base bg-green-600 hover:bg-green-700 text-white touch-manipulation"
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
