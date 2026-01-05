import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Video, Shield, Globe, Calendar, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { cheerColors } from '@/theme/cheer-theme';

const benefits = [
  { icon: Video, title: 'All-in-One Telemedicine', description: 'Built for end-to-end virtual care delivery' },
  { icon: Shield, title: 'Enterprise Security', description: 'HIPAA compliant with SOC 2 certification' },
  { icon: Globe, title: 'Universal Access', description: 'No downloads—works on any device instantly' },
  { icon: Calendar, title: 'Smart Scheduling', description: 'AI-powered reminders reduce no-shows by 40%' },
  { icon: Layers, title: 'S10.AI Integration', description: 'Seamless connection with CRUSH and BRAVO' },
];

const stats = [
  { value: '10K+', label: 'Active Clinicians' },
  { value: '500K+', label: 'Consultations' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export const CheerWhyChooseSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white to-[#F5F9FF]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#143151]/10 text-[#143151] text-sm font-medium mb-4">
              Why CHEER
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#143151] mb-4">
              Built for Clinicians Who Care
            </h2>
            <p className="text-lg text-[#5192AE] max-w-2xl mx-auto">
              Join thousands of healthcare providers who trust CHEER for their virtual care needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Benefits list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#387E89]/30 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-[#143151] to-[#387E89] shadow-lg group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#143151] text-lg group-hover:text-[#387E89] transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-[#5192AE] text-sm">{benefit.description}</p>
                  </div>
                  <CheckCircle2 className="ml-auto h-5 w-5 text-[#387E89] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </motion.div>
              ))}
            </motion.div>

            {/* Right - CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-[#143151] via-[#1a3d63] to-[#387E89] rounded-3xl p-8 md:p-10 text-white overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-[#5192AE]/20 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">Get Started Today</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Transform Your Virtual Care Experience
                  </h3>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    CHEER puts modern telemedicine tools into clinicians' hands—scalable, secure, and simple. 
                    Whether you're a solo provider or part of a larger health network, 
                    CHEER helps you focus on patients, not technology.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                    {stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                        <p className="text-xs text-blue-200">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      size="lg"
                      className="rounded-full px-8 py-6 bg-white text-[#143151] hover:bg-gray-100 font-semibold shadow-xl transition-all hover:scale-105"
                    >
                      Request a Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="rounded-full px-8 py-6 border-2 border-white/30 text-white hover:bg-white/10 font-semibold backdrop-blur-sm"
                    >
                      View Pricing
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
