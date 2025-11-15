export const formatEuro = (value: number) => {
  const useCompact = Math.abs(value) >= 1e9;
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    notation: useCompact ? "compact" : "standard",
    compactDisplay: "short",
    maximumFractionDigits: useCompact ? 1 : 0,
  }).format(value);
};
