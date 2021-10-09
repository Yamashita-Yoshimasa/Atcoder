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
  const N = input[0].split('').map((num) => Number(num));
  N.sort((a, b) => b - a);
  let A: number[] = [];
  let B: number[] = [];
  let a = 0;
  let b = 0;
  for (let i = 0; i < N.length; i++) {
    if (i % 2 != 0) {
      A[a] = N[i];
      a++;
    } else if (i % 2 == 0 && b < N.length) {
      B[b] = N[i];
      b++;
    }
  }
  for (let i = 0; i < A.length; i++) {
    if (A[i] != B[i]) {
      let tmp = 0;
      tmp = A.concat()[i];
      A[i] = B[i];
      B[i] = tmp;
      break;
    }
  }

  console.log(Number(A.join('')) * Number(B.join('')));
};
