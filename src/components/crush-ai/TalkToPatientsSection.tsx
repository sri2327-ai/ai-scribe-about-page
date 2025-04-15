
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck } from "lucide-react";

export const TalkToPatientsSection = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: '#ffffff'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Badge variant="outline" className="mb-4 border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100">
            Focus on Patient Care
          </Badge>
          
          <Typography 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            variant="h3" 
            sx={{ 
              fontWeight: 700,
              color: '#000000',
              mb: 2
            }}
          >
            Talk to Patients, Not Screens — CRUSH Handles the Rest
          </Typography>
          
          <Typography 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variant="body1" 
            sx={{ 
              color: '#666666',
              maxWidth: '800px'
            }}
          >
            Maintain eye contact with your patients while CRUSH AI automatically documents your conversation.
            Stop typing and start connecting.
          </Typography>
        </Box>

        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          sx={{ mb: 8 }}
        >
          <BeforeAfterSlider 
            beforeImage="/lovable-uploads/8f4a5ae2-aa8a-426f-8eff-90fdba4055a1.png"
            afterImage="/lovable-uploads/8f4a5ae2-aa8a-426f-8eff-90fdba4055a1.png"
            beforeAlt="Doctor typing notes during patient consultation"
            afterAlt="Doctor focusing on patient with CRUSH AI"
          />
        </Box>

        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center'
          }}
        >
          {[
            "Capture all relevant clinical information automatically",
            "Structure information according to medical best practices",
            "Format documentation to your specific preferences"
          ].map((feature, index) => (
            <Box 
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              sx={{ 
                flex: 1,
                p: 3,
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                bgcolor: 'white',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2
              }}
            >
              <ClipboardCheck className="text-green-500 flex-shrink-0 mt-1" />
              <Typography variant="body1" sx={{ color: '#333333' }}>
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
