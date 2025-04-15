
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { FileText, Users, Pill, Phone, ClipboardCheck } from "lucide-react";

export const WorkflowAutomationSection = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: '#f9f9f9'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box 
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              sx={{ pr: { md: 4 } }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 700,
                  color: '#000000',
                  mb: 2
                }}
              >
                More Than Just a Scribe
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#666666',
                  mb: 4
                }}
              >
                CRUSH AI doesn't just document—it enhances your entire clinical workflow through intelligent automation.
              </Typography>

              <Box 
                sx={{ 
                  p: 3, 
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  bgcolor: 'white',
                  mb: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    color: '#000000',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <FileText size={20} className="mr-2 text-blue-600" />
                  Smart Documentation
                </Typography>
                <Typography variant="body2" sx={{ color: '#666666' }}>
                  Automatically generates comprehensive, personalized clinical notes in your preferred format and style.
                </Typography>
              </Box>

              <Box 
                sx={{ 
                  p: 3, 
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  bgcolor: 'white',
                  mb: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    color: '#000000',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Users size={20} className="mr-2 text-blue-600" />
                  Referral Management
                </Typography>
                <Typography variant="body2" sx={{ color: '#666666' }}>
                  Simplifies the referral process by auto-generating referral letters with relevant patient information.
                </Typography>
              </Box>

              <Box 
                sx={{ 
                  p: 3, 
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  bgcolor: 'white',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    color: '#000000',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Pill size={20} className="mr-2 text-blue-600" />
                  Prescription Assistance
                </Typography>
                <Typography variant="body2" sx={{ color: '#666666' }}>
                  Suggests appropriate medications based on diagnosis and prepares prescriptions for your approval.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box 
              component={motion.div}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box 
                sx={{ 
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  bgcolor: 'white'
                }}
              >
                <Box 
                  sx={{ 
                    bgcolor: '#f0f4f8',
                    p: 3,
                    borderBottom: '1px solid #e0e0e0',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Phone size={24} className="mr-2 text-blue-600" />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000' }}>
                    Talk to Patients, Not Screens
                  </Typography>
                </Box>
                <Box sx={{ p: 4 }}>
                  <Typography variant="body1" sx={{ color: '#333333', mb: 4 }}>
                    With CRUSH AI, you can maintain eye contact and focus on your patients instead of typing notes. Our system works in the background to:
                  </Typography>

                  <Box 
                    sx={{ 
                      mb: 3,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2
                    }}
                  >
                    <ClipboardCheck className="text-green-500 flex-shrink-0 mt-1" />
                    <Typography variant="body2" sx={{ color: '#555555' }}>
                      <strong>Capture all relevant clinical information</strong> from your patient conversations
                    </Typography>
                  </Box>

                  <Box 
                    sx={{ 
                      mb: 3,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2
                    }}
                  >
                    <ClipboardCheck className="text-green-500 flex-shrink-0 mt-1" />
                    <Typography variant="body2" sx={{ color: '#555555' }}>
                      <strong>Structure the information</strong> according to medical best practices
                    </Typography>
                  </Box>

                  <Box 
                    sx={{ 
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2
                    }}
                  >
                    <ClipboardCheck className="text-green-500 flex-shrink-0 mt-1" />
                    <Typography variant="body2" sx={{ color: '#555555' }}>
                      <strong>Format documentation</strong> to your specific preferences and EHR requirements
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
