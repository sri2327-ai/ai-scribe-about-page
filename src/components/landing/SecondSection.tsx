
import React from 'react';
import { Card, CardContent, Typography, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial Data
const docRevData = [
  { 
    "docImg": "https://images.s10.ai/images/Harold.jpg",
    "docImgAlt": "Harold",
    "docReview": `"I've tried them all—S10.AI is hands down the best AI assistant for healthcare. Whether it's documentation with CRUSH or patient engagement with BRAVO, S10.AI delivers unparalleled efficiency and accuracy."`,
    "docNm": "— Dr. Willem Gielen, MD, Co-Founder, Nordjysk Speciallægeklinik"
  },
  { 
    "docImg": "https://images.s10.ai/images/Dr-Humera-Naqvi.jpeg",
    "docImgAlt": "Dr-Humera-Naqvi",
    "docReview": `"With S10.AI, I can focus on patient interactions without worrying about administrative burdens. The seamless automation and real-time documentation make my workflow effortless."`,
    "docNm": "— Dr. Humera Naqvi, Internal Medicine, Medical Office Of Katy"
  },
  { 
    "docImg": "https://images.s10.ai/images/Dr-Lisbeth-Roy.png.webp",
    "docImgAlt": "Dr-Lisbeth-Roy",
    "docReview": `"S10.AI is effortless, customizable, and exceeds expectations! From streamlining clinical documentation to enhancing patient care, it's a game-changer for my organisation"`,
    "docNm": "— Dr. Lisbeth Roy, Chief Executive Officer, Doctors Studio"
  },
];

// Testimonial Card
const TestimonialCard = ({ data }) => (
  <Card 
    sx={{ 
      height: '100%',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      m: 1,
      minWidth: { xs: '280px', sm: '300px', md: '340px' },
      maxWidth: { xs: '340px', sm: '370px', md: '400px' },
      flex: '1 1 0',
    }}
  >
    {/* Fix: Remove component prop and alt prop from CardMedia */}
    <Box
      sx={{
        width: "100%",
        height: { xs: "180px", sm: "220px", md: "230px" },
        backgroundImage: `url(${data.docImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label={data.docImgAlt}
    />
    <CardContent 
      sx={{ 
        p: { xs: 2, sm: 3 },
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
          fontWeight: 500,
          textAlign: "center",
          lineHeight: 1.6,
          fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1.05rem' },
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
          textAlign: "center",
          mt: 'auto',
          fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem' },
          wordBreak: 'break-word',
          whiteSpace: 'normal'
        }}
      >
        {data.docNm}
      </Typography>
    </CardContent>
  </Card>
);

export const SecondSection = () => {
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
    <section className="py-10 px-2 md:px-8 lg:px-16 bg-white overflow-hidden">
      <Box className="container mx-auto max-w-6xl flex flex-col items-center">
        <Typography 
          variant="h5"
          sx={{ 
            textAlign: "center",
            color: "#143151",
            fontWeight: 700,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.7rem" },
            letterSpacing: 0.1,
          }}
        >
          Trusted By Leading Healthcare Organisations
        </Typography>

        {isMobile ? (
          // Mobile view with Slider
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', maxWidth: '100%', overflow: 'hidden' }}>
            <Slider {...settings} style={{width: '100%', maxWidth: '420px'}}>
              {docRevData.map((value, index) => (
                <Box key={index} sx={{ px: { xs: 1, md: 2 } }}>
                  <TestimonialCard data={value} />
                </Box>
              ))}
            </Slider>
          </Box>
        ) : (
          // Desktop view: Flexbox for side-by-side layout, centered
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
      </Box>
    </section>
  );
};

export default SecondSection;
