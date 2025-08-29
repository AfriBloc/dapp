export function getCurrencySymbol(currencyCode: string): string {
  const currencySymbols: { [key: string]: string } = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    NGN: "₦",
  };
  return currencySymbols[currencyCode] || currencyCode;
}

export const formatCurrency = (value: number, currencyCode: string = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
