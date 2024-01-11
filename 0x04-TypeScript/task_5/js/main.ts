// task_5/js/main.ts

// Define the MajorCredits interface
interface MajorCredits {
  // Number of major credits
  credit: number;
  // Brand property to uniquely identify MajorCredits
  _brand: "Major";
}

// Define the MinorCredits interface
interface MinorCredits {
  // Number of minor credits
  credit: number;
  // Brand property to uniquely identify MinorCredits
  _brand: "Minor";
}

// Function to sum major credits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  // Calculate the sum of major credits
  const sum = subject1.credit + subject2.credit;
  
  // Create and return a new MajorCredits object
  const obj: MajorCredits = {
    credit: sum,
    _brand: "Major",
  };

  return obj;
}

// Function to sum minor credits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  // Calculate the sum of minor credits
  const sum = subject1.credit + subject2.credit;
  
  // Create and return a new MinorCredits object
  const obj: MinorCredits = {
    credit: sum,
    _brand: "Minor",
  };

  return obj;
}
