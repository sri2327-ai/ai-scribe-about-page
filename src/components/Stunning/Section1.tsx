import styles from "@/styles/casecontentpage.module.scss";
import { Typography,Box,Stack,Button } from "@mui/material";
import Image from "next/image";
import { AccessTime  } from "@mui/icons-material"; // Import MUI icons
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function CustomersBanner() {
  return (
    <section className="witOutSp" style={{ alignItems: 'center', justifyContent: 'center', background:'linear-gradient(to bottom, #ffffff 0%, #e0f2fe 100%)',minHeight: '80vh',paddingBottom: '0'  }}>
      <div className={styles.casestudycontainer}>  
        <div className={styles.bannerCard}>
          <div className={styles.bannerContent}>

            {/* Title & Description */}
            <Stack spacing={3}>
            <Typography variant="h2">Save 2 Hours Daily - AI - Driven Efficiency for Gastroenterologists</Typography>
            <Typography variant="h5">Dr.Sameer Siddique</Typography>
           
            {/* Social Media Icons */}
            </Stack>
            <Button variant="contained">
            Read More
          </Button>
            
          </div>

          {/* Image Section */}
          <div className={styles.bannerImage}>
            <Image src="/Hmera.jpeg" alt="Featured Blog" width={500} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
}
