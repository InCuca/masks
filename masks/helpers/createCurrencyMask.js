import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export default function createCurrencyMask(opts = {}) {
  const decimalSymbol = opts.decimalSymbol || '.';
  const decimalsRegex = new RegExp(`\\${decimalSymbol}([0-9]{1,2})`);
  const numberMask = createNumberMask(Object.assign({
    prefix: '$',
    includeThousandsSeparator: true,
    allowDecimal: true,
    requireDecimal: true,
    allowLeadingZeroes: false,
  }, opts));

  return (rawValue) => {
    const mask = numberMask(rawValue);
    const result = decimalsRegex.exec(rawValue);
    // In case there is only one decimal
    if (result && result[1].length < 2) {
      mask.push('0');
    } else if (!result) {
      mask.push('0');
      mask.push('0');
    }

    return mask;
  };
}
