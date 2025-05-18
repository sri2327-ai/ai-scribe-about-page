
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, Heart, Users, TrendingUp, FileText, Calendar } from "lucide-react";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChemicalBurnEffect } from "@/components/ui/chemical-burn-effect";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const FinalCTA: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Stats data for reuse
  const statsData = [
    { icon: <Clock className="h-4 w-4 text-teal-300" />, value: "75%", label: "Less documentation time" },
    { icon: <DollarSign className="h-4 w-4 text-teal-300" />, value: "40%", label: "Increased revenue" },
    { icon: <Heart className="h-4 w-4 text-teal-300" />, value: "95%", label: "Patient satisfaction" },
    { icon: <TrendingUp className="h-4 w-4 text-teal-300" />, value: "$150K+", label: "Annual savings" },
    { icon: <Users className="h-4 w-4 text-teal-300" />, value: "30%", label: "More patients" }
  ];
  
  // Renders a single stat box with improved styling
  const renderStatBox = (item: typeof statsData[0], idx: number) => (
    <motion.div 
      className={cn(
        "flex flex-col items-center justify-center py-2 px-3 border border-white/10 rounded-lg backdrop-blur-sm",
        "bg-gradient-to-br from-gray-900/80 to-black/90 w-full h-full"
      )}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
    >
      <div className="mb-1">{item.icon}</div>
      <span className="text-md sm:text-lg font-bold text-white">{item.value}</span>
      <span className="text-xs text-white/70 text-center leading-tight">{item.label}</span>
    </motion.div>
  );
  
  return (
    <section id="contact" className="bg-black text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 rounded-t-2xl shadow-2xl mt-0 relative overflow-hidden">
      {/* Background effect for visual interest */}
      <ChemicalBurnEffect 
        className="opacity-30" 
        colors={['#0d9488', '#0d4a6b', '#164e63']} 
        intensity={0.4}
      />
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 md:mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Experience the S10.AI Transformation?
        </motion.h2>
        
        {/* ROI Stats Section - Responsive Layout */}
        <motion.div 
          className="mb-6 md:mb-10 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* For mobile view: Enhanced Carousel experience */}
          {isMobile ? (
            <div className="mt-2 mb-6">
              <ResponsiveCarousel
                items={statsData}
                renderItem={renderStatBox}
                columnsDesktop={5}
                columnsTablet={3}
                columnsMobile={2}
                showControls={true}
                itemWidth={{ xs: 140, sm: 150 }}
                itemHeight={{ xs: 80, sm: 85 }}
                gap={8}
                autoPlay={true}
                autoPlayInterval={4000}
                cardClassName="bg-transparent border-0"
                className="mx-auto"
              />
            </div>
          ) : (
            // Desktop: Single Row Grid
            <div className="grid grid-cols-5 gap-2 sm:gap-3 w-full max-w-4xl justify-center mx-auto">
              {statsData.map((item, idx) => (
                <div key={idx} className="h-[85px]">
                  {renderStatBox(item, idx)}
                </div>
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
            className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed text-gray-300 font-normal"
          >
            Reduce burnout, enhance patient care, and reclaim your time. Discover how S10.AI can be tailored to your practice's unique needs.
          </motion.p>
        </motion.div>
        
        {/* CTA Buttons - Improved layout and visual hierarchy */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href="#" 
            className={cn(
              "bg-gradient-to-r from-teal-600 to-blue-700 text-white font-medium",
              "py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg", 
              "text-base sm:text-lg flex items-center justify-center gap-2",
              "w-full sm:w-auto hover:opacity-90 transition-all duration-300",
              "border border-white/10"
            )}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar className="h-4 w-4" />
            Schedule Your Demo
          </motion.a>
          
          <motion.a 
            href="#" 
            className={cn(
              "bg-black border border-white/20 text-white font-medium", 
              "py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg",
              "text-base flex items-center justify-center gap-2",
              "w-full sm:w-auto hover:bg-gray-900 transition-all duration-300"
            )}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FileText className="h-4 w-4" />
            View ROI Case Studies
          </motion.a>
        </motion.div>
        
        <motion.p 
          className="mt-5 text-sm text-gray-400 font-normal"
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
