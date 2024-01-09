// This function updates unique items in a Map by changing their value from 1 to 100.
const updateUniqueItems = (items) => {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  
  // Loop through the Map entries and update items with value 1 to 100
  for (const [key, value] of items.entries()) {
    if (value === 1) {
      items.set(key, 100);
    }
  }
  
  return items; // Return the updated Map
};

export default updateUniqueItems; // Exporting the updateUniqueItems function
