import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

const N = +input[0];
let mochi: number[] = Array(N).fill(0);
let count = 1;

for (let i = 0; i < N; i++) {
  mochi[i] = +input[i + 1];
}

mochi.sort((a, b) => a - b);
for (let i = 1; i < N; i++) {
  if (mochi[i - 1] != mochi[i]) {
    count++;
  }
}

console.log(count);
