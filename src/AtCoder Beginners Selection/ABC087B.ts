/* eslint-disable no-plusplus */
import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const A = +input[0];
const B = +input[1];
const C = +input[2];
const X = +input[3];
let Count = 0;

// for (let i = 0; i <= A; i++) {
//   if (X - i * 500 < 0) {
//     break;
//   }
//   for (let j = 0; j <= B; j++) {
//     if (X - j * 100 < 0) {
//       break;
//     }
//     for (let k = 0; k <= C; k++) {
//       if (X - i * 500 - j * 100 - k * 50 === 0) {
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         Count++;
//       } else if (X - k * 50 < 0) {
//         break;
//       }
//     }
//   }
// }

for (let i = 0; i <= A; i++) {
  if (i * 500 > X) {
    break;
  }
  for (let j = 0; j <= B; j++) {
    if (j * 100 > X) {
      break;
    }
    for (let k = 0; k <= C; k++) {
      if (i * 500 + j * 100 + k * 50 === X) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Count++;
      } else if (k * 50 > X) {
        break;
      }
    }
  }
}

console.log(Count);
