import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Phone, ClipboardList, Bell, FileText, ClipboardCheck,
  Heart, BarChart, ArrowRight, Check, X, Zap,
  Clock, TrendingUp, ThumbsUp, DollarSign, Users, ChevronRight, AlertCircle
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
  <Card className="p-2.5 bg-red-50/50 border-red-100 hover:shadow-md transition-all duration-300 h-full">
    <div className="flex items-start gap-2.5">
      <div className="p-1 rounded-full bg-red-100 flex-shrink-0">
        <Icon className={`w-3.5 h-3.5 ${color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 mb-0.5 text-xs sm:text-sm leading-tight">{problem}</h4>
        <p className="text-xs text-gray-600 leading-relaxed">{detail}</p>
      </div>
      <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
    </div>
  </Card>
);

const SolutionCard = ({ icon: Icon, solution, detail, color }) => (
  <Card className="p-2.5 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 border-[#387E89]/20 hover:shadow-md transition-all duration-300 h-full">
    <div className="flex items-start gap-2.5">
      <div className="p-1 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex-shrink-0">
        <Icon className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 mb-0.5 text-xs sm:text-sm leading-tight">{solution}</h4>
        <p className="text-xs text-gray-600 leading-relaxed">{detail}</p>
      </div>
      <Check className="w-3.5 h-3.5 text-[#387E89] flex-shrink-0" />
    </div>
  </Card>
);

const ROIMetricCard = ({ icon: Icon, value, label }) => (
  <div className="text-center p-3 rounded-lg bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 border border-[#387E89]/10 flex-1 min-w-[140px] max-w-[180px]">
    <div className="p-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] w-fit mx-auto mb-2">
      <Icon className="w-4 h-4 text-white" />
    </div>
    <div className="text-base sm:text-lg font-bold text-[#143151] mb-1 leading-tight">{value}</div>
    <div className="text-xs sm:text-sm text-gray-600 leading-tight">{label}</div>
  </div>
);

const FifthSection = () => {
  const containerRef = React.useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  useEffect(() => {
    const moveRightKeyframe = `
    @keyframes moveRight {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(10px); }
    }`;
    const styleElement = document.createElement('style');
    styleElement.textContent = moveRightKeyframe;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="py-8 px-4 md:px-8 bg-white overflow-hidden min-h-screen flex flex-col justify-center"
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
        {/* Hero Section - Compact */}
        <div className="text-center mb-8">
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ 
              mb: 2, 
              color: '#143151', 
              fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' },
              lineHeight: 1.2
            }}
          >
            Buried in documentation, no-shows, and clunky software that doesn't talk to each other?
          </Typography>
          <Typography
            variant="h5"
            sx={{ 
              color: '#387E89', 
              fontSize: { xs: '0.875rem', sm: '1rem' },
              fontWeight: 500,
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            S10.AI connects everything—from charting to claims to patient engagement—with real-time, ambient AI that actually works.
          </Typography>
        </div>

        {/* Before & After Side by Side Section - Compact */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-2 gap-8'} mb-8`}>
          {/* Before Section */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-2.5 py-1 rounded-full text-xs font-medium mb-2">
                <AlertCircle className="w-3 h-3" />
                Before S10.AI
              </div>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ 
                  mb: 1.5, 
                  color: '#143151', 
                  fontSize: { xs: '1rem', sm: '1.25rem' }
                }}
              >
                Burnout, Bottlenecks & Lost Revenue
              </Typography>
              <Typography
                variant="body2"
                sx={{ 
                  color: 'gray', 
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  mb: 3
                }}
              >
                Disconnected tools and manual workflows slow you down:
              </Typography>
            </div>

            <div className="space-y-2">
              {painPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <PainPointCard {...point} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* After Section */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-2.5 py-1 rounded-full text-xs font-medium mb-2">
                <Zap className="w-3 h-3" />
                After BRAVO & CRUSH
              </div>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ 
                  mb: 1.5, 
                  color: '#143151', 
                  fontSize: { xs: '1rem', sm: '1.25rem' }
                }}
              >
                AI That Works the Way You Do
              </Typography>
              <Typography
                variant="body2"
                sx={{ 
                  color: 'gray', 
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  mb: 3
                }}
              >
                S10.AI's ambient AI platform automates the work behind the scenes:
              </Typography>
            </div>

            <div className="space-y-2">
              {solutions.map((solution, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <SolutionCard {...solution} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ROI Section - Compact Single Row */}
        <div className="mb-6">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ 
              mb: 1.5, 
              color: '#143151', 
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
          >
            What That Means for Your Practice
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ 
              mb: 4, 
              color: '#387E89', 
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              fontWeight: 500
            }}
          >
            The ROI of Automation with S10.AI:
          </Typography>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {ROIMetrics.map((metric, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <ROIMetricCard {...metric} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial - Compact */}
        <Box sx={{ mb: 6 }}>
          <QuoteTestimonial {...combinedTestimonial} />
        </Box>

        {/* CTA - Compact */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Transform Your Practice Today
            <ArrowRight className="inline-block ml-2 w-4 h-4" />
          </button>
        </div>
      </Box>
    </section>
  );
};

export default FifthSection;
