let list = [];
let counter = 0;

let countDigits = (d, l, u) => {
  for (let i = l; i < u + l; i++) {
    list.push(i);
  }
  console.log(list);
  list.forEach((sayi) => {
    if (sayi.toString().includes(d)) {
      counter += 1;
    }
  });
  return `${d} repeated ${counter} times`;
};
console.log(countDigits(2, 1, 10));
