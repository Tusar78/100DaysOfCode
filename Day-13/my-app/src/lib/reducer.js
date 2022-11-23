const array = [1, 2, 3, 4];

const sum = array.reduce((acc, summ) => {
  return acc + summ;
}, 5);
console.log(sum);
