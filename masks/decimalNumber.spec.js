import { format, mask, unmask } from './decimalNumber'

describe('usd mask', () => {
  it('should mask correctly', () => {
    expect(
      format('12351', mask)
    ).toEqual('12.351')
    expect(
      format('12351.99', mask)
    ).toEqual('12.351,99')
    expect(
      format('123511111.99', mask)
    ).toEqual('123.511.111,99')
  })
  it('should unmask correctly', () => {
    expect(
      unmask('12.351')
    ).toEqual('12351')
    expect(
      unmask('12.351,99')
    ).toEqual('12351.99')
    expect(
      unmask('12.351.123,99')
    ).toEqual('12351123.99')
  })
})
