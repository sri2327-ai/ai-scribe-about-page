
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
    crushPro: {min: number, max: number} | string,
    crushEnterprise: string,
    // BRAVO
    bravoBasic: number | string,
    bravoPro: number | {max: number} | string,
    bravoEnterprise: string,
    // BUNDLE
    bundleBasic?: number | string,
    bundlePro?: string,
    bundleEnterprise?: string
  }> = {
    USD: { 
      // CRUSH pricing
      crushBasic: 99, 
      crushPro: {min: 120, max: 199},
      crushEnterprise: 'Custom Quote',
      // BRAVO pricing
      bravoBasic: 99,
      bravoPro: {max: 299},
      bravoEnterprise: 'Custom pricing',
      // Bundle pricing (calculated with 10% discount)
      bundleBasic: 178, // (99+99) * 0.9 = 178.2 ≈ 178
      bundlePro: 'From $377', // Min of (120+299) = 419 * 0.9 = 377.1 ≈ 377
      bundleEnterprise: 'Custom pricing'
    },
    CAD: { 
      crushBasic: 129, 
      crushPro: {min: 156, max: 259},
      crushEnterprise: 'Custom Quote',
      bravoBasic: 129,
      bravoPro: {max: 389},
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 232, // (129+129) * 0.9 = 232.2 ≈ 232
      bundlePro: 'From C$490', // Min of (156+389) * 0.9 = 490.5 ≈ 490
      bundleEnterprise: 'Custom pricing'
    },
    AUD: { 
      crushBasic: 149, 
      crushPro: {min: 180, max: 299},
      crushEnterprise: 'Custom Quote',
      bravoBasic: 149,
      bravoPro: {max: 449},
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 268, // (149+149) * 0.9 = 268.2 ≈ 268
      bundlePro: 'From A$566', // Min of (180+449) * 0.9 = 566.1 ≈ 566
      bundleEnterprise: 'Custom pricing'
    },
    GBP: { 
      crushBasic: 79, 
      crushPro: {min: 95, max: 159},
      crushEnterprise: 'Custom Quote',
      bravoBasic: 79,
      bravoPro: {max: 239},
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 142, // (79+79) * 0.9 = 142.2 ≈ 142
      bundlePro: 'From £301', // Min of (95+239) * 0.9 = 300.6 ≈ 301
      bundleEnterprise: 'Custom pricing'
    },
    EUR: { 
      crushBasic: 89, 
      crushPro: {min: 108, max: 179},
      crushEnterprise: 'Custom Quote',
      bravoBasic: 89,
      bravoPro: {max: 269},
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 160, // (89+89) * 0.9 = 160.2 ≈ 160
      bundlePro: 'From €339', // Min of (108+269) * 0.9 = 339.3 ≈ 339
      bundleEnterprise: 'Custom pricing'
    },
    NZD: { 
      crushBasic: 159, 
      crushPro: {min: 191, max: 319},
      crushEnterprise: 'Custom Quote',
      bravoBasic: 159,
      bravoPro: {max: 479},
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 286, // (159+159) * 0.9 = 286.2 ≈ 286
      bundlePro: 'From NZ$603', // Min of (191+479) * 0.9 = 603 ≈ 603
      bundleEnterprise: 'Custom pricing'
    },
    AED: { 
      crushBasic: 363, 
      crushPro: {min: 440, max: 729},
      crushEnterprise: 'Custom Quote',
      bravoBasic: 363,
      bravoPro: {max: 1099},
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 653, // (363+363) * 0.9 = 653.4 ≈ 653
      bundlePro: 'From د.إ1385', // Min of (440+1099) * 0.9 = 1385.1 ≈ 1385
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
  
  // Format price range - MODIFIED to use "Starts at" instead of a range
  const formatPriceRange = (min: number, max: number) => {
    // Now returns "Starts at" format instead of a range
    return `Starts at ${symbol}${(min * multiplier).toLocaleString()}${billingCycle === 'monthly' ? '/mo' : '/yr'}`;
  };

  // Format for "Up to" pricing - modified to handle annual pricing
  const formatUpTo = (max: number) => {
    // Fix: Ensure we only add '/mo' or '/yr' once
    return `Up to ${symbol}${(max * multiplier).toLocaleString()}${billingCycle === 'monthly' ? '/mo' : '/yr'}`;
  };
  
  // Format "From" price text - modified to handle annual pricing and use "Starts at" for bundle
  const formatFromPrice = (text: string) => {
    if (!text.startsWith('From')) return text;
    
    // For strings like "From $198", replace with "Starts at $X" format for annual calculation
    if (billingCycle === 'annual' && text.startsWith('From')) {
      // Extract the currency symbol and number
      const matches = text.match(/From\s+([^\d]*)(\d+)/);
      if (matches && matches.length === 3) {
        const currSymbol = matches[1]; // e.g., "$", "€"
        const amount = parseInt(matches[2], 10); // e.g., 198
        return `Starts at ${currSymbol}${(amount * 10).toLocaleString()}/yr`; // 10 months price instead of 12
      }
    } else if (billingCycle === 'monthly' && text.startsWith('From')) {
      // Extract the currency symbol and number
      const matches = text.match(/From\s+([^\d]*)(\d+)/);
      if (matches && matches.length === 3) {
        const currSymbol = matches[1]; // e.g., "$", "€"
        const amount = parseInt(matches[2], 10); // e.g., 198
        return `Starts at ${currSymbol}${amount.toLocaleString()}/mo`;
      }
    }
    
    return text;
  };
  
  // Generate pricing data for all products
  return {
    crush: {
      basic: typeof pricing.crushBasic === 'number' ? formatPrice(pricing.crushBasic) : pricing.crushBasic as string,
      pro: typeof pricing.crushPro === 'object' && 'min' in pricing.crushPro ? formatPriceRange(pricing.crushPro.min, pricing.crushPro.max) : pricing.crushPro as string,
      enterprise: pricing.crushEnterprise
    },
    bravo: {
      basic: typeof pricing.bravoBasic === 'number' ? formatPrice(pricing.bravoBasic) : pricing.bravoBasic as string,
      pro: typeof pricing.bravoPro === 'object' && 'max' in pricing.bravoPro ? formatUpTo(pricing.bravoPro.max) : pricing.bravoPro as string,
      enterprise: pricing.bravoEnterprise
    },
    bundle: {
      basic: typeof pricing.bundleBasic === 'number' ? formatPrice(pricing.bundleBasic) : pricing.bundleBasic as string,
      pro: typeof pricing.bundlePro === 'string' ? formatFromPrice(pricing.bundlePro as string) : pricing.bundlePro as string,
      enterprise: pricing.bundleEnterprise as string
    }
  };
};
