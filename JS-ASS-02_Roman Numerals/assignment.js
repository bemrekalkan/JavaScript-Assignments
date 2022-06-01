//! JS-CC-005 : Roman Numerals
//? Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

// Example:

// 1000=M 900=CM 90=XC

// 2008 is written as MMVIII:

// 2000=MM 8=VIII

console.log(`******`);

function toRoman(number) {
  let romanNumber = "";
  let romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (let key in romanNumbers) {
    while (number >= romanNumbers[key]) {
      romanNumber += key;
      number -= romanNumbers[key];
    }
  }
  return romanNumber;
}

console.log(toRoman(1453));
