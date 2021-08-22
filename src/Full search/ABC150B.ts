import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const N = +input[0];
const S = input[1];
const str = Array.from(S);
let count = 0;

for (let i = 0; i < N; i++) {
  if (str[i] == 'A') {
    if (str[i + 1] == 'B' && str[i + 2] == 'C') {
      count++;
    }
  }
}
console.log(count);
