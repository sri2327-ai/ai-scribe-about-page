
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Zap, RefreshCw, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const EhrIntegrationSection = () => {
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
            Seamless EHR Integration
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: 800,
              mx: 'auto',
              color: '#403E43',
              fontWeight: 400
            }}
          >
            CRUSH syncs effortlessly with any EHR system, eliminating copy-pasting and manual entry.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Works on Any Device",
              description: "Desktop, laptop, tablet, or mobile.",
              icon: <Zap size={36} className="text-black" />
            },
            {
              title: "Instant Sync",
              description: "AI-generated notes go directly into your EHR.",
              icon: <RefreshCw size={36} className="text-black" />
            },
            {
              title: "Automated Updates",
              description: "Lab results, prescriptions, and referrals auto-sync.",
              icon: <FileCheck size={36} className="text-black" />
            }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <Box 
                      sx={{ 
                        mb: 3,
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: 'rgba(0, 0, 0, 0.03)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 1.5,
                        fontWeight: 600,
                        color: '#000000',
                        fontSize: '1.25rem'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{ color: '#666666', fontSize: '0.95rem' }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          sx={{ 
            mt: 6, 
            textAlign: 'center',
            py: 4
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 3,
              color: '#8A898C',
              fontStyle: 'italic'
            }}
          >
            [Show EHR Logos below in transition]
          </Typography>
          {/* Placeholder for EHR logos */}
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              flexWrap: 'wrap'
            }}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <Box 
                key={item}
                sx={{
                  width: 120,
                  height: 60,
                  bgcolor: '#f5f5f5',
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(0, 0, 0, 0.06)'
                }}
              >
                <Typography variant="body2" sx={{ color: '#9e9e9e' }}>
                  EHR Logo {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
