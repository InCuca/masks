import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import doFormat from './helpers/format';

export const thousandsSeparatorSymbol = '.';
export const decimalSymbol = ',';

export const mask = createNumberMask({
  prefix: '',
  suffix: '',
  allowDecimal: true,
  thousandsSeparatorSymbol,
  decimalSymbol,
});

export function unmask(masked) {
  let rawValue;
  rawValue = masked.replace(
    new RegExp(`\\${thousandsSeparatorSymbol}`, 'g'),
    '',
  );
  rawValue = rawValue.replace(
    new RegExp(`\\${decimalSymbol}`),
    '.',
  );

  // not allow . without right numbers
  const last = rawValue.length - 1;
  if (rawValue[last] === '.') {
    rawValue = rawValue.slice(0, last);
  }

  return rawValue;
}

export function format(value, fmtMask = mask) {
  let fmtValue = String(value);
  fmtValue = fmtValue.replace('.', decimalSymbol);
  return doFormat(fmtValue, fmtMask, true);
}
