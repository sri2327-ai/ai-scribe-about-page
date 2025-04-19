
import React, { useRef } from 'react';
import { Box, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { motion, useScroll, useTransform } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Phone, ClipboardList, Bell, FileText, ClipboardCheck, Heart, BarChart } from 'lucide-react';

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

  // Create icon components for each card
  const cardIcons = [
    { id: 1, icon: Phone, title: "Instant Call Handling", description: "BRAVO answers patient inquiries, schedules appointments, and integrates with EHR, SIP, and PMS platforms." },
    { id: 2, icon: ClipboardList, title: "Effortless Pre-Visit Workflow", description: "Automates patient intake, insurance verification, and medical history updates for seamless visits." },
    { id: 3, icon: Bell, title: "Reduce No-Shows & Improve Engagement", description: "Sends real-time confirmations, automated reminders, and follow-ups to maximize appointment adherence." },
    { id: 4, icon: FileText, title: "Real-Time AI Medical Scribe", description: "CRUSH captures and transcribes physician-patient interactions, generating structured clinical notes instantly." },
    { id: 5, icon: ClipboardCheck, title: "Automate Repetitive Administrative Tasks", description: "Streamlines prescription refills, referrals, lab orders, AI-powered clinical notes, and visit summaries to reduce staff workload." },
    { id: 6, icon: Heart, title: "Post-Visit Patient Support", description: "BRAVO automates follow-ups, medication adherence, and preventive care reminders to improve patient outcomes." },
    { id: 7, icon: BarChart, title: "Accelerate Revenue Cycle Management", description: "Enhances insurance verification, claim processing, and payment tracking for faster reimbursements and improved financial outcomes." },
  ];

  return (
    <section ref={containerRef} className="py-10 px-4 md:px-8 bg-white">
      <Box sx={{ display: 'flex', flexDirection:'column', alignItems: 'center' }}>
        <Typography 
          variant="h3" 
          fontWeight="bold" 
          sx={{ 
            px: 4, 
            py: 8, 
            textAlign: "center", 
            color: 'black' 
          }}
        >
          How Bravo & CRUSH Transform Your Practice Together 
        </Typography>
        <Stack
          spacing={3}
          direction="row"
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: "center",
            px: 10,
            py: 10,
            background: 'white',
            borderRadius: 4,
          }}
          useFlexGap
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 4,
            width: '50%'
          }}>
            {/* Left column cards (1, 3, 5, 7) */}
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
              }}
            >
              <Box sx={{ p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: 'black', background: 'white', borderRadius: 2, border: '1px solid rgba(0,0,0,0.1)' }}>
                <Typography variant="h5" fontWeight="semiBold" color="black">
                  1. {cardIcons[0].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
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
              }}
            >
              <Box sx={{ p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: 'black', background: 'white', borderRadius: 2, border: '1px solid rgba(0,0,0,0.1)' }}>
                <Typography variant="h5" fontWeight="semiBold" color="black">
                  3. {cardIcons[2].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
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
              }}
            >
              <Box sx={{ p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: 'black', background: 'white', borderRadius: 2, border: '1px solid rgba(0,0,0,0.1)' }}>
                <Typography variant="h5" fontWeight="semiBold" color="black">
                  5. {cardIcons[4].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
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
              }}
            >
              <Box sx={{ p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: 'black', background: 'white', borderRadius: 2, border: '1px solid rgba(0,0,0,0.1)' }}>
                <Typography variant="h5" fontWeight="semiBold" color="black">
                  7. {cardIcons[6].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
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
                background: `linear-gradient(0deg, #0d2b3f, #D946EF)`,
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
            {/* Right column cards (2, 4, 6) */}
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
              }}
            >
              <Box sx={{ p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: 'black', background: 'white', borderRadius: 2, border: '1px solid rgba(0,0,0,0.1)' }}>
                <Typography variant="h5" fontWeight="semiBold" color="black">
                  2. {cardIcons[1].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
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
              }}
            >
              <Box sx={{ p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: 'black', background: 'white', borderRadius: 2, border: '1px solid rgba(0,0,0,0.1)' }}>
                <Typography variant="h5" fontWeight="semiBold" color="black">
                  4. {cardIcons[3].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
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
              }}
            >
              <Box sx={{ p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: 'black', background: 'white', borderRadius: 2, border: '1px solid rgba(0,0,0,0.1)' }}>
                <Typography variant="h5" fontWeight="semiBold" color="black">
                  6. {cardIcons[5].title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
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
      </Box>

      {/* Mobile view with slider */}
      <Stack
        spacing={3}
        direction= "column"
        sx={{
          display: { xs: 'flex', md: 'none' },
          alignItems: 'stretch',
          mx: 2,
          py: 2,
          background: theme.palette.common.white,
          borderRadius: 4,
          boxShadow: 2
        }}
        useFlexGap
      >
        <Slider {...settings}>
          {cardIcons.map((card, index) => {
            const CardIcon = card.icon;
            return (
              <Box key={index} sx={{ px: 1.5 }}>
                <Box sx={{ height: { xs: '270px', sm: '220px', md: '230px' }, p: 2, gap: 2, display: 'flex', flexDirection:'column', justifyContent: 'space-between',color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
                  <Typography variant="h5" fontWeight="semiBold">
                    {index + 1}. {card.title}
                  </Typography>
                  <Box>
                    <Box sx={{ 
                      float: 'left',
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #143151, #387E89)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}>
                      <CardIcon size={32} color="white" />
                    </Box>
                    <Typography variant="h6" fontWeight="medium">
                      {card.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Stack>
    </section>
  );
};
