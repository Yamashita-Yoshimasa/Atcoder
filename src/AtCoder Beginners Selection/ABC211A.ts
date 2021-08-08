import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
const A = +input[0];
const B = +input[1];

console.log((A - B) / 3 + B);
