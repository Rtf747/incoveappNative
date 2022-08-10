import { quotaCalculator } from './quotaCalculator';

export default function useQuota() {
 const quotaValidator = (price) => {
  const lowPrice = price <= 79999;
  const mediumPrice = price >= 80000 && price <= 180000;
  const highPrice = price >= 180001;
  let quotaAmount;

  if (lowPrice) {
   quotaAmount = 7000;
   return quotaCalculator(price, quotaAmount);
  }

  if (mediumPrice) {
   quotaAmount = 10000;
   return quotaCalculator(price, quotaAmount);
  }

  if (highPrice) {
   quotaAmount = 20000;
   return quotaCalculator(price, quotaAmount);
  }
 };

 return {
  quotaValidator,
 };
}
