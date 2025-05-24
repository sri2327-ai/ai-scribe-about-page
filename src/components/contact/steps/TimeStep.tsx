
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
      className={`w-full h-12 xs:h-10 sm:h-8 flex items-center justify-center p-2 text-xs xs:text-sm sm:text-xs transition-all duration-200 rounded-lg border-2 font-medium hover:scale-105 ${
        selectedTime === time 
          ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg transform scale-105' 
          : 'bg-white hover:bg-[#387E89]/10 hover:border-[#387E89] hover:text-[#387E89] border-gray-200 text-gray-700 shadow-sm'
      }`}
    >
      <div className="flex items-center gap-1">
        <Clock className="h-2.5 w-2.5 xs:h-3 xs:w-3" />
        <span className="font-semibold text-xs xs:text-sm sm:text-xs">{time}</span>
        {selectedTime === time && (
          <Check className="h-2.5 w-2.5 xs:h-3 xs:w-3 ml-1" />
        )}
      </div>
    </button>
  );

  return (
    <div className="h-full flex flex-col">
      {/* Compact Header */}
      <div className="text-center p-3 pb-2 flex-shrink-0">
        <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mb-2">
          <Clock className="w-5 h-5 text-[#387E89]" />
        </div>
        <h3 className="text-base font-bold text-[#133255] mb-1">Pick Your Time</h3>
        <p className="text-xs text-gray-600">
          {selectedDate && `Available slots for ${format(selectedDate, "EEEE, MMM do")}`}
        </p>
      </div>

      {/* Time slots grid with improved mobile responsiveness */}
      <div className="flex-1 min-h-0 overflow-hidden px-2 xs:px-3">
        <ScrollArea className="h-full w-full">
          <div className="pr-1 xs:pr-2">
            {/* Extra responsive grid: 2 columns on very small screens, 3 on small tablets, 4 on larger screens */}
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 xs:gap-2 sm:gap-2">
              {timeSlots.map((time) => (
                <TimeSlotButton key={time} time={time} />
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
        
      {/* Selected time confirmation */}
      {selectedTime && (
        <div className="mt-2 mx-2 xs:mx-3 mb-2 text-center p-2 bg-green-50 rounded-lg border border-green-200 flex-shrink-0">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Check className="h-3 w-3 text-green-600" />
            <p className="text-xs font-medium text-green-700">Selected Time</p>
          </div>
          <p className="text-xs font-bold text-green-800">{selectedTime}</p>
          <p className="text-xs text-green-600 mt-1">
            {selectedDate && format(selectedDate, "EEEE, MMMM do, yyyy")}
          </p>
        </div>
      )}
    </div>
  );
};

export default TimeStep;
