
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
    <div className="p-6 space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <CalendarIcon className="w-8 h-8 text-[#387E89]" />
        </div>
        <h3 className="text-xl font-semibold text-[#133255] mb-2">Choose Your Date</h3>
        <p className="text-gray-600">Select a convenient day for your demo</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <label htmlFor="date-picker" className="block text-sm font-medium text-gray-700 mb-2">
          Select Date
        </label>
        <input
          id="date-picker"
          type="date"
          value={dateInputValue}
          min={today}
          onChange={handleDateChange}
          className="w-full h-14 px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#387E89] focus:border-[#387E89] bg-white"
        />
        {selectedDate && (
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-600">Selected date:</p>
            <p className="text-lg font-medium text-[#133255]">{displayDate}</p>
          </div>
        )}
      </div>
      
      <div className="text-center text-sm text-gray-500">
        * Weekends are not available for demos
      </div>
    </div>
  );
};

export default DateStep;
