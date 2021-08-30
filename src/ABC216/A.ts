import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('.');

const X = +input[0];
const Y = +input[1];

if (Y >= 0 && Y <= 2) {
  console.log(`${X}-`);
} else if (Y >= 3 && Y <= 6) {
  console.log(`${X}`);
} else if (Y >= 7 && Y <= 9) {
  console.log(`${X}+`);
}
