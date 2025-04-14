
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const EighthSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const blogs = [
    {
      title: "The Evolution of AI in Healthcare Documentation",
      excerpt: "Explore how artificial intelligence has transformed medical documentation over the past decade.",
      image: "/Rectangle 234.png",
      date: "April 5, 2025",
      readTime: "5 min read",
      link: "/resources/blog"
    },
    {
      title: "Reducing Physician Burnout Through AI Assistance",
      excerpt: "Discover how AI scribes are helping physicians reclaim their time and reduce administrative burden.",
      image: "/Psychotherapy-Documentation.png",
      date: "March 28, 2025",
      readTime: "4 min read",
      link: "/resources/blog"
    },
    {
      title: "The Future of Patient Care with AI Agents",
      excerpt: "Learn how AI patient care agents are improving follow-up care and patient satisfaction.",
      image: "/ImprovePatientCare.webp",
      date: "March 15, 2025",
      readTime: "6 min read",
      link: "/resources/blog"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Insights</h2>
            <p className="text-gray-600">
              Stay up-to-date with the latest in healthcare AI and technology.
            </p>
          </div>
          <a 
            href="/resources/blog"
            className="text-blue-500 font-medium hover:underline inline-flex items-center mt-4 md:mt-0"
          >
            View all articles 
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div 
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <a href={blog.link} className="block">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              </a>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                <a href={blog.link} className="block">
                  <h3 className="text-xl font-bold mb-2 hover:text-blue-500 transition-colors">{blog.title}</h3>
                </a>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <a 
                  href={blog.link}
                  className="text-blue-500 font-medium hover:underline inline-flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EighthSection;
