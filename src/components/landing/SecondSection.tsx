
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SecondSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

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
        m: 1
      }}
    >
      <CardMedia
        component="img"
        image={data.docImg}
        alt={data.docImgAlt}
        sx={{
          width: "100%",
          height: { xs: "280px", sm: "320px" },
          objectFit: "cover",
        }}
      />
      <CardContent 
        sx={{ 
          p: 4,
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
            fontSize: { xs: '0.85rem', sm: '0.95rem' },
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
            fontSize: { xs: '0.85rem', sm: '0.9rem' },
            wordBreak: 'break-word',
            whiteSpace: 'normal'
          }}
        >
          {data.docNm}
        </Typography>
      </CardContent>
    </Card>
  );
  
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <Box className="container mx-auto max-w-6xl"> {/* max-w-6xl for nicely centered narrower container */}
        <Typography 
          variant="h4"  {/* Changed from h3 to h4 for smaller size */}
          sx={{ 
            textAlign: "center",
            color: "#000000",
            fontWeight: "bold",
            mb: { xs: 6, md: 8 },
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" } /* Smaller font sizes */
          }}
        >
          Trusted By Leading Healthcare Organisations
        </Typography>

        {isMobile ? (
          // Mobile view with Slider
          <Box sx={{ mx: { xs: -2, md: -3 }, display: 'flex', justifyContent: 'center' }}>
            <Slider {...settings} style={{width: '100%', maxWidth: '500px'}}>
              {docRevData.map((value, index) => (
                <Box key={index} sx={{ px: { xs: 2, md: 3 } }}>
                  <TestimonialCard data={value} />
                </Box>
              ))}
            </Slider>
          </Box>
        ) : (
          // Desktop view with Grid (no slider)
          <Grid 
            container 
            spacing={3} 
            sx={{ 
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            {docRevData.map((value, index) => (
              <Grid 
                key={index} 
                item 
                xs={12} sm={6} md={4} 
                sx={{ display: 'flex' }}
              >
                <TestimonialCard data={value} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </section>
  );
};

export default SecondSection;
