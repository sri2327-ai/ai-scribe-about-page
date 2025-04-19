
import React from 'react';
import { Card, CardContent, CardMedia, CardActionArea, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SecondSection = () => {
  const theme = useTheme();
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
  
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <Box className="container mx-auto max-w-7xl">
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: "center",
            color: "#000000",
            fontWeight: "bold",
            mb: { xs: 6, md: 8 },
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }
          }}
        >
          Trusted By Leading Healthcare Organisations
        </Typography>

        <Box sx={{ mx: { xs: -2, md: -3 } }}>
          <Slider {...settings}>
            {docRevData.map((value, index) => (
              <Box key={index} sx={{ px: { xs: 2, md: 3 } }}>
                <Card 
                  sx={{ 
                    height: '100%',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={value.docImg}
                      alt={value.docImgAlt}
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
                        height: { xs: 'auto', sm: '240px' }
                      }}
                    >
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: "#000000",
                          fontWeight: 500,
                          textAlign: "center",
                          lineHeight: 1.6,
                          fontSize: { xs: '0.9rem', sm: '1rem' }
                        }}
                      >
                        {value.docReview}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: "#000000",
                          fontWeight: 600,
                          textAlign: "center",
                          mt: 'auto',
                          fontSize: { xs: '0.85rem', sm: '0.9rem' }
                        }}
                      >
                        {value.docNm}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </section>
  );
};
