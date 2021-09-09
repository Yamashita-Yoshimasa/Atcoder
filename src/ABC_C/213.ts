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
  Result(lines);
});

const Result = (input: string[]) => {
  const W = +input[0].split(' ')[0];
  const H = +input[0].split(' ')[1];
  const N = +input[0].split(' ')[2];
  let A: number[] = Array(N);
  let B: number[] = Array(N);
  let SortA: number[] = Array(N);
  let SortB: number[] = Array(N);

  let Rcount = 0;
  let Ccount = 0;

  for (let i = 0; i < N; i++) {
    A[i] = +input[i + 1].split(' ')[0];
    B[i] = +input[i + 1].split(' ')[1];
    SortA[i] = +input[i + 1].split(' ')[0];
    SortB[i] = +input[i + 1].split(' ')[1];
  }
  let SA = Array.from(new Set(SortA.sort((a, b) => a - b)));
  let SB = Array.from(new Set(SortB.sort((a, b) => a - b)));

  for (let i = 0; i < N; i++) {
    Rcount = 0;
    Ccount = 0;
    for (let j = 0; j < SA.length; j++) {
      if (A[i] > SA[j]) {
        Rcount++;
      } else {
        break;
      }
    }
    A[i] = 1 + Rcount;
    for (let k = 0; k < SB.length; k++) {
      if (B[i] > SB[k]) {
        Ccount++;
      } else {
        break;
      }
    }
    B[i] = 1 + Ccount;
  }

  for (let i = 0; i < N; i++) {
    console.log(`${A[i]} ${B[i]}`);
  }
};
