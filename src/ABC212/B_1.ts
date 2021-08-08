import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('');
const isSame =
  input[0] === input[1] && input[0] === input[2] && input[0] === input[3];
console.log(isSame);
let numlist: number[] = Array(4);

for (let i = 0; i < 4; i++) {
  numlist[i] = +input[i];
}

let Minnum = Math.min(...numlist);
let count: number[] = Array(5).fill(0);

if (
  numlist[0] == numlist[1] &&
  numlist[1] == numlist[2] &&
  numlist[2] == numlist[3]
) {
  console.log('Weak');
} else {
  count[0] = 1;
  let tmp = Minnum;
  for (let i = 1; i < 4; i++) {
    tmp = tmp + 1;
    if (tmp == numlist[i]) {
      count[i] = 1;
      count[4] += count[i];
    }
  }
  if (count[4] == 3 && Minnum == numlist[0]) {
    console.log('Weak');
  } else {
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
