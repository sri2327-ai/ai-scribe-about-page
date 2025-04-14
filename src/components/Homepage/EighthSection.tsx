
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EighthSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Auto rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "S10.AI has completely transformed my practice. I save at least 2 hours every day on documentation, which means I can see more patients or actually go home on time. The accuracy is remarkable.",
      name: "Dr. Sarah Johnson",
      role: "Family Medicine",
      image: "/Dr-Lisbeth-Roy.png"
    },
    {
      quote: "As a psychiatrist, my notes are complex and nuanced. S10.AI captures the subtleties of patient interactions in a way other AI scribes simply cannot. It's been a game-changer for my practice.",
      name: "Dr. Michael Chen",
      role: "Psychiatrist",
      image: "/Smriti.jpg"
    },
    {
      quote: "The integration with our Epic system was seamless. S10.AI has reduced our documentation burden by nearly 60%, improved note quality, and increased provider satisfaction scores within our hospital.",
      name: "Dr. Elizabeth Parker",
      role: "Chief Medical Information Officer",
      image: "/Humera.jpeg"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Healthcare providers across specialties are experiencing the benefits of S10.AI 
            in their daily practice.
          </p>
        </motion.div>
        
        <div className="relative">
          <motion.div 
            key={activeTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-8 md:p-10 mx-auto max-w-4xl"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-50"
                />
              </div>
              <div>
                <svg className="w-10 h-10 text-blue-100 mb-3" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.352 27.2c-1.44 0-2.64-.464-3.6-1.392-.96-.928-1.44-2.048-1.44-3.36 0-1.248.432-2.352 1.296-3.312.864-.96 1.92-1.44 3.168-1.44.704 0 1.264.144 1.68.432.416.288.624.64.624 1.056 0 .48-.256.912-.768 1.296-.512.384-1.152.576-1.92.576-.64 0-1.088-.096-1.344-.288-.256-.192-.384-.384-.384-.576 0-.128.048-.256.144-.384.096-.128.144-.256.144-.384 0-.128-.08-.192-.24-.192-.32 0-.72.256-1.2.768-.48.512-.72 1.104-.72 1.776 0 .96.336 1.728 1.008 2.304.672.576 1.648.864 2.928.864 1.536 0 2.888-.464 4.056-1.392 1.168-.928 1.752-2.048 1.752-3.36 0-1.536-.512-2.768-1.536-3.696-1.024-.928-2.448-1.392-4.272-1.392h-.576c-.064 0-.096-.032-.096-.096l.288-1.152c.064-.128.128-.192.192-.192h.672c1.6 0 2.864-.464 3.792-1.392.928-.928 1.392-2.128 1.392-3.6 0-1.12-.4-2-1.2-2.64-.8-.64-1.808-.96-3.024-.96-1.76 0-3.264.656-4.512 1.968-1.248 1.312-1.872 2.96-1.872 4.944 0 .256.016.512.048.768.032.256.112.512.24.768.064.192.096.32.096.384 0 .128-.08.256-.24.384-.16.128-.352.192-.576.192-.32 0-.576-.16-.768-.48-.192-.32-.352-.72-.48-1.2-.128-.48-.192-.96-.192-1.44 0-1.472.4-2.864 1.2-4.176.8-1.312 1.904-2.368 3.312-3.168C5.288.4 6.832 0 8.488 0c1.632 0 3.04.4 4.224 1.2 1.184.8 1.776 1.904 1.776 3.312 0 1.28-.44 2.4-1.32 3.36-.88.96-2.04 1.6-3.48 1.92 1.696.256 3.04.976 4.032 2.16.992 1.184 1.488 2.608 1.488 4.272 0 2.112-.784 3.84-2.352 5.184-1.568 1.344-3.552 2.016-5.952 2.016L9.352 27.2zm16.56 0c-1.44 0-2.64-.464-3.6-1.392-.96-.928-1.44-2.048-1.44-3.36 0-1.248.432-2.352 1.296-3.312.864-.96 1.92-1.44 3.168-1.44.704 0 1.264.144 1.68.432.416.288.624.64.624 1.056 0 .48-.256.912-.768 1.296-.512.384-1.152.576-1.92.576-.64 0-1.088-.096-1.344-.288-.256-.192-.384-.384-.384-.576 0-.128.048-.256.144-.384.096-.128.144-.256.144-.384 0-.128-.08-.192-.24-.192-.32 0-.72.256-1.2.768-.48.512-.72 1.104-.72 1.776 0 .96.336 1.728 1.008 2.304.672.576 1.648.864 2.928.864 1.536 0 2.888-.464 4.056-1.392 1.168-.928 1.752-2.048 1.752-3.36 0-1.536-.512-2.768-1.536-3.696-1.024-.928-2.448-1.392-4.272-1.392h-.576c-.064 0-.096-.032-.096-.096l.288-1.152c.064-.128.128-.192.192-.192h.672c1.6 0 2.864-.464 3.792-1.392.928-.928 1.392-2.128 1.392-3.6 0-1.12-.4-2-1.2-2.64-.8-.64-1.808-.96-3.024-.96-1.76 0-3.264.656-4.512 1.968-1.248 1.312-1.872 2.96-1.872 4.944 0 .256.016.512.048.768.032.256.112.512.24.768.064.192.096.32.096.384 0 .128-.08.256-.24.384-.16.128-.352.192-.576.192-.32 0-.576-.16-.768-.48-.192-.32-.352-.72-.48-1.2-.128-.48-.192-.96-.192-1.44 0-1.472.4-2.864 1.2-4.176.8-1.312 1.904-2.368 3.312-3.168C21.848.4 23.392 0 25.048 0c1.632 0 3.04.4 4.224 1.2 1.184.8 1.776 1.904 1.776 3.312 0 1.28-.44 2.4-1.32 3.36-.88.96-2.04 1.6-3.48 1.92 1.696.256 3.04.976 4.032 2.16.992 1.184 1.488 2.608 1.488 4.272 0 2.112-.784 3.84-2.352 5.184-1.568 1.344-3.552 2.016-5.952 2.016L25.912 27.2z"/>
                </svg>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-500">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={isMounted ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link to="/resources/customers" className="inline-block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-full transition-colors">
              Read More Success Stories
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EighthSection;
