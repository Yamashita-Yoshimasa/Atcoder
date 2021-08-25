import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
const S = Array.from(input[0].substr(0, input[0].length - 1));
let array: number[] = Array(10).fill(100);
let maxarr = Array(100).fill(0);
let count = 0;

for (let i = 0; i < S.length; i++) {
  if (S[i] == 'A' || S[i] == 'C' || S[i] == 'G' || S[i] == 'T') {
    array[i] = i;
  }
}
if (Math.min(...array) < 100) {
  count = 1;
  for (let j = 0; j < S.length; j++) {
    if (array[j] + 1 == array[j + 1]) {
      count++;
    } else {
      maxarr[j] = count;
      count = 1;
    }
  }
}

console.log(Math.max(...maxarr));
