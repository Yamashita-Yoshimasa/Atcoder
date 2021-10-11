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
  let A = new Map();
  let copyA = new Map();
  let p: number[] = Array(N);
  let len = String(N * 2).length;
  const GCP = new Map([
    ['GG', 0],
    ['GC', 1],
    ['GP', 0],
    ['CG', 0],
    ['CC', 0],
    ['CP', 1],
    ['PG', 1],
    ['PC', 0],
    ['PP', 0],
  ]);

  for (let i = 0; i < 2 * N; i++) {
    A.set(i, input[i + 1]);
    copyA.set(i, input[i + 1]);
    p[i] = (2 * N - i) / 10 ** len;
  }

  for (let i = 0; i < M; i++) {
    let match1 = '';
    let match2 = '';

    for (let j = 1; j < 2 * N; j++) {
      if (2 * j - 1 < 2 * N) {
        match1 = A.get(2 * j - 2).split('')[i] + A.get(2 * j - 1).split('')[i];
        match2 = A.get(2 * j - 1).split('')[i] + A.get(2 * j - 2).split('')[i];
        p[2 * j - 2] += Number(GCP.get(match1));
        p[2 * j - 1] += Number(GCP.get(match2));
      }
    }
    p.sort((a, b) => b - a);
    for (let k = 0; k < 2 * N; k++) {
      A.set(k, copyA.get(2 * N - Number(p[k].toFixed(len).split('.')[1])));
    }
  }
  const ans: number[] = p.map(
    (num) => 2 * N + 1 - Number(num.toFixed(len).split('.')[1]),
  );
  console.log(ans.join('\n'));
};
