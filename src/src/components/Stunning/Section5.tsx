import React from "react";
import { Typography,Box } from "@mui/material";
import styles from "@/styles/stunning.module.scss";
import Marquee from "react-fast-marquee";

const logos = [
  "/HeaderLogo.png",
  "/HeaderLogo.png",
  "/HeaderLogo.png",
  "/HeaderLogo.png",
  "/HeaderLogo.png"
];

const LogoScroll = () => {
  return (
    
      <Box sx={{ backgroundColor: "#fff", py: 4 }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center",mb: 2 }}
      >
        S10 Trusted By 1000+ Providers
      </Typography>

      <Box sx={{ display: 'flex', flex: 1, flexBasis: '300px', overflow: "hidden",marginTop: "10%" }}>
        <Marquee gradient={false} speed={50} loop={0}>
          {logos.map((logo, index) => (
            <Box key={index} sx={{ mx: { xs: 2, sm: 3 }, display: 'flex', alignItems: 'center' }}>
              <img
                src={logo}
                alt={`logo-${index}`}
                width="150"
                height="auto"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default LogoScroll;
