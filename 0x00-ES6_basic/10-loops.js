/**
 * Appends a string to each value in the input array and modifies the original array.
 * @param {Array} array - The input array to which the string will be appended.
 * @param {string} appendString - The string to append to each value in the array.
 * @returns {Array} - The modified input array with the string appended to each value.
 */
export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line
  for (const value of array) {
    // eslint-disable-next-line
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
