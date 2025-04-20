
import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Phone, ClipboardList, Bell, FileText, ClipboardCheck, 
  Heart, BarChart, ArrowRight, Check, X,
  Clock, TrendingUp, ThumbsUp, DollarSign, Users
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
    <Card className="relative h-[280px] p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 bg-white overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-lg bg-gradient-to-r from-[#143151] to-[#387E89]">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium mb-1 bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">Step {number}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      <div 
        className="absolute -bottom-6 -right-6 text-[120px] font-bold leading-none bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent opacity-60"
      >
        {number}
      </div>
    </Card>
  );
};

export const FifthSection = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-16 px-4 md:px-8 bg-white">
      <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
        <Typography 
          variant="h3" 
          fontWeight="bold" 
          textAlign="center" 
          sx={{ mb: 8, color: 'black' }}
        >
          How Bravo & CRUSH Transform Your Practice Together
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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

        <div className="mb-16">
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            textAlign="center" 
            sx={{ mb: 2, color: 'black' }}
          >
            The Complete Workflow Transformation
          </Typography>
          <Typography 
            variant="body1" 
            textAlign="center" 
            sx={{ mb: 6, color: 'gray' }}
          >
            Follow our 7-step process to transform your practice
          </Typography>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {cardIcons.map((card) => (
                <CarouselItem key={card.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <WorkflowCard {...card} number={card.id} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious />
              <div className="flex items-center gap-1 text-sm">
                <span className="text-gray-500">Steps</span>
                <span className="font-medium bg-gradient-to-r from-[#143151] to-[#387E89] bg-clip-text text-transparent">1-7</span>
              </div>
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        <Box sx={{ mb: 6 }}>
          <QuoteTestimonial {...combinedTestimonial} />
        </Box>
      </Box>
    </section>
  );
};

export default FifthSection;
