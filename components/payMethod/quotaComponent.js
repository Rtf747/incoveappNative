import ExactQuotas from './exactQuotas';
import InaccurateQuotas from './inaccurateQuotas';

export default function QuotaComponent({
 typeOfQuota,
 cuota,
 quotaAmount,
 totalCalculated,
 totalAmount,
 lastQuota,
}) {
 return (
  <>
   {typeOfQuota === 'exactQuotas' ? (
    <ExactQuotas
     cuota={cuota}
     quotaAmount={quotaAmount}
     totalCalculated={totalCalculated}
    />
   ) : (
    <InaccurateQuotas
     totalAmount={totalAmount}
     cuota={cuota}
     quotaAmount={quotaAmount}
     lastQuota={lastQuota}
     totalCalculated={totalCalculated}
    />
   )}
  </>
 );
}
