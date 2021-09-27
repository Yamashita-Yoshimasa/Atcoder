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
  const C = +input[0].split(' ')[2];
  let res = C;

  if (C > B) {
    console.log(-1);
  } else {
    for (let i = 1; i < 100000000; i++) {
      res = res * i;
      if (res > 1000) {
        console.log(-1);
        break;
      } else {
        if (res >= A && res <= B) {
          console.log(res);
          break;
        }
      }
    }
  }
};
