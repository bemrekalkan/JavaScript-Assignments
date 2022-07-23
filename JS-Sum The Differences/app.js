//!Your task is to sum the differences between consecutive pairs in the array in descending order.[2, 1, 10]  -->  9
//!In descending order: [10, 2, 1]

//!Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

//!If the array is empty or the array has only one element the result should be 0(Nothing in Haskell).

console.log(`Your task is to sum the differences between consecutive pairs in the array in descending order.
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).`);
console.log(`***********************`);

// const sortedArr = newArr.sort((a, b) => a - b);
//? verilen bir listeyi artan sırada sıralamak için bunu kullandık!!!
// console.log(sortedArr);

function sumOfDifferences(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  if (arr.length == 0 || arr.length == 1) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      let w = sortedArr[i] - sortedArr[i + 1];
      sum += w;
    }
    return sum;
  }
}

const newArr = [11, 2, 1, 8, 5, 7];
console.log(sumOfDifferences(newArr));

//********************************************** */
