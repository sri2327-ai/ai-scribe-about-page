
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Grid from '@mui/material/Grid';

export const CompetitionSection = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: '#ffffff'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ mb: 6, textAlign: 'center' }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 800,
              mb: 3,
              color: '#000000',
              letterSpacing: '-0.02em'
            }}
          >
            Why C.R.U.S.H. Crushes the Competition
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: 900,
              mx: 'auto',
              color: '#403E43',
              fontWeight: 400
            }}
          >
            Other AI scribes talk a big game, but they're basically glorified typewriters. C.R.U.S.H. (Customizable, Real-time, Universal, Smart Healthcare) is in a league of its own, and we've got the edge to prove it.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {[
            "Pinpoint Accuracy, No Nonsense: Our AI nails every detail of your medical jargon. No fixing botched notes like with those other scribes that churn out fiction.",
            "EHR Sync That's Actually Seamless: Plugs into any EHR—Epic, Cerner, or your clinic's quirky setup. Notes, labs, prescriptions? Instant. Others? Stuck in copy-paste purgatory.",
            "Multilingual Mastery: English, Spanish, French, you name it—C.R.U.S.H. gets it right. Other scribes fumble anything beyond basic English.",
            "Customization with Humans in the Loop: We don't just hand you templates and ghost you. Our human experts work with you to tailor notes and workflows to your exact needs—something those faceless AI scribes can't touch.",
            "Automation That Runs Your Life: Referrals, prescriptions, screenings? C.R.U.S.H. handles it all. Other scribes? They're still learning to spell \"referral.\"",
            "Clinical Smarts on Tap: Real-time tips, HCC tracking, and preventive care flags. It's your brainy co-pilot, not a glorified stenographer.",
            "Burnout? What's That?: Charts done in under a minute, no late-night edits. Better RAF scores mean more revenue, too. Other scribes keep you slaving.",
            "Security That's Ironclad: HIPAA, SOC 2, HITECH—your data's untouchable. Unlike those sketchy scribes with security as flimsy as a paper chart."
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box 
                component={motion.div}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                sx={{ 
                  display: 'flex', 
                  gap: 2,
                  alignItems: 'flex-start'
                }}
              >
                <Check 
                  size={24} 
                  className="text-tealBlueBright mt-1 flex-shrink-0"
                />
                <Typography 
                  variant="body1" 
                  sx={{ color: '#403E43' }}
                >
                  {item}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ 
            mt: 6, 
            textAlign: 'center',
            p: 4,
            borderRadius: 2,
            bgcolor: '#fafafa',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03), 0 2px 8px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            maxWidth: 900,
            mx: 'auto'
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600,
              color: '#000000',
              fontStyle: 'italic',
              fontSize: '1.1rem'
            }}
          >
            C.R.U.S.H. doesn't just outshine other scribes—it redefines what an AI scribe can do. With human-backed customization, we're here for you, not just your dictation. Demo us and kiss the wannabes goodbye.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
