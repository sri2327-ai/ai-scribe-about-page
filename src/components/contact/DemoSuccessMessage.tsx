
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner";

interface DemoSuccessMessageProps {
  dateTime: string;
  onClose: () => void;
}

const DemoSuccessMessage = ({ dateTime, onClose }: DemoSuccessMessageProps) => {
  const addToCalendar = () => {
    try {
      // Format the event details for calendar
      const event = {
        text: `S10.AI Product Demo - ${dateTime}`,
        dates: dateTime,
        details: "Join us for an interactive demo of S10.AI's Bravo & Crush solutions. We'll show you how our AI-powered tools can transform your clinical workflow.",
      };
      
      // Format for Google Calendar
      const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&details=${encodeURIComponent(event.details)}&dates=${encodeURIComponent(event.dates)}`;
      window.open(googleUrl, '_blank');
      toast.success("Event added to your calendar");
    } catch (error) {
      console.error("Error adding to calendar:", error);
      toast.error("Failed to add to calendar. Please try again.");
    }
  };

  return (
    <Card className="p-6 bg-green-50 border-green-200">
      <div className="space-y-4">
        <div className="text-green-800 font-medium text-xl">
          Demo Request Confirmed!
        </div>
        <p className="text-green-700">
          Thank you for scheduling a demo with us. You'll receive a confirmation email with the Zoom link shortly at your registered email address.
        </p>
        
        <div className="bg-green-100 p-4 rounded-md">
          <p className="font-medium text-green-800 mb-1">Your appointment:</p>
          <p className="text-green-700">{dateTime}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={addToCalendar}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
          >
            <CalendarIcon className="h-4 w-4" />
            Add to Calendar
          </Button>
          <Button 
            variant="outline" 
            onClick={onClose}
            className="border-green-600 text-green-700 hover:bg-green-50"
          >
            Schedule Another Demo
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DemoSuccessMessage;
