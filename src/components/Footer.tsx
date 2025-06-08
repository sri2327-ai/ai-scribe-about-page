'use client'
import React from 'react';
import { alpha, useTheme } from "@mui/material/styles";
import { Box, Typography, IconButton, Button, useMediaQuery } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import AnimatedGradientBackground from "./ui/animated-gradient-background";
import { GradientTracing } from "./ui/gradient-tracing";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
  </svg>
);

export const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
);

export const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
  </svg>
);

export const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="25"
    height="25"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.777 13.02H3.56V9h3.554v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.726v20.548C0 23.224.792 24 1.771 24h20.451C23.2 24 24 23.224 24 22.274V1.726C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

export const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="currentColor"
    className="bi bi-tiktok"
    viewBox="0 0 16 16"
  >
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
  </svg>
);

export default function Footer() {
  const theme = useTheme();
  const location = useLocation();
  // Changed from 'md' to 'lg' to match header menu breakpoint
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const themeChnStatus = (location.pathname === '/advantages' || location.pathname === '/about' || location.pathname === '/technology' || location.pathname === '/ai-accuracy') ? true : false;
  
  // Check if current page is About for white background styling
  const isAboutPage = location.pathname === '/about';
  
  const footerSections = [
    {
      title: "Why S10.AI?",
      links: [
        { text: "Maximise Patient interaction", href: "/advantages" },
        { text: "Boost efficiency and well being", href: "/advantages" },
        { text: "Address staffing shortages", href: "/advantages" },
        { text: "Improve financial impact", href: "/advantages" },
        { text: "Streamline documentation", href: "/advantages" },
        { text: "Deliver better Patient Care", href: "/advantages" },
        { text: "Automate front office tasks", href: "/advantages" }
      ]
    },
    {
      title: "Who we're for?",
      links: [
        { text: "Health systems", href: "/customer" },
        { text: "Private practice", href: "/customer" },
        { text: "Specialty", href: "/specialty" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { text: "Bravo", href: "/bravo" },
        { text: "Crush", href: "/crush-ai" },
        { text: "Custom AI agents", href: "/custom-ai-agent" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", href: "/blog" },
        { text: "Case studies", href: "/resources/casestudies" },
        { text: "FAQs", href: "/faq" },
        { text: "Resource library", href: "/resources" },
        { text: "Practice efficiency grader", href: "/practice-efficiency-grader" }
      ]
    },
    {
      title: "About",
      links: [
        { text: "S10.AI Story", href: "/about" },
        { text: "Technology", href: "/technology" },
        { text: "S10.AI Difference", href: "/advantages" },
        { text: "AI Accuracy", href: "/ai-accuracy" },
        { text: "Integrations", href: "/integration" }
      ]
    }
  ];

  const FooterSection = ({ section }) => (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0.6rem',
      minWidth: { xs: '100%', sm: '160px', md: '180px' },
      maxWidth: { xs: '100%', sm: '180px', md: '200px' },
      flex: { xs: 'none', sm: 1 },
      mb: { xs: '1.5rem', md: 0 }
    }}>
      <Typography 
        variant="h6" 
        fontWeight="medium" 
        sx={{ 
          color: isAboutPage ? 'black' : 'white',
          marginBottom: '0.5rem',
          textShadow: (themeChnStatus && !isAboutPage) ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
          fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
          lineHeight: 1.2
        }}
      >
        {section.title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {section.links.map((link, index) => (
          <Link key={index} to={link.href} style={{ textDecoration: 'none' }}>
            <Typography 
              variant="h6" 
              fontWeight="medium"
              sx={{ 
                color: isAboutPage ? 'black' : 'white',
                transition: 'color 0.3s ease',
                display: 'block',
                padding: '0.25rem 0',
                textShadow: (themeChnStatus && !isAboutPage) ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
                opacity: 0.9,
                fontSize: { xs: '0.875rem', sm: '0.85rem', md: '0.9rem' },
                lineHeight: 1.3,
                wordBreak: 'break-word',
                '&:hover': { 
                  color: theme.palette.primary.light,
                  opacity: 1 
                }
              }}
            >
              {link.text}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );

  const MobileFooterSection = ({ section }) => (
    <AccordionItem value={section.title}>
      <AccordionTrigger 
        className={`${isAboutPage ? 'text-black' : 'text-white'} hover:no-underline py-6 px-6 text-lg`}
        style={{
          textShadow: (themeChnStatus && !isAboutPage) ? '0 0 10px rgba(0,0,0,0.5)' : 'none'
        }}
      >
        <Typography variant="h6" fontWeight="medium" sx={{ fontSize: '1.1rem' }}>
          {section.title}
        </Typography>
      </AccordionTrigger>
      <AccordionContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', pl: 2 }}>
          {section.links.map((link, index) => (
            <Link key={index} to={link.href} style={{ textDecoration: 'none' }}>
              <Typography 
                variant="body1" 
                fontWeight="medium"
                sx={{ 
                  color: isAboutPage ? 'black' : 'white',
                  transition: 'color 0.3s ease',
                  display: 'block',
                  padding: '0.25rem 0',
                  textShadow: (themeChnStatus && !isAboutPage) ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
                  opacity: 0.9,
                  fontSize: '0.875rem',
                  '&:hover': { 
                    color: theme.palette.primary.light,
                    opacity: 1 
                  }
                }}
              >
                {link.text}
              </Typography>
            </Link>
          ))}
        </Box>
      </AccordionContent>
    </AccordionItem>
  );
  
  return (
    <Box component="footer" sx={{ 
      width: '100%', 
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100px'
    }}>
      <Box sx={{ 
        background: isAboutPage ? 'white' : (themeChnStatus ? theme.palette.primary.main : theme.palette.background.default),
        color: isAboutPage ? 'black' : (themeChnStatus ? theme.palette.common.white : theme.palette.common.black),
        padding: { xs: '2rem 1rem 1.5rem 1rem', sm: '3rem 1.5rem 2rem 1.5rem', md: '4rem 2rem 2rem 2rem' },
        width: '100%',
        position: 'relative',
        zIndex: 1,
        borderTop: isAboutPage ? `1px solid ${alpha(theme.palette.common.black, 0.2)}` : (themeChnStatus ? `1px solid ${alpha(theme.palette.common.white, 0.5)}` : `1px solid ${alpha(theme.palette.common.black, 0.5)}`),
      }}>
        {(themeChnStatus && !isAboutPage) && <AnimatedGradientBackground 
          startingGap={500}
          Breathing={true}
          gradientColors={["#000", "#0A7A8C", "#0E86A3", "#000"]}
          gradientStops={[0, 15, 30, 100]}
          animationSpeed={0.02}
          breathingRange={15}
        />}
        
        <Box sx={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Main Footer Content */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', md: 'flex-start' },
            gap: { xs: '1rem', sm: '1.5rem', md: '1rem' },
            marginBottom: { xs: '1.5rem', sm: '2rem', md: '3rem' },
          }}>
            {/* Desktop and Tablet Layout - now uses 'lg' breakpoint like header */}
            {!isMobile ? (
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: { xs: '1.5rem', sm: '1.5rem', md: '1rem' },
                width: '100%',
                justifyContent: 'space-between'
              }}>
                {footerSections.map((section, index) => (
                  <FooterSection key={index} section={section} />
                ))}
              </Box>
            ) : (
              /* Mobile Accordion Layout - now triggers at 'lg' breakpoint */
              <Accordion type="multiple" className="w-full">
                {footerSections.map((section, index) => (
                  <MobileFooterSection key={index} section={section} />
                ))}
              </Accordion>
            )}
          </Box>

          {/* Contact Button */}
          <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            marginBottom: { xs: '1.5rem', md: '2rem' }
          }}>
            <Link to="/contact">
              <Button 
                variant="outlined"
                sx={{
                  borderRadius: 1,
                  background: 'transparent',
                  color: isAboutPage ? theme.palette.common.black : theme.palette.common.white,
                  border: isAboutPage ? `1px solid ${theme.palette.common.black}` : `1px solid ${theme.palette.common.white}`,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  padding: { xs: '0.5rem 1rem', md: '0.75rem 1.5rem' },
                  ".icon-box": {
                    border: isAboutPage ? `1px solid ${theme.palette.common.black}` : `1px solid ${theme.palette.common.white}`,
                  },
                  "&:hover": {
                    border: `1px solid ${theme.palette.primary.main}`,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    color: theme.palette.common.white,
                    ".icon-box": {
                      border: `1px solid ${theme.palette.common.white}`,
                    },
                  }
                }}
                startIcon={
                  <Box className="icon-box">
                    <ArrowRight size={16} />
                  </Box>
                }
              >
                <Typography variant='h6' fontWeight="medium" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  Contact Us
                </Typography>
              </Button>
            </Link>
          </Box>
          
          <Box sx={{ my: { xs: 3, md: 4 }, position: 'relative' }}>
            <GradientTracing 
              width={1200} 
              height={2} 
              baseColor={isAboutPage ? theme.palette.grey.A400 : theme.palette.grey.A400}
              gradientColors={[theme.palette.secondary.main, theme.palette.secondary.main, theme.palette.primary.light]}
              animationDuration={4}
              strokeWidth={1}
            />
          </Box>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-start' },
            gap: { xs: '2rem', sm: '2.5rem', md: '4rem' },
            marginTop: { xs: '1.5rem', md: '2rem' }
          }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              flex: 1, 
              gap: '0.6rem',
              minWidth: { md: '300px' }
            }}>
              <Typography variant='body1' fontWeight='medium' sx={{ 
                color: isAboutPage ? 'black' : 'white',
                textShadow: (themeChnStatus && !isAboutPage) ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}>
                <a href="mailto:support@s10.ai" style={{ textDecoration: 'none', color: 'inherit' }}>support@s10.ai</a>
              </Typography>
              <Typography 
                variant='body1' 
                fontWeight='medium'  
                component="a"
                href="tel:+16314886390" 
                sx={{ 
                  color: isAboutPage ? 'black' : 'white',
                  textShadow: (themeChnStatus && !isAboutPage) ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
                  textDecoration: 'none',
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                Tel: +1 631 4886 390
              </Typography>
              <Typography variant='body1' fontWeight='medium' sx={{ 
                color: isAboutPage ? 'black' : 'white',
                textShadow: (themeChnStatus && !isAboutPage) ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}>
                NJ, Princeton - Carnegie Center, <br /> United States.
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                gap: { xs: '0.75rem', md: '1rem' }, 
                marginTop: '1rem',
                flexWrap: 'wrap'
              }}>
                {/* Social media icons */}
                <IconButton 
                  component="a" 
                  href="https://x.com/s10aiscribe" 
                  target="_blank" 
                  aria-label="Visit S10.AI on X" 
                  sx={{ 
                    color: isAboutPage ? theme.palette.common.black : theme.palette.common.white,
                    padding: { xs: '0.5rem', md: '0.75rem' },
                    '&:hover': {
                      color: '#1da1f2', 
                    },
                  }}
                >
                  <XIcon />
                </IconButton>
                <IconButton 
                  component="a" 
                  href="https://www.facebook.com/profile.php?id=100086008459597" 
                  target="_blank" 
                  aria-label="Visit S10.AI on Facebook" 
                  sx={{ 
                    color: isAboutPage ? theme.palette.common.black : theme.palette.common.white,
                    padding: { xs: '0.5rem', md: '0.75rem' },
                    '&:hover': {
                      color: '#1877f2', 
                    },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  component="a" 
                  href="https://www.linkedin.com/company/s10-ai/" 
                  target="_blank" 
                  aria-label="Visit S10.AI on LinkedIn" 
                  sx={{ 
                    color: isAboutPage ? theme.palette.common.black : theme.palette.common.white,
                    padding: { xs: '0.5rem', md: '0.75rem' },
                    '&:hover': {
                      color: '#3b5999', 
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton 
                  component="a" 
                  href="https://instagram.com/s10.ai" 
                  aria-label="Visit S10.AI on Instagram" 
                  target="_blank" 
                  sx={{ 
                    color: isAboutPage ? theme.palette.common.black : theme.palette.common.white,
                    padding: { xs: '0.5rem', md: '0.75rem' },
                    '&:hover': {
                      color: '#e4405f', 
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton 
                  component="a" 
                  href="https://www.youtube.com/channel/UCSaWPSJyic-OURNS_w-49Ow" 
                  target="_blank" 
                  aria-label="Visit S10.AI on YouTube" 
                  sx={{ 
                    color: isAboutPage ? theme.palette.common.black : theme.palette.common.white,
                    padding: { xs: '0.5rem', md: '0.75rem' },
                    '&:hover': {
                      color: '#cd201f', 
                    },
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
                <IconButton 
                  component="a" 
                  href="https://www.tiktok.com/@s10robotmedicalscribe" 
                  target="_blank"
                  aria-label="Visit S10.AI on TikTok"  
                  sx={{ 
                    color: isAboutPage ? theme.palette.common.black : theme.palette.common.white,
                    padding: { xs: '0.5rem', md: '0.75rem' },
                    '&:hover': {
                      color: '#ff0050', 
                    },
                  }}
                >
                  <TikTokIcon />
                </IconButton>
              </Box>
            </Box>
            
            <Box sx={{
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.6rem',
              minWidth: { md: '200px' }
            }}>
              <Typography variant='body1' fontWeight='medium'>
                <Link to="/termsandcondition" style={{ textDecoration: 'none' }}>
                  <Box component="span" sx={{ 
                    color: isAboutPage ? 'black' : 'white',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: theme.palette.primary.light },
                    textShadow: (themeChnStatus && !isAboutPage) ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
                    fontWeight: 'medium',
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}>
                    Terms & Condition
                  </Box>
                </Link>
              </Typography>
              <Typography variant='body1' fontWeight='medium'>
                <Link to="/privacypolicy" style={{ textDecoration: 'none' }}>
                  <Box component="span" sx={{ 
                    color: isAboutPage ? 'black' : 'white',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: theme.palette.primary.light },
                    textShadow: (themeChnStatus && !isAboutPage) ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
                    fontWeight: 'medium',
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}>
                    Privacy Policy
                  </Box>
                </Link>
              </Typography>
              <Typography variant='body1' fontWeight='medium'>
                <a href="https://www.saashub.com/s10-ai-status" style={{ textDecoration: 'none' }}>
                  <Box component="span" sx={{ 
                    color: isAboutPage ? 'black' : 'white',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: theme.palette.primary.light },
                    textShadow: (themeChnStatus && !isAboutPage) ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
                    fontWeight: 'medium',
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}>
                    Status
                  </Box>
                </a>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: { xs: '1.5rem', md: '2rem' }
          }}>
            <Typography variant='body2' fontWeight='medium' sx={{ 
              color: isAboutPage ? 'black' : 'white',
              textShadow: (themeChnStatus && !isAboutPage) ? '0 0 10px rgba(0,0,0,0.5)' : 'none',
              fontSize: { xs: '0.75rem', md: '0.875rem' },
              textAlign: 'center'
            }}>
              © {new Date().getFullYear()} S10.AI, Inc. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
