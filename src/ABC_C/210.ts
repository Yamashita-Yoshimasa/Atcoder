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
  const N = +input[0].split(' ')[0];
  const K = +input[0].split(' ')[1];
  const S = input[1].split(' ').map((num) => Number(num));
  const SetS = Array.from(new Set(S));
  let count = 0;
  let res = [];
  if (SetS.length == 1) {
    console.log(1);
  } else if (K == 2) {
    console.log(2);
  } else {
    while (count < N - K + 1) {
      res[count] = Array.from(new Set(S.slice(count, count + K))).length;
      count++;
      // console.log(res);
    }
    console.log(Math.max(...res));
  }
};
