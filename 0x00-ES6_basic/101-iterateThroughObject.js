/**
 * Joins the elements of an array obtained from an iterator object into a string separated by '|' delimiter.
 * @param {Array} reportWithIterator - The array obtained from an iterator object.
 * @returns {string} - A string joined from the elements of the iterator's array using '|' as the separator.
 */
export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.join(' | ');
}
