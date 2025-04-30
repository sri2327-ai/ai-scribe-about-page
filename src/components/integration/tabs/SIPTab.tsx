
import React from 'react';
import { Phone, Video, Headphones, Monitor, Wifi, Link } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import Marquee from "react-fast-marquee";

const SIPTab = () => {
  const isMobile = useIsMobile();
  
  const features = [
    {
      icon: <Phone />,
      title: 'AI-Enhanced Call Management',
      description: 'Integrates seamlessly with any SIP/VoIP system for flawless connectivity.'
    },
    {
      icon: <Video />,
      title: 'Instant Telehealth Integrations',
      description: 'Works effortlessly with Zoom, Microsoft Teams, Google Meet, WebEx, and more.'
    }
  ];

  const platforms = [
    'Zoom Healthcare', 'Microsoft Teams', 'Google Meet', 'WebEx Healthcare',
    'RingCentral', 'Doximity', 'Doxy.me', 'VSee', 'AMC Health', 'Vidyo',
    'Twilio', 'Vonage', 'Cisco', 'Avaya', '8x8', 'GoTo'
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#143151] text-center sm:text-left">
        Enterprise-Grade Communication Platform
      </h2>
      
      <div className="grid gap-5 sm:gap-6 mb-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex flex-col sm:flex-row items-start gap-4 p-5 sm:p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300"
          >
            <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#143151] to-[#387E89] text-white mx-auto sm:mx-0 mb-3 sm:mb-0">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#143151] text-center sm:text-left">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base text-center sm:text-left">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="font-semibold text-[#143151] mb-3 text-center sm:text-left">Supported Platforms:</p>
        <div className="w-full overflow-hidden rounded-lg">
          <Marquee
            gradient={true}
            gradientColor={"rgb(255, 255, 255)"}
            gradientWidth={50}
            speed={40}
            pauseOnHover={true}
            className="py-2"
          >
            {platforms.map((platform, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151] to-[#387E89] text-white text-sm mx-2 transform hover:scale-105 transition-transform duration-200"
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
