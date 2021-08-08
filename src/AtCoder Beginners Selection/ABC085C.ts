import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
const N = +input[0];
const Y = +input[1];
let a = -1;
let b = -1;
let c = -1;

N_loop: for (let i = 0; i <= N; i++) {
  for (let k = 0; k <= N; k++) {
    let j = N - i - k;
    let total = i * 10000 + k * 5000 + j * 1000;
    if (total == Y && i + k + j == N && j >= 0) {
      a = i;
      b = k;
      c = j;
      break N_loop;
    }
  }
}

console.log(`${a} ${b} ${c}`);
