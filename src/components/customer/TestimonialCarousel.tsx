"use client";
import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import styles from "@/styles/stunning.module.scss";

const testimonialsRow1 = [
  {
    name: "Dr. Harold Henderson, LPC",
    image: "/Harold.jpg",
    text: "S10.AI’s AI scribe captures patient sessions in real-time, ensuring accuracy and confidentiality. It streamlines workflow, reducing administrative tasks while adapting to different therapeutic styles. This AI-powered tool enhances efficiency, allowing me to focus on patient care rather than extensive documentation.'",
  },
  {
    name: "Dr. Abdullah, MD",
    image: "/dog2.jpg",
    text: "In the fast-paced ER, S10.AI’s AI scribe captures key details like vitals and treatment plans instantly. Its Epic EHR integration optimizes workflow, reducing documentation time. This AI-powered tool ensures efficiency, allowing me to focus more on patient care and less on paperwork.",
  },
];

const testimonialsRow2 = [
  {
    name: "Dr. Humera Naqvi, MD",
    image: "/Humera.jpeg",
    text: "S10.AI allows me to focus on patient interactions without the burden of clerical tasks. Its AI scribe integrates seamlessly with eClinicalWorks, ensuring real-time medical charting. This AI-driven tool enhances efficiency, reducing documentation time and improving overall workflow.",
  },
  {
    name: "Dr. Smriti Choudhary, MD",
    image: "/Smriti.jpg",
    text: "The S10.AI AI scribe has reduced my administrative workload, allowing me to prioritize patient care. It automates documentation with precision, streamlining my workflow and improving efficiency. This AI-powered tool is a must-have for any physician looking to enhance documentation efficiency.",
  },
];

const testimonialsRow3 = [
  {
    name: "Bilal Syed, IT",
    image: "/Medical-office-of-katy.webp",
    text: "S10.AI’s Robot Medical Scribe AI optimizes charting, enabling doctors to focus on patients. Its real-time transcription enhances accuracy and efficiency.",
  },
  {
    name: "Dr. Lisbeth Roy",
    image: "/Dr-Lisbeth-Roy.png",
    text: "S10.AI exceeded my expectations. Its AI-generated medical notes and chart automation enhance accuracy and ease of use. This investment has transformed our workflow, reducing documentation burdens and improving efficiency, making it an invaluable tool for our practice.",
  },
];

const rows = [
  { data: testimonialsRow1, direction: "scrollLeft" },
  { data: testimonialsRow2, direction: "scrollRight" },
  { data: testimonialsRow3, direction: "scrollLeft" },
];

const TestimonialCarousel = () => {
  return (
  <section className="witsp" style={{paddingLeft: 0, paddingRight: 0}}>
    <div className={styles.carouselWrapper}>
      <Typography variant="h3" className={styles.heading}>S10 is STUNNING: The #1 Ambient AI Solution Clinicians Reveal Why!</Typography>
      {rows.map((row, index) => (
        <div className={`${styles.row} ${styles[row.direction]}`} key={index}>
          <div className={styles.track}>
            {[...row.data, ...row.data].map((t, i) => (
              <Card className={styles.card} key={`${index}-${i}`}>
              <CardContent className={styles.cardContent}>
                <Avatar src={t.image} alt={t.name} className={styles.avatar} />
                <div className={styles.cardTextBlock}>
                  <Typography variant="body2" className={styles.cardText}>
                    {t.text}
                  </Typography>
                  <Typography color="warning.main" className={styles.cardRating}>
                    ⭐⭐⭐⭐⭐
                  </Typography>
                  <Typography fontWeight="bold" className={styles.cardName}>
                    {t.name}
                  </Typography>
                </div>
              </CardContent>
            </Card>
            
            ))}
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default TestimonialCarousel;
