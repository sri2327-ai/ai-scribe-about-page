
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

  const TimeSlotButton = ({ time }: { time: string }) => (
    <button
      type="button"
      onClick={() => handleTimeSelect(time)}
      className={`w-full h-10 flex items-center justify-center p-2 text-sm transition-all duration-200 rounded-lg border-2 font-medium hover:scale-105 ${
        selectedTime === time 
          ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg transform scale-105' 
          : 'bg-white hover:bg-[#387E89]/10 hover:border-[#387E89] hover:text-[#387E89] border-gray-200 text-gray-700 shadow-sm'
      }`}
    >
      <div className="flex items-center gap-1">
        <Clock className="h-3 w-3" />
        <span className="font-semibold">{time}</span>
        {selectedTime === time && (
          <Check className="h-3 w-3 ml-1" />
        )}
      </div>
    </button>
  );

  return (
    <div className="h-full flex flex-col max-h-[400px]">
      {/* Compact Header */}
      <div className="text-center p-2 pb-3 flex-shrink-0">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-2">
          <Clock className="w-6 h-6 text-[#387E89]" />
        </div>
        <h3 className="text-lg font-bold text-[#133255] mb-1">Pick Your Time</h3>
        <p className="text-sm text-gray-600">
          {selectedDate && `Available slots for ${format(selectedDate, "EEEE, MMM do")}`}
        </p>
      </div>

      {/* Time slots grid with proper scrolling */}
      <div className="flex-1 min-h-0 overflow-hidden px-2">
        <ScrollArea className="h-full w-full">
          <div className="pr-2">
            {/* Responsive grid for desktop/tablet */}
            <div className="grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
              {timeSlots.map((time) => (
                <TimeSlotButton key={time} time={time} />
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
        
      {/* Selected time confirmation */}
      {selectedTime && (
        <div className="mt-2 text-center p-2 bg-green-50 rounded-lg border border-green-200 flex-shrink-0">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Check className="h-4 w-4 text-green-600" />
            <p className="text-xs font-medium text-green-700">Selected Time</p>
          </div>
          <p className="text-sm font-bold text-green-800">{selectedTime}</p>
          <p className="text-xs text-green-600 mt-1">
            {selectedDate && format(selectedDate, "EEEE, MMMM do, yyyy")}
          </p>
        </div>
      )}
    </div>
  );
};

export default TimeStep;
