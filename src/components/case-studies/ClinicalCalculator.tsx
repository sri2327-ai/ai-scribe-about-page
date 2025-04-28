
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { Calculator } from 'lucide-react';

interface CalculatorField {
  id: string;
  label: string;
  type: 'slider' | 'toggle' | 'number';
  min?: number;
  max?: number;
  step?: number;
  defaultValue: number;
  options?: { value: number; label: string }[];
}

interface CalculatorResult {
  score: number;
  interpretation: string;
  color: string;
  recommendation?: string;
}

export interface ClinicalCalculatorProps {
  title: string;
  description: string;
  fields: CalculatorField[];
  calculateResult: (values: Record<string, number>) => CalculatorResult;
  reference: string;
  className?: string;
}

export function ClinicalCalculator({
  title,
  description,
  fields,
  calculateResult,
  reference,
  className
}: ClinicalCalculatorProps) {
  const initialValues = fields.reduce((acc, field) => ({
    ...acc,
    [field.id]: field.defaultValue
  }), {} as Record<string, number>);

  const [values, setValues] = useState<Record<string, number>>(initialValues);
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const handleValueChange = (id: string, value: number) => {
    setValues(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleCalculate = () => {
    const calculatedResult = calculateResult(values);
    setResult(calculatedResult);
  };

  const handleReset = () => {
    setValues(initialValues);
    setResult(null);
  };

  return (
    <Card className={cn("p-6 shadow-md", className)}>
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="h-6 w-6 text-blue-600" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-6 mb-6">
        {fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-gray-700">{field.label}</label>
              <span className="text-sm font-semibold">{values[field.id]}</span>
            </div>
            
            {field.type === 'slider' && (
              <Slider
                defaultValue={[field.defaultValue]}
                min={field.min || 0}
                max={field.max || 10}
                step={field.step || 1}
                value={[values[field.id]]}
                onValueChange={(newValues) => handleValueChange(field.id, newValues[0])}
              />
            )}
            
            {field.type === 'toggle' && field.options && (
              <div className="flex gap-2">
                {field.options.map((option) => (
                  <Button
                    key={option.value}
                    variant={values[field.id] === option.value ? "default" : "outline"}
                    className={values[field.id] === option.value ? "bg-blue-600" : ""}
                    onClick={() => handleValueChange(field.id, option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            )}
            
            {field.type === 'number' && (
              <input
                type="number"
                className="w-full rounded-md border border-gray-300 p-2"
                min={field.min}
                max={field.max}
                step={field.step}
                value={values[field.id]}
                onChange={(e) => handleValueChange(field.id, Number(e.target.value))}
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="flex gap-2">
        <Button onClick={handleCalculate} className="bg-blue-600 hover:bg-blue-700">
          Calculate
        </Button>
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
      </div>
      
      {result && (
        <div className={`mt-6 p-4 rounded-lg border ${result.color}`}>
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-lg">Result: {result.score}</h4>
            <span className={`px-2 py-1 text-sm rounded-full ${result.color.replace('border-', 'bg-').replace('300', '100')}`}>
              {result.interpretation}
            </span>
          </div>
          {result.recommendation && (
            <p className="mt-2 text-gray-800">{result.recommendation}</p>
          )}
        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-500">
        <p>Reference: {reference}</p>
      </div>
    </Card>
  );
}

export default ClinicalCalculator;
