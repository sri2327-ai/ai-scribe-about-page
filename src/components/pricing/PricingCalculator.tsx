
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calculator, Clock, DollarSign, Timer, Check } from "lucide-react";
import { crushAIColors } from "@/theme/crush-ai-theme";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

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
  const [isCalculating, setIsCalculating] = useState(false);

  // Get comparison text based on selected product
  const getComparisonText = () => {
    switch (product) {
      case 'bravo':
        return "vs. human front office staff";
      case 'bundle':
        return "vs. human staff & scribes";
      case 'crush':
      default:
        return "vs. human medical scribe";
    }
  };

  const calculateSavings = () => {
    // Visual feedback - button state changes
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
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
        setIsCalculating(false);
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
      setIsCalculating(false);
      
      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById('calculation-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      
      // Show toast notification
      toast({
        title: "Calculation complete",
        description: `You could save $${costSavings.toLocaleString()}/month and ${weeklyHours} hours weekly!`,
      });
    }, 800); // Short delay for feedback effect
  };

  // Product option data
  const productOptions = [
    {
      id: 'crush',
      name: 'CRUSH (AI Scribe)',
      description: 'Automate clinical documentation with AI',
      price: 'From $99/month',
      savings: '96% time reduction vs. human scribes'
    },
    {
      id: 'bravo',
      name: 'BRAVO (Staffing Agent)',
      description: 'Smart scheduling and patient communication',
      price: 'From $99/month',
      savings: 'Reduce no-shows by up to 30%'
    },
    {
      id: 'bundle',
      name: 'Bundle (Best Value)',
      description: 'CRUSH + BRAVO with 10% discount',
      price: 'From $178/month',
      savings: 'Most comprehensive solution'
    }
  ];

  return (
    <section className="py-14 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <motion.h2 
              variants={fadeInUpVariants} 
              custom={0}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-[#143151]"
            >
              Calculate Your Time & Cost Savings
            </motion.h2>
            <motion.p 
              variants={fadeInUpVariants}
              custom={1}
              className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-[#387E89]"
            >
              Discover how CRUSH & BRAVO can save you thousands of dollars each month—at just 1/11th the cost of a human scribe or staff member!
            </motion.p>
          </motion.div>

          <Card className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
              <div className="lg:col-span-3">
                <div className="flex flex-col gap-6 md:gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="w-full">
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
                        className="w-full border border-gray-300 p-4 rounded-lg text-lg focus:ring-2 focus:ring-[#387E89] focus:border-[#387E89]"
                      />
                    </div>
                    <div className="w-full">
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
                        className="w-full border border-gray-300 p-4 rounded-lg text-lg focus:ring-2 focus:ring-[#387E89] focus:border-[#387E89]"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <Label className="block text-sm font-medium text-gray-700 mb-3">Select Product</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {productOptions.map((option) => (
                        <div 
                          key={option.id}
                          onClick={() => setProduct(option.id as 'crush' | 'bravo' | 'bundle')}
                          className={`
                            cursor-pointer rounded-lg border p-4 flex flex-col
                            ${product === option.id ? 
                              'border-[#387E89] bg-[#387E89]/5 shadow' : 
                              'border-gray-200 hover:border-[#387E89]/50'
                            }
                          `}
                        >
                          <div className="flex items-center mb-2">
                            <div className={`
                              w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3
                              ${product === option.id ? 'border-[#387E89]' : 'border-gray-300'}
                            `}>
                              {product === option.id && <div className="w-3 h-3 rounded-full bg-[#387E89]"></div>}
                            </div>
                            <h4 className="font-medium text-[#143151]">{option.name}</h4>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                          <div className="mt-auto">
                            <div className="font-bold text-[#143151] text-sm">{option.price}</div>
                            <div className="text-xs text-[#387E89]">{option.savings}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center mt-2 md:mt-4">
                    <Button 
                      onClick={calculateSavings}
                      disabled={isCalculating}
                      size="lg"
                      className={`relative rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-lg transition-all duration-300 w-full md:w-auto ${isCalculating ? 'opacity-90' : ''}`}
                    >
                      {isCalculating ? (
                        <>
                          <span className="animate-pulse">Calculating...</span>
                          <span className="ml-2 animate-spin inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                        </>
                      ) : !calculationDone ? (
                        <>
                          Calculate Your Savings Now
                          <Calculator className="ml-2" />
                        </>
                      ) : (
                        <>
                          Update Calculation
                          <Check className="ml-2" />
                        </>
                      )}
                    </Button>
                    {calculationDone && !isCalculating && (
                      <div className="text-sm text-green-600 mt-2 flex items-center">
                        <Check className="h-4 w-4 mr-1" /> Results calculated! Scroll down to see your savings
                      </div>
                    )}
                    {showError && (
                      <p className="text-red-600 text-sm mt-2">Please enter valid numbers for providers and patients.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 bg-gray-50 rounded-xl p-5 md:p-6">
                <h3 className="font-bold text-lg md:text-xl text-[#143151] mb-3 md:mb-4">Example Savings:</h3>
                <p className="text-gray-700 mb-4">
                  A solo provider seeing 20 patients per day could save over $2,900 per month compared to hiring a human scribe or staff—and reclaim 10+ hours per week for seeing more patients or enjoying personal time.
                </p>
                
                <h3 className="font-bold text-lg md:text-xl text-[#143151] mt-6 mb-3">Why It's a Game-Changer:</h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-[#387E89] mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Save 2+ hours daily on charting and admin tasks.</span>
                  </li>
                  <li className="flex items-start">
                    <Timer className="h-5 w-5 md:h-6 md:w-6 text-[#387E89] mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Cut no-shows by 30% with BRAVO's smart engagement.</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-[#387E89] mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Reduce staffing needs with AI-powered automation.</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-[#387E89] mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">Get enterprise-grade efficiency at a fraction of human staff and scribe costs.</span>
                  </li>
                </ul>
              </div>
            </div>
                    
            {calculationDone && (
              <motion.div 
                id="calculation-results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 md:mt-12 text-center w-full"
              >
                <div className="bg-gradient-to-r from-[#143151]/10 to-[#387E89]/10 rounded-xl p-6 md:p-8">
                  <h3 className="font-bold text-xl md:text-2xl text-[#143151] mb-4 md:mb-6">Your Potential Savings</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
                    <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
                      <h4 className="text-gray-600 text-sm md:text-base mb-1 md:mb-2">Cost Savings</h4>
                      <div className="text-3xl md:text-4xl font-bold text-[#143151]">{savingsResult}</div>
                      <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">{getComparisonText()}</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
                      <h4 className="text-gray-600 text-sm md:text-base mb-1 md:mb-2">Time Saved</h4>
                      <div className="text-3xl md:text-4xl font-bold text-[#387E89]">{timeSaved}</div>
                      <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">for patient care or personal time</p>
                    </div>
                  </div>
                  
                  <p className="mt-6 mb-2 text-[#387E89] font-medium text-lg md:text-xl">
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
