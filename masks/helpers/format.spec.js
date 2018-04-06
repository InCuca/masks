import format from './format.js';

describe('format function', () => {
  const testMask = val => [/\d/, 'n' + val]

  it('returns nothing if it receives empty string', () => {
    expect(format('', testMask)).toEqual('')
  })

  it('should format a string with mask', () => {
    expect(format('1', testMask)).toEqual('1n1');
  })

  it('should return empty string if null is given', () => {
    expect(format(null, testMask)).toEqual('');
  })

  it('should throw an error if string was not correctly formated', () => {
    expect(() => format('a', testMask))
      .toThrowError('error formating value')
  })

  it('should not throw an error if string was not correctly formated and ignoreFail is true', () => {
    expect(() => format('a', testMask, true))
      .not.toThrowError('error formating value')
  })
})
