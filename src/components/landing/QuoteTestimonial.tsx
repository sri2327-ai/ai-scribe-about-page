
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { shadowStyles } from "@/lib/shadow-utils";
import { cn } from "@/lib/utils";

interface QuoteTestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export const QuoteTestimonial = ({ quote, author, role, image }: QuoteTestimonialProps) => {
  return (
    <div className={cn(
      "bg-white/10 backdrop-blur-xl rounded-lg p-6 border border-white/20 transition-all duration-300 hover:bg-white/15",
      shadowStyles.testimonial
    )}>
      <p className="text-black italic mb-4 text-base leading-relaxed">{quote}</p>
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 border-2 border-[#387E89]/30">
          <AvatarImage src={image} alt={author} className="object-cover" />
          <AvatarFallback className="bg-[#387E89]/10 text-[#387E89]">
            {author.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-black text-base">{author}</p>
          <p className="text-sm text-gray-700">{role}</p>
        </div>
      </div>
    </div>
  );
};
