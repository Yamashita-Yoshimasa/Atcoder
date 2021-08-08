import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');

const A = +input[0];
const B = +input[1];

const c = A ^ B;
console.log(c);

// const A = Number(input[0]).toString(2);
// const B = Number(input[1]).toString(2);

// const rev = (s: string) => {
//   let rv = '';
//   for (let i = 0, n = s.length; i < n; i++) {
//     rv += s[n - i - 1];
//   }
//   return rv;
// };

// const revA = Array.from(rev(A));
// const revB = Array.from(rev(B));

// let len = 0;
// if (A.length >= B.length) {
//   len = A.length;
// } else {
//   len = B.length;
// }

// let revC: string = '';
// for (let i = 0; i < len; i++) {
//   if (Number(revA[i]) - Number(revB[i]) == 0) {
//     revC += '0';
//   } else {
//     revC += '1';
//   }
// }

// console.log(parseInt(rev(revC), 2));
