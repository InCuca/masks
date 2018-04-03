import {conformToMask} from 'text-mask-core';

export default function(rawValue, mask) {
  if (!rawValue) return '';
  const masked = conformToMask(rawValue, mask(rawValue));
  if (masked.someCharsRejected) throw Error('error formating value');
  return masked.conformedValue;
}
