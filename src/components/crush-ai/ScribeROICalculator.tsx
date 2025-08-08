import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface ScribeROICalculatorProps {
  onCalculate?: (data: { monthly: number; yearly: number; multiplier: number }) => void;
}

const ScribeROICalculator: React.FC<ScribeROICalculatorProps> = ({ onCalculate }) => {
  const [providers, setProviders] = useState(3);
  const [costPerProvider, setCostPerProvider] = useState(99);
  const [patientsPerDay, setPatientsPerDay] = useState(20);

  const humanScribeCost = providers * 2000; // typical human scribe monthly cost per provider
  const crushAICost = providers * costPerProvider; // configurable AI cost per provider
  const monthlySavings = Math.max(humanScribeCost - crushAICost, 0);

  useEffect(() => {
    if (onCalculate) {
      const multiplier = crushAICost > 0 ? humanScribeCost / crushAICost : 0;
      onCalculate({
        monthly: monthlySavings,
        yearly: monthlySavings * 12,
        multiplier,
      });
    }
  }, [monthlySavings, humanScribeCost, crushAICost, onCalculate]);

  return (
    <Card className="p-6 shadow-md">
      <h3 className="text-2xl font-bold mb-6">ROI Calculator – AI Medical Scribing</h3>

      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Number of Providers</span>
            <span className="font-bold">{providers}</span>
          </div>
          <Slider
            defaultValue={[providers]}
            onValueChange={(values) => setProviders(values[0])}
            min={1}
            max={100}
            step={1}
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Monthly Cost per Provider ($)</span>
            <span className="font-bold">${costPerProvider}</span>
          </div>
          <Slider
            defaultValue={[costPerProvider]}
            onValueChange={(values) => setCostPerProvider(values[0])}
            min={50}
            max={1000}
            step={1}
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Patients per Day per Provider</span>
            <span className="font-bold">{patientsPerDay}</span>
          </div>
          <Slider
            defaultValue={[patientsPerDay]}
            onValueChange={(values) => setPatientsPerDay(values[0])}
            min={5}
            max={50}
            step={1}
          />
        </div>

        <div className="border-t pt-6">
          <h4 className="text-xl font-bold mb-4">Your ROI Potential</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Human Scribe Monthly Cost</span>
              <span className="font-bold">${humanScribeCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Crush AI Monthly Cost</span>
              <span className="font-bold">${crushAICost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="font-bold">Estimated Monthly Savings</span>
              <span className="font-bold text-green-600">${monthlySavings.toLocaleString()}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Based on {providers} provider{providers > 1 ? "s" : ""} seeing {patientsPerDay} patients/day, replacing human scribes with AI.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ScribeROICalculator;
