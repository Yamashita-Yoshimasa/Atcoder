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
  const K = Number(input[0].split(' ')[1]);
  let wallet = K;
  let AB: Array<{ A: number; B: number }> = [];

  for (let i = 0; i < N; i++) {
    AB[i] = { A: 0, B: 0 };
    [AB[i].A, AB[i].B] = input[i + 1].split(' ').map((x) => Number(x));
  }
  AB.sort((a, b) => a.A - b.A);

  for (let i = 0; i < N; i++) {
    if (wallet >= AB[i].A) {
      wallet += AB[i].B;
    } else {
      break;
    }
  }
  console.log(wallet);
};
