// import * as fs from 'fs';

// const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

import { maxHeaderSize } from 'http';
import { createInterface } from 'readline';

// 入出力
let lines: string[] = [];
const reader = createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on('line', function (line: string) {
  lines.push(line);
});
reader.on('close', function () {
  DpRsult(lines);
});

const DpRsult = (input: string[]) => {
  const N = Number(input[0].split(' ')[0]);
  const W = Number(input[0].split(' ')[1]);
  let value: number[] = Array(N);
  let weight: number[] = Array(N);
  let dp: number[][] = [];

  for (let i = 0; i < N; i++) {
    value[i] = +input[i + 1].split(' ')[0];
    weight[i] = +input[i + 1].split(' ')[1];
  }
  dp = new Array(N);
  for (let i = 0; i < N + 1; i++) {
    dp[i] = new Array(W);
    for (let w = 0; w <= W; w++) {
      dp[i][w] = 0;
    }
  }

  for (let i = 0; i < N; i++) {
    for (let w = 0; w <= W; w++) {
      if (w - weight[i] >= 0) {
        dp[i + 1][w] = Math.max(dp[i][w - weight[i]] + value[i], dp[i][w]);
      } else {
        dp[i + 1][w] = dp[i][w];
      }
    }
  }
  console.log(dp[N][W]);
};
