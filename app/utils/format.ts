import { Temporal } from 'temporal-polyfill';

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

export function formatGbpAmount(value) {
  if (typeof value != 'number') {
    return value;
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(value);
}

export function formatDate(date) {
  return Temporal.PlainDate.from(date)
    .toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
}

export function formatDateTime(date) {
  return Temporal.ZonedDateTime.from(date)
    .toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
}
