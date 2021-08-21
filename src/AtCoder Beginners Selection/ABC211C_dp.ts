import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
const S = input[0].substr(0, input[0].length - 1);
const T = 'chokudai';
const culmm = S.length + 1;
const row = T.length + 1;
let dp: number[][] = [...Array(row)].map(() => Array(culmm).fill(0));
dp[0].fill(1);

for (let i = 1; i < row; i++) {
  for (let j = 1; j < culmm; j++) {
    if (S[j - 1] == T[i - 1]) {
      dp[i][j] = (dp[i][j - 1] + dp[i - 1][j - 1]) % (10 ** 9 + 7);
    } else {
      dp[i][j] = dp[i][j - 1];
    }
  }
}
console.log(dp[row - 1][culmm - 1]);
