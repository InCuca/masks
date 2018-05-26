import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import {
  thousandsSeparatorSymbol,
  decimalSymbol,
} from '../decimalNumber';

export default function (suffix, allowDecimal = true) {
  return createNumberMask({
    prefix: '',
    suffix,
    thousandsSeparatorSymbol,
    allowDecimal,
    decimalSymbol,
  });
}
