
import React, { useState } from 'react';
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CalendarIcon, Clock } from "lucide-react";

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

  const [showDatePicker, setShowDatePicker] = useState(false);
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
    <Card className="p-6 shadow-lg bg-white/90">
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
              className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89]"
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
              className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89]"
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
              className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89]"
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
              className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89]"
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
            className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89]"
            placeholder="Your Company"
          />
        </div>

        <div className="space-y-2">
          <Label>Practice Type</Label>
          <Select
            value={formData.requirements}
            onValueChange={(value) => setFormData(prev => ({ ...prev, requirements: value }))}
          >
            <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89]">
              <SelectValue placeholder="Select your practice type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="family-medicine">Family Medicine</SelectItem>
              <SelectItem value="internal-medicine">Internal Medicine</SelectItem>
              <SelectItem value="pediatrics">Pediatrics</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="other">Other Specialty</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Selected Date & Time</Label>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 justify-start text-left font-normal hover:bg-[#E9F4FD] hover:text-[#387E89]"
              onClick={() => setShowDatePicker(true)}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
            </Button>
            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger className="flex-1 transition-all duration-200 focus:ring-2 focus:ring-[#387E89]">
                <Clock className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {selectedDate && selectedTime && (
            <p className="text-sm text-[#387E89]">
              Your demo is scheduled for {format(selectedDate, "PPP")} at {selectedTime}
            </p>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full bg-[#143151] hover:bg-[#0d2b4d] transition-colors duration-300"
          disabled={!selectedDate || !selectedTime}
        >
          Schedule Demo
        </Button>
      </form>

      <Dialog open={showDatePicker} onOpenChange={setShowDatePicker}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select a Date</DialogTitle>
            <DialogDescription>
              Choose your preferred demo date. Available times will be shown after date selection.
            </DialogDescription>
          </DialogHeader>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
              setShowDatePicker(false);
            }}
            className="rounded-md border pointer-events-auto"
            disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
          />
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default DemoRequestForm;
