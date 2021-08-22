import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
const N = +input[0];
let count = 0;

for (let i = 1; i < 10; i++) {
  if (N % i == 0 && N / i < 10) {
    count++;
    break;
  }
}
if (count > 0) {
  console.log('Yes');
} else {
  console.log('No');
}
