import Building from './5-building';

/**
 * A subclass SkyHighBuilding inheriting from the Building class.
 */
class SkyHighBuilding extends Building {
  /**
   * Instantiates a new SkyHighBuilding object.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * Retrieves the number of floors in the building.
   * @returns {number} - The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Generates an evacuation warning message for the SkyHighBuilding.
   * @returns {string} - The evacuation warning message for the building.
   */
  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}

export default SkyHighBuilding;
