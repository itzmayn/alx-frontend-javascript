// Function: getListStudentIds
// Description: This function takes a list of students and returns an array containing only their IDs.
const getListStudentIds = (listStudents) => {
  let listStudentIds = [];

  // Check if the input is an array
  if (!(listStudents instanceof Array)) {
    return listStudentIds; // Return an empty array if the input is not an array
  }

  // Extracts IDs of students using the map function
  listStudentIds = listStudents.map((student) => student.id);

  return listStudentIds; // Return the array of student IDs
};

export default getListStudentIds; // Exporting the getListStudentIds function
