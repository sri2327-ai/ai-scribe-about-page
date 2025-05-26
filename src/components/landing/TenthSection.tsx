
import React, { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ShieldCheck, ShieldHalf, Leaf, Database, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ResponsiveCarousel } from "@/components/ui/ResponsiveCarousel";
import { Button } from "@/components/ui/button"; 

interface ComplianceCardData {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  details: string[];
  link: string;
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
    ],
    link: '/security/hipaa'
  },
  { 
    title: 'PIPEDA Compliant', 
    icon: Leaf, 
    description: 'Meeting Canadian personal information protection requirements with robust data management',
    details: [
      'Canadian privacy law adherence',
      'Transparent data handling',
      'Consent-based information management'
    ],
    link: '/security/pipeda'
  },
  { 
    title: 'GDPR Compliant', 
    icon: ShieldCheck, 
    description: 'Complying with European data protection regulations for comprehensive global privacy standards',
    details: [
      'European data protection standards',
      'Individual privacy rights',
      'Cross-border data transfer protocols'
    ],
    link: '/security/gdpr'
  },
  { 
    title: 'ISO 27001 Certified', 
    icon: ShieldHalf, 
    description: 'International standard for information security management with top-tier AES-256 encryption',
    details: [
      'AES-256 encryption',
      'Rigorous security audits',
      'Continuous risk management'
    ],
    link: '/security/iso27001'
  },
  { 
    title: 'Automated Data Erasure', 
    icon: Database, 
    description: 'Secure and automatic deletion of documentation post-use, ensuring minimal data retention',
    details: [
      'Secure post-documentation deletion',
      'Automated data lifecycle management',
      'Minimal data footprint'
    ],
    link: '/security/data-erasure'
  },
  { 
    title: 'U.S. & Canada Compliance', 
    icon: Lock, 
    description: 'Meeting the highest healthcare standards across North American regulatory frameworks',
    details: [
      'Multi-jurisdictional compliance',
      'Adaptive regulatory adherence',
      'Cross-border data protection'
    ],
    link: '/security/us-canada-compliance'
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
          minHeight: { xs: 320, sm: 320, md: 320, lg: 380 },
          height: "100%",
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'flex-start',
          transition: 'all 0.23s',
          boxShadow: '0 4px 14px -1px rgba(20,49,81,0.09)',
          border: '1px solid #E0E0E0',
          p: { xs: 2.5, sm: 3.4, md: 3.6 },
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
          
          <Box sx={{ mt: 3, width: '100%', textAlign: 'center' }}>
            <Button 
              variant="outline" 
              size="sm"
              className="text-[#387E89] border-[#387E89] hover:bg-[#387E89]/10 transition-all duration-300"
              asChild
            >
              <a href={card.link} className="flex items-center gap-1">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
});
ComplianceCard.displayName = 'ComplianceCard';

const TenthSection = () => {
  return (
    <section id="security-compliance" aria-labelledby="security-heading" className="w-full py-14 md:py-16 relative overflow-visible bg-gray-50">
      {/* Enhanced SEO-friendly content for search engines - Comprehensive security and compliance coverage */}
      <div className="sr-only">
        <h2 id="security-seo-heading">Security, Compliance & Data Protection at S10.AI</h2>
        <p>
          S10.AI implements comprehensive security measures including HIPAA, PIPEDA, GDPR compliance, 
          ISO 27001 certification, automated data erasure, and cross-border North American regulatory adherence. 
          Our healthcare AI solutions maintain the highest standards of patient data protection and privacy.
        </p>
        
        {/* HIPAA Compliance Section */}
        <section>
          <h3>HIPAA Compliant Healthcare AI</h3>
          <p>S10.AI adheres to global healthcare privacy laws, ensuring patient data protection according to US HIPAA standards. Our AI medical scribe and staffing solutions maintain strict confidentiality protocols.</p>
          <h4>HIPAA Compliance Features:</h4>
          <ul>
            <li>Strict patient data confidentiality measures</li>
            <li>Comprehensive privacy safeguards for all AI processing</li>
            <li>Regulated access controls with role-based permissions</li>
            <li>Encrypted data transmission and storage</li>
            <li>Regular compliance audits and monitoring</li>
            <li>Business Associate Agreement (BAA) compliance</li>
          </ul>
          <a href="/security/hipaa">Learn more about S10.AI HIPAA compliance</a>
        </section>

        {/* PIPEDA Compliance Section */}
        <section>
          <h3>PIPEDA Compliant for Canadian Healthcare</h3>
          <p>Meeting Canadian personal information protection requirements with robust data management. S10.AI ensures compliance with Canada's Personal Information Protection and Electronic Documents Act.</p>
          <h4>PIPEDA Compliance Features:</h4>
          <ul>
            <li>Canadian privacy law adherence for healthcare data</li>
            <li>Transparent data handling and processing policies</li>
            <li>Consent-based information management systems</li>
            <li>Cross-border data protection for US-Canada operations</li>
            <li>Regular privacy impact assessments</li>
            <li>Patient consent management and tracking</li>
          </ul>
          <a href="/security/pipeda">Learn more about S10.AI PIPEDA compliance</a>
        </section>

        {/* GDPR Compliance Section */}
        <section>
          <h3>GDPR Compliant European Data Protection</h3>
          <p>Complying with European data protection regulations for comprehensive global privacy standards. S10.AI meets GDPR requirements for healthcare data processing and patient privacy rights.</p>
          <h4>GDPR Compliance Features:</h4>
          <ul>
            <li>European data protection standards implementation</li>
            <li>Individual privacy rights protection and enforcement</li>
            <li>Cross-border data transfer protocols and safeguards</li>
            <li>Right to be forgotten and data portability</li>
            <li>Data protection by design and by default</li>
            <li>Regular data protection impact assessments</li>
          </ul>
          <a href="/security/gdpr">Learn more about S10.AI GDPR compliance</a>
        </section>

        {/* ISO 27001 Certification Section */}
        <section>
          <h3>ISO 27001 Certified Information Security</h3>
          <p>International standard for information security management with top-tier AES-256 encryption. S10.AI maintains ISO 27001 certification for comprehensive information security management.</p>
          <h4>ISO 27001 Security Features:</h4>
          <ul>
            <li>AES-256 encryption for all data at rest and in transit</li>
            <li>Rigorous security audits and continuous monitoring</li>
            <li>Continuous risk management and threat assessment</li>
            <li>Information security management system (ISMS)</li>
            <li>Regular security awareness training</li>
            <li>Incident response and business continuity planning</li>
          </ul>
          <a href="/security/iso27001">Learn more about S10.AI ISO 27001 certification</a>
        </section>

        {/* Automated Data Erasure Section */}
        <section>
          <h3>Automated Data Erasure and Lifecycle Management</h3>
          <p>Secure and automatic deletion of documentation post-use, ensuring minimal data retention. S10.AI implements automated data lifecycle management to reduce security risks.</p>
          <h4>Data Erasure Features:</h4>
          <ul>
            <li>Secure post-documentation deletion protocols</li>
            <li>Automated data lifecycle management systems</li>
            <li>Minimal data footprint and retention policies</li>
            <li>Secure data destruction and disposal</li>
            <li>Audit trails for data deletion activities</li>
            <li>Configurable retention periods by data type</li>
          </ul>
          <a href="/security/data-erasure">Learn more about S10.AI data erasure policies</a>
        </section>

        {/* US & Canada Compliance Section */}
        <section>
          <h3>U.S. & Canada Healthcare Compliance</h3>
          <p>Meeting the highest healthcare standards across North American regulatory frameworks. S10.AI ensures compliance with both US and Canadian healthcare regulations and standards.</p>
          <h4>North American Compliance Features:</h4>
          <ul>
            <li>Multi-jurisdictional compliance across US and Canada</li>
            <li>Adaptive regulatory adherence to changing requirements</li>
            <li>Cross-border data protection and transfer protocols</li>
            <li>State and provincial healthcare regulation compliance</li>
            <li>Regular compliance monitoring and reporting</li>
            <li>Healthcare industry best practices implementation</li>
          </ul>
          <a href="/security/us-canada-compliance">Learn more about S10.AI North American compliance</a>
        </section>

        {/* Security Best Practices */}
        <section>
          <h3>Healthcare AI Security Best Practices</h3>
          <p>S10.AI implements industry-leading security practices for healthcare AI applications, ensuring patient data protection and system integrity across all AI-powered solutions.</p>
          <ul>
            <li>Zero-trust security architecture</li>
            <li>End-to-end encryption for all communications</li>
            <li>Multi-factor authentication and access controls</li>
            <li>Regular penetration testing and vulnerability assessments</li>
            <li>24/7 security monitoring and incident response</li>
            <li>Secure software development lifecycle (SSDLC)</li>
          </ul>
        </section>
      </div>
      
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
              controlsBelow={true}
              itemWidth={370}
              itemHeight={380}
              cardClassName="flex flex-col h-full justify-between"
              itemKey={(card, idx) => `${card.title}-${idx}`}
              renderItem={(card, index) => (
                <ComplianceCard card={card} index={index} />
              )}
            />
          </Box>
        </Stack>
      </Box>

      {/* Static version of the content for SEO (hidden visually but accessible to screen readers and crawlers) */}
      <div className="hidden print:block">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Security, Compliance &amp; Data Protection at S10.AI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceCards.map((card, idx) => (
              <div key={`print-card-${idx}`} className="border p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="mb-3">{card.description}</p>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 mb-4">
                  {card.details.map((detail, detailIdx) => (
                    <li key={`print-detail-${idx}-${detailIdx}`}>{detail}</li>
                  ))}
                </ul>
                <div>
                  <a href={card.link} className="text-blue-600 hover:underline">Learn more about {card.title}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced structured data for SEO - Security and Compliance */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "S10.AI Security and Compliance Standards",
          "description": "Comprehensive security and compliance standards implemented by S10.AI for healthcare data protection",
          "itemListElement": complianceCards.map((card, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "item": {
              "@type": "SecurityStandard",
              "name": card.title,
              "description": card.description,
              "compliance": card.details,
              "url": `https://s10.ai${card.link}`,
              "provider": {
                "@type": "Organization",
                "name": "S10.AI"
              }
            }
          }))
        })
      }} />
      
      {/* Enhanced FAQ schema for security compliance */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does S10.AI ensure HIPAA compliance for AI medical scribes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "S10.AI maintains HIPAA compliance through strict patient data confidentiality, comprehensive privacy safeguards, regulated access controls, encrypted data transmission, and regular compliance audits. Our AI medical scribe platform is specifically designed to meet healthcare privacy requirements in the US."
              }
            },
            {
              "@type": "Question",
              "name": "Is S10.AI compliant with international data protection regulations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, S10.AI is compliant with GDPR (European regulations), PIPEDA (Canadian requirements), and maintains ISO 27001 certification, ensuring global data protection standards are met across jurisdictions for all AI healthcare solutions."
              }
            },
            {
              "@type": "Question",
              "name": "How does S10.AI handle automated data erasure and retention?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "S10.AI implements automated data erasure protocols with secure post-documentation deletion, automated data lifecycle management, and maintains a minimal data footprint to enhance security and privacy for all AI-processed healthcare data."
              }
            },
            {
              "@type": "Question",
              "name": "What encryption standards does S10.AI use for healthcare data?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "S10.AI uses AES-256 encryption for all data at rest and in transit, implements rigorous security audits, continuous risk management, and maintains ISO 27001 certification for comprehensive information security management."
              }
            }
          ]
        })
      }} />
      
      {/* Enhanced Organization schema with security emphasis */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "S10.AI",
          "description": "Provider of AI-powered healthcare solutions with comprehensive security compliance including HIPAA, PIPEDA, GDPR, and ISO 27001 certification.",
          "url": "https://s10.ai",
          "logo": "https://s10.ai/logo.png",
          "medicalSpecialty": ["Healthcare Technology", "Medical Documentation", "Data Security", "AI Healthcare Solutions"],
          "ethicsPolicy": "https://s10.ai/security/privacy-policy",
          "award": ["ISO 27001 Certified", "HIPAA Compliant", "GDPR Compliant", "PIPEDA Compliant"],
          "securityMeasures": [
            "HIPAA Compliance",
            "PIPEDA Compliance", 
            "GDPR Compliance",
            "ISO 27001 Certification",
            "AES-256 Encryption",
            "Automated Data Erasure"
          ],
          "compliance": [
            "HIPAA",
            "PIPEDA",
            "GDPR", 
            "ISO 27001",
            "US Healthcare Standards",
            "Canadian Healthcare Standards"
          ]
        })
      }} />

      {/* Software Application schema for AI solutions with security focus */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "S10.AI Healthcare Platform",
          "description": "Secure, compliant AI-powered healthcare solutions including medical scribes and staffing agents",
          "applicationCategory": "Healthcare AI Software",
          "operatingSystem": "Cloud-based",
          "securityMeasures": "HIPAA, PIPEDA, GDPR compliant with ISO 27001 certification",
          "offers": {
            "@type": "Offer",
            "name": "Secure AI Healthcare Solutions",
            "description": "Comprehensive AI solutions for healthcare with enterprise-grade security and compliance"
          },
          "featureList": [
            "HIPAA Compliant AI Medical Scribe",
            "PIPEDA Compliant Data Processing",
            "GDPR Compliant European Operations",
            "ISO 27001 Certified Security",
            "AES-256 Encryption",
            "Automated Data Erasure",
            "Cross-border Compliance"
          ]
        })
      }} />
    </section>
  );
};

export default TenthSection;
