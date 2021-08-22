import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');

const S = Array.from(input[0]);
for (let i = 0; i < S.length; i++) {
  if (S[i] == 'A' || S[i] == 'C' || S[i] == 'G' || S[i] == 'T') {
    if (S[i + 1] == 'B' && S[i + 2] == 'C') {
    }
  }
}
