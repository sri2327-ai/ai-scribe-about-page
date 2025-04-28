
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { Calculator, Info, BarChart3, ArrowRight } from 'lucide-react';

interface CalculatorField {
  id: string;
  label: string;
  type: 'slider' | 'toggle' | 'number';
  min?: number;
  max?: number;
  step?: number;
  defaultValue: number;
  options?: { value: number; label: string }[];
  description?: string;
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
  const [activeField, setActiveField] = useState<string | null>(null);
  const [showTip, setShowTip] = useState(false);

  const handleValueChange = (id: string, value: number) => {
    setValues(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleCalculate = () => {
    const calculatedResult = calculateResult(values);
    setResult(calculatedResult);
    // Scroll to result if on mobile
    setTimeout(() => {
      const resultElement = document.getElementById('calculator-result');
      if (resultElement && window.innerWidth < 768) {
        resultElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleReset = () => {
    setValues(initialValues);
    setResult(null);
  };

  return (
    <Card className={cn("p-6 shadow-lg border-t-4 border-blue-600", className)}>
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-blue-100 p-2 rounded-full">
          <Calculator className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="relative mb-6">
        <p className="text-gray-600">{description}</p>
        <button 
          className="absolute top-0 right-0 text-gray-400 hover:text-blue-600"
          onClick={() => setShowTip(!showTip)}
        >
          <Info className="h-5 w-5" />
        </button>
        
        {showTip && (
          <div className="mt-3 p-4 bg-blue-50 rounded-md text-sm text-blue-800">
            <p className="font-semibold mb-1">How to use this calculator:</p>
            <ol className="list-decimal pl-4 space-y-1">
              <li>Adjust the parameters using the sliders or input fields</li>
              <li>Click "Calculate" to view your results</li>
              <li>Use the "Reset" button to start over</li>
            </ol>
          </div>
        )}
      </div>
      
      <div className="space-y-6 mb-6">
        {fields.map((field) => (
          <div 
            key={field.id} 
            className={cn(
              "space-y-2 p-3 rounded-lg transition-colors", 
              activeField === field.id ? "bg-gray-50" : ""
            )}
            onFocus={() => setActiveField(field.id)}
            onMouseEnter={() => setActiveField(field.id)}
            onMouseLeave={() => setActiveField(null)}
          >
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                {field.label}
                {field.description && (
                  <span className="group relative">
                    <Info className="h-4 w-4 text-gray-400 cursor-help" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                      {field.description}
                    </span>
                  </span>
                )}
              </label>
              <span className="text-sm font-semibold bg-blue-100 py-1 px-2 rounded-full min-w-[40px] text-center">
                {values[field.id]}
              </span>
            </div>
            
            {field.type === 'slider' && (
              <Slider
                defaultValue={[field.defaultValue]}
                min={field.min || 0}
                max={field.max || 10}
                step={field.step || 1}
                value={[values[field.id]]}
                onValueChange={(newValues) => handleValueChange(field.id, newValues[0])}
                className="mt-3"
              />
            )}
            
            {field.type === 'toggle' && field.options && (
              <div className="flex flex-wrap gap-2 mt-2">
                {field.options.map((option) => (
                  <Button
                    key={option.value}
                    variant={values[field.id] === option.value ? "default" : "outline"}
                    className={cn(
                      values[field.id] === option.value ? "bg-blue-600" : "",
                      "text-sm h-auto py-1.5"
                    )}
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
                className="w-full rounded-md border border-gray-300 p-2 mt-1"
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
      
      <div className="flex gap-2 mb-6">
        <Button 
          onClick={handleCalculate} 
          className="bg-blue-600 hover:bg-blue-700 gap-2"
        >
          <BarChart3 className="h-4 w-4" />
          Calculate
        </Button>
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
      </div>
      
      {result && (
        <div 
          id="calculator-result"
          className={cn(
            "mt-8 p-5 rounded-lg border-l-4 transition-all animate-fade-in", 
            result.color
          )}
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold text-lg flex items-center gap-2">
              <ArrowRight className="h-5 w-5 text-blue-600" />
              Result: <span className="text-blue-700">{result.score}</span>
            </h4>
            <span className={cn(
              "px-3 py-1 text-sm font-medium rounded-full", 
              result.color.replace('border-', 'bg-').replace('300', '100')
            )}>
              {result.interpretation}
            </span>
          </div>
          
          {result.recommendation && (
            <div className="bg-white bg-opacity-70 p-3 rounded-md mt-3">
              <p className="text-gray-800">{result.recommendation}</p>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-6 text-xs text-gray-500 border-t border-gray-100 pt-4">
        <p>Reference: {reference}</p>
      </div>
    </Card>
  );
}

export default ClinicalCalculator;
