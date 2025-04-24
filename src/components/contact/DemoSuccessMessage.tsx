
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { format, parseISO } from "date-fns";

interface DemoSuccessMessageProps {
  dateTime: string;
  onClose: () => void;
}

const DemoSuccessMessage = ({ dateTime, onClose }: DemoSuccessMessageProps) => {
  const addToCalendar = () => {
    try {
      // Parse the date and time
      const date = parseISO(dateTime);
      
      // Add one hour to the start time for the event duration
      const endDate = new Date(date.getTime() + 60 * 60 * 1000);
      
      // Format dates for calendar URL (YYYYMMDDTHHMMSSZ format)
      const startFormatted = format(date, "yyyyMMdd'T'HHmmss'Z'");
      const endFormatted = format(endDate, "yyyyMMdd'T'HHmmss'Z'");
      
      // Event details
      const event = {
        text: "S10.AI Product Demo",
        description: "Join us for an interactive demo of S10.AI's Bravo & Crush solutions. We'll show you how our AI-powered tools can transform your clinical workflow.",
        location: "Online - Zoom",
        dates: `${startFormatted}/${endFormatted}`,
      };

      // Create calendar URLs
      const googleURL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${encodeURIComponent(event.dates)}`;
      
      const outlookURL = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.text)}&body=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&startdt=${startFormatted}&enddt=${endFormatted}&path=/calendar/action/compose&rru=addevent`;
      
      const yahooURL = `https://calendar.yahoo.com/?v=60&title=${encodeURIComponent(event.text)}&desc=${encodeURIComponent(event.description)}&in_loc=${encodeURIComponent(event.location)}&st=${startFormatted}&et=${endFormatted}`;

      // Create a dropdown menu with calendar options
      const calendarWindow = window.open(
        "",
        "Calendar",
        "width=600,height=400,menubar=no,toolbar=no"
      );
      
      if (calendarWindow) {
        calendarWindow.document.write(`
          <html>
            <head>
              <title>Add to Calendar</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .btn { 
                  display: block; 
                  width: 100%;
                  padding: 10px;
                  margin: 10px 0;
                  background: #387E89;
                  color: white;
                  text-decoration: none;
                  border-radius: 5px;
                  text-align: center;
                }
                .btn:hover {
                  background: #2c6269;
                }
              </style>
            </head>
            <body>
              <h2>Choose Your Calendar</h2>
              <a class="btn" href="${googleURL}" target="_blank">Add to Google Calendar</a>
              <a class="btn" href="${outlookURL}" target="_blank">Add to Outlook Calendar</a>
              <a class="btn" href="${yahooURL}" target="_blank">Add to Yahoo Calendar</a>
              <p style="text-align: center; margin-top: 20px;">
                <button onclick="window.close()" style="padding: 5px 10px;">Close</button>
              </p>
            </body>
          </html>
        `);
      }
      
      toast.success("Choose your calendar service to add the event");
    } catch (error) {
      console.error("Error adding to calendar:", error);
      toast.error("Failed to open calendar options. Please try again.");
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
