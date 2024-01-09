// This function filters the list of students by a specific city/location.
function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city); // Filter students by the given city
}

export default getStudentsByLocation; // Exporting the getStudentsByLocation function
