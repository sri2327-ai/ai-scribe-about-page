
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
    bravoNoEhr: number,
    bravoWithEhr: number, 
    bravoPro?: number
  }> = {
    USD: { 
      noEhr: 99, 
      withEhr: 120,
      withEhrMax: 199,
      pro: 0, // Custom pricing
      bravoNoEhr: 99,
      bravoWithEhr: 299,
      bravoPro: 0 // Custom pricing
    },
    CAD: { 
      noEhr: 129, 
      withEhr: 150,
      withEhrMax: 249,
      pro: 0, // Custom pricing
      bravoNoEhr: 129,
      bravoWithEhr: 389,
      bravoPro: 0 // Custom pricing
    },
    AUD: { 
      noEhr: 149, 
      withEhr: 170,
      withEhrMax: 249,
      pro: 0, // Custom pricing
      bravoNoEhr: 149,
      bravoWithEhr: 449,
      bravoPro: 0 // Custom pricing
    },
    GBP: { 
      noEhr: 79, 
      withEhr: 89,
      withEhrMax: 169,
      pro: 0, // Custom pricing
      bravoNoEhr: 79,
      bravoWithEhr: 239,
      bravoPro: 0 // Custom pricing
    },
    EUR: { 
      noEhr: 89, 
      withEhr: 99,
      withEhrMax: 179,
      pro: 0, // Custom pricing
      bravoNoEhr: 89,
      bravoWithEhr: 269,
      bravoPro: 0 // Custom pricing
    },
    NZD: { 
      noEhr: 159, 
      withEhr: 179,
      withEhrMax: 279,
      pro: 0, // Custom pricing
      bravoNoEhr: 159,
      bravoWithEhr: 479,
      bravoPro: 0 // Custom pricing
    },
    AED: { 
      noEhr: 363, 
      withEhr: 400,
      withEhrMax: 650,
      pro: 0, // Custom pricing
      bravoNoEhr: 363,
      bravoWithEhr: 1099,
      bravoPro: 0 // Custom pricing
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
  
  // Calculate bundle pricing (CRUSH + BRAVO with 10% discount)
  const calculateBundlePrice = (crushPrice: number, bravoPrice: number) => {
    return Math.round((crushPrice + bravoPrice) * 0.9); // 10% discount, rounded for cleaner display
  };
  
  // Generate bundle price range for Basic with EHR
  const getBundleWithEhrRange = () => {
    if (!pricing.withEhr || !pricing.withEhrMax || !pricing.bravoNoEhr) return 'Custom pricing';
    const minBundle = calculateBundlePrice(pricing.withEhr, pricing.bravoNoEhr);
    const maxBundle = calculateBundlePrice(pricing.withEhrMax, pricing.bravoNoEhr);
    return formatPriceRange(minBundle, maxBundle);
  };
  
  // Generate pricing data for all products
  return {
    crush: {
      noEhr: formatPrice(pricing.noEhr),
      withEhr: pricing.withEhr && pricing.withEhrMax ? formatPriceRange(pricing.withEhr, pricing.withEhrMax) : 'Custom pricing',
      pro: 'Custom pricing'
    },
    bravo: {
      noEhr: formatPrice(pricing.bravoNoEhr),
      withEhr: formatPrice(pricing.bravoWithEhr),
      pro: 'Custom pricing'
    },
    bundle: {
      noEhr: formatPrice(pricing.noEhr && pricing.bravoNoEhr ? calculateBundlePrice(pricing.noEhr, pricing.bravoNoEhr) : undefined),
      withEhr: getBundleWithEhrRange(),
      pro: 'Custom pricing'
    }
  };
};
