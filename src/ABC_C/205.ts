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
  const A = Number(input[0].split(' ')[0]);
  const B = Number(input[0].split(' ')[1]);
  const C = Number(input[0].split(' ')[2]);

  if (C % 2 == 0) {
    if (Math.abs(A) > Math.abs(B)) {
      console.log('>');
    } else if (Math.abs(A) < Math.abs(B)) {
      console.log('<');
    } else if (Math.abs(A) == Math.abs(B)) {
      console.log('=');
    }
  } else {
    if (A == 0) {
      if (B > 0) {
        console.log('<');
      } else if (B < 0) {
        console.log('>');
      } else if (B == 0) {
        console.log('=');
      }
    } else if (B == 0) {
      if (A > 0) {
        console.log('<');
      } else if (A < 0) {
        console.log('>');
      } else if (A == 0) {
        console.log('=');
      }
    } else if (A > 0 && B < 0) {
      console.log('>');
    } else if (A < 0 && B > 0) {
      console.log('<');
    } else if (A > 0 && B > 0) {
      if (A > B) {
        console.log('>');
      } else if (A < B) {
        console.log('<');
      } else if (A == B) {
        console.log('=');
      }
    } else if (A < 0 && B < 0) {
      if (A > B) {
        console.log('>');
      } else if (A < B) {
        console.log('<');
      } else if (A == B) {
        console.log('=');
      }
    }
  }
};
