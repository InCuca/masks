import createCurrencyMask from './helpers/createCurrencyMask';
import doFormat from './helpers/format';
import {
  thousandsSeparatorSymbol,
  decimalSymbol,
  unmask as unmaskDecimal,
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
  let fmtValue = String(value);
  fmtValue = fmtValue.replace('.', decimalSymbol);
  return doFormat(fmtValue, mask, true);
}
