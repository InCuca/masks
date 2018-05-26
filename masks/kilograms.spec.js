import { format, mask, unmask } from './kilograms';

describe('usd mask', () => {
  it('should mask correctly', () => {
    expect(format('12351', mask)).toEqual('12.351 kg');
    expect(format('12351.99', mask)).toEqual('12.351,99 kg');
  });
  it('should unmask correctly', () => {
    expect(unmask('12.351 kg')).toEqual('12351');
    expect(unmask('12.351,99 kg')).toEqual('12351.99');
  });
});
