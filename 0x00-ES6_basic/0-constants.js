/**
 * Retrieves a task statement that prioritizes the use of 'const' when possible.
 * @returns {string} - The task statement expressing a preference for 'const'.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Provides a string indicating something is considered acceptable.
 * @returns {string} - The statement signifying something is okay.
 */
export function getLast() {
  return ' is okay';
}

/**
 * Creates a combined statement by appending 'let' with the 'is okay' string.
 * @returns {string} - The concatenated statement involving 'let' and 'is okay'.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
