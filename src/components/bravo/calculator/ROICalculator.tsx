
import React, { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Users, DollarSign, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { bravoColors } from '@/theme/bravo-theme';

interface ROICalculatorProps {
  onCalculate: (savings: { monthly: number; yearly: number; multiplier: number }) => void;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ onCalculate }) => {
  const [staffCount, setStaffCount] = useState<number[]>([3]);
  const [salary, setSalary] = useState<number[]>([4000]);
  const [hours, setHours] = useState<number[]>([40]);
  const [includeOverhead, setIncludeOverhead] = useState(false);
  const [results, setResults] = useState({
    totalCost: 0,
    bravoCost: 0,
    savings: 0,
    multiplier: 0
  });

  useEffect(() => {
    const monthlyStaffCost = staffCount[0] * salary[0];
    const overheadMultiplier = includeOverhead ? 1.2 : 1;
    const totalCost = monthlyStaffCost * overheadMultiplier;
    
    const bravoCost = 1500 + (staffCount[0] * 200);
    
    const monthlySavings = totalCost - bravoCost;
    const multiplier = totalCost / bravoCost;

    setResults({
      totalCost,
      bravoCost,
      savings: monthlySavings,
      multiplier
    });

    onCalculate({
      monthly: monthlySavings,
      yearly: monthlySavings * 12,
      multiplier
    });
  }, [staffCount, salary, hours, includeOverhead, onCalculate]);

  const formatCurrency = (value: number): string => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  return (
    <Card className="backdrop-blur-xl bg-white/80 border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Users className="w-4 h-4" />
              Front Office Staff Count: {staffCount[0]}
            </label>
            <Slider
              value={staffCount}
              onValueChange={(newValue) => {
                if (Array.isArray(newValue) && newValue.length > 0) {
                  const roundedValue = [Math.round(newValue[0])];
                  setStaffCount(roundedValue);
                }
              }}
              min={1}
              max={10}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <DollarSign className="w-4 h-4" />
              Average Monthly Salary: {formatCurrency(salary[0])}
            </label>
            <Slider
              value={salary}
              onValueChange={(newValue) => {
                if (Array.isArray(newValue) && newValue.length > 0) {
                  // Round to nearest 100
                  const roundedValue = [Math.round(newValue[0] / 100) * 100];
                  setSalary(roundedValue);
                }
              }}
              min={3000}
              max={5000}
              step={100}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Clock className="w-4 h-4" />
              Working Hours per Week: {hours[0]}
            </label>
            <Slider
              value={hours}
              onValueChange={(newValue) => {
                if (Array.isArray(newValue) && newValue.length > 0) {
                  const roundedValue = [Math.round(newValue[0])];
                  setHours(roundedValue);
                }
              }}
              min={20}
              max={60}
              step={1}
              className="w-full"
            />
          </div>

          <div className="flex items-center justify-between py-2">
            <label className="text-sm font-medium text-gray-700">Include Benefits & Overhead (20%)</label>
            <Switch
              checked={includeOverhead}
              onCheckedChange={setIncludeOverhead}
            />
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500">Monthly Staff Cost</label>
              <motion.p 
                key={results.totalCost.toString()}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-2xl font-bold text-blue-800"
              >
                {formatCurrency(results.totalCost)}
              </motion.p>
            </div>
            <div>
              <label className="text-sm text-gray-500">BRAVO Cost</label>
              <motion.p 
                key={results.bravoCost.toString()}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-2xl font-bold text-teal-600"
              >
                {formatCurrency(results.bravoCost)}
              </motion.p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-500">Monthly Savings</label>
            <motion.div 
              key={results.savings.toString()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-3xl font-bold text-green-600"
            >
              {formatCurrency(results.savings)}
            </motion.div>
            <motion.div 
              className="text-lg font-semibold text-teal-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {results.multiplier.toFixed(1)}x ROI
            </motion.div>
          </div>
        </div>

        <Button 
          className="w-full py-6 text-lg bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white shadow-xl"
        >
          Calculate My ROI
        </Button>
      </CardContent>
    </Card>
  );
};
