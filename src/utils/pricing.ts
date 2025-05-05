
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
    withEhr: number, 
    withEhrMax?: number,
    pro: number,
    bravoNoEhr: number,
    bravoWithEhr: number, 
    bravoPro: number,
    bundleNoEhr?: number,
    bundleWithEhr?: number,
    bundlePro?: number
  }> = {
    USD: { 
      noEhr: 99, 
      withEhr: 120,
      withEhrMax: 199,
      pro: 249,
      bravoNoEhr: 99,
      bravoWithEhr: 119,
      bravoPro: 149
    },
    CAD: { 
      noEhr: 129, 
      withEhr: 150,
      withEhrMax: 249,
      pro: 299,
      bravoNoEhr: 129,
      bravoWithEhr: 159,
      bravoPro: 199
    },
    AUD: { 
      noEhr: 149, 
      withEhr: 170,
      withEhrMax: 249,
      pro: 329,
      bravoNoEhr: 149,
      bravoWithEhr: 169,
      bravoPro: 219
    },
    GBP: { 
      noEhr: 79, 
      withEhr: 89,
      withEhrMax: 169,
      pro: 199,
      bravoNoEhr: 79,
      bravoWithEhr: 99,
      bravoPro: 129
    },
    EUR: { 
      noEhr: 89, 
      withEhr: 99,
      withEhrMax: 179,
      pro: 219,
      bravoNoEhr: 89,
      bravoWithEhr: 109,
      bravoPro: 149
    },
    NZD: { 
      noEhr: 159, 
      withEhr: 179,
      withEhrMax: 279,
      pro: 349,
      bravoNoEhr: 159,
      bravoWithEhr: 179,
      bravoPro: 229
    },
    AED: { 
      noEhr: 363, 
      withEhr: 400,
      withEhrMax: 650,
      pro: 900,
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
  const formatPrice = (price: number) => {
    return `${symbol}${(price * multiplier).toLocaleString()}`;
  };
  
  // Format price range
  const formatPriceRange = (min: number, max: number) => {
    return `${symbol}${(min * multiplier).toLocaleString()}-${symbol}${(max * multiplier).toLocaleString()}`;
  };
  
  // Calculate bundle prices (approximately 1.6x the base price with 10% discount)
  const calcBundlePrice = (basePrice: number) => {
    return Math.round(basePrice * 1.6 * 0.9);
  };
  
  // Generate pricing data for all products
  return {
    crush: {
      noEhr: formatPrice(pricing.noEhr),
      withEhr: pricing.withEhrMax ? formatPriceRange(pricing.withEhr, pricing.withEhrMax) : formatPrice(pricing.withEhr),
      pro: formatPrice(pricing.pro)
    },
    bravo: {
      noEhr: formatPrice(pricing.bravoNoEhr),
      withEhr: formatPrice(pricing.bravoWithEhr),
      pro: formatPrice(pricing.bravoPro)
    },
    bundle: {
      noEhr: formatPrice(calcBundlePrice(pricing.noEhr)),
      withEhr: formatPrice(calcBundlePrice(pricing.withEhr)),
      pro: formatPrice(calcBundlePrice(Math.max(pricing.pro, pricing.bravoPro)))
    }
  };
};
