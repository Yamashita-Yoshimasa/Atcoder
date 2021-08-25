import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('');
let count = 0;
let numlist: number[] = Array(4);
let j = 0;
for (let i = 0; i < input.length - 1; i++) {
  j++;
  numlist[i] = Number(input[i]);
  if (Number(input[i]) == Number(input[i + 1])) {
    count++;
    if (count == 4) {
      console.log('Weak');
    }
  }
}
if (j == 4) {
  let Minnum = Math.min(...numlist);

  if (numlist[0] == Minnum) {
    if (
      numlist[0] + 1 == numlist[1] &&
      numlist[1] + 1 == numlist[2] &&
      numlist[2] + 1 == numlist[3]
    ) {
      console.log('Weak');
    } else {
      console.log('Strong');
    }
  } else if (numlist[0] != Minnum) {
    if (
      numlist[0] == 7 &&
      numlist[1] == 8 &&
      numlist[2] == 9 &&
      numlist[3] == 0
    ) {
      console.log('Weak');
    } else if (
      numlist[0] == 8 &&
      numlist[1] == 9 &&
      numlist[2] == 0 &&
      numlist[3] == 1
    ) {
      console.log('Weak');
    } else if (
      numlist[0] == 9 &&
      numlist[1] == 0 &&
      numlist[2] == 1 &&
      numlist[3] == 2
    ) {
      console.log('Weak');
    } else {
      console.log('Strong');
    }
  }
}
