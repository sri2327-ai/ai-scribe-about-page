
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
    { title: 'HIPAA Compliant', icon: <Shield className="h-6 w-6 text-white" />, description: 'Ensures patient data protection according to US healthcare privacy standards' },
    { title: 'PIPEDA Compliant', icon: <Leaf className="h-6 w-6 text-white" />, description: 'Meets Canadian personal information protection requirements' },
    { title: 'ISO27001 Accredited', icon: <ShieldHalf className="h-6 w-6 text-white" />, description: 'Follows international information security management best practices' },
    { title: 'NHS Compliant', icon: <Shield className="h-6 w-6 text-white" />, description: 'Meets UK National Health Service data protection standards' },
    { title: 'Cyber Essential Certified', icon: <ShieldAlert className="h-6 w-6 text-white" />, description: 'Protects against common cyber threats and attacks' },
    { title: 'GDPR Compliant', icon: <ShieldCheck className="h-6 w-6 text-white" />, description: 'Complies with European data protection regulations' }
  ];

  return (
    <section id="security-compliance" aria-labelledby="security-heading" className="w-full py-16 relative overflow-hidden bg-white">
      <Box sx={{ 
        maxWidth: '1400px',
        mx: 'auto',
        px: { xs: 2, sm: 4, md: 6 },
        position: 'relative',
        zIndex: 5
      }}>
        <Stack
          spacing={{ xs: 5, md: 6 }}
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
              mb: { xs: 1, md: 2 }
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
                id="security-heading"
                sx={{ 
                  mb: 3,
                  color: 'black',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  lineHeight: 1.2
                }}
              >
                Security, Compliance & Data Protection You Can Trust
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(0, 0, 0, 0.7)',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
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
            gap: 3
          }}>
            <Grid cards={complianceCards} />
          </Box>

          {/* Mobile Marquee */}
          <Box sx={{ 
            display: { xs: 'block', md: 'none' }, 
            width: '100%',
            mt: 3
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
              aria-label="View more about security and compliance"
              sx={{ 
                background: 'linear-gradient(135deg, #143151, #387E89)',
                px: { xs: 3, md: 4 },
                py: { xs: 1.25, md: 1.5 },
                borderRadius: "50px",
                transition: 'all 0.3s ease',
                mt: 3,
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
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    border: '2px solid white',
                    transition: "transform 0.3s ease"
                  }}
                >
                  <ArrowRight className="h-3 w-3 text-white" />
                </Box>
              }
            >
              <Typography
                variant='h6' 
                sx={{
                  color: "white",
                  fontSize: { xs: '0.9rem', md: '1rem' },
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

const Grid = ({ cards }) => {
  return (
    <Box sx={{ 
      display: 'grid',
      gridTemplateColumns: { md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' },
      gap: 2,
      width: '100%'
    }}>
      {cards.map((card, index) => (
        <ComplianceCard key={index} card={card} index={index} />
      ))}
    </Box>
  );
};

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
        component="article"
        aria-label={`${card.title} certification`}
        sx={{ 
          position: 'relative',
          width: '100%',
          minWidth: '140px',
          height: '160px', // Reduced height
          p: 1.5,  // Reduced padding
          borderRadius: '12px', // Slightly reduced border radius
          background: 'linear-gradient(170deg, rgba(56, 126, 137, 0.85) 0%, rgba(20, 49, 81, 0.95) 100%)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
          }
        }}
      >
        <GlowBorderEffect 
          variant="teal" 
          borderWidth={1.5} 
          blur={15} 
          spread={30}
        />
        
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px', // Reduced size
            height: '56px', // Reduced size
            borderRadius: '50%',
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            mb: 0.5,
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
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
            fontSize: { xs: '0.8rem', md: '0.9rem' },
            textShadow: '0 1px 2px rgba(0,0,0,0.15)'
          }}
        >
          {card.title}
        </Typography>
        <Typography 
          sx={{ 
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '0.7rem',
            display: { xs: 'none', lg: 'block' },
            lineHeight: 1.3,
            mt: -0.5,
            px: 0.5
          }}
        >
          {card.description}
        </Typography>
      </Box>
    </motion.div>
  );
};
