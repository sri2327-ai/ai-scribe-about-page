
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
      className={`w-full h-10 md:h-12 lg:h-14 flex items-center justify-center p-2 md:p-3 text-xs md:text-sm lg:text-base transition-all duration-200 rounded-lg md:rounded-xl border-2 font-medium hover:scale-105 ${
        selectedTime === time 
          ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg transform scale-105' 
          : 'bg-white hover:bg-[#387E89]/10 hover:border-[#387E89] hover:text-[#387E89] border-gray-200 text-gray-700 shadow-sm'
      }`}
    >
      <div className="flex items-center gap-1 md:gap-2">
        <Clock className="h-3 w-3 md:h-4 md:w-4" />
        <span className="font-semibold">{time}</span>
        {selectedTime === time && (
          <Check className="h-3 w-3 md:h-4 md:w-4 ml-1" />
        )}
      </div>
    </button>
  );

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="text-center p-3 md:p-6 flex-shrink-0">
        <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full mb-3 md:mb-4">
          <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#387E89]" />
        </div>
        <h3 className="text-lg md:text-2xl font-bold text-[#133255] mb-2">Pick Your Time</h3>
        <p className="text-xs md:text-base text-gray-600">
          {selectedDate && `Available slots for ${format(selectedDate, "EEEE, MMM do")}`}
        </p>
      </div>

      {/* Time slots grid */}
      <div className="flex-1 px-3 md:px-6 pb-3 md:pb-6 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <div className="pr-1 md:pr-2">
            {/* All time slots in one responsive grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3">
              {timeSlots.map((time) => (
                <TimeSlotButton key={time} time={time} />
              ))}
            </div>
          </div>
        </ScrollArea>
        
        {/* Selected time confirmation */}
        {selectedTime && (
          <div className="mt-3 md:mt-4 text-center p-3 md:p-4 bg-green-50 rounded-xl border-2 border-green-200 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
              <p className="text-xs md:text-sm font-medium text-green-700">Selected Time</p>
            </div>
            <p className="text-sm md:text-lg font-bold text-green-800">{selectedTime}</p>
            <p className="text-xs text-green-600 mt-1">
              {selectedDate && format(selectedDate, "EEEE, MMMM do, yyyy")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeStep;
