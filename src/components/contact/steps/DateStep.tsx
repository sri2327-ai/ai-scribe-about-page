
import React from 'react';
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface DateStepProps {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
}

const DateStep = ({ selectedDate, setSelectedDate }: DateStepProps) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    console.log('Date input changed:', dateValue);
    if (dateValue) {
      const newDate = new Date(dateValue + 'T00:00:00');
      console.log('Parsed date:', newDate);
      setSelectedDate(newDate);
    } else {
      setSelectedDate(undefined);
    }
  };

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];
  
  // Format selected date for input value (YYYY-MM-DD for input)
  const dateInputValue = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '';
  
  // Format for display (MM/DD/YYYY American format)
  const displayDate = selectedDate ? format(selectedDate, 'MM/dd/yyyy') : '';

  return (
    <div className="h-full flex flex-col justify-center p-4">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
          <CalendarIcon className="w-6 h-6 text-[#387E89]" />
        </div>
        <h3 className="text-lg font-semibold text-[#133255] mb-1">Choose Your Date</h3>
        <p className="text-sm text-gray-600">Select a convenient day for your demo</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 max-w-sm mx-auto w-full">
        <label htmlFor="date-picker" className="block text-sm font-medium text-gray-700 mb-3">
          Select Date
        </label>
        <input
          id="date-picker"
          type="date"
          value={dateInputValue}
          min={today}
          onChange={handleDateChange}
          placeholder="Click to select date"
          className="w-full h-14 sm:h-12 px-4 py-3 text-base sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#387E89] focus:border-[#387E89] bg-white appearance-none"
          style={{
            WebkitAppearance: 'none',
            MozAppearance: 'textfield'
          }}
        />
        
        {/* Helper text to guide users */}
        {!selectedDate && (
          <div className="mt-2 text-center text-xs text-gray-500 flex items-center justify-center gap-1">
            <CalendarIcon className="w-3 h-3" />
            <span>Click the field above to open date picker</span>
          </div>
        )}
        
        {selectedDate && (
          <div className="mt-4 text-center p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-xs text-green-700">Selected date:</p>
            <p className="text-sm font-medium text-green-800">{displayDate}</p>
          </div>
        )}
      </div>
      
      <div className="text-center text-xs text-gray-500 mt-4">
        * Weekends are not available for demos
      </div>
    </div>
  );
};

export default DateStep;
