
import React, { useRef } from 'react';
import { Box, Paper, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ClipboardList, Bell, FileText, ClipboardCheck, Heart, BarChart, DollarSign, Check, X } from 'lucide-react';
import { QuoteTestimonial } from './QuoteTestimonial';
import OptimizedImage from '@/components/ui/optimized-image';

const cardIcons = [
    { id: 1, icon: Phone, title: "Instant Call Handling", description: "BRAVO answers patient inquiries, schedules appointments, and integrates with EHR, SIP, and PMS platforms." },
    { id: 2, icon: ClipboardList, title: "Effortless Pre-Visit Workflow", description: "Automates patient intake, insurance verification, and medical history updates for seamless visits." },
    { id: 3, icon: Bell, title: "Reduce No-Shows & Improve Engagement", description: "Sends real-time confirmations, automated reminders, and follow-ups to maximize appointment adherence." },
    { id: 4, icon: FileText, title: "Real-Time AI Medical Scribe", description: "CRUSH captures and transcribes physician-patient interactions, generating structured clinical notes instantly." },
    { id: 5, icon: ClipboardCheck, title: "Automate Repetitive Administrative Tasks", description: "Streamlines prescription refills, referrals, lab orders, AI-powered clinical notes, and visit summaries to reduce staff workload." },
    { id: 6, icon: Heart, title: "Post-Visit Patient Support", description: "BRAVO automates follow-ups, medication adherence, and preventive care reminders to improve patient outcomes." },
    { id: 7, icon: BarChart, title: "Accelerate Revenue Cycle Management", description: "Enhances insurance verification, claim processing, and payment tracking for faster reimbursements and improved financial outcomes." },
  ];

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

const combinedTestimonial = {
  quote: "Implementing both CRUSH and BRAVO transformed our practice completely. Documentation time dropped by 75%, patient satisfaction increased by 60%, and our revenue grew by 40% within the first quarter. The seamless integration between both solutions streamlined our entire workflow.",
  author: "Dr. Emily Chen",
  role: "Medical Director, Advanced Care Medical Group",
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
};

const ROIMetrics = {
  timeReduction: "75%",
  revenueIncrease: "40%",
  patientSatisfaction: "95%",
  annualSavings: "$150,000+"
};

// Card component for workflow steps
const WorkflowCard = ({ icon: Icon, title, description, number }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper elevation={2} sx={{ 
      p: 4, 
      borderRadius: 2, 
      mb: 4,
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(0,0,0,0.1)',
    }}>
      <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
        <Box sx={{ 
          p: 2, 
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #143151, #387E89)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          flexShrink: 0
        }}>
          <Icon size={30} color="white" />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight="bold" color="black" sx={{ mb: 1 }}>
            {title}
          </Typography>
          <Typography variant={isMobile ? "body2" : "body1"} color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Box>
      
      <Typography 
        sx={{ 
          position: 'absolute',
          top: -20,
          right: -10,
          fontSize: { xs: '120px', md: '180px' },
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #e0e0e0, #f5f5f5)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          opacity: 0.6,
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        {number}
      </Typography>
    </Paper>
  );
};

export const FifthSection = () => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <section ref={containerRef} className="py-20 px-4 md:px-8 bg-white">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1400px', mx: 'auto' }}>
        <Typography 
          variant="h3" 
          fontWeight="bold" 
          sx={{ 
            textAlign: "center", 
            color: 'black',
            mb: 8
          }}
        >
          How Bravo & CRUSH Transform Your Practice Together
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 10, width: '100%' }}>
          {Object.entries(beforeAfterComparison).map(([key, data]) => (
            <Paper
              key={key}
              sx={{
                flex: 1,
                p: 4,
                borderRadius: 2,
                backgroundColor: key === 'after' ? '#f8fafc' : '#white',
                border: '1px solid',
                borderColor: key === 'after' ? '#387E89' : 'grey.200'
              }}
            >
              <Typography variant="h5" fontWeight="bold" color={key === 'after' ? '#387E89' : 'grey.800'} mb={3}>
                {data.title}
              </Typography>
              <Stack spacing={2}>
                {data.metrics.map((metric, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {key === 'after' ? 
                      <Check className="w-5 h-5 text-[#387E89]" /> :
                      <X className="w-5 h-5 text-red-500" />
                    }
                    <Typography>{metric}</Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          ))}
        </Box>

        {/* Workflow Cards - Improved Layout */}
        <Box sx={{ width: '100%', mb: 10 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6} color="black">
            The Complete Workflow Transformation
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <Box>
              {cardIcons.slice(0, 4).map((card) => (
                <WorkflowCard 
                  key={card.id}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  number={card.id}
                />
              ))}
            </Box>
            <Box>
              {cardIcons.slice(4).map((card) => (
                <WorkflowCard 
                  key={card.id}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  number={card.id}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box 
          sx={{ 
            background: 'linear-gradient(135deg, #143151, #387E89)',
            borderRadius: 4,
            p: 6,
            width: '100%',
            mb: 10,
            color: 'white'
          }}
        >
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
            Return on Investment
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 4 }}>
            {Object.entries(ROIMetrics).map(([key, value]) => (
              <Box key={key} sx={{ textAlign: 'center' }}>
                <Typography variant="h3" fontWeight="bold" mb={1}>
                  {value}
                </Typography>
                <Typography>
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 10, width: '100%', maxWidth: '900px', mx: 'auto' }}>
          <QuoteTestimonial {...combinedTestimonial} />
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            className="px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl rounded-full"
            onClick={() => window.location.href = '/demo'}
          >
            Schedule a Combined Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Typography variant="body1" sx={{ mt: 2, color: 'grey.600' }}>
            See how CRUSH & BRAVO can transform your practice
          </Typography>
        </Box>
      </Box>
    </section>
  );
};
