
import React from 'react';
import { Clock, Check } from "lucide-react";
import { format } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TimeStepProps {
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
  setSelectedTime: (time: string | undefined) => void;
  timeSlots: string[];
}

const TimeStep = ({ selectedDate, selectedTime, setSelectedTime, timeSlots }: TimeStepProps) => {
  const handleTimeSelect = (time: string) => {
    console.log('Time selected:', time);
    setSelectedTime(time);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="text-center p-4 flex-shrink-0">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-3">
          <Clock className="w-6 h-6 text-[#387E89]" />
        </div>
        <h3 className="text-lg font-semibold text-[#133255] mb-1">Pick Your Time</h3>
        <p className="text-sm text-gray-600">
          {selectedDate && `${format(selectedDate, "MM/dd/yyyy")}`}
        </p>
      </div>

      {/* Scrollable time slots */}
      <div className="flex-1 px-4 pb-4 overflow-hidden">
        <p className="text-xs font-medium text-gray-700 text-center mb-3">Available time slots:</p>
        
        <ScrollArea className="h-full w-full">
          <div className="grid grid-cols-1 gap-3 pr-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => handleTimeSelect(time)}
                className={`w-full h-12 flex items-center justify-between p-3 text-sm transition-all duration-200 rounded-lg border-2 font-medium ${
                  selectedTime === time 
                    ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg' 
                    : 'bg-white hover:bg-gray-50 hover:border-[#387E89] hover:text-[#387E89] border-gray-200 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4" />
                  <span>{time}</span>
                </div>
                {selectedTime === time && (
                  <Check className="h-4 w-4" />
                )}
              </button>
            ))}
          </div>
        </ScrollArea>
        
        {selectedTime && (
          <div className="mt-3 text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-blue-700">Selected time:</p>
            <p className="text-sm font-medium text-blue-800">{selectedTime}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeStep;
