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
  const S = input;
  const T = input[3].split('').map((num) => Number(num));
  let res = '';

  for (let i = 0; i < T.length; i++) {
    res += S[T[i] - 1];
  }
  console.log(res);
};
