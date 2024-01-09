// Exporting a WeakMap instance to store endpoint data
export const weakMap = new WeakMap();

// Function to query an API endpoint and manage its load count in the WeakMap
export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) { // Check if the endpoint exists in the WeakMap
    const endpointData = weakMap.get(endpoint); // Get the endpoint's load count
    if (endpointData >= 4) {
      throw new Error('Endpoint load is high'); // Throw an error if load count is high
    }
    weakMap.set(endpoint, (endpointData + 1)); // Increment the endpoint's load count
  } else {
    weakMap.set(endpoint, 1); // Set initial load count for the endpoint
  }
};
