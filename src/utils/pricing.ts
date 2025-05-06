
import { CurrencyCode, currencySymbols } from "@/components/pricing/CurrencySelector";

export interface PricingData {
  basic: string;
  pro: string;
  enterprise: string;
}

export const getPricingByCurrency = (currency: CurrencyCode, billingCycle: 'monthly' | 'annual'): Record<'crush' | 'bravo' | 'bundle', PricingData> => {
  const symbol = currencySymbols[currency];
  
  // Define pricing for different currencies
  const currencyPricing: Record<CurrencyCode, {
    // CRUSH
    crushBasic: number | string, 
    crushPro: {min: number, max: number} | string,
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
      crushPro: {min: 140, max: 199},
      crushEnterprise: 'Custom Quote',
      // BRAVO pricing
      bravoBasic: 99,
      bravoPro: 'Up to $299',
      bravoEnterprise: 'Custom pricing',
      // Bundle pricing (already calculated with 10% discount)
      bundleBasic: 143, // (99+99) * 0.9 = 178.2 * 0.9 = 143.1 ≈ 143
      bundlePro: 'From $198', // Min of (140+up to 299) = 439 * 0.9 = 395.1
      bundleEnterprise: 'Custom pricing'
    },
    CAD: { 
      crushBasic: 129, 
      crushPro: {min: 182, max: 259},
      crushEnterprise: 'Custom Quote',
      bravoBasic: 129,
      bravoPro: 'Up to C$389',
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 186, // (129+129) * 0.9 = 232.2
      bundlePro: 'From C$258',
      bundleEnterprise: 'Custom pricing'
    },
    AUD: { 
      crushBasic: 149, 
      crushPro: {min: 210, max: 299},
      crushEnterprise: 'Custom Quote',
      bravoBasic: 149,
      bravoPro: 'Up to A$449',
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 215, // (149+149) * 0.9 = 268.2
      bundlePro: 'From A$298',
      bundleEnterprise: 'Custom pricing'
    },
    GBP: { 
      crushBasic: 79, 
      crushPro: {min: 110, max: 159},
      crushEnterprise: 'Custom Quote',
      bravoBasic: 79,
      bravoPro: 'Up to £239',
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 114, // (79+79) * 0.9 = 142.2
      bundlePro: 'From £157',
      bundleEnterprise: 'Custom pricing'
    },
    EUR: { 
      crushBasic: 89, 
      crushPro: {min: 125, max: 179},
      crushEnterprise: 'Custom Quote',
      bravoBasic: 89,
      bravoPro: 'Up to €269',
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 129, // (89+89) * 0.9 = 160.2
      bundlePro: 'From €178',
      bundleEnterprise: 'Custom pricing'
    },
    NZD: { 
      crushBasic: 159, 
      crushPro: {min: 220, max: 319},
      crushEnterprise: 'Custom Quote',
      bravoBasic: 159,
      bravoPro: 'Up to NZ$479',
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 229, // (159+159) * 0.9 = 286.2
      bundlePro: 'From NZ$315',
      bundleEnterprise: 'Custom pricing'
    },
    AED: { 
      crushBasic: 363, 
      crushPro: {min: 505, max: 729},
      crushEnterprise: 'Custom Quote',
      bravoBasic: 363,
      bravoPro: 'Up to د.إ1099',
      bravoEnterprise: 'Custom pricing',
      bundleBasic: 524, // (363+363) * 0.9 = 653.4
      bundlePro: 'From د.إ715',
      bundleEnterprise: 'Custom pricing'
    },
  };
  
  // Apply annual discount if needed (approximately 16% discount - 12 months for price of 10)
  const multiplier = billingCycle === 'annual' ? 10 : 1;
  
  // Get pricing for selected currency
  const pricing = currencyPricing[currency];
  
  // Format the price with currency symbol
  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price;
    return `${symbol}${(price * multiplier).toLocaleString()}`;
  };
  
  // Format price range
  const formatPriceRange = (min: number, max: number) => {
    return `${symbol}${(min * multiplier).toLocaleString()}-${symbol}${(max * multiplier).toLocaleString()}`;
  };
  
  // Generate pricing data for all products
  return {
    crush: {
      basic: typeof pricing.crushBasic === 'number' ? formatPrice(pricing.crushBasic) : pricing.crushBasic as string,
      pro: typeof pricing.crushPro === 'object' ? formatPriceRange(pricing.crushPro.min, pricing.crushPro.max) : pricing.crushPro as string,
      enterprise: pricing.crushEnterprise
    },
    bravo: {
      basic: typeof pricing.bravoBasic === 'number' ? formatPrice(pricing.bravoBasic) : pricing.bravoBasic as string,
      pro: typeof pricing.bravoPro === 'number' ? formatPrice(pricing.bravoPro) : pricing.bravoPro as string,
      enterprise: pricing.bravoEnterprise
    },
    bundle: {
      basic: typeof pricing.bundleBasic === 'number' ? formatPrice(pricing.bundleBasic) : pricing.bundleBasic as string,
      pro: pricing.bundlePro as string,
      enterprise: pricing.bundleEnterprise as string
    }
  };
};

