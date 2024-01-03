/**
 * Generates an object associating a department name with its list of employees.
 * @param {string} departmentName - The name of the department.
 * @param {Array} employees - The array containing employees belonging to the department.
 * @returns {object} - An object with the department name as the key and employees as its value.
 */
export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}
