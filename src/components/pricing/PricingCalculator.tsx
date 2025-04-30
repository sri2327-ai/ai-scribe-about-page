
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 }
  })
};

export const PricingCalculator = () => {
  console.log("Rendering PricingCalculator component");
  
  useEffect(() => {
    console.log("PricingCalculator mounted");
  }, []);
  
  // Calculator state
  const [providers, setProviders] = useState<string>('');
  const [patients, setPatients] = useState<string>('');
  const [product, setProduct] = useState<'crush' | 'bravo' | 'bundle'>('crush');
  const [savingsResult, setSavingsResult] = useState<string>('');
  const [showError, setShowError] = useState(false);

  const calculateSavings = () => {
    const providersNum = parseInt(providers);
    const patientsNum = parseInt(patients);
    
    if (isNaN(providersNum) || isNaN(patientsNum) || providersNum < 1 || patientsNum < 1) {
      setShowError(true);
      setSavingsResult('');
      toast({
        title: "Invalid input",
        description: "Please enter valid numbers for providers and patients.",
        variant: "destructive"
      });
      return;
    }
    
    setShowError(false);
    let costSavings = 0;
    let hoursSaved = 0;
    
    if (product === 'crush') {
      costSavings = providersNum * patientsNum * 95;
      hoursSaved = providersNum * 2;
    } else if (product === 'bravo') {
      costSavings = providersNum * patientsNum * 50;
      hoursSaved = providersNum * 1;
    } else {
      costSavings = providersNum * patientsNum * 145;
      hoursSaved = providersNum * 3;
    }
    
    setSavingsResult(`Save $${costSavings.toLocaleString()}/month and ${hoursSaved} hours daily!`);
    toast({
      title: "Calculation Complete",
      description: `Save $${costSavings.toLocaleString()}/month and ${hoursSaved} hours daily!`,
      variant: "default"
    });
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-10"
          >
            <motion.h2 
              variants={fadeInUpVariants} 
              custom={0}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-[#143151]"
            >
              Calculate Your Time & Cost Savings
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto text-[#387E89]"
            >
              Discover how CRUSH and BRAVO's time-saving automation can save thousands monthly and free up hours for patient care.
            </motion.p>
          </motion.div>

          <Card className="bg-white rounded-2xl shadow-xl p-5 md:p-8 border border-gray-100">
            <div className="flex flex-col gap-5 md:gap-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-between">
                <div className="w-full sm:w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Providers</label>
                  <input 
                    type="number" 
                    value={providers} 
                    onChange={(e) => setProviders(e.target.value)} 
                    placeholder="Number of Providers" 
                    min="1" 
                    className="w-full border border-gray-300 p-3 md:p-4 text-base md:text-lg rounded-lg focus:ring-2 focus:ring-[#387E89] focus:border-[#387E89] transition-all"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Patients per Day</label>
                  <input 
                    type="number" 
                    value={patients}
                    onChange={(e) => setPatients(e.target.value)}
                    placeholder="Patients per Day" 
                    min="1" 
                    className="w-full border border-gray-300 p-3 md:p-4 text-base md:text-lg rounded-lg focus:ring-2 focus:ring-[#387E89] focus:border-[#387E89] transition-all"
                  />
                </div>
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Product</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div 
                    onClick={() => setProduct('crush')}
                    className={`border p-3 md:p-4 rounded-lg cursor-pointer text-center transition-all ${product === 'crush' 
                      ? 'bg-[#143151] text-white border-[#143151]' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#143151]'}`}
                  >
                    CRUSH (AI Scribe)
                  </div>
                  <div 
                    onClick={() => setProduct('bravo')}
                    className={`border p-3 md:p-4 rounded-lg cursor-pointer text-center transition-all ${product === 'bravo' 
                      ? 'bg-[#143151] text-white border-[#143151]' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#143151]'}`}
                  >
                    BRAVO (Patient Engagement)
                  </div>
                  <div 
                    onClick={() => setProduct('bundle')}
                    className={`border p-3 md:p-4 rounded-lg cursor-pointer text-center transition-all ${product === 'bundle' 
                      ? 'bg-[#143151] text-white border-[#143151]' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#143151]'}`}
                  >
                    Bundle (Best Value)
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center mt-2 md:mt-4">
                <Button 
                  onClick={calculateSavings}
                  size="lg"
                  className="rounded-full px-6 py-5 md:px-8 md:py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 w-full sm:w-auto"
                >
                  Calculate Savings Now
                  <Calculator className="ml-2" />
                </Button>
                {showError && (
                  <p className="text-red-600 text-sm mt-2">Please enter valid numbers for providers and patients.</p>
                )}
                {savingsResult && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 md:mt-8 text-center"
                  >
                    <Badge 
                      className="text-base md:text-lg font-semibold px-4 py-2 md:px-6 md:py-3 rounded-full bg-blue-50 text-[#143151] border border-[#143151]/20"
                    >
                      {savingsResult}
                    </Badge>
                    
                    <p className="mt-3 md:mt-4 text-[#387E89]">
                      That's significant time and cost savings for your practice!
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
