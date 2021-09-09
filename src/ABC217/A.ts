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
  const Sort = input[0].split(' ').sort();
  console.log(Sort[0] == input[0].split(' ')[0] ? 'Yes' : 'No');
};
