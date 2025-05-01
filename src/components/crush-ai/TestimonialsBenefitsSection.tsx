
import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "BRAVO has completely transformed our patient scheduling process. We've reduced no-shows by 35% and our staff can focus on providing care instead of managing calendars.",
    author: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    company: "Westside Medical Group",
    image: "/placeholder.svg"
  },
  {
    quote: "The seamless EHR integration made implementation a breeze. Our practice saved over 25 hours per week on administrative tasks within the first month.",
    author: "Mark Peterson",
    role: "Practice Manager",
    company: "Eastside Family Practice",
    image: "/placeholder.svg"
  },
  {
    quote: "Our patients love the 24/7 scheduling options, and we've increased our new patient acquisition by 20% since implementing BRAVO.",
    author: "Dr. Michael Chen",
    role: "Founder",
    company: "North Valley Health",
    image: "/placeholder.svg"
  }
];

interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "50% Reduction in Administrative Work",
    description: "Free your staff from routine tasks and let them focus on providing exceptional patient care"
  },
  {
    title: "30% Decrease in No-Shows",
    description: "Smart reminders and follow-ups ensure patients remember their appointments"
  },
  {
    title: "24/7 Availability",
    description: "Patients can schedule appointments anytime, improving satisfaction and retention"
  },
  {
    title: "Seamless EHR Integration",
    description: "Works with your existing systems without disrupting your current workflows"
  }
];

// Memoized testimonial card for better performance
const TestimonialCard = memo(({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="bg-white border-none shadow-md h-full">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
          </div>
          
          <div className="mt-auto flex items-center gap-3">
            <Avatar>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                {testimonial.author.charAt(0)}
              </div>
            </Avatar>
            <div>
              <p className="font-medium text-gray-900">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

// Memoized benefit item for better performance
const BenefitItem = memo(({ benefit, index }: { benefit: Benefit, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-md"
      style={{ willChange: 'transform, opacity' }}
    >
      <h3 className="text-lg font-bold text-blue-800 mb-2">{benefit.title}</h3>
      <p className="text-gray-600">{benefit.description}</p>
    </motion.div>
  );
});

BenefitItem.displayName = 'BenefitItem';

export const TestimonialsBenefitsSection = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Real Results From Real Practices
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how healthcare providers like you are transforming their practices with BRAVO
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className={activeIndex === index ? "block" : "hidden md:block opacity-70"}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
              
              <div className="flex justify-center gap-2 mt-6 md:hidden">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits You'll Experience</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <BenefitItem key={index} benefit={benefit} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

TestimonialsBenefitsSection.displayName = 'TestimonialsBenefitsSection';
