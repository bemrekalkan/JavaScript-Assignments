function printKMax(arr, k) {
  let newList = [];
  let j, max;

  for (let i = 0; i <= arr.length - k; i++) {
    max = arr[i];

    for (j = 1; j < k; j++) {
      if (arr[i + j] > max) max = arr[i + j];
    }
    newList.push(max);
  }
  console.log(newList);
}

let arr = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
printKMax(arr, k);
