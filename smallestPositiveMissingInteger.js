let A = [1, 3, 2, 1, 4, 5, 0, 8];
function solution(A) {
  let largestValue = 1;
  let smallestPositiveMissingInteger = 1;
  let missingIntegers = [];
  for (i = 0; i < A.length; i++) {
    if (largestValue < A[i]) {
      largestValue = A[i];
    }
  }

  for (x = 0; x < largestValue; x++) {
    if (A.includes(x)) {
      // console.log("not missing");
    } else {
      missingIntegers.push(x);
    }
  }
  for (b = 0; b < missingIntegers.length; b++) {
    smallestPositiveMissingInteger = missingIntegers[0];
    if (smallestPositiveMissingInteger >= missingIntegers[b]) {
      smallestPositiveMissingInteger = missingIntegers[b];
    }
  }

  console.log(smallestPositiveMissingInteger);
}
solution(A);
