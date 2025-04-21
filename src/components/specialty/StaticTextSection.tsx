
import React from 'react';
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const StaticTextSection = () => {
  return (
    <Card className="p-6 mb-6 bg-white">
      <h3 className="text-lg font-semibold mb-4 text-[#143151]">Static Text</h3>
      <Textarea 
        placeholder="Enter static text that will be available across all templates..."
        className="min-h-[100px] bg-background"
      />
    </Card>
  );
};

export default StaticTextSection;
