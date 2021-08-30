import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('');

const N = +input[0];
console.log(N);

if (N <= 125) {
  console.log(4);
} else if (N > 125 && N <= 211) {
  console.log(6);
} else {
  console.log(8);
}
