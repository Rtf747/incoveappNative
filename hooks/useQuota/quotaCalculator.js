export const quotaCalculator = (price, quotaAmount) => {
 const numberOfQuotas = price / quotaAmount;
 const lastQuota = (numberOfQuotas % 1) * quotaAmount;

 if (Number.isInteger(numberOfQuotas)) {
  return {
   id: 'exactQuotas',
   numberOfQuotas: numberOfQuotas,
   quotaAmount: quotaAmount.toFixed(2),
  };
 } else {
  return {
   id: 'inaccurateQuotas',
   numberOfQuotas: Math.floor(numberOfQuotas),
   quotaAmount: quotaAmount.toFixed(2),
   lastQuota: lastQuota.toFixed(2),
  };
 }
};
