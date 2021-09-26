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
  const N = BigInt(input[0].split(' ')[0]);
  const K = BigInt(input[0].split(' ')[1]);
  const C = input[1].split(' ').map((num) => Number(num));
  const SortC = C.concat().sort((a, b) => a - b);
  let MapC = new Map();
  let res: (number | BigInt)[] = Array(Number(N)).fill(0);

  for (let i = 0; i < N; i++) {
    MapC.set(C[i], i);
  }

  if (N > K) {
    for (let i = 0; i < K; i++) {
      res[MapC.get(SortC[i])] = 1;
    }
  } else {
    res.fill(K / N);
    for (let i = 0; i < K % N; i++) {
      res[MapC.get(SortC[i])] = K / N + BigInt(1);
    }
  }
  console.log(res.join('\n'));
};
