
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

export const QuoteTestimonial = ({ quote, author, role, image }: QuoteTestimonialProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1",
      shadowStyles.testimonial
    )}>
      <p className={withTypography(typography.body.base, "text-black italic mb-5 leading-relaxed")}>{quote}</p>
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 border-2 border-[#387E89]/30 shadow-md">
          <AvatarImage src={image} alt={author} className="object-cover" />
          <AvatarFallback className="bg-[#387E89]/10 text-[#387E89]">
            {author.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className={withTypography(typography.body.base, "font-semibold text-black")}>{author}</p>
          <p className={withTypography(typography.body.sm, "text-gray-700")}>{role}</p>
        </div>
      </div>
    </div>
  );
};
