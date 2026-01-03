
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, User, LayoutDashboard, Mic, VideoIcon, Pause, MessageSquare, Settings, BarChart3, HelpCircle, LogOut, Users } from "lucide-react";
import { cheerColors } from '@/theme/cheer-theme';

type ViewType = 'patient' | 'dashboard' | 'clinician';

const PatientViewAnimation = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4 }}
    className="w-full h-full bg-[#1a2e3d] rounded-lg overflow-hidden relative"
  >
    {/* Video call interface - Patient View */}
    <div className="flex h-full">
      {/* Main video area - patient sees doctor */}
      <div className="flex-1 relative bg-gradient-to-br from-[#1a2e3d] to-[#0f1c24]">
        <div className="absolute inset-4 flex items-center justify-center">
          {/* Doctor video placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <User className="w-12 h-12 text-gray-500" />
              </div>
              <p className="text-sm font-medium text-gray-600">Dr. Smith</p>
              <p className="text-xs text-gray-500">Cardiologist</p>
            </div>
          </div>
        </div>
        
        {/* Call controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
          <motion.button 
            className="w-10 h-10 rounded-full bg-gray-700/80 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <Pause className="w-4 h-4 text-white" />
          </motion.button>
          <motion.button 
            className="w-10 h-10 rounded-full bg-gray-700/80 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <VideoIcon className="w-4 h-4 text-white" />
          </motion.button>
          <motion.button 
            className="w-10 h-10 rounded-full bg-gray-700/80 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <Mic className="w-4 h-4 text-white" />
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
);

const ClinicianDashboardAnimation = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4 }}
    className="w-full h-full bg-[#1a2e3d] rounded-lg overflow-hidden relative"
  >
    <div className="flex h-full">
      {/* Video call with patient */}
      <div className="w-1/2 relative">
        <div className="absolute inset-3 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg">
          <div className="absolute top-3 right-3 w-16 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-md flex items-center justify-center">
            <span className="text-[10px] text-blue-600 font-medium">You</span>
          </div>
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-xs font-medium text-gray-600">Dr. Smith</p>
            </div>
          </div>
        </div>
        
        {/* Call controls */}
        <div className="absolute bottom-3 left-3 flex gap-2">
          <button className="w-7 h-7 rounded-full bg-[#387E89] flex items-center justify-center">
            <ArrowRight className="w-3 h-3 text-white" />
          </button>
          <button className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center">
            <Pause className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
      
      {/* Chat panel */}
      <div className="w-1/2 bg-white p-3 flex flex-col">
        <div className="bg-[#387E89] text-white text-xs px-3 py-2 rounded-t-lg flex justify-between items-center">
          <span>View chat with Dr. Weeks</span>
          <span>▼</span>
        </div>
        <div className="flex-1 bg-gray-50 p-2 text-[10px] space-y-2 overflow-hidden">
          <p className="text-gray-400 text-center">JANUARY 20, 2021 3:37 PM</p>
          <div className="flex justify-end">
            <div className="bg-[#387E89] text-white px-2 py-1 rounded-lg max-w-[80%]">
              Hi Ann, I'll be with you shortly.
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div className="bg-gray-200 px-2 py-1 rounded-lg">
              No problem!
            </div>
          </div>
        </div>
        <div className="flex gap-1 mt-2">
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="flex-1 text-[10px] px-2 py-1 border border-gray-300 rounded"
          />
          <button className="bg-[#387E89] text-white text-[10px] px-2 py-1 rounded">Send</button>
        </div>
      </div>
    </div>
  </motion.div>
);

const ClinicianViewAnimation = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4 }}
    className="w-full h-full bg-[#1a2e3d] rounded-lg overflow-hidden relative"
  >
    <div className="flex h-full">
      {/* Dark video preview area */}
      <div className="w-2/5 bg-gradient-to-br from-[#0f1c24] to-[#1a2e3d]"></div>
      
      {/* Dashboard sidebar */}
      <div className="w-1/4 bg-white border-r border-gray-200 p-3 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-[#387E89] rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">C</span>
          </div>
          <span className="text-xs font-bold text-[#387E89]">CHEER</span>
          <span className="text-[10px] text-[#387E89] ml-auto">PRO</span>
        </div>
        
        <div className="text-[10px] text-gray-500 mb-2 uppercase tracking-wider">Patient Queue</div>
        <p className="text-[10px] text-[#387E89] italic mb-3">No one has checked in yet</p>
        
        <div className="text-[10px] text-gray-500 mb-2 uppercase tracking-wider">Account</div>
        <div className="space-y-2">
          {[
            { icon: LayoutDashboard, label: 'Your Dashboard' },
            { icon: Users, label: 'Edit Waiting Room' },
            { icon: Settings, label: 'Account Settings' },
            { icon: BarChart3, label: 'Analytics', badge: 'BETA' },
            { icon: Video, label: 'Meeting History' },
            { icon: HelpCircle, label: 'Help Center' },
            { icon: LogOut, label: 'Logout' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[10px] text-gray-600 hover:text-[#387E89] cursor-pointer">
              <item.icon className="w-3 h-3" />
              <span>{item.label}</span>
              {item.badge && <span className="text-[8px] bg-[#387E89] text-white px-1 rounded">{item.badge}</span>}
            </div>
          ))}
        </div>
        
        <div className="mt-auto">
          <button className="w-full bg-red-500 text-white text-[10px] py-1.5 rounded">Pre-call Test</button>
          <p className="text-[8px] text-center text-gray-500 mt-1">5 tips for a great call</p>
        </div>
      </div>
      
      {/* Welcome panel */}
      <div className="flex-1 bg-gray-50 p-4">
        <h3 className="text-base font-bold text-gray-800 mb-1">Welcome, Dr. Boston!</h3>
        <p className="text-[10px] text-gray-500 mb-3">To invite someone to your waiting room, share this link:</p>
        
        <div className="flex gap-1 mb-4">
          <input 
            type="text" 
            value="https://cheer.s10.ai/drboston" 
            readOnly 
            className="flex-1 text-[10px] px-2 py-1.5 border border-gray-300 rounded bg-white"
          />
          <button className="bg-[#387E89] text-white text-[10px] px-3 py-1.5 rounded">Copy</button>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: Users, label: 'Edit Waiting Room' },
            { icon: Settings, label: 'Account Settings' },
            { icon: User, label: 'User Controls' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-2 rounded-lg text-center border border-gray-200 hover:border-[#387E89] cursor-pointer transition-colors">
              <item.icon className="w-5 h-5 mx-auto mb-1 text-[#387E89]" />
              <span className="text-[8px] text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export const CheerHeroSection = () => {
  const [activeView, setActiveView] = useState<ViewType>('patient');

  const views = [
    { id: 'patient' as ViewType, label: 'Patient View' },
    { id: 'dashboard' as ViewType, label: 'Clinician Dashboard' },
    { id: 'clinician' as ViewType, label: 'Clinician View' },
  ];

  const renderAnimation = () => {
    switch (activeView) {
      case 'patient':
        return <PatientViewAnimation />;
      case 'dashboard':
        return <ClinicianDashboardAnimation />;
      case 'clinician':
        return <ClinicianViewAnimation />;
      default:
        return <PatientViewAnimation />;
    }
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen pt-16 sm:pt-20 md:pt-28 pb-8 sm:pb-12 md:pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 mb-4">
              <Video className="w-4 h-4 text-[#387E89]" />
              <span className="text-sm font-medium text-[#143151]">CHEER Telemedicine</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6" style={{ color: cheerColors.primary }}>
              CHEER
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-3 text-[#387E89]">
              Telemedicine platform for modern clinicians
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Deliver secure, seamless, and scalable virtual care across every setting.
            </p>
            
            <Button 
              size="lg"
              className="rounded-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl w-full sm:w-auto font-semibold"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-2 mt-6 md:mt-6 lg:mt-0"
          >
            {/* Laptop Frame */}
            <div className="relative mx-auto max-w-lg">
              <div className="relative bg-gray-200 rounded-t-xl pt-4 pb-0 px-2">
                {/* Laptop camera dot */}
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-gray-400"></div>
                
                {/* Screen content */}
                <div className="bg-[#1a2e3d] rounded-lg overflow-hidden aspect-video">
                  <AnimatePresence mode="wait">
                    {renderAnimation()}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Laptop base */}
              <div className="relative">
                <div className="h-4 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-xl"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gray-400 rounded-full"></div>
              </div>
              <div className="h-2 bg-gradient-to-b from-gray-300 to-gray-400 mx-4 rounded-b-xl"></div>
              
              {/* View toggle buttons */}
              <div className="mt-6 flex justify-center">
                <div className="inline-flex bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  {views.map((view) => (
                    <button
                      key={view.id}
                      onClick={() => setActiveView(view.id)}
                      className={`px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        activeView === view.id
                          ? 'bg-[#387E89] text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {view.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
