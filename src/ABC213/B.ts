import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

const N = +input[0];
const A: number[] = input[1].split(' ').map((num) => Number(num));
const AA: number[] = input[1].split(' ').map((num) => Number(num));

const sortA = AA.sort((a, b) => b - a);

for (let i = 0; i < N; i++) {
  if (sortA[1] == A[i]) {
    console.log(i + 1);
    break;
  }
}
