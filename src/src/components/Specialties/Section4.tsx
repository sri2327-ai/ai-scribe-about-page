import React from 'react';
import styles from "@/styles/specialties.module.scss"
import { Box, Button, Typography } from '@mui/material';

export default function ClosingSection (){
    return(
        <section className='witSp' style={{minHeight:'20vh'}}>
  <Box className={styles.closing}>
    <Typography variant='h2'>Discover why S10.AI is the perfect fit for your specialty.</Typography>
    <p>See how S10.AI’s specialty-specific AI can enhance your care delivery and improve clinician well-being.</p>
    <Button variant='contained'>See Demo</Button>
    </Box>
  </section>
);
}
