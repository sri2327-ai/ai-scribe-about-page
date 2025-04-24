
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
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-transparent" />
      
      <Card className="ml-12 transform transition-all duration-300 hover:translate-x-2 hover:shadow-xl">
        <div className="p-6 space-y-6">
          {/* Date with icon */}
          <div className="flex items-center gap-2 text-gray-500">
            <div className="absolute -left-3">
              <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <time className="text-sm font-medium">{date}</time>
          </div>

          {/* Image container */}
          <div className="relative rounded-lg overflow-hidden">
            <OptimizedImage
              src={image}
              alt={title}
              className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>

            {link && (
              <a 
                href={link}
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
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
