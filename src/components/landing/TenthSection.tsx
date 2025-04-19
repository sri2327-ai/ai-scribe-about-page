
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Shield, ShieldCheck, ShieldAlert, ShieldHalf, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export const TenthSection = () => {
  const theme = useTheme();

  const complianceCards = [
    { title: 'HIPAA Compliant', icon: <Shield className="h-8 w-8 text-white" /> },
    { title: 'PIPEDA Compliant', icon: <Leaf className="h-8 w-8 text-white" /> },
    { title: 'ISO27001 Accredited', icon: <ShieldHalf className="h-8 w-8 text-white" /> },
    { title: 'NHS Compliant', icon: <Shield className="h-8 w-8 text-white" /> },
    { title: '​Cyber Essential Certified', icon: <ShieldAlert className="h-8 w-8 text-white" /> },
    { title: 'GDPR Compliant', icon: <ShieldCheck className="h-8 w-8 text-white" /> }
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <Box sx={{ 
        maxWidth: '1400px',
        mx: 'auto',
        px: { xs: 2, sm: 4, md: 6 }
      }}>
        <Stack
          spacing={{ xs: 4, md: 6 }}
          direction={{ xs: "column", md: "row" }}
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{
            display: {xs : 'none', md: 'flex'},
            gap: 3,
            width: '30%'
          }}>
            {complianceCards.slice(0, 3).map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box 
                  sx={{ 
                    width: '100%',
                    p: 3,
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    transform: `translateY(${index * 20}px)`,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: `translateY(${index * 20 - 10}px)`,
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backdropFilter: 'blur(10px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
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
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    {card.title}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
          
          <Box 
            sx={{
              width: { xs: '100%', md: '40%' },
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h3" 
                fontWeight="bold"
                sx={{ 
                  mb: 2,
                  background: 'linear-gradient(135deg, #143151, #387E89)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                }}
              >
                Security, Compliance & Data Protection You Can Trust 
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  lineHeight: 1.6
                }}
              >
                HIPAA, PIPEDA & GDPR Compliant – Adhering to global healthcare privacy laws. ISO 27001 Certified – AES-256 encryption for top-tier security. Automated Data Erasure – Secure deletion post-documentation. U.S. & Canada Compliance – Meeting the highest healthcare standards.
              </Typography>
            </motion.div>

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
          </Box>

          <Box sx={{
            display: {xs : 'none', md: 'flex'},
            gap: 3,
            width: '30%'
          }}>
            {complianceCards.slice(3).map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box 
                  sx={{ 
                    width: '100%',
                    p: 3,
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #143151, #387E89)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    transform: `translateY(${index * 20}px)`,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: `translateY(${index * 20 - 10}px)`,
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backdropFilter: 'blur(10px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
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
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    {card.title}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          <Box sx={{ 
            display: {xs: 'block', md: 'none'}, 
            width: '100%',
            mt: 4
          }}>
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
              <Stack direction="row" spacing={2} sx={{ px: 2 }}>
                {complianceCards.map((card, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      minWidth: '280px',
                      p: 3,
                      mx: 2,
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #143151, #387E89)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
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
                        fontSize: '1rem'
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Marquee>
          </Box>
        </Stack>
      </Box>
    </section>
  );
};
