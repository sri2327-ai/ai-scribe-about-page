
import React, { useState } from 'react';
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", {
      ...formData,
      selectedDate,
      selectedTime,
    });
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
            <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white">
              <SelectValue placeholder="Select your requirements" />
            </SelectTrigger>
            <SelectContent>
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
              `${format(selectedDate, "PPP")} at ${selectedTime}`
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
        <DialogContent className="bg-white p-0 gap-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle>Schedule Your Demo</DialogTitle>
            <DialogDescription>
              Pick a convenient date and time for your demo
            </DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-4 p-6">
            <div className="space-y-4">
              <Label>Select Date</Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border pointer-events-auto"
                disabled={(date) => 
                  date < new Date() || 
                  date.getDay() === 0 || 
                  date.getDay() === 6
                }
              />
            </div>
            <div className="space-y-4">
              <Label>Select Time</Label>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    type="button"
                    variant="outline"
                    className={`
                      flex items-center gap-2 ${
                        selectedTime === time 
                          ? 'bg-[#387E89] text-white hover:bg-[#2c6269]' 
                          : 'hover:bg-[#E9F4FD] hover:text-[#387E89]'
                      }
                    `}
                    onClick={() => setSelectedTime(time)}
                  >
                    <Clock className="h-4 w-4" />
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t p-6">
            {selectedDate && selectedTime ? (
              <div className="text-center text-[#133255] font-medium">
                Your demo is scheduled for {format(selectedDate, "PPP")} at {selectedTime}
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
