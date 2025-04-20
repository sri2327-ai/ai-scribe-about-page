
import { Box, Typography, Button, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowRight } from "lucide-react";

export const SeventhSection = () => {
  const theme = useTheme();
  const laptopVw = useMediaQuery('(min-width:900px) and (max-width:1010px)');
  const tabletVw = useMediaQuery('(min-width:600px) and (max-width:700px)');

  return(
    <section className="py-10 px-4">
      <Stack
        spacing={3}
        direction={{ xs: "column", md: 'row'}}
        sx={{
          background: '#FFFFFF',
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'space-between',
          borderRadius: 4,
          p: { xs: 3, sm: 4, md: 5 },
          gap: { xs: 4, md: 6 },
          maxWidth: '1280px',
          mx: 'auto',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)'
        }}
        useFlexGap
      >
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            alignItems: { xs: 'center', md: 'flex-start' },
            maxWidth: laptopVw ? '240px' : { xs: '100%', sm: '500px', md: '320px', lg: '380px' },
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#000000', 
              lineHeight: 1.2,
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
              fontWeight: 700
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
              px: 2.5,
              py: 1,
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
              boxShadow: 'none',
              mt: 0.5,
              alignSelf: { xs: 'center', md: 'flex-start' }
            }}
            startIcon={
              <Box
                className="icon-box"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 22,
                  height: 22,
                  borderRadius: "50%", 
                  color: '#143151',
                  border: `2px solid #143151`,
                  transition: "transform 0.3s ease",
                  transform: "rotate(0deg)",
                  mr: 1
                }}
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </Box>
            }
          >
            <Typography
              className="button-text"
              variant='h6' 
              sx={{
                background: 'linear-gradient(135deg, #143151, #387E89)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: "color 0.3s ease",
                fontWeight: 600,
                fontSize: '0.9rem'
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
              lg: 'repeat(2, 1fr)'
            },
            gap: { xs: 2, sm: 3 },
            width: '100%',
            maxWidth: { xs: '100%', sm: '800px' }
          }}
        >
          {[
            { 
              title: "Specialty-Specific AI Models", 
              description: "Custom-trained for each medical specialty, from cardiology to pediatrics." 
            },
            { 
              title: "Real-Time Documentation", 
              description: "Captures complex medical terms and clinical details across specialties, including real-time EKG, triage, dermatology documentation, and more." 
            },
            { 
              title: "Automated Clinical Workflows", 
              description: "Streamlines referrals, prescriptions, and follow-ups." 
            },
            { 
              title: "Smart Patient Engagement", 
              description: "Reduces no-shows and improves adherence to care plans." 
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
                p: { xs: 2, sm: 2.5 },
                borderRadius: 3,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                height: '100%',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#143151',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  fontWeight: 700
                }}
              >
                {item.title}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#000000', 
                  opacity: 0.7,
                  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                  lineHeight: 1.5,
                  fontWeight: 400
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

export default SeventhSection;
