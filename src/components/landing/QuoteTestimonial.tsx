
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
  <Card className="border-0 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 rounded-3xl overflow-hidden shadow-xl flex-shrink-0 w-[800px] mx-4">
    <div className="grid grid-cols-5 gap-6 p-8 items-center h-[320px]">
      {/* Large Doctor Image - Left Side */}
      <div className="col-span-2 flex justify-center">
        <div className="relative">
          <Avatar className="w-48 h-48 ring-4 ring-[#387E89]/20 shadow-2xl">
            <AvatarImage 
              src={testimonial.image} 
              alt={testimonial.author}
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-4xl font-bold">
              {testimonial.author.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {/* Decorative gradient blur */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#387E89]/20 to-[#143151]/20 rounded-full blur-xl -z-10"></div>
        </div>
      </div>
      
      {/* Content - Right Side */}
      <div className="col-span-3 text-left space-y-4">
        {/* Quote */}
        <blockquote className="text-lg lg:text-xl text-gray-800 leading-relaxed font-medium italic">
          "{testimonial.quote}"
        </blockquote>
        
        {/* Author Info */}
        <div className="space-y-1">
          <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
          <div className="text-[#387E89] font-semibold text-base">{testimonial.role}</div>
          <div className="text-gray-600 text-sm">{testimonial.organization}</div>
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
