export function NumberFormat(num: number) {
  const formatoMoneda = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });
  return formatoMoneda.format(num);
}
