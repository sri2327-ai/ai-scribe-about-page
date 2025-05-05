
import { CurrencyCode, currencySymbols } from "@/components/pricing/CurrencySelector";

export interface PricingData {
  noEhr: string;
  withEhr: string;
  pro: string;
}

export const getPricingByCurrency = (currency: CurrencyCode, billingCycle: 'monthly' | 'annual'): Record<'crush' | 'bravo' | 'bundle', PricingData> => {
  const symbol = currencySymbols[currency];
  
  // Define pricing for different currencies
  const currencyPricing: Record<CurrencyCode, {
    noEhr: number, 
    withEhr?: number, 
    pro?: number,
    bravoNoEhr?: number,
    bravoWithEhr?: number, 
    bravoPro?: number
  }> = {
    USD: { 
      noEhr: 99, 
      withEhr: 149, 
      pro: 199,
      bravoNoEhr: 99,
      bravoWithEhr: 119,
      bravoPro: 149
    },
    CAD: { 
      noEhr: 129, 
      withEhr: 199, 
      pro: 249,
      bravoNoEhr: 129,
      bravoWithEhr: 159,
      bravoPro: 199
    },
    AUD: { 
      noEhr: 149, 
      withEhr: 199, 
      pro: 249,
      bravoNoEhr: 149,
      bravoWithEhr: 169,
      bravoPro: 219
    },
    GBP: { 
      noEhr: 79, 
      withEhr: 129, 
      pro: 169,
      bravoNoEhr: 79,
      bravoWithEhr: 99,
      bravoPro: 129
    },
    EUR: { 
      noEhr: 89, 
      withEhr: 139, 
      pro: 179,
      bravoNoEhr: 89,
      bravoWithEhr: 109,
      bravoPro: 149
    },
    NZD: { 
      noEhr: 159, 
      withEhr: 219, 
      pro: 279,
      bravoNoEhr: 159,
      bravoWithEhr: 179,
      bravoPro: 229
    },
    AED: { 
      noEhr: 363, 
      withEhr: 546, 
      pro: 729,
      bravoNoEhr: 363,
      bravoWithEhr: 436,
      bravoPro: 545
    },
  };
  
  // Apply annual discount if needed (approximately 16% discount - 12 months for price of 10)
  const multiplier = billingCycle === 'annual' ? 10 : 1;
  
  // Get pricing for selected currency
  const pricing = currencyPricing[currency];
  
  // Format the price with currency symbol
  const formatPrice = (price?: number) => {
    if (!price) return 'Custom pricing';
    return `${symbol}${(price * multiplier).toLocaleString()}`;
  };
  
  // Generate pricing data for all products
  return {
    crush: {
      noEhr: formatPrice(pricing.noEhr),
      withEhr: pricing.withEhr ? formatPrice(pricing.withEhr) : 'Custom pricing',
      pro: pricing.pro ? formatPrice(pricing.pro) : 'Custom pricing'
    },
    bravo: {
      noEhr: formatPrice(pricing.bravoNoEhr || pricing.noEhr),
      withEhr: formatPrice(pricing.bravoWithEhr || pricing.withEhr),
      pro: formatPrice(pricing.bravoPro || pricing.pro)
    },
    bundle: {
      noEhr: formatPrice(pricing.noEhr ? pricing.noEhr * 1.6 : undefined), // Bundle is approximately 1.6x the base price with 10% discount
      withEhr: pricing.withEhr ? formatPrice(pricing.withEhr * 1.6) : 'Custom pricing',
      pro: pricing.pro ? formatPrice(pricing.pro * 1.6) : 'Custom pricing'
    }
  };
};
