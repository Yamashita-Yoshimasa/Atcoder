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
  const X = +input[0];
  if (X >= 90) {
    console.log('expert');
  } else if (X >= 70 && X < 90) {
    console.log(90 - X);
  } else if (X >= 40 && X < 70) {
    console.log(70 - X);
  } else if (X >= 0 && X < 40) {
    console.log(40 - X);
  }
};
