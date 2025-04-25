
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
  isFirst?: boolean;
  isLast?: boolean;
}

export const TimelineEntry: React.FC<TimelineEntryProps> = ({
  date,
  title,
  description,
  image,
  link,
  isFirst,
  isLast
}) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      {/* Date and timeline dot */}
      <div className="md:col-span-3 relative z-10">
        <div className="flex items-center md:justify-end gap-4">
          <div className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-white"></div>
          <time className="text-sm font-medium text-black whitespace-nowrap">{date}</time>
        </div>
      </div>
      
      {/* Content */}
      <Card className="md:col-span-9 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">{title}</h2>
            <p className="text-black text-base leading-relaxed">{description}</p>
          </div>
          
          {image && (
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <OptimizedImage
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* S10.ai logo and branding */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <span className="text-sm font-semibold text-black">S10.ai</span>
            <img 
              src="/lovable-uploads/8373b719-98a1-40b9-8d6b-b23bebf28d33.png"
              alt="S10.ai Logo"
              className="h-6 w-auto"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
