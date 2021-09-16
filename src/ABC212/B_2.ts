import * as fs from 'fs';
const lines = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const input = lines[0].split('').map((s) => Number.parseInt(s));

const isSame =
  input[0] === input[1] && input[0] === input[2] && input[0] === input[3];
let isFollowed = true;
for (let i = 0; i < input.length - 1; i++) {
  if ((input[i] + 1) % 10 !== input[i + 1] % 10) {
    isFollowed = false;
  }
}
if (isSame || isFollowed) {
  console.log('Weak');
} else {
  console.log('Strong');
}
