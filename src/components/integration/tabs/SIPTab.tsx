
import React from 'react';
import { Video, Phone, Users, Monitor, Wifi, Headphones } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import Marquee from "react-fast-marquee";

const SIPTab = () => {
  const isMobile = useIsMobile();
  
  const features = [
    {
      icon: <Video />,
      title: 'HD Telehealth Sessions',
      description: 'High-quality video consultations with integrated clinical documentation and patient vitals monitoring.'
    },
    {
      icon: <Phone />,
      title: 'Unified Communications',
      description: 'Seamless integration with your existing phone systems, call routing, and virtual front desk.'
    }
  ];

  const platforms = [
    'Zoom Healthcare', 'Microsoft Teams', 'Google Meet', 'WebEx Healthcare',
    'RingCentral', 'Doximity', 'Doxy.me', 'VSee', 'AMC Health', 'Vidyo',
    'Twilio', 'Vonage', 'Cisco', 'Avaya', '8x8', 'GoTo'
  ];

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#143151]">
        Enterprise-Grade Communication Platform
      </h2>
      
      <div className="grid gap-6 mb-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89] text-white">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#143151]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="font-semibold text-[#143151] mb-3">Supported Platforms:</p>
        <div className="w-full overflow-hidden">
          <Marquee
            gradient={true}
            gradientColor={"#143151"}
            speed={40}
            pauseOnHover={true}
            className="py-2"
          >
            {platforms.map((platform, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm mx-2"
              >
                {index % 2 === 0 ? <Video size={16} /> : <Phone size={16} />}
                {platform}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SIPTab;
