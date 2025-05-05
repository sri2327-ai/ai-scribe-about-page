
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  DollarSign, 
  Euro, 
  PoundSterling, 
  CircleDollarSign
} from "lucide-react";

export type CurrencyCode = 'USD' | 'CAD' | 'AUD' | 'GBP' | 'EUR' | 'NZD' | 'AED';

interface CurrencySelectorProps {
  selectedCurrency: CurrencyCode;
  onChange: (currency: CurrencyCode) => void;
}

export const currencySymbols: Record<CurrencyCode, string> = {
  USD: '$',
  CAD: 'C$',
  AUD: 'A$',
  GBP: '£',
  EUR: '€',
  NZD: 'NZ$',
  AED: 'د.إ',
};

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({ selectedCurrency, onChange }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Select value={selectedCurrency} onValueChange={(value) => onChange(value as CurrencyCode)}>
        <SelectTrigger className="w-[140px] bg-white border border-gray-200 rounded-md">
          <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 shadow-lg">
          <SelectGroup>
            <SelectItem value="USD">
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                <span>USD ($)</span>
              </div>
            </SelectItem>
            <SelectItem value="CAD">
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-red-600" />
                <span>CAD (C$)</span>
              </div>
            </SelectItem>
            <SelectItem value="AUD">
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-blue-600" />
                <span>AUD (A$)</span>
              </div>
            </SelectItem>
            <SelectItem value="GBP">
              <div className="flex items-center">
                <PoundSterling className="h-4 w-4 mr-2 text-purple-600" />
                <span>GBP (£)</span>
              </div>
            </SelectItem>
            <SelectItem value="EUR">
              <div className="flex items-center">
                <Euro className="h-4 w-4 mr-2 text-blue-600" />
                <span>EUR (€)</span>
              </div>
            </SelectItem>
            <SelectItem value="NZD">
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                <span>NZD (NZ$)</span>
              </div>
            </SelectItem>
            <SelectItem value="AED">
              <div className="flex items-center">
                <CircleDollarSign className="h-4 w-4 mr-2 text-yellow-600" />
                <span>AED (د.إ)</span>
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
