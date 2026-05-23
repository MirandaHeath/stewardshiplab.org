export function parseUsdAmount(str) {
  return parseFloat(str.replace(/[$,]/g, ''));
}

export function formatUsdAmount(value) {
  if (typeof value != 'number') {
    return value;
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(value);
}
