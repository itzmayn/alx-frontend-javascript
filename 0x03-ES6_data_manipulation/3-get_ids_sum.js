/*
  Function: getStudentIdsSum
  Description: Calculates the sum of student IDs in an array of student objects.
  Parameters:
    - students: Array of student objects
  Returns:
    - The sum of student IDs
*/
const getStudentIdsSum = (students) => students.reduce((preVal, cur) => preVal + cur.id, 0);

export default getStudentIdsSum; // Exporting the getStudentIdsSum function
