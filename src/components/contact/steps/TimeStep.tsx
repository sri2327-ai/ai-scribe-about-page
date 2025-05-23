
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

  // Group time slots by time of day
  const groupTimeSlots = () => {
    const morning = timeSlots.filter(time => {
      const hour = parseInt(time.split(':')[0]);
      return hour < 12;
    });
    
    const afternoon = timeSlots.filter(time => {
      const hour = parseInt(time.split(':')[0]);
      return hour >= 12 && hour < 17;
    });
    
    const evening = timeSlots.filter(time => {
      const hour = parseInt(time.split(':')[0]);
      return hour >= 17;
    });

    return { morning, afternoon, evening };
  };

  const { morning, afternoon, evening } = groupTimeSlots();

  const renderTimeGroup = (title: string, icon: string, times: string[]) => {
    if (times.length === 0) return null;

    return (
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-gray-700 border-b border-gray-100 pb-2 flex items-center gap-2">
          <span>{icon}</span>
          {title}
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {times.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => handleTimeSelect(time)}
              className={`p-4 flex items-center justify-center text-center transition-all duration-300 rounded-2xl border-2 font-semibold ${
                selectedTime === time 
                  ? 'bg-[#387E89] text-white border-[#387E89] shadow-lg transform scale-105' 
                  : 'bg-white hover:bg-gray-50 hover:border-[#387E89] hover:text-[#387E89] border-gray-200 text-gray-700 active:scale-95'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{time}</span>
                {selectedTime === time && (
                  <Check className="h-3 w-3 mt-1" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-center p-6 flex-shrink-0">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl mb-4">
          <Clock className="w-8 h-8 text-[#387E89]" />
        </div>
        <h2 className="text-2xl font-bold text-[#133255] mb-2">Pick Your Time</h2>
        {selectedDate && (
          <div className="bg-blue-50 rounded-xl px-4 py-2 inline-block">
            <p className="text-sm font-medium text-blue-800">
              {format(selectedDate, "EEEE, MMMM d, yyyy")}
            </p>
          </div>
        )}
      </div>

      {/* Time Slots */}
      <div className="flex-1 px-4 pb-6 overflow-hidden">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 h-full">
          <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">Available time slots</h3>
          
          <ScrollArea className="h-full w-full">
            <div className="space-y-6 pr-2">
              {renderTimeGroup("Morning", "🌅", morning)}
              {renderTimeGroup("Afternoon", "☀️", afternoon)}
              {renderTimeGroup("Evening", "🌆", evening)}
              
              {timeSlots.length === 0 && (
                <div className="text-center py-8">
                  <Clock className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm">No time slots available for this date</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
        
        {/* Selected Time Display */}
        {selectedTime && (
          <div className="mt-4 text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
            <p className="text-xs font-medium text-blue-700 mb-1">Selected time</p>
            <p className="text-lg font-bold text-blue-800">{selectedTime}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeStep;
