import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
const N = +input[0];
let count = 0;

for (let i = 1; i <= N; i++) {
  if (String(i).length % 2 != 0) {
    count++;
  }
}
console.log(count);
