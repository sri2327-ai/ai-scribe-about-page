
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Zap, RefreshCw, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GoogleGeminiEffect, useGeminiPaths } from "@/components/ui/google-gemini-effect";

export const EhrIntegrationSection = () => {
  const pathLengths = useGeminiPaths();
  
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <GoogleGeminiEffect 
        pathLengths={pathLengths} 
        className="opacity-30" // Increased opacity from 0.1 to 0.3
      />
      
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
              letterSpacing: '-0.02em',
              position: 'relative',
              zIndex: 1
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
              fontWeight: 400,
              mb: 5,
              position: 'relative',
              zIndex: 1
            }}
          >
            CRUSH syncs effortlessly with any EHR system, eliminating copy-pasting and manual entry.
          </Typography>
        </Box>

        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 3,
            mb: 6,
            position: 'relative',
            zIndex: 1
          }}
        >
          {["Epic", "Cerner", "Meditech", "NextGen"].map((item, index) => (
            <Box 
              key={index}
              sx={{
                width: { xs: 100, md: 120 },
                height: { xs: 50, md: 60 },
                bgcolor: '#f5f5f5',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(0, 0, 0, 0.06)'
              }}
            >
              <Typography variant="body2" sx={{ color: '#9e9e9e' }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        <ScrollArea className="w-full whitespace-nowrap pb-4 relative z-10">
          <Box 
            sx={{ 
              display: 'flex',
              gap: 3,
              pb: 2,
              px: 0.5,
            }}
          >
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                style={{ minWidth: '300px' }}
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
            ))}
          </Box>
        </ScrollArea>
      </Container>
    </Box>
  );
};
