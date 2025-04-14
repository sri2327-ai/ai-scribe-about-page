
import React from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    id: "1",
    title: "Is S10.AI HIPAA compliant?",
    content:
      "Yes. S10.AI is fully HIPAA compliant and uses continuous compliance monitoring—not just annual audits. We protect PHI with strict administrative, physical, and technical safeguards."
  },
  {
    id: "2",
    title: "Do you provide a Business Associate Agreement (BAA)?",
    content:
      "Yes. We offer BAAs for all healthcare providers and partners who need one. Just request it via our support team."
  },
  {
    id: "3",
    title: "Do you have a DPIA and DPA?",
    content:
      "Yes. We maintain DPIAs and DPAs for all regions we operate in. Reach out if you need a copy."
  },
  {
    id: "4",
    title: "Can S10.AI access my patient's information?",
    content:
      "No. All data is de-identified before processing. We don't retain or use any patient-identifiable information."
  },
  {
    id: "5",
    title: "Are audio recordings saved?",
    content:
      "No. Audio is transcribed in real time and never stored—whether live or uploaded."
  },
  {
    id: "6",
    title: "Where is my data stored?",
    content:
      "Data stays within your region to meet local data residency and compliance laws like HIPAA and GDPR."
  },
  {
    id: "7",
    title: "How does S10.AI prevent data breaches?",
    content:
      "We follow ISO27001, SOC2, and Cyber Essentials standards, with annual penetration testing. PHI is de-identified and processed securely. All users are covered under our compliance program."
  },
  {
    id: "8",
    title: "How do you prevent AI 'hallucinations'?",
    content:
      "We minimize errors through expert-reviewed models and templates. Still, we recommend clinicians review notes before adding them to the EHR. Your feedback helps us improve."
  }
];

const S10AISafetyFAQs = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'black',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{
            textAlign: 'center',
            mb: 6
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              fontWeight: 'normal',
              mb: 2,
              color: 'white'
            }}
          >
            S10.AI Safety FAQs
          </Typography>
          <Typography
            sx={{
              fontSize: '1.125rem',
              color: 'grey.400',
              maxWidth: '2xl',
              mx: 'auto'
            }}
          >
            Common questions about our security and compliance standards
          </Typography>
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '3xl' }}>
            {faqItems.map((item) => (
              <Accordion 
                key={item.id}
                sx={{ 
                  mb: 1,
                  bgcolor: 'transparent', 
                  color: 'white',
                  boxShadow: 'none',
                  '&:before': {
                    display: 'none',
                  },
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  '&:last-child': {
                    borderBottom: 0
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ChevronDown color="white" />}
                  sx={{ 
                    py: 2.5,
                    color: 'white',
                    '& .MuiAccordionSummary-content': {
                      my: 0
                    }
                  }}
                >
                  <Typography 
                    sx={{ 
                      fontSize: '1.125rem',
                      fontWeight: 'normal' 
                    }}
                  >
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pb: 2.5, color: 'gray.300' }}>
                  <Typography>{item.content}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default S10AISafetyFAQs;
