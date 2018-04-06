import {conformToMask} from 'text-mask-core';
export default function(rawValue, mask, ignoreFail = false) {
  if (!rawValue) return '';
  let maskArray = mask(rawValue);

  // this removes the '[]' placeholder elements
  maskArray = maskArray.filter((val) => val != '[]');
  const masked = conformToMask(rawValue, maskArray);
  if (!ignoreFail && masked.meta.someCharsRejected) {
    throw Error('error formating value');
  }

  return masked.conformedValue;
}
