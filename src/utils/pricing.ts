
import { CurrencyCode, currencySymbols } from "@/components/pricing/CurrencySelector";

export interface PricingData {
  noEhr: string;
  withEhr: string;
  pro: string;
}

export const getPricingByCurrency = (currency: CurrencyCode, billingCycle: 'monthly' | 'annual'): Record<'crush' | 'bravo' | 'bundle', PricingData> => {
  const symbol = currencySymbols[currency];
  
  // Define pricing for different currencies
  const currencyPricing: Record<CurrencyCode, {noEhr: number, withEhr?: number, pro?: number}> = {
    USD: { noEhr: 99 },
    CAD: { noEhr: 99 },
    AUD: { noEhr: 99 },
    GBP: { noEhr: 49 },
    EUR: { noEhr: 59 },
    NZD: { noEhr: 99 },
    AED: { noEhr: 363 },
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
  
  // Generate pricing data
  return {
    crush: {
      noEhr: formatPrice(pricing.noEhr),
      withEhr: pricing.withEhr ? formatPrice(pricing.withEhr) : 'Custom pricing',
      pro: pricing.pro ? formatPrice(pricing.pro) : 'Custom pricing'
    },
    bravo: {
      noEhr: formatPrice(pricing.noEhr),
      withEhr: pricing.withEhr ? formatPrice(pricing.withEhr) : 'Custom pricing',
      pro: pricing.pro ? formatPrice(pricing.pro) : 'Custom pricing'
    },
    bundle: {
      noEhr: formatPrice(pricing.noEhr ? pricing.noEhr * 1.6 : undefined), // Bundle is approximately 1.6x the base price with 10% discount
      withEhr: 'Custom pricing',
      pro: 'Custom pricing'
    }
  };
};
