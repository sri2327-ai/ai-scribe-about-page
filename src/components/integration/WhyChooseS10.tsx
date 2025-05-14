
import React from 'react';
import { Typography } from '@mui/material';
import { Shield, Zap, Scale, Clock, Check, Database } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ResponsiveCarousel } from '../ui/ResponsiveCarousel';
import { shadowStyles } from "@/lib/shadow-utils";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className={cn(
    "bg-white rounded-xl p-6 h-full border border-gray-100 hover:shadow-lg transition-shadow",
    shadowStyles.card
  )}>
    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89] text-white mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-3 text-[#143151]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const features = [
  {
    icon: <Shield size={24} />,
    title: "No Disruptions",
    description: "Works with your existing tools—no rip-and-replace required."
  },
  {
    icon: <Scale size={24} />,
    title: "Scalable & Future-Proof",
    description: "Adapts effortlessly as your practice grows."
  },
  {
    icon: <Zap size={24} />,
    title: "Lightning-Fast Charting",
    description: "AI-driven notes, structured data, and auto-generated codes in minutes."
  },
  {
    icon: <Shield size={24} />,
    title: "Ironclad Security",
    description: "HIPAA, PIPEDA & GDPR Compliant | ISO 27001 Certified | AES-256 Encrypted"
  },
  {
    icon: <Database size={24} />,
    title: "Reliability at Scale",
    description: "Fault-tolerant architecture with multiple availability zones."
  },
  {
    icon: <Check size={24} />,
    title: "Proven Results",
    description: "95% reduction in documentation time with 99.9% uptime reliability."
  }
];

const WhyChooseS10 = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24 bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{ 
            fontSize: isMobile ? '1.5rem' : '2rem',
            mb: 2,
            color: '#143151',
            lineHeight: 1.2
          }}
        >
          Why Choose S10.AI Integration?
        </Typography>
        <Typography
          variant="body1"
          sx={{ 
            fontSize: isMobile ? '0.9rem' : '1rem',
            color: '#4a5568',
            lineHeight: 1.6
          }}
        >
          Powerful technology that brings everything together seamlessly
        </Typography>
      </div>

      <div className="w-full max-w-[1200px] mx-auto">
        <ResponsiveCarousel
          items={features}
          renderItem={(item) => (
            <FeatureCard 
              icon={item.icon} 
              title={item.title} 
              description={item.description} 
            />
          )}
          columnsDesktop={3}
          columnsTablet={2}
          columnsMobile={1}
          gap={24}
          itemHeight={{ xs: 220, sm: 230, md: 240 }}
          showControls={true}
          autoPlay={true}
          autoPlayInterval={4000}
          controlsBelow={true}
          className="py-4"
          cardClassName="h-full"
        />
      </div>
    </div>
  );
};

export default WhyChooseS10;
