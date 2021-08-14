import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');

const S = +input[0];
const T = +input[1];
let count = 0;
for (let i = 0; i <= 100; i++) {
  for (let j = 0; j <= 100; j++) {
    for (let k = 0; k <= 100; k++) {
      if (i + j + k <= S) {
        if (i * j * k <= T) {
          count++;
        }
      }
    }
  }
}
console.log(count);
