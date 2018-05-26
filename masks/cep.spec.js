import { format, mask } from './cep.js';

describe('cep mask', () => {
  it('should mask correctly', () => {
    expect(format('11111111', mask)).toEqual('11111-111');
  });
});
