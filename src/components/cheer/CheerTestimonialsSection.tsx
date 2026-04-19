import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "CHEER has revolutionized how we deliver care. The platform is intuitive, and our patients love the seamless experience.",
    author: 'Dr. Sarah Mitchell',
    role: 'Family Medicine Physician',
    avatar: 'SM',
    rating: 5,
  },
  {
    quote:
      'The integration with our EHR is flawless. I can focus on my patients instead of wrestling with technology.',
    author: 'Dr. James Chen',
    role: 'Cardiologist',
    avatar: 'JC',
    rating: 5,
  },
  {
    quote:
      'Our no-show rate dropped by 35% after implementing CHEER. The automated reminders are a game-changer.',
    author: 'Maria Rodriguez',
    role: 'Practice Manager',
    avatar: 'MR',
    rating: 5,
  },
];

export const CheerTestimonialsSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-white">
      {/* Subtle brand background blurs - matches workflow section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-64 h-64 rounded-full bg-[#A5CCF3]/15 blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-64 h-64 rounded-full bg-[#387E89]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header — matches workflow section style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-black text-xs font-medium mb-2">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-sm md:text-base text-black/70">
            See what clinicians are saying about their experience with CHEER.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full bg-white rounded-2xl border border-black/10 p-5 md:p-6 hover:shadow-xl hover:border-[#387E89]/30 transition-all duration-300"
            >
              {/* Quote badge — brand gradient */}
              <div className="relative mb-4 w-fit">
                <div className="absolute inset-0 bg-gradient-to-br from-[#143151] to-[#387E89] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm md:text-[15px] text-black/80 leading-relaxed mb-5">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-md flex-shrink-0">
                  <span className="text-white font-bold text-xs">{testimonial.avatar}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-black text-sm truncate">{testimonial.author}</p>
                  <p className="text-xs text-black/60 truncate">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
