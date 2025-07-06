
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
  <Card className="p-4 sm:p-6 bg-red-50/50 border-red-100 hover:shadow-lg transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-full bg-red-100 flex-shrink-0">
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 mb-1">{problem}</h4>
        <p className="text-sm text-gray-600">{detail}</p>
      </div>
      <X className="w-5 h-5 text-red-500 flex-shrink-0" />
    </div>
  </Card>
);

const SolutionCard = ({ icon: Icon, solution, detail, color }) => (
  <Card className="p-4 sm:p-6 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 border-[#387E89]/20 hover:shadow-lg transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex-shrink-0">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 mb-1">{solution}</h4>
        <p className="text-sm text-gray-600">{detail}</p>
      </div>
      <Check className="w-5 h-5 text-[#387E89] flex-shrink-0" />
    </div>
  </Card>
);

const ROIMetricCard = ({ icon: Icon, value, label }) => (
  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 border border-[#387E89]/10">
    <div className="p-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] w-fit mx-auto mb-3">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div className="text-2xl sm:text-3xl font-bold text-[#143151] mb-1">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

const FifthSection = () => {
  const containerRef = React.useRef(null);
  const isMobile = useMediaQuery("(max-width:600px)");

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
      className="py-16 px-4 md:px-8 bg-white overflow-hidden"
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

      <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ 
              mb: 4, 
              color: '#143151', 
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
              lineHeight: 1.2
            }}
          >
            Buried in documentation, no-shows, and clunky software that doesn't talk to each other?
          </Typography>
          <Typography
            variant="h5"
            sx={{ 
              color: '#387E89', 
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              fontWeight: 500,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            S10.AI connects everything—from charting to claims to patient engagement—with real-time, ambient AI that actually works.
          </Typography>
        </div>

        {/* Before Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <AlertCircle className="w-4 h-4" />
              Before S10.AI
            </div>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ 
                mb: 2, 
                color: '#143151', 
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}
            >
              Burnout, Bottlenecks & Lost Revenue
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                color: 'gray', 
                fontSize: { xs: '0.95rem', sm: '1.1rem' },
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Disconnected tools and manual workflows slow you down and frustrate your staff:
            </Typography>
          </div>

          <div className="grid gap-4 md:gap-6">
            {painPoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PainPointCard {...point} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Transition Arrow */}
        <div className="flex justify-center mb-16">
          <div className="bg-gradient-to-r from-[#143151] to-[#387E89] p-4 rounded-full">
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* After Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              After BRAVO & CRUSH
            </div>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ 
                mb: 2, 
                color: '#143151', 
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}
            >
              AI That Works the Way You Do
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                color: 'gray', 
                fontSize: { xs: '0.95rem', sm: '1.1rem' },
                maxWidth: '700px',
                mx: 'auto'
              }}
            >
              S10.AI's ambient AI platform automates the work behind the scenes so your team can focus on care:
            </Typography>
          </div>

          <div className="grid gap-4 md:gap-6">
            {solutions.map((solution, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SolutionCard {...solution} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="mb-16">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ 
              mb: 2, 
              color: '#143151', 
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
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
              fontSize: { xs: '1rem', sm: '1.15rem' },
              fontWeight: 500
            }}
          >
            The ROI of Automation with S10.AI:
          </Typography>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {ROIMetrics.map((metric, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ROIMetricCard {...metric} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <Box sx={{ mb: 8 }}>
          <QuoteTestimonial {...combinedTestimonial} />
        </Box>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Transform Your Practice Today
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </Box>
    </section>
  );
};

export default FifthSection;
