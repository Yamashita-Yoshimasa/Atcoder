import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
const N = +input[0];
const A = +input[1];
const B = +input[2];
let total = 0;

const findSumOfDigits = (n: number) => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
    // console.log(n);
    // console.log(sum);
  }
  return sum;
};

for (let i = 1; i <= N; i++) {
  let sum = findSumOfDigits(i);

  if (A <= sum && sum <= B) {
    total += i;
  }
}

console.log(total);
