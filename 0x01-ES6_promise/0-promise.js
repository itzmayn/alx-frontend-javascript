/**
 * Returns a Promise that does not resolve or reject, resulting in a pending Promise indefinitely.
 * @returns {Promise} - A Promise that doesn't complete (neither resolves nor rejects).
 */
export default function getResponseFromAPI() {
  return new Promise(() => {});
}
