
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

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
  }
];

export const QuoteTestimonial = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 rounded-3xl p-8 sm:p-12 shadow-xl">
                <div className="text-center max-w-5xl mx-auto">
                  {/* Large Doctor Image */}
                  <div className="mb-8">
                    <Avatar className="w-24 h-24 sm:w-32 sm:h-32 mx-auto ring-4 ring-[#387E89]/20 shadow-2xl">
                      <AvatarImage 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-2xl sm:text-3xl font-bold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-8 leading-relaxed font-medium italic max-w-4xl mx-auto">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="space-y-2">
                    <div className="font-bold text-gray-900 text-lg sm:text-xl">{testimonial.author}</div>
                    <div className="text-[#387E89] font-semibold text-base sm:text-lg">{testimonial.role}</div>
                    <div className="text-gray-600 text-sm sm:text-base">{testimonial.organization}</div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-[#387E89]/20 hover:border-[#387E89]/40" />
        <CarouselNext className="right-4 bg-white/80 hover:bg-white border-[#387E89]/20 hover:border-[#387E89]/40" />
      </Carousel>
    </div>
  );
};
