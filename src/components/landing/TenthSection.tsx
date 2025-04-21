
import React, { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ShieldCheck, ShieldHalf, Leaf, Database, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";

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
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <Box 
        sx={{ 
          background: 'white',
          borderRadius: '12px',
          // Ensures enough space for ALL content & prevents clipping:
          minHeight: { xs: 320, sm: 320, md: 320, lg: 340 },
          height: "100%", // let ResponsiveCarousel manage actual pixel height
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'flex-start',
          transition: 'all 0.23s',
          boxShadow: '0 4px 14px -1px rgba(20,49,81,0.09)',
          border: '1px solid #E0E0E0',
          p: { xs: 2.5, sm: 3.4, md: 3.6 },
          // Overflow visible to avoid description being cut off 
          overflow: 'visible',
          "&:hover": {
            transform: 'translateY(-8px) scale(1.03)',
            boxShadow: '0 14px 30px -5px rgba(20,49,81,0.17)', 
            borderColor: '#387E89'
          }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1.4,
          mb: 1
        }}>
          <Box sx={{
            width: 46,
            height: 46,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(20,49,81,0.055)',
            color: '#143151'
          }}>
            <IconComponent className="h-7 w-7" />
          </Box>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#143151', 
              fontWeight: 800,
              fontSize: '1.07rem'
            }}
          >
            {card.title}
          </Typography>
        </Box>
        
        <Typography 
          sx={{ 
            color: '#27425B', 
            mb: 1,
            fontSize: '0.98rem',
            fontWeight: 500,
            lineHeight: 1.65
          }}
        >
          {card.description}
        </Typography>
        
        <Box sx={{ mt: 'auto', width: '100%' }}>
          <Typography 
            component="ul" 
            sx={{ 
              pl: 2.3, 
              color: '#387E89',
              fontSize: '0.93rem',
              fontWeight: 500,
              '& li': { 
                mb: 0.6,
                position: 'relative',
                listStyle: 'disc'
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
    <section id="security-compliance" aria-labelledby="security-heading" className="w-full py-14 md:py-16 relative overflow-visible bg-gray-50">
      <Box sx={{
        maxWidth: '1400px',
        mx: 'auto',
        px: { xs: 1.5, sm: 3, md: 6 },
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
              textAlign: { xs: 'center', md: 'center' },
              mb: { xs: 1.7, md: 2 }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 23 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                fontWeight={900}
                id="security-heading"
                sx={{
                  mb: 1,
                  color: '#143151',
                  fontSize: { xs: '1.2rem', sm: '1.35rem', md: '1.43rem' },
                  lineHeight: 1.3,
                  letterSpacing: '-0.027em',
                  textAlign: { xs: 'center', md: 'center' }
                }}
              >
                Security, Compliance &amp; Data Protection You Can Trust
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#4B5563',
                  fontSize: { xs: '1.03rem', sm: '1.05rem', md: '1.09rem' },
                  lineHeight: 1.55,
                  maxWidth: '900px',
                  mx: 'auto',
                  textAlign: { xs: 'center', md: 'center' }
                }}
              >
                Comprehensive protection across HIPAA, PIPEDA &amp; GDPR – Ensuring the highest standards of healthcare data security and privacy.
              </Typography>
            </motion.div>
          </Box>
          <Box sx={{ width: "100%", mb: 2 }}>
            <ResponsiveCarousel
              items={complianceCards}
              columnsDesktop={3}
              columnsTablet={1}
              columnsMobile={1}
              gap={26}
              showControls={true}
              controlsBelow={true} // Moves arrow controls below & centers them
              itemWidth={370} // Wider card to fit more text, especially long titles/details
              itemHeight={340} // Give enough space to never cut content
              cardClassName="flex flex-col h-full justify-between"
              itemKey={(card, idx) => `${card.title}-${idx}`}
              renderItem={(card, index) => (
                <ComplianceCard card={card} index={index} />
              )}
            />
          </Box>
        </Stack>
      </Box>
    </section>
  );
};

export default TenthSection;
