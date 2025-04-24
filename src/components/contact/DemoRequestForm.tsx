
import React, { useState, useEffect } from 'react';
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
];

const DemoRequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requirements: "",
    companyName: "",
  });

  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [timeZone, setTimeZone] = useState<string>("");

  // Detect timezone automatically when component mounts
  useEffect(() => {
    try {
      const detectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimeZone(detectedTimeZone);
    } catch (error) {
      console.error("Error detecting timezone:", error);
      setTimeZone("UTC");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time for your demo");
      return;
    }
    
    toast.success("Demo request submitted successfully!", {
      description: `We'll see you on ${format(selectedDate, "PPP")} at ${selectedTime} ${timeZone}`
    });
    
    console.log("Form Data:", {
      ...formData,
      selectedDate,
      selectedTime,
      timeZone,
    });
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <Card className="p-6 shadow-lg bg-white border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white"
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white"
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white"
              placeholder="(123) 456-7890"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white"
            placeholder="Your Company"
          />
        </div>

        <div className="space-y-2">
          <Label>Requirements</Label>
          <Select
            value={formData.requirements}
            onValueChange={(value) => setFormData(prev => ({ ...prev, requirements: value }))}
          >
            <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white text-gray-900">
              <SelectValue placeholder="Select your requirements" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200">
              <SelectItem value="clinical-documentation">Clinical Documentation</SelectItem>
              <SelectItem value="patient-scheduling">Patient Scheduling</SelectItem>
              <SelectItem value="practice-management">Practice Management</SelectItem>
              <SelectItem value="patient-communication">Patient Communication</SelectItem>
              <SelectItem value="other">Other Requirements</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Select Date & Time</Label>
          <Button
            type="button"
            variant="outline"
            className="w-full justify-start text-left font-normal hover:bg-[#E9F4FD] hover:text-[#387E89] bg-white"
            onClick={() => setShowDateTimePicker(true)}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedDate && selectedTime ? (
              `${format(selectedDate, "PPP")} at ${selectedTime} (${timeZone})`
            ) : (
              "Pick a date and time"
            )}
          </Button>
        </div>

        <Button 
          type="submit" 
          className="w-full rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl"
          disabled={!selectedDate || !selectedTime}
        >
          Schedule Demo
        </Button>
      </form>

      <Dialog open={showDateTimePicker} onOpenChange={setShowDateTimePicker}>
        <DialogContent className="bg-white p-0 gap-0 max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="p-6 pb-2 sticky top-0 bg-white z-10 border-b">
            <div className="flex justify-between items-center">
              <div>
                <DialogTitle className="text-2xl font-bold text-[#133255]">Schedule Your Demo</DialogTitle>
                <DialogDescription className="text-gray-600">
                  Pick a convenient date and time for your demo
                </DialogDescription>
              </div>
              <DialogClose className="absolute right-4 top-4 rounded-full w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200">
                <X className="h-4 w-4" />
              </DialogClose>
            </div>
          </DialogHeader>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-[#133255]">Select Date</h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border bg-white pointer-events-auto"
                  disabled={(date) => 
                    date < new Date() || 
                    date.getDay() === 0 || 
                    date.getDay() === 6
                  }
                />
                <div className="text-sm text-gray-500">
                  * Weekend dates are not available
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#133255] mb-4">Select Time ({timeZone})</h3>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      type="button"
                      variant="outline"
                      className={`
                        flex items-center gap-2 ${
                          selectedTime === time 
                            ? 'bg-[#387E89] text-white hover:bg-[#2c6269]' 
                            : 'bg-white hover:bg-[#E9F4FD] hover:text-[#387E89]'
                        }
                      `}
                      onClick={() => handleTimeSelection(time)}
                    >
                      <Clock className="h-4 w-4" />
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t p-6 bg-gray-50">
            {selectedDate && selectedTime ? (
              <div className="text-center">
                <div className="text-lg font-medium text-[#133255]">
                  Your demo is scheduled for
                </div>
                <div className="text-lg md:text-xl font-bold text-[#387E89]">
                  {format(selectedDate, "PPPP")} at {selectedTime} ({timeZone})
                </div>
                <Button 
                  onClick={() => setShowDateTimePicker(false)}
                  className="mt-4 bg-[#387E89] hover:bg-[#2c6269] text-white"
                >
                  Confirm Selection
                </Button>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                Please select both a date and time
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default DemoRequestForm;
