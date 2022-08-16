export default function usePayInterval() {
 const interval = (target) => {
  const intervals = {
   daily: 'Diário',
   weekly: 'Semanal',
   fortnightly: 'Quincenal',
   monthly: 'Mensual',
  };

  const select = intervals[target];

  return select;
 };

 return {
  interval,
 };
}
