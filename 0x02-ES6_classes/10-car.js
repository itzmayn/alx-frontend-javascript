/**
 * Represents a Car with brand, motor, and color properties.
 */
export default class Car {
  /**
   * Creates a new instance of Car.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor type of the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Retrieves the Symbol.species property of the Car class.
   * @returns {Function} - The Symbol.species property of the class.
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Clones a Car instance using the Symbol.species property.
   * @returns {Car} - A new instance of the Car class.
   */
  cloneCar() {
    const ModelCar = this.constructor[Symbol.species];
    return new ModelCar();
  }
}
