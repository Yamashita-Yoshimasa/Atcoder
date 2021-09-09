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
  const S = new Set(input);
  if (S.has('ABC')) {
    if (S.has('ARC')) {
      if (S.has('AGC')) {
        if (S.has('AHC')) {
        } else {
          console.log('AHC');
        }
      } else {
        console.log('AGC');
      }
    } else {
      console.log('ARC');
    }
  } else {
    console.log('ABC');
  }
};
