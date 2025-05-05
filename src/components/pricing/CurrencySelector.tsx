
import React from 'react';

export type CurrencyCode = 'USD' | 'CAD' | 'AUD' | 'GBP' | 'EUR' | 'NZD' | 'AED';

export const currencySymbols: Record<CurrencyCode, string> = {
  USD: '$',
  CAD: 'C$',
  AUD: 'A$',
  GBP: '£',
  EUR: '€',
  NZD: 'NZ$',
  AED: 'د.إ',
};

interface CurrencySelectorProps {
  selectedCurrency: CurrencyCode;
  onChange: (currency: CurrencyCode) => void;
  showPerProviderNote?: boolean;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({ 
  selectedCurrency, 
  onChange,
  showPerProviderNote = true 
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <select 
          value={selectedCurrency}
          onChange={(e) => onChange(e.target.value as CurrencyCode)}
          className="appearance-none bg-white border border-gray-200 rounded-md py-2 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          style={{ backgroundColor: 'white' }}
        >
          <option value="USD">USD ($)</option>
          <option value="CAD">CAD (C$)</option>
          <option value="AUD">AUD (A$)</option>
          <option value="GBP">GBP (£)</option>
          <option value="EUR">EUR (€)</option>
          <option value="NZD">NZD (NZ$)</option>
          <option value="AED">AED (د.إ)</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
      {showPerProviderNote && (
        <p className="mt-2 text-xs text-gray-500">All prices shown are per provider/month</p>
      )}
    </div>
  );
};
