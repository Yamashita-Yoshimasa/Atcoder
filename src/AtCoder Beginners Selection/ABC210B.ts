import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
const N = +input[0];
const S = input[1].split('');

for (let i = 0; i < N; i++) {
  console.log(Number(S[i]));
  if ((i + 1) % 2 == 0 && Number(S[i]) == 1) {
    console.log('Aoki');
    break;
  } else if ((i + 1) % 2 != 0 && Number(S[i]) == 1) {
    console.log('Takahashi');
    break;
  }
}
