import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface ScribeROICalculatorProps {
  onCalculate?: (data: { monthly: number; yearly: number; multiplier: number }) => void;
}

const ScribeROICalculator: React.FC<ScribeROICalculatorProps> = ({ onCalculate }) => {
  const [providers, setProviders] = useState(5);
  const [providerSalary, setProviderSalary] = useState(180000);
  const [visitsPerWeek, setVisitsPerWeek] = useState(75);
  const [visitDuration, setVisitDuration] = useState(20);

  const calculateRoi = () => {
    // Time savings calculation based on reducing documentation time
    const hoursPerProviderPerWeek = 10; // Average time saved per provider per week
    const totalWeeklyHours = providers * hoursPerProviderPerWeek;
    const totalAnnualHours = totalWeeklyHours * 50; // 50 working weeks
    
    // Calculate monetary savings based on provider time
    const hourlyRate = providerSalary / (50 * 40); // 50 weeks, 40 hours per week
    const yearlySavings = totalAnnualHours * hourlyRate;
    
    // Additional patient capacity calculation
    const timePerVisit = visitDuration / 60; // Convert to hours
    const additionalVisitsPerYear = Math.round(totalAnnualHours / timePerVisit);
    
    // Equivalent full-time providers (based on 2000 hours per year)
    const equivalentProviders = totalAnnualHours / 2000;
    
    return {
      yearlySavings,
      hoursPerProviderPerWeek,
      totalAnnualHours,
      additionalVisitsPerYear,
      equivalentProviders
    };
  };

  const roi = calculateRoi();

  useEffect(() => {
    if (onCalculate) {
      onCalculate({
        monthly: roi.yearlySavings / 12,
        yearly: roi.yearlySavings,
        multiplier: roi.yearlySavings > 0 ? roi.yearlySavings / 100000 : 0
      });
    }
  }, [roi.yearlySavings, onCalculate]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Input Section */}
      <div className="lg:col-span-2">
        <Card className="p-6 shadow-md">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Adjust for your practice</h3>
            <p className="text-muted-foreground">Organizations using S10.AI get back on average 10 hours per provider per week</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Providers on your team</span>
                <span className="font-bold text-lg">{providers}</span>
              </div>
              <Slider
                value={[providers]}
                onValueChange={(values) => setProviders(values[0])}
                min={1}
                max={100}
                step={1}
                className="w-full"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Average provider salary ($)</span>
                <span className="font-bold text-lg">${providerSalary.toLocaleString()}</span>
              </div>
              <Slider
                value={[providerSalary]}
                onValueChange={(values) => setProviderSalary(values[0])}
                min={100000}
                max={500000}
                step={5000}
                className="w-full"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Average provider visits/week</span>
                <span className="font-bold text-lg">{visitsPerWeek}</span>
              </div>
              <Slider
                value={[visitsPerWeek]}
                onValueChange={(values) => setVisitsPerWeek(values[0])}
                min={20}
                max={150}
                step={5}
                className="w-full"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Average visit duration (minutes)</span>
                <span className="font-bold text-lg">{visitDuration}</span>
              </div>
              <Slider
                value={[visitDuration]}
                onValueChange={(values) => setVisitDuration(values[0])}
                min={10}
                max={60}
                step={5}
                className="w-full"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Results Section */}
      <div className="lg:col-span-1">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-green-50 shadow-md sticky top-4">
          <h4 className="text-xl font-bold mb-6 text-center">Your Savings</h4>
          <div className="grid grid-cols-1 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">${roi.yearlySavings.toLocaleString()}</div>
              <div className="text-sm font-medium text-muted-foreground">Saved each year</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">{roi.hoursPerProviderPerWeek}</div>
              <div className="text-sm font-medium text-muted-foreground">Hours saved per provider/week</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">{roi.additionalVisitsPerYear.toLocaleString()}</div>
              <div className="text-sm font-medium text-muted-foreground">Additional patient visits/year</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600">{roi.equivalentProviders.toFixed(1)}</div>
              <div className="text-sm font-medium text-muted-foreground">Equivalent full-time providers</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ScribeROICalculator;
