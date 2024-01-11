// task_4/js/subjects/Java.ts
namespace Subjects {
  // Extend the Teacher interface with experience in teaching Java
  export interface Teacher {
    // Optional attribute indicating experience in teaching Java
    experienceTeachingJava?: number;
  }

  // Implement the Java class, a specialized Subject
  export class Java extends Subject {
    // Method to retrieve Java-specific requirements
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    // Method to check for an available teacher for Java
    getAvailableTeacher(): string {
      // If the teacher lacks experience in teaching Java, indicate unavailability
      if (!this.teacher.experienceTeachingJava) {
        return "No available teacher for Java";
      }
      // Otherwise, provide the available teacher's name
      return `Available Teacher for Java: ${this.teacher.firstName}`;
    }
  }
}