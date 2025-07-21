
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "S10.AI transformed our practice completely. Documentation time dropped by 75%, and our revenue grew by 40% within the first quarter.",
    author: "Dr. Emily Chen",
    role: "Medical Director",
    organization: "Advanced Care Medical Group",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
  },
  {
    quote: "The ambient AI captures everything perfectly. I can focus entirely on my patients instead of typing notes. It's revolutionary.",
    author: "Dr. Michael Rodriguez",
    role: "Family Medicine Physician",
    organization: "Wellness Family Clinic",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
  },
  {
    quote: "BRAVO reduced our no-show rate from 30% to 5%. The automated reminders and scheduling have been game-changing for our practice.",
    author: "Dr. Sarah Johnson",
    role: "Practice Owner",
    organization: "Johnson Medical Associates",
    image: "https://images.unsplash.com/photo-1594824388848-fb1e02b7796c?w=400"
  },
  {
    quote: "Real-time prescription processing and automated follow-ups improved our patient care significantly. Our satisfaction scores are at an all-time high.",
    author: "Dr. David Kim",
    role: "Internal Medicine",
    organization: "Metropolitan Health Center",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400"
  },
  {
    quote: "The ROI was immediate. We're saving $150,000 annually while providing better patient care. S10.AI is the future of healthcare.",
    author: "Dr. Lisa Thompson",
    role: "Chief Medical Officer",
    organization: "Riverside Medical Group",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400"
  },
  {
    quote: "Implementation was seamless and the team support was exceptional. Our workflow efficiency increased by 60% in just two months.",
    author: "Dr. James Wilson",
    role: "Emergency Medicine",
    organization: "City General Hospital",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400"
  }
];

const TestimonialCard = ({ testimonial }) => (
  <Card className="border-0 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 rounded-xl lg:rounded-3xl overflow-hidden shadow-xl flex-shrink-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[600px] xl:w-[800px] mx-2 md:mx-4">
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 min-h-[320px] md:min-h-[280px] lg:min-h-[320px]">
      {/* Doctor Image */}
      <div className="flex justify-center md:justify-start flex-shrink-0">
        <div className="relative">
          <Avatar className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 ring-2 sm:ring-4 ring-[#387E89]/20 shadow-xl">
            <AvatarImage 
              src={testimonial.image} 
              alt={testimonial.author}
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
              {testimonial.author.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {/* Decorative gradient blur */}
          <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#387E89]/20 to-[#143151]/20 rounded-full blur-xl -z-10"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 text-center md:text-left space-y-3 md:space-y-4 min-w-0">
        {/* Quote */}
        <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-medium italic">
          "{testimonial.quote}"
        </blockquote>
        
        {/* Author Info */}
        <div className="space-y-1">
          <div className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">{testimonial.author}</div>
          <div className="text-[#387E89] font-semibold text-xs sm:text-sm md:text-base">{testimonial.role}</div>
          <div className="text-gray-600 text-xs sm:text-sm">{testimonial.organization}</div>
        </div>
      </div>
    </div>
  </Card>
);

export const QuoteTestimonial = () => {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full py-8 overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .testimonial-marquee {
            animation: marquee 60s linear infinite;
          }
          .testimonial-marquee:hover {
            animation-play-state: paused;
          }
        `
      }} />
      
      <div className="flex testimonial-marquee">
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};
