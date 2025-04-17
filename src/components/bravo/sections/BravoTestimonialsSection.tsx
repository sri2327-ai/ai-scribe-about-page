
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { bravoColors } from "@/theme/bravo-theme";

const testimonials = [
  {
    title: "Game-changing automation",
    content: "BRAVO has transformed how we handle patient communications. Our staff can now focus on what truly matters.",
    author: "Dr. Sarah Chen",
    role: "Medical Director",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60"
  },
  {
    title: "Exceptional ROI",
    content: "The cost savings and efficiency gains have been remarkable. BRAVO paid for itself in the first month.",
    author: "Michael Rodriguez",
    role: "Practice Manager",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&auto=format&fit=crop&q=60"
  },
  {
    title: "Outstanding Support",
    content: "The implementation was smooth and the support team has been incredibly responsive. Highly recommended!",
    author: "Dr. James Wilson",
    role: "Clinic Owner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=60"
  }
];

export const BravoTestimonialsSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-3xl font-bold text-center mx-auto" style={{ color: bravoColors.primary }}>
            Trusted by Leading Healthcare Providers
          </h2>
          
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl h-full p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="flex flex-col justify-between h-full gap-4">
                      <User className="w-8 h-8 mb-2" style={{ color: bravoColors.secondary }} />
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                          <h3 className="text-xl font-semibold mb-2" style={{ color: bravoColors.primary }}>
                            {testimonial.title}
                          </h3>
                          <p className="text-gray-600 text-base">
                            {testimonial.content}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                            <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="font-medium" style={{ color: bravoColors.text.primary }}>{testimonial.author}</span>
                            <span className="text-sm text-gray-500">{testimonial.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
