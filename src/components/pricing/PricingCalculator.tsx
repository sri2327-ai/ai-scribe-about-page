
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calculator, Clock, DollarSign, Timer, Users } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const { toast } = useToast();
  
  useEffect(() => {
    console.log("PricingCalculator mounted");
  }, []);
  
  // Calculator state
  const [providers, setProviders] = useState<string>('1');
  const [patients, setPatients] = useState<string>('20');
  const [product, setProduct] = useState<'crush' | 'bravo' | 'bundle'>('crush');
  const [savingsResult, setSavingsResult] = useState<string>('');
  const [timeSaved, setTimeSaved] = useState<string>('');
  const [showError, setShowError] = useState(false);
  const [calculationDone, setCalculationDone] = useState(false);

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
    let weeklyHours = 0;
    
    if (product === 'crush') {
      costSavings = providersNum * patientsNum * 95;
      hoursSaved = providersNum * 2;
      weeklyHours = hoursSaved * 5;
    } else if (product === 'bravo') {
      costSavings = providersNum * patientsNum * 50;
      hoursSaved = providersNum * 1;
      weeklyHours = hoursSaved * 5;
    } else {
      costSavings = providersNum * patientsNum * 145;
      hoursSaved = providersNum * 3;
      weeklyHours = hoursSaved * 5;
    }
    
    setSavingsResult(`$${costSavings.toLocaleString()}/month`);
    setTimeSaved(`${hoursSaved} hours daily | ${weeklyHours} hours weekly`);
    setCalculationDone(true);
    
    toast({
      title: "Calculation complete",
      description: `You could save $${costSavings.toLocaleString()}/month and ${weeklyHours} hours weekly!`,
    });
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <motion.h2 
              variants={fadeInUpVariants} 
              custom={0}
              className="text-3xl md:text-4xl font-bold mb-4 text-[#143151]"
            >
              Calculate Your Time & Cost Savings
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-lg mb-8 max-w-3xl mx-auto text-[#387E89]"
            >
              See how CRUSH & BRAVO can save you thousands monthly—at just 1/30th the cost of a human scribe! 
              Enter your details to get a personalized estimate of time and money saved, freeing you for patient care.
            </motion.p>
          </motion.div>

          <Card className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap gap-6 justify-center md:justify-between">
                    <div className="w-full md:w-auto">
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <span className="mr-2">Number of Providers</span>
                        <span className="text-xs text-gray-500">(clinicians in your practice)</span>
                      </label>
                      <input 
                        type="number" 
                        value={providers} 
                        onChange={(e) => setProviders(e.target.value)} 
                        placeholder="Number of Providers" 
                        min="1" 
                        className="w-full md:w-64 border border-gray-300 p-4 rounded-lg text-lg focus:ring-2 focus:ring-[#387E89] focus:border-[#387E89]"
                      />
                    </div>
                    <div className="w-full md:w-auto">
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <span className="mr-2">Patients per Day</span>
                        <span className="text-xs text-gray-500">(per provider)</span>
                      </label>
                      <input 
                        type="number" 
                        value={patients}
                        onChange={(e) => setPatients(e.target.value)}
                        placeholder="Patients per Day" 
                        min="1" 
                        className="w-full md:w-64 border border-gray-300 p-4 rounded-lg text-lg focus:ring-2 focus:ring-[#387E89] focus:border-[#387E89]"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Product</label>
                    <div className="overflow-x-auto pb-1"> {/* Added overflow-x-auto to fix tab responsiveness */}
                      <Tabs 
                        defaultValue="crush" 
                        value={product}
                        onValueChange={(value) => setProduct(value as 'crush' | 'bravo' | 'bundle')}
                        className="w-full min-w-[300px]" {/* Added min-width to prevent tabs from collapsing */}
                      >
                        <TabsList className="grid grid-cols-3 w-full">
                          <TabsTrigger value="crush" className="text-base whitespace-nowrap px-2 py-2">
                            CRUSH (AI Scribe)
                          </TabsTrigger>
                          <TabsTrigger value="bravo" className="text-base whitespace-nowrap px-2 py-2">
                            BRAVO (Patient Engagement)
                          </TabsTrigger>
                          <TabsTrigger value="bundle" className="text-base whitespace-nowrap px-2 py-2">
                            Bundle (Best Value)
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>

                  <div className="flex flex-col items-center mt-4">
                    <Button 
                      onClick={calculateSavings}
                      size="lg"
                      className="rounded-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 w-full md:w-auto"
                    >
                      Calculate Your Savings Now
                      <Calculator className="ml-2" />
                    </Button>
                    {showError && (
                      <p className="text-red-600 text-sm mt-2">Please enter valid numbers for providers and patients.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 bg-gray-50 rounded-xl p-4">
                <h3 className="font-bold text-lg text-[#143151] mb-3">Example Savings:</h3>
                <p className="text-gray-700 mb-4">
                  A solo practice with 1 provider seeing 20 patients/day could save 
                  <span className="font-bold text-[#387E89]"> $2,900+/month </span> 
                  vs. a human scribe and gain 
                  <span className="font-bold text-[#387E89]"> 10+ hours/week </span>
                  for more patients or personal time.
                </p>
                
                <h3 className="font-bold text-lg text-[#143151] mt-6 mb-3">Why It's a Game-Changer:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-[#387E89] mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Save 2+ hours daily on charting and admin tasks.</span>
                  </li>
                  <li className="flex items-start">
                    <Timer className="h-5 w-5 text-[#387E89] mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Cut no-shows by 30% with BRAVO's smart engagement.</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-[#387E89] mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Reduce staffing needs with AI-powered automation.</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 text-[#387E89] mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Get enterprise-grade efficiency at a fraction of human staff and scribe costs.</span>
                  </li>
                </ul>
              </div>
            </div>
                    
            {calculationDone && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 text-center w-full"
              >
                <div className="bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 rounded-xl p-6 mt-8">
                  <h3 className="font-bold text-xl text-[#143151] mb-4">Your Potential Savings</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="text-gray-600 text-sm mb-1">Cost Savings</h4>
                      <div className="text-3xl font-bold text-[#143151]">{savingsResult}</div>
                      <p className="text-xs text-gray-500 mt-1">vs. human medical scribe & staff</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="text-gray-600 text-sm mb-1">Time Saved</h4>
                      <div className="text-3xl font-bold text-[#387E89]">{timeSaved}</div>
                      <p className="text-xs text-gray-500 mt-1">for patient care or personal time</p>
                    </div>
                  </div>
                  
                  <p className="mt-6 mb-2 text-[#387E89] font-medium">
                    That's significant time and cost savings for your practice!
                  </p>
                </div>
              </motion.div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
