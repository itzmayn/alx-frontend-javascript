/**
 * Computes the total sum considering an initial value and two distinct expansion factors.
 * @param {number} initialNumber - The initial numerical value.
 * @param {number} expansion1989 - Additional value for the year 1989 (default: 89).
 * @param {number} expansion2019 - Additional value for the year 2019 (default: 19).
 * @returns {number} - The summation of the initial number, expansion1989, and expansion2019.
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
