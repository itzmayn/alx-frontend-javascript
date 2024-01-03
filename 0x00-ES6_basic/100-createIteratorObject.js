/**
 * Generates an iterator object by extracting employee information from the provided report.
 * @param {object} report - The report object containing department-wise employee information.
 * @returns {Array} - An array of employees obtained by iterating through the report's employee details.
 */
export default function createIteratorObject(report) {
  const emps = [];
  // eslint-disable-next-line
  for (const dep of Object.keys(report.allEmployees)) {
    // eslint-disable-next-line
    for (const emp of report.allEmployees[dep]) {
      emps.push(emp);
    }
  }

  return emps;
}
