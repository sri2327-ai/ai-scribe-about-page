
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  <div className="flex-shrink-0 w-[500px] mx-6 group">
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_20px_50px_rgba(8,_112,_184,_0.05)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transition-all duration-500 hover:-translate-y-2">
      {/* Doctor Image */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <Avatar className="w-28 h-28 ring-2 ring-white/30 shadow-xl">
            <AvatarImage 
              src={testimonial.image} 
              alt={testimonial.author}
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-br from-slate-900 to-slate-700 text-white text-2xl font-semibold">
              {testimonial.author.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {/* Floating gradient orb */}
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
        </div>
      </div>
      
      {/* Quote */}
      <blockquote className="text-slate-700 text-lg leading-relaxed font-medium mb-8 text-center">
        "{testimonial.quote}"
      </blockquote>
      
      {/* Author Info */}
      <div className="text-center space-y-1">
        <div className="font-semibold text-slate-900 text-lg">{testimonial.author}</div>
        <div className="text-slate-600 text-sm font-medium">{testimonial.role}</div>
        <div className="text-slate-500 text-xs uppercase tracking-wide">{testimonial.organization}</div>
      </div>
    </div>
  </div>
);

export const QuoteTestimonial = () => {
  // Triple testimonials for seamless infinite loop
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20"></div>
      
      {/* Floating orbs background */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes modernMarquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          .modern-marquee {
            animation: modernMarquee 45s linear infinite;
          }
          .modern-marquee:hover {
            animation-play-state: paused;
          }
        `
      }} />
      
      <div className="flex modern-marquee">
        {infiniteTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
      
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
    </div>
  );
};
