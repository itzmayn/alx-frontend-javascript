/**
 * Defines an Electric Vehicle (EV) Car that extends the Car class.
 */
import Car from './10-car';

class EVCar extends Car {
  constructor(brand = '', motor = '', color = '', range = '') {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
  
}

export default EVCar;
