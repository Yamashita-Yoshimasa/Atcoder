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
  const N = input[0].split('');
  let len = N.concat().length;
  for (let i = 0; i < 4 - len; i++) {
    N.unshift('0');
  }
  console.log(N.join(''));
};
