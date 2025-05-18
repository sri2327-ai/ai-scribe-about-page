
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, Heart, Users, TrendingUp, FileText, Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "./Card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { shadowStyles } from "@/lib/shadow-utils";
import { StarBorder } from "@/components/ui/star-border";

export const FinalCTA: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Define ROI stats with their icons and values
  const roiStats = [
    {
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
      value: "75%",
      label: "Less documentation time"
    },
    {
      icon: <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
      value: "40%",
      label: "Increased revenue"
    },
    {
      icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
      value: "95%",
      label: "Patient satisfaction"
    },
    {
      icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
      value: "$150K+",
      label: "Annual savings"
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
      value: "30%",
      label: "More patients"
    }
  ];

  return (
    <section id="contact" className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 rounded-t-2xl shadow-2xl mt-0 relative overflow-hidden">
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-teal-900 opacity-10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-60 -left-40 w-[400px] h-[400px] bg-blue-900 opacity-10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Experience the S10.AI Transformation?
        </motion.h2>
        
        {/* ROI Stats Section - Responsive layout with carousel for mobile */}
        <motion.div 
          className="mb-8 md:mb-12 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isMobile ? (
            <Carousel
              opts={{ loop: true, align: "center" }}
              className="w-full max-w-sm mx-auto"
            >
              <CarouselContent>
                {roiStats.map((stat, index) => (
                  <CarouselItem key={index} className="basis-4/5 pl-1">
                    <motion.div 
                      className="flex flex-col items-center justify-center p-3 rounded-lg border border-white/20 bg-black/60 backdrop-blur-sm w-full h-[100px]"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
                    >
                      <div className="flex items-center justify-center mb-1">
                        {stat.icon}
                      </div>
                      <span className="text-base sm:text-lg font-bold text-white">{stat.value}</span>
                      <span className="text-xs text-white/80">{stat.label}</span>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="relative static transform-none h-8 w-8 bg-black border border-white/30" />
                <CarouselNext className="relative static transform-none h-8 w-8 bg-black border border-white/30" />
              </div>
            </Carousel>
          ) : (
            <div className="grid grid-cols-5 gap-3 w-full justify-items-center">
              {roiStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center justify-center p-2 border border-white/20 rounded-lg bg-black/60 backdrop-blur-sm w-[95px] h-[95px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
                >
                  <div className="flex items-center justify-center mb-1">
                    {stat.icon}
                  </div>
                  <span className="text-base lg:text-lg font-bold text-white">{stat.value}</span>
                  <span className="text-[10px] md:text-xs text-white/80 text-center">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
        
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 leading-relaxed text-gray-300 font-normal"
          >
            Reduce burnout, enhance patient care, and reclaim your time. Discover how S10.AI can be tailored to your practice's unique needs.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <StarBorder color="#14B8A6">
            <motion.a 
              href="#" 
              className="flex items-center justify-center gap-2 font-medium text-base sm:text-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Calendar className="h-5 w-5" />
              Schedule Your Demo
            </motion.a>
          </StarBorder>
          
          <motion.a 
            href="#" 
            className={`bg-black border border-white/30 text-white font-medium py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300 ${shadowStyles.subtle}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FileText className="h-5 w-5" />
            View ROI Case Studies
          </motion.a>
        </motion.div>
        
        <motion.p 
          className="mt-6 text-sm sm:text-md text-gray-400 font-normal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Same-day demo appointments available. <a href="#" className="underline hover:text-teal-300 transition-colors">Contact our specialists</a> with any questions.
        </motion.p>
      </div>
    </section>
  );
};
