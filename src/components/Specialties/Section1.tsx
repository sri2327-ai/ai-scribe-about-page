import React from 'react';
import styles from "@/styles/specialties.module.scss"
import { Button, Typography } from '@mui/material';

export default function SpecialtiesBanner() {

    return(
        <section className='witSp' style={{paddingLeft: '0',paddingRight:'0'}}>
        <div className={styles.hero}>
        <div className={styles.hero__image}>
          <img src={"/Psychotherapy-Documentation.png"} alt="Healthcare Professional" />
        </div>
        <div className={styles.hero__content}>
          <Typography variant='h3'>Transforming Healthcare,<br />One Specialty at a Time</Typography>
          <p>
            The Leading Ambient AI Platform with AI Models Designed<br />
            to Capture the Unique Details of Every Medical Field.
          </p>
          <Button variant='contained'>See Demo</Button>
  
         </div>
  
       
        </div>
      </section>
);
}