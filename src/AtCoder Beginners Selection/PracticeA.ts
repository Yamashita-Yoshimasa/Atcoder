import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const a = +input[0].split(' ')[0];
const b = +input[1].split(' ')[0];
const c = +input[1].split(' ')[1];
const text = input[2];

console.log(a + b + c, text);
