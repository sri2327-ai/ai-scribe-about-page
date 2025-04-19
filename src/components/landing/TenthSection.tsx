
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Shield, ShieldCheck, ShieldAlert, ShieldHalf, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { GlowBorderEffect } from "@/components/ui/effects/glow-border-effect";

export const TenthSection = () => {
  const theme = useTheme();

  const complianceCards = [
    { title: 'HIPAA Compliant', icon: <Shield className="h-8 w-8 text-white" /> },
    { title: 'PIPEDA Compliant', icon: <Leaf className="h-8 w-8 text-white" /> },
    { title: 'ISO27001 Accredited', icon: <ShieldHalf className="h-8 w-8 text-white" /> },
    { title: 'NHS Compliant', icon: <Shield className="h-8 w-8 text-white" /> },
    { title: 'Cyber Essential Certified', icon: <ShieldAlert className="h-8 w-8 text-white" /> },
    { title: 'GDPR Compliant', icon: <ShieldCheck className="h-8 w-8 text-white" /> }
  ];

  return (
    <section className="w-full py-20 relative overflow-hidden bg-white">
      <Box sx={{ 
        maxWidth: '1400px',
        mx: 'auto',
        px: { xs: 2, sm: 4, md: 6 },
        position: 'relative',
        zIndex: 5
      }}>
        <Stack
          spacing={{ xs: 6, md: 8 }}
          direction="column"
          sx={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Title Section */}
          <Box 
            sx={{
              width: { xs: '100%', md: '80%', lg: '70%' },
              textAlign: 'center',
              mb: { xs: 2, md: 4 }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h2" 
                fontWeight="bold"
                sx={{ 
                  mb: 3,
                  color: 'black',
                  fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.5rem' },
                  lineHeight: 1.2
                }}
              >
                Security, Compliance & Data Protection You Can Trust
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(0, 0, 0, 0.7)',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.6,
                  maxWidth: '900px',
                  mx: 'auto'
                }}
              >
                HIPAA, PIPEDA & GDPR Compliant – Adhering to global healthcare privacy laws. ISO 27001 Certified – AES-256 encryption for top-tier security. Automated Data Erasure – Secure deletion post-documentation. U.S. & Canada Compliance – Meeting the highest healthcare standards.
              </Typography>
            </motion.div>
          </Box>

          {/* Cards Section - Desktop */}
          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            width: '100%',
            justifyContent: 'center',
            gap: 4
          }}>
            <Grid cards={complianceCards} />
          </Box>

          {/* Mobile Marquee */}
          <Box sx={{ 
            display: { xs: 'block', md: 'none' }, 
            width: '100%',
            mt: 4
          }}>
            <Marquee gradient={false} speed={30} pauseOnHover={true}>
              <Stack direction="row" spacing={2} sx={{ px: 2 }}>
                {complianceCards.map((card, index) => (
                  <ComplianceCard key={index} card={card} index={index} />
                ))}
              </Stack>
            </Marquee>
          </Box>

          {/* Button Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="contained" 
              sx={{ 
                background: 'linear-gradient(135deg, #143151, #387E89)',
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                borderRadius: "50px",
                transition: 'all 0.3s ease',
                mt: 4,
                "&:hover": {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(20, 49, 81, 0.2)',
                  ".icon-box": {
                    transform: "rotate(-45deg)",
                  }
                }
              }}
              startIcon={
                <Box
                  className="icon-box"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    border: '2px solid white',
                    transition: "transform 0.3s ease"
                  }}
                >
                  <ArrowRight className="h-4 w-4 text-white" />
                </Box>
              }
            >
              <Typography
                variant='h6' 
                sx={{
                  color: "white",
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 600
                }}
              >
                View More
              </Typography>
            </Button>
          </motion.div>
        </Stack>
      </Box>
    </section>
  );
};

// Grid component for organizing the compliance cards in a more visually pleasing layout
const Grid = ({ cards }) => {
  return (
    <Box sx={{ 
      display: 'grid',
      gridTemplateColumns: { md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' },
      gap: 3,
      width: '100%'
    }}>
      {cards.map((card, index) => (
        <ComplianceCard key={index} card={card} index={index} />
      ))}
    </Box>
  );
};

// ComplianceCard component for consistent card styling
const ComplianceCard = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ position: 'relative' }}
    >
      <Box 
        sx={{ 
          position: 'relative',
          width: '100%',
          minWidth: '180px',
          height: '240px',
          p: 3,
          borderRadius: '20px',
          background: 'linear-gradient(170deg, rgba(56, 126, 137, 0.85) 0%, rgba(20, 49, 81, 0.95) 100%)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)',
          }
        }}
      >
        <GlowBorderEffect 
          variant="teal" 
          borderWidth={2} 
          blur={20} 
          spread={40}
        />
        
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            mb: 2,
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)',
            }
          }}
        >
          {card.icon}
        </Box>
        <Typography 
          variant="h6" 
          fontWeight="semiBold" 
          sx={{ 
            textAlign: 'center',
            color: 'white',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          {card.title}
        </Typography>
      </Box>
    </motion.div>
  );
};
