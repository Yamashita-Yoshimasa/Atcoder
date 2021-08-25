import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
const S = Array.from(input[0].substr(0, input[0].length - 1));
let max = 0;
let maxarr = Array(S.length).fill(0);
let str = '';
let Prelen = 0;

for (let i = 0; i < S.length; i++) {
  if (S[i] == 'A' || S[i] == 'C' || S[i] == 'G' || S[i] == 'T') {
    max = 1;
    maxarr[i] = max;
    Prelen = str.length;
    str = '';
    str = S[i];
    for (let j = i + 1; j <= S.length; j++) {
      if (S[j] == 'A' || S[j] == 'C' || S[j] == 'G' || S[j] == 'T') {
        str += S[j];
        max = str.length;
        maxarr[i] = max;
      } else {
        break;
      }
    }
  }
}

console.log(Math.max(...maxarr));
