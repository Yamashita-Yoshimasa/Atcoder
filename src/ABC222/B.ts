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
  const P = Number(input[0].split(' ')[1]);
  const A = input[1].split(' ').map((num) => Number(num));
  let ans = 0;

  for (let i = 0; i < N; i++) {
    if (A[i] < P) ans++;
  }
  console.log(ans);
};
