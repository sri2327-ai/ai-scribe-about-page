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
    noEhr: number | 'custom', 
    withEhr: number | string, 
    withEhrMax?: number,
    pro: number | 'custom',
    bravoNoEhr: number | 'custom',
    bravoWithEhr: number | string, 
    bravoPro: number | 'custom',
    bundleNoEhr?: number | 'custom',
    bundleWithEhr?: number | string,
    bundlePro?: number | 'custom'
  }> = {
    USD: { 
      noEhr: 99, 
      withEhr: 120,
      withEhrMax: 199,
      pro: 'custom',
      bravoNoEhr: 99,
      bravoWithEhr: '$Up to 299',
      bravoPro: 'custom'
    },
    CAD: { 
      noEhr: 129, 
      withEhr: 150,
      withEhrMax: 249,
      pro: 'custom',
      bravoNoEhr: 129,
      bravoWithEhr: 'custom',
      bravoPro: 'custom'
    },
    AUD: { 
      noEhr: 149, 
      withEhr: 170,
      withEhrMax: 249,
      pro: 'custom',
      bravoNoEhr: 149,
      bravoWithEhr: 'custom',
      bravoPro: 'custom'
    },
    GBP: { 
      noEhr: 79, 
      withEhr: 89,
      withEhrMax: 169,
      pro: 'custom',
      bravoNoEhr: 79,
      bravoWithEhr: 'custom',
      bravoPro: 'custom'
    },
    EUR: { 
      noEhr: 89, 
      withEhr: 99,
      withEhrMax: 179,
      pro: 'custom',
      bravoNoEhr: 89,
      bravoWithEhr: 'custom',
      bravoPro: 'custom'
    },
    NZD: { 
      noEhr: 159, 
      withEhr: 179,
      withEhrMax: 279,
      pro: 'custom',
      bravoNoEhr: 159,
      bravoWithEhr: 'custom',
      bravoPro: 'custom'
    },
    AED: { 
      noEhr: 363, 
      withEhr: 400,
      withEhrMax: 650,
      pro: 'custom',
      bravoNoEhr: 363,
      bravoWithEhr: 'custom',
      bravoPro: 'custom'
    },
  };
  
  // Apply annual discount if needed (approximately 16% discount - 12 months for price of 10)
  const multiplier = billingCycle === 'annual' ? 10 : 1;
  
  // Get pricing for selected currency
  const pricing = currencyPricing[currency];
  
  // Format the price with currency symbol
  const formatPrice = (price: number | string | 'custom') => {
    if (price === 'custom') return 'Custom pricing';
    if (typeof price === 'string') return price;
    return `${symbol}${(price * multiplier).toLocaleString()}`;
  };
  
  // Format price range
  const formatPriceRange = (min: number, max: number) => {
    return `${symbol}${(min * multiplier).toLocaleString()}-${symbol}${(max * multiplier).toLocaleString()}`;
  };
  
  // Calculate bundle prices (approximately 1.6x the base price with 10% discount)
  const calcBundlePrice = (basePrice: number | string | 'custom') => {
    if (basePrice === 'custom' || typeof basePrice === 'string') return 'Custom pricing';
    return Math.round(basePrice * 1.6 * 0.9);
  };
  
  // Generate pricing data for all products
  return {
    crush: {
      noEhr: typeof pricing.noEhr === 'number' ? formatPrice(pricing.noEhr) : 'Custom pricing',
      withEhr: typeof pricing.withEhr === 'number' && pricing.withEhrMax ? 
              formatPriceRange(pricing.withEhr, pricing.withEhrMax) : 
              formatPrice(pricing.withEhr),
      pro: formatPrice(pricing.pro)
    },
    bravo: {
      noEhr: formatPrice(pricing.bravoNoEhr),
      withEhr: formatPrice(pricing.bravoWithEhr),
      pro: formatPrice(pricing.bravoPro)
    },
    bundle: {
      noEhr: typeof pricing.noEhr === 'number' ? formatPrice(calcBundlePrice(pricing.noEhr)) : 'Custom pricing',
      withEhr: typeof pricing.withEhr === 'number' ? formatPrice(calcBundlePrice(pricing.withEhr as number)) : 'Custom pricing',
      pro: pricing.pro === 'custom' || pricing.bravoPro === 'custom' ? 
           'Custom pricing' : 
           formatPrice(calcBundlePrice(Math.max(
             typeof pricing.pro === 'number' ? pricing.pro : 0, 
             typeof pricing.bravoPro === 'number' ? pricing.bravoPro : 0
           )))
    }
  };
};
