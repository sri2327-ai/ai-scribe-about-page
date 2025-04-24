
import React from 'react';
import { Card } from "@/components/ui/card";
import OptimizedImage from "@/components/ui/optimized-image";
import { Calendar, ArrowRight } from "lucide-react";

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
    <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
      {/* Timeline dot for desktop */}
      <div className="hidden md:flex md:col-span-1 justify-center relative">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-tealBlueBright flex items-center justify-center shadow-lg z-10">
          <Calendar className="h-4 w-4 text-white" />
        </div>
      </div>
      
      {/* Card content */}
      <Card className="md:col-span-11 bg-white border-gray-200 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.01] overflow-hidden">
        <div className="md:grid md:grid-cols-7 gap-0">
          {/* Image section */}
          <div className="md:col-span-3 relative h-60 md:h-full overflow-hidden">
            <OptimizedImage
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            
            {/* Mobile date display */}
            <div className="absolute top-4 left-4 bg-white/90 rounded-md px-3 py-1 flex items-center gap-2 md:hidden shadow-md">
              <Calendar className="h-4 w-4 text-blue-500" />
              <time className="text-sm font-medium text-gray-700">{date}</time>
            </div>
          </div>
          
          {/* Content section */}
          <div className="md:col-span-4 p-6 space-y-4">
            {/* Desktop date display */}
            <div className="hidden md:flex items-center gap-2 text-gray-500">
              <time className="text-sm font-medium">{date}</time>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h2>
            
            <div className="prose prose-sm text-gray-600 leading-relaxed">
              <p>{description}</p>
            </div>

            {link && (
              <a 
                href={link}
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors font-medium mt-2"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
