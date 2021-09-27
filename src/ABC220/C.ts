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
  const N = BigInt(input[0]);
  const A = input[1].split(' ').map((num) => BigInt(num));
  const X = BigInt(input[2]);
  const SumA = A.reduce((accumulator, curr) => accumulator + curr);
  const tmp = BigInt(String(X / SumA).split('.')[0]);
  let res = tmp * SumA;

  for (let i = 0; i < N; i++) {
    res += A[i];
    if (res > X) {
      console.log(String(N * tmp + BigInt(i) + BigInt(1)));
      break;
    }
  }
};
