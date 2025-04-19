
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight, Shield, ShieldCheck, ShieldAlert, ShieldHalf, Leaf } from "lucide-react";

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
    <section style={{ 
      width: '100%',
      padding: '20px',
      background: theme.palette.grey.A100 
    }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: { xs: 2, md: 3 },
        maxWidth: '100%',
        mx: 'auto',
        px: { xs: 2, md: 3 }
      }}>
        <Stack
          spacing={{ xs: 2, md: 3 }}
          direction={{ xs: "column", md: "row" }}
          sx={{
            flexGrow: 1,
            alignItems: { xs: 'center', md: 'flex-start' }
          }}
          useFlexGap
        >
          <Box sx={{
            display: {xs : 'none',  md: 'flex'},
            flexDirection: 'column',
            position: 'relative',
            gap: 2
          }}>
            {complianceCards.slice(0, 3).map((card, index) => (
              <Box 
                key={index}
                sx={{ 
                  width: { xs: '100%', md: '200px' }, 
                  p: 2, 
                  boxShadow: 2, 
                  position: 'relative', 
                  top: index === 0 ? 0 : index === 1 ? '-10px' : '-20px',
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'flex-start', 
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, #143151, #387E89)',
                  color: 'white',
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
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {card.icon}
                </Box>
                <Typography variant="h5" fontWeight="semiBold" sx={{ textAlign:'center' }}>
                  {card.title}
                </Typography>
              </Box>
            ))}
          </Box>
          
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
              gap: { xs: 2, md: 3 },
              p: { xs: 2, md: 5 },
              maxWidth: { xs: '100%', md: '800px' }
            }}
          >
            <Typography 
              variant="h3" 
              fontWeight="semiBold" 
              sx={{ 
                textAlign: 'center', 
                color: 'black',
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Security, Compliance & Data Protection You Can Trust 
            </Typography>
            <Typography 
              variant="h5" 
              fontWeight="medium" 
              sx={{ 
                textAlign: 'center', 
                color: 'black',
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
              }}
            >
              HIPAA, PIPEDA & GDPR Compliant – Adhering to global healthcare privacy laws. ISO 27001 Certified – AES-256 encryption for top-tier security. Automated Data Erasure – Secure deletion post-documentation. U.S. & Canada Compliance – Meeting the highest healthcare standards.
            </Typography>
            <Button 
              variant="text" 
              sx={{ 
                textTransform: "capitalize",
                background: 'linear-gradient(135deg, #143151, #387E89)',
                px: { xs: 2, md: 3 },
                py: { xs: 1, md: 1.5 },
                borderRadius: "50px",
                "&:hover": {
                  ".icon-box": {
                    transform: "rotate(-270deg)",
                    color: "white",
                    borderColor: "white",
                  },
                  ".button-text": {
                    color: "white",
                  },
                },
                boxShadow: 1,
                width: { xs: '100%', sm: 'auto' }
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
                    color: "white",
                    border: `2px solid white`,
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
                  color: "white",
                  transition: "color 0.3s ease",
                  fontSize: { xs: '1rem', md: '1.25rem' }
                }}
              >
                View More
              </Typography>
            </Button>

            <Box sx={{ 
              display: {xs: 'flex', md: 'none'}, 
              width: '100%',
              maxWidth: '100vw',
              overflow: "hidden"
            }}>
              <Marquee gradient={false} speed={50} loop={0}>
                {complianceCards.map((card, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      minWidth: '250px',
                      p: 2, 
                      mx: 1, 
                      boxShadow: 2, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      borderRadius: '15px', 
                      background: 'linear-gradient(135deg, #143151, #387E89)',
                      color: 'white',
                      gap: 2
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backdropFilter: 'blur(8px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      {card.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      fontWeight="semiBold" 
                      sx={{ 
                        textAlign:'center',
                        fontSize: { xs: '1rem', sm: '1.25rem' }
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Box>
                ))}
              </Marquee>
            </Box>
          </Box>
          
          <Box sx={{
            display: {xs : 'none',  md: 'flex'},
            flexDirection:'column',
            position: 'relative',
            gap: 2
          }}>
            {complianceCards.slice(3).map((card, index) => (
              <Box 
                key={index}
                sx={{ 
                  width: { xs: '100%', md: '200px' }, 
                  p: 2, 
                  boxShadow: 2, 
                  position: 'relative', 
                  top: index === 0 ? 0 : index === 1 ? '-10px' : '-20px',
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'flex-start', 
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, #143151, #387E89)',
                  color: 'white',
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
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {card.icon}
                </Box>
                <Typography variant="h5" fontWeight="semiBold" sx={{ textAlign:'center' }}>
                  {card.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </Box>
    </section>
  );
};

