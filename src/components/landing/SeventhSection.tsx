
import { Box, Typography, Button, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowRight } from "lucide-react";

export const SeventhSection = () => {
  const theme = useTheme();
  const laptopVw = useMediaQuery('(min-width:900px) and (max-width:1010px)');
  const tabletVw = useMediaQuery('(min-width:600px) and (max-width:700px)');

  return(
    <section className="py-4 px-3">
      <Stack
        spacing={2}
        direction={{ xs: "column", md: 'row'}}
        sx={{
          background: '#FFFFFF',
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'space-between',
          borderRadius: 4,
          p: { xs: 2, sm: 2, md: 3 },
          gap: { xs: 2, md: 3 },
          maxWidth: '1280px',
          mx: 'auto',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
        }}
        useFlexGap
      >
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: { xs: 'center', md: 'flex-start' },
            maxWidth: laptopVw ? '220px' : { xs: '100%', sm: '450px', md: '300px', lg: '350px' },
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#000000', 
              lineHeight: 1.2,
              fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.7rem' },
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
              px: 2,
              py: 0.75,
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
              mt: 0,
              alignSelf: { xs: 'center', md: 'flex-start' }
            }}
            startIcon={
              <Box
                className="icon-box"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 20,
                  height: 20,
                  borderRadius: "50%", 
                  color: '#143151',
                  border: `2px solid #143151`,
                  transition: "transform 0.3s ease",
                  transform: "rotate(0deg)",
                  mr: 1
                }}
              >
                <ArrowRight className="h-3 w-3" />
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
                fontSize: '0.8rem'
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
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)'
            },
            gap: { xs: 1.5, sm: 2 },
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
              description: "Captures complex medical terms and clinical details across specialties." 
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
                gap: 1,
                background: '#FFFFFF',
                border: '1px solid #E0E0E0',
                p: { xs: 1.5, sm: 2 },
                borderRadius: 3,
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                height: '100%',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#143151',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
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
                  fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                  lineHeight: 1.4,
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
