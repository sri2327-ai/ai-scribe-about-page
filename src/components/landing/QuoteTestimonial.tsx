
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { shadowStyles } from "@/lib/shadow-utils";
import { cn } from "@/lib/utils";
import { typography, withTypography } from '@/lib/typography';

interface QuoteTestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export const QuoteTestimonial = ({
  quote,
  author,
  role,
  image
}: QuoteTestimonialProps) => {
  return (
    <div className="bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 rounded-2xl p-6 sm:p-8 border border-[#387E89]/10 shadow-lg">
      <div className="text-center max-w-4xl mx-auto">
        {/* Quote */}
        <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-800 mb-6 leading-relaxed font-medium italic">
          "{quote}"
        </blockquote>
        
        {/* Author Info */}
        <div className="flex items-center justify-center gap-4">
          <Avatar className="w-12 h-12 sm:w-16 sm:h-16">
            <AvatarImage src={image} alt={author} />
            <AvatarFallback className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-lg font-semibold">
              {author.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="text-left">
            <div className="font-semibold text-gray-900 text-base sm:text-lg">{author}</div>
            <div className="text-gray-600 text-sm sm:text-base">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
