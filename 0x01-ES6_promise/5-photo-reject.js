/**
 * Simulates the uploading of a photo with the provided filename, resulting in a rejection.
 * @param {string} filename - The name of the photo file to be uploaded.
 * @returns {Promise} - A Promise rejecting with an error indicating the file cannot be processed.
 */
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
