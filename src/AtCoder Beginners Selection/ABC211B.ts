import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const list: string[] = ['H', '2B', '3B', 'HR'];
let countArray: number[] = Array(4);

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    if (input[i] == list[j]) {
      countArray[j] = 1;
    } else {
      continue;
    }
  }
}

let count = countArray.reduce(function (sum, element) {
  return sum + element;
}, 0);

if (count == 4) {
  console.log('Yes');
} else {
  console.log('No');
}
