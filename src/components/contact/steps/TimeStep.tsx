
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

  // Split time slots into AM and PM for better organization
  const amSlots = timeSlots.filter(slot => slot.includes('AM'));
  const pmSlots = timeSlots.filter(slot => slot.includes('PM'));

  const TimeSlotButton = ({ time }: { time: string }) => (
    <button
      type="button"
      onClick={() => handleTimeSelect(time)}
      className={`w-full h-12 md:h-14 flex items-center justify-center p-3 text-sm md:text-base transition-all duration-200 rounded-xl border-2 font-medium hover:scale-105 ${
        selectedTime === time 
          ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg transform scale-105' 
          : 'bg-white hover:bg-[#387E89]/10 hover:border-[#387E89] hover:text-[#387E89] border-gray-200 text-gray-700 shadow-sm'
      }`}
    >
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4" />
        <span className="font-semibold">{time}</span>
        {selectedTime === time && (
          <Check className="h-4 w-4 ml-1" />
        )}
      </div>
    </button>
  );

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="text-center p-4 md:p-6 flex-shrink-0">
        <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-orange-100 rounded-full mb-4">
          <Clock className="w-7 h-7 md:w-8 md:h-8 text-[#387E89]" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[#133255] mb-2">Pick Your Time</h3>
        <p className="text-sm md:text-base text-gray-600">
          {selectedDate && `Available slots for ${format(selectedDate, "EEEE, MMM do")}`}
        </p>
      </div>

      {/* Time slots grid */}
      <div className="flex-1 px-4 md:px-6 pb-4 md:pb-6 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <div className="space-y-6 pr-2">
            {/* Morning slots */}
            {amSlots.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-xs">🌅</span>
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-[#133255]">Morning</h4>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {amSlots.map((time) => (
                    <TimeSlotButton key={time} time={time} />
                  ))}
                </div>
              </div>
            )}

            {/* Afternoon/Evening slots */}
            {pmSlots.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xs">🌆</span>
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-[#133255]">Afternoon & Evening</h4>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {pmSlots.map((time) => (
                    <TimeSlotButton key={time} time={time} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        {/* Selected time confirmation */}
        {selectedTime && (
          <div className="mt-4 text-center p-4 bg-green-50 rounded-xl border-2 border-green-200 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Check className="h-5 w-5 text-green-600" />
              <p className="text-sm font-medium text-green-700">Selected Time</p>
            </div>
            <p className="text-lg font-bold text-green-800">{selectedTime}</p>
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
