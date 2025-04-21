
import React from 'react';
import { Shield, Globe2, Cloud } from 'lucide-react';
import { Typography } from '@mui/material';
import { useIsMobile } from "@/hooks/use-mobile";
import { ResponsiveCarousel } from '../ui/ResponsiveCarousel';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Military-grade encryption and compliance standards."
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Global Infrastructure",
    description: "Worldwide network of data centers ensuring optimal performance."
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Excellence",
    description: "Leveraging AWS's industry-leading cloud capabilities."
  }
];

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="h-full bg-white rounded-xl shadow-md transition-shadow hover:shadow-lg">
    <CardContent className="p-6 flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89] text-white mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[#143151]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

export default function LastScroll() {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            mb: 2,
            color: '#143151',
            lineHeight: 1.2
          }}
        >
          Technical Partner
        </Typography>
        <div className="flex justify-center mb-12">
          <img src="/aws.png" alt="AWS" className="h-10" />
        </div>
      </div>

      <div className="mb-16">
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
          itemHeight={{ xs: 200, sm: 220, md: 240 }}
          showControls={true}
          autoPlay={true}
          autoPlayInterval={4000}
          className="py-4"
        />
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            mb: 2,
            color: '#143151',
            lineHeight: 1.2
          }}
        >
          Smart. Fast. Effortless.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: '#4a5568',
            fontSize: isMobile ? '1rem' : '1.125rem'
          }}
        >
          Elevate Healthcare Efficiency with S10.AI — Get Started Now!
        </Typography>
        <button
          className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl transition-all duration-300"
        >
          REQUEST A DEMO
        </button>
      </div>
    </div>
  );
}
