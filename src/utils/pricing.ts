
import { CurrencyCode, currencySymbols } from "@/components/pricing/CurrencySelector";

export interface PricingData {
  basic: string;
  pro: string;
  enterprise: string;
}

export const getPricingByCurrency = (currency: CurrencyCode, billingCycle: 'monthly' | 'annual'): Record<'crush' | 'bravo' | 'bundle', PricingData> => {
  const symbol = currencySymbols[currency];
  
  // Define pricing for different currencies - ensuring consistent pricing and conversion rates
  const currencyPricing: Record<CurrencyCode, {
    // CRUSH
    crushBasic: number | string, 
    crushPro: number | {min: number} | string,
    crushEnterprise: string,
    // BRAVO
    bravoBasic: number | string,
    bravoPro: number | string,
    bravoEnterprise: string,
    // BUNDLE
    bundleBasic?: number | string,
    bundlePro?: string,
    bundleEnterprise?: string
  }> = {
    USD: { 
      // CRUSH pricing
      crushBasic: 99, 
      crushPro: 'Starts at $150',
      crushEnterprise: 'Custom Quote',
      // BRAVO pricing
      bravoBasic: 99,
      bravoPro: 'Starts at $299',
      bravoEnterprise: 'Custom pricing',
      // Bundle pricing (calculated with 10% discount)
      bundleBasic: 178, // (99+99) * 0.9 = 178.2 ≈ 178
      bundlePro: 'Custom pricing', // Both are custom so bundle is custom
      bundleEnterprise: 'Custom pricing'
    },
    CAD: { 
      crushBasic: 99, 
      crushPro: 'Custom pricing',
      crushEnterprise: 'Custom Quote',
      bravoBasic: 99,
      bravoPro: 'Custom pricing',
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 178, // (99+99) * 0.9 = 178.2 ≈ 178
      bundlePro: 'Custom pricing',
      bundleEnterprise: 'Custom pricing'
    },
    AUD: { 
      crushBasic: 99, 
      crushPro: 'Custom pricing',
      crushEnterprise: 'Custom Quote',
      bravoBasic: 99,
      bravoPro: 'Custom pricing',
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 178, // (99+99) * 0.9 = 178.2 ≈ 178
      bundlePro: 'Custom pricing',
      bundleEnterprise: 'Custom pricing'
    },
    GBP: { 
      crushBasic: 49, 
      crushPro: 'Custom pricing',
      crushEnterprise: 'Custom Quote',
      bravoBasic: 59,
      bravoPro: 'Custom pricing',
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 97, // (49+59) * 0.9 = 97.2 ≈ 97
      bundlePro: 'Custom pricing',
      bundleEnterprise: 'Custom pricing'
    },
    EUR: { 
      crushBasic: 59, 
      crushPro: 'Custom pricing',
      crushEnterprise: 'Custom Quote',
      bravoBasic: 69,
      bravoPro: 'Custom pricing',
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 115, // (59+69) * 0.9 = 115.2 ≈ 115
      bundlePro: 'Custom pricing',
      bundleEnterprise: 'Custom pricing'
    },
    NZD: { 
      crushBasic: 99, 
      crushPro: 'Custom pricing',
      crushEnterprise: 'Custom Quote',
      bravoBasic: 99,
      bravoPro: 'Custom pricing',
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 178, // (99+99) * 0.9 = 178.2 ≈ 178
      bundlePro: 'Custom pricing',
      bundleEnterprise: 'Custom pricing'
    },
    AED: { 
      crushBasic: 263, 
      crushPro: 'Custom pricing',
      crushEnterprise: 'Custom Quote',
      bravoBasic: 263,
      bravoPro: 'Custom pricing',
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 473, // (263+263) * 0.9 = 473.4 ≈ 473
      bundlePro: 'Custom pricing',
      bundleEnterprise: 'Custom pricing'
    },
  };
  
  // Apply annual discount consistently (16% discount - 12 months for price of 10)
  const multiplier = billingCycle === 'annual' ? 10 : 1;
  
  // Get pricing for selected currency
  const pricing = currencyPricing[currency];
  
  // Format the price with currency symbol
  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price;
    // Fix: Ensure we only add '/mo' or '/yr' once
    return `${symbol}${(price * multiplier).toLocaleString()}${billingCycle === 'monthly' ? '/mo' : '/yr'}`;
  };
  
  // Format for "Custom pricing" strings
  const formatCustomString = (text: string) => {
    if (text === 'Custom pricing' || text === 'Custom Quote') {
      return text;
    }
    
    // Handle "Starts at" strings differently for annual vs monthly
    if (text.startsWith('Starts at') && billingCycle === 'annual') {
      // Extract the currency symbol and number if present
      const matches = text.match(/Starts at ([^\d]*)(\d+)/);
      if (matches && matches.length === 3) {
        const currSymbol = matches[1]; // e.g., "$", "€"
        const amount = parseInt(matches[2], 10); // e.g., 150, 299
        return `Starts at ${currSymbol}${(amount * 10).toLocaleString()}/yr`; // 10 months price instead of 12
      }
      return text.replace('/mo', '/yr');
    }
    
    return text;
  };
  
  // Generate pricing data for all products
  return {
    crush: {
      basic: typeof pricing.crushBasic === 'number' ? formatPrice(pricing.crushBasic) : pricing.crushBasic as string,
      pro: typeof pricing.crushPro === 'string' ? formatCustomString(pricing.crushPro as string) : formatPrice(pricing.crushPro as number),
      enterprise: formatCustomString(pricing.crushEnterprise)
    },
    bravo: {
      basic: typeof pricing.bravoBasic === 'number' ? formatPrice(pricing.bravoBasic) : pricing.bravoBasic as string,
      pro: typeof pricing.bravoPro === 'string' ? formatCustomString(pricing.bravoPro as string) : formatPrice(pricing.bravoPro as number),
      enterprise: formatCustomString(pricing.bravoEnterprise)
    },
    bundle: {
      basic: typeof pricing.bundleBasic === 'number' ? formatPrice(pricing.bundleBasic) : pricing.bundleBasic as string,
      pro: typeof pricing.bundlePro === 'string' ? formatCustomString(pricing.bundlePro as string) : pricing.bundlePro as string,
      enterprise: formatCustomString(pricing.bundleEnterprise as string)
    }
  };
};
