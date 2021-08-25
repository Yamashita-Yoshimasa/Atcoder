import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const N = +input[0].split(' ')[0];
const M = +input[0].split(' ')[1];
const A = input[1].split(' ').map((num) => Number(num));
const B = input[2].split(' ').map((num) => Number(num));

A.sort((a, b) => a - b);
B.sort((a, b) => a - b);

let i = 0;
let j = 0;
let ans = 1001001001;
while (i < N && j < M) {
  ans = Math.min(ans, Math.abs(A[i] - B[j]));
  if (A[i] < B[j]) {
    i++;
  } else {
    j++;
  }
}

console.log(ans);
