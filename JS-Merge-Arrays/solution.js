//! JS-CC-006 : Merge Arrays
//? Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

//! Learning Outcomes
// At the end of the this coding challenge, students will be able to;

// Analyze a problem, identify and apply programming knowledge for appropriate solution.

// Demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

//! Problem Statement
//* Write a function that takes two arrays of sorted numbers and combines them into one array as result.

//* Please note that, empty arrays to be checked to avoid exception!

//* Please take a look at the empty function and test code below:

function mergeArray(arr1, arr2) {
  if (arr1.length > 0 && arr2.length > 0) {
    return arr1.concat(arr2);
  } else if (arr1.length > 0 && arr2.length == 0) {
    return arr1;
  } else if (arr1.length == 0 && arr2.length > 0) {
    return arr2;
  } else {
    return "First array and Second array are etpy";
  }
}

const arOne = ["here", "is the", "first"];
const arTwo = ["this", "is", "second"];
console.log(mergeArray(arOne, arTwo));

const bos = [];
console.log(mergeArray(bos, arOne));
