
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Clock, Globe, User, Building, Mail, Phone } from "lucide-react";
import { format } from "date-fns";
import MobileDateTimePicker from './MobileDateTimePicker';
import DesktopDateTimePicker from './DesktopDateTimePicker';
import { useIsMobile } from '@/hooks/use-mobile';
import DemoSuccessMessage from './DemoSuccessMessage';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  practiceType: z.string().min(1, 'Please select a practice type'),
  practiceSize: z.string().min(1, 'Please select practice size'),
  selectedDate: z.date().optional(),
  selectedTime: z.string().optional(),
  timeZone: z.string().min(1, 'Please select a timezone'),
});

type FormData = z.infer<typeof formSchema>;

const practiceTypes = [
  'Family Medicine',
  'Internal Medicine', 
  'Cardiology',
  'Dermatology',
  'Gastroenterology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Psychiatry',
  'Radiology',
  'Other'
];

const practiceSizes = [
  '1-2 providers',
  '3-5 providers',
  '6-10 providers',
  '11-25 providers',
  '25+ providers'
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
];

const timeZoneOptions = ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles'];

const DemoRequestForm = () => {
  const [isDateTimePickerOpen, setIsDateTimePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [timeZone, setTimeZone] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedDateTime, setSubmittedDateTime] = useState<string>('');
  const isMobile = useIsMobile();

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', {
      ...data,
      selectedDate,
      selectedTime,
      timeZone
    });
    
    // Format the date and time for display
    if (selectedDate && selectedTime && timeZone) {
      const formattedDateTime = `${format(selectedDate, 'EEEE, MMMM do, yyyy')} at ${selectedTime} (${timeZone.replace(/_/g, ' ').replace('America/', '').replace('Europe/', '')})`;
      setSubmittedDateTime(formattedDateTime);
    }
    
    setIsSubmitted(true);
  };

  const handleCloseSuccessMessage = () => {
    setIsSubmitted(false);
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setTimeZone('');
    setSubmittedDateTime('');
  };

  if (isSubmitted) {
    return (
      <DemoSuccessMessage 
        dateTime={submittedDateTime}
        onClose={handleCloseSuccessMessage}
      />
    );
  }

  const DateTimePicker = isMobile ? MobileDateTimePicker : DesktopDateTimePicker;

  return (
    <>
      <Card className="shadow-xl rounded-2xl bg-white border border-gray-200 overflow-hidden w-full max-w-4xl mx-auto">
        <CardHeader className="bg-gradient-to-r from-[#387E89] to-[#2c6269] text-white p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl font-bold text-center">Request Your Demo</CardTitle>
          <p className="text-center text-white/90 mt-2 text-sm sm:text-base">
            Fill out the form below and we'll schedule your personalized demo
          </p>
        </CardHeader>
        
        <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            {/* Personal Information */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-[#133255] flex items-center gap-2">
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    {...register('firstName')}
                    className="h-10 sm:h-11 border-gray-300 focus:border-[#387E89] focus:ring-[#387E89] text-sm sm:text-base"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-xs sm:text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    {...register('lastName')}
                    className="h-10 sm:h-11 border-gray-300 focus:border-[#387E89] focus:ring-[#387E89] text-sm sm:text-base"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-xs sm:text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="h-10 sm:h-11 border-gray-300 focus:border-[#387E89] focus:ring-[#387E89] text-sm sm:text-base"
                    placeholder="your.email@practice.com"
                  />
                  {errors.email && (
                    <p className="text-xs sm:text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="h-10 sm:h-11 border-gray-300 focus:border-[#387E89] focus:ring-[#387E89] text-sm sm:text-base"
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-xs sm:text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Practice Information */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-[#133255] flex items-center gap-2">
                <Building className="h-4 w-4 sm:h-5 sm:w-5" />
                Practice Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="practiceType" className="text-sm font-medium text-gray-700">
                    Practice Type *
                  </Label>
                  <Select onValueChange={(value) => setValue('practiceType', value)}>
                    <SelectTrigger className="h-10 sm:h-11 border-gray-300 focus:border-[#387E89] focus:ring-[#387E89] text-sm sm:text-base">
                      <SelectValue placeholder="Select practice type" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {practiceTypes.map((type) => (
                        <SelectItem key={type} value={type} className="text-sm sm:text-base">{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.practiceType && (
                    <p className="text-xs sm:text-sm text-red-600">{errors.practiceType.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="practiceSize" className="text-sm font-medium text-gray-700">
                    Practice Size *
                  </Label>
                  <Select onValueChange={(value) => setValue('practiceSize', value)}>
                    <SelectTrigger className="h-10 sm:h-11 border-gray-300 focus:border-[#387E89] focus:ring-[#387E89] text-sm sm:text-base">
                      <SelectValue placeholder="Select practice size" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {practiceSizes.map((size) => (
                        <SelectItem key={size} value={size} className="text-sm sm:text-base">{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.practiceSize && (
                    <p className="text-xs sm:text-sm text-red-600">{errors.practiceSize.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Demo Scheduling */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-[#133255] flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                Schedule Your Demo
              </h3>
              
              <Button
                type="button"
                variant="outline"
                className="w-full h-14 sm:h-16 border-2 border-dashed border-gray-300 hover:border-[#387E89] hover:bg-[#387E89]/5 transition-all duration-200 text-left justify-start p-3 sm:p-4"
                onClick={() => setIsDateTimePickerOpen(true)}
              >
                <div className="flex items-center gap-2 sm:gap-3 w-full">
                  <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
                    <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#387E89]" />
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[#387E89]" />
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-[#387E89]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    {selectedDate && selectedTime && timeZone ? (
                      <div className="space-y-1">
                        <div className="font-medium text-[#133255] text-sm sm:text-base truncate">
                          {format(selectedDate, 'EEEE, MMMM do, yyyy')} at {selectedTime}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 truncate">
                          {timeZone.replace(/_/g, ' ').replace('America/', '').replace('Europe/', '')}
                        </div>
                      </div>
                    ) : (
                      <div className="text-gray-600 text-sm sm:text-base">
                        Click to select your preferred date, time, and timezone
                      </div>
                    )}
                  </div>
                </div>
              </Button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-11 sm:h-12 bg-gradient-to-r from-[#387E89] to-[#2c6269] hover:from-[#2c6269] hover:to-[#1f4d54] text-white font-semibold text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              disabled={!selectedDate || !selectedTime || !timeZone}
            >
              Schedule My Demo
            </Button>
            
            {(!selectedDate || !selectedTime || !timeZone) && (
              <p className="text-xs sm:text-sm text-center text-gray-500">
                Please select a date, time, and timezone to continue
              </p>
            )}
          </form>
        </CardContent>
      </Card>

      <DateTimePicker
        open={isDateTimePickerOpen}
        onOpenChange={setIsDateTimePickerOpen}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        timeZone={timeZone}
        setTimeZone={setTimeZone}
        timeSlots={timeSlots}
        timeZoneOptions={timeZoneOptions}
      />
    </>
  );
};

export default DemoRequestForm;
