// task_4/js/subjects/React.ts
namespace Subjects {
  // Extend the Teacher interface with an optional attribute for teaching React
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Implement the React class extending from Subject
  export class React extends Subject {
    // Method to get the requirements for React
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    // Method to get the available teacher for React
    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingReact) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
