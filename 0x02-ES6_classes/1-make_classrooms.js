import ClassRoom from './0-classroom';

/**
 * Initializes and returns an array of ClassRoom objects with specified maximum student sizes.
 * @returns {Array<ClassRoom>} - An array containing initialized ClassRoom objects.
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
