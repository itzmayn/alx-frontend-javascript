// This function creates an Int8 typed array and sets a value at a specified position.
const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length); // Create a buffer of specified length
  const int8Array = new Int8Array(buffer); // Create an Int8Array from the buffer
  if (position > int8Array.length) throw new Error('Position outside range'); // Check if position is within the array's range
  int8Array[position] = value; // Set the value at the specified position in the Int8Array
  return new DataView(buffer); // Return a DataView of the buffer
};

export default createInt8TypedArray; // Exporting the createInt8TypedArray function
