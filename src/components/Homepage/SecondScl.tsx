'use client'
import { Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SecondScl(...args: []) {
  const theme = useTheme();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
    ]
  };

  const docRevData = [
    { 
      "docImg": "https://images.s10.ai/images/Harold.jpg",
      "docImgAlt" : "Harold",
      "docReview" : `“I've tried them all—S10.AI is hands down the best AI assistant for healthcare. Whether it's documentation with CRUSH or patient engagement with BRAVO, S10.AI delivers unparalleled efficiency and accuracy."`,
      "docNm": "— Dr. Willem Gielen, MD, Co-Founder, Nordjysk Speciallægeklinik"
    },
    { 
      "docImg": "https://images.s10.ai/images/Dr-Humera-Naqvi.jpeg",
      "docImgAlt" : "Dr-Humera-Naqvi",
      "docReview" : `“With S10.AI, I can focus on patient interactions without worrying about administrative burdens. The seamless automation and real-time documentation make my workflow effortless."`,
      "docNm": "— Dr. Humera Naqvi, Internal Medicine, Medical Office Of Katy"
    },
    { 
      "docImg": "https://images.s10.ai/images/Dr-Lisbeth-Roy.png.webp",
      "docImgAlt" : "Dr-Lisbeth-Roy",
      "docReview" : `“S10.AI is effortless, customizable, and exceeds expectations! From streamlining clinical documentation to enhancing patient care, it’s a game-changer for my organisation"`,
      "docNm": "— Dr. Lisbeth Roy, Chief Executive Officer, Doctors Studio"
    },
  ]
  
  return(
    <section className="witOutSp" style={{ justifyContent:'space-evenly', paddingLeft:"0px", paddingRight:"0px", paddingTop:"20px", paddingBottom:"20px", gap: 3 }}>
      <Typography variant="h3" sx={{ textAlign: "center", color: theme.palette.text.primary, px: 2 }}>
        Trusted By Leading Healthcare Organisations
      </Typography>
      <Slider {...settings}>
        {
          Object.values(docRevData).map((value, index) => {
            return(
              <Card key={index} sx={{ borderRadius: 'unset', border: `1px solid ${theme.palette.grey.A400}` }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={value.docImg}
                    alt={value.docImgAlt}
                    sx={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent sx={{ display: 'flex', flexDirection:'column', justifyContent:'space-between', height: { xs:'210px', sm:'170px', md: '210px', lg: '180px' }, px: 3 }}>
                    <Typography variant="body1" fontWeight="medium" sx={{ minHeight: "80px", textAlign: "center", color: theme.palette.text.primary }}>{value.docReview}</Typography>
                    <Typography variant="body1" fontWeight="semiBold" sx={{ minHeight: "30px", textAlign: "center", color: theme.palette.text.primary }}>{value.docNm}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })
        }
      </Slider>
    </section>
  )
}
