'use client'
import React from 'react';
import { useTheme } from "@mui/material/styles";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedGradientBackground from "./ui/animated-gradient-background";
import { GradientTracing } from "./ui/gradient-tracing";

export const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);

export const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
);

export const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
  </svg>
);

export const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878 1.216 0 1.634 1.216 1.634 3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

export const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className="bi bi-tiktok"
    viewBox="0 0 16 16"
  >
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
  </svg>
);

export default function Footer() {
  const theme = useTheme();
  
  return (
    <Box component="footer" sx={{ 
      width: '100%', 
      position: 'relative',
      overflow: 'hidden' 
    }}>
      <Box sx={{ 
        backgroundColor: '#1A1F2C',
        color: '#fff',
        padding: '4rem 2rem 2rem 2rem',
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        <AnimatedGradientBackground 
          startingGap={500}
          Breathing={true}
          gradientColors={["#000", "#0A7A8C", "#0E86A3", "#000"]} // More subtle teal blue gradient
          gradientStops={[0, 15, 30, 100]}
          animationSpeed={0.02}
          breathingRange={15}
        />
        
        <Box sx={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    display: 'block',
                    padding: '0.25rem 0',
                    textShadow: '0 0 10px rgba(0,0,0,0.5)' // Added text shadow for better visibility
                  }}>
                    CRUSH - AI Medical Scribe Assistant
                  </Typography>
                </Link>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    display: 'block',
                    padding: '0.25rem 0',
                    textShadow: '0 0 10px rgba(0,0,0,0.5)' // Added text shadow for better visibility
                  }}>
                    BRAVO - AI Patient Care Agent
                  </Typography>
                </Link>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    display: 'block',
                    padding: '0.25rem 0',
                    textShadow: '0 0 10px rgba(0,0,0,0.5)' // Added text shadow for better visibility
                  }}>
                    S10 Story
                  </Typography>
                </Link>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    display: 'block',
                    padding: '0.25rem 0',
                    textShadow: '0 0 10px rgba(0,0,0,0.5)' // Added text shadow for better visibility
                  }}>
                    Trust & Technology
                  </Typography>
                </Link>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    display: 'block',
                    padding: '0.25rem 0',
                    textShadow: '0 0 10px rgba(0,0,0,0.5)' // Added text shadow for better visibility
                  }}>
                    Integrations
                  </Typography>
                </Link>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    display: 'block',
                    padding: '0.25rem 0',
                    textShadow: '0 0 10px rgba(0,0,0,0.5)' // Added text shadow for better visibility
                  }}>
                    Specialties
                  </Typography>
                </Link>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    display: 'block',
                    padding: '0.25rem 0',
                    textShadow: '0 0 10px rgba(0,0,0,0.5)' // Added text shadow for better visibility
                  }}>
                    Blog
                  </Typography>
                </Link>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    display: 'block',
                    padding: '0.25rem 0',
                    textShadow: '0 0 10px rgba(0,0,0,0.5)' // Added text shadow for better visibility
                  }}>
                    FAQs
                  </Typography>
                </Link>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    display: 'block',
                    padding: '0.25rem 0',
                    textShadow: '0 0 10px rgba(0,0,0,0.5)' // Added text shadow for better visibility
                  }}>
                    Case Studies
                  </Typography>
                </Link>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    display: 'block',
                    padding: '0.25rem 0',
                    textShadow: '0 0 10px rgba(0,0,0,0.5)' // Added text shadow for better visibility
                  }}>
                    Customers
                  </Typography>
                </Link>
              </Box>
            </Box>
            
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: { xs: '2rem', md: 0 }
            }}>
              <Button 
                variant="text" 
                sx={{ 
                  textTransform: "capitalize",
                  "&:hover .icon-box": {
                    transform: "rotate(-270deg)",
                    color: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                  },
                  "&:hover .button-text": {
                    color: theme.palette.primary.main,
                  },
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
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
                      color: "#fff",
                      border: `2px solid #fff`,
                      transition: "transform 0.3s ease",
                      transform: "rotate(0deg)",
                      mr: 1
                    }}
                  >
                    <ArrowRight size={16} />
                  </Box>
                }
              >
                <Typography
                  className="button-text"
                  variant='h6' 
                  fontWeight="500" 
                  sx={{
                    color: "#fff",
                    transition: "color 0.3s ease",
                    textShadow: '0 0 10px rgba(0,0,0,0.5)' // Added text shadow for better visibility
                  }}
                >
                  Contact Us
                </Typography>
              </Button>
            </Box>
          </Box>

          <Box sx={{ my: 4, position: 'relative' }}>
            <GradientTracing 
              width={1200} 
              height={2} 
              baseColor="rgba(255, 255, 255, 0.2)" // Made more visible
              gradientColors={["#33C3F0", "#33C3F0", "#1EAEDB"]}
              animationDuration={4}
              strokeWidth={1}
            />
          </Box>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <Box sx={{ 
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.3)', // Added background for address visibility
              padding: '1rem',
              borderRadius: '4px',
            }}>
              <Typography sx={{ 
                textShadow: '0 0 10px rgba(0,0,0,0.5)', // Added text shadow for better visibility
                fontWeight: 'medium'
              }}>
                <a href="mailto:support@s10.ai" style={{ textDecoration: 'none', color: '#fff' }}>support@s10.ai</a>
              </Typography>
              <Typography sx={{ 
                my: 1,
                textShadow: '0 0 10px rgba(0,0,0,0.5)', // Added text shadow for better visibility
                fontWeight: 'medium'
              }}>
                Tel: +1 631 4886 390
              </Typography>
              <Typography sx={{ 
                textShadow: '0 0 10px rgba(0,0,0,0.5)', // Added text shadow for better visibility
                fontWeight: 'medium'
              }}>
                NJ, Princeton - Carnegie Center, <br /> United States.
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                gap: '1rem', 
                marginTop: '1.5rem' 
              }}>
                {/* Fixed social media icon buttons */}
                <IconButton 
                  href="https://x.com/s10aiscribe" 
                  target="_blank" 
                  sx={{ 
                    color: '#fff',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#0E86A3' }, 
                    backgroundColor: 'rgba(0,0,0,0.2)', 
                  }}
                >
                  <XIcon />
                </IconButton>
                <IconButton 
                  href="https://www.facebook.com/profile.php?id=100086008459597" 
                  target="_blank" 
                  sx={{ 
                    color: '#fff',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#0E86A3' }, 
                    backgroundColor: 'rgba(0,0,0,0.2)', 
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  href="https://www.linkedin.com/company/s10-ai/" 
                  target="_blank" 
                  sx={{ 
                    color: '#fff',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#0E86A3' }, 
                    backgroundColor: 'rgba(0,0,0,0.2)', 
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton 
                  href="https://instagram.com/s10.ai" 
                  target="_blank" 
                  sx={{ 
                    color: '#fff',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#0E86A3' }, 
                    backgroundColor: 'rgba(0,0,0,0.2)', 
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton 
                  href="https://www.youtube.com/channel/UCSaWPSJyic-OURNS_w-49Ow" 
                  target="_blank" 
                  sx={{ 
                    color: '#fff',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#0E86A3' }, 
                    backgroundColor: 'rgba(0,0,0,0.2)', 
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
                <IconButton 
                  href="https://www.tiktok.com/@s10robotmedicalscribe" 
                  target="_blank" 
                  sx={{ 
                    color: '#fff',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#0E86A3' }, 
                    backgroundColor: 'rgba(0,0,0,0.2)', 
                  }}
                >
                  <TikTokIcon />
                </IconButton>
              </Box>
            </Box>
            
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              backgroundColor: 'rgba(0,0,0,0.3)', // Added background for better visibility
              padding: '1rem',
              borderRadius: '4px',
            }}>
              <Typography>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Box component="span" sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    textShadow: '0 0 10px rgba(0,0,0,0.5)', // Added text shadow for better visibility
                    fontWeight: 'medium'
                  }}>
                    Site Map
                  </Box>
                </Link>
              </Typography>
              <Typography>
                <Link to="/termsandcondition" style={{ textDecoration: 'none' }}>
                  <Box component="span" sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    textShadow: '0 0 10px rgba(0,0,0,0.5)', // Added text shadow for better visibility
                    fontWeight: 'medium'
                  }}>
                    Terms & Condition
                  </Box>
                </Link>
              </Typography>
              <Typography>
                <Link to="/privacypolicy" style={{ textDecoration: 'none' }}>
                  <Box component="span" sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    textShadow: '0 0 10px rgba(0,0,0,0.5)', // Added text shadow for better visibility
                    fontWeight: 'medium'
                  }}>
                    Privacy Policy
                  </Box>
                </Link>
              </Typography>
              <Typography>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Box component="span" sx={{ 
                    color: '#fff', 
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1EAEDB' },
                    textShadow: '0 0 10px rgba(0,0,0,0.5)', // Added text shadow for better visibility
                    fontWeight: 'medium'
                  }}>
                    Status
                  </Box>
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        
        <Typography sx={{ 
          textAlign: 'center', 
          marginTop: '2rem', 
          fontSize: '0.875rem', 
          color: '#fff',
          textShadow: '0 0 10px rgba(0,0,0,0.5)', // Added text shadow for better visibility
          fontWeight: 'medium'
        }}>
          © {new Date().getFullYear()} S10.AI, Inc. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
