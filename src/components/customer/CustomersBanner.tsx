
import { Typography, Stack, Button } from "@mui/material";
import { AlarmClock, Facebook, Linkedin, X } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import styles from "@/styles/casecontentpage.module.scss";

const CustomersBanner = () => {
  return (
    <section className="witOutSp" style={{ alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, #FFFFFF 0%, #A5CCF3 100%)', minHeight: '80vh', paddingBottom: '0' }}>
      <div className={styles.casestudycontainer}>  
        <div className={styles.bannerCard}>
          <div className={styles.bannerContent}>
            <Stack spacing={3}>
              <Typography variant="h2">Save 2 Hours Daily - AI - Driven Efficiency for Gastroenterologists</Typography>
              <Typography variant="h5">Dr.Sameer Siddique</Typography>
              <div className="flex gap-4">
                <AlarmClock className="w-6 h-6" />
                <Facebook className="w-6 h-6" />
                <X className="w-6 h-6" />
                <Linkedin className="w-6 h-6" />
              </div>
            </Stack>
            <Button variant="contained">Read More</Button>
          </div>
          <div className={styles.bannerImage}>
            <OptimizedImage src="/Hmera.jpeg" alt="Featured Blog" width={500} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersBanner;
