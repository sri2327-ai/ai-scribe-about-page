
import React from 'react';
import { Typography } from "@mui/material";
import styles from "@/styles/casestudy.module.scss";
import { useNavigate } from 'react-router-dom';
import OptimizedImage from "@/components/ui/optimized-image";

const caseStudies = [
  { folder: "100-accuracy-in-nordic-languages", title: "100% Accuracy in Nordic Languages – Fast Documentation", description: "AI-driven solution ensures flawless Nordic language documentation, saving time and reducing errors.", image: "/ImprovePatientCare.webp" },
  { folder: "save-2-hours-daily", title: "Save 2 Hours Daily – AI Efficiency for Gastroenterologists", description: "Our AI tool saves gastroenterologists 2 hours daily by automating documentation, boosting productivity.", image: "/ImprovePatientCare.webp" },
  { folder: "crush-saves-2-hours-daily", title: "CRUSH Saves 2+ Hours Daily for Multi-Provider Practices", description: "CRUSH enhances workflow and saves over 2 hours daily for multi-provider practices by streamlining documentation.", image: "/ImprovePatientCare.webp" },
  // ... Add more case studies as needed
];

const FeaturedCaseStudy = () => {
  return (
    <section className="py-12" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #A5CCF3 100%)' }}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>  
          <div className={styles.featuredCard}>
            <div className={styles.featuredContent}>
              <Typography variant="h2" className="text-3xl font-bold mb-4">
                100% Accuracy in Nordic Languages – Fast Documentation
              </Typography>
              <p className="text-lg text-gray-700">
                AI-driven solution ensures flawless Nordic language documentation, saving time and reducing errors.
              </p>
            </div>
            <div className={styles.featuredImage}>
              <OptimizedImage 
                src="/ImprovePatientCare.webp" 
                alt="Featured Case Study" 
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudyGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className={styles.container}>
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.folder}
              className={styles.card}
              onClick={(event) => {
                const url = `/resources/casestudies/${caseStudy.folder}`;
                if (event.metaKey || event.ctrlKey) {
                  window.open(url, "_blank");
                } else {
                  navigate(url);
                }
              }}
            >
              <OptimizedImage
                src={caseStudy.image}
                alt={caseStudy.title}
                className={styles.image}
              />
              <div className={styles.content}>
                <Typography variant="h5" className={styles.title}>
                  {caseStudy.title}
                </Typography>
                <p className={styles.description}>{caseStudy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudy = () => {
  return (
    <div className="min-h-screen">
      <FeaturedCaseStudy />
      <CaseStudyGrid />
    </div>
  );
};

export default CaseStudy;
