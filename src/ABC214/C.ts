import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

const N = +input[0];
const S = input[1].split(' ').map((num) => Number(num));
const T = input[2].split(' ').map((num) => Number(num));
const TT = T.concat(T);
const SS = S.concat(S);
let res: number[] = T.concat(T);
let result = Array(N);
for (let i = 0; i < 2 * N; i++) {
  if (TT[i] + SS[i] < TT[i + 1]) {
    TT[i + 1] = TT[i] + SS[i];
    res[i + 1] = TT[i + 1];
  }
}

for (let i = 0; i < N; i++) {
  if (res[i] < res[i + N]) {
    result[i] = res[i];
  } else {
    result[i] = res[i + N];
  }
  console.log(result[i]);
}
