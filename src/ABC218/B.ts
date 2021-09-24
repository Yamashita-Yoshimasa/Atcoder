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
  const c = 'a'.charCodeAt(0);
  const Alphabet = Array.apply(null, new Array(26)).map((v, i) => {
    return String.fromCharCode(c + i);
  });

  const P = input[0].split(' ').map((num) => Number(num));
  let res: string = '';

  for (let i = 0; i < P.length; i++) {
    res = res + String(Alphabet[P[i] - 1]);
  }
  console.log(res);
};
