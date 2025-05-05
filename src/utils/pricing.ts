
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
    withEhrMax?: number,
    pro?: number,
    bravoNoEhr?: number,
    bravoWithEhr?: number, 
    bravoPro?: number
  }> = {
    USD: { 
      noEhr: 99, 
      withEhr: 120,
      withEhrMax: 199,
      pro: 0, // Custom pricing
      bravoNoEhr: 99,
      bravoWithEhr: 119,
      bravoPro: 149
    },
    CAD: { 
      noEhr: 129, 
      withEhr: 150,
      withEhrMax: 249,
      pro: 0, // Custom pricing
      bravoNoEhr: 129,
      bravoWithEhr: 159,
      bravoPro: 199
    },
    AUD: { 
      noEhr: 149, 
      withEhr: 170,
      withEhrMax: 249,
      pro: 0, // Custom pricing
      bravoNoEhr: 149,
      bravoWithEhr: 169,
      bravoPro: 219
    },
    GBP: { 
      noEhr: 79, 
      withEhr: 89,
      withEhrMax: 169,
      pro: 0, // Custom pricing
      bravoNoEhr: 79,
      bravoWithEhr: 99,
      bravoPro: 129
    },
    EUR: { 
      noEhr: 89, 
      withEhr: 99,
      withEhrMax: 179,
      pro: 0, // Custom pricing
      bravoNoEhr: 89,
      bravoWithEhr: 109,
      bravoPro: 149
    },
    NZD: { 
      noEhr: 159, 
      withEhr: 179,
      withEhrMax: 279,
      pro: 0, // Custom pricing
      bravoNoEhr: 159,
      bravoWithEhr: 179,
      bravoPro: 229
    },
    AED: { 
      noEhr: 363, 
      withEhr: 400,
      withEhrMax: 650,
      pro: 0, // Custom pricing
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
  
  // Format price range
  const formatPriceRange = (min?: number, max?: number) => {
    if (!min || !max) return 'Custom pricing';
    return `${symbol}${(min * multiplier).toLocaleString()}-${symbol}${(max * multiplier).toLocaleString()}`;
  };
  
  // Generate pricing data for all products
  return {
    crush: {
      noEhr: formatPrice(pricing.noEhr),
      withEhr: pricing.withEhr && pricing.withEhrMax ? formatPriceRange(pricing.withEhr, pricing.withEhrMax) : 'Custom pricing',
      pro: 'Custom pricing'
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
