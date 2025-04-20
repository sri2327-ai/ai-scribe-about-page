import React, { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ShieldCheck, ShieldHalf, Leaf, Database, Lock } from "lucide-react";
import { motion } from "framer-motion";

// Define proper types for the card data
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

// Extract card data to a separate constant for better organization
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

// Extract compliance card into a separate component and memoize it for better performance
const ComplianceCard = memo(({ card, index }: ComplianceCardProps) => {
  const IconComponent = card.icon;
  
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, rgba(20, 49, 81, 0.95), rgba(56, 126, 137, 0.95))',
          borderRadius: '12px',
          p: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 15px 30px rgba(0,0,0,0.15)'
          }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          mb: 1
        }}>
          <IconComponent className="h-6 w-6 text-white" />
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'white', 
              fontWeight: 600,
              fontSize: '1.1rem'
            }}
          >
            {card.title}
          </Typography>
        </Box>
        
        <Typography 
          sx={{ 
            color: 'rgba(255,255,255,0.8)', 
            mb: 1,
            fontSize: '0.9rem'
          }}
        >
          {card.description}
        </Typography>
        
        <Box sx={{ mt: 'auto' }}>
          <Typography 
            component="ul" 
            sx={{ 
              pl: 2, 
              color: 'rgba(255,255,255,0.7)', 
              fontSize: '0.8rem',
              '& li': { 
                mb: 0.5,
                '&::marker': { 
                  color: 'rgba(255,255,255,0.5)' 
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
    <section id="security-compliance" aria-labelledby="security-heading" className="w-full py-16 relative overflow-hidden bg-white">
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
          {/* Title Section */}
          <Box 
            sx={{
              width: { xs: '100%', md: '80%', lg: '70%' },
              textAlign: 'center',
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
                variant="h2" 
                fontWeight="bold"
                id="security-heading"
                sx={{ 
                  mb: 3,
                  color: 'black',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  lineHeight: 1.2
                }}
              >
                Security, Compliance & Data Protection You Can Trust
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(0, 0, 0, 0.7)',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  lineHeight: 1.6,
                  maxWidth: '900px',
                  mx: 'auto'
                }}
              >
                Comprehensive protection across HIPAA, PIPEDA & GDPR – Ensuring the highest standards of healthcare data security and privacy.
              </Typography>
            </motion.div>
          </Box>

          {/* Compliance Cards Section - Optimized with virtualization concept */}
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

export default React.memo(TenthSection);
