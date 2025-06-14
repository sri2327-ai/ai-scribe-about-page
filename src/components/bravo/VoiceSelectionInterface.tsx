
import React, { useState, memo, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bravoColors } from '@/theme/bravo-theme';
import { ChevronLeft, ChevronRight, Volume2, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { BeamsBackground } from "@/components/ui/beams-background";
import { LazyLoad } from "@/components/ui/lazy-load";

interface VoiceOption {
  id: string;
  name: string;
  description: string;
  animationType: 'pulse' | 'wave' | 'morph' | 'rings' | 'particles';
}

// Separate the animation rendering into its own memoized component
const VoiceAnimation = memo(({ type, isActive }: { type: string, isActive: boolean }) => {
  const baseAnimationClass = "w-full h-full rounded-full flex items-center justify-center";
  
  switch (type) {
    case 'pulse':
      return (
        <div className={`${baseAnimationClass} bg-gradient-to-r from-pink-100 to-blue-100`}>
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-blue-300"
            animate={{ 
              scale: isActive ? [1, 1.2, 1] : [1, 1.1, 1],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5,
              ease: "easeInOut"
            }}
            style={{ willChange: 'transform, opacity' }}
          />
        </div>
      );
      
    case 'wave':
      return (
        <div className={`${baseAnimationClass} bg-gradient-to-r from-blue-50 to-teal-50`}>
          <svg width="100%" height="40" viewBox="0 0 100 30">
            <motion.path
              d="M0,15 Q15,5 30,15 T60,15 T90,15"
              stroke="#5192AE"
              strokeWidth="2"
              fill="transparent"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 1,
                x: [-10, 10, -10]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "linear" 
              }}
            />
          </svg>
        </div>
      );
      
    case 'morph':
      return (
        <div className={`${baseAnimationClass} bg-gradient-to-r from-indigo-50 to-blue-50`}>
          <motion.div
            className="w-14 h-14 bg-gradient-to-r from-teal-300 to-indigo-300 opacity-80"
            animate={{ 
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8,
              ease: "easeInOut"
            }}
            style={{ willChange: 'transform, border-radius' }}
          />
        </div>
      );
      
    case 'rings':
      return (
        <div className={`${baseAnimationClass} bg-gradient-to-r from-blue-50 to-purple-50`}>
          <div className="relative w-14 h-14 flex items-center justify-center">
            <div className="absolute rounded-full border-2 border-indigo-300 w-[20px] h-[20px]" style={{ willChange: 'transform, opacity' }} />
            <div className="absolute rounded-full border-2 border-indigo-300 w-[40px] h-[40px]" style={{ willChange: 'transform, opacity' }} />
            <div className="absolute rounded-full border-2 border-indigo-300 w-[60px] h-[60px]" style={{ willChange: 'transform, opacity' }} />
            <motion.div
              className="w-5 h-5 rounded-full bg-purple-300"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform' }}
            />
          </div>
        </div>
      );
      
    case 'particles':
      return (
        <div className={`${baseAnimationClass} bg-gradient-to-r from-teal-50 to-yellow-50`}>
          <div className="relative w-14 h-14">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-teal-400"
                initial={{ 
                  x: 0, 
                  y: 0,
                  opacity: 0 
                }}
                animate={{ 
                  x: [0, Math.sin(i * 60) * 12],
                  y: [0, Math.cos(i * 60) * 12],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                style={{ willChange: 'transform, opacity' }}
              />
            ))}
          </div>
        </div>
      );
      
    default:
      return <div className={`${baseAnimationClass} bg-gray-100`} />;
  }
});

VoiceAnimation.displayName = 'VoiceAnimation';

// Voice option card as separate component
const VoiceCard = memo(({ voice, isSelected, onTryVoice, isClient }: { 
  voice: VoiceOption, 
  isSelected: boolean,
  onTryVoice: (id: string) => void,
  isClient: boolean
}) => {
  return (
    <div className="w-64 relative rounded-xl overflow-hidden backdrop-blur-xl p-6 flex flex-col items-center"
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    >
      <div className="w-20 h-20 mb-4 rounded-full flex items-center justify-center">
        {isClient ? (
          <VoiceAnimation type={voice.animationType} isActive={isSelected} />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-blue-300 opacity-70" />
        )}
      </div>
      
      <h3 className="text-xl font-bold mb-1 font-sans text-white">
        {voice.name}
      </h3>
      
      <p className="text-sm mb-4 text-center font-sans text-white/80">
        {voice.description}
      </p>
      
      <Button
        size="sm"
        variant="outline"
        className="mt-auto group hover:bg-white/20 transition-colors"
        style={{ 
          borderColor: 'rgba(255, 255, 255, 0.3)',
          color: 'white'
        }}
        onClick={() => onTryVoice(voice.id)}
      >
        <Volume2 className="w-4 h-4 mr-2 text-white group-hover:text-white transition-colors" />
        Try Voice
      </Button>
    </div>
  );
});

VoiceCard.displayName = 'VoiceCard';

// Main component exported with memo for performance
export const VoiceSelectionInterface = memo(() => {
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const voices: VoiceOption[] = useMemo(() => [
    { id: 'nora', name: 'Nora', description: 'Warm & Attentive', animationType: 'pulse' },
    { id: 'kai', name: 'Kai', description: 'Efficient & Friendly', animationType: 'wave' },
    { id: 'ravi', name: 'Ravi', description: 'Calm & Professional', animationType: 'morph' },
    { id: 'lina', name: 'Lina', description: 'Reassuring & Clear', animationType: 'rings' },
    { id: 'juno', name: 'Juno', description: 'Energetic & Helpful', animationType: 'particles' }
  ], []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : voices.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < voices.length - 1 ? prev + 1 : 0));
  };

  const handleTryVoice = (voiceId: string) => {
    console.log(`Playing sample for ${voiceId}`);
    setSelectedVoice(voiceId);
  };

  return (
    <BeamsBackground className="py-16 px-4 md:px-6 relative overflow-hidden" intensity="medium">
      <div className="container mx-auto relative max-w-4xl">
        <LazyLoad threshold={0.3}>
          {isClient ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white font-sans">
                Choose Your BRAVO Assistant Voice
              </h2>
              <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto font-sans text-white/80">
                Select a voice personality that best fits your organization
              </p>
            </motion.div>
          ) : (
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white font-sans">
                Choose Your BRAVO Assistant Voice
              </h2>
              <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto font-sans text-white/80">
                Select a voice personality that best fits your organization
              </p>
            </div>
          )}
        </LazyLoad>

        <div className="relative px-12">
          {isClient ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center"
                style={{ willChange: 'transform, opacity' }}
              >
                <VoiceCard 
                  voice={voices[currentIndex]} 
                  isSelected={selectedVoice === voices[currentIndex].id}
                  onTryVoice={handleTryVoice}
                  isClient={isClient}
                />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="flex justify-center">
              <VoiceCard 
                voice={voices[currentIndex]} 
                isSelected={selectedVoice === voices[currentIndex].id}
                onTryVoice={handleTryVoice}
                isClient={isClient}
              />
            </div>
          )}

          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full hover:bg-white/20 bg-white/10"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </Button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="rounded-full hover:bg-white/20 bg-white/10"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>

        <LazyLoad threshold={0.2}>
          {isClient ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center justify-center mt-12 p-4 rounded-lg max-w-md mx-auto"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
                willChange: 'transform, opacity'
              }}
            >
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-3 text-white" />
                <p className="text-sm text-white">
                  You can change your assistant's voice at any time in the BRAVO settings
                </p>
              </div>
            </motion.div>
          ) : (
            <div
              className="flex items-center justify-center mt-12 p-4 rounded-lg max-w-md mx-auto"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-3 text-white" />
                <p className="text-sm text-white">
                  You can change your assistant's voice at any time in the BRAVO settings
                </p>
              </div>
            </div>
          )}
        </LazyLoad>
      </div>
    </BeamsBackground>
  );
});

VoiceSelectionInterface.displayName = 'VoiceSelectionInterface';

export default VoiceSelectionInterface;
