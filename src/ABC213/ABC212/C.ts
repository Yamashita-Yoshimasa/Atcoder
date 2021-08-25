import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const N = +input[0].split(' ')[0];
const M = +input[0].split(' ')[1];
const A = input[1].split(' ').map((num) => Number(num));
const B = input[2].split(' ').map((num) => Number(num));
let CurrentMin = 0;
let Min = 10 ** 9;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    CurrentMin = Math.abs(A[i] - B[j]);
    if (Min > CurrentMin) {
      Min = CurrentMin;
    }
  }
}
console.log(Min);
