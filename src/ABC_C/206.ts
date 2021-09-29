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
  const N = Number(input[0]);
  const A = input[1].split(' ').map((num) => Number(num));
  const SortA = A.concat().sort((a, b) => a - b);
  let ans = (N * (N - 1)) / 2;

  // indexOfで重複した数値の数をカウント
  // 配列の全ての要素を確認するため計算時間が2s超過
  //   let StartIndex = 0;
  //   let lastIndex = 0;
  //   for (let i = 0; i < SetA.length; i++) {
  //     let Duplication = 0;
  //     StartIndex = SortA.indexOf(SetA[i]);
  //     lastIndex = SortA.lastIndexOf(SetA[i]);
  //     if (StartIndex != lastIndex) {
  //       Duplication += lastIndex - StartIndex + 1;
  //       let Sum = (Duplication * (Duplication - 1)) / 2;
  //       All -= Sum;
  //     }
  //   }
  let cnt: number = 1;
  for (let i = 0; i < N; i++) {
    if (SortA[i] != SortA[i + 1]) {
      ans -= (cnt * (cnt - 1)) / 2;
      cnt = 1;
    } else {
      cnt++;
    }
  }

  console.log(ans);
};
