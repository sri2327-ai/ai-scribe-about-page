
import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Using the correct Grid import

export interface TechFeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
}

const TechFeatures: React.FC<TechFeatureProps> = ({ title, description, imageSrc, features }) => {
  return (
    <Box sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {/* First section */}
        <Grid xs={12} lg={6}>
          <Box>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </Box>
        </Grid>
        
        {/* Second section (image) */}
        <Grid xs={12} lg={6} 
          sx={{ 
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Box
            component="img"
            src={imageSrc}
            alt={title}
            sx={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TechFeatures;
