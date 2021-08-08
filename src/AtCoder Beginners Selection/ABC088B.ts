import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const N = +input[0].split(' ')[0];
const list = input[1].split(' ').map((num) => Number(num));
let point: number[] = [0, 0];

list.sort((a, b) => b - a);

for (let i = 0; i < N; i++) {
  if (i % 2 == 0) {
    point[0] += list[i];
  } else {
    point[1] += list[i];
  }
}
console.log(point[0] - point[1]);
