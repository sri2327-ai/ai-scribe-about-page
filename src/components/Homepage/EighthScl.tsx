'use client'
import { Box, Typography, Button, Stack,  } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";

export default function EighthScl(...args: []) {
  const theme = useTheme();
  const companyLogos = [
		"/HeaderLogo.png",
		"/HeaderLogo.png",
		"/HeaderLogo.png",
		"/HeaderLogo.png",
		"/HeaderLogo.png",
		"/HeaderLogo.png",
		"/HeaderLogo.png",
		"/HeaderLogo.png",
    "/HeaderLogo.png",
	];

  return(
    <section className="witOutSp" style={{ background: theme.palette.secondary.main, paddingLeft: '15px', paddingRight: '15px', minHeight: 'unset' }}>
      <Box sx={{ display: 'flex', flex:1, overflow: "hidden" }}>
        <Marquee pauseOnHover={true} gradient={false} speed={50} loop={0}>
          {companyLogos.map((logo, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', mx: { xs: 1, sm: 2 }, background: theme.palette.common.white, borderRadius: 3, p: 3, my: 1, boxShadow: 2, gap: 3 }}>
              <img
                src={logo}
                alt={`logo-${index}`}
                width="90"
                height="auto"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Typography variant="body1" sx={{ textAlign: 'center', color: theme.palette.text.primary }}>
                  Primary Care
              </Typography>
            </Box>
          ))}
        </Marquee>
      </Box>
    </section>
  )    
}
