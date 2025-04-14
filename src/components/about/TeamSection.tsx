
import { Box, Typography, Container, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const teamMembers = [
  {
    name: "Sridharan Sivan",
    title: "Founder & Chairman",
    company: "S10.AI Inc"
  },
  {
    name: "Shivanthika Sridharan",
    title: "Co-Founder & President",
    company: "S10.AI Inc"
  },
  {
    name: "Dr. Sri",
    title: "CEO & Chief Medical Officer",
    company: "S10.AI Inc"
  },
  {
    name: "John Reece",
    title: "Board Advisor",
    company: ""
  },
  {
    name: "DV Ravi",
    title: "Investor and Managing Director",
    company: "Shriram Capital Ltd"
  }
];

const TeamSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, sm: 10 },
        bgcolor: 'black',
        overflow: 'hidden'
      }}
    >
      {/* Section Divider at the top */}
      <Box 
        sx={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          mb: { xs: 4, md: 6 } 
        }}
      >
        <Divider 
          sx={{ 
            width: '66.666667%', 
            maxWidth: '4xl', 
            bgcolor: 'grey.800' 
          }} 
        />
      </Box>
      
      <Container 
        sx={{ 
          mx: 'auto', 
          px: 2, 
          mb: 5 
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 8 }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              fontWeight: 'normal',
              mb: 3,
              color: 'white',
              fontFamily: '"Wix Madefor Text", sans-serif'
            }}
          >
            Meet The Team
          </Typography>
        </Box>
        
        {/* Additional padding for mobile view */}
        <Box 
          sx={{ 
            pb: { xs: 6, sm: 8, md: 4 } 
          }}
        >
          <AnimatedTestimonials 
            testimonials={teamMembers} 
            autoplay={true}
            className="py-0"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
