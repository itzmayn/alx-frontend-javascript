/**
 * Defines a ClassRoom that can accommodate a certain number of students.
 */
export default class ClassRoom {
  /**
   * Constructs a ClassRoom object with a specified maximum student capacity.
   * @param {number} maxStudentsSize - The maximum number of students the classroom can accommodate.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
