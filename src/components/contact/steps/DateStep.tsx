
import React from 'react';
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { format, addDays, startOfToday, isSameDay, isWeekend } from "date-fns";

interface DateStepProps {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
}

const DateStep = ({ selectedDate, setSelectedDate }: DateStepProps) => {
  const today = startOfToday();
  
  // Generate next 14 available days (excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    let currentDate = today;
    let daysAdded = 0;
    
    while (daysAdded < 14) {
      if (!isWeekend(currentDate)) {
        dates.push(new Date(currentDate));
        daysAdded++;
      }
      currentDate = addDays(currentDate, 1);
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleDateSelect = (date: Date) => {
    console.log('Date selected:', date);
    setSelectedDate(date);
  };

  const formatDateDisplay = (date: Date) => {
    const isToday = isSameDay(date, today);
    const isTomorrow = isSameDay(date, addDays(today, 1));
    
    if (isToday) return 'Today';
    if (isTomorrow) return 'Tomorrow';
    return format(date, 'MMM d');
  };

  const formatDayName = (date: Date) => {
    return format(date, 'EEE');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-center p-6 flex-shrink-0">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl mb-4">
          <CalendarIcon className="w-8 h-8 text-[#387E89]" />
        </div>
        <h2 className="text-2xl font-bold text-[#133255] mb-2">Choose Your Date</h2>
        <p className="text-gray-600 text-sm leading-relaxed">Select a convenient day for your personalized demo</p>
      </div>

      {/* Date Selection Grid */}
      <div className="flex-1 px-4 pb-6 overflow-hidden">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 h-full">
          <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">Available dates</h3>
          
          <div className="h-full overflow-y-auto">
            <div className="grid grid-cols-2 gap-3 pb-4">
              {availableDates.map((date) => {
                const isSelected = selectedDate && isSameDay(date, selectedDate);
                
                return (
                  <button
                    key={date.toISOString()}
                    type="button"
                    onClick={() => handleDateSelect(date)}
                    className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                      isSelected
                        ? 'bg-[#387E89] border-[#387E89] text-white shadow-lg transform scale-105'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-[#387E89] hover:bg-gray-50 active:scale-95'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <span className={`text-xs font-medium ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                        {formatDayName(date)}
                      </span>
                      <span className={`text-lg font-bold ${isSelected ? 'text-white' : 'text-[#133255]'}`}>
                        {formatDateDisplay(date)}
                      </span>
                      <span className={`text-xs ${isSelected ? 'text-blue-100' : 'text-gray-400'}`}>
                        {format(date, 'yyyy')}
                      </span>
                    </div>
                    
                    {isSelected && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Date Display */}
        {selectedDate && (
          <div className="mt-4 text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
            <p className="text-xs font-medium text-green-700 mb-1">Selected date</p>
            <p className="text-lg font-bold text-green-800">
              {format(selectedDate, "EEEE, MMMM d, yyyy")}
            </p>
          </div>
        )}

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
            💡 Weekends are not available for demos
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateStep;
