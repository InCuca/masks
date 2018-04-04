import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import doFormat from './helpers/format';
import {
  thousandsSeparatorSymbol,
  decimalSymbol,
  unmask as unmaskDecimal,
} from './decimalNumber';

export const suffix = ' cm';

export const mask = (rawValue) => {
  if (String(rawValue).length < 11) {
    return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  }

  return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
}

export function unmask(masked) {
  const rawValue = masked.replace(
    new RegExp(/[\(\)\s\-]/),
    ''
  );
  return rawValue;
}

export function format(value) {
  return doFormat(value, mask);
}
