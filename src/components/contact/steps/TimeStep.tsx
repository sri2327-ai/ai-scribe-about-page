
import React from 'react';
import { Clock } from "lucide-react";
import { format } from "date-fns";

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
    <div className="p-6 space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
          <Clock className="w-8 h-8 text-[#387E89]" />
        </div>
        <h3 className="text-xl font-semibold text-[#133255] mb-2">Pick Your Time</h3>
        <p className="text-gray-600">
          {selectedDate && `${format(selectedDate, "EEEE, MMMM d, yyyy")}`}
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700 text-center mb-4">Available time slots:</p>
        <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto">
          {timeSlots.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => handleTimeSelect(time)}
              className={`w-full h-12 flex items-center justify-center gap-3 text-base transition-all duration-200 rounded-lg border-2 font-medium touch-manipulation ${
                selectedTime === time 
                  ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg transform scale-[1.02]' 
                  : 'bg-white hover:bg-gray-50 hover:border-[#387E89] hover:text-[#387E89] border-gray-200 text-gray-700 active:bg-gray-100'
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Clock className="h-4 w-4" />
              {time}
            </button>
          ))}
        </div>
        
        {selectedTime && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Selected time:</p>
            <p className="text-lg font-medium text-[#387E89]">{selectedTime}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeStep;
