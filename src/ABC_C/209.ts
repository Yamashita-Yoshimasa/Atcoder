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
  const C = input[1].split(' ').map((num) => Number(num));
  let res = BigInt(1);

  C.sort((a, b) => a - b);
  for (let i = 0; i < N; i++) {
    res *= BigInt(Math.max(0, C[i] - i));
    res %= BigInt(1000000007);
  }
  console.log(Number(res));
};
