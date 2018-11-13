import { format, mask, unmask } from './brlSymbol';

describe('brl mask', () => {
  it('should mask correctly', () => {
    expect(format('2345', mask)).toEqual('R$ 2.345,00');
    expect(format('2345.99', mask)).toEqual('R$ 2.345,99');
  });
  it('should unmask correctly', () => {
    expect(unmask('R$ 2.345,00')).toEqual('2345');
    expect(unmask('R$ 2.345,99')).toEqual('2345.99');
  });
});
