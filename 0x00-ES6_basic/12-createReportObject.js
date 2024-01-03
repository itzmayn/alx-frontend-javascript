/**
 * Creates a report object containing all employees and a method to get the number of departments.
 * @param {object} employeesList - An object containing department-wise employee information.
 * @returns {object} - A report object with all employees and a function to get the number of departments.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(empList) {
      return Object.keys(empList).length;
    },
  };
}
