import { uploadPhoto, createUser } from './utils';

/**
 * Asynchronously uploads a photo and creates a user, returning their data or null if errors occur.
 * @returns {Promise<Object>} - A Promise resolving to an object containing photo and user data or null values.
 */
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return Promise.resolve({
      photo, user,
    });
  } catch (err) {
    return Promise.resolve({
      photo: null,
      user: null,
    });
  }
}
