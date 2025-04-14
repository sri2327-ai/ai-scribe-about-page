'use client';

import theme from '@/theme';
import { Box, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FifthScl() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const containerRef = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  const MotionPaper = motion.create(Paper);
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
    <section ref={containerRef} className="witOutSp" style={{ justifyContent:'center', background: `linear-gradient(180deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, paddingLeft: '0px', paddingRight: '0px' }}>
      <Box sx={{ display: 'flex', flexDirection:'column', alignItems: 'center' }}>
        <Typography variant="h3" fontWeight="bold" sx={{ px: 4, py: 8, textAlign: "center", color: theme.palette.common.white }}>
          How Bravo & CRUSH Transform Your Practice Together 
        </Typography>
        <Stack
          spacing={3}
          direction= "row"
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: "center",
            px: 10,
            py: 10,
            background: theme.palette.common.white,
            borderRadius: 4,
          }}
          useFlexGap
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <MotionPaper
              ref={ref1}
              style={{
                transform: 'translateX(0px) rotate(0deg)',
                x: x1,
                rotate: rotate1,
              }}
              sx={{
                my: 2.30,
                boxShadow: 0,
                background: 'transparent',
              }}
            >
              <Box sx={{ width: { xs: 'none', md: '400px', lg: '480px', xl: '550px' }, p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
                <Typography variant="h5" fontWeight="semiBold">
                  1. Instant Call Handling
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                  <Typography variant="h6" fontWeight="medium">
                    BRAVO answers patient inquiries, schedules appointments, and integrates with EHR, SIP, and PMS platforms.
                  </Typography>
                </Box>
              </Box>
            </MotionPaper>
            <MotionPaper
              ref={ref2}
              style={{
                transform: 'translateX(0px) rotate(0deg)',
                x: x2,
                rotate: rotate2,
              }}
              sx={{
                my: 2.30,
                boxShadow: 0,
                background: 'transparent',
              }}
            >
              <Box sx={{ width: { xs: 'none', md: '400px', lg: '480px', xl: '550px' }, p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
                <Typography variant="h5" fontWeight="semiBold">
                  2. Effortless Pre-Visit Workflow
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                  <Typography variant="h6" fontWeight="medium">
                    Automates patient intake, insurance verification, and medical history updates for seamless visits.
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
                my: 2.30,
                boxShadow: 0,
                background: 'transparent',
              }}
            >
              <Box sx={{ width: { xs: 'none', md: '400px', lg: '480px', xl: '550px' }, p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
                <Typography variant="h5" fontWeight="semiBold">
                  3. Reduce No-Shows & Improve Engagement
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                  <Typography variant="h6" fontWeight="medium">
                    Sends real-time confirmations, automated reminders, and follow-ups to maximize appointment adherence.
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
                my: 2.30,
                boxShadow: 0,
                background: 'transparent',
              }}
            >
              <Box sx={{ width: { xs: 'none', md: '400px', lg: '480px', xl: '550px' }, p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
                <Typography variant="h5" fontWeight="semiBold">
                  4. Real-Time AI Medical Scribe
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                  <Typography variant="h6" fontWeight="medium">
                    CRUSH captures and transcribes physician-patient interactions, generating structured clinical notes instantly.
                  </Typography>
                </Box>
              </Box>
            </MotionPaper>
          </Box>
          <Box sx={{ px: 2 }}>
            <MotionPaper 
              style={{ height: height}} sx={{ background: `linear-gradient(0deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light} )`, px: 0.2 }}>
            </MotionPaper>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <MotionPaper
              ref={ref5}
              style={{
                transform: 'translateX(0px) rotate(0deg)',
                x: x5,
                rotate: rotate5,
              }}
              sx={{
                my: 2.30,
                boxShadow: 0,
                background: 'transparent',
              }}
            >
              <Box sx={{ width: { xs: 'none', md: '400px', lg: '480px', xl: '550px' }, p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
                <Typography variant="h5" fontWeight="semiBold">
                  5. Automate Repetitive Administrative Tasks
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                  <Typography variant="h6" fontWeight="medium">
                    Streamlines prescription refills, referrals, lab orders, AI-powered clinical notes, and visit summaries to reduce staff workload.
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
                my: 2.30,
                boxShadow: 0,
                background: 'transparent',
              }}
            >
              <Box sx={{ width: { xs: 'none', md: '400px', lg: '480px', xl: '550px' }, p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
                <Typography variant="h5" fontWeight="semiBold">
                  6. Post-Visit Patient Support
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                  <Typography variant="h6" fontWeight="medium">
                    BRAVO automates follow-ups, medication adherence, and preventive care reminders to improve patient outcomes.
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
                my: 2.30,
                boxShadow: 0,
                background: 'transparent',
              }}
            >
              <Box sx={{ width: { xs: 'none', md: '400px', lg: '480px', xl: '550px' }, p: 3, gap: 3, display: 'flex', flexDirection:'column', justifyContent:'space-between', color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
                <Typography variant="h5" fontWeight="semiBold">
                  7. Accelerate Revenue Cycle Management
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', gap: 3, py: 3 }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                  <Typography variant="h6" fontWeight="medium">
                    Enhances insurance verification, claim processing, and payment tracking for faster reimbursements and improved financial outcomes.
                  </Typography>
                </Box>
              </Box>
            </MotionPaper>
          </Box>
        </Stack>
      </Box>
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
          <Box sx={{ px: 1.5 }}>
            <Box sx={{ height: { xs: '270px', sm: '220px', md: '230px' }, p: 2, gap: 2, display: 'flex', flexDirection:'column', justifyContent: 'space-between',color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
              <Typography variant="h5" fontWeight="semiBold">
                1. Instant Call Handling
              </Typography>
              <Box>
                <Box sx={{ float: 'left' }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                </Box>
                <Typography variant="h6" fontWeight="medium">
                  BRAVO answers patient inquiries, schedules appointments, and integrates with EHR, SIP, and PMS platforms.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ px: 1.5 }}>
            <Box sx={{ height: { xs: '270px', sm: '220px', md: '230px' }, p: 2, gap: 2, display: 'flex', flexDirection:'column', justifyContent: 'space-between',color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
              <Typography variant="h5" fontWeight="semiBold">
                2. Effortless Pre-Visit Workflow
              </Typography>
              <Box>
                <Box sx={{ float: 'left' }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                </Box>
                <Typography variant="h6" fontWeight="medium">
                  Automates patient intake, insurance verification, and medical history updates for seamless visits.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ px: 1.5 }}>
            <Box sx={{ height: { xs: '270px', sm: '220px', md: '230px' }, p: 2, gap: 2, display: 'flex', flexDirection:'column', justifyContent: 'space-between',color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
              <Typography variant="h5" fontWeight="semiBold">
                3. Reduce No-Shows & Improve Engagement
              </Typography>
              <Box>
                <Box sx={{ float: 'left' }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                </Box>
                <Typography variant="h6" fontWeight="medium">
                  Sends real-time confirmations, automated reminders, and follow-ups to maximize appointment adherence.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ px: 1.5 }}>
            <Box sx={{ height: { xs: '270px', sm: '220px', md: '230px' }, p: 2, gap: 2, display: 'flex', flexDirection:'column', justifyContent: 'space-between',color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
              <Typography variant="h5" fontWeight="semiBold">
                4. Real-Time AI Medical Scribe
              </Typography>
              <Box>
                <Box sx={{ float: 'left' }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                </Box>
                <Typography variant="h6" fontWeight="medium">
                  CRUSH captures and transcribes physician-patient interactions, generating structured clinical notes instantly.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ px: 1.5 }}>
            <Box sx={{ height: { xs: '270px', sm: '220px', md: '230px' }, p: 2, gap: 2, display: 'flex', flexDirection:'column', justifyContent: 'space-between',color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
              <Typography variant="h5" fontWeight="semiBold">
                5. Automate Repetitive Administrative Tasks
              </Typography>
              <Box>
                <Box sx={{ float: 'left' }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                </Box>
                <Typography variant="h6" fontWeight="medium">
                  Streamlines prescription refills, referrals, lab orders, AI-powered clinical notes, and visit summaries to reduce staff workload.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ px: 1.5 }}>
            <Box sx={{ height: { xs: '270px', sm: '220px', md: '230px' }, p: 2, gap: 2, display: 'flex', flexDirection:'column', justifyContent: 'space-between',color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
              <Typography variant="h5" fontWeight="semiBold">
                6. Post-Visit Patient Support
              </Typography>
              <Box>
                <Box sx={{ float: 'left' }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                </Box>
                <Typography variant="h6" fontWeight="medium">
                  BRAVO automates follow-ups, medication adherence, and preventive care reminders to improve patient outcomes.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ px: 1.5 }}>
            <Box sx={{ height: { xs: '270px', sm: '220px', md: '230px' }, p: 2, gap: 2, display: 'flex', flexDirection:'column', justifyContent: 'space-between',color: theme.palette.text.secondary, background: `linear-gradient(150deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, borderRadius: 2 }}>
              <Typography variant="h5" fontWeight="semiBold">
                7. Accelerate Revenue Cycle Management
              </Typography>
              <Box>
                <Box sx={{ float: 'left' }}>
                  <img
                    src="/circleIcon.png"
                    alt="circleIcon"
                    width="90"
                    height="90"
                  />
                </Box>
                <Typography variant="h6" fontWeight="medium">
                  Enhances insurance verification, claim processing, and payment tracking for faster reimbursements and improved financial outcomes.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Slider>
      </Stack>
    </section>
  );
}