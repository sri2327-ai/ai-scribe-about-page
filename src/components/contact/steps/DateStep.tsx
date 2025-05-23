
import React from 'react';
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DateStepProps {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
}

const DateStep = ({ selectedDate, setSelectedDate }: DateStepProps) => {
  // Get today's date for minimum date restriction
  const today = new Date();
  
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
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select Date
        </label>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full h-14 sm:h-12 justify-start text-left font-normal text-base sm:text-base",
                !selectedDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) =>
                date < today || 
                date.getDay() === 0 || 
                date.getDay() === 6
              }
              initialFocus
              className="p-3 pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
        
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
