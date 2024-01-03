/* eslint-disable */
/**
 * Creates a Promise that resolves to a success response or rejects with an error based on the success parameter.
 * @param {boolean} success - A boolean indicating whether the API call should be successful (true) or fail (false).
 * @returns {Promise} - A Promise that resolves to a success response or rejects with an error message.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
        body: "Success",
      });
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
}
