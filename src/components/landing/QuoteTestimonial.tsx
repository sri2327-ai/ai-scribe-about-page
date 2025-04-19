
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface QuoteTestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export const QuoteTestimonial = ({ quote, author, role, image }: QuoteTestimonialProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-white/10">
      <p className="text-white/90 italic mb-4">{quote}</p>
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={image} alt={author} />
          <AvatarFallback>{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-white/70">{role}</p>
        </div>
      </div>
    </div>
  );
};
