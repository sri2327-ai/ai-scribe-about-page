
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface DemoSuccessMessageProps {
  dateTime: string;
  onClose: () => void;
}

const DemoSuccessMessage = ({ dateTime, onClose }: DemoSuccessMessageProps) => {
  return (
    <Card className="p-8 shadow-lg bg-white border border-gray-200 text-center">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <Check className="w-8 h-8 text-green-600" />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-[#133255] mb-3">Demo Successfully Scheduled!</h2>
      
      <p className="text-gray-600 mb-6">
        Your demo has been confirmed for <span className="font-semibold text-[#387E89]">{dateTime}</span>.
        We've sent a confirmation email with calendar invite and meeting details.
      </p>
      
      <div className="bg-[#E9F4FD] rounded-md p-4 text-sm text-[#133255] mb-6">
        <p className="font-medium">What to expect next:</p>
        <ul className="list-disc list-inside mt-2 text-left">
          <li>A confirmation email with calendar invite</li>
          <li>A reminder 24 hours before your demo</li>
          <li>A personalized demo of S10.AI's solutions</li>
        </ul>
      </div>
      
      <Button 
        onClick={onClose} 
        className="bg-[#387E89] hover:bg-[#2c6269] text-white px-8 py-2"
      >
        Return to contact page
      </Button>
    </Card>
  );
};

export default DemoSuccessMessage;
