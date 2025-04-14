
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SeventhSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const testimonials = [
    {
      quote: "S10.AI has revolutionized how I document patient encounters. I'm saving at least 2 hours daily, which means more time with my family.",
      author: "Dr. Michael Chen",
      title: "Cardiologist",
      image: "/Dr-Lisbeth-Roy.png"
    },
    {
      quote: "The accuracy of CRUSH is impressive. It understands medical terminology better than any other solution I've tried, even for complex neurological conditions.",
      author: "Dr. Lisbeth Roy",
      title: "Neurologist",
      image: "/Humera.jpeg"
    },
    {
      quote: "BRAVO has transformed our patient follow-ups. Our satisfaction scores are up 32% since implementation, and patients love the consistent communication.",
      author: "Samantha Willis",
      title: "Practice Manager",
      image: "/Smriti.jpg"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Healthcare professionals across the country are experiencing the benefits of S10.AI solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-white rounded-lg shadow p-6 flex flex-col"
            >
              <div className="mb-4 flex-grow">
                <svg className="w-8 h-8 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <a 
            href="/resources/customers"
            className="text-blue-500 font-medium hover:underline inline-flex items-center"
          >
            View more customer stories 
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SeventhSection;
