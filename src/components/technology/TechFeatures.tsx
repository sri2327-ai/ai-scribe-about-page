import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { CheckCircle } from 'lucide-react';

interface TechFeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
  imageOnLeft?: boolean;
}

const TechFeatures: React.FC<TechFeatureProps> = ({
  title,
  description,
  imageSrc,
  features,
  imageOnLeft = false,
}) => {
  const theme = useTheme();

  return (
    <Grid container spacing={3} sx={{
      py: 8,
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
    }}>
      {imageOnLeft ? (
        <>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              order: { xs: 2, lg: 1 }
            }}
          >
            <Box className="p-4 md:p-8">
              <Typography
                variant="h4"
                component="h3"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: '1.1rem',
                }}
              >
                {description}
              </Typography>
              <Box mt={3}>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.primary.light,
                    mb: 2,
                  }}
                >
                  Key Features:
                </Typography>
                {features.map((feature, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    mb={1.5}
                    sx={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    <CheckCircle
                      size={20}
                      style={{
                        marginRight: 8,
                        color: theme.palette.primary.main,
                      }}
                    />
                    {feature}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              order: { xs: 1, lg: 2 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src={imageSrc}
              alt={title}
              className="rounded-2xl shadow-2xl"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '400px',
              }}
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              order: { xs: 2, lg: 2 }
            }}
          >
            <Box className="p-4 md:p-8">
              <Typography
                variant="h4"
                component="h3"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: '1.1rem',
                }}
              >
                {description}
              </Typography>
              <Box mt={3}>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.primary.light,
                    mb: 2,
                  }}
                >
                  Key Features:
                </Typography>
                {features.map((feature, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    mb={1.5}
                    sx={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    <CheckCircle
                      size={20}
                      style={{
                        marginRight: 8,
                        color: theme.palette.primary.main,
                      }}
                    />
                    {feature}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              order: { xs: 1, lg: 1 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src={imageSrc}
              alt={title}
              className="rounded-2xl shadow-2xl"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '400px',
              }}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default TechFeatures;
