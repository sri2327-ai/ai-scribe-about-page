import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Phone, ClipboardList, Bell, FileText, ClipboardCheck,
  Heart, BarChart, ArrowRight, Check, X,
  Clock, TrendingUp, ThumbsUp, DollarSign, Users, ChevronRight
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
import { YouTubeFacade } from '@/components/ui/youtube-facade';

const beforeAfterComparison = {
  before: {
    title: "Before S10.AI",
    metrics: [
      "4+ hours daily on documentation",
      "30% no-show rate",
      "72 hours for prescription refills",
      "Manual patient follow-ups",
      "Delayed claim submissions"
    ]
  },
  after: {
    title: "After CRUSH & BRAVO",
    metrics: [
      "1 hour or less on documentation",
      "5% no-show rate",
      "Same-day prescription processing",
      "Automated patient engagement",
      "Real-time claim processing"
    ]
  }
};

const cardIcons = [
  { id: 1, icon: Phone, title: "Instant Call Handling", description: "BRAVO answers patient inquiries, schedules appointments, and integrates with EHR, SIP, and PMS platforms." },
  { id: 2, icon: ClipboardList, title: "Effortless Pre-Visit Workflow", description: "Automates patient intake, insurance verification, and medical history updates for seamless visits." },
  { id: 3, icon: Bell, title: "Reduce No-Shows & Improve Engagement", description: "Sends real-time confirmations, automated reminders, and follow-ups to maximize appointment adherence." },
  { id: 4, icon: FileText, title: "Real-Time AI Medical Scribe", description: "CRUSH captures and transcribes physician-patient interactions, generating structured clinical notes instantly." },
  { id: 5, icon: ClipboardCheck, title: "Automate Repetitive Administrative Tasks", description: "Streamlines prescription refills, referrals, lab orders, AI-powered clinical notes, and visit summaries to reduce staff workload." },
  { id: 6, icon: Heart, title: "Post-Visit Patient Support", description: "BRAVO automates follow-ups, medication adherence, and preventive care reminders to improve patient outcomes." },
  { id: 7, icon: BarChart, title: "Accelerate Revenue Cycle Management", description: "Enhances insurance verification, claim processing, and payment tracking for faster reimbursements and improved financial outcomes." },
];

const ROIMetrics = {
  timeReduction: { value: "75%", icon: Clock, label: "reduction in documentation time" },
  revenueIncrease: { value: "40%", icon: TrendingUp, label: "increase in practice revenue" },
  patientSatisfaction: { value: "95%", icon: ThumbsUp, label: "patient satisfaction rates" },
  annualSavings: { value: "$150,000+", icon: DollarSign, label: "annual cost savings" },
  patientVolume: { value: "30%", icon: Users, label: "increase in patient volume" }
};

const combinedTestimonial = {
  quote: "Implementing both CRUSH and BRAVO transformed our practice completely. Documentation time dropped by 75%, patient satisfaction increased by 60%, and our revenue grew by 40% within the first quarter. The seamless integration between both solutions streamlined our entire workflow.",
  author: "Dr. Emily Chen",
  role: "Medical Director, Advanced Care Medical Group",
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
};

const WorkflowCard = ({ icon: Icon, title, description, number }) => {
  return (
    <Card className="relative h-[280px] p-4 sm:p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 bg-white overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] flex-shrink-0">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-xs sm:text-sm leading-relaxed text-gray-600 mb-4">{description}</p>
      </div>
      
      {/* Step number circle with consistent positioning */}
      <div 
        className="absolute -bottom-2 -right-2 text-[28px] font-bold text-white bg-gradient-to-r from-[#143151] to-[#387E89] rounded-full w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex items-center justify-center shadow-md"
      >
        {number}
      </div>
      
      {/* Left border animation on hover */}
      <motion.div 
        className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#143151] to-[#387E89]"
        initial={{ height: 0 }}
        whileHover={{ height: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </Card>
  );
};

const ROIMetricCard = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center p-2 sm:p-3 md:p-4 rounded-xl bg-gradient-to-br from-[#143151]/[0.05] to-[#387E89]/[0.07] border border-[#387E89]/10 w-full h-full shadow-sm hover:shadow-md transition-all">
    <div className="p-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] mb-1 sm:mb-2">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
    </div>
    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#143151] mb-0 sm:mb-1">{value}</div>
    <div className="text-xs sm:text-sm text-gray-800 text-center">{label}</div>
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

  const beforeAfterCards = [
    {
      type: 'before',
      title: beforeAfterComparison.before.title,
      metrics: beforeAfterComparison.before.metrics,
      color: 'red',
    },
    {
      type: 'after',
      title: beforeAfterComparison.after.title,
      metrics: beforeAfterComparison.after.metrics,
      color: 'blue',
    },
  ];

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
        
        <section>
          <h2>Healthcare Practice Transformation: Before vs After S10.AI</h2>
          
          <article>
            <h3>Before S10.AI Implementation</h3>
            <p>Healthcare practices face numerous challenges that impact efficiency and patient care:</p>
            <ul>
              <li>4+ hours daily on documentation - excessive time on manual charting reducing patient interaction</li>
              <li>30% no-show rate - high patient no-shows due to inadequate appointment reminders</li>
              <li>72 hours for prescription refills - slow prescription processing impacting patient satisfaction</li>
              <li>Manual patient follow-ups - time-consuming manual processes for patient communication</li>
              <li>Delayed claim submissions - manual insurance processing affecting practice revenue cycles</li>
            </ul>
          </article>
          
          <article>
            <h3>After CRUSH & BRAVO Implementation</h3>
            <p>S10.AI solutions deliver measurable improvements across all practice operations:</p>
            <ul>
              <li>1 hour or less on documentation - AI-powered documentation reduces charting time by 75%</li>
              <li>5% no-show rate - automated appointment reminders reduce no-shows by 83%</li>
              <li>Same-day prescription processing - instant prescription management improves patient satisfaction</li>
              <li>Automated patient engagement - AI-driven follow-ups enhance patient outcomes</li>
              <li>Real-time claim processing - automated insurance verification accelerates revenue cycles</li>
            </ul>
          </article>
        </section>
        
        <section>
          <h2>Return on Investment (ROI) Metrics</h2>
          <ul>
            <li>75% reduction in documentation time - CRUSH AI Medical Scribe automates clinical documentation</li>
            <li>40% increase in practice revenue - improved efficiency and reduced no-shows drive revenue growth</li>
            <li>95% patient satisfaction rates - enhanced communication and care coordination</li>
            <li>$150,000+ annual cost savings - reduced staffing costs and improved operational efficiency</li>
            <li>30% increase in patient volume - streamlined workflows enable higher patient capacity</li>
          </ul>
        </section>
        
        <section>
          <h2>7-Step Complete Workflow Transformation Process</h2>
          <ol>
            <li>Instant Call Handling - BRAVO AI answers patient inquiries 24/7 and schedules appointments</li>
            <li>Effortless Pre-Visit Workflow - automated patient intake and insurance verification</li>
            <li>Reduce No-Shows & Improve Engagement - real-time confirmations and automated reminders</li>
            <li>Real-Time AI Medical Scribe - CRUSH captures physician-patient interactions instantly</li>
            <li>Automate Repetitive Administrative Tasks - streamlined prescriptions and referrals</li>
            <li>Post-Visit Patient Support - automated follow-ups and medication adherence monitoring</li>
            <li>Accelerate Revenue Cycle Management - enhanced insurance verification and claim processing</li>
          </ol>
        </section>
        
        <section>
          <h2>Healthcare Provider Success Stories</h2>
          <p>Leading healthcare providers have achieved remarkable results with S10.AI implementation:</p>
          
          <blockquote>
            <p>"Implementing both CRUSH and BRAVO transformed our practice completely. Documentation time dropped by 75%, patient satisfaction increased by 60%, and our revenue grew by 40% within the first quarter. The seamless integration between both solutions streamlined our entire workflow."</p>
            <cite>Dr. Emily Chen, Medical Director, Advanced Care Medical Group</cite>
          </blockquote>
          
          <p>This testimonial represents typical results achieved by healthcare practices implementing S10.AI solutions. The combination of CRUSH AI Medical Scribe and BRAVO AI Staffing Agent delivers comprehensive practice transformation.</p>
        </section>
      </div>

      <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 8, color: 'black', fontSize: { xs: '1.75rem', sm: '2rem', md: '2rem' } }}
        >
          How Bravo & CRUSH Transform Your Practice Together
        </Typography>

        <div className="mb-16">
          {isMobile ? (
            <>
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                  dragFree: true,
                }}
                plugins={[]}
                className="w-full"
              >
                <CarouselContent>
                  {beforeAfterCards.map((card, idx) => (
                    <CarouselItem key={idx} className="pl-2 pr-2 basis-full">
                      <Card className={`p-4 sm:p-6 ${card.color === 'red'
                        ? 'bg-white border border-gray-200'
                        : 'bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 border border-[#387E89]/20'} hover:shadow-lg transition-all duration-300`}>
                        <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${card.color === 'red' ? 'text-gray-900' : 'text-[#387E89]'}`}>
                          {card.title}
                        </h3>
                        <div className="space-y-3">
                          {card.metrics.map((metric, index) => (
                            <div key={index} className={`flex items-center gap-3 p-2 sm:p-3 rounded-lg ${card.color === 'red'
                              ? 'bg-red-50/50'
                              : 'bg-[#387E89]/10'}`}>
                              {card.color === 'red' ? (
                                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                              ) : (
                                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#387E89]" />
                              )}
                              <span className="text-sm sm:text-base text-gray-700">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm select-none">
                    <span>Swipe to see next</span>
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" style={{ animation: 'moveRight 1.5s ease-in-out infinite' }} />
                  </div>
                </div>
              </Carousel>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white hover:shadow-lg transition-all duration-300 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Before S10.AI
                </h3>
                <div className="space-y-3">
                  {beforeAfterComparison.before.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-red-50/50">
                      <X className="w-5 h-5 text-red-500" />
                      <span className="text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-[#143151]/5 to-[#387E89]/5 hover:shadow-lg transition-all duration-300 border border-[#387E89]/20">
                <h3 className="text-xl font-semibold mb-4 text-[#387E89]">
                  After CRUSH & BRAVO
                </h3>
                <div className="space-y-3">
                  {beforeAfterComparison.after.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-[#387E89]/10">
                      <Check className="w-5 h-5 text-[#387E89]" />
                      <span className="text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </div>

        <div className="mb-16">
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 4, color: "#143151", fontSize: { xs: "1.2rem", sm: "1.35rem" } }}
          >
            ROI At-a-Glance
          </Typography>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 justify-center max-w-5xl mx-auto">
            {Object.values(ROIMetrics).map((metric, idx) => (
              <ROIMetricCard key={idx} icon={metric.icon} value={metric.value} label={metric.label} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 2, color: 'black', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}
          >
            The Complete Workflow Transformation
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ mb: 6, color: 'gray', fontSize: { xs: '0.875rem', sm: '1rem' } }}
          >
            Our 7-step process transforms your practice
          </Typography>

          <div className="relative">
            {/* Step connection line for visual continuity */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#143151] to-[#387E89] opacity-20 rounded-full" />
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4">
                {cardIcons.map((card) => (
                  <CarouselItem key={card.id} className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3">
                    <WorkflowCard {...card} number={card.id} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              {!isMobile && (
                <div className="flex justify-center gap-2 mt-6 w-full">
                  <CarouselPrevious className="relative left-0" />
                  <div className="flex items-center gap-1 text-sm bg-gradient-to-r from-[#143151] to-[#387E89] text-white px-4 py-2 rounded-full">
                    <span className="font-medium">Workflow Steps</span>
                  </div>
                  <CarouselNext className="relative right-0" />
                </div>
              )}
            </Carousel>
            {isMobile && (
              <div className="flex justify-center mt-4">
                <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm select-none bg-gray-50 px-3 py-2 rounded-full border border-gray-200">
                  <span>Swipe to see next step</span>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" style={{ animation: 'moveRight 1.5s ease-in-out infinite' }} />
                </div>
              </div>
            )}
          </div>
        </div>

        <Box sx={{ mb: 6 }}>
          <QuoteTestimonial {...combinedTestimonial} />
        </Box>

        <div className="flex justify-center mb-16">
          <button className="rounded-full px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl transition-transform duration-200 hover:scale-105">
            Book a Demo
          </button>
        </div>
      </Box>
    </section>
  );
};

export default FifthSection;
