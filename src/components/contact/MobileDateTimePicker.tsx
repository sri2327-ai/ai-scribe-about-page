
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Clock } from "lucide-react";

interface MobileDateTimePickerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedTime: string | undefined;
  setSelectedTime: (time: string | undefined) => void;
  timeZone: string;
  setTimeZone: (zone: string) => void;
  timeSlots: string[];
  timeZoneOptions: string[];
}

const MobileDateTimePicker = ({
  open,
  onOpenChange,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  timeZone,
  setTimeZone,
  timeSlots,
  timeZoneOptions,
}: MobileDateTimePickerProps) => {
  const handleConfirm = () => {
    if (selectedDate && selectedTime && timeZone) {
      onOpenChange(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[90vh] bg-white overflow-y-auto p-4">
        <SheetHeader className="text-left mb-4">
          <SheetTitle className="text-xl font-bold text-[#133255]">
            Schedule Your Demo
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-[#133255]">Select Date</h3>
            <div className="bg-white rounded-lg border border-gray-200 p-2">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md w-full mx-auto pointer-events-auto"
                disabled={(date) => 
                  date < new Date() || 
                  date.getDay() === 0 || 
                  date.getDay() === 6
                }
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-[#133255]">Select Time</h3>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  type="button"
                  variant="outline"
                  className={`flex items-center gap-2 ${
                    selectedTime === time 
                      ? 'bg-[#387E89] text-white hover:bg-[#2c6269]' 
                      : 'bg-white hover:bg-[#E9F4FD] hover:text-[#387E89]'
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  <Clock className="h-4 w-4" />
                  {time}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-[#133255]">Select Time Zone</h3>
            <Select value={timeZone} onValueChange={setTimeZone}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select time zone" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px] overflow-y-auto bg-white z-[100]">
                {timeZoneOptions.map((tz) => (
                  <SelectItem key={tz} value={tz}>
                    {tz}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="sticky bottom-0 mt-6 pb-4 pt-4 bg-white border-t border-gray-200">
            {selectedDate && selectedTime && timeZone ? (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Your demo is scheduled for</div>
                  <div className="text-lg font-bold text-[#387E89]">
                    {format(selectedDate, "PPPP")} at {selectedTime} ({timeZone})
                  </div>
                </div>
                <Button 
                  onClick={handleConfirm}
                  className="w-full bg-[#387E89] hover:bg-[#2c6269] text-white"
                >
                  Confirm Selection
                </Button>
              </div>
            ) : (
              <div className="text-center text-gray-500 text-sm">
                Please select a date, time, and timezone
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileDateTimePicker;
