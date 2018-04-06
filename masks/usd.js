import createCurrencyMask from './helpers/createCurrencyMask';
import {
  thousandsSeparatorSymbol,
  decimalSymbol,
  unmask as unmaskDecimal,
  format as doFormat,
} from './decimalNumber';

export const prefix = 'USD ';

export const mask = createCurrencyMask({
  prefix,
  suffix: '',
  thousandsSeparatorSymbol,
  allowDecimal: true,
  requireDecimal: true,
  decimalSymbol,
});

export function unmask(masked) {
  let rawValue = masked.replace(
    new RegExp(prefix),
    '',
  );
  rawValue = unmaskDecimal(rawValue);
  // remove zeros after .
  rawValue = String(Number(rawValue));
  return rawValue;
}

export function format(value) {
  return doFormat(value, mask, true);
}
