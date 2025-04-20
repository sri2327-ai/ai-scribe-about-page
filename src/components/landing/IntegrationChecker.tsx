
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Database } from "lucide-react";

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
          className="flex-1"
        />
        <Button type="submit" className="bg-[#143151] hover:bg-[#0d1f31]">
          Check
        </Button>
      </form>

      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-center"
          >
            <motion.div
              className="flex items-center justify-center gap-4"
              animate={{
                scale: [1, 1.2, 1],
                transition: { duration: 0.5 }
              }}
            >
              <Database className="w-8 h-8 text-[#387E89]" />
              <motion.div
                className="h-0.5 w-16 bg-[#387E89]"
                animate={{
                  width: ["0%", "100%"],
                  transition: { duration: 0.5, delay: 0.3 }
                }}
              />
              <motion.div
                animate={{
                  rotate: [0, 360],
                  transition: { duration: 0.5, delay: 0.8 }
                }}
              >
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </motion.div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="mt-4 text-lg font-medium text-[#143151]"
            >
              S10.AI is compatible with {software}!
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
