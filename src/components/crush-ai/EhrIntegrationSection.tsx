
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Zap, RefreshCw, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

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
              color: '#143151', // Updated to brand navy color
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
              color: 'rgba(20, 49, 81, 0.8)', // Updated to semi-transparent navy
              fontWeight: 400,
              mb: 5
            }}
          >
            CRUSH syncs effortlessly with any EHR system, eliminating copy-pasting and manual entry.
          </Typography>
        </Box>

        {/* EHR Logos at the top */}
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
            mb: 6
          }}
        >
          {["Epic", "Cerner", "Meditech", "NextGen"].map((item, index) => (
            <Box 
              key={index}
              sx={{
                width: { xs: 100, md: 120 },
                height: { xs: 50, md: 60 },
                bgcolor: 'rgba(165, 204, 243, 0.1)', // Updated to semi-transparent light blue
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(56, 126, 137, 0.1)' // Updated to semi-transparent teal
              }}
            >
              <Typography variant="body2" sx={{ color: '#143151' }}> {/* Updated to brand navy color */}
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Horizontal scrolling cards */}
        <ScrollArea className="w-full whitespace-nowrap pb-4">
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
                icon: <Zap size={36} className="text-teal" stroke="#387E89" strokeWidth={1.5} /> // Updated to brand teal
              },
              {
                title: "Instant Sync",
                description: "AI-generated notes go directly into your EHR.",
                icon: <RefreshCw size={36} className="text-teal" stroke="#387E89" strokeWidth={1.5} /> // Updated to brand teal
              },
              {
                title: "Automated Updates",
                description: "Lab results, prescriptions, and referrals auto-sync.",
                icon: <FileCheck size={36} className="text-teal" stroke="#387E89" strokeWidth={1.5} /> // Updated to brand teal
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
                        bgcolor: 'rgba(56, 126, 137, 0.1)', // Updated to semi-transparent teal
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
                        color: '#143151', // Updated to brand navy color
                        fontSize: '1.25rem'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{ color: 'rgba(20, 49, 81, 0.8)', fontSize: '0.95rem' }} // Updated to semi-transparent navy
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
