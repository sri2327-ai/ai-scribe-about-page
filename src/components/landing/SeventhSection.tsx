import { Box, Typography, Button, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowRight } from "lucide-react";

export const SeventhSection = () => {
  const theme = useTheme();
  const laptopVw = useMediaQuery('(min-width:900px) and (max-width:1010px)');
  const tabletVw = useMediaQuery('(min-width:600px) and (max-width:700px)');

  return(
    <section className="witSp">
      <Stack
        spacing={4}
        direction={{ xs: "column", md: 'row'}}
        sx={{
          background: '#FFFFFF',
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'space-between',
          borderRadius: 4,
          p: { xs: 4, sm: 5, md: 6 },
          gap: { xs: 4, md: 6 }
        }}
        useFlexGap
      >
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            alignItems: { xs: 'center', md: 'flex-start' },
            maxWidth: laptopVw ? '214px' : { xs: '100%', sm: '500px', md: '400px', lg: '500px' },
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            sx={{ 
              color: '#000000', 
              lineHeight: 1.2,
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }
            }}
          >
            AI Solutions Designed for Every Medical Specialty
          </Typography>
          <Button 
            variant="outlined" 
            sx={{ 
              textTransform: "capitalize",
              color: '#143151',
              borderColor: '#143151',
              px: 3,
              py: 1.5,
              borderRadius: "50px",
              "&:hover":{
                backgroundColor: '#F0F4F7',
                ".icon-box": {
                  transform: "rotate(-270deg)",
                  color: '#387E89',
                  borderColor: '#387E89',
                },
                ".button-text": {
                  color: '#387E89',
                },
              },
              boxShadow: 'none'
            }}
            startIcon={
              <Box
                className="icon-box"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  borderRadius: "50%", 
                  color: '#143151',
                  border: `2px solid #143151`,
                  transition: "transform 0.3s ease",
                  transform: "rotate(0deg)",
                  mr: 1
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </Box>
            }
          >
            <Typography
              className="button-text"
              variant='h6' 
              fontWeight="semiBold" 
              sx={{
                background: 'linear-gradient(135deg, #143151, #387E89)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: "color 0.3s ease"
              }}
            >
              View More
            </Typography>
          </Button>
        </Box>
        <Box 
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(2, minmax(250px, 1fr))'
            },
            gap: { xs: 3, sm: 4 },
            width: '100%',
            maxWidth: { xs: '100%', sm: '800px' }
          }}
        >
          {[
            { 
              title: "Specialty-Specific AI Models", 
              description: "Engineered for precise documentation needs across disciplines." 
            },
            { 
              title: "Workflow Optimization", 
              description: "Reduces charting time, improving clinician efficiency." 
            },
            { 
              title: "Advanced Clinical Accuracy", 
              description: "Captures medical details with real-time documentation for EKG reports, emergency triaging, and dermatology screenings." 
            },
            { 
              title: "Specialty-Centric AI Automation", 
              description: "Ensures accurate documentation for every medical field, including multispecialty care." 
            }
          ].map((item, index) => (
            <Box 
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                background: '#FFFFFF',
                border: '1px solid #E0E0E0',
                p: { xs: 2.5, sm: 3 },
                borderRadius: 3,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                height: '100%',
                justifyContent: 'space-between'
              }}
            >
              <Typography 
                variant="h5" 
                fontWeight="bold" 
                sx={{ 
                  color: '#143151',
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                }}
              >
                {item.title}
              </Typography>
              <Typography 
                variant="h6" 
                fontWeight="semiBold" 
                sx={{ 
                  color: '#000000', 
                  opacity: 0.8,
                  fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
                  lineHeight: 1.4
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </section>
  );
};
