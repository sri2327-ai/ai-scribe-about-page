import React, { useRef, useEffect, useState } from 'react';
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
    problem: "4+ hours/day on documentation",
    color: "text-red-600"
  },
  {
    icon: AlertCircle,
    problem: "30% no-show rate draining your schedule",
    color: "text-red-600"
  },
  {
    icon: Clock,
    problem: "72-hour turnaround for refills",
    color: "text-red-600"
  },
  {
    icon: Phone,
    problem: "Manual follow-ups delaying care",
    color: "text-red-600"
  },
  {
    icon: DollarSign,
    problem: "Delayed claims = slower cash flow",
    color: "text-red-600"
  }
];

const solutions = [
  {
    icon: Zap,
    solution: "Notes done in real-time during visits",
    color: "text-[#387E89]"
  },
  {
    icon: Bell,
    solution: "No-shows cut to 5% with auto-reminders",
    color: "text-[#387E89]"
  },
  {
    icon: ClipboardCheck,
    solution: "Same-day prescription refills",
    color: "text-[#387E89]"
  },
  {
    icon: Heart,
    solution: "Automated follow-ups keep patients engaged",
    color: "text-[#387E89]"
  },
  {
    icon: TrendingUp,
    solution: "Real-time claims = faster revenue",
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

const PainPointCard = ({ icon: Icon, problem, color }) => (
  <Card className="relative overflow-hidden bg-gray-50 border-0 rounded-xl h-full">
    <div className="p-4 sm:p-6 flex items-center gap-4">
      <div className="p-3 rounded-xl bg-red-100">
        <Icon className="w-5 h-5 text-red-600" />
      </div>
      <h4 className="font-medium text-gray-900 text-sm sm:text-base leading-tight flex-1">{problem}</h4>
      <div className="p-2 rounded-full bg-red-50">
        <X className="w-4 h-4 text-red-500" />
      </div>
    </div>
  </Card>
);

const SolutionCard = ({ icon: Icon, solution, color }) => (
  <Card className="relative overflow-hidden bg-teal-50 border-0 rounded-xl h-full">
    <div className="p-4 sm:p-6 flex items-center gap-4">
      <div className="p-3 rounded-xl bg-teal-600">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h4 className="font-medium text-gray-900 text-sm sm:text-base leading-tight flex-1">{solution}</h4>
      <div className="p-2 rounded-full bg-green-50">
        <Check className="w-4 h-4 text-green-600" />
      </div>
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
  const [activeView, setActiveView] = useState('before');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(max-width:1024px)");
  const isMobileOrTablet = useMediaQuery("(max-width:1024px)");

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Touch handlers for swipe functionality
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeView === 'before') {
      toggleView();
    }
    if (isRightSwipe && activeView === 'after') {
      toggleView();
    }
  };

  // Enhanced arrow key navigation
  useEffect(() => {
    if (!isMobileOrTablet) return;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        
        // Handle before/after navigation
        if (event.key === 'ArrowLeft' && activeView === 'after') {
          toggleView();
          return;
        }
        if (event.key === 'ArrowRight' && activeView === 'before') {
          toggleView();
          return;
        }

        // Handle ROI scroll if in view
        const scrollContainer = roiScrollRef.current;
        if (scrollContainer) {
          const cardWidth = isMobile ? 176 : 196;
          const scrollAmount = cardWidth;

          if (event.key === 'ArrowLeft') {
            scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
          } else if (event.key === 'ArrowRight') {
            scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.setAttribute('tabindex', '0');
      container.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        container.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isMobileOrTablet, isMobile, activeView]);

  // ROI scroll handlers
  const scrollLeft = () => {
    if (roiScrollRef.current) {
      const cardWidth = isMobile ? 176 : 196;
      roiScrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (roiScrollRef.current) {
      const cardWidth = isMobile ? 176 : 196;
      roiScrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  // Enhanced view toggle with transition state
  const toggleView = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveView(activeView === 'before' ? 'after' : 'before');
    
    // Reset transition state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section 
      ref={containerRef} 
      className="py-8 sm:py-12 bg-white min-h-screen flex flex-col justify-center overflow-hidden focus:outline-none"
      aria-labelledby="practice-transformation-heading"
      tabIndex={0}
    >
      {/* SEO-friendly content for search engines */}
      <div className="sr-only">
        <h1 id="practice-transformation-heading">How S10.AI Transforms Your Medical Practice</h1>
        <p>
          Discover how S10.AI's platform revolutionizes healthcare practice management, reducing administrative burden and improving patient outcomes through intelligent automation.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <Typography
            variant="h3"
            fontWeight="600"
            sx={{ 
              mb: 3, 
              color: '#1d1d1f', 
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.1,
              maxWidth: '800px',
              mx: 'auto',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Before S10.AI vs After S10.AI
          </Typography>
          <Typography
            variant="h6"
            sx={{ 
              color: '#6e6e73', 
              fontSize: { xs: '1.125rem', sm: '1.25rem' },
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.4,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            See how AI transforms your practice workflow
          </Typography>
        </div>

        {/* Desktop Two-Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Before Section */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <Typography
                variant="h4"
                fontWeight="600"
                sx={{ 
                  mb: 2, 
                  color: '#1d1d1f', 
                  fontSize: '1.75rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                Before S10.AI
              </Typography>
              <Typography
                variant="h6"
                sx={{ 
                  color: '#d70015', 
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  mb: 4,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                Burnout, Bottlenecks & Lost Revenue
              </Typography>
            </div>

            <div className="space-y-3">
              {painPoints.map((point, index) => (
                <PainPointCard key={index} {...point} />
              ))}
            </div>
          </div>

          {/* After Section */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <Typography
                variant="h4"
                fontWeight="600"
                sx={{ 
                  mb: 2, 
                  color: '#1d1d1f', 
                  fontSize: '1.75rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                After S10.AI
              </Typography>
              <Typography
                variant="h6"
                sx={{ 
                  color: '#387E89', 
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  mb: 4,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
              >
                AI That Works the Way You Do
              </Typography>
            </div>

            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <SolutionCard key={index} {...solution} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Single Column with Toggle */}
        <div className="lg:hidden">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-2xl p-1 flex">
              <button
                onClick={() => !isTransitioning && setActiveView('before')}
                disabled={isTransitioning}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeView === 'before' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600'
                }`}
                aria-label="View problems before S10.AI"
                aria-pressed={activeView === 'before'}
              >
                Before S10.AI
              </button>
              <button
                onClick={() => !isTransitioning && setActiveView('after')}
                disabled={isTransitioning}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeView === 'after' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600'
                }`}
                aria-label="View solutions with S10.AI"
                aria-pressed={activeView === 'after'}
              >
                After S10.AI
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="relative overflow-hidden">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-6"
            >
              {activeView === 'before' ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <Typography
                      variant="h4"
                      fontWeight="600"
                      sx={{ 
                        mb: 2, 
                        color: '#1d1d1f', 
                        fontSize: { xs: '1.5rem', sm: '1.75rem' },
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}
                    >
                      Before S10.AI
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ 
                        color: '#d70015', 
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        mb: 4,
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}
                    >
                      Burnout, Bottlenecks & Lost Revenue
                    </Typography>
                  </div>

                  <div className="space-y-3">
                    {painPoints.map((point, index) => (
                      <PainPointCard key={index} {...point} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <Typography
                      variant="h4"
                      fontWeight="600"
                      sx={{ 
                        mb: 2, 
                        color: '#1d1d1f', 
                        fontSize: { xs: '1.5rem', sm: '1.75rem' },
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}
                    >
                      After S10.AI
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ 
                        color: '#387E89', 
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        mb: 4,
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}
                    >
                      AI That Works the Way You Do
                    </Typography>
                  </div>

                  <div className="space-y-3">
                    {solutions.map((solution, index) => (
                      <SolutionCard key={index} {...solution} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

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
              {/* Enhanced horizontal scrollable container */}
              <div className="relative w-full" role="region" aria-label="ROI metrics carousel">
                <div 
                  className="w-full overflow-x-auto roi-scroll-container snap-x snap-mandatory" 
                  ref={roiScrollRef}
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    scrollBehavior: 'smooth'
                  }}
                  role="list"
                >
                  <style>
                    {`
                      .roi-scroll-container::-webkit-scrollbar {
                        display: none;
                      }
                    `}
                  </style>
                  <div className="flex gap-4 pb-4 px-2" style={{ width: 'max-content' }}>
                    {ROIMetrics.map((metric, index) => (
                      <div key={index} className="snap-center" role="listitem">
                        <ROIMetricCard {...metric} />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Enhanced navigation buttons with better accessibility */}
                <button
                  onClick={scrollLeft}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#387E89]/50 active:scale-95"
                  aria-label="Scroll to previous ROI metrics"
                  tabIndex={0}
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  onClick={scrollRight}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#387E89]/50 active:scale-95"
                  aria-label="Scroll to next ROI metrics"
                  tabIndex={0}
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
              </div>
              
              {/* Enhanced navigation hint */}
              <div className="text-center mt-4">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                  <ChevronLeft className="w-3 h-3" />
                  Swipe, use arrow keys, or click arrows to navigate
                  <ChevronRight className="w-3 h-3" />
                </p>
              </div>
            </>
          ) : (
            /* Desktop: Centered flex layout */
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

        {/* CTA Section with added text */}
        <div className="text-center">
          <Typography
            variant="h5"
            sx={{ 
              mb: 6,
              color: '#143151', 
              fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem' },
              fontWeight: 600,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Curious how much time and revenue you could save?
          </Typography>
          
          <motion.button 
            className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Calculate Your ROI
            <ArrowRight className="inline-block ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
