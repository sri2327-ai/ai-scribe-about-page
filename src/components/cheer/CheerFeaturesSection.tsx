import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Shield, 
  Globe, 
  Calendar, 
  FileText, 
  Zap,
  Lock,
  Smartphone,
  Clock,
  Users,
  MessageSquare,
  BarChart,
  Palette,
  Layers
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { cheerColors } from '@/theme/cheer-theme';

const features = [
  {
    icon: Video,
    title: 'HD Video Consultations',
    description: 'Crystal-clear video calls with adaptive quality that adjusts to network conditions for natural conversations.',
    gradient: 'from-[#143151] to-[#387E89]',
  },
  {
    icon: Shield,
    title: 'HIPAA & GDPR Compliant',
    description: 'End-to-end encryption with comprehensive audit trails. Built for enterprise-grade security.',
    gradient: 'from-[#387E89] to-[#5192AE]',
  },
  {
    icon: Globe,
    title: 'Browser-Based Access',
    description: 'No downloads required. Patients join with a single click from any device, anywhere.',
    gradient: 'from-[#5192AE] to-[#A5CCF3]',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Automated reminders and waitlist management reduce no-shows by up to 40%.',
    gradient: 'from-[#143151] to-[#5192AE]',
  },
  {
    icon: Palette,
    title: 'Custom Waiting Rooms',
    description: 'Brand your virtual waiting room with custom content, logos, and patient education materials.',
    gradient: 'from-[#387E89] to-[#A5CCF3]',
  },
  {
    icon: Layers,
    title: 'S10.AI Integration',
    description: 'Seamlessly connects with CRUSH and BRAVO for a complete AI-powered clinical workflow.',
    gradient: 'from-[#143151] to-[#387E89]',
  },
];

const additionalFeatures = [
  { icon: Lock, text: 'End-to-End Encryption' },
  { icon: Smartphone, text: 'Mobile Responsive' },
  { icon: Clock, text: '24/7 Availability' },
  { icon: Users, text: 'Multi-Party Calls' },
  { icon: MessageSquare, text: 'Secure Messaging' },
  { icon: BarChart, text: 'Analytics Dashboard' },
];

export const CheerFeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-48 md:w-64 h-48 md:h-64 rounded-full bg-[#A5CCF3]/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-48 md:w-64 h-48 md:h-64 rounded-full bg-[#387E89]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#387E89]/10 text-[#387E89] text-sm font-medium mb-4">
            Platform Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#143151] mb-4 md:mb-6">
            Everything You Need for
            <span className="block text-[#387E89]">Modern Virtual Care</span>
          </h2>
          <p className="text-base md:text-lg text-[#5192AE] leading-relaxed">
            CHEER combines powerful telemedicine tools with intuitive design, 
            so you can focus on what matters most—your patients.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <Card className="h-full bg-white border-gray-100 hover:border-[#387E89]/30 shadow-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-5 md:p-6">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-[#143151] mb-2 group-hover:text-[#387E89] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#5192AE] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional features strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-[#143151] to-[#387E89] rounded-2xl p-6 md:p-8 lg:p-10 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {additionalFeatures.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-2 md:mb-3 backdrop-blur-sm">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-xs md:text-sm font-medium text-white/90">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
