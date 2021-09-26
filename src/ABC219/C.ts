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
  const X = input[0].split('');
  const N = +input[1];
  const S = input.slice(2);
  let OldS = Array(N).fill('');
  let MapS = new Map();
  const c = 'a'.charCodeAt(0);
  const Alphabet = Array.apply(null, new Array(26)).map((v, i) => {
    return String.fromCharCode(c + i);
  });

  for (let i = 0; i < N; i++) {
    S[i].split('').map((s) => {
      for (let j = 0; j < 26; j++) {
        if (X[j] == s) {
          OldS[i] += Alphabet[j];
        }
      }
    });
    MapS.set(OldS[i], S[i]);
  }
  OldS.sort();
  for (let i = 0; i < N; i++) {
    console.log(MapS.get(OldS[i]));
  }
};
