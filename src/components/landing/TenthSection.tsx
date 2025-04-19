
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";

export const TenthSection = () => {
  const theme = useTheme();

  return (
    <section style={{ 
      width: '100%',
      padding: '30px',
      background: theme.palette.grey.A100 
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: 3 }}>
        <Stack
          spacing={3}
          direction={{ xs: "column", md: "row" }}
          sx={{
            flexGrow: 1,
          }}
          useFlexGap
        >
          <Box sx={{
            display: {xs : 'none',  md: 'flex'},
            flexDirection: 'column',
            position: 'relative',
          }}>
            <Box sx={{ 
              width: '200px', 
              p: 2, 
              boxShadow: 2, 
              position: 'relative', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'flex-start', 
              borderRadius: '15px',
              flex: 1, 
              background: 'linear-gradient(135deg, #143151, #387E89)',
              color: 'white'
            }}>
              <img
                src="/circleIcon.png"
                alt="circleIcon"
                width="90"
                height="auto"
              />
              <Typography variant="h5" fontWeight="semiBold" sx={{ textAlign:'center' }}>
                HIPAA Compliant
              </Typography>
            </Box>
            <Box sx={{ 
              width: '200px', 
              p: 2, 
              boxShadow: 2, 
              position: 'relative', 
              top: '-10px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'flex-start', 
              borderRadius: '15px',
              flex: 1, 
              background: 'linear-gradient(135deg, #143151, #387E89)',
              color: 'white'
            }}>
              <img
                src="/circleIcon.png"
                alt="circleIcon"
                width="90"
                height="auto"
              />
              <Typography variant="h5" fontWeight="semiBold" sx={{ textAlign:'center' }}>
                PIPEDA Compliant
              </Typography>
            </Box>
            <Box sx={{ 
              width: '200px', 
              p: 2, 
              boxShadow: 2, 
              position: 'relative', 
              top: '-20px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              borderRadius: '15px', 
              flex: 1, 
              background: 'linear-gradient(135deg, #143151, #387E89)',
              color: 'white'
            }}>
              <img
                src="/circleIcon.png"
                alt="circleIcon"
                width="90"
                height="auto"
              />
              <Typography variant="h5" fontWeight="semiBold" sx={{ textAlign:'center' }}>
                ISO27001 Accredited
              </Typography>
            </Box>
          </Box>
          
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
              gap: 3,
              p: 5
            }}
          >
            <Typography variant="h3" fontWeight="semiBold" sx={{ textAlign: 'center', color: 'black' }}>
              Security, Compliance & Data Protection You Can Trust 
            </Typography>
            <Typography variant="h5" fontWeight="medium" sx={{ textAlign: 'center', color: 'black' }}>
              HIPAA, PIPEDA & GDPR Compliant – Adhering to global healthcare privacy laws. ISO 27001 Certified – AES-256 encryption for top-tier security. Automated Data Erasure – Secure deletion post-documentation. U.S. & Canada Compliance – Meeting the highest healthcare standards.
            </Typography>
            <Button 
              variant="text" 
              sx={{ 
                textTransform: "capitalize",
                background: 'linear-gradient(135deg, #143151, #387E89)',
                px: 3,
                py: 1.5,
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
                boxShadow: 1
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
                  transition: "color 0.3s ease"
                }}
              >
                View More
              </Typography>
            </Button>
            <Box sx={{ display: {xs: 'flex', md: 'none'}, minWidth:'300px', maxWidth: '900px', overflow: "hidden" }}>
              <Marquee gradient={false} speed={50} loop={0}>
                {[
                  "HIPAA Compliant",
                  "PIPEDA Compliant",
                  "ISO27001 Accredited",
                  "NHS Compliant",
                  "​Cyber Essential Certified",
                  "GDPR Compliant"
                ].map((title, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      width: '300px', 
                      p: 2, 
                      mx: 2, 
                      boxShadow: 2, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      borderRadius: '15px', 
                      background: 'linear-gradient(135deg, #143151, #387E89)',
                      color: 'white'
                    }}
                  >
                    <img
                      src="/circleIcon.png"
                      alt="circleIcon"
                      width="90"
                      height="auto"
                    />
                    <Typography variant="h5" fontWeight="semiBold" sx={{ textAlign:'center' }}>
                      {title}
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
          }}>
            <Box sx={{ 
              width: '200px', 
              p: 2, 
              boxShadow: 2, 
              position: 'relative', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'flex-start', 
              borderRadius: '15px',
              flex: 1, 
              background: 'linear-gradient(135deg, #143151, #387E89)',
              color: 'white'
            }}>
              <img
                src="/circleIcon.png"
                alt="circleIcon"
                width="90"
                height="auto"
              />
              <Typography variant="h5" fontWeight="semiBold" sx={{ textAlign:'center' }}>
                NHS Compliant
              </Typography>
            </Box>
            <Box sx={{ 
              width: '200px', 
              p: 2, 
              boxShadow: 2, 
              position: 'relative', 
              top: '-10px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'flex-start', 
              borderRadius: '15px',
              flex: 1, 
              background: 'linear-gradient(135deg, #143151, #387E89)',
              color: 'white'
            }}>
              <img
                src="/circleIcon.png"
                alt="circleIcon"
                width="90"
                height="auto"
              />
              <Typography variant="h5" fontWeight="semiBold" sx={{ textAlign:'center' }}>
                ​Cyber Essential Certified
              </Typography>
            </Box>
            <Box sx={{ 
              width: '200px', 
              p: 2, 
              boxShadow: 2, 
              position: 'relative', 
              top: '-20px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              borderRadius: '15px', 
              flex: 1, 
              background: 'linear-gradient(135deg, #143151, #387E89)',
              color: 'white'
            }}>
              <img
                src="/circleIcon.png"
                alt="circleIcon"
                width="90"
                height="auto"
              />
              <Typography variant="h5" fontWeight="semiBold" sx={{ textAlign:'center' }}>
                GDPR Compliant
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </section>
  );
};

