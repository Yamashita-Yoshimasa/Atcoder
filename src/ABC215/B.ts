import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');

const N = BigInt(input[0]);
let k = 0;

if (N == BigInt(1)) {
  console.log(0);
} else {
  while (N >= BigInt(Math.pow(2, k))) {
    console.log(BigInt(Math.pow(2, k)));
    k++;
  }
  console.log(k - 1);
}
