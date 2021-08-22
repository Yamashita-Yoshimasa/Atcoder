import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');

const S = input[0];
const N = +input[1];
const str = Array.from(S);

function permute(permutation: string[]) {
  let length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

const Pre = permute(str);
let array = Array(Pre.length);
for (let i = 0; i < Pre.length; i++) {
  let z: string = '';
  Pre[i].map((s) => {
    z += s;
    array[i] = z;
  });
}
const SetPre = new Set(array);
console.log(Array.from(SetPre).sort()[N - 1]);
