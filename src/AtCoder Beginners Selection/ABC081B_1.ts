import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const N = +input[0];
const Store = input[1].split(' ');
const Count = Array(N).fill(0);
let i = 0;
let j = 0;

Store.map((num) => {
  let A = +num;
  while (A % 2 === 0) {
    j += 1;
    Count[i] = j;
    A /= 2;
  }
  j = 0;
  i += 1;
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
console.log(Count.reduce((a, b) => (a < b ? a : b)));
