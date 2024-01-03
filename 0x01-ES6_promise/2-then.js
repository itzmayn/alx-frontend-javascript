/* eslint-disable */
/**
 * Manages the response from an API Promise, returning a success response, handling errors, and logging a final message.
 * @param {Promise} promise - A Promise object received from an API call.
 * @returns {Promise} - A Promise that resolves to a success response, handles errors, and logs a final message.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
