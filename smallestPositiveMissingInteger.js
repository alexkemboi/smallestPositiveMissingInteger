// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here
  let largestValue = 1;
  let smallestPositiveMissingInteger = 1;
  let missingIntegers = [];
  let countMissingIntegers = 0;

  //finds the largest value in the array
  for (i = 0; i < A.length; i++) {
    if (largestValue < A[i]) {
      largestValue = A[i];
    }
  }

  if (largestValue > 0) {
    //finds missing value and adds to new array
    for (x = 1; x < largestValue + 1; x++) {
      if (!A.includes(x)) {
        missingIntegers.push(x);
        countMissingIntegers = countMissingIntegers + 1;
      }
    }
    if (countMissingIntegers > 0) {
      smallestPositiveMissingInteger = missingIntegers[0];
      //finds the smallest value from the new array with missing values
      for (b = 0; b < missingIntegers.length; b++) {
        if (smallestPositiveMissingInteger >= missingIntegers[b]) {
          smallestPositiveMissingInteger = missingIntegers[b];
        }
      }
    } else {
      smallestPositiveMissingInteger = A[A.length - 1] + 1;
    }
  } else {
    smallestPositiveMissingInteger = 1;
  }
  return smallestPositiveMissingInteger;
}
let A = [1,2,3];
console.log(solution(A));
