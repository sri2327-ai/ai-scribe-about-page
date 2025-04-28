
import React, { useState, useEffect } from 'react';
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, X } from "lucide-react";
import DemoSuccessMessage from './DemoSuccessMessage';
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
import { useIsMobile } from '@/hooks/use-mobile';
import MobileDateTimePicker from './MobileDateTimePicker';

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
];

const timeZoneOptions = [
  "UTC",
  "America/New_York", // Eastern Time
  "America/Chicago", // Central Time
  "America/Denver", // Mountain Time
  "America/Los_Angeles", // Pacific Time
  "America/Anchorage", // Alaska Time
  "Pacific/Honolulu", // Hawaii Time
  "America/Toronto",
  "America/Vancouver",
  "America/Mexico_City",
  "America/Bogota",
  "America/Lima",
  "America/Santiago",
  "America/Sao_Paulo",
  "Europe/London",
  "Europe/Berlin",
  "Europe/Paris",
  "Europe/Rome",
  "Europe/Madrid",
  "Europe/Amsterdam",
  "Africa/Cairo",
  "Asia/Dubai",
  "Asia/Kolkata",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Asia/Seoul",
  "Australia/Sydney",
  "Australia/Melbourne",
  "Pacific/Auckland"
];

const DemoRequestForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requirements: "",
    companyName: "",
    specialty: "",
  });

  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [timeZone, setTimeZone] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMobile = useIsMobile();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time for your demo");
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log("Form Data:", {
        ...formData,
        selectedDate,
        selectedTime,
        timeZone,
      });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Demo scheduled successfully!");
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to schedule demo. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <DemoSuccessMessage 
        dateTime={`${format(selectedDate!, "PPP")} at ${selectedTime} ${timeZone}`}
        onClose={() => setShowSuccess(false)}
      />
    );
  }

  return (
    <Card className="p-6 shadow-lg bg-white border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white truncate"
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white truncate"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white truncate"
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white truncate"
              placeholder="(123) 456-7890"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="companyName" className="block text-sm font-medium">Practice/Hospital Name</label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white truncate"
              placeholder="Your Practice Name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="specialty" className="block text-sm font-medium">Medical Specialty</label>
            <Select
              value={formData.specialty}
              onValueChange={(value) => setFormData(prev => ({ ...prev, specialty: value }))}
            >
              <SelectTrigger id="specialty" className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white text-gray-900">
                <SelectValue placeholder="Select your specialty" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                <SelectItem value="family-medicine">Family Medicine</SelectItem>
                <SelectItem value="internal-medicine">Internal Medicine</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                <SelectItem value="other">Other Specialty</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Requirements</label>
          <Select
            value={formData.requirements}
            onValueChange={(value) => setFormData(prev => ({ ...prev, requirements: value }))}
          >
            <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-[#387E89] bg-white text-gray-900">
              <SelectValue placeholder="What interests you most?" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 max-h-[300px]">
              <SelectItem value="clinical-documentation">Clinical Documentation & Notes</SelectItem>
              <SelectItem value="patient-scheduling">Patient Scheduling & Management</SelectItem>
              <SelectItem value="practice-management">Practice Management</SelectItem>
              <SelectItem value="patient-communication">Patient Communication</SelectItem>
              <SelectItem value="voice-commands">Voice Commands & AI Assistant</SelectItem>
              <SelectItem value="full-demo">Full Product Demo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Select Date & Time</label>
          <Button
            type="button"
            variant="outline"
            className="w-full justify-start text-left font-normal hover:bg-[#E9F4FD] hover:text-[#387E89] bg-white truncate"
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

        {isMobile ? (
          <MobileDateTimePicker
            open={showDateTimePicker}
            onOpenChange={setShowDateTimePicker}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            timeZone={timeZone}
            setTimeZone={setTimeZone}
            timeSlots={timeSlots}
            timeZoneOptions={timeZoneOptions}
          />
        ) : (
          <Dialog open={showDateTimePicker} onOpenChange={setShowDateTimePicker}>
            <DialogContent className="bg-white p-0 gap-0 sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
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
              
              <div className="flex flex-col max-h-[calc(100vh-200px)]">
                <div className="p-6 grid md:grid-cols-2 gap-6">
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

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-[#133255]">Select Time</h3>
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
                            onClick={() => setSelectedTime(time)}
                          >
                            <Clock className="h-4 w-4" />
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-[#133255]">Time Zone</h3>
                      <Select value={timeZone} onValueChange={setTimeZone}>
                        <SelectTrigger className="w-full bg-white border-gray-200">
                          <SelectValue placeholder="Select time zone" />
                        </SelectTrigger>
                        <SelectContent 
                          className="max-h-[200px] overflow-y-auto bg-white z-[100]"
                          position="popper"
                          sideOffset={5}
                        >
                          {timeZoneOptions.map((tz) => (
                            <SelectItem key={tz} value={tz}>
                              {tz}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="border-t p-6 bg-gray-50 sticky bottom-0 mt-auto">
                  {selectedDate && selectedTime ? (
                    <div className="text-center">
                      <div className="text-lg font-medium text-[#133255]">
                        Your demo is scheduled for
                      </div>
                      <div className="text-lg md:text-xl font-bold text-[#387E89] mb-4">
                        {format(selectedDate, "PPPP")} at {selectedTime} ({timeZone})
                      </div>
                      <Button 
                        onClick={() => setShowDateTimePicker(false)}
                        className="bg-[#387E89] hover:bg-[#2c6269] text-white"
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
              </div>
            </DialogContent>
          </Dialog>
        )}

        <Button 
          type="submit" 
          className="w-full rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl"
          disabled={!selectedDate || !selectedTime || isSubmitting}
        >
          {isSubmitting ? "Scheduling..." : "Schedule Demo"}
        </Button>
      </form>
    </Card>
  );
};

export default DemoRequestForm;
