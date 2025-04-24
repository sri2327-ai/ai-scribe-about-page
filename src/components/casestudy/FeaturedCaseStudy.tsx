
import React from 'react';
import { Typography } from "@mui/material";
import styles from "@/styles/casestudy.module.scss";
import OptimizedImage from "@/components/ui/optimized-image";
import { useNavigate } from "react-router-dom";

const FeaturedCaseStudy = () => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.wrapper}>
      <div 
        className={styles.featuredCard}
        onClick={() => navigate('/resources/casestudies/100-accuracy-in-nordic-languages-fast-documentation')}
      >
        <div className={styles.featuredContent}>
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold text-[#143151] mb-4">
            100% Accuracy in Nordic Languages – Fast Documentation
          </Typography>
          <p className="text-gray-700 text-lg">
            AI-driven solution ensures flawless Nordic language documentation, saving time and reducing errors.
          </p>
        </div>
        <div className={styles.featuredImage}>
          <OptimizedImage 
            src="/ImprovePatientCare.webp" 
            alt="Featured Case Study" 
            className="w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCaseStudy;
