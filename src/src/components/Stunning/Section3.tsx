import React from "react";
import { Box, Typography, Stack,Button } from "@mui/material";
import styles from "@/styles/stunning.module.scss";

const PromoBanner = () => {
  return (
    <section className="witSp" style={{paddingLeft: 0, paddingRight: 0}}>
    <Box className={styles.banner} mt={6} mb={6}>
      <Typography variant="h3" className={styles.text}>
        <strong>9 out of 10 providers</strong> adopt both the <strong>CRUSH AI Medical Scribe</strong> and <strong>AI Agent BRAVO</strong>—saving time, reducing stress, addressing staffing shortages, and delivering superior patient care.
      </Typography>
     
      <Button variant="contained">
           Book A Demo
          </Button>

         
    </Box>
    </section>
  );
};

export default PromoBanner;
