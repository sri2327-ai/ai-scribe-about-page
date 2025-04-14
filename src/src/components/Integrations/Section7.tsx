import React from 'react';
import styles from '@/styles/integration.module.scss';
import { Button } from '@mui/material';

export default function LastScroll(){
  return (
    <section className={styles.hero}>
      <h1>Smart. Fast. Effortless.</h1>
      <p>Elevate Healthcare Efficiency with S10.AI—Get Started Now!</p>
      <Button variant='contained'  className={styles.demoButton}>Request a Demo</Button>

      <div className={styles.imageContainer}>
        <img src="/Mountain.jpg" alt="Curtain" className={styles.imageLeft} />
        <img src="/plant.jpg" alt="Bottle" className={styles.imageCenter} />
        <img src="/Tree.jpg" alt="Person" className={styles.imageRight} />
      </div>
    </section>
  );
};

