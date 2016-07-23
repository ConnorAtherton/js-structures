export default class Binary {
  static toDecimal(binary) {
    //
    // Guard against non binary numbers
    //
    if (!/\b[01]+\b/.test(binary)) {
      return 0;
    }

    //
    // NOTE: need to reverse to fetch the least significant bit first
    // NOTE: ** is an ES7 feature
    //
    return binary.split('').reverse().reduce((acc, bit, i) => {
      return (Number(bit) === 1) ? acc + (2 ** i) : acc;
    }, 0)
  }

  constructor(binary) {
    this._binary = binary;
  }

  toDecimal() {
    return Binary.toDecimal(this._binary);
  }
}
