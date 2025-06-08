
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Database } from "lucide-react";

export const IntegrationChecker = () => {
  const [software, setSoftware] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (software.trim()) {
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 3000);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleCheck} className="flex gap-4">
        <Input
          type="text"
          placeholder="Enter your software name..."
          value={software}
          onChange={(e) => setSoftware(e.target.value)}
          className="flex-1 bg-white text-[#143151] placeholder-[#143151]/70"
        />
        <Button 
          type="submit" 
          className="bg-white hover:bg-gray-100 text-[#143151] shadow-xl"
        >
          Check
        </Button>
      </form>

      <div className="mt-6">
        <AnimatePresence mode="wait">
          {showAnimation && (
            <motion.div
              key="animation-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <Database className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="h-0.5 bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
                
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </motion.div>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.3 }}
                className="text-lg font-medium text-white"
              >
                S10.AI is compatible with {software}!
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
