import styles from "@/styles/casestudy.module.scss";
import { Typography } from "@mui/material";
import Image from "next/image";

const CaseStudyLandingPage = () => {
  return (
    <section className="witOutSp" style={{ alignItems: 'center', justifyContent: 'center', background:'linear-gradient(to bottom, #ffffff 0%, #e0f2fe 100%)' }}>
    <div className={styles.wrapper}>  
      <div className={styles.featuredCard}>
        <div className={styles.featuredContent}>
          {/* <span className={styles.tag}>Featured</span> */}
          <Typography variant="h2">100% Accuracy in Nordic Languages – Fast Documentation</Typography>
          <p>AI-driven solution ensures flawless Nordic language documentation, saving time and reducing errors.</p>
        </div>
        <div className={styles.featuredImage}>
          <Image src="/ImprovePatientCare.webp" alt="Featured Blog" width={500} height={300} />
        </div>
      </div>
    </div>
    </section>
  );
};

export default CaseStudyLandingPage;
