
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

interface CalculatorField {
  id: string;
  label: string;
  type: 'slider' | 'number';
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  description: string;
}

interface CalculatorResult {
  score: number;
  interpretation: string;
  color: string;
  recommendation: string;
}

interface ClinicalCalculatorProps {
  title: string;
  description: string;
  fields: CalculatorField[];
  calculateResult: (values: Record<string, number>) => CalculatorResult;
  reference?: string;
}

export const ClinicalCalculator: React.FC<ClinicalCalculatorProps> = ({
  title,
  description,
  fields,
  calculateResult,
  reference
}) => {
  const initialValues = fields.reduce((acc, field) => {
    acc[field.id] = field.defaultValue;
    return acc;
  }, {} as Record<string, number>);
  
  const [values, setValues] = useState<Record<string, number>>(initialValues);
  const [result, setResult] = useState<CalculatorResult | null>(null);
  
  const handleChange = (id: string, value: number) => {
    setValues(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleCalculate = () => {
    const calculatedResult = calculateResult(values);
    setResult(calculatedResult);
  };
  
  return (
    <Card className="overflow-hidden border border-gray-200 mb-8">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="space-y-6">
          {fields.map((field) => (
            <div key={field.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">{field.label}</label>
                <span className="text-sm font-bold text-[#387E89]">{values[field.id]}</span>
              </div>
              
              {field.type === 'slider' ? (
                <Slider
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  defaultValue={[field.defaultValue]}
                  value={[values[field.id]]}
                  onValueChange={(value) => handleChange(field.id, value[0])}
                />
              ) : (
                <Input
                  type="number"
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  value={values[field.id]}
                  onChange={(e) => handleChange(field.id, parseFloat(e.target.value || '0'))}
                  className="w-full"
                />
              )}
              
              <p className="text-xs text-gray-500">{field.description}</p>
            </div>
          ))}
        </div>
        
        <Button 
          onClick={handleCalculate} 
          className="w-full mt-6 bg-gradient-to-r from-[#143151] to-[#387E89] hover:from-[#0d1f31] hover:to-[#2c6269] text-white"
        >
          Calculate
        </Button>
        
        {result && (
          <div className={`mt-6 p-4 rounded-lg ${result.color} border bg-white`}>
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-gray-900">{result.interpretation}</h4>
              <div className="text-2xl font-bold text-[#387E89]">
                {typeof result.score === 'number' && result.score > 1000 
                  ? `$${result.score.toLocaleString()}`
                  : result.score}
              </div>
            </div>
            <p className="mt-2 text-gray-600">{result.recommendation}</p>
          </div>
        )}
        
        {reference && (
          <p className="mt-4 text-xs text-gray-500 italic">{reference}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ClinicalCalculator;
