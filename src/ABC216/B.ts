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
  let ST: string[] = Array(N);

  for (let i = 1; i <= N; i++) {
    ST[i] = input[i];
  }

  const STlen = ST.length;

  const SetSTlen = Array.from(new Set(ST)).length;
  console.log(STlen == SetSTlen ? 'No' : 'Yes');
};
