
import React from 'react';
import { Card } from "@/components/ui/card";
import OptimizedImage from "@/components/ui/optimized-image";
import { Calendar } from "lucide-react";

interface TimelineEntryProps {
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const TimelineEntry: React.FC<TimelineEntryProps> = ({
  date,
  title,
  description,
  image,
  link
}) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
      
      <Card className="ml-8 hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <OptimizedImage
                src={image}
                alt={title}
                className="w-full h-[300px] object-cover rounded-lg shadow-sm"
              />
              
              <h2 className="text-2xl font-semibold mt-6 mb-4">
                {title}
              </h2>
              
              <p className="text-gray-600">
                {description}
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-end">
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="h-5 w-5" />
                <time className="text-sm">{date}</time>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
