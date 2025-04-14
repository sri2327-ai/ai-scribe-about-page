import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack } from "@mui/material";
import Image from "next/image";
import { AccessTime  } from "@mui/icons-material"; // Import MUI icons
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Save2HoursDaliyBanner() {
  return (
    <section className="witOutSp" style={{ alignItems: 'center', justifyContent: 'center', background:'linear-gradient(to bottom, #ffffff 0%, #e0f2fe 100%)',minHeight: '80vh',paddingBottom: '0'  }}>
      <div className={styles.casestudycontainer}>  
        <div className={styles.bannerCard}>
          <div className={styles.bannerContent}>
            {/* Max Read Time */}
            <div className={styles.readTime}>
              <AccessTime className={styles.clockIcon} />
              <span>Max 3 min read</span>
            </div>

            {/* Title & Description */}
            <Typography variant="h2">Save 2 Hours Daily – AI-Driven Efficiency for Gastroenterologists </Typography>
            <p>Our AI tool saves gastroenterologists 2 hours daily by automating documentation, boosting productivity.</p>

            {/* Social Media Icons */}
            <div className={styles.socialIcons}>
              <FacebookIcon className={styles.icon} />
              <XIcon className={styles.icon} />
              <LinkedInIcon className={styles.icon} />
            </div>
          </div>

          {/* Image Section */}
          <div className={styles.bannerImage}>
            <Image src="/ImprovePatientCare.webp" alt="Featured Blog" width={500} height={300} />
          </div>
        </div>
      </div>
    </section>


  );
}
