import React from 'react';
import styles from "@/styles/specialties.module.scss"
import { Box, Typography } from '@mui/material';

export default function Testimonial(){
    return(
        <section className='witSp' style={{minHeight:'10vh',}}>
  <Box className={styles.testimonial}>
 
      <Typography variant='h3'>This is your Testimonial quote. Use this space to share reviews about you, your services or your business.</Typography>
 
    <footer>
      <p>Franklin B.</p>
      <p>Customer Support</p>
    </footer>
    </Box>
  </section>
);
}