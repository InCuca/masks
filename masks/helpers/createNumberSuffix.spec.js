import * as dependency from 'text-mask-addons/dist/createNumberMask';
import createNumberSuffix from './createNumberSuffix';
import {
  thousandsSeparatorSymbol,
  decimalSymbol,
} from '../decimalNumber';

describe('createNumberSuffix', () => {
  const defaultParams = {
    prefix: '',
    thousandsSeparatorSymbol,
    decimalSymbol,
  };

  it('calls createNumberMask with suffix', () => {
    dependency.default = jest.fn();
    createNumberSuffix('foo');
    expect(dependency.default).toBeCalledWith({
      ...defaultParams,
      suffix: 'foo',
      allowDecimal: true,
    });
  });

  it('calls createNumberMask with suffix and allowDecimal', () => {
    dependency.default = jest.fn();
    createNumberSuffix('foo', false);
    expect(dependency.default).toBeCalledWith({
      ...defaultParams,
      suffix: 'foo',
      allowDecimal: false,
    });
  });
});
