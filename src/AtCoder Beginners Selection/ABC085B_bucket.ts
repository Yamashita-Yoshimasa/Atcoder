// import * as fs from 'fs';

// const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

// const N = +input[0];
// let bucket: number[] = Array(101).fill(0);
// let count = 0;

// for (let i = 0; i < N; i++) {
//   bucket[Number(input[i + 1])] = Number(input[i + 1]);
// }

// for (let i = 0; i <= 100; i++) {
//   if (bucket[i]) {
//     count++;
//   }
// }

// console.log(count);

import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const n = +input[0];
const a = [...Array(n)].map((a, i, b) => +input[++i]);
const array = Array.from(new Set([...Array(n)].map((a, i, b) => +input[++i])));
console.log(a);
