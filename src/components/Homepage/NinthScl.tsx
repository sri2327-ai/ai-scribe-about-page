'use client'
import { Box, Button, Divider, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function NinthScl() {
  const theme = useTheme();
  const isMobTabScr = useMediaQuery("(max-width:900px)");
  const MotionPaper = motion.create(Paper);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <section className="witOutSp" style={{ background: theme.palette.common.white, paddingTop: '30px', paddingBottom: '30px' }}>
      <Box sx={{ display: 'flex', flexDirection:'column', background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`, flexGrow: 1, gap: 3, p: 3, borderRadius: 4 }}>
        <Stack
          spacing={3}
          direction="column"
          sx={{
            flexWrap: 'wrap',
            justifyContent: "space-between",
            alignItems: 'flex-start',
          }}
          useFlexGap
        >
          <Typography variant="h3" fontWeight="semiBold" sx={{ color: theme.palette.text.secondary }}>
            The S10.AI<br />Competitive Edge 
          </Typography>
          <Button 
            variant="text" 
            sx={{ 
              textTransform: "capitalize",
              background: theme.palette.common.white,
              border: `1px solid ${theme.palette.primary.main}`,
              px: 3,
              py: 1.5,
              borderRadius: "50px",
              "&:hover":{
                ".icon-box": {
                  transform: "rotate(-270deg)",
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                },
                ".button-text": {
                  color: theme.palette.primary.main,
                },
              },
              boxShadow:1
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
                  color: theme.palette.primary.main,
                  border: `2px solid ${theme.palette.primary.main}`,
                  transition: "transform 0.3s ease",
                  transform: "rotate(0deg)",
                  mr: 1
                }}
                >
                <ArrowForwardIcon fontSize="small" />
              </Box>
            }
            >
            <Typography
              className="button-text"
              variant='h6' 
              fontWeight="semiBold" 
              sx={{
                color: theme.palette.primary.main,
                transition: "color 0.3s ease"
              }}
            >
              View More
            </Typography>
          </Button>
        </Stack>
        <Stack
          spacing={3}
          direction={"row"}
          sx={{
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            flex: 1,
            justifyContent: { xs: 'center', sm :'space-between', md: 'flex-end'},
          }}
          useFlexGap
        >
          <AnimatePresence>
            <MotionPaper
              layout
              initial={{ height: 0 }}
              animate={{ height: isMobTabScr || isHovered1 ? "auto" : 0 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4 }}
              sx={{
                maxWidth: { xs : 200, sm: 228, md: 160, lg: 240 },
                flexBasis: { xs : 200, sm: 228, md: 160, lg: 240 },
                borderRadius: 3, 
                border: isMobTabScr || isHovered1 ? `1px solid ${theme.palette.primary.light}` : `1px solid ${theme.palette.primary.main}`,
                background: isMobTabScr || isHovered1 ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})` : theme.palette.common.white,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                p: 2,
                boxShadow: 0,
                minHeight: 130
              }}
              onHoverStart={() => setIsHovered1(true)}
              onHoverEnd={() => !isMobTabScr && setIsHovered1(false)}
            >
              <Typography variant="h5" fontWeight="semiBold" sx={{ minHeight: 60, display: 'flex', alignItems:'center', justifyContent:'center', textAlign: 'center', color: isMobTabScr || isHovered1 ? theme.palette.text.secondary : theme.palette.primary.main }}>
                Science-Driven AI
              </Typography>
              <MotionPaper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut'
                }}
                sx={{ 
                  boxShadow: 0,
                  display: (isMobTabScr || isHovered1) ? "flex" : "none",
                  flexDirection:'column', 
                  minHeight: { xs: 130, md: 250, lg: 160 },
                  justifyContent: 'space-between',
                  background: 'transparent'
                }}
              >
                <Typography variant="h6" fontWeight="semiBold" sx={{ textAlign: 'center', color: theme.palette.text.secondary }}>
                  Truth-first, responsible AI powered by S10’s patented IPKO for smarter automation. 
                </Typography>
                <Divider variant="middle" flexItem sx={{ my: 1, mx: 0, borderWidth: 1 }} /> 
              </MotionPaper>
              <Box
                className="icon-box"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  color: isMobTabScr || isHovered1 ? theme.palette.text.secondary : theme.palette.primary.main,
                  transition: "transform 0.3s",
                  transform: isMobTabScr || isHovered1 ? "rotate(360deg)" :  "rotate(90deg)",
                  mr: 1
                }}
                >
                <ArrowOutwardIcon fontSize="large" />
              </Box>
            </MotionPaper>
          </AnimatePresence>
          <AnimatePresence>
            <MotionPaper
              layout
              initial={{ height: 0 }}
              animate={{ height: isMobTabScr || isHovered2 ? "auto" : 0 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4 }}
              sx={{
                maxWidth: { xs : 200, sm: 228, md: 160, lg: 240 },
                flexBasis: { xs : 200, sm: 228, md: 160, lg: 240 },
                borderRadius: 3, 
                border: isMobTabScr || isHovered2 ? `1px solid ${theme.palette.primary.light}` : `1px solid ${theme.palette.primary.main}`,
                background: isMobTabScr || isHovered2 ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})` : theme.palette.common.white,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                p: 2,
                boxShadow: 0,
                minHeight: 130
              }}
              onHoverStart={() => setIsHovered2(true)}
              onHoverEnd={() => !isMobTabScr && setIsHovered2(false)}
            >
              <Typography variant="h5" fontWeight="semiBold" sx={{ minHeight: 60, display: 'flex', alignItems:'center', justifyContent:'center', textAlign: 'center', color: isMobTabScr || isHovered2 ? theme.palette.text.secondary : theme.palette.primary.main }}>
                Cross-Lingual Precision
              </Typography>
              <MotionPaper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut'
                }}
                sx={{ 
                  boxShadow: 0,
                  display: (isMobTabScr || isHovered2) ? "flex" : "none",
                  flexDirection:'column', 
                  minHeight: { xs: 130, md: 250, lg: 160 },
                  justifyContent: 'space-between',
                  background: 'transparent'
                }}
              >
                <Typography variant="h6" fontWeight="semiBold" sx={{ textAlign: 'center', color: theme.palette.text.secondary }}>
                  Advanced ASR and AI-powered speech-to-text for healthcare, offering unparalleled accuracy in speech recognition.
                </Typography>
                <Divider variant="middle" flexItem sx={{ my: 1, mx: 0, borderWidth: 1 }} /> 
              </MotionPaper>
              <Box
                className="icon-box"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  color: isMobTabScr || isHovered2 ? theme.palette.text.secondary : theme.palette.primary.main,
                  transition: "transform 0.3s",
                  transform: isMobTabScr || isHovered2 ? "rotate(360deg)" :  "rotate(90deg)",
                  mr: 1
                }}
                >
                <ArrowOutwardIcon fontSize="large" />
              </Box>
            </MotionPaper>
          </AnimatePresence>
          <AnimatePresence>
            <MotionPaper
              layout
              initial={{ height: 0 }}
              animate={{ height: isMobTabScr || isHovered3 ? "auto" : 0 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4 }}
              sx={{
                maxWidth: { xs : 200, sm: 228, md: 160, lg: 240 },
                flexBasis: { xs : 200, sm: 228, md: 160, lg: 240 },
                borderRadius: 3, 
                border: isMobTabScr || isHovered3 ? `1px solid ${theme.palette.primary.light}` : `1px solid ${theme.palette.primary.main}`,
                background: isMobTabScr || isHovered3 ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})` : theme.palette.common.white,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                p: 2,
                boxShadow: 0,
                minHeight: 130
              }}
              onHoverStart={() => setIsHovered3(true)}
              onHoverEnd={() => !isMobTabScr && setIsHovered3(false)}
            >
              <Typography variant="h5" fontWeight="semiBold" sx={{ minHeight: 60, display: 'flex', alignItems:'center', justifyContent:'center', textAlign: 'center', color: isMobTabScr || isHovered3 ? theme.palette.text.secondary : theme.palette.primary.main }}>
                Clinician-Centric
              </Typography>
              <MotionPaper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut'
                }}
                sx={{ 
                  boxShadow: 0,
                  display: (isMobTabScr || isHovered3) ? "flex" : "none",
                  flexDirection:'column', 
                  minHeight: { xs: 130, md: 250, lg: 160 },
                  justifyContent: 'space-between',
                  background: 'transparent'
                }}
              >
                <Typography variant="h6" fontWeight="semiBold" sx={{ textAlign: 'center', color: theme.palette.text.secondary }}>
                  AI that adapts to workflows, not disrupts them.
                </Typography>
                <Divider variant="middle" flexItem sx={{ my: 1, mx: 0, borderWidth: 1 }} /> 
              </MotionPaper>
              <Box
                className="icon-box"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  color: isMobTabScr || isHovered3 ? theme.palette.text.secondary : theme.palette.primary.main,
                  transition: "transform 0.3s",
                  transform: isMobTabScr || isHovered3 ? "rotate(360deg)" :  "rotate(90deg)",
                  mr: 1
                }}
                >
                <ArrowOutwardIcon fontSize="large" />
              </Box>
            </MotionPaper>
          </AnimatePresence>
          <AnimatePresence>
            <MotionPaper
              layout
              initial={{ height: 0 }}
              animate={{ height: isMobTabScr || isHovered4 ? "auto" : 0 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4 }}
              sx={{
                maxWidth: { xs : 200, sm: 228, md: 160, lg: 240 },
                flexBasis: { xs : 200, sm: 228, md: 160, lg: 240 },
                borderRadius: 3, 
                border: isMobTabScr || isHovered4 ? `1px solid ${theme.palette.primary.light}` : `1px solid ${theme.palette.primary.main}`,
                background: isMobTabScr || isHovered4 ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})` : theme.palette.common.white,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                p: 2,
                boxShadow: 0,
                minHeight: 130
              }}
              onHoverStart={() => setIsHovered4(true)}
              onHoverEnd={() => !isMobTabScr && setIsHovered4(false)}
            >
              <Typography variant="h5" fontWeight="semiBold" sx={{ minHeight: 60, display: 'flex', alignItems:'center', justifyContent:'center', textAlign: 'center', color: isMobTabScr || isHovered4 ? theme.palette.text.secondary : theme.palette.primary.main }}>
                Seamless Automation
              </Typography>
              <MotionPaper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut'
                }}
                sx={{ 
                  boxShadow: 0,
                  display: (isMobTabScr || isHovered4) ? "flex" : "none",
                  flexDirection:'column', 
                  minHeight: { xs: 130, md: 250, lg: 160 },
                  justifyContent: 'space-between',
                  background: 'transparent'
                }}
              >
                <Typography variant="h6" fontWeight="semiBold" sx={{ textAlign: 'center', color: theme.palette.text.secondary }}>
                  AI for physician workflows with robotic interoperability.
                  </Typography>
                <Divider variant="middle" flexItem sx={{ my: 1, mx: 0, borderWidth: 1 }} /> 
              </MotionPaper>
              <Box
                className="icon-box"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  color: isMobTabScr || isHovered4 ? theme.palette.text.secondary : theme.palette.primary.main,
                  transition: "transform 0.3s",
                  transform: isMobTabScr || isHovered4 ? "rotate(360deg)" :  "rotate(90deg)",
                  mr: 1
                }}
                >
                <ArrowOutwardIcon fontSize="large" />
              </Box>
            </MotionPaper>
          </AnimatePresence>
        </Stack>
      </Box>
    </section>
  );
}
