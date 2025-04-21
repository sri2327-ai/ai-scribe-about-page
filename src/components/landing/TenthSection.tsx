
import React, { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ShieldCheck, ShieldHalf, Leaf, Database, Lock } from "lucide-react";
import { motion } from "framer-motion";

interface ComplianceCardData {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  details: string[];
}

interface ComplianceCardProps {
  card: ComplianceCardData;
  index: number;
}

const complianceCards: ComplianceCardData[] = [
  { 
    title: 'HIPAA Compliant', 
    icon: ShieldCheck, 
    description: 'Adhering to global healthcare privacy laws, ensuring patient data protection according to US standards',
    details: [
      'Strict patient data confidentiality',
      'Comprehensive privacy safeguards',
      'Regulated access controls'
    ]
  },
  { 
    title: 'PIPEDA Compliant', 
    icon: Leaf, 
    description: 'Meeting Canadian personal information protection requirements with robust data management',
    details: [
      'Canadian privacy law adherence',
      'Transparent data handling',
      'Consent-based information management'
    ]
  },
  { 
    title: 'GDPR Compliant', 
    icon: ShieldCheck, 
    description: 'Complying with European data protection regulations for comprehensive global privacy standards',
    details: [
      'European data protection standards',
      'Individual privacy rights',
      'Cross-border data transfer protocols'
    ]
  },
  { 
    title: 'ISO 27001 Certified', 
    icon: ShieldHalf, 
    description: 'International standard for information security management with top-tier AES-256 encryption',
    details: [
      'AES-256 encryption',
      'Rigorous security audits',
      'Continuous risk management'
    ]
  },
  { 
    title: 'Automated Data Erasure', 
    icon: Database, 
    description: 'Secure and automatic deletion of documentation post-use, ensuring minimal data retention',
    details: [
      'Secure post-documentation deletion',
      'Automated data lifecycle management',
      'Minimal data footprint'
    ]
  },
  { 
    title: 'U.S. & Canada Compliance', 
    icon: Lock, 
    description: 'Meeting the highest healthcare standards across North American regulatory frameworks',
    details: [
      'Multi-jurisdictional compliance',
      'Adaptive regulatory adherence',
      'Cross-border data protection'
    ]
  }
];

const ComplianceCard = memo(({ card, index }: ComplianceCardProps) => {
  const IconComponent = card.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Box 
        sx={{ 
          background: 'white',
          borderRadius: '12px',
          p: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          mb: 1
        }}>
          <Box sx={{
            width: 48,
            height: 48,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(20, 49, 81, 0.05)',
            color: '#143151'
          }}>
            <IconComponent className="h-6 w-6" />
          </Box>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#143151', 
              fontWeight: 600,
              fontSize: '1.1rem'
            }}
          >
            {card.title}
          </Typography>
        </Box>
        
        <Typography 
          sx={{ 
            color: '#4B5563', 
            mb: 1,
            fontSize: '0.9rem',
            lineHeight: 1.6
          }}
        >
          {card.description}
        </Typography>
        
        <Box sx={{ mt: 'auto' }}>
          <Typography 
            component="ul" 
            sx={{ 
              pl: 2, 
              color: '#6B7280', 
              fontSize: '0.85rem',
              '& li': { 
                mb: 1,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '-1rem',
                  top: '0.5rem',
                  width: '0.375rem',
                  height: '0.375rem',
                  borderRadius: '50%',
                  backgroundColor: '#387E89'
                }
              }
            }}
          >
            {card.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
});

ComplianceCard.displayName = 'ComplianceCard';

const TenthSection = () => {
  return (
    <section id="security-compliance" aria-labelledby="security-heading" className="w-full py-16 relative overflow-hidden bg-gray-50">
      <Box sx={{ 
        maxWidth: '1400px',
        mx: 'auto',
        px: { xs: 2, sm: 4, md: 6 },
        position: 'relative',
        zIndex: 5
      }}>
        <Stack
          spacing={{ xs: 5, md: 6 }}
          direction="column"
          sx={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box 
            sx={{
              width: { xs: '100%', md: '80%', lg: '70%' },
              textAlign: { xs: 'left', md: 'center' },
              mb: { xs: 1, md: 2 }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h4" 
                fontWeight="bold"
                id="security-heading"
                sx={{ 
                  mb: 2,
                  color: '#143151',
                  fontSize: { xs: '1.15rem', sm: '1.2rem', md: '1.5rem' },
                  lineHeight: 1.3,
                  letterSpacing: '-0.02em',
                  textAlign: { xs: 'left', md: 'center' }
                }}
              >
                Security, Compliance &amp; Data Protection You Can Trust
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#4B5563',
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                  lineHeight: 1.5,
                  maxWidth: '900px',
                  mx: 'auto',
                  textAlign: { xs: 'left', md: 'center' }
                }}
              >
                Comprehensive protection across HIPAA, PIPEDA &amp; GDPR – Ensuring the highest standards of healthcare data security and privacy.
              </Typography>
            </motion.div>
          </Box>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { 
              xs: 'repeat(1, 1fr)', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(3, 1fr)' 
            },
            gap: 3,
            width: '100%'
          }}>
            {complianceCards.map((card, index) => (
              <ComplianceCard key={`compliance-card-${index}`} card={card} index={index} />
            ))}
          </Box>
        </Stack>
      </Box>
    </section>
  );
};

export default TenthSection;
