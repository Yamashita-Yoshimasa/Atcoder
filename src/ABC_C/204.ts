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
  const N = Number(input[0].split(' ')[0]);
  const M = Number(input[0].split(' ')[1]);

  let count: number[] = Array(N);
  let point: number[] = Array(N);
  let start: number[] = Array(N);
  let end: number[] = Array(N);

  let ans = N;

  if (M == 0) console.log(ans);
  else {
    for (let i = 0; i < N; i++) {
      start[i] = Number(input[i + 1].split(' ')[0]);
      end[i] = Number(input[i + 1].split(' ')[1]);
    }
  }
};
