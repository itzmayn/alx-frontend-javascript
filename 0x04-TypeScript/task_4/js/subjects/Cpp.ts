// task_4/js/subjects/Cpp.ts
namespace Subjects {
  // Extend the Teacher interface with an optional attribute for teaching C
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Implement the Cpp class extending from Subject
  export class Cpp extends Subject {
    // Method to get the requirements for Cpp
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    // Method to get the available teacher for Cpp
    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}