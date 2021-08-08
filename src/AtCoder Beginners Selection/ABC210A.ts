import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');

const N = +input[0];
const A = +input[1];
const X = +input[2];
const Y = +input[3];
let price: number = 0;

for (let i = 1; i <= N; i++) {
  if (i <= A) {
    price = price + X;
  } else price = price + Y;
}

console.log(price);
