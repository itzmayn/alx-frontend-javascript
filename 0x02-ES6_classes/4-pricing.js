import Currency from './3-currency';

/**
 * Represents a Pricing object containing price amount and associated currency.
 */
export default class Pricing {
  /**
   * Initializes a new Pricing instance.
   * @param {number} amount - The price amount.
   * @param {Currency} currency - The currency object associated with the price.
   * @throws {TypeError} - Throws an error if arguments don't meet the expected types.
   */
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Retrieves the price amount.
   * @returns {number} - The price amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Retrieves the associated currency object.
   * @returns {Currency} - The currency object associated with the price.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets a new amount for the price.
   * @param {number} amount - The new amount to be set for the price.
   * @throws {TypeError} - Throws an error if the argument is not a number.
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  /**
   * Sets a new currency for the price.
   * @param {Currency} currency - The new currency object to be set for the price.
   * @throws {TypeError} - Throws an error if the argument is not an instance of Currency.
   */
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }
    this._currency = currency;
  }

  /**
   * Returns a string with the price amount and associated currency information.
   * @returns {string} - A formatted string containing the amount, currency name, and code.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Converts a price based on a conversion rate.
   * @param {number} amount - The amount of the price to be converted.
   * @param {number} conversionRate - The conversion rate to apply.
   * @returns {number} - The converted price.
   * @throws {TypeError} - Throws an error if arguments don't meet the expected types.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }

    return amount * conversionRate;
  }
}
