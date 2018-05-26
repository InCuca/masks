import doFormat from './helpers/format';

export function mask(rawValue) {
  if (String(rawValue).length < 11) {
    return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  }

  return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
}

export function unmask(masked) {
  const rawValue = masked.replace(
    new RegExp(/[()\s-]/),
    '',
  );
  return rawValue;
}

export function format(value) {
  return doFormat(value, mask);
}
