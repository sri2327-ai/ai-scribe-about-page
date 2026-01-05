import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "CHEER has revolutionized how we deliver care. The platform is intuitive, and our patients love the seamless experience.",
    author: "Dr. Sarah Mitchell",
    role: "Family Medicine Physician",
    avatar: "SM",
    rating: 5,
  },
  {
    quote: "The integration with our EHR is flawless. I can focus on my patients instead of wrestling with technology.",
    author: "Dr. James Chen",
    role: "Cardiologist",
    avatar: "JC",
    rating: 5,
  },
  {
    quote: "Our no-show rate dropped by 35% after implementing CHEER. The automated reminders are a game-changer.",
    author: "Maria Rodriguez",
    role: "Practice Manager",
    avatar: "MR",
    rating: 5,
  },
];

export const CheerTestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#F5F9FF]">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #387E89 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#387E89]/10 text-[#387E89] text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#143151] mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-lg text-[#5192AE]">
            See what clinicians are saying about their experience with CHEER
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#387E89]/30 shadow-sm hover:shadow-xl transition-all duration-300 relative">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-lg">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-[#143151] leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#143151] to-[#387E89] flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#143151]">{testimonial.author}</p>
                    <p className="text-sm text-[#5192AE]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-[#5192AE] mb-6">Trusted by leading healthcare organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Healthcare System A', 'Medical Group B', 'Clinic Network C', 'Health Partners D'].map((name, i) => (
              <div key={i} className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <span className="font-semibold text-[#143151] text-sm">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
