export default function useClientRequest(documentType) {
 const documentHandler = () => {
  if (documentType === 'Cédula') {
   return 'CEDULA';
  }

  if (documentType === 'Cédula de extranjeria') {
   return 'CEDULA EXT';
  }

  if (documentType === 'Pasaporte') {
   return 'PASAPORT';
  }
 };

 return { documentHandler };
}
