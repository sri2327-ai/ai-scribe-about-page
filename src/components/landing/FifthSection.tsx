import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Phone, ClipboardList, Bell, FileText, ClipboardCheck,
  Heart, BarChart, ArrowRight, Check, X, Zap,
  Clock, TrendingUp, ThumbsUp, DollarSign, Users, ChevronRight, AlertCircle,
  ChevronLeft
} from 'lucide-react';
import { QuoteTestimonial } from './QuoteTestimonial';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import useMediaQuery from '@mui/material/useMediaQuery';

const painPoints = [
  {
    icon: FileText,
    problem: "4+ hours/day spent on documentation",
    detail: "Often after hours (\"pajama time\")",
    color: "text-red-600"
  },
  {
    icon: AlertCircle,
    problem: "30% no-show rate draining your schedule",
    detail: "Empty appointment slots = lost revenue",
    color: "text-red-600"
  },
  {
    icon: Clock,
    problem: "72-hour turnaround for prescription refills",
    detail: "Frustrated patients and delayed care",
    color: "text-red-600"
  },
  {
    icon: Phone,
    problem: "Manual follow-ups delaying patient care",
    detail: "Staff overwhelmed with routine tasks",
    color: "text-red-600"
  },
  {
    icon: DollarSign,
    problem: "Delayed claims leading to slower cash flow",
    detail: "Revenue bottlenecks hurt your bottom line",
    color: "text-red-600"
  }
];

const solutions = [
  {
    icon: Zap,
    solution: "Clinical notes completed in under 1 hour",
    detail: "Often during the visit—no more \"pajama time\"",
    color: "text-[#387E89]"
  },
  {
    icon: Bell,
    solution: "No-shows reduced to 5%",
    detail: "Automated reminders keep schedules full",
    color: "text-[#387E89]"
  },
  {
    icon: ClipboardCheck,
    solution: "Same-day prescription refills",
    detail: "No chasing—automated and instant",
    color: "text-[#387E89]"
  },
  {
    icon: Heart,
    solution: "Automated follow-ups keep patients engaged",
    detail: "Better outcomes without the manual work",
    color: "text-[#387E89]"
  },
  {
    icon: TrendingUp,
    solution: "Real-time claims speed up revenue",
    detail: "Faster payments, improved cash flow",
    color: "text-[#387E89]"
  }
];

const ROIMetrics = [
  { value: "75%", label: "reduction in documentation time", icon: Clock },
  { value: "40%", label: "increase in practice revenue", icon: TrendingUp },
  { value: "95%", label: "patient satisfaction", icon: ThumbsUp },
  { value: "$150,000+", label: "in annual cost savings", icon: DollarSign },
  { value: "30%", label: "increase in patient volume", icon: Users }
];

const combinedTestimonial = {
  quote: "Implementing both CRUSH and BRAVO transformed our practice completely. Documentation time dropped by 75%, patient satisfaction increased by 60%, and our revenue grew by 40% within the first quarter. The seamless integration between both solutions streamlined our entire workflow.",
  author: "Dr. Emily Chen",
  role: "Medical Director, Advanced Care Medical Group",
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
};

const PainPointCard = ({ icon: Icon, problem, detail, color }) => (
  <Card className="p-3 sm:p-4 bg-red-50/50 border-red-100 hover:shadow-lg transition-all duration-300 h-full hover:scale-105">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-full bg-red-100 flex-shrink-0">
        <Icon className={`w-4 h-4 ${color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base leading-tight">{problem}</h4>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{detail}</p>
      </div>
      <X className="w-4 h-4 text-red-500 flex-shrink-0" />
    </div>
  </Card>
);

const SolutionCard = ({ icon: Icon, solution, detail, color }) => (
  <Card className="p-3 sm:p-4 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 border-[#387E89]/20 hover:shadow-lg transition-all duration-300 h-full hover:scale-105">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex-shrink-0">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base leading-tight">{solution}</h4>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{detail}</p>
      </div>
      <Check className="w-4 h-4 text-[#387E89] flex-shrink-0" />
    </div>
  </Card>
);

const ROIMetricCard = ({ icon: Icon, value, label }) => (
  <div className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 border border-[#387E89]/10 flex flex-col justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px] h-[140px] sm:h-[160px]">
    <div className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] w-fit mx-auto mb-3">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
    </div>
    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#143151] mb-2 leading-tight">{value}</div>
    <div className="text-xs sm:text-sm lg:text-base text-gray-600 leading-tight px-1">{label}</div>
  </div>
);

const FifthSection = () => {
  const containerRef = React.useRef(null);
  const roiScrollRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(max-width:1024px)");
  const isMobileOrTablet = useMediaQuery("(max-width:1024px)");

  // Arrow key navigation for ROI cards in mobile and tablet
  useEffect(() => {
    if (!isMobileOrTablet) return;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        const scrollContainer = roiScrollRef.current;
        if (!scrollContainer) return;

        const cardWidth = isMobile ? 176 : 196; // card width + gap (160+16 for mobile, 180+16 for tablet)
        const scrollAmount = cardWidth;

        if (event.key === 'ArrowLeft') {
          scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (event.key === 'ArrowRight') {
          scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOrTablet, isMobile]);

  return (
    <section 
      ref={containerRef} 
      className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
      aria-labelledby="practice-transformation-heading"
    >
      {/* SEO-friendly content for search engines */}
      <div className="sr-only">
        <h1 id="practice-transformation-heading">How BRAVO & CRUSH Transform Your Medical Practice</h1>
        <p>
          Discover how S10.AI's BRAVO AI Staffing Agent and CRUSH AI Medical Scribe work together 
          to revolutionize healthcare practice management, reduce administrative burden, and improve 
          patient outcomes through intelligent automation.
        </p>
      </div>

      <Box sx={{ maxWidth: '1400px', mx: 'auto', width: '100%' }}>
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ 
              mb: 3, 
              color: '#143151', 
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
              lineHeight: 1.2,
              maxWidth: '900px',
              mx: 'auto'
            }}
          >
            Buried in documentation, no-shows, and clunky software that doesn't talk to each other?
          </Typography>
          <Typography
            variant="h5"
            sx={{ 
              color: '#387E89', 
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              fontWeight: 500,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.4
            }}
          >
            S10.AI connects everything—from charting to claims to patient engagement—with real-time, ambient AI that actually works.
          </Typography>
        </div>

        {/* Before & After Section - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Before Section */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                <AlertCircle className="w-4 h-4" />
                Before S10.AI
              </div>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ 
                  mb: 2, 
                  color: '#143151', 
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                }}
              >
                Burnout, Bottlenecks & Lost Revenue
              </Typography>
              <Typography
                variant="body2"
                sx={{ 
                  color: 'gray', 
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  mb: 4
                }}
              >
                Disconnected tools and manual workflows slow you down:
              </Typography>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {painPoints.map((point, index) => (
                <div key={index}>
                  <PainPointCard {...point} />
                </div>
              ))}
            </div>
          </div>

          {/* After Section */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                After BRAVO & CRUSH
              </div>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ 
                  mb: 2, 
                  color: '#143151', 
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                }}
              >
                AI That Works the Way You Do
              </Typography>
              <Typography
                variant="body2"
                sx={{ 
                  color: 'gray', 
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  mb: 4
                }}
              >
                S10.AI's ambient AI platform automates the work behind the scenes:
              </Typography>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {solutions.map((solution, index) => (
                <div key={index}>
                  <SolutionCard {...solution} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROI Section - Fixed Horizontal Alignment */}
        <div className="mb-12 lg:mb-16">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ 
              mb: 2, 
              color: '#143151', 
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
            }}
          >
            What That Means for Your Practice
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ 
              mb: 8, 
              color: '#387E89', 
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
              fontWeight: 500
            }}
          >
            The ROI of Automation with S10.AI:
          </Typography>
          
          {/* Responsive ROI Cards Container */}
          {isMobileOrTablet ? (
            <>
              {/* Horizontal scrollable container for mobile and tablet */}
              <div 
                className="relative w-full"
              >
                <div 
                  className="w-full overflow-x-auto scrollbar-hide" 
                  ref={roiScrollRef}
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  <div className="flex gap-4 pb-4 px-2" style={{ width: 'max-content' }}>
                    {ROIMetrics.map((metric, index) => (
                      <ROIMetricCard key={index} {...metric} />
                    ))}
                  </div>
                </div>
                
                {/* Arrow navigation visual indicators */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </div>
              </div>
              
              {/* Arrow navigation hint for mobile and tablet */}
              <div className="text-center mt-4">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                  <ChevronLeft className="w-3 h-3" />
                  Use arrow keys to navigate
                  <ChevronRight className="w-3 h-3" />
                </p>
              </div>
            </>
          ) : (
            /* Desktop: Centered flex layout with better alignment */
            <div className="flex justify-center items-stretch gap-6 flex-wrap">
              {ROIMetrics.map((metric, index) => (
                <div key={index} className="flex">
                  <ROIMetricCard {...metric} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Testimonial */}
        <Box sx={{ mb: 8 }}>
          <QuoteTestimonial {...combinedTestimonial} />
        </Box>

        {/* CTA */}
        <div className="text-center">
          <motion.button 
            className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Transform Your Practice Today
            <ArrowRight className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </div>
      </Box>
    </section>
  );
};

export default FifthSection;
