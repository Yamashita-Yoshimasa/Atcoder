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
  const N = Number(input[0]);
  const A = input[1].split(' ').map((num) => Number(num));
  const B = input[2].split(' ').map((num) => Number(num));
  const C = input[3].split(' ').map((num) => Number(num));
  C.sort((a, b) => a - b);
  let MapB = new Map();
  let SetC = new Set(C);
  let ans = 0;
  for (let i = 0; i < N; i++) {
    MapB.set(`${B[i]}_${i}`, i);
  }

  for (let i = 0; i < N; i++) {
    if (SetC.has(MapB.get(A[i]))) {
      ans++;
      for (let j = 0; j < N; j++) {
        if (C[j] == C[j + 1]) ans++;
      }
    }
  }
  console.log(ans);
};
