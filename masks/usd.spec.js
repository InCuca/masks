import { format, mask, unmask } from './usd';

describe('usd mask', () => {
  it('should mask correctly', () => {
    expect(format('2345', mask)).toEqual('USD 2.345,00');
    expect(format('2345.99', mask)).toEqual('USD 2.345,99');
  });
  it('should unmask correctly', () => {
    expect(unmask('USD 2.345,00')).toEqual('2345');
    expect(unmask('USD 2.345,99')).toEqual('2345.99');
  });
});
