import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";

export const TenthSection = () => {
  const theme = useTheme();

  return (
    <section className="witOutSp" style={{ background: theme.palette.grey.A100 }}>
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
            <Box sx={{ width: '200px', p: 2, boxShadow:2, position: 'relative', display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', flex:1, borderTop: `1px solid ${theme.palette.secondary.main}`, background: `linear-gradient(180deg, ${theme.palette.secondary.main}, ${theme.palette.common.white})`, color: theme.palette.text.primary }}>
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
            <Box sx={{ width: '200px', p: 2, boxShadow:2, position: 'relative', top: '-10px', display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', flex:1, background: `linear-gradient(180deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, color: theme.palette.text.secondary }}>
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
            <Box sx={{ width: '200px', p: 2, boxShadow:2, position: 'relative', top: '-20px', display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius: '15px', flex:1, borderTop: `1px solid ${theme.palette.secondary.light}`, background: `linear-gradient(180deg, ${theme.palette.common.white}, ${theme.palette.secondary.light})`, color: theme.palette.text.primary }}>
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
            <Typography variant="h3" fontWeight="semiBold" sx={{ textAlign: 'center', color: theme.palette.primary.light }}>
              Security, Compliance & Data Protection You Can Trust 
            </Typography>
            <Typography variant="h5" fontWeight="medium" sx={{ textAlign: 'center', color: theme.palette.primary.light }}>
              HIPAA, PIPEDA & GDPR Compliant – Adhering to global healthcare privacy laws. ISO 27001 Certified – AES-256 encryption for top-tier security. Automated Data Erasure – Secure deletion post-documentation. U.S. & Canada Compliance – Meeting the highest healthcare standards.
            </Typography>
            <Button 
              variant="text" 
              sx={{ 
                textTransform: "capitalize",
                background: theme.palette.primary.light,
                px: 3,
                py: 1.5,
                borderRadius: "50px",
                "&:hover": {
                  ".icon-box": {
                    transform: "rotate(-270deg)",
                    color: theme.palette.text.secondary,
                    borderColor: theme.palette.text.secondary,
                  },
                  ".button-text": {
                    color: theme.palette.text.secondary,
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
                    color: theme.palette.text.secondary,
                    border: `2px solid ${theme.palette.text.secondary}`,
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
                  color: theme.palette.text.secondary,
                  transition: "color 0.3s ease"
                }}
              >
                View More
              </Typography>
            </Button>
            <Box sx={{ display: {xs: 'flex', md: 'none'}, minWidth:'300px', maxWidth: '900px', overflow: "hidden" }}>
              <Marquee gradient={false} speed={50} loop={0}>
                <Box sx={{ width: '300px', p: 2, mx: 2, boxShadow:2, display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius: '15px', background: `linear-gradient(135deg, ${theme.palette.common.white}, ${theme.palette.secondary.main})`, color: theme.palette.text.primary }}>
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
                <Box sx={{ width: '300px', p: 2, mx: 2, boxShadow:2, display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius: '15px', background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`, color: theme.palette.text.secondary }}>
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
                <Box sx={{ width: '300px', p: 2, mx: 2, boxShadow:2, display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius: '15px', background: `linear-gradient(135deg, ${theme.palette.common.white}, ${theme.palette.secondary.light})`, color: theme.palette.text.primary }}>
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
                <Box sx={{ width: '300px', p: 2, mx: 2, boxShadow:2, display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius: '15px', background: `linear-gradient(135deg, ${theme.palette.common.white}, ${theme.palette.primary.main})`, color: theme.palette.text.primary }}>
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
                <Box sx={{ width: '300px', p: 2, mx: 2, boxShadow:2, display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius: '15px', background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`, color: theme.palette.text.secondary }}>
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
                <Box sx={{ width: '300px', p: 2, mx: 2, boxShadow:2, display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius: '15px', background: `linear-gradient(135deg, ${theme.palette.common.white}, ${theme.palette.primary.light})`, color: theme.palette.text.primary }}>
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
              </Marquee>
            </Box>

          </Box>
          <Box sx={{
            display: {xs : 'none',  md: 'flex'},
            flexDirection:'column',
            position: 'relative',
          }}>
            <Box sx={{ width: '200px', p: 2, boxShadow:2, position: 'relative', display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', flex:1, borderTop: `1px solid ${theme.palette.primary.main}`, background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.common.white})`, color: theme.palette.text.primary }}>
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
            <Box sx={{ width: '200px', p: 2, boxShadow:2, position: 'relative', top: '-10px', display: 'flex', flexDirection:'column',  alignItems:'center', justifyContent:'flex-start', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', flex:1, background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`, color: theme.palette.text.secondary }}>
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
            <Box sx={{ width: '200px', p: 2, boxShadow:2, position: 'relative', top: '-20px', display: 'flex', flexDirection:'column',  alignItems:'center', justifyContent:'center', borderRadius: '15px', flex:1, borderBottom: `1px solid ${theme.palette.primary.light}`, background: `linear-gradient(180deg, ${theme.palette.common.white}, ${theme.palette.primary.light})`, color: theme.palette.text.primary }}>
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
