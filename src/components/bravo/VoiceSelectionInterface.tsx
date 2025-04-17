
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface VoiceOption {
  id: string;
  name: string;
  description: string;
}

export const VoiceSelectionInterface = () => {
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);

  const voices: VoiceOption[] = [
    { id: 'nora', name: 'Nora', description: 'Warm & Attentive' },
    { id: 'kai', name: 'Kai', description: 'Efficient & Friendly' },
    { id: 'ravi', name: 'Ravi', description: 'Calm & Professional' },
    { id: 'lina', name: 'Lina', description: 'Reassuring & Clear' },
    { id: 'juno', name: 'Juno', description: 'Energetic & Helpful' }
  ];

  const handleSelectVoice = (voiceId: string) => {
    setSelectedVoice(voiceId);
  };

  const handleTryVoice = (voiceId: string) => {
    console.log(`Playing sample for ${voiceId}`);
  };

  return (
    <div className="min-h-screen bg-black py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Choose Your BRAVO Assistant Voice
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Select a voice personality that best fits your organization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {voices.map((voice, index) => (
            <motion.div
              key={voice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`
                relative rounded-2xl overflow-hidden backdrop-blur-md
                p-6 flex flex-col items-center cursor-pointer
                transition-all duration-300 transform hover:scale-105
                ${selectedVoice === voice.id ? 'bg-white/15' : 'bg-white/10'}
                border border-white/20
              `}
              onClick={() => handleSelectVoice(voice.id)}
            >
              {/* Voice animation placeholder - dark circular background */}
              <div className="w-20 h-20 mb-4 rounded-full bg-black/60 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900`} />
              </div>
              
              <h3 className="text-xl font-bold mb-1 text-white">
                {voice.name}
              </h3>
              
              <p className="text-sm mb-4 text-gray-400 text-center">
                {voice.description}
              </p>
              
              <Button
                size="sm"
                variant="outline"
                className="mt-auto group border-white/20 hover:bg-white/20 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTryVoice(voice.id);
                }}
              >
                <Volume2 className="w-4 h-4 mr-2 group-hover:text-white" />
                Try Voice
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
