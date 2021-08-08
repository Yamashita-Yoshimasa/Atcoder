import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
console.log(input);

const a = +input[0];
const b = +input[1];

if ((a * b) % 2 === 0) {
  console.log('Even');
} else {
  console.log('Odd');
}
