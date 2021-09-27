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
  const K = +input[0];
  const A = input[1]
    .split(' ')[0]
    .split('')
    .map((num) => Number(num));
  const B = input[1]
    .split(' ')[1]
    .split('')
    .map((num) => Number(num));

  let Ad = 0;
  let Bd = 0;

  for (let i = 1; i <= A.length; i++) {
    Ad += A[A.length - i] * K ** (i - 1);
  }
  for (let i = 1; i <= B.length; i++) {
    Bd += B[B.length - i] * K ** (i - 1);
  }
  console.log(Ad * Bd);
};
