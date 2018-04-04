import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import doFormat from './helpers/format';

export function mask(rawValue) {
  return [
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '/',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ]
}

export function unmask(masked) {
  const rawValue = masked.replace(
    new RegExp(/[-\.\/]/),
    ''
  );
  return rawValue;
}

export function format(value) {
  return doFormat(value, mask);
}
