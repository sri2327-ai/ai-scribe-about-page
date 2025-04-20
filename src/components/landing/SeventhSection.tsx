import { Box, Typography, Button, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowRight, Brain, User, Heart, Eye, Building2, FlaskConical, Apple, Ambulance, CircleDot, Stethoscope, Droplets, Activity, HeartPulse, Ear, Microscope, ShieldPlus } from "lucide-react";
import Marquee from "react-fast-marquee";

const specialties = [
  { name: "Orthopedics", icon: Activity },
  { name: "Urology", icon: Droplets },
  { name: "Neurology", icon: Brain },
  { name: "Pediatrics", icon: User },
  { name: "Cardiology", icon: Heart },
  { name: "Oncology", icon: CircleDot },
  { name: "Pulmonology", icon: Activity },
  { name: "Gynecology", icon: HeartPulse },
  { name: "Psychiatry", icon: Brain },
  { name: "Ophthalmology", icon: Eye },
  { name: "Hospital Medicine", icon: Building2 },
  { name: "Hematology", icon: FlaskConical },
  { name: "Geriatrics", icon: Activity },
  { name: "Gastroenterology", icon: Apple },
  { name: "Emergency Medicine", icon: Ambulance },
  { name: "Hepatology", icon: CircleDot },
  { name: "Internal Medicine", icon: Stethoscope },
  { name: "Nephrology", icon: Droplets },
  { name: "Rheumatology", icon: Activity },
  { name: "Urgent Care", icon: HeartPulse },
  { name: "ENT", icon: Ear },
  { name: "Endocrinology", icon: Microscope },
  { name: "Dermatology", icon: ShieldPlus }
];

export const SeventhSection = () => {
  const theme = useTheme();
  const laptopVw = useMediaQuery('(min-width:900px) and (max-width:1010px)');
  const tabletVw = useMediaQuery('(min-width:600px) and (max-width:700px)');

  return(
    <section className="py-16 px-4">
      <Stack
        spacing={4}
        direction={{ xs: "column", md: 'row'}}
        sx={{
          background: '#FFFFFF',
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'space-between',
          borderRadius: 4,
          p: { xs: 4, sm: 5, md: 6 },
          gap: { xs: 6, md: 8 },
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
            gap: 4,
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
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
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
              boxShadow: 'none',
              mt: 1,
              alignSelf: { xs: 'center', md: 'flex-start' }
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
              sx={{
                background: 'linear-gradient(135deg, #143151, #387E89)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: "color 0.3s ease",
                fontWeight: 600
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
            gap: { xs: 3, sm: 4 },
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
                gap: 2,
                background: '#FFFFFF',
                border: '1px solid #E0E0E0',
                p: { xs: 3, sm: 3.5 },
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
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
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
                  fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Stack>
      <Box sx={{ mt: 12, maxWidth: '1400px', mx: 'auto' }}>
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: "center",
            color: "#000000",
            fontWeight: 700,
            mb: { xs: 3, md: 4 },
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" }
          }}
        >
          Specialized for Every Medical Field
        </Typography>
        <Box sx={{ display: 'flex', flex: 1, overflow: "hidden" }}>
          <Marquee pauseOnHover={true} gradient={false} speed={50} loop={0}>
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <Box 
                  key={index} 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    mx: { xs: 1, sm: 2 }, 
                    background: '#FFFFFF',
                    borderRadius: 3, 
                    p: { xs: 2, sm: 3 }, 
                    my: 1,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #E0E0E0',
                    gap: 2,
                    alignItems: 'center',
                    minWidth: { xs: '100px', sm: '120px' },
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.08)'
                    }
                  }}
                >
                  <div className="group">
                    <IconComponent
                      size={28}
                      color="black"
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #143151, #387E89)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 600,
                      fontSize: { xs: '0.75rem', sm: '0.875rem' }
                    }}
                  >
                    {specialty.name}
                  </Typography>
                </Box>
              );
            })}
          </Marquee>
        </Box>
      </Box>
    </section>
  );
};

export default SeventhSection;
