
import React from 'react';
import { motion } from "framer-motion";
import { Video, Shield, Globe, Calendar, Palette, FileText, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cheerColors } from '@/theme/cheer-theme';

const features = [
  {
    icon: Video,
    title: "High-Quality Virtual Care",
    description: "Deliver real-time, HD video and audio for virtual patient encounters that feel as natural as in-office visits. CHEER's communication layer supports crystal-clear video, secure chat, and interactive visit tools so clinicians and patients stay connected without friction."
  },
  {
    icon: Shield,
    title: "Secure & Compliant by Design",
    description: "CHEER is built for healthcare compliance: data is encrypted in transit and at rest, and the platform is engineered to meet global privacy requirements such as HIPAA and GDPR. This focus on enterprise-grade security ensures clinician confidence and patient trust."
  },
  {
    icon: Globe,
    title: "Instant, Browser-Based Access",
    description: "No installations. No apps. Patients and clinicians join sessions instantly from any modern browser on desktop or mobile. One-click access eliminates tech barriers, accelerates adoption, and makes telemedicine accessible to every patient."
  },
  {
    icon: Calendar,
    title: "Real-Time Scheduling & Patient Flow",
    description: "Manage sessions with a clinician-focused dashboard that displays patient check-in status and streamlines transitions between visits. Combined with automated reminders and intake workflows, CHEER helps reduce no-shows and keeps your clinical schedule on track."
  },
  {
    icon: Palette,
    title: "Personalized Waiting Experience",
    description: "Customize the virtual waiting room with your practice branding, patient education content, or welcome messages. CHEER turns idle moments into opportunities to inform and engage patients while they await their visit."
  },
  {
    icon: FileText,
    title: "Automatic Visit Tracking & Mobile Access",
    description: "CHEER captures visit details—including timing, duration, and encounter metadata—so clinicians spend less time on documentation. Mobile-ready interfaces allow providers to launch or review visits on the go without sacrificing workflow continuity."
  },
  {
    icon: Layers,
    title: "Designed for the S10.AI Ecosystem",
    description: "CHEER is built to integrate seamlessly into S10.AI's AI-driven platform. Combine telemedicine with automation, documentation tools, and intelligent agents to extend virtual care beyond video visits and into structured clinical workflows."
  }
];

export const CheerFeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: cheerColors.background.light }}>
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: cheerColors.primary }}>
            Features Built for Modern Healthcare
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: cheerColors.text.secondary }}>
            Everything you need to deliver exceptional virtual care experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === features.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="h-full bg-white backdrop-blur-xl border-gray-200 hover:border-[#387E89] hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#143151] to-[#387E89] group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold flex-1 pt-1" style={{ color: cheerColors.primary }}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 flex-1 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
