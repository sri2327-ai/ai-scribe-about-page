
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
    <div className="p-6 space-y-6 h-full flex flex-col">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
          <Clock className="w-8 h-8 text-[#387E89]" />
        </div>
        <h3 className="text-xl font-semibold text-[#133255] mb-2">Pick Your Time</h3>
        <p className="text-gray-600">
          {selectedDate && `${format(selectedDate, "MM/dd/yyyy")}`}
        </p>
      </div>

      <div className="flex-1 space-y-4">
        <p className="text-sm font-medium text-gray-700 text-center">Available time slots:</p>
        
        <ScrollArea className="h-[400px] w-full">
          <div className="grid grid-cols-1 gap-3 p-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => handleTimeSelect(time)}
                className={`w-full h-14 flex items-center justify-between p-4 text-base transition-all duration-200 rounded-lg border-2 font-medium ${
                  selectedTime === time 
                    ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg transform scale-[1.02]' 
                    : 'bg-white hover:bg-gray-50 hover:border-[#387E89] hover:text-[#387E89] border-gray-200 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5" />
                  <span>{time}</span>
                </div>
                {selectedTime === time && (
                  <Check className="h-5 w-5" />
                )}
              </button>
            ))}
          </div>
        </ScrollArea>
        
        {selectedTime && (
          <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700">Selected time:</p>
            <p className="text-lg font-medium text-blue-800">{selectedTime}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeStep;
