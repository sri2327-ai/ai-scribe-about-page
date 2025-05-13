
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { landingPageStyles } from '@/styles/landing-page-utils';

// Testimonial Data
const docRevData = [
  { 
    "docImg": "https://images.s10.ai/images/Harold.jpg",
    "docImgAlt": "Dr. Willem Gielen",
    "docReview": `"I've tried them all—S10.AI is hands down the best AI assistant for healthcare. Whether it's documentation with CRUSH or patient engagement with BRAVO, S10.AI delivers unparalleled efficiency and accuracy."`,
    "docNm": "— Dr. Willem Gielen, MD, Co-Founder, Nordjysk Speciallægeklinik"
  },
  { 
    "docImg": "https://images.s10.ai/images/Dr-Humera-Naqvi.jpeg",
    "docImgAlt": "Dr. Humera Naqvi",
    "docReview": `"With S10.AI, I can focus on patient interactions without worrying about administrative burdens. The seamless automation and real-time documentation make my workflow effortless."`,
    "docNm": "— Dr. Humera Naqvi, Internal Medicine, Medical Office Of Katy"
  },
  { 
    "docImg": "https://images.s10.ai/images/Dr-Lisbeth-Roy.png.webp",
    "docImgAlt": "Dr. Lisbeth Roy",
    "docReview": `"S10.AI is effortless, customizable, and exceeds expectations! From streamlining clinical documentation to enhancing patient care, it's a game-changer for my organisation"`,
    "docNm": "— Dr. Lisbeth Roy, Chief Executive Officer, Doctors Studio"
  },
];

// Enhanced Testimonial Card
const TestimonialCard = ({ data }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <Card 
      sx={{ 
        height: '100%',
        backgroundColor: '#ffffff',
        boxShadow: landingPageStyles.card.boxShadow,
        borderRadius: landingPageStyles.card.borderRadius,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        m: 1,
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: landingPageStyles.card.hoverShadow,
        },
        minWidth: { xs: '280px', sm: '300px', md: '340px' },
        maxWidth: { xs: '340px', sm: '370px', md: '400px' },
        flex: '1 1 0',
      }}
    >
      <CardMedia
        component="img"
        image={data.docImg}
        alt={data.docImgAlt}
        sx={{
          width: "100%",
          height: { xs: "200px", sm: "220px", md: "230px" },
          objectFit: "cover",
          objectPosition: "center",
        }}
        loading="lazy"
      />
      <CardContent 
        sx={{ 
          p: { xs: landingPageStyles.card.padding.xs, sm: landingPageStyles.card.padding.sm, md: landingPageStyles.card.padding.md },
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          flexGrow: 1
        }}
      >
        <Typography 
          variant="body1" 
          sx={{ 
            color: "#000000",
            fontWeight: landingPageStyles.typography.body1.fontWeight,
            fontSize: landingPageStyles.typography.body1.fontSize,
            lineHeight: landingPageStyles.typography.body1.lineHeight,
            letterSpacing: landingPageStyles.typography.body1.letterSpacing,
            textAlign: "center",
            mb: 2
          }}
        >
          {data.docReview}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: "#000000",
            fontWeight: 600,
            fontSize: landingPageStyles.typography.caption.fontSize,
            textAlign: "center",
            mt: 'auto',
            wordBreak: 'break-word',
            whiteSpace: 'normal'
          }}
        >
          {data.docNm}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

const SecondSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <motion.section 
      className="py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto max-w-6xl flex flex-col items-center">
        <Typography 
          variant="h2" 
          component="h2"
          sx={{ 
            textAlign: "center",
            color: landingPageStyles.colors.primary,
            fontWeight: landingPageStyles.typography.h2.fontWeight,
            fontSize: landingPageStyles.typography.h2.fontSize,
            lineHeight: landingPageStyles.typography.h2.lineHeight,
            letterSpacing: landingPageStyles.typography.h2.letterSpacing,
            mb: { xs: 4, md: 6 },
          }}
        >
          Trusted By Leading Healthcare Organisations
        </Typography>

        {isMobile ? (
          // Mobile view with Slider
          <Box 
            sx={{ 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'center', 
              maxWidth: '100%', 
              overflow: 'hidden',
              '& .slick-dots li button:before': {
                fontSize: '10px',
                color: landingPageStyles.colors.secondary
              },
              '& .slick-dots li.slick-active button:before': {
                color: landingPageStyles.colors.primary
              }
            }}
          >
            <Slider {...settings} style={{width: '100%', maxWidth: '420px'}}>
              {docRevData.map((value, index) => (
                <Box key={index} sx={{ px: { xs: 1, md: 2 } }}>
                  <TestimonialCard data={value} />
                </Box>
              ))}
            </Slider>
          </Box>
        ) : (
          // Desktop view: Flexbox for side-by-side layout
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 4,
              justifyContent: 'center',
              alignItems: 'stretch',
              width: '100%',
              marginTop: theme.spacing(2),
              flexWrap: 'nowrap',
            }}
          >
            {docRevData.map((value, index) => (
              <TestimonialCard key={index} data={value} />
            ))}
          </Box>
        )}
      </div>
    </motion.section>
  );
};

export default SecondSection;
