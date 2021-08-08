import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('');
const s: number[] = [];
s[0] = +input[0];
s[1] = +input[1];
s[2] = +input[2];
console.log(s[0] + s[1] + s[2]);
