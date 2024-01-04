/**
 * Represents a HolbertonClass with size and location properties.
 */
export default class HolbertonClass {
  /**
   * Creates a new instance of HolbertonClass.
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   * @throws {TypeError} - Throws an error if arguments don't meet the expected types.
   */
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    } else if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  /**
   * Customizes the conversion of HolbertonClass instance to primitive value based on hint.
   * @param {string} hint - The conversion hint ('string' or 'number').
   * @returns {number|string} - The size or location based on the hint provided.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    return this._location;
  }
}
