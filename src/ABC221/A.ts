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
  const A = +input[0].split(' ')[0];
  const B = +input[0].split(' ')[1];

  if(A==B) console.log(1)
  else console.log( 32 ** (A - B) )
};
