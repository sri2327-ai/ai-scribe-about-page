
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
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 rounded-3xl overflow-hidden shadow-xl">
                <div className="grid md:grid-cols-5 gap-8 p-8 sm:p-12 items-center min-h-[400px]">
                  {/* Large Doctor Image - Left Side */}
                  <div className="md:col-span-2 flex justify-center md:justify-start">
                    <div className="relative">
                      <Avatar className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 ring-4 ring-[#387E89]/20 shadow-2xl">
                        <AvatarImage 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-4xl sm:text-5xl font-bold">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {/* Decorative gradient blur */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#387E89]/20 to-[#143151]/20 rounded-full blur-xl -z-10"></div>
                    </div>
                  </div>
                  
                  {/* Content - Right Side */}
                  <div className="md:col-span-3 text-center md:text-left space-y-6">
                    {/* Quote */}
                    <blockquote className="text-xl sm:text-2xl lg:text-3xl text-gray-800 leading-relaxed font-medium italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="space-y-2">
                      <div className="font-bold text-gray-900 text-xl sm:text-2xl">{testimonial.author}</div>
                      <div className="text-[#387E89] font-semibold text-lg sm:text-xl">{testimonial.role}</div>
                      <div className="text-gray-600 text-base sm:text-lg">{testimonial.organization}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-[#387E89]/20 hover:border-[#387E89]/40 shadow-lg" />
        <CarouselNext className="right-4 bg-white/90 hover:bg-white border-[#387E89]/20 hover:border-[#387E89]/40 shadow-lg" />
      </Carousel>
    </div>
  );
};
