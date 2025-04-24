
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, GlobeIcon, Chrome, Mail } from "lucide-react";
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

      // Create a custom popup window with better styling
      const calendarWindow = window.open(
        "",
        "Add to Calendar",
        "width=400,height=500,menubar=no,toolbar=no"
      );
      
      if (calendarWindow) {
        calendarWindow.document.write(`
          <html>
            <head>
              <title>Add to Calendar</title>
              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
              <style>
                body { 
                  font-family: 'Inter', sans-serif; 
                  background-color: #ffffff;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  margin: 0;
                }
                .calendar-container {
                  background-color: white;
                  border-radius: 12px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  padding: 24px;
                  max-width: 350px;
                  width: 100%;
                }
                .calendar-btn {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 100%;
                  padding: 12px;
                  margin: 10px 0;
                  border-radius: 8px;
                  font-weight: 600;
                  transition: all 0.3s ease;
                }
                .calendar-btn:hover {
                  opacity: 0.9;
                }
                .google-btn {
                  background-color: #4285F4;
                  color: white;
                }
                .outlook-btn {
                  background-color: #0078D4;
                  color: white;
                }
                .yahoo-btn {
                  background-color: #6001D2;
                  color: white;
                }
                .btn-icon {
                  margin-right: 10px;
                }
                .close-btn {
                  background-color: #387E89;
                  color: white;
                  border-radius: 8px;
                  padding: 10px 20px;
                  margin-top: 15px;
                  cursor: pointer;
                  transition: background-color 0.3s ease;
                }
                .close-btn:hover {
                  background-color: #2c6269;
                }
              </style>
            </head>
            <body>
              <div class="calendar-container">
                <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Add to Calendar</h2>
                <p class="text-center text-gray-600 mb-4">Choose your preferred calendar service</p>
                
                <a href="${googleURL}" target="_blank" class="calendar-btn google-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" class="btn-icon">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.733s3.773-8.733 8.6-8.733c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.698 0 .835 4.845.835 10.92s4.863 10.92 11.645 10.92c3.577 0 6.247-1.175 8.335-3.408 2.16-2.16 2.84-5.213 2.84-7.647 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                  Google Calendar
                </a>
                
                <a href="${outlookURL}" target="_blank" class="calendar-btn outlook-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" class="btn-icon">
                    <path d="M7.88 12.04V6.261l7.207 3.777-7.207 2.002zm11.264-4.857h-2.473l-1.59-2.978A1.778 1.778 0 0 0 13.465 3H8.687a1.549 1.549 0 0 0-1.622 1.472v14.329c0 .812.666 1.472 1.622 1.472h9.626c.956 0 1.622-.66 1.622-1.472V8.44c0-.64-.361-1.224-.861-1.493z"/>
                  </svg>
                  Outlook Calendar
                </a>
                
                <a href="${yahooURL}" target="_blank" class="calendar-btn yahoo-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" class="btn-icon">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.707 16.707c-.378.378-1.021.378-1.414 0l-2.293-2.293c-.286-.286-.781-.286-1.062 0L9.646 15h-.293c-.533 0-1-.467-1-1v-1c0-.533.467-1 1-1h.293l1.293 1.293c.286.286.781.286 1.062 0l2.293-2.293c.378-.378 1.021-.378 1.414 0l.293.293c.378.378.378 1.021 0 1.414l-2.293 2.293c-.378.378-.378 1.021 0 1.414l.293.293c.378.378.378 1.021 0 1.414z"/>
                  </svg>
                  Yahoo Calendar
                </a>
                
                <div class="text-center">
                  <button onclick="window.close()" class="close-btn">Close</button>
                </div>
              </div>
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
