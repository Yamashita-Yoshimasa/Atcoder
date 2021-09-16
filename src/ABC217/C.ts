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
  const N = +input[0];
  const P = input[1].split(' ').map((num) => Number(num));
  let Q: number[] = Array(N);
  let res = '';
  for (let i = 1; i <= N; i++) {
    Q[P[i - 1]] = i;
  }

  for (let i = 1; i <= N; i++) {
    if (i == 1) {
      res += Q[P[i - 1]];
    } else {
      res += ' ' + Q[P[i - 1]];
    }
  }

  console.log(res);
};
