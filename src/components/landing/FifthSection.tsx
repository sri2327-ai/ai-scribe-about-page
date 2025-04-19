import React, { useRef } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ClipboardList, Bell, FileText, ClipboardCheck, Heart, BarChart, DollarSign } from 'lucide-react';
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

export const FifthSection = () => {
  const theme = useTheme();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const containerRef = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  const MotionPaper = motion(Paper);
  const isDesktop = useMediaQuery(theme.breakpoints.down('md'));

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ['start end', 'end center'],
  });

  const x1 = useTransform(scrollYProgress1, [0, 1], [-10, 10]);
  const rotate1 = useTransform(scrollYProgress1, [0, 1], [-5, 0]);

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ['start end', 'end center'],
  });

  const x2 = useTransform(scrollYProgress2, [0, 1], [-10, 10]);
  const rotate2 = useTransform(scrollYProgress2, [0, 1], [5, 0]);

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: ref3,
    offset: ['start end', 'end center'],
  });

  const x3 = useTransform(scrollYProgress3, [0, 1], [-10, 10]);
  const rotate3 = useTransform(scrollYProgress3, [0, 1], [-5, 0]);

  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: ref4,
    offset: ['start end', 'end center'],
  });

  const x4 = useTransform(scrollYProgress4, [0, 1], [-10, 10]);
  const rotate4 = useTransform(scrollYProgress4, [0, 1], [5, 0]);

  const { scrollYProgress: scrollYProgress5 } = useScroll({
    target: ref5,
    offset: ['start end', 'end center'],
  });

  const x5 = useTransform(scrollYProgress5, [0, 1], [10, -10]);
  const rotate5 = useTransform(scrollYProgress5, [0, 1], [5, 0]);

  const { scrollYProgress: scrollYProgress6 } = useScroll({
    target: ref6,
    offset: ['start end', 'end center'],
  });

  const x6 = useTransform(scrollYProgress6, [0, 1], [10, -10]);
  const rotate6 = useTransform(scrollYProgress6, [0, 1], [-5, 0]);

  const { scrollYProgress: scrollYProgress7 } = useScroll({
    target: ref7,
    offset: ['start end', 'end center'],
  });

  const x7 = useTransform(scrollYProgress7, [0, 1], [10, -10]);
  const rotate7 = useTransform(scrollYProgress7, [0, 1], [5, 0]);

  const { scrollYProgress: scrollYProgress8 } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const height = useTransform(scrollYProgress8, [0, 1], ["0%", "100%"]);

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

        <Stack
          spacing={6}
          sx={{
            width: '100%',
            mb: 10
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 4,
            width: '50%'
          }}>
            <MotionPaper
              ref={ref1}
              style={{
                transform: 'translateX(0px) rotate(0deg)',
                x: x1,
                rotate: rotate1,
              }}
              sx={{
                boxShadow: 0,
                background: 'transparent',
                position: 'relative',
              }}
            >
              <Box sx={{ 
                p: 3, 
                gap: 3, 
                display: 'flex', 
                flexDirection:'column', 
                justifyContent:'space-between', 
                color: 'black', 
                background: 'white', 
                borderRadius: 2, 
                border: '1px solid rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Typography 
                  sx={{ 
                    position: 'absolute',
                    top: -30,
                    right: -20,
                    fontSize: '180px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.15,
                    zIndex: 0
                  }}
                >
                  1
                </Typography>
                <Typography variant="h5" fontWeight="semiBold" color="black" sx={{ position: 'relative', zIndex: 1 }}>
                  {cardIcons[0].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3, position: 'relative', zIndex: 1 }}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70px',
                    height: '70px'
                  }}>
                    <Phone size={32} color="white" />
                  </Box>
                  <Typography variant="h6" fontWeight="medium" color="black">
                    {cardIcons[0].description}
                  </Typography>
                </Box>
              </Box>
            </MotionPaper>

            <MotionPaper
              ref={ref3}
              style={{
                transform: 'translateX(0px) rotate(0deg)',
                x: x3,
                rotate: rotate3,
              }}
              sx={{
                boxShadow: 0,
                background: 'transparent',
                position: 'relative',
              }}
            >
              <Box sx={{ 
                p: 3, 
                gap: 3, 
                display: 'flex', 
                flexDirection:'column', 
                justifyContent:'space-between', 
                color: 'black', 
                background: 'white', 
                borderRadius: 2, 
                border: '1px solid rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Typography 
                  sx={{ 
                    position: 'absolute',
                    top: -30,
                    right: -20,
                    fontSize: '180px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.15,
                    zIndex: 0
                  }}
                >
                  3
                </Typography>
                <Typography variant="h5" fontWeight="semiBold" color="black" sx={{ position: 'relative', zIndex: 1 }}>
                  {cardIcons[2].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3, position: 'relative', zIndex: 1 }}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70px',
                    height: '70px'
                  }}>
                    <Bell size={32} color="white" />
                  </Box>
                  <Typography variant="h6" fontWeight="medium" color="black">
                    {cardIcons[2].description}
                  </Typography>
                </Box>
              </Box>
            </MotionPaper>

            <MotionPaper
              ref={ref5}
              style={{
                transform: 'translateX(0px) rotate(0deg)',
                x: x5,
                rotate: rotate5,
              }}
              sx={{
                boxShadow: 0,
                background: 'transparent',
                position: 'relative',
              }}
            >
              <Box sx={{ 
                p: 3, 
                gap: 3, 
                display: 'flex', 
                flexDirection:'column', 
                justifyContent:'space-between', 
                color: 'black', 
                background: 'white', 
                borderRadius: 2, 
                border: '1px solid rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Typography 
                  sx={{ 
                    position: 'absolute',
                    top: -30,
                    right: -20,
                    fontSize: '180px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.15,
                    zIndex: 0
                  }}
                >
                  5
                </Typography>
                <Typography variant="h5" fontWeight="semiBold" color="black" sx={{ position: 'relative', zIndex: 1 }}>
                  {cardIcons[4].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3, position: 'relative', zIndex: 1 }}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70px',
                    height: '70px'
                  }}>
                    <ClipboardCheck size={32} color="white" />
                  </Box>
                  <Typography variant="h6" fontWeight="medium" color="black">
                    {cardIcons[4].description}
                  </Typography>
                </Box>
              </Box>
            </MotionPaper>

            <MotionPaper
              ref={ref7}
              style={{
                transform: 'translateX(0px) rotate(0deg)',
                x: x7,
                rotate: rotate7,
              }}
              sx={{
                boxShadow: 0,
                background: 'transparent',
                position: 'relative',
              }}
            >
              <Box sx={{ 
                p: 3, 
                gap: 3, 
                display: 'flex', 
                flexDirection:'column', 
                justifyContent:'space-between', 
                color: 'black', 
                background: 'white', 
                borderRadius: 2, 
                border: '1px solid rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Typography 
                  sx={{ 
                    position: 'absolute',
                    top: -30,
                    right: -20,
                    fontSize: '180px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.15,
                    zIndex: 0
                  }}
                >
                  7
                </Typography>
                <Typography variant="h5" fontWeight="semiBold" color="black" sx={{ position: 'relative', zIndex: 1 }}>
                  {cardIcons[6].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3, position: 'relative', zIndex: 1 }}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70px',
                    height: '70px'
                  }}>
                    <BarChart size={32} color="white" />
                  </Box>
                  <Typography variant="h6" fontWeight="medium" color="black">
                    {cardIcons[6].description}
                  </Typography>
                </Box>
              </Box>
            </MotionPaper>
          </Box>

          <Box sx={{ px: 2 }}>
            <MotionPaper 
              style={{ height: height }} 
              sx={{ 
                background: `linear-gradient(0deg, #143151, #387E89)`,
                px: 0.2 
              }}
            >
            </MotionPaper>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 4,
            width: '50%'
          }}>
            <MotionPaper
              ref={ref2}
              style={{
                transform: 'translateX(0px) rotate(0deg)',
                x: x2,
                rotate: rotate2,
              }}
              sx={{
                boxShadow: 0,
                background: 'transparent',
                position: 'relative',
              }}
            >
              <Box sx={{ 
                p: 3, 
                gap: 3, 
                display: 'flex', 
                flexDirection:'column', 
                justifyContent:'space-between', 
                color: 'black', 
                background: 'white', 
                borderRadius: 2, 
                border: '1px solid rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Typography 
                  sx={{ 
                    position: 'absolute',
                    top: -30,
                    right: -20,
                    fontSize: '180px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.15,
                    zIndex: 0
                  }}
                >
                  2
                </Typography>
                <Typography variant="h5" fontWeight="semiBold" color="black" sx={{ position: 'relative', zIndex: 1 }}>
                  {cardIcons[1].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3, position: 'relative', zIndex: 1 }}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70px',
                    height: '70px'
                  }}>
                    <ClipboardList size={32} color="white" />
                  </Box>
                  <Typography variant="h6" fontWeight="medium" color="black">
                    {cardIcons[1].description}
                  </Typography>
                </Box>
              </Box>
            </MotionPaper>

            <MotionPaper
              ref={ref4}
              style={{
                transform: 'translateX(0px) rotate(0deg)',
                x: x4,
                rotate: rotate4,
              }}
              sx={{
                boxShadow: 0,
                background: 'transparent',
                position: 'relative',
              }}
            >
              <Box sx={{ 
                p: 3, 
                gap: 3, 
                display: 'flex', 
                flexDirection:'column', 
                justifyContent:'space-between', 
                color: 'black', 
                background: 'white', 
                borderRadius: 2, 
                border: '1px solid rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Typography 
                  sx={{ 
                    position: 'absolute',
                    top: -30,
                    right: -20,
                    fontSize: '180px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.15,
                    zIndex: 0
                  }}
                >
                  4
                </Typography>
                <Typography variant="h5" fontWeight="semiBold" color="black" sx={{ position: 'relative', zIndex: 1 }}>
                  {cardIcons[3].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3, position: 'relative', zIndex: 1 }}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70px',
                    height: '70px'
                  }}>
                    <FileText size={32} color="white" />
                  </Box>
                  <Typography variant="h6" fontWeight="medium" color="black">
                    {cardIcons[3].description}
                  </Typography>
                </Box>
              </Box>
            </MotionPaper>

            <MotionPaper
              ref={ref6}
              style={{
                transform: 'translateX(0px) rotate(0deg)',
                x: x6,
                rotate: rotate6,
              }}
              sx={{
                boxShadow: 0,
                background: 'transparent',
                position: 'relative',
              }}
            >
              <Box sx={{ 
                p: 3, 
                gap: 3, 
                display: 'flex', 
                flexDirection:'column', 
                justifyContent:'space-between', 
                color: 'black', 
                background: 'white', 
                borderRadius: 2, 
                border: '1px solid rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Typography 
                  sx={{ 
                    position: 'absolute',
                    top: -30,
                    right: -20,
                    fontSize: '180px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.15,
                    zIndex: 0
                  }}
                >
                  6
                </Typography>
                <Typography variant="h5" fontWeight="semiBold" color="black" sx={{ position: 'relative', zIndex: 1 }}>
                  {cardIcons[5].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3, position: 'relative', zIndex: 1 }}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70px',
                    height: '70px'
                  }}>
                    <Heart size={32} color="white" />
                  </Box>
                  <Typography variant="h6" fontWeight="medium" color="black">
                    {cardIcons[5].description}
                  </Typography>
                </Box>
              </Box>
            </MotionPaper>
          </Box>
        </Stack>

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
