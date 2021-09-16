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
  const S = input[1].split('').map((num) => Number(num));

  for (let i = 0; i < N; i++) {
    if (S[i] == 1 && (i + 1) % 2 == 0) {
      console.log('Aoki');
      break;
    } else if (S[i] == 1 && (i + 1) % 2 != 0) {
      console.log('Takahashi');
      break;
    }
  }
};
