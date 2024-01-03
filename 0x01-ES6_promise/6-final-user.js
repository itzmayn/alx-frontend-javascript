/**
 * Handles user signup and photo upload, tracking their completion status and returned values.
 * @param {string} firstName - The first name of the user for signup.
 * @param {string} lastName - The last name of the user for signup.
 * @param {string} fileName - The name of the photo file to be uploaded.
 * @returns {Promise<Array>} - A Promise resolving to an array containing signup and photo upload status.
 */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userData = await signUpUser(firstName, lastName)
    .then((data) => ({
      status: 'fulfilled',
      value: data,
    }))
    .catch((error) => ({
      status: 'rejected',
      value: error.toString(),
    }));

  const fileData = await uploadPhoto(fileName)
    .then((data) => ({
      status: 'fulfilled',
      value: data,
    }))
    .catch((error) => ({
      status: 'rejected',
      value: error.toString(),
    }));

  return Promise.resolve([userData, fileData]);
}
