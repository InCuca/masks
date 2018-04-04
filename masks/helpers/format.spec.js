// export default function (rawValue, mask) {
//   if (!rawValue) return '';
//   const masked = core.conformToMask(rawValue, mask(rawValue));
//   if (masked.someCharsRejected) throw Error('error formating value');
//   return masked.conformedValue;
// }
import format from './format.js';

describe('format function', () => {
  it('returns nothing if it receives empty string', () => {
    expect(format('', null)).toEqual('')
  })
})
